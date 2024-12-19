// Dados simulados das notícias (no mundo real, você faria isso com uma API ou banco de dados)
const noticias = [
    {
        id: 1,
        titulo: "Vinícius Júnior é eleito melhor jogador da Champions",
        descricao: "Após uma temporada incrível pelo Real Madrid, Vinícius Júnior recebeu o prêmio de melhor jogador da Champions.",
        imagem_url: "img/vini-jr.jpg",
        link: "https://example.com/vini-jr-eleito-melhor-jogador",
        data_publicacao: "2024-11-27"
    },
    {
        id: 2,
        titulo: "Real Madrid é favorito para o Mundial de Clubes 2025",
        descricao: "Após vencer o Mundial em 2022, o Real Madrid surge como principal candidato para o próximo Mundial de Clubes.",
        imagem_url: "img/real-madrid.jpg",
        link: "https://example.com/real-madrid-mundial-2025",
        data_publicacao: "2024-11-26"
    },
    {
        id: 3,
        titulo: "Haaland quebra recordes na Premier League",
        descricao: "Com 40 gols marcados em uma temporada, Haaland se consolidou como um dos melhores atacantes da Premier League.",
        imagem_url: "img/haaland.jpg",
        link: "https://example.com/haaland-recordes",
        data_publicacao: "2024-11-25"
    }
];

// Função para carregar e exibir as notícias
function carregarNoticias() {
    const container = document.querySelector('.noticias-container');
    noticias.forEach(noticia => {
        const noticiaHTML = `
            <div class="noticia">
                <img src="${noticia.imagem_url}" alt="${noticia.titulo}">
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descricao}</p>
                <a href="${noticia.link}" target="_blank">Leia mais</a>
            </div>
        `;
        container.innerHTML += noticiaHTML;
    });
}

// Carregar as notícias quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarNoticias);

