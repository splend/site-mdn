let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'imagens/sabo.png') {
    myImage.setAttribute('src', 'imagens/dowload2.jpg');
  } else {
    myImage.setAttribute('src', 'imagens/sabo.png')
  }
};

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName() {
  let myName = prompt('Por favor digite seu nome:');
  if(!myName){
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = `Eren, ${myName}`;
  }
}
if (!localStorage.getItem('name')){
  setUserName();//esta funcao serve caso nao exista um nome entao ela ira crialo
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `Eren, ${storedName}`
}
myButton.onclick = () => {
  setUserName();//aqui pedira caso o usuario queira trocar de nome, outro nome
};//caso clique em cancelar ir criar um nome null(ausencia de um valor)