var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", " You may rely on it.", "As I see it, yes.",
                "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
                "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", 
                "Outlook not so good.", "Very doubtful."
]

function shake () {
    console.log("clicked");
    setTimeout(() => {
        document.querySelector(".ball").style.animation = "";
    }, 1100);
    document.querySelector(".ball").style.animation = "shake .9s ease-in-out 1 backwards";
}

function windowChange () {
    var i = answers[Math.floor(Math.random() * answers.length)];
    document.querySelector(".window").style.animation = "windowChange .25s linear 1 forwards";
    document.querySelector(".window").innerHTML = i;
}
