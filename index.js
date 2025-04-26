//Aqui eu vou carregar as informações que estão no localStorage para poder usar elas como base para em qual ponto do dialogo tem que estar, quais itens tem coisas do tipo!
window.loadInfo = function () {
  const name = localStorage.getItem('userName');  
  const dialog = document.getElementsByClassName('dialog')[0];
  const topText = document.getElementById('topText');

  localStorage.setItem('money', '100');
  const money = localStorage.getItem('money');
  console.log("texto", money);

  if (name != "Stranger" && name != null) {  
    console.log(name)

    dialog.textContent = `I welcome thee, ${name}! if it's treasure that thee seek, you must first prove thyself.`
    topText.textContent = `The mage ponders what he'll do to ${name}`
  }
}

window.reset = function()  {  
  console.log("Past the .clear");
  console.log(name);
  localStorage.clear();
  location.reload();
}
// windows aqui é uma variavel/declaração global para que em /mageabode.html ela possa ser chamada, nesse caso o nome dela vai ser nextDialog e ela chama a função abaixo
window.nextDialog = function () {
  //Aqui a const dialog esta declarando que ela é == o valor do paragrafo com a classe dialog no /mageabode.html
  const dialog = document.getElementsByClassName('dialog')[0];
  const input = document.getElementsByClassName('hidden')[0];
  const userInput = document.getElementById('usrName');
  const topText = document.getElementById('topText');
  //aqui ta a parte que eu apanhei um pouco, o if ta checando se o dialog.textContent que nesse caso é se o conteudo do paragrafo com classe dialog é == ao dialogo inicial, porém, se fosse só checkar não ia dar boa, então o que precisou ser feito, um trim e === para pegar só o que esta escrito de fato e o === para ter certeza, eu acho que == daria para o gasto mas como deu certo com === vou deixar assim.
  if (dialog.textContent.trim() === "Welcome Stranger, I see that you seek treasures.") {
    dialog.textContent = "Then you must first tell me your Name:"
    input.classList.remove("hidden");
    return null;
  }
  //Aqui foi onde eu fiquei com bastente duvida do que tava fazendo. Infelizmente tive que usar do deepseek para me dar uma mão e achar o norte mas o ttldr é que isso vai verifcar se o dialogo esta na etapa de indicar o nome do usuário
  else if (dialog.textContent.trim() === "Then you must first tell me your Name:") {
    const userName = userInput.value.trim() || 'Stranger';
    //Aqui ta criando o Json para baixar posteriormente
    //criando o Json
    localStorage.setItem('userName', userName);

    //auto explicatório porém bom saber que pode ser usada crase para strings permitindo ter apostrofe no meio de uma string sem quebrar a mesma, tentei usar com "" porém ai o ${userName} quebrou
    dialog.textContent = `I welcome thee, ${userName}! if it's treasure that thee seek, you must first prove thyself.`

    topText.textContent = `The mage ponders what he'll do to ${userName}`
    userInput.classList.add("hidden");  
    return null;
  }
  else(dialog.textContent.includes("you must first prove thyself.")); {
    dialog.textContent = "I'll summon a powerful foe, which thou must defeat in battle!"
    return null;
  } 
}

window.buyItem = function () {
  const item = document.getElementById('winButton');
  const currentMoney = localStorage.getItem('money');
  let pocketMoney = Number(currentMoney);
  console.log(typeof currentMoney);

  if (item.textContent.trim() === "Win Button - 100") {
    if (Number(currentMoney) >= 100) {
      pocketMoney = pocketMoney - 100;
      pocketMoney.toString();
      localStorage.setItem('money', pocketMoney);
      console.log(pocketMoney);
    }    
  }
}
