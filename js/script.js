/* function carregar() {                               
    let letrasAleatorias = '0123456789ABCDEF';      // seleciona as letras e números que serão usados para gerar a cor
    let cor = '#';                 

    for (let i = 0; i < 6; i++) {               
        cor += letrasAleatorias[Math.floor(Math.random() * 16)];    
    }

    return cor;
}
*/

function corClara() {
    const r = Math.floor(Math.random() * 106) + 150;
    const g = Math.floor(Math.random() * 106) + 150;
    const b = Math.floor(Math.random() * 106) + 150;

    // Converte os valores RGB para o formato hexadecimal
    const rgbToHex = (r, g, b) => {
        const toHex = (n) => n.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    return rgbToHex(r, g, b);
}


function backgroundColor() {
    let elemento = document.querySelector('p.horas');
    if (elemento) {
        elemento.style.backgroundColor = corClara();
    }
//    document.body.style.background = carregar();    // chama a função carregar e atribui a cor gerada a cor de fundo
}

function horas() {                                  // função que mostra as horas
    let data = new Date();                          // cria um objeto com a data e hora atual

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds(); 

    horas = ( horas < 10 ) ? '0' + horas : horas ;            // verifica se a hora é menor que 10, se for, adiciona um 0 a esquerda
    minutos = ( minutos < 10 ) ? '0' + minutos : minutos ;    // verifica se o minuto é menor que 10, se for, adiciona um 0 a esquerda
    segundos = ( segundos < 10 ) ? '0' + segundos : segundos ;// verifica se o segundo é menor que 10, se for, adiciona um 0 a esquerda

    let horaFormatada = `${horas}:${minutos}:${segundos}`;    // formata a hora para o padrao HH:MM:SS

    let msg = document.querySelector('p.horas');                // seleciona o elemento p com id msg
    msg.innerHTML = `<strong> Horário atual: ${horaFormatada}.</strong>`;            // adiciona a hora formatada ao elemento p com o format string
}

// ================================================================================================================// 

document.addEventListener("DOMContentLoaded", function() {
    const user = 'vinisoarescastro';                // Substitua pelo nome do usuário ou organização
    const repo = 'site_ludmilla_rosa';               // Substitua pelo nome do repositório
    const url = `https://api.github.com/repos/${user}/${repo}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const lastUpdated = new Date(data.updated_at);
        document.getElementById('last-updated').textContent = lastUpdated.toLocaleString();
      })
      .catch(error => {
        console.error('Erro ao buscar a data de atualização:', error);
        document.getElementById('last-updated').textContent = 'Erro ao carregar a data';
      });
  });


setInterval(backgroundColor, 1000);                           // chama a função backgroundColor a cada 1 segundos
setInterval(horas, 1000);                                     // chama a função horas a cada 1 segundo