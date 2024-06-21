//Solution 1

class SuperHero {
    constructor(name, secretIdentity, powers, weakness) {
        this.name = name
        this.secretIdentity = secretIdentity
        this.powers = powers
        this.weakness = weakness
    }
   
    usePower(powerName) {
        console.log(`${this.name} is using ${powerName} power`)
    }
   
    revealIdentity() {
        console.log(`${this.name}'s secret identity is ${this.secretIdentity}`)
    }
}
   
class SuperVillain extends SuperHero {
    constructor(age) {
        super('Harry', 'spiderGirl', ['fly', 'disappears'], 'block kick');
        this.age = age
    }
}
   
const superVillain1 = new SuperVillain(30)
const superVillain2 = new SuperVillain(20)
const superVillain3 = new SuperVillain(10)
   
const superHero1 = new SuperHero('Joan', 'Dragon girl', ['fire spill', 'fast thinking', 'great alertness'], 'Too kind')
const superHero2 = new SuperHero('Mason', 'Spider boy', ['jump', 'sharper eyesight','best blocker'], 'screens')
const superHero3 = new SuperHero('Yola', 'batgirl', ['run', 'bicycle kick', 'water spiller', 'fire spiller'], 'the boss')
   
const superHeroes = [superHero1, superVillain1, superHero2, superVillain2, superHero3]
   
superHeroes.forEach(hero => {
    console.log(hero.name)
    hero.revealIdentity()
    if (hero instanceof SuperVillain) {
        hero.usePower(hero.powers[0])
    }
})
   
// console.log(SuperVillain)
console.log(SuperHero)




// Solution 2

//Object Creation Basics and Methods and Functionality

let superhero = {
    name: "Harry",
    secretIdentity: "Harrizle Trey",
    powers: ["super speed", "time travel", "phasing"],
    weakness: "love",
    usePower: function(powerName) {
        console.log(`${this.name} uses ${powerName}!`);
    },
    revealIdentity: function() {
        console.log(`My secret identity is ${this.secretIdentity}.`);
    }
};

superhero.usePower("super speed");
superhero.revealIdentity();

class Superhero {
    constructor(name, secretIdentity, powers, weakness) {
        this.name = name;
        this.secretIdentity = secretIdentity;
        this.powers = powers;
        this.weakness = weakness;
    }
    usePower(powerName) {
        console.log(`${this.name} uses ${powerName}!`);
    }
    revealIdentity() {
        console.log(`My secret identity is ${this.secretIdentity}.`);
    }
}



let mason = new Superhero("mason", "Aryee Doku", ["intelligence", "martial arts"], "screens");
let hero = new Superhero("hero", "Isaac Henry", ["super strength", "flight", "x-ray vision"], "anger");

mason.usePower("intelligence");
hero.revealIdentity();

let characters = [
    new Superhero("Iron Lady", "Yola Yolly", ["genius intellect", "powered armor suit"], "ego"),
    new Superhero("Lion QUeen", "Joan Joan", ["super strength", "thunder control"], "arrogance"),
    { name: "Fire Woman", secretIdentity: "Janice Williams", powers: ["chaos", "intelligence"], weakness: "water" }
];

// Log all superheroes and supervillains
characters.forEach(character => {
    console.log(`${character.name} is a superVillian.`);
});

// Create an array of just the superheroes
let superheroes = characters.filter(character => character instanceof Superhero);

console.log(superheroes);

// Create an array of character names
let superVillains = characters.map(character => character.name);

console.log(superVillains);


