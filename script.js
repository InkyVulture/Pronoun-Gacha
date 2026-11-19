const pronouns = ["She/Her", "He/Him", "It/Its", "They/Them", "He/Her", "She/They", "He/They", "Ey/Em", "Ze/Zir", "One/Ones", "Xie/Hir", "Xe/Xem", "Any", "Fae/Faer", "None (Name)", "All Of Them (Same Time)", "None (Do Not Perceive Me)", "Petal/Petals", "Hy/Hymns", "Mirror Pronouns", "Bun/Buns", "Gem/Gems", "Flare/Flares", "Ar/Arsos", "Bat/Bats", "Claw/Claws", "Thorn/Thorns", "Stag/Stags", "Halo/Halos", "Lem/Lems", "Snow/Snows", "Star/Stars", "Skull/Skulls", "Sylv/Sylvs", "Umbre/Umbres", "Vee/Vees", "Dead/Deads", "Gore/Gores", "Dae/Daem", "Blood/Bloods", "Hound/Hounds", "Necro/Necroms", "Nycto/Nyctos", "Sin/Sins", "Slime/Slimes", "Wer/Weres", "Moth/Moths", "Drago/Dragos"]
const display = document.getElementById('roll');

function getPronouns() {
    let pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    display.textContent = pronoun;
}
