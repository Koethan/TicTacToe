const squareArr = Array.from(document.querySelectorAll('.square'))
squareArr.forEach(element => element.addEventListener('click', takeTurn))
let numTurn = 1

function takeTurn(click){
    const clickTarget = click.target
    const selectedSquareID = click.target.id
    const shapeArea = document.querySelector(`#${selectedSquareID}`).firstElementChild
    clickTarget.classList.toggle('unselected')
    if(!clickTarget.classList.contains('unselected')){
        if(numTurn%2 != 0){
            console.log(numTurn)
            shapeArea.innerText = 'X'
            numTurn++
        }
        else{
            console.log(numTurn)
            shapeArea.innerText = 'O'
            numTurn++
        }
    }
    else{
        numTurn--
        console.log(numTurn)
        shapeArea.innerText = ''
    }
}