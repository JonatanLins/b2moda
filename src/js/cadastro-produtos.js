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
            alert("Digite um nome!");
        } else if (!$(this).closest('.etapa').find('.lista-tamanhos-produto #produto-tam-' + tamanho).length) {

            tamanho = '<fieldset><input type="checkbox" id="produto-tam-' + tamanho + '" name="tamanho-' + tamanho +
                '"><label for="produto-tam-' + tamanho + '">' + tamanho + '</label><br></fieldset>';

            $(this).closest('.etapa').find('.lista-tamanhos-produto').append(tamanho);
        } else {
            alert("Esta cor já existe!");
        }
    });
    
    
    
    // Adiconar cor dinamicamente
    $('#criar-cor .btn.salvar').click(function(){
        var cor = $(this).closest('#criar-cor').find('.jscolor').css('background-color');
        var nomeCor = $(this).closest('#criar-cor').find('.nome-cor').val().replace(/[^\w]/g, '');
        
        if (nomeCor == ''){
            alert('Digite um nome!');
        } else if (!$(this).closest('.etapa').find('.lista-cores #produto-cor-' + nomeCor).length){
            $(this).closest('.etapa').find('.lista-cores').append(
                '<fieldset>' +
                    '<input type="radio" id="produto-cor-' + nomeCor + '" name="cor">' +
                    '<label for="produto-cor-' + nomeCor + '">' +
                        '<i class="fa fa-circle" aria-hidden="true" style="color:' + cor + '"></i> <span>' + nomeCor + '</span>' +
                    '</label><br>' +
                '</fieldset>'
            );
            $(this).closest('#criar-cor').find('.nome-cor').val('');
        } else {
            alert('Já existe uma cor com esse nome!');
        }
            
    });


});
