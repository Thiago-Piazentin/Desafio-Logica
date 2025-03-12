let nickname = "Daflores"
let xp = 3001
console.log("Bem vindo de volta " + nickname)

console.log("Deseja iniciar uma rankeada ?")
let start = true
if (start){
    console.log("Partida iniciada")
}

let ranked
if(xp < 1000) {
    ranked = "Ferro"
}
else if(xp <= 2000){
    ranked = "Bronze"
}
else if(xp <=3000){
    ranked = "Prata"
}


else if(xp <= 5000){
    ranked = "Ouro"
}
    

else if(xp <= 7000){
    ranked = "Platina"
}
    

else if(xp <=9000){
    ranked = "Diamante"
}

else if(xp <=11000){
    ranked = "Ascendente"
}

else if(xp <=15000){
    ranked = "Imortal"
}

else {
     ranked = "Randiante"
}
   
console.log ("O Jogador " + nickname + " está no Ranking " + ranked)