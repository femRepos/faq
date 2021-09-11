
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.target.nextSibling.nextElementSibling.classList.toggle('open')
    })
})