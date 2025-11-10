function enviarWhatsApp(plano, preco) {
  const telefone = "5581984754758"; // substitua pelo número real
  const mensagem = `Olá! Gostaria de contratar o plano ${plano} no valor de R$ ${preco}/mês da Vila Real Telecom.`;
  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}



function enviarMensagem(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome} (%20${email}) e gostaria de falar com a Vila Real Telecom. %0A%0A${mensagem}`;
  const telefone = "5581993831906";
  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${texto}`;

  window.open(url, "_blank");
}
