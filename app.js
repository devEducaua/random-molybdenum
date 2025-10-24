const btn = document.getElementById("btn");
const p = document.getElementById("p");

// Toggle Theme
const toggletheme = document.getElementById("toggletheme");
let dark = localStorage.getItem("dark");
function enable() {
    document.body.classList.add("dark")
    localStorage.setItem('dark', 'true')
}
function disable() {
    document.body.classList.remove('dark')
    localStorage.setItem("dark", "false")
}

if (dark === "true") enable();
toggletheme.addEventListener("click", () => {
    dark = localStorage.getItem("dark");
    dark != "true" ? enable() : disable();
})

// Logic
const map = new Map([
    [0, "molibdênio"],
    [1, "seabórgio"],
    [2, "tecnécio"],
    [3, "tungstênio"]
]);

let currentSession = 0;

function generateBySession(session) {
    let isSpecial = false;
    p.classList.remove("special");

    const specialPossibility = 1000;

    const num = Math.floor(Math.random() * specialPossibility) +1
    if (num < 2) isSpecial = true;

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const v1 = vowels[Math.floor(Math.random() * vowels.length)];
    let v2 = vowels[Math.floor(Math.random() * vowels.length)];
    const v3 = vowels[Math.floor(Math.random() * vowels.length)];
    let v4 = vowels[Math.floor(Math.random() * vowels.length)];
    let v5 = vowels[Math.floor(Math.random() * vowels.length)];

    if (v1 == v2 && v2 == v3 && v3 == v4 && v4 == v5) isSpecial = true;

    let word = "";

    switch (session) {
        case "molibdênio":
            word = `m${v1}l${v2}b${v3}d${v4}n${v5}`;
            break;

        case "seabórgio":
            if (v1 == v2) v2 = "";
            if (v4 == v5) v5 = "";
            word = `s${v1}${v2}b${v3}rg${v4}${v5}`;
            break;

        case "tecnécio":
            if (v3 == v4) v4 = "";
            word = `t${v1}cn${v2}c${v3}${v4}`
            break;

        case "tungstênio":
            if (v3 == v4) v4 = "";
            word = `t${v1}ngst${v2}n${v3}${v4}`;
            break;
    }

    if (num < 2) word = session;

    if (isSpecial) {
        alert("you gotta a special word!");
        p.classList.add("special");
        currentSession++;
        if (currentSession == map.size) currentSession = 0;
    }

    return word;
}

btn.addEventListener("click", () => {
    const word = generateBySession(map.get(currentSession));

    p.textContent = word;
})
