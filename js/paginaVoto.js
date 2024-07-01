(function(){
    let $sectionImg = document.querySelector('.imgEscolhida');
    let $btnRecomecar = document.querySelector('.btnRecomecar');

    let img = localStorage.getItem('imgVotada');
    img = img.slice(0, 2)

    $sectionImg.style.backgroundImage = `url(./imgs/${img}.jpg)`;

    $btnRecomecar.addEventListener('click', function(){
        window.location.href = 'index.html';
    })
})()