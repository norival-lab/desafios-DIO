class combatClass{
    constructor(charName, charIdade, charClass, classAtack){
        this.charName=charName
        this.charIdade=charIdade
        this.charClass=charClass
        this.classAtack=classAtack
    }
    escrever(){
        console.log(`O ${this.charClass} atacou usando ${this.classAtack}`)
    }
}

let classMage= new combatClass ("Wizard", "99", "mago", "magia")
let classWarrior= new combatClass ("Conan", "45", "guerreiro", "espada")
let classMonk= new combatClass ("Monk", "77", "monge", "punhos")
let classNinja= new combatClass ("Jiraya", "35", "ninja", "shuriken")

classMonk.escrever()