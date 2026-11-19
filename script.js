const pronouns = ["She/Her", "He/Him", "They/Them", "It/Its"]
const display = document.getElementById('roll');

function getPronouns() {
    let pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    display.textContent = pronoun;
}
