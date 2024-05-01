$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false,
        dots:false,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(11) 12345-6789'
    })

    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            mensagem: {
                required:true
            },
            veiculoInteresse: {
                required:false
            },
        },
        messages: {
            nome: 'Por favor insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
        }
    })

    $('.lista-veiculos button').click(function(){/*faz a rolagem de tela*/
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})