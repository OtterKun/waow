const userData = {
  usrName: "",
  money: 100,
  timestamp: new Date().toISOString()
};

//Aqui eu quero carregar as informações do Json, por que? Eu quero que você possa sair e entrar do shop e do abode sem perder acesso as informações, tanto que é por isso que eu mudei o Json de um arquivo q vc baixa para localStorage, só tenho que descobrir como agr lmao
window.loadInfo = function () {  
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
  }
  //Aqui foi onde eu fiquei com bastente duvida do que tava fazendo. Infelizmente tive que usar do deepseek para me dar uma mão e achar o norte mas o ttldr é que isso vai verifcar se o dialogo esta na etapa de indicar o nome do usuário
  else if (dialog.textContent.trim() === "Then you must first tell me your Name:") {
    const userName = userInput.value.trim() || 'Stranger';
    //Aqui ta criando o Json para baixar posteriormente
    const userData = {
      usrName: userName,
      timestamp: new Date().toISOString()
    };
    //criando o Json
    localStorage.setItem('userData', JSON.stringify(userData));

    //auto explicatório porém bom saber que pode ser usada crase para strings permitindo ter apostrofe no meio de uma string sem quebrar a mesma, tentei usar com "" porém ai o ${userName} quebrou
    dialog.textContent = `I welcome thee, ${userName}! if it's treasure that thee seek, you must first prove thyself.`

    topText.textContent = `The mage ponders what he'll do to ${userName}`
    userInput.classList.add("hidden");  
  }
//  else if (dialog.textContent.includes("you must first prove thyself.")); {
//    dialog.textContent = "I'll summon a powerful foe, which thou must defeat in battle!"
}
