// Create variables for types an others 
const apiBtn = document.getElementById('api-btn')
const name_pokemon = document.getElementById('name')
const type_pokemon = document.getElementById('type')
const life_pokemon = document.getElementById('life')
let search = document.getElementById('api-btn')



// create action for button api
apiBtn.addEventListener('click', search);
// Created conexion in API with mehod Get
const getSearchId = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}` //we attract the variable 
    const rest = await fetch(url)
    const poke = await rest.json()
    // We attract the creator of pokemons tags
    generatePokemon(poke)
}

// Function search
search.addEventListener('click', e => {
    const textPo = document.getElementById('id').value;
    getSearchId(textPo);
})

//Function generate of pokemons
function generatePokemon(poke) {
    const name = poke.name; //
    const type = poke.types[0].type.name;
    const hp = poke.stats[0].base_stat
    name_pokemon.innerText = `Name: `+name;
    type_pokemon.innerText = `Type: `+type;
    life_pokemon.innerText = `Hp: `+hp;


    console.log(poke);

}

