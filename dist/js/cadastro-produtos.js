$(document).ready(function(){$(".modal").modal(),$("select").material_select(),$(document).ready(function(){$(".collapsible").collapsible()}),$(".chips.grupos-clientes").material_chip({placeholder:"Digite um grupo",secondaryPlaceholder:"+Grupo",data:[{tag:"Grupo 1"},{tag:"Grupo 2"}]}),$(".navegacao-etapas .anterior").click(function(){var a=$(".etapas-cadastro .etapa.ativo");a.removeClass("ativo").prev(".etapa").addClass("ativo"),$(".guia-procedimento .etapa.ativo").removeClass("ativo"),$(".guia-procedimento .etapa:nth-child("+a.prev(".etapa").data("passo")+")").addClass("ativo")}),$(".navegacao-etapas .proximo").click(function(){var a=$(".etapas-cadastro .etapa.ativo");a.removeClass("ativo").next(".etapa").addClass("ativo"),$(".guia-procedimento .etapa.ativo").removeClass("ativo"),$(".guia-procedimento .etapa:nth-child("+a.next(".etapa").data("passo")+")").addClass("ativo")}),$(".mini-form-tamanho .salvar-cor").click(function(){var a=$(this).closest(".mini-form-tamanho").find("#adicionar-tamanho").val().replace(/[^\w]/g,"").toUpperCase();""==a?alert("Digite um nome!"):$(this).closest(".etapa").find(".lista-tamanhos-produto #produto-tam-"+a).length?alert("Esta cor já existe!"):(a='<fieldset><input type="checkbox" id="produto-tam-'+a+'" name="tamanho-'+a+'"><label for="produto-tam-'+a+'">'+a+"</label><br></fieldset>",$(this).closest(".etapa").find(".lista-tamanhos-produto").append(a),$(this).closest(".mini-form-tamanho").find("#adicionar-tamanho").val(""))}),$("#criar-cor .btn.salvar").click(function(){var a=$(this).closest("#criar-cor").find(".jscolor").css("background-color"),o=$(this).closest("#criar-cor").find(".nome-cor").val().replace(/[^\w]/g,"");""==o?alert("Digite um nome!"):$(this).closest(".etapa").find(".lista-cores #produto-cor-"+o).length?alert("Já existe uma cor com esse nome!"):($(this).closest(".etapa").find(".lista-cores").append('<fieldset><input type="radio" id="produto-cor-'+o+'" name="cor"><label for="produto-cor-'+o+'"><i class="fa fa-circle" aria-hidden="true" style="color:'+a+'"></i> <span>'+o+"</span></label><br></fieldset>"),$(this).closest("#criar-cor").find(".nome-cor").val(""))}),$(".lista-cores, .lista-tamanhos-produto").click(function(){var a=$(".etapa.checar-cor-tam .cores-tamanhos-final .info-atual");a.find(".bloco-cor .cor").css("background-color",$("#lista-cores-produto input[name=cor]:checked + label .fa").css("color")),a.find(".bloco-cor .nome-cor").text($("#lista-cores-produto input[name=cor]:checked + label span").text()),a.find(".bloco-tamanho .tam-qnt li").remove(),$("#lista-tamanhos-produto input[type=checkbox]:checked").each(function(){a.find(".bloco-tamanho .tam-qnt").append("<li>"+$(this).next("label").text()+"</li>")})})});