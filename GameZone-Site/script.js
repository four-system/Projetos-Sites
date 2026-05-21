const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

if(botaoMenu){

    botaoMenu.addEventListener("click", function(){

        menu.classList.toggle("open");

    });

}

const botoesFiltro = document.querySelectorAll(".filter-btn");
const jogos = document.querySelectorAll(".game-card");

botoesFiltro.forEach(function(botao){

    botao.addEventListener("click", function(){

        let categoria = botao.dataset.filter;

        botoesFiltro.forEach(function(btn){
            btn.classList.remove("active");
        });

        botao.classList.add("active");

        jogos.forEach(function(jogo){

            if(categoria == "todos"){

                jogo.style.display = "block";

            }else{

                if(jogo.dataset.category == categoria){

                    jogo.style.display = "block";

                }else{

                    jogo.style.display = "none";

                }

            }

        });

    });

});

const formulario = document.querySelector("#contactForm");
const mensagem = document.querySelector("#formFeedback");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        mensagem.innerHTML = "Mensagem enviada com sucesso!";

        formulario.reset();

    });

}
