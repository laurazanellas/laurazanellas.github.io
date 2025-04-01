document.addEventListener('DOMContentLoaded', function() {
  const botoes = document.querySelectorAll('.botao-votar');
  
  botoes.forEach(botao => {
    botao.addEventListener('click', function() {
      alert("Boa escolha!");
    });
  });
});

