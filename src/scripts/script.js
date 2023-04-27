async function searchPokemon(i) {
  let url = `https://pokeapi.co/api/v2/pokemon/${i}`
  await fetch(url)
    .then(response => response.json())
    .then(data => {
      let numero ;
      if (i < 10) {
         numero = `00${i}`
      } else if (i > 9 && i < 100) {
         numero = `0${i}`
      } else {
        numero = `${i}`
      }
      renderPokes(numero,data.name,data.sprites.front_default)
    })
    .catch(error => console.error(error))
}

  
async function geraPokemons(){

  for(let i = 1;i < 1009;i++){
   await  searchPokemon(i)
  }
}

async  function renderPokes(numeroPoke,namePoke,urlImg){
  // Cria o elemento li
const listItem = document.createElement('li');
listItem.classList.add('main__list-item');

// Cria o elemento h1 e adiciona a classe
const number = document.createElement('h1');
number.textContent = numeroPoke;
number.classList.add('main__list-item-number');
listItem.appendChild(number);

// Cria o elemento img e adiciona a classe e a fonte
const image = document.createElement('img');
image.setAttribute('src', urlImg);
image.classList.add('main__list-item-image');
listItem.appendChild(image);

// Cria o elemento span e adiciona a classe
const name = document.createElement('span');
name.textContent = namePoke;
name.classList.add('main__list-item-name');
listItem.appendChild(name);

// Adiciona o elemento li à lista (supondo que haja uma lista com a classe 'main__list')
const list = document.querySelector('.main__list');
list.appendChild(listItem);

}


  geraPokemons()
    // searchPokemon(1)

  