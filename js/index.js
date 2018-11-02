document.querySelectorAll(".digits, .operator")
    .forEach(el => el.addEventListener("click", digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector(".display");
    display.value += target.innerText;
}

document.querySelector(".restart")
    .addEventListener("click", restart);

function restart() {
    const display = document.querySelector(".display");
    display.value = null;
}

document.querySelector(".equal")
    .addEventListener("click", equal);

function equal() {
    const dsplay = document.querySelector(".display");
    dsplay.value = eval(dsplay.value);
}

document.querySelector(".degree")
    .addEventListener("click", degree);

function degree() {
    const dsplay = document.querySelector(".display");
    dsplay.value = (dsplay.value) ** 2;
}

document.querySelector(".square_root")
    .addEventListener("click", square_root);

function square_root() {
    const dsplay = document.querySelector(".display");
    dsplay.value = Math.sqrt(dsplay.value);
}

document.querySelector(".square_root")
    .addEventListener("click", square_root);

function square_root() {
    const dsplay = document.querySelector(".display");
    dsplay.value = Math.sqrt(dsplay.value);
}

document.querySelector(".percent")
    .addEventListener("click", percent);

function percent() {
    const dsplay = document.querySelector(".display");
    dsplay.value = (dsplay.value) / 100;
}
