$(document).ready(function () {

    // Ativadores do Materialize
    $('.modal').modal();

    $('select').material_select();

    $(document).ready(function () {
        $('.collapsible').collapsible();
    });

    $('.chips.grupos-clientes').material_chip({
        placeholder: 'Digite um grupo',
        secondaryPlaceholder: '+Grupo',
        //            autocompleteOptions: {
        //                data: {
        //                    'Grupo 1': null,
        //                    'Grupo 2': null,
        //                    'Grupo 3': null
        //                },
        //                limit: Infinity,
        //                minLength: 1
        //            }
        data: [{
            tag: 'Grupo 1',
            }, {
            tag: 'Grupo 2',
            }],
    });



    // Ativar máscaras de formulário
    $('input[type=text].dinheiro').mask('000.000.000.000.000,00', {
        reverse: true
    });




    // Mostras etapas do cadastro de produtos
    $('.navegacao-etapas .anterior').click(function () {
        var etapa = $('.etapas-cadastro .etapa.ativo');

        etapa.removeClass('ativo').prev('.etapa').addClass('ativo');
        $('.guia-procedimento .etapa.ativo').removeClass('ativo');
        $('.guia-procedimento .etapa:nth-child(' + etapa.prev('.etapa').data('passo') + ')').addClass('ativo');
    });
    $('.navegacao-etapas .proximo').click(function () {
        var etapa = $('.etapas-cadastro .etapa.ativo');

        etapa.removeClass('ativo').next('.etapa').addClass('ativo');
        $('.guia-procedimento .etapa.ativo').removeClass('ativo');
        $('.guia-procedimento .etapa:nth-child(' + etapa.next('.etapa').data('passo') + ')').addClass('ativo');
    });



    // Adiconar Tamanho com mini formulário
    $('.mini-form-tamanho .salvar-cor').click(function () {
        var tamanho = $(this).closest('.mini-form-tamanho').find('#adicionar-tamanho').val().replace(/[^\w]/g, '').toUpperCase();

        if (tamanho == '') {
            event.stopImmediatePropagation();
            alert("Digite um nome válido!");
        } else if (!$(this).closest('.etapa').find('.lista-tamanhos-produto #produto-tam-' + tamanho).length) {

            tamanho = '<fieldset><input type="checkbox" id="produto-tam-' + tamanho + '" name="tamanho-' + tamanho +
                '"><label for="produto-tam-' + tamanho + '">' + tamanho + '</label><br></fieldset>';

            $(this).closest('.etapa').find('.lista-tamanhos-produto').append(tamanho);

            $(this).closest('.mini-form-tamanho').find('#adicionar-tamanho').val('');
        } else {
            event.stopImmediatePropagation();
            alert("Esta cor já existe!");
        }
    });



    // Adicionar Preview das imagens do produto
    function removerImagemPreview(){
        $('#preview-produto').trigger('remove.owl.carousel', [$(this).closest('.owl-item').index()]).trigger('refresh.owl.carousel');
    }
    $('#upload-imagens-produto').change(function (event) {
        while ($('#preview-produto .owl-item').length) {
            $('#preview-produto').trigger('remove.owl.carousel', [0]).trigger('refresh.owl.carousel');
        }

        for (i = 0; i < event.target.files.length; i++) {
            var imgTag = '<div class="item"><img src="' + URL.createObjectURL(event.target.files[i]) +
                '"><i class="fa fa-close" aria-hidden="true"></i></div>';

            $('#preview-produto').trigger('add.owl.carousel', [imgTag]).trigger('refresh.owl.carousel');
        }
        
        $('#preview-produto .item .fa-close').click(removerImagemPreview);
    });
    $('#preview-produto .item .fa-close').click(removerImagemPreview);



    // Adiconar cor dinamicamente
    $('#criar-cor .btn.salvar').click(function (event) {
        var codigoCor = $('#preview-cor').css('background-color');
        var nomeCor = $('#nome-cor-adicionar').val().replace(/[^\w]/g, '');

        if (nomeCor === '') {
            event.stopImmediatePropagation();
            alert('Digite um nome válido!');
        } else if (!$('#produto-cor-' + nomeCor).length) {
            $(this).closest('.etapa').find('.lista-cores').append(
                '<fieldset>' +
                '<input type="radio" id="produto-cor-' + nomeCor + '" name="cor">' +
                '<label for="produto-cor-' + nomeCor + '">' +
                '<i class="fa fa-circle" aria-hidden="true" style="color:' + codigoCor + '"></i> <span>' + nomeCor + '</span>' +
                '</label><br>' +
                '</fieldset>'
            );
            $('#nome-cor-adicionar').val('');
        } else {
            event.stopImmediatePropagation();
            alert('Já existe uma cor com esse nome!');
        }
    });
    $('#criar-cor .lista-cores-adicionar .selecionar-cor').click(function () {
        $('#codigo-cor-adicionar').val($(this).css('background-color'));
        $('#preview-cor').css('background-color', $(this).css('background-color'));
    });
    $('#codigo-cor-adicionar').on('keypress change focus blur hover click paste mouseleave mouseenter', function () {
        $('#preview-cor').css('background-color', $(this).val());
    });



    // Criar card para visualizar cores no final do formulário
    $('.lista-cores, .lista-tamanhos-produto').click(function () {
        var info = $('.etapa.checar-cor-tam .cores-tamanhos-final .info-atual');

        info.find('.bloco-cor .cor').css('background-color', $('#lista-cores-produto input[name=cor]:checked + label .fa').css('color'));
        info.find('.bloco-cor .nome-cor').text($('#lista-cores-produto input[name=cor]:checked + label span').text());

        info.find('.bloco-tamanho .tam-qnt li').remove();
        $('#lista-tamanhos-produto input[type=checkbox]:checked').each(function () {
            info.find('.bloco-tamanho .tam-qnt').append('<li>' + $(this).next('label').text() + '</li>');
        });
    });



    // Botão para excluir cor previamente criada
    $('.cores-tamanhos-final .excluir-cor input[type=checkbox]').click(function (event) {
        $(this).closest('.cores-tamanhos-final li').addClass('hide');
        alert('Item excluído com sucesso!');
    });



    // Trocar input ao selecionar opção de pagamento
    $('.grupos.collapsible .seletor-modo-pagamento .dropdown-content li').click(function () {
        if ($(this).index() > 0) {
            $(this).closest('tr').find('.preco-produto.ativo').removeClass('ativo');
            $(this).closest('tr').find('.preco-produto:nth-child(' + $(this).index() + ')').addClass('ativo');
        }
    });

});
