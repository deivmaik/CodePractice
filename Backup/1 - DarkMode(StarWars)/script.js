// const toggle = document.getElementById('toggle')

// toggle.addEventListener('change', () => {
//     document.body.classList.toggle('luke')
// })



function myToggle() {
    let x = document.getElementById("lukesReaction");
    if (x.innerHTML === "Noooooooooooo!!!") {
        x.innerHTML = " No, I am your father.";
    } else {
        x.innerHTML = 'Noooooooooooo!!!';
    }
}
// ^ This took quiet a bit to do, my first thought was use different types of html data-theme, but I figured adding some js would be a better aproach, it was worth the Time.




const checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'luke')
    } else {
        document.documentElement.setAttribute('data-theme', 'anakin')
    }
}
)

// Added two different themes and used js to help switch between them.






// function myToggleDesc() {
//     let x = document.getElementById("ObiTheLiar");
//     if (x.innerHTML === 'Obi-Wan (Ben) Kenobi knew that Darth Vader was Anakin Skywalker,ergo<br> Luke’s Dad, and instead of telling him that he sends him <br>in a quest to kill his own father.Talk about priorities, right?') {
//         x.innerHTML = 'The line “ Luke, I am your father “ is never said by Darth Vader in <i>The Empire Strikes Back.</i><br><br>What he actually says is “ No, I am your father “ .';
//     } else {
//         x.innerHTML = 'Obi-Wan (Ben) Kenobi knew that Darth Vader was Anakin Skywalker,ergo<br> Luke’s Dad, and instead of telling him that he sends him <br>in a quest to kill his own father.Talk about priorities, right?';
//     }
// }

// ^ Yeah, it didnt go as I planned so I may just leave it with the original text 


// const on = "/img/darthvader.svg";
// const off = "/img/lukeskywalker.svg";
// let state = false;
// let img = document.getElementById("darthVader");

// img.onclick = function () {
//     if (state) {
//         img.src = off;
//         state = false;
//     }
//     else {
//         img.src = on;
//         state = true;
//     }
// }

// ^ thought about this but it only works if you click on the character and not directly from the toggle itself.

// I guess I may need more practice with js
