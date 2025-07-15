button = document.getElementById('btn')
let count = 0 

button.addEventListener('click', () => {
    count ++
    button.innerText = count
    console.log('Test')
    console.log(button.innerText)
})