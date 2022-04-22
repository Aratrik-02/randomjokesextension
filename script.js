fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const joke = jokeData.attachments[0].text;
        let jokElem = document.getElementById('jok-el');
        jokElem.innerText = joke;
    })
function random_bg_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";  
        document.body.style.background = bgColor;
        } 
random_bg_color();
