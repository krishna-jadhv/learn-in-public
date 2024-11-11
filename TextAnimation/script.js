const compliments = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a vegetable, you’d be a cute-cumber!",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "If beauty were a crime, you’d be serving a life sentence.",
    "Do you believe in love at first sight, or should I walk by again?",
    "You must be a campfire because you’re hot and I want s'more.",
    "Is your name Google? Because you have everything I’m searching for.",
    "Excuse me, but I think you dropped something: my jaw.",
    "If kisses were snowflakes, I’d send you a blizzard.",
    "Are you Wi-Fi? Because I’m feeling a connection.","You have impeccable manners.",
    "I like your style.",
    "You're strong.",
    "Is that your picture next to 'charming' in the dictionary?",
    "Your kindness is a balm to all who encounter it.",
    "You are brave.",
    "You are beautiful on the inside and outside.",
    "You have the courage of your convictions.",
    "You're a great listener.",
    "Hipsters are probably jealous of how cool you arel",
    "There are so many different things that make you really interesting.",
    "You're inspiring.",
    "You're so thoughtful.",
    "When you make up your mind, nothing stands in your way.",
    "You seem to really know who you are.","I appreciate you.",
    "You are perfect just the way you are.",
    "You are enough.",
    "On a scale from 1 to 10, you're an 11.",
    "You've got all the right moves.",
    "Everything would be better if more people were like you.",
    "You are an incredible human.",
    "You're wonderful.",
    "You're one of a kind.",
    "Whoever raised you deserves a medal for a job well-done.",
    "Time spent with you is always worth it.",
    "In high school, I bet you were voted Best, period.",
    "If you were a scented candle, you'd be the rare one that actually smells like what it's supposed to.",
    "There's ordinary, and then there's you.",
    "You're even better than a unicorn because you're real",
    "You're really something special.",
];

document.querySelector('.btn').addEventListener('click', function() {
    const textElement = document.querySelector('.text');
    
    textElement.style.animation = 'none';
    void textElement.offsetHeight; 
    textElement.style.animation = '';

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    textElement.innerHTML = randomCompliment;
    
    textElement.style.animation = 'typing 2s steps(30, end), cursor .4s step-end infinite alternate';
});
