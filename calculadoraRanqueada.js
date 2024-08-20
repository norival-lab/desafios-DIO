function matchs(win, lose){
    console.log("Você tem um total de " + win + " vitórias.")
    console.log("Você tem um total de " + lose + " derrotas.")
    let totalPoints = win - lose
    return totalPoints
}

let rankedWin = matchs(50, 15)

function rankedPlace(rankedWin){
    switch(true){
        case (rankedWin < 10):
            return "Ferro";
        case (rankedWin >= 11 && rankedWin <= 20):
            return "Bronze";
        case (rankedWin >= 21 && rankedWin <= 50):
            return "Prata";
        case (rankedWin >= 51 && rankedWin <= 80):
            return "Ouro";
        case (rankedWin >= 81 && rankedWin <= 90):
            return "Diamante";
        case (rankedWin >= 91 && rankedWin <= 100):
            return "Lendário";
        case (rankedWin >= 101):
            return "Imortal"
        default:
            return "Partidas insuficientes!"
    }
}

let rankPlacement = rankedPlace(rankedWin);

console.log("____________________________________")
console.log(`Com esse total de vitórias (${rankedWin})`)
console.log(`Você esta no rank ${rankPlacement}!`)
    
    
