
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

