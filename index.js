const inputValue = document.querySelector('.input-value')
const currencySelection = document.querySelector('.currency-selection')
const readyResult = document.querySelector('.result')

inputValue.addEventListener('input', OnInputEnter)
currencySelection.addEventListener('change', OnSelectionChange)

function getInput() {
    return {
        uah: Number(inputValue.value),
        currency: currencySelection.value
    }
}

function OnInputEnter() {
    const result = calculate(getInput())
    readyResult.innerText = result
}

function OnSelectionChange() {
    const result = calculate(getInput())
    readyResult.innerText = result
}

