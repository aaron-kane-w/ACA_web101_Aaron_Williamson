// Setting body background
const body = document.querySelector('body')
body.style.background = '#fff'

// Setting styles for h1
const heading = document.querySelector('h1')
heading.style.fontFamily = 'Arial'
heading.style.textAlign = 'center'
heading.style.fontSize = '4rem'
heading.style.padding = '1rem'

// Setting styles for #main id
const main = document.getElementById('main')
main.style.maxWidth = '690px'
main.style.margin = '0 auto'

// Setting styles for .board class
const board = document.querySelector('.board')
board.style.height = '690px'
board.style.display = 'flex'
board.style.flexDirection = 'column'
board.style.border = '2px solid #000'

// Setting styles for all .row classes
const row = document.querySelectorAll('.row')
row.forEach(function(row){
  row.style.display = 'flex'
  row.style.flex = '1'
})

// Setting styles for all .clickBox classes
const clickBox = document.querySelectorAll('.clickBox');
clickBox.forEach(function(clickBox){
  clickBox.style.height = '100%'
  clickBox.style.width = '100%'
  clickBox.style.border = '2px solid #000'
  clickBox.style.cursor = 'pointer'
  clickBox.style.display = 'flex'
  clickBox.style.justifyContent = 'center'
  clickBox.style.alignItems = 'center'
  clickBox.style.fontSize = '3rem'
})

// Creating X & O rules for game play
function addGamePiece (selectedElement){
  let xo = document.createElement('h2')
  
  selectedElement.appendChild(xo)

  if (selectedElement.innerText === 'X'){
    selectedElement.innerText = 'O'
    selectedElement.style.color = 'red'
  } else if (selectedElement.innerText === 'O'){
    selectedElement.innerText = 'X'
    selectedElement.style.color = '#000'
  } else {
    selectedElement.innerText = 'X'
  }

  
  console.log(selectedElement.innerText);
}







