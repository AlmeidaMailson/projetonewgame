

const outrosJogosContainer = [
  { time1: "Espanha", time2: "Croácia", placar: "3 x 0", video: "Vídeo/ESPANHA_3_X_0_CROÁCIA.mp4", poster: "Imagens/Melhores_Momentos.jpg" },
  { time1: "Turquia", time2: "Itália", placar: "1 x 1", img: "Imagens/Jogos/Turquia.png" },
];

function carregarJogos() {
  const outrosJogosContainer = document.querySelector(".outros-jogos");
  jogosAoVivo.slice(1).forEach((jogo) => {
      const jogoDiv = document.createElement("div");
      jogoDiv.classList.add("outros-jogos-1");

      jogoDiv.innerHTML = `
          <a href="#"><img src="${jogo.img}" alt="${jogo.time1} vs ${jogo.time2}"></a>
          <p>${jogo.time1} x ${jogo.time2} - ${jogo.placar}</p>
      `;
      outrosJogosContainer.appendChild(jogoDiv);
  });
}

document.addEventListener("DOMContentLoaded", carregarJogos);
const estatisticasJogo = {
    posseDeBola: { espanha: "65%", croacia: "35%" },
    finalizacoes: { espanha: 12, croacia: 5 },
    passesCertos: { espanha: 540, croacia: 290 },
    faltas: { espanha: 10, croacia: 15 },
    cartoesAmarelos: { espanha: 1, croacia: 3 },
    cartoesVermelhos: { espanha: 0, croacia: 1 }
};

const estatisticaContainer = document.querySelector(".estatistica table tbody");

Object.entries(estatisticasJogo).forEach(([key, value]) => {
    const row = `
        <tr>
            <td>${key}</td>
            <td>${value.espanha}</td>
            <td>${value.croacia}</td>
        </tr>
    `;
    estatisticaContainer.innerHTML += row;
});


const noticias = [
  {
      titulo: "Vinícius Júnior é eleito melhor jogador da Champions 2023/24",
      descricao: "Após uma temporada incrível pelo Real Madrid, Vinícius Júnior recebe o prêmio de melhor jogador da Champions.",
      link: "https://example.com/vini-jr-eleito-melhor-jogador",
      img: "Imagens/noticias/vini-jr.jpg"
  },
  {
      titulo: "Lunin cogita sair do Real Madrid após final da Champions",
      descricao: "Reserva durante a final da Champions, Lunin pode buscar novos ares na próxima temporada.",
      link: "https://example.com/lunin-saida-real",
      img: "Imagens/noticias/lunin.jpg"
  },
  {
      titulo: "Real Madrid é favorito para o Mundial de Clubes 2025",
      descricao: "Após vencer o Mundial em 2022, o Real Madrid surge como principal candidato para 2025.",
      link: "https://example.com/real-madrid-mundial-2025",
      img: "Imagens/noticias/real-madrid.jpg"
  },
  {
      titulo: "Haaland quebra recordes na Premier League",
      descricao: "Com 40 gols marcados em uma temporada, Haaland se consolida como um dos melhores atacantes do mundo.",
      link: "https://example.com/haaland-recordes",
      img: "Imagens/noticias/haaland.jpg"
  }
];

const containerNoticias = document.querySelector('.container-noticias');
noticias.forEach(noticia => {
  const noticiaHTML = `
      <article class="noticia">
          <img src="${noticia.img}" alt="${noticia.titulo}">
          <h2>${noticia.titulo}</h2>
          <p>${noticia.descricao} <a href="${noticia.link}" target="_blank">Leia mais</a></p>
      </article>
  `;
  containerNoticias.innerHTML += noticiaHTML;
});

const carrossel = document.querySelector('.carrossel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let offset = 0;

next.addEventListener('click', () => {
    offset -= 300;
    if (offset < -1200) offset = 0; // Reinicia ao final
    carrossel.style.transform = `translateX(${offset}px)`;
});

prev.addEventListener('click', () => {
    offset += 300;
    if (offset > 0) offset = -1200; // Vai para o final
    carrossel.style.transform = `translateX(${offset}px)`;
});

