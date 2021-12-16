const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

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

        textNode.options.forEach(option => {
            if(showOption(option)){
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                optionButtonsElement.appendChild(button)
            }
        })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}
    

function selectOption(option){
    const nextTextNodeId = option.nextText
    if(nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Despiertas en una pieza que parece de hospital pero con una luz pobre que ilumina la cama de metal con sabanas blancas en la que yaces. Notas un olor peculiar a polvo y suciedad...',
        options: [
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
        text: 'Te levantas con el cuerpo adolorido y un poco mareado, miras por la ventanilla de la puerta donde hay un corredor vacio y oscuro, escuchas gritos desgarradores a lo lejos...',
        options: [
            {
                text: 'Tomar la llave',
                setState: { llave: true},
                nextText: 4
            },
            {
                text: 'Gitar por ayuda',
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: 'Escuchas pasos que se acercan al frente de tu puerta, ésta se abre y aparece una enfermera con sangre en su delantal. Se acerca a ti con una jeringa y te inyecta un tranquilizante, te desmayas.',
        options: [
            {
                text: 'Empezar otra vez',
                nextText: -1
            }
        ]
    },
    {
        id: 4,
        text: 'Tomas la llave e intentas abrir la puerta de metal oxidado que parece apernada a la pared, no se mueve. *Guardas la llave en tu bolsillo*',
        requiredState: (currentState) => currentState.llave,
        options: [
            {
                text: ''
            }
        ]
    }

]

startGame()