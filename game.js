const textElement = document.getElementById('text')
const optionButtons = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
        textElement.innerText = textNode.text
        while(optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }
}

function selectOption(option){

}

const textNodes = [
    {
        id: 1,
        text: 'Despiertas en una pieza que parece de hospital pero con una luz pobre que ilumina la cama de metal con sabanas blancas en la que yaces. Notas un olor peculiar a polvo y suciedad...',
        opciones: [
            {
                text: 'Levantarse de la cama',
                setState: { levantarse: true},
                nextText: 2
            },
            {
                text: 'Gritar por ayuda',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Te levantas con el cuerpo adolorido y un poco mareado, miras por la ventanilla de la puerta donde hay un corredor vacio y oscuro, escuchas gritos desgarradores a lo lejos...'
    },
    {
        id: 3,
        text: 'Escuchas pasos que se acercan al frente de tu puerta, ésta se abre y aparece una enfermera con sangre en su delantal. Se acerca a ti con una jeringa y te inyecta un tranquilizante, te desmayas.'
    },

]

startGame()