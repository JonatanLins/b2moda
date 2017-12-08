(function ($) {
    "use strict";


    $(document).ready(function () {

        /*  [ testimonials -  owl ]
        - - - - - - - - - - - - - - - - - - - - */
        var sync1 = $('.testimonials-thumb');
        var sync2 = $('.testimonials-des');
        var duration = 300;

        sync1.on('changed.owl.carousel', function (event) {

            var item = event.item.index - 3;

            sync2.trigger('to.owl.carousel', [item, duration, true]);
        })



    });


    $(document).ready(function () {

        /*  [ per page owl ]
         - - - - - - - - - - - - - - - - - - - - */
        var status1 = $("#callback-page1");

        function callback1(event) {

            var items = event.item.count;
            var item = event.item.index + 1;


            updateResult1(".currentItem", item);
            updateResult1(".owlItems", items);


        }


        function updateResult1(pos, value) {
            status1.find(pos).find(".result").text(value);
        }

        function callback_bg(event) {

            var corlor = $($(".owl-carousel .active .item ")).data('background');
            $('.block-section-top').css('background', corlor);


        }

        /*  [ owl-carousel ]
        - - - - - - - - - - - - - - - - - - - - */
        $(".owl-carousel").each(function (index, el) {
            var config = $(this).data();
            config.navText = ['', ''];
            config.smartSpeed = "800";

            if ($(this).hasClass('dotsData')) {
                config.dotsData = "true";
            }
            if ($(this).hasClass('testimonials-des')) {
                config.animateOut = "fadeOutDown";
                config.animateIn = "fadeInDown";
            }
            if ($(this).hasClass('callback-page1')) {
                config.onChanged = callback1;
            }
            if ($(this).hasClass('data-bg')) {
                config.onChanged = callback_bg;
            }
            if ($(this).parents("html").hasClass('cms-rtl')) {
                config.rtl = "true";
            }
            $(this).owlCarousel(config);

        });


        /*  [Mobile Search ]
        - - - - - - - - - - - - - - - - - - - - */


        $(".block-search .block-title").on('click', function () {
            $(this).parent().toggleClass('active');
            return false;
        });
        /*  [Mobile menu ]
        - - - - - - - - - - - - - - - - - - - - */

        $(".ui-menu .toggle-submenu").on('click', function () {
            $(this).parent().toggleClass('open-submenu');
            return false;
        });

        $("[data-action='toggle-nav']").on('click', function () {
            $(this).toggleClass('active');
            $(".block-nav-menu").toggleClass("has-open");
            $("body").toggleClass("menu-open");
            return false;

        });
        $("[data-action='close-nav']").on('click', function () {
            $("[data-action='toggle-nav']").removeClass('active');
            $(".block-nav-menu").removeClass("has-open");
            $("body").removeClass("menu-open");
            return false;

        });
        /*  [Mobile categori ]
        - - - - - - - - - - - - - - - - - - - - */


        $(".ui-categori .toggle-submenu").on('click', function () {
            $(this).parent().toggleClass('open-submenu');
            return false;
        });

        $("[data-action='close-cat']").on('click', function () {
            $(".block-nav-categori .block-title").removeClass('active');
            $(".block-nav-categori").removeClass("has-open");
            $("body").removeClass("categori-open");
            return false;

        });
        /*  [Mobile click service ]
        - - - - - - - - - - - - - - - - - - - - */

        $(".service-opt-1 .block-title").on('click', function () {
            $(this).parent().toggleClass('active');
            return false;
        });

        /*  [animate click -floor ]
        - - - - - - - - - - - - - - - - - - - - */
        $(".block-title .action ").on('click', function (e) {

            // prevent default anchor click behavior
            e.preventDefault();

            // store hash
            var hash = this.hash;

            // animate
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // when done, add hash to url
                // (default click behaviour)
                window.location.hash = hash;
            });

        });

        /*  [COUNT DOWN ]
        - - - - - - - - - - - - - - - - - - - - */
        $('[data-countdown]').each(function () {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                var fomat =
                    '<div class="box-count box-days"><div class="number">%D</div><div class="text">Dias</div></div>' +
                    '<div class="box-count box-hours"><div class="number">%H</div><div class="text">Hrs</div></div>' +
                    '<div class="box-count box-min"><div class="number">%M</div><div class="text">Mins</div></div>' +
                    '<div class="box-count box-secs"><div class="number">%S</div><div class="text">Segs</div></div>';
                $this.html(event.strftime(fomat));
            });
        });

        /*  [Button Filter Products  ]
        - - - - - - - - - - - - - - - - - - - - */
        //open filter

        $(".btn-filter-products").on('click', function () {
            $(this).toggleClass('active');
            $("#layered-filter-block").toggleClass('active');
            $("body").toggleClass('filter-active');
            return false;
        });
        //Close filter

        $("#layered-filter-block .close-filter-products").on('click', function () {
            $(".btn-filter-products").removeClass('active');
            $("#layered-filter-block").removeClass('active');
            $("body").removeClass('filter-active');
            return false;
        });
        //toggle filter options

        $("#layered-filter-block .filter-options-title").on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().toggleClass('active');
            return false;
        });
        /* ------------------------------------------------
                Arctic modal
        ------------------------------------------------ */

        if ($.arcticmodal) {
            $.arcticmodal('setDefault', {
                type: 'ajax',
                ajax: {
                    cache: false
                },
                afterOpen: function (obj) {

                    var mw = $('.modal_window');

                    mw.find('.custom_select').customSelect();

                    mw.find('.product_preview .owl_carousel').owlCarousel({
                        margin: 10,
                        themeClass: 'thumbnails_carousel',
                        nav: true,
                        navText: [],
                        rtl: window.ISRTL ? true : false
                    });

                    Core.events.productPreview();

                    addthis.toolbox('.addthis_toolbox');

                }
            });
        }

        /* ------------------------------------------------
                Fancybox
        ------------------------------------------------ */

        if ($.fancybox) {
            $.fancybox.defaults.direction = {
                next: 'left',
                prev: 'right'
            }
        }

        if ($('.fancybox_item').length) {
            $('.fancybox_item').fancybox({
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    overlay: {
                        css: {
                            'background': 'rgba(0,0,0, .6)'
                        }
                    },
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                }
            });
        }

        if ($('.fancybox_item_media').length) {
            $('.fancybox_item_media').fancybox({
                openEffect: 'none',
                closeEffect: 'none',
                helpers: {
                    media: {}
                }
            });
        }

        /* ------------------------------------------------
                Elevate Zoom
        ------------------------------------------------ */

        if ($('#img_zoom').length) {
            $('#img_zoom').elevateZoom({
                zoomType: "inner",
                gallery: 'thumbnails',
                galleryActiveClass: 'active',
                cursor: "crosshair",
                responsive: true,
                easing: true,
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 500,
                lensFadeIn: 500,
                lensFadeOut: 500
            });

            $(".open_qv").on("click", function (e) {
                var ez = $(this).siblings('img').data('elevateZoom');
                $.fancybox(ez.getGalleryList());
                e.preventDefault();
            });

        }

        /*  [ input number ]
        - - - - - - - - - - - - - - - - - - - - */
        $('.btn-number').on('click', function (e) {

            e.preventDefault();

            var fieldName = $(this).attr('data-field');
            var type = $(this).attr('data-type');
            var input = $("input[name='" + fieldName + "']");
            var currentVal = parseInt(input.val());
            if (!isNaN(currentVal)) {
                if (type == 'minus') {

                    if (currentVal > input.attr('minlength')) {
                        input.val(currentVal - 1).change();
                    }
                    if (parseInt(input.val()) == input.attr('minlength')) {
                        $(this).attr('disabled', true);
                    }

                } else if (type == 'plus') {

                    if (currentVal < input.attr('maxlength')) {
                        input.val(currentVal + 1).change();
                    }
                    if (parseInt(input.val()) == input.attr('maxlength')) {
                        $(this).attr('disabled', true);
                    }

                }
            } else {
                input.val(0);
            }
        });

        /*  [ tab detail ]
        - - - - - - - - - - - - - - - - - - - - */

        $(".product-info-detailed  .block-title").on('click', function () {
            $(this).parent().toggleClass('has-active');
            return false;
        });

        /*  [ Back to top ]
        - - - - - - - - - - - - - - - - - - - - */
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 500);
            return false;
        });

        /*  [ All Categorie ]
        - - - - - - - - - - - - - - - - - - - - */
        $(document).on('click', '.open-cate', function () {
            $(this).closest('.block-nav-categori').find('li.cat-link-orther').each(function () {
                $(this).slideDown();
            });
            $(this).addClass('colse-cate').removeClass('open-cate').html('Close');
            return false;
        })
        /* Close Categorie */
        $(document).on('click', '.colse-cate', function () {
            $(this).closest('.block-nav-categori').find('li.cat-link-orther').each(function () {
                $(this).slideUp();
            });
            $(this).addClass('open-cate').removeClass('colse-cate').html('All Categories');
            return false;
        })

        /*  [ All Categorie ]
        - - - - - - - - - - - - - - - - - - - - */
        $(document).on('click', '.col-categori .btn-show-cat', function () {
            $(this).closest('.col-categori').find('li.cat-orther').each(function () {
                $(this).slideDown();
            });
            $(this).addClass('btn-close-cat').removeClass('btn-show-cat').html('Close <i class="fa fa-angle-double-right" aria-hidden="true"></i>');
            $(this).parent().addClass('open');
            return false;
        })
        /* Close Categorie */
        $(document).on('click', '.col-categori .btn-close-cat', function () {
            $(this).closest('.col-categori').find('li.cat-orther').each(function () {
                $(this).slideUp();
            });
            $(this).parent().removeClass('open');
            $(this)
                .addClass('btn-show-cat')
                .removeClass('btn-close-cat')
                .html('All Categories <i class="fa fa-angle-double-right" aria-hidden="true"></i>');
            return false;
        })

        /*  [ Sticky Menu ]
         - - - - - - - - - - - - - - - - - - - - */

        if ($(window).width() > 991) {
            $('.mid-header ').sticky({
                topSpacing: 0
            });

        }


        /*  [ Banner top ]
         - - - - - - - - - - - - - - - - - - - - */

        $(".qc-top-site  .close").on('click', function () {
            $(this).parents(".qc-top-site").slideUp("slow");
            $(this).parents(".qc-top-site").addClass('close-bn');
            $(".qc-top-site ").css({
                "min-height": "0",
                "opacity": "0"
            });
            return false;
        });

        /*  [ chosen ]
         - - - - - - - - - - - - - - - - - - - - */

        if ($('.categori-search-option').length > 0) {
            $(".categori-search-option").chosen({

            });
        }

        /*  [ parallax ]
         - - - - - - - - - - - - - - - - - - - - */
        if ($('.parallax').length > 0) {
            $('.parallax').each(function () {
                $(this).parallax("50%", 0.1);
            })
        }

        /*  [ brand ]
         - - - - - - - - - - - - - - - - - - - - */
        if ($('.slide-top-brand').length > 0) {
            $('.slide-top-brand').bxSlider({
                mode: 'vertical',
                minSlides: 4,
                maxSlides: 3,
                pager: false,
                useCSS: false,
                nextText: '',
                prevText: ''
            });
        }

        /*  [ brand -floor - home 2]
         - - - - - - - - - - - - - - - - - - - - */
        if ($('.block-floor-products .col-brand').length > 0) {
            $('.block-floor-products .col-brand .slide-brand').bxSlider({
                mode: 'vertical',
                minSlides: 8,
                maxSlides: 8,
                pager: false,
                useCSS: false,
                nextText: '',
                prevText: ''
            });
        }

        /*  [ popup - newsletter]
         - - - - - - - - - - - - - - - - - - - - */
        if ($('#popup-newsletter').length > 0) {
            $('#popup-newsletter').modal({
                keyboard: false
            })
        }



    });


    /** #brand-showcase */
    $(document).on('click', '.block-brand-tabs .nav-brand li', function () {
        var id = $(this).data('tab');
        $(this).closest('.block-brand-tabs').find('li').each(function () {
            $(this).removeClass('active');
        });
        $(this).closest('li').addClass('active');
        $('.block-brand-tabs').find('.tab-pane').each(function () {
            $(this).removeClass('active');
        })
        $('#' + id).addClass('active');
        return false;
    })

    /*  [ All Categorie Sticky]
        - - - - - - - - - - - - - - - - - - - - */
    $(".block-nav-categori .block-title").on('click', function () {



    });

    $(document).on('click', '.header-nav .block-nav-categori .block-title ', function () {
        var width = $(window).width();
        $(this).toggleClass('active');
        $(this).parent().toggleClass('has-open');
        $("body").toggleClass("categori-open");
        if (width > 992) {
            /*if($('header').hasClass('cate-show') && $('body').hasClass('cms-index-index') ){
                if($('#sticky-wrapper').hasClass('is-sticky') ){

                }else{

                    return false;
                }
            }*/
            $(this).closest('.block-nav-categori').find('.block-content').slideToggle();

        }

        return false;
    })

    $(window).scroll(function () {
        var width = $(window).width();
        if (width > 1200) {
            if ($('header').hasClass('cate-show') && $('body').hasClass('cms-index-index')) {
                if ($('#sticky-wrapper').hasClass('is-sticky')) {

                } else {
                    $('.header-nav .block-nav-categori').find('.block-content').hide();

                }
            }
        }
        return false;
    });

    //menu
    $(window).load(function () {

        resizeMenu();
        resizeDropdown();
        resizeCategori();
    });

    $(document).ready(function () {
        resizeMenu();
        resizeDropdown();
        resizeCategori();
    });


    $(window).resize(function () {
        resizeMenu();
        resizeDropdown();
        resizeCategori();
    });

    $(window).scroll(function () {
        resizeMenu();
        resizeDropdown();
        resizeCategori();

    });

    function resizeMenu() {
        var container = $('.container').innerWidth();
        var left_container = $('.container').offset().left;
        var w_window = $(window).width();




        $(".ui-menu .drop-menu").each(function (index, el) {


            var left_li = $(this).parent().offset().left;
            var w_li = $(this).parent().innerWidth();

            var w_megamenu = $(this).innerWidth();

            if (w_window > 991) {

                if ($("html").hasClass('cms-rtl')) {
                    $(this).css({
                        'right': "0",
                        "left": "auto"
                    });


                    if ((left_li - left_container - 15) < (w_megamenu - w_li)) {

                        $(this).css('margin-right', left_li - left_container - 15 - w_megamenu + w_li + "px");

                    } else {

                    }
                } else {

                    $(this).css({
                        'right': "auto",
                        "left": "0"
                    });


                    if ((container + left_container - 15) < (left_li + w_megamenu)) {

                        $(this).css('margin-left', container + left_container - 15 - left_li - w_megamenu + "px");

                    } else {

                    }
                }
            } else {
                $(this).removeAttr("style");
            }

        });


    }

    function resizeDropdown() {
        var container = $('.container').innerWidth();
        var left_container = $('.container').offset().left;
        var w_window = $(window).width();
        $(".dropdown  .dropdown-menu").each(function (index, el) {

            var left_li = $(this).parent().offset().left;
            var w_li = $(this).parent().innerWidth();

            var w_megamenu = $(this).innerWidth();

            $(this).css({
                'right': "0",
                "left": "auto"
            });


            if ((left_li - left_container - 15) < (w_megamenu - w_li)) {

                $(this).css('margin-right', left_li - left_container - 15 - w_megamenu + w_li + "px");

            } else {

            }

        });
    }

    function resizeCategori() {
        var container = $('.container').innerWidth();
        $(".block-nav-categori .ui-categori").each(function (index, el) {

            var w_categori = $(this).innerWidth();
            var w_categori = parseInt($(this).actual('width'));

            if ($("html").hasClass('cms-rtl')) {
                $(".block-nav-categori .ui-categori .submenu").css({
                    'right': w_categori + "px",
                    "width": container - w_categori - 30 + "px"
                });

            } else {

                $(".block-nav-categori .ui-categori .submenu").css({
                    'left': w_categori + "px",
                    "width": container - w_categori - 30 + "px"
                });


            }

        });

    }


    // blocos laterais deslizantes
    $(".slider-block.botao").click(function () {
        $(".slider-block.block-content.block-" + $(this).data("bloco")).toggleClass("ativo");
    });
    $(".slider-block.close-block").click(function () {
        $(".slider-block.block-content.block-" + $(this).data("bloco")).removeClass("ativo");
    });
    $(document).click(function (event) {
        if (!$(event.target).closest('.slider-block').length) {
            $(".slider-block.block-content.ativo").removeClass("ativo");
        }
    });
    $('[data-action="toggle-nav"], .dropdown.switcher').click(function () {
        $(".slider-block.block-content.ativo").removeClass("ativo");
    });


    // pop-ups
    $(".popup.botao").click(function () {
        $(".popup.popup-content.popup-" + $(this).data("id")).toggleClass("ativo");
    });
    $(".popup .close-popup").click(function () {
        $(".popup.popup-content.popup-" + $(this).data("id")).removeClass("ativo");
    });
    $(document).click(function (event) {
        if (!$(event.target).closest('.popup').length) {
            $(".popup.popup-content").removeClass("ativo");
        }
    });


    // bloco de cores
    $(".block-tam-cores .cor").click(function () {
        $(".block-tam-cores .cores .ativo").removeClass("ativo");
        $(".block-tam-cores .cores li:nth-child(" + $(this).data("id") + ")").addClass("ativo");
    });


    // soma dos itens comprados
    $(".block-tam-cores .tamanhos input").change(function () {
        var indexCor = $(this).closest('.cores > .ativo').index();
        if (parseInt($(this).val()) < 0) {
            $(this).val(0);
        }
        if ($(this).val() != 0) {
            $('.card-cor-' + indexCor + ' .tam-qnt > div:contains(\'' + $(this).prev('span').text() + '\')')
                .removeClass('hide')
                .find('.qnt')
                .text('[' + $(this).val() + ' unid.]');
        } else {
            $('.card-cor-' + indexCor + ' .tam-qnt > div:contains(\'' + $(this).prev('span').text() + '\')').addClass('hide');
        }

        // Analisa o total de itens selecionados
        var totalItens = 0;
        $(".block-tam-cores .tamanhos input").each(function (index, element) {
            totalItens += parseInt($(element).val());
        });
        $('.block-tam-cores .qnt-total > span').text(totalItens);
        if (totalItens < 30) {
            $(".alerta-quantidades .qnt-min").removeClass("hide");
        } else {
            $(".alerta-quantidades .qnt-min").addClass("hide");
        } //

        // Verifica a quantidade de itens da mesma cor
        totalItens = 0;
        $(this).closest('.tamanhos').find('input').each(function (index, element) {
            totalItens += parseInt($(element).val());
        });
        if(totalItens != 0){
            $('.card-cor-' + indexCor + ' .qnt-total > span').text(totalItens);
            $('.card-cor-' + indexCor).removeClass('hide');
        } else{
            $('.card-cor-' + indexCor).addClass('hide');
        }
    });
    
    // Excluir cor do item
    $('.block-tam-cores .excluir-cor').click(function(){
        $(this).closest('li').find('.tamanhos input').val(0);
        $('.card-cor-' + $(this).closest('.cores > li').index()).addClass('hide').find('.tam-qnt > div').addClass('hide'); 
        
        // Analisa o total de itens selecionados
        var totalItens = 0;
        $(".block-tam-cores .tamanhos input").each(function (index, element) {
            totalItens += parseInt($(element).val());
        });
        $('.block-tam-cores .qnt-total > span').text(totalItens);
        if (totalItens < 30) {
            $(".alerta-quantidades .qnt-min").removeClass("hide");
        } else {
            $(".alerta-quantidades .qnt-min").addClass("hide");
        } //
    });


    // trocar preço na página do produto
    $(".trocar-preco .lista-precos li").click(function () {
        $(this).parent().parent().parent().removeClass("open-submenu").children(".toggle-submenu span").text($(this).text());

    });


    // submenu dropdown
    $(".parent .toggle-submenu").click(function () {
        $(this).parent().children(".subcategory").toggleClass("active");
    });


    // lightbox da imagem dos produtos
    $("a.imagem-produto-lightbox").fancybox({
        'hideOnContentClick': true
    });


    // menu dropdown do menu principal do lado direito
    $(".drop-menu .open-drop-menu").click(function () {
        var parentMenu = $(this).parent('.drop-menu');
        if (parentMenu.hasClass('open')) {
            parentMenu.removeClass('open');
        } else {
            $('.drop-menu').removeClass('open');
            parentMenu.addClass('open');
        }
    });
    $(document).click(function (event) {
        if (!$(event.target).closest('.drop-menu').length) {
            $(".drop-menu.open").removeClass("open");
        }
    });
    $('[data-action="toggle-nav"], .nav-left .dropdown.switcher').click(function () {
        $(".drop-menu.open").removeClass("open");
    });


    // Abrir divisão expansível
    $('.abrir-expansivel').click(function () {
        $(this).parent().children('.expansivel').toggleClass('open');
    });


    // Deletar item da lista de produtos ao clicar no botão referente
    $('[data-action="deletar-item"]').click(function () {
        $(this).closest('tr').addClass('hide');
    });



    // Confirmar ação ao clicar em botão
    $('.confirmar-acao').click(function (event) {
        var continuar = confirm($(this).attr('data-confirmar'));
        if (!continuar) {
            event.preventDefault();
        }
    });



    // Manusear grupos na página de grupos
    function editarGrupo() {
        $(this)
            .addClass('hide')
            .closest('li')
            .prepend(
                '<input type="text" class="novo-nome-grupo" value="' + $(this).closest('li').children('.nome-grupo').text() +
                '"></input><div onclick="$(this).siblings(\'.nome-grupo\').removeClass(\'hide\').text($(this).prev(\'.novo-nome-grupo\').val())' +
                '.siblings(\'.editar\').removeClass(\'hide\').parent().children(\'.novo-nome-grupo, .salvar\').remove()"' +
                'class="btn-floating waves-effect waves-light salvar"><i class="fa fa-check" aria-hidden="true"></i></div>')
            .children('.nome-grupo')
            .addClass('hide');
    }

    function excluirGrupo() {
        $(this).closest('li').remove();
    }
    $('.manusear-grupos .adicionar-grupo').click(function () {
        $('#info-grupo-adicionar').removeClass('hide');
    });
    $('#info-grupo-adicionar .salvar').click(function () {
        if ($('#info-grupo-adicionar .nome-grupo').val() !== '') {
            $('.manusear-grupos .lista-grupos').prepend(
                '<li>' +
                '<span class="nome-grupo">' + $('#info-grupo-adicionar .nome-grupo').val() + '</span>' +
                '<div class="btn-floating waves-effect waves-light editar"><i class="fa fa-cog" aria-hidden="true">' +
                '</i></div><div class="btn-floating waves-effect waves-light excluir">' +
                '<i class="fa fa-trash" aria-hidden="true"></i></div>' +
                '</li>'
            ).find('li:first-child .editar').click(editarGrupo).next('.excluir').click(excluirGrupo);
        } else {
            alert('Digite um nome!');
        }
        $('#info-grupo-adicionar').addClass('hide').find('.nome-grupo').val('');
    });
    $('.manusear-grupos .lista-grupos > li .editar').on('click', editarGrupo);
    $('.manusear-grupos .lista-grupos > li .excluir').on('click', excluirGrupo);



    // Evitar bug do iPhone (input de texto dentro de um elemento fixo)
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        $('.block-tam-cores .cores .tamanhos li:last-child').css('margin-bottom', '60vh');

        $('.modal input[type=text]').focus(function () {
            $(window).scrollTop(0);
        })
        $('.block-tam-cores input[type=number]').focus(function () {
            $(window).scrollTop(0);
        })
        $(window).scroll(function (event) {
            if ($('.modal input[type=text]:focus, .block-tam-cores input[type=number]:focus').length) {
                event.preventDefault();
                $(window).scrollTop(0);
            }
        });
    }


})(jQuery);
