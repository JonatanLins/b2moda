!function(t){"use strict";function e(){var e=t(".container").innerWidth(),a=t(".container").offset().left,o=t(window).width();t(".ui-menu .drop-menu").each(function(n,i){var s=t(this).parent().offset().left,c=t(this).parent().innerWidth(),l=t(this).innerWidth();o>991?t("html").hasClass("cms-rtl")?(t(this).css({right:"0",left:"auto"}),s-a-15<l-c&&t(this).css("margin-right",s-a-15-l+c+"px")):(t(this).css({right:"auto",left:"0"}),e+a-15<s+l&&t(this).css("margin-left",e+a-15-s-l+"px")):t(this).removeAttr("style")})}function a(){t(".container").innerWidth();var e=t(".container").offset().left;t(window).width();t(".dropdown  .dropdown-menu").each(function(a,o){var n=t(this).parent().offset().left,i=t(this).parent().innerWidth(),s=t(this).innerWidth();t(this).css({right:"0",left:"auto"}),n-e-15<s-i&&t(this).css("margin-right",n-e-15-s+i+"px")})}function o(){var e=t(".container").innerWidth();t(".block-nav-categori .ui-categori").each(function(a,o){var n=t(this).innerWidth(),n=parseInt(t(this).actual("width"));t("html").hasClass("cms-rtl")?t(".block-nav-categori .ui-categori .submenu").css({right:n+"px",width:e-n-30+"px"}):t(".block-nav-categori .ui-categori .submenu").css({left:n+"px",width:e-n-30+"px"})})}t(document).ready(function(){var e=t(".testimonials-thumb"),a=t(".testimonials-des");e.on("changed.owl.carousel",function(t){var e=t.item.index-3;a.trigger("to.owl.carousel",[e,300,!0])})}),t(document).ready(function(){function e(t){var e=t.item.count;a(".currentItem",t.item.index+1),a(".owlItems",e)}function a(t,e){n.find(t).find(".result").text(e)}function o(e){var a=t(t(".owl-carousel .active .item ")).data("background");t(".block-section-top").css("background",a)}var n=t("#callback-page1");t(".owl-carousel").each(function(a,n){var i=t(this).data();i.navText=["",""],i.smartSpeed="800",t(this).hasClass("dotsData")&&(i.dotsData="true"),t(this).hasClass("testimonials-des")&&(i.animateOut="fadeOutDown",i.animateIn="fadeInDown"),t(this).hasClass("callback-page1")&&(i.onChanged=e),t(this).hasClass("data-bg")&&(i.onChanged=o),t(this).parents("html").hasClass("cms-rtl")&&(i.rtl="true"),t(this).owlCarousel(i)}),t(".block-search .block-title").on("click",function(){return t(this).parent().toggleClass("active"),!1}),t(".ui-menu .toggle-submenu").on("click",function(){return t(this).parent().toggleClass("open-submenu"),!1}),t("[data-action='toggle-nav']").on("click",function(){return t(this).toggleClass("active"),t(".block-nav-menu").toggleClass("has-open"),t("body").toggleClass("menu-open"),!1}),t("[data-action='close-nav']").on("click",function(){return t("[data-action='toggle-nav']").removeClass("active"),t(".block-nav-menu").removeClass("has-open"),t("body").removeClass("menu-open"),!1}),t(".ui-categori .toggle-submenu").on("click",function(){return t(this).parent().toggleClass("open-submenu"),!1}),t("[data-action='close-cat']").on("click",function(){return t(".block-nav-categori .block-title").removeClass("active"),t(".block-nav-categori").removeClass("has-open"),t("body").removeClass("categori-open"),!1}),t(".service-opt-1 .block-title").on("click",function(){return t(this).parent().toggleClass("active"),!1}),t(".block-title .action ").on("click",function(e){e.preventDefault();var a=this.hash;t("html, body").animate({scrollTop:t(a).offset().top},500,function(){window.location.hash=a})}),t("[data-countdown]").each(function(){var e=t(this),a=t(this).data("countdown");e.countdown(a,function(t){e.html(t.strftime('<div class="box-count box-days"><div class="number">%D</div><div class="text">Dias</div></div><div class="box-count box-hours"><div class="number">%H</div><div class="text">Hrs</div></div><div class="box-count box-min"><div class="number">%M</div><div class="text">Mins</div></div><div class="box-count box-secs"><div class="number">%S</div><div class="text">Segs</div></div>'))})}),t(".btn-filter-products").on("click",function(){return t(this).toggleClass("active"),t("#layered-filter-block").toggleClass("active"),t("body").toggleClass("filter-active"),!1}),t("#layered-filter-block .close-filter-products").on("click",function(){return t(".btn-filter-products").removeClass("active"),t("#layered-filter-block").removeClass("active"),t("body").removeClass("filter-active"),!1}),t("#layered-filter-block .filter-options-title").on("click",function(){return t(this).toggleClass("active"),t(this).parent().toggleClass("active"),!1}),t.arcticmodal&&t.arcticmodal("setDefault",{type:"ajax",ajax:{cache:!1},afterOpen:function(e){var a=t(".modal_window");a.find(".custom_select").customSelect(),a.find(".product_preview .owl_carousel").owlCarousel({margin:10,themeClass:"thumbnails_carousel",nav:!0,navText:[],rtl:!!window.ISRTL}),Core.events.productPreview(),addthis.toolbox(".addthis_toolbox")}}),t.fancybox&&(t.fancybox.defaults.direction={next:"left",prev:"right"}),t(".fancybox_item").length&&t(".fancybox_item").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{overlay:{css:{background:"rgba(0,0,0, .6)"}},thumbs:{width:50,height:50}}}),t(".fancybox_item_media").length&&t(".fancybox_item_media").fancybox({openEffect:"none",closeEffect:"none",helpers:{media:{}}}),t("#img_zoom").length&&(t("#img_zoom").elevateZoom({zoomType:"inner",gallery:"thumbnails",galleryActiveClass:"active",cursor:"crosshair",responsive:!0,easing:!0,zoomWindowFadeIn:500,zoomWindowFadeOut:500,lensFadeIn:500,lensFadeOut:500}),t(".open_qv").on("click",function(e){var a=t(this).siblings("img").data("elevateZoom");t.fancybox(a.getGalleryList()),e.preventDefault()})),t(".btn-number").on("click",function(e){e.preventDefault();var a=t(this).attr("data-field"),o=t(this).attr("data-type"),n=t("input[name='"+a+"']"),i=parseInt(n.val());isNaN(i)?n.val(0):"minus"==o?(i>n.attr("minlength")&&n.val(i-1).change(),parseInt(n.val())==n.attr("minlength")&&t(this).attr("disabled",!0)):"plus"==o&&(i<n.attr("maxlength")&&n.val(i+1).change(),parseInt(n.val())==n.attr("maxlength")&&t(this).attr("disabled",!0))}),t(".product-info-detailed  .block-title").on("click",function(){return t(this).parent().toggleClass("has-active"),!1}),t(window).scroll(function(){t(this).scrollTop()>50?t(".back-to-top").fadeIn():t(".back-to-top").fadeOut()}),t(".back-to-top").on("click",function(e){return e.preventDefault(),t("html, body").animate({scrollTop:0},500),!1}),t(document).on("click",".open-cate",function(){return t(this).closest(".block-nav-categori").find("li.cat-link-orther").each(function(){t(this).slideDown()}),t(this).addClass("colse-cate").removeClass("open-cate").html("Close"),!1}),t(document).on("click",".colse-cate",function(){return t(this).closest(".block-nav-categori").find("li.cat-link-orther").each(function(){t(this).slideUp()}),t(this).addClass("open-cate").removeClass("colse-cate").html("All Categories"),!1}),t(document).on("click",".col-categori .btn-show-cat",function(){return t(this).closest(".col-categori").find("li.cat-orther").each(function(){t(this).slideDown()}),t(this).addClass("btn-close-cat").removeClass("btn-show-cat").html('Close <i class="fa fa-angle-double-right" aria-hidden="true"></i>'),t(this).parent().addClass("open"),!1}),t(document).on("click",".col-categori .btn-close-cat",function(){return t(this).closest(".col-categori").find("li.cat-orther").each(function(){t(this).slideUp()}),t(this).parent().removeClass("open"),t(this).addClass("btn-show-cat").removeClass("btn-close-cat").html('All Categories <i class="fa fa-angle-double-right" aria-hidden="true"></i>'),!1}),t(window).width()>991&&t(".mid-header ").sticky({topSpacing:0}),t(".qc-top-site  .close").on("click",function(){return t(this).parents(".qc-top-site").slideUp("slow"),t(this).parents(".qc-top-site").addClass("close-bn"),t(".qc-top-site ").css({"min-height":"0",opacity:"0"}),!1}),t(".categori-search-option").length>0&&t(".categori-search-option").chosen({}),t(".parallax").length>0&&t(".parallax").each(function(){t(this).parallax("50%",.1)}),t(".slide-top-brand").length>0&&t(".slide-top-brand").bxSlider({mode:"vertical",minSlides:4,maxSlides:3,pager:!1,useCSS:!1,nextText:"",prevText:""}),t(".block-floor-products .col-brand").length>0&&t(".block-floor-products .col-brand .slide-brand").bxSlider({mode:"vertical",minSlides:8,maxSlides:8,pager:!1,useCSS:!1,nextText:"",prevText:""}),t("#popup-newsletter").length>0&&t("#popup-newsletter").modal({keyboard:!1})}),t(document).on("click",".block-brand-tabs .nav-brand li",function(){var e=t(this).data("tab");return t(this).closest(".block-brand-tabs").find("li").each(function(){t(this).removeClass("active")}),t(this).closest("li").addClass("active"),t(".block-brand-tabs").find(".tab-pane").each(function(){t(this).removeClass("active")}),t("#"+e).addClass("active"),!1}),t(".block-nav-categori .block-title").on("click",function(){}),t(document).on("click",".header-nav .block-nav-categori .block-title ",function(){var e=t(window).width();return t(this).toggleClass("active"),t(this).parent().toggleClass("has-open"),t("body").toggleClass("categori-open"),e>992&&t(this).closest(".block-nav-categori").find(".block-content").slideToggle(),!1}),t(window).scroll(function(){return t(window).width()>1200&&t("header").hasClass("cate-show")&&t("body").hasClass("cms-index-index")&&(t("#sticky-wrapper").hasClass("is-sticky")||t(".header-nav .block-nav-categori").find(".block-content").hide()),!1}),t(window).load(function(){e(),a(),o()}),t(document).ready(function(){e(),a(),o()}),t(window).resize(function(){e(),a(),o()}),t(window).scroll(function(){e(),a(),o()}),t(".slider-block.botao").click(function(){t(".slider-block.block-content.block-"+t(this).data("bloco")).toggleClass("ativo")}),t(".slider-block.close-block").click(function(){t(".slider-block.block-content.block-"+t(this).data("bloco")).removeClass("ativo")}),t(document).click(function(e){t(e.target).closest(".slider-block").length||t(".slider-block.block-content").removeClass("ativo")}),t(".popup.botao").click(function(){t(".popup.popup-content.popup-"+t(this).data("id")).toggleClass("ativo")}),t(".popup .close-popup").click(function(){t(".popup.popup-content.popup-"+t(this).data("id")).removeClass("ativo")}),t(document).click(function(e){t(e.target).closest(".popup").length||t(".popup.popup-content").removeClass("ativo")}),t(".block-tam-cores .cor").click(function(){t(".block-tam-cores .cores .ativo").removeClass("ativo"),t(".block-tam-cores .cores li:nth-child("+t(this).data("id")+")").addClass("ativo")}),t(".block-tam-cores .tamanhos input").change(function(){var e=0;t(this).val(parseInt(t(this).val())),t(this).val()<0&&t(this).val(0),t(".block-tam-cores .tamanhos input").each(function(a,o){t(o).val()&&(e+=parseInt(t(o).val()))});var a=t(this).parent().children("span").text(),o=0;t(".block-tam-cores .tamanhos li span:contains('"+a+"')").each(function(){o+=parseInt(t(this).parent().children("input").val())}),t(".bloco-tam-qnt .tam:contains('"+a+"')").parent().children(".qnt").text("["+o+" unid.]"),e<30?t(".alerta-quantidades .qnt-min").removeClass("hide"):t(".alerta-quantidades .qnt-min").addClass("hide"),t(".alerta-quantidades .qnt-total span").text(e)}),t(".trocar-preco .lista-precos li").click(function(){t(this).parent().parent().parent().removeClass("open-submenu").children(".toggle-submenu span").text(t(this).text())}),t(".parent .toggle-submenu").click(function(){t(this).parent().children(".subcategory").toggleClass("active")}),t("a.imagem-produto-lightbox").fancybox({hideOnContentClick:!0})}(jQuery);