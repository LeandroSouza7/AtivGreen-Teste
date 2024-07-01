(function(){
    let $containerImgs1 = document.querySelector('.fotos_pag1');
    let $containerImgs2 = document.querySelector('.fotos_pag2');
    let $imgs = document.querySelectorAll('.fotos img');
    let $btnVotar = document.querySelector('.btnVotar');


    function animacaoImg(container){ 
        container.addEventListener('click', function(e){
            if(e.target.getAttribute("value") == "img"){
                let qtdImg = $imgs.length;
                let x = 0;
                while(qtdImg > x){
                    $imgs[x].classList.remove('imgEscolhida');
                    x++;
                }

                e.target.classList.add('imgEscolhida');
                container.classList.toggle('opacity-votacao');
                const efeito = new KeyframeEffect(
                    e.target, 
                    [
                    { opacity: 0 }, // valor inicial
                    { opacity: 1 } // valor final
                    ],
                    { duration: 1000 } // duração da animação em milissegundos
                );
                
                const animacao = new Animation(efeito, document.timeline);
                animacao.play(); 


                if(container.classList[3] == 'opacity-votacao'){
                    $btnVotar.disabled = false;
                }else{
                    $btnVotar.disabled = true;
                };

                $btnVotar.addEventListener('click', function(){
                    localStorage.setItem("imgVotada", e.target.classList);

                    window.location.href = 'voto.html';

                })

            }
        })

    }

    animacaoImg($containerImgs1);
    animacaoImg($containerImgs2)
})()