let randomAffirmation;
const affirmations = [
    "It's okay to feel what I'm feeling, and I am allowed to take things one step at a time.",
    "I am doing my best, and that is enough for today.",
    "My emotions are valid, but they do not define me.",
    "I am not alone in this, and I can ask for support when I need it.",
    "This moment is difficult, but it will pass, and I will find peace again.",
    "I have survived difficult times before, and I will make it through this as well.",
    "It's okay to rest and take care of myself; healing takes time.",
    "I choose to focus on small moments of calm and clarity.",
    "I am stronger than I realize, and every day, I am healing.",
    "I trust that with time and patience, I will feel better again."
];

function showaffirmation(){
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    alert(randomAffirmation);
}

console.log(alert("hi"));