// Função para gerar um número aleatório entre 1 e 10
function sorteio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  // rank inicial do guerreiro
  let guerreiroRank = 0;
  // nome do guerreiro
  let guerreiro = "Conan";
  //rolagem de dado
  //let dado = sorteio();
  // tabela de monstros e seus respectivos poderes
  
  let monster = [
    ["Snake", 5, 2000],
    ["Dragon", 4, 2000],
    ["Ogro", 3, 2000],
    ["Mago", 4, 2000],
    ["Esqueleto", 6, 3000]
    ];
  
  //declaração do combate
  console.log('_________________________')
  console.log("Bem vindo ao combate!")
  console.log("Guerreiro " + guerreiro)
  console.log('_________________________\n')
  
  //batalha Snake
  let dado = sorteio();
  if (dado > monster[0][1]){
      console.log(`Você tirou ${dado} e derrotou o monstro Snake!`)
      guerreiroRank += monster[0][2]
      console.log("Seu rank subiu! Sua pontuação atual é de " + guerreiroRank + "\n")
  }
  else{
      console.log(`Você tirou ${dado} e não derrotou o monstro Snake \n`)
  }
  //batalha Dragon
  dado = sorteio();
  if (dado > monster[1][1]){
      console.log(`Você tirou ${dado} e derrotou o monstro Dragon!`)
      guerreiroRank += monster[1][2]
      console.log("Seu rank subiu! Sua pontuação atual é de " + guerreiroRank + "\n")
  }
  else{
      console.log(`Você tirou ${dado} e não derrotou o monstro Dragon \n`)
  }
  //batalha Ogro
  dado = sorteio();
  if (dado > monster[2][1]){
      console.log(`Você tirou ${dado} e derrotou o monstro Ogro!`)
      guerreiroRank += monster[2][2]
      console.log("Seu rank subiu! Sua pontuação atual é de " + guerreiroRank + "\n")
  }
  else{
      console.log(`Você tirou ${dado} e não derrotou o monstro Ogro \n`)
  }
  //batalha Mago
  dado = sorteio();
  if (dado > monster[3][1]){
      console.log(`Você tirou ${dado} e derrotou o monstro Mago!`)
      guerreiroRank += monster[3][2]
      console.log("Seu rank subiu! Sua pontuação atual é de " + guerreiroRank + "\n")
  }
  else{
      console.log(`Você tirou ${dado} e não derrotou o monstro Mago \n`)
  }
  //batalha Esqueleto
  dado = sorteio();
  if (dado > monster[4][1]){
      console.log(`Você tirou ${dado} e derrotou o monstro Esqueleto!`)
      guerreiroRank += monster[4][2]
      console.log("Seu rank subiu! Sua pontuação atual é de " + guerreiroRank + "\n")
  }
  else{
      console.log(`Você tirou ${dado} e não derrotou o monstro Esqueleto \n`)
  }
  
  //definir rank
  function determinarCategoria(xp) {
      switch (true) {
          case (xp < 1000):
              return "Ferro";
          case (xp >= 1001 && xp <= 2000):
              return "Bronze";
          case (xp >= 2001 && xp <= 5000):
              return "Prata";
          case (xp >= 5001 && xp <= 7000):
              return "Ouro";
          case (xp >= 7001 && xp <= 8000):
              return "Platina";
          case (xp >= 8001 && xp <= 9000):
              return "Ascendente";
          case (xp >= 9001 && xp <= 10000):
              return "Imortal";
          case (xp >= 10001):
              return "Radiante";
          default:
              return "Valor de XP inválido";
      }
  }
  let xp = guerreiroRank; // Altere o valor para testar
  let categoria = determinarCategoria(xp);
  
  //rank atual
  console.log('___________________________________')
  console.log("Você completou todas as batalhas.")
  console.log(`${guerreiro} seu rank agora é ${categoria}!!`)
  console.log("___________________________________")