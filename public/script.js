//função sendo usada no index.html
async function buscaPokemon() {
    try {
        let nomePokemon = document.getElementById("nomePokemon").value.toLowerCase()
        const pokemonBusca = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        const pokemonInfo = pokemonBusca.json()
        console.log(await pokemonInfo)
        return await pokemonInfo        
    } catch (error) {
        alert('Insira um nome pokemon correto')
    }
};

//função sendo usada no index.html
async function mostraPokemon() {
     if(document.getElementById("nomePokemon").value == '') {
        document.getElementById("mostraNomePokemon").innerHTML = 'Insira um nome pokemon válido'
        document.getElementById("fotoPokemon").src = ''
    } else {
        let pokemon = await buscaPokemon();
        document.getElementById("mostraNomePokemon").innerHTML = pokemon.name.toUpperCase()
        document.getElementById("fotoPokemon").src = pokemon.sprites.front_default

    }
}



async function buscaPokedex() {
    try {
        const pokemonBusca = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`)      
        const pokemonInfo = pokemonBusca.json()
        console.log(await pokemonInfo)
        return await pokemonInfo       
    } catch (error) {
        alert('Insira um nome pokemon correto')
    }
};



async function geraPokedex(){
    const pokedex = await buscaPokedex()
    console.log(pokedex.results[0].name)

    try {
        for(let i = 0;i < 5; i++) {
            let nomepokemon = pokedex.results[i].name
            //console.log('aqui')
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomepokemon}`)
            const pokemonjson = await pokemon.json()
            console.log(pokemonjson.name)
            const br = document.createElement('br')
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = `${pokemonjson.sprites.front_default}`
            div.innerHTML = `${pokemonjson.name}`
            div.id = "pokedexnome"
            img.id = "pokedeximg"
            
            document.body.appendChild(div)
            document.body.appendChild(img)          
            document.body.appendChild(br)
        }
        
    } catch (error) {  
        console.log(error)
        
    }
}