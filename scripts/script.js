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
    const cep = document.getElementById('cep').value;
    const encodedMessage = encodeURIComponent(`Olá, gostaria de consultar a disponibilidade para o meu CEP: ${cep}`);
    const whatsappLink = `https://wa.me/558189289155?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank'); // abre em nova aba
    return false; // impede o envio convencional do formulário
}
  