const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.progress__circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    // This calculates the lenght in percentage to be 33% each time 

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

    console.log(currentActive)

}

let pitbull = document.getElementById('toggleImage')

// if (currentActive === 4) {
//     document.getElementById("imageid").src = "https://p.kindpng.com/picc/s/374-3741435_pitbull-hd-png-download.png";
// } else {
//     document.getElementById("imageid").src = "https://raw.githubusercontent.com/deivmaik/365DaysOfCode/6-ProgressBar(Pitbull)/rumba.png";
// }


function toggleImage() {
    let img1 = "https://p.kindpng.com/picc/s/374-3741435_pitbull-hd-png-download.png",
        img2 = "https://raw.githubusercontent.com/deivmaik/365DaysOfCode/6-ProgressBar(Pitbull)/rumba.png";
    let imgElement = document.getElementById('toggleImage')

    imgElement.src = (imgElement.src === img1) ? img2 : img1
}
