'use strict'
function criarImagem (imagem) {
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    img.src = imagem.url
    galeria.appendChild(img)

    const legenda = document.createElement('p')
    legenda.textContent = imagem.texto

    galeria.appendChild(legenda)
}

function carregarImagens(){
    const imagens = [
        {
            nome: 'Paisagem 1',
            url:  './img/paisagem1.jpeg',
            texto: 'Foto da praia'
        },
        {
            nome: 'Paisagem 2',
            url:  './img/paisagem2.jpeg',
            texto: 'Foto das montanhas'
        },
        {
            nome: 'Paisagem 3',
            url:  './img/paisagem3.jpeg',
            texto: 'Foto de uma ilha'
        },
        {
            nome: 'Paisagem 4',
            url:  './img/paisagem4.jpeg',
            texto: 'Foto das montanhas com um por do sol'
        },
        {
            nome: 'Paisagem 5',
            url:  './img/paisagem5.jpeg',
            texto: 'Foto de um rio local'
        },
        {
            nome: 'Paisagem 6',
            url:  './img/paisagem6.jpeg',
            texto: 'Foto de um local com arvores e um rio'
        },
        {
            nome: 'Paisagem 7',
            url:  './img/paisagem7.jpeg',
            texto: 'Foto de um rio local cercado de montanhas'
        },
        {
            nome: 'Paisagem 8',
            url:  './img/paisagem8.jpeg',
            texto: 'Foto de um rio em um lugar bem frio'
        },
        {
            nome: 'Paisagem 9',
            url:  './img/paisagem9.jpeg',
            texto: 'Foto de um riacho com um arco em volta das margens'
        },
        {
            nome: 'Paisagem 10',
            url:  './img/paisagem10.jpeg',
            texto: 'Foto da casa de um pescador'
        }
    ]

    imagens.forEach(criarImagem)
}

carregarImagens()