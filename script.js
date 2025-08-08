
document.getElementById("btn").addEventListener("click", () => {
    const p = document.getElementById("p");
    
    let word = "";

    const vowels = ['a', 'e', 'u', 'i', 'o'];
    const v1 = vowels[Math.floor(Math.random() * vowels.length)];
    const v2 = vowels[Math.floor(Math.random() * vowels.length)];
    const v3 = vowels[Math.floor(Math.random() * vowels.length)];
    const v4 = vowels[Math.floor(Math.random() * vowels.length)];
    const v5 = vowels[Math.floor(Math.random() * vowels.length)];

    if (Math.floor((Math.random() * 100) + 1) < 2) {
        word = "molibdênio";
    } else {
        word = `m${v1}l${v2}b${v3}d${v4}n${v5}`;
    }

    if (v1 == v2 && v2 == v3 && v3 == v4 && v4 == v5 || word == "molibdênio") alert("You get a special word");

    p.textContent = word;

})
