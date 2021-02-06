
const buttons = document.querySelectorAll('.ripple')


buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        // ^ This is to know exactly where is the click being made .

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // ^ This is to know exactly the position of the button .

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // ^ This calculates where does the button start to where its clicked.

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        // ^This is to create the span in the class circle 
        this.appendChild(circle)
        // when using .this we need to use the function as it is and not arrow function

        setTimeout(() => circle.remove(), 500)
        // When we click it creates a new circle everytime in the DOMError, with this function we can delete it after a period of tiem
    })
})