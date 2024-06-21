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
