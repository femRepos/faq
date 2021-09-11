const buttons = document.querySelectorAll('button');

// Let all buttons listen for the click event
buttons.forEach(button => {
    button.addEventListener('click', togglePanel)
})

function togglePanel(event) {
    let panel = event.target.nextElementSibling
    
    // add additional 30px to max-height to accomodate for margins & paddings
    panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + 30 + 'px'
    event.target.classList.toggle('btn--active')

    // make sure all other panels are closed
    buttons.forEach(one => {
        if (one != event.target && one.nextElementSibling.style.maxHeight && panel.style.maxHeight){  
            one.nextElementSibling.style.maxHeight = null
            one.classList.toggle('btn--active')
        }
    })
}