(function(){
    let $btn1 = document.querySelector('.btn1');
    let $btn2 = document.querySelector('.btn2');

    $btn1.classList.add('btnAtivo');

    let $fotos_pag1 = document.querySelector('.fotos_pag1');
    let $fotos_pag2 = document.querySelector('.fotos_pag2');

    $btn1.addEventListener('click', () => {
        $btn1.classList.add('btnAtivo');
        $btn2.classList.remove('btnAtivo');

        $fotos_pag1.classList.remove('disabled');
        $fotos_pag1.classList.add('active');

        $fotos_pag2.classList.remove('active');
        $fotos_pag2.classList.add('disabled');
    })

    $btn2.addEventListener('click', () => {
        $btn1.classList.remove('btnAtivo');
        $btn2.classList.add('btnAtivo');
        
        $fotos_pag2.classList.remove('disabled');
        $fotos_pag2.classList.add('active');

        $fotos_pag1.classList.remove('active');
        $fotos_pag1.classList.add('disabled');
    })
})()