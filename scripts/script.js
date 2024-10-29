$(document).ready(function(){
    $(".carousel").slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      speed: 2000,
      dots: false,
      arrows: true,
      prevArrow: $(".carousel-nav-left"),
      nextArrow: $(".carousel-nav-right"),
      
    });
  });

  function redirectToWhatsApp() {
    const cep = document.getElementById('cep').value.trim(); // Remove espaços extras

    if (!cep) { // Verifica se o campo está vazio
        alert("Por favor, insira o seu CEP."); // Exibe uma mensagem de aviso
        return false; // Impede o envio e permanece na mesma página
    }

    const encodedMessage = encodeURIComponent(`Olá, gostaria de consultar a disponibilidade para o meu CEP: ${cep}`);
    const whatsappLink = `https://wa.me/558189289155?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank'); // Abre em uma nova aba
    return false; // Impede o envio convencional do formulário
}
  