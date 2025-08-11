let specialWord = false;

document.getElementById("btn").addEventListener("click", () => {
    const p = document.getElementById("p");
    p.style.fontFamily = "monospace";
    p.style.fontStyle = "normal"

    const vowels = ['a', 'e', 'u', 'i', 'o'];
    let word = "";

    
    const v1 = vowels[Math.floor(Math.random() * vowels.length)];
    const v2 = vowels[Math.floor(Math.random() * vowels.length)];
    const v3 = vowels[Math.floor(Math.random() * vowels.length)];
    const v4 = vowels[Math.floor(Math.random() * vowels.length)];
    const v5 = vowels[Math.floor(Math.random() * vowels.length)];

    const num = Math.floor(Math.random() * 1000) + 1;

    if (specialWord) {
        if (num < 2) {
            word = "seabórgio";
        } else {
            word = `s${v1}${v2}b${v3}rg${v4}${v5}`

        }
    } else {
        if (num < 2) {
            word = "molibdênio";
        } else {
            word = `m${v1}l${v2}b${v3}d${v4}n${v5}`;
        }
    }
    
    if (v1 == v2 && v2 == v3 && v3 == v4 && v4 == v5) {
        alert("You get a special word");
        p.style.fontFamily = "Times New Roman";
        p.style.fontStyle = "italic";
        specialWord = true;
    }

    p.textContent = word;
})
