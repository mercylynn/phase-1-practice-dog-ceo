console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds;

  document.addEventListener('DOMContentLoaded' ,() => {

  })
  getAnimals();
  function getAnimals(){
    return fetch(imgUrl)
     .then(resp => resp.json())
     .then(dogs => {dogs.message.forEach(dogImage =>renderDogImage(dogImage))
     });
   }
  function renderDogImage(url){
    let animalImage=document.createElement('img')
    animalImage.src=url;
    document.querySelector("#dog-image-container").appendChild(animalImage);
    

  }
  function getBreed(){
    return fetch(breedUrl)
     .then(resp => resp.json())
    .then(dogBreed => {
    breeds = Object.keys(dogBreed.message);
   renderDogBreed(breeds);
     });
   }

   function renderDogBreed(breeds){
    breeds.forEach(breed => {
    let li = document.createElement("li");
    li.innerText =breed;
    document.querySelector("#dog-breeds").appendChild(li);
    li.addEventListener('click' ,(e) =>{
      if(e.target.style.color === 'salmon'){
        e.target.style.color = 'black'
      }else{
        e.target.style.color='salmon'
      }
    });
   })
}
getBreed();

document.querySelector('#breed-dropdown').addEventListener('change',(e) =>{
const letter= e.target.value
const filtereBreeds=breeds.filter(breed => breed.startsWith(letter))
let filtereBreedsList=document.createElement('li');
filtereBreedsList.innerText=filtereBreeds;
document.querySelector("#dog-breeds").innerHTML= ''
document.querySelector("#dog-breeds").appendChild(filtereBreedsList);  
    
})
