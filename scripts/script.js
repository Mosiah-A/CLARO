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
$(document).ready(function(){
    $(".plan").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 2000,
      dots: true,
      arrows: true,
      prevArrow: $(".carousel-nav-left"),
      nextArrow: $(".carousel-nav-right"),
      
    });
  });
function redirectToWhatsApp() {
    const cep = document.getElementById('cep').value.trim();

    // Validação para checar se o campo está vazio ou se o CEP é inválido
    const cepPattern = /^[0-9]{8}$/; // Regex para validar 8 dígitos numéricos

    if (!cep) {
        alert("Por favor, insira o seu CEP.");
        return false;
    } else if (!cepPattern.test(cep)) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return false;
    }

    const encodedMessage = encodeURIComponent(`Olá, gostaria de consultar a disponibilidade para o meu CEP: ${cep}`);
    const whatsappLink = `https://wa.me/558189289155?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank'); // Abre em uma nova aba
    return false; // Impede o envio convencional do formulário
}
