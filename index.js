// windows aqui é uma variavel/declaração global para que em /mageabode.html ela possa ser chamada, nesse caso o nome dela vai ser nextDialog e ela chama a função abaixo
window.nextDialog = function () {
  //Aqui a const dialog esta declarando que ela é == o valor do paragrafo com a classe dialog no /mageabode.html
  const dialog = document.getElementsByClassName('dialog')[0];
  const input = document.getElementsByClassName('hidden')[0];
  console.log(dialog.textContent);
  //aqui ta a parte que eu apanhei um pouco, o if ta checando se o dialog.textContent que nesse caso é se o conteudo do paragrafo com classe dialog é == ao dialogo inicial, porém, se fosse só checkar não ia dar boa, então o que precisou ser feito, um trim e === para pegar só o que esta escrito de fato e o === para ter certeza, eu acho que == daria para o gasto mas como deu certo com === vou deixar assim.
  if (dialog.textContent.trim() === "Welcome Stranger, I see that you seek treasures.") {
    dialog.textContent = "Then you must first tell me your Name:"
    input.classList.toggle("hidden");
    console.log(dialog.textContent)
  }
}
