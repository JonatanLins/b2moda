$(document).ready(function () {

    // Ativadores do Materialize
    $('.modal').modal();

    $('select').material_select();

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

        if (etapa.index() > 0) {
            etapa.removeClass('ativo').prev('.etapa').addClass('ativo');
            $('.guia-procedimento .etapa').removeClass('ativo');
            $('.guia-procedimento .etapa:nth-child(' + etapa.prev('.etapa').data('passo') + ')').addClass('ativo');
        }
    });
    $('.navegacao-etapas .proximo').click(function () {
        var etapa = $('.etapas-cadastro .etapa.ativo');

        if (etapa.index() < $('.etapas-cadastro .etapa').length - 1) {
            etapa.removeClass('ativo').next('.etapa').addClass('ativo');
            $('.guia-procedimento .etapa').removeClass('ativo');
            $('.guia-procedimento .etapa:nth-child(' + etapa.next('.etapa').data('passo') + ')').addClass('ativo');
        }
    });

});
