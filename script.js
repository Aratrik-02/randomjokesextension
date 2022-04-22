fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const joke = jokeData.attachments[0].text;
        let jokElem = document.getElementById('jok-el');
        jokElem.innerText = joke;
    })
