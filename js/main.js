// Create variables for types an others 
const pokemonContainer = document.querySelector(".poke-container")
const apiBtn = document.getElementById('api-btn')
const name_pokemon = document.getElementById('name')
const type_pokemon = document.getElementById('type')
const life_pokemon = document.getElementById('life')
let search = document.getElementById('api-btn')



// create action for button api
apiBtn.addEventListener ('click', search);
// Created conexion in API with mehod Get
const getSearchId = async (id) => {
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
        generatePokemon(data)
    });

    // const url = `https://pokeapi.co/api/v2/pokemon/${id}` //we attract the variable 
    // const rest = await fetch(url)
    // const poke = await rest.json()
    // We attract the creator of pokemons tags
    // generatePokemon(poke)
}

// Function search
search.addEventListener('click', e => {
    const textPo = document.getElementById('id').value;
    getSearchId(textPo);
})

//Function generate of pokemons
function generatePokemon(poke) {
    //Created card to pokemons
    const card = document.createElement('div')
    card.classList.add('pokemon-block')

    const spriteContainer = document.createElement('div') //Create div 
    spriteContainer.classList.add('image-container')

    const sprite = document.createElement('img')
    sprite.src = poke.sprites.front_default

    spriteContainer.appendChild(sprite); //Pokemon loanding

    const number = document.createElement('p')
    number.textContent = `#${poke.id.toString().padStart(3, 0)}` //Add number of pokemon
    
    const name_poke = document.createElement('p')
    name_poke.classList.add('name')
    name_poke.textContent = poke.name;

    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name_poke)
    
    // const type = poke.types[0].type.name;
    // const hp = poke.stats[0].base_stat
    // name_pokemon.innerText = `Name: `+name;
    // type_pokemon.innerText = `Type: `+type;
    // life_pokemon.innerText = `Hp: `+hp;


    pokemonContainer.appendChild(card)

}

