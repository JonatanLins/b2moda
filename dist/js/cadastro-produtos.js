$(document).ready(function(){function o(){$("#preview-produto").trigger("remove.owl.carousel",[$(this).closest(".owl-item").index()]).trigger("refresh.owl.carousel")}$(".modal").modal(),$("select").material_select(),$(document).ready(function(){$(".collapsible").collapsible()}),$(".chips.grupos-clientes").material_chip({placeholder:"Digite um grupo",secondaryPlaceholder:"+Grupo",data:[{tag:"Grupo 1"},{tag:"Grupo 2"}]}),$("input[type=text].dinheiro").mask("000.000.000.000.000,00",{reverse:!0}),$(".navegacao-etapas .anterior").click(function(){var o=$(".etapas-cadastro .etapa.ativo");o.removeClass("ativo").prev(".etapa").addClass("ativo"),$(".guia-procedimento .etapa.ativo").removeClass("ativo"),$(".guia-procedimento .etapa:nth-child("+o.prev(".etapa").data("passo")+")").addClass("ativo")}),$(".navegacao-etapas .proximo").click(function(){var o=$(".etapas-cadastro .etapa.ativo");o.removeClass("ativo").next(".etapa").addClass("ativo"),$(".guia-procedimento .etapa.ativo").removeClass("ativo"),$(".guia-procedimento .etapa:nth-child("+o.next(".etapa").data("passo")+")").addClass("ativo")}),$(".mini-form-tamanho .salvar-cor").click(function(){var o=$(this).closest(".mini-form-tamanho").find("#adicionar-tamanho").val().replace(/[^\w]/g,"").toUpperCase();""==o?(event.stopImmediatePropagation(),alert("Digite um nome válido!")):$(this).closest(".etapa").find(".lista-tamanhos-produto #produto-tam-"+o).length?(event.stopImmediatePropagation(),alert("Esta cor já existe!")):(o='<fieldset><input type="checkbox" id="produto-tam-'+o+'" name="tamanho-'+o+'"><label for="produto-tam-'+o+'">'+o+"</label><br></fieldset>",$(this).closest(".etapa").find(".lista-tamanhos-produto").append(o),$(this).closest(".mini-form-tamanho").find("#adicionar-tamanho").val(""))}),$("#upload-imagens-produto").change(function(e){for(;$("#preview-produto .owl-item").length;)$("#preview-produto").trigger("remove.owl.carousel",[0]).trigger("refresh.owl.carousel");for(i=0;i<e.target.files.length;i++){var a='<div class="item"><img src="'+URL.createObjectURL(e.target.files[i])+'"><i class="fa fa-close" aria-hidden="true"></i></div>';$("#preview-produto").trigger("add.owl.carousel",[a]).trigger("refresh.owl.carousel")}$("#preview-produto .item .fa-close").click(o)}),$("#preview-produto .item .fa-close").click(o),$("#upload-imagem-estampa").change(function(o){$("#preview-estampa").attr("src",URL.createObjectURL(o.target.files[0])).closest(".preview-images").removeClass("hide")}),$("#preview-estampa + .fa-close").click(function(){$(this).closest(".preview-images").addClass("hide"),$("#upload-imagem-estampa").val("").closest(".input-field").find("input[type=text]").val("")}),$("#criar-cor .btn.salvar").click(function(o){var e=$("#preview-cor").css("background-color"),a=$("#nome-cor-adicionar").val().replace(/[^\w]/g,"");""===a?(o.stopImmediatePropagation(),alert("Digite um nome válido!")):$("#produto-cor-"+a).length?(o.stopImmediatePropagation(),alert("Já existe uma cor com esse nome!")):($(this).closest(".etapa").find(".lista-cores").append('<fieldset><input type="radio" id="produto-cor-'+a+'" name="cor"><label for="produto-cor-'+a+'"><i class="fa fa-circle" aria-hidden="true" style="color:'+e+'"></i> <span>'+a+"</span></label><br></fieldset>"),$("#nome-cor-adicionar").val(""))}),$("#criar-cor .lista-cores-adicionar .selecionar-cor").click(function(){$("#codigo-cor-adicionar").val($(this).css("background-color")),$("#preview-cor").css("background-color",$(this).css("background-color"))}),$("#codigo-cor-adicionar").on("keypress change focus blur hover click paste mouseleave mouseenter",function(){$("#preview-cor").css("background-color",$(this).val())}),$(".lista-cores, .lista-tamanhos-produto").click(function(){var o=$(".etapa.checar-cor-tam .cores-tamanhos-final .info-atual");o.find(".bloco-cor .cor").css("background-color",$("#lista-cores-produto input[name=cor]:checked + label .fa").css("color")),o.find(".bloco-cor .nome-cor").text($("#lista-cores-produto input[name=cor]:checked + label span").text()),o.find(".bloco-tamanho .tam-qnt li").remove(),$("#lista-tamanhos-produto input[type=checkbox]:checked").each(function(){o.find(".bloco-tamanho .tam-qnt").append("<li>"+$(this).next("label").text()+"</li>")})}),$(".cores-tamanhos-final .excluir-cor input[type=checkbox]").click(function(o){$(this).closest(".cores-tamanhos-final li").addClass("hide"),alert("Item excluído com sucesso!")}),$(".grupos.collapsible .seletor-modo-pagamento .dropdown-content li").click(function(){$(this).index()>0&&($(this).closest("tr").find(".preco-produto.ativo").removeClass("ativo"),$(this).closest("tr").find(".preco-produto:nth-child("+$(this).index()+")").addClass("ativo"))}),$(".modal input[type=text]").focus(function(){$(window).scrollTop(0)}),$(".modal input[type=text]").change(function(){$(window).scrollTop(0)})});