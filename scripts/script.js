$(document).ready(function(){
    $(".carousel").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3.2,
      slidesToScroll: 1,
      speed: 2000,
      dots: true,
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
    const cepPattern = /^[0-9]{5}-?[0-9]{3}$/; // Regex para validar 8 dígitos numéricos

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
/// Intervalo fixo de tempo (em milissegundos) - Exemplo: 24 horas
const intervaloTempo = 18 * 60 * 60 * 1000; // 1 dia em milissegundos

// Pega a hora atual e calcula o momento de término do intervalo
let tempoInicio = new Date().getTime(); // Marca a hora do carregamento da página
let tempoFinal = tempoInicio + intervaloTempo - 20; // Adiciona o intervalo fixo

// Função para atualizar o contador
function atualizarContador() {
  const agora = new Date().getTime();
  const diferenca = tempoFinal - agora;

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza o HTML
  document.getElementById("dias").innerText = dias < 10 ? "0" + dias : dias;
  document.getElementById("horas").innerText = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;

  // Quando o tempo acabar, reinicie o contador
  if (diferenca < 0) {
    tempoInicio = new Date().getTime(); // Atualiza o tempo de início
    tempoFinal = tempoInicio + intervaloTempo; // Calcula o novo tempo final
  }
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);


// Atualiza o contador a cada segundo
const intervalo = setInterval(atualizarContador, 1000);

