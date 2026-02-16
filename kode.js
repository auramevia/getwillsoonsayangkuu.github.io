function nextPage(num){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("show");
        p.classList.add("hidden");
    });

    document.getElementById("page"+num)
        .classList.remove("hidden");
    document.getElementById("page"+num)
        .classList.add("show");

    if(num === 2){
        startTyping();
        createHearts();
    }
}

/* efek ketik */
const text = `Aku tahu kamu pastii capee yaa sayanggkuu?.
tapi kamuu harus tetap semangat ya sayangggg.
istirahat yang cukup, minum obat, 
jangan lupa makann , selalu dijaga kesehatannya
dan jangan kecapekan yaa sayangkuu?.

Aku selalu doain kamuuu dari sinii supaya cepat sembuh,
yahh aku kangen lihat kamu senyum lagi sayanggg.
aku selalu ada buat kamuu penyuuu daratt.

Cepat sembuh ya sayanggg 🤍`;

let i = 0;
let started = false;

function startTyping(){
    if(started) return;
    started = true;

    function type(){
        if(i < text.length){
            document.getElementById("typedText")
                .innerHTML += text.charAt(i)
                .replace(/\n/g,"<br>");
            i++;
            setTimeout(type,30);
        }
    }
    type();
}

/* love jatuh */
function createHearts(){
    for(let i=0;i<30;i++){
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.animationDuration = 5 + Math.random()*5 + "s";
        heart.style.fontSize = 12 + Math.random()*20 + "px";
        document.getElementById("page2").appendChild(heart);
    }
}
