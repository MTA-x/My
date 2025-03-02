function showMessage() {
    document.getElementById("message").style.display = "block";
    createHeartExplosion();
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".heart-container").appendChild(heart);
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

function createHeartExplosion() {
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 100);
    }
}
