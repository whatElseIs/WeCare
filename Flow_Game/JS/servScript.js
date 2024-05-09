let timer;

const card = document.querySelector(".card__inner");
card.addEventListener("mouseenter", function (e) {
    clearTimeout(timer);
    timer = setTimeout(function() {
    card.classList.add('is-flipped');
    }, 400);
});
card.addEventListener("mouseleave", function (e) {
    clearTimeout(timer);
    card.classList.remove('is-flipped');
});
document.getElementById('game_button').addEventListener('click', function() {
    window.location.href = 'game.html';
    });
    document.getElementById('bkbtn_toservice').addEventListener('click', function() {
        window.location.href = '/Start.html';
        });