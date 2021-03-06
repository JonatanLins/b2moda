!function(e){"use strict";e.fn.ColorPickerSliders=function(r){return this.each(function(){function t(){void 0===r&&(r={}),ae=e.extend({color:"hsl(342, 52%, 70%)",size:"default",placement:"auto",trigger:"focus",preventtouchkeyboardonshow:!0,title:"",hsvpanel:!1,sliders:!0,grouping:!0,swatches:["FFFFFF","C0C0C0","808080","000000","FF0000","800000","FFFF00","808000","00FF00","008000","00FFFF","008080","0000FF","000080","FF00FF","800080"],customswatches:"colorpickkersliders",connectedinput:!1,flat:!1,updateinterval:30,previewontriggerelement:!0,previewcontrasttreshold:15,previewformat:"rgb",erroneousciecolormarkers:!0,invalidcolorsopacity:1,finercierangeedges:!0,titleswatchesadd:"Add color to swatches",titleswatchesremove:"Remove color from swatches",titleswatchesreset:"Reset to default swatches",order:{},labels:{},onchange:function(){}},r),r.hasOwnProperty("order")?ae.order=e.extend({opacity:!1,hsl:!1,rgb:!1,cie:!1,preview:!1},r.order):ae.order={opacity:0,hsl:1,rgb:2,cie:3,preview:4},r.hasOwnProperty("labels")||(r.labels={}),ae.labels=e.extend({hslhue:"HSL-Hue",hslsaturation:"HSL-Saturation",hsllightness:"HSL-Lightness",rgbred:"RGB-Red",rgbgreen:"RGB-Green",rgbblue:"RGB-Blue",cielightness:"CIE-Lightness",ciechroma:"CIE-Chroma",ciehue:"CIE-hue",opacity:"Opacity",preview:"Preview"},r.labels)}function s(){p(),G(),Y(),f()}function a(){de?(Ce.tiny=tinycolor(he.val()),Ce.tiny.isValid()||(Ce.tiny=tinycolor(ae.color))):Ce.tiny=tinycolor(ae.color),Ce.hsla=Ce.tiny.toHsl(),Ce.rgba=Ce.tiny.toRgb(),Ce.hsv=Ce.tiny.toHsv(),Ce.cielch=e.fn.ColorPickerSliders.rgb2lch(Ce.rgba)}function i(){ae.connectedinput&&(pe=ae.connectedinput instanceof jQuery?ae.connectedinput:e(ae.connectedinput))}function n(r,t){var s=tinycolor(r);return!!s.isValid()&&(Ce.tiny=s,Ce.hsla=s.toHsl(),Ce.rgba=s.toRgb(),Ce.hsv=s.toHsv(),Ce.cielch=e.fn.ColorPickerSliders.rgb2lch(Ce.rgba),ae.flat||ge?(ie.removeClass("cp-unconvertible-cie-color"),Y(t)):(t||T(),A()),!0)}function o(e){if(!ae.flat){if(ge)return he.popover("hide"),he.popover("show"),void f();l(e),ge=!0}}function c(){ge=!1,h()}function l(r){if(!(ne instanceof jQuery)){switch(void 0===r&&(r=!1),ne=e('<div class="cp-popover-container"></div>').appendTo("body"),(ie=e('<div class="cp-container"></div>').appendTo(ne)).html(d()),ae.size){case"sm":ie.addClass("cp-container-sm");break;case"lg":ie.addClass("cp-container-lg")}s(),r||y(),he.popover({html:!0,animation:!1,trigger:"manual",title:ae.title,placement:ae.placement,container:ne,content:function(){return ie}}),he.popover("show")}}function h(){ne.remove(),ne=null,he.popover("destroy")}function d(){var e=[],r="";if(ae.sliders&&(!1!==ae.order.opacity&&(e[ae.order.opacity]='<div class="cp-slider cp-opacity cp-transparency"><span>'+ae.labels.opacity+'</span><div class="cp-marker"></div></div>'),!1!==ae.order.hsl&&(e[ae.order.hsl]='<div class="cp-slider cp-hslhue cp-transparency"><span>'+ae.labels.hslhue+'</span><div class="cp-marker"></div></div><div class="cp-slider cp-hslsaturation cp-transparency"><span>'+ae.labels.hslsaturation+'</span><div class="cp-marker"></div></div><div class="cp-slider cp-hsllightness cp-transparency"><span>'+ae.labels.hsllightness+'</span><div class="cp-marker"></div></div>'),!1!==ae.order.rgb&&(e[ae.order.rgb]='<div class="cp-slider cp-rgbred cp-transparency"><span>'+ae.labels.rgbred+'</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbgreen cp-transparency"><span>'+ae.labels.rgbgreen+'</span><div class="cp-marker"></div></div><div class="cp-slider cp-rgbblue cp-transparency"><span>'+ae.labels.rgbblue+'</span><div class="cp-marker"></div></div>'),!1!==ae.order.cie&&(e[ae.order.cie]='<div class="cp-slider cp-cielightness cp-transparency"><span>'+ae.labels.cielightness+'</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciechroma cp-transparency"><span>'+ae.labels.ciechroma+'</span><div class="cp-marker"></div></div><div class="cp-slider cp-ciehue cp-transparency"><span>'+ae.labels.ciehue+'</span><div class="cp-marker"></div></div>'),!1!==ae.order.preview&&(e[ae.order.preview]='<div class="cp-preview cp-transparency"><input type="text" readonly="readonly"></div>')),ae.grouping&&(!!ae.hsvpanel+!!(ae.sliders&&e.length>0)+!!ae.swatches>1?r+='<ul class="cp-pills">':r+='<ul class="cp-pills hidden">',ae.hsvpanel&&(r+='<li><a href="#" class="cp-pill-hsvpanel">HSV panel</a></li>'),ae.sliders&&e.length>0&&(r+='<li><a href="#" class="cp-pill-sliders">Sliders</a></li>'),ae.swatches&&(r+='<li><a href="#" class="cp-pill-swatches">Swatches</a></li>'),r+="</ul>"),ae.hsvpanel&&(r+='<div class="cp-hsvpanel"><div class="cp-hsvpanel-sv"><span></span><div class="cp-marker-point"></div></div><div class="cp-hsvpanel-h"><span></span><div class="cp-hsvmarker-vertical"></div></div><div class="cp-hsvpanel-a cp-transparency"><span></span><div class="cp-hsvmarker-vertical"></div></div></div>'),ae.sliders){r+='<div class="cp-sliders">';for(var t=0;t<e.length;t++)void 0!==e[t]&&(r+=e[t]);r+="</div>"}return ae.swatches&&(r+='<div class="cp-swatches clearfix"><button type="button" class="add btn btn-default" title="'+ae.titleswatchesadd+'"><span class="glyphicon glyphicon-floppy-save"></span></button><button type="button" class="remove btn btn-default" title="'+ae.titleswatchesremove+'"><span class="glyphicon glyphicon-trash"></span></button><button type="button" class="reset btn btn-default" title="'+ae.titleswatchesreset+'"><span class="glyphicon glyphicon-repeat"></span></button><ul></ul></div>'),r}function p(){oe={actualswatch:!1,swatchescontainer:e(".cp-swatches",ie),swatches:e(".cp-swatches ul",ie),swatches_add:e(".cp-swatches button.add",ie),swatches_remove:e(".cp-swatches button.remove",ie),swatches_reset:e(".cp-swatches button.reset",ie),all_sliders:e(".cp-sliders, .cp-preview input",ie),hsvpanel:{sv:e(".cp-hsvpanel-sv",ie),sv_marker:e(".cp-hsvpanel-sv .cp-marker-point",ie),h:e(".cp-hsvpanel-h",ie),h_marker:e(".cp-hsvpanel-h .cp-hsvmarker-vertical",ie),a:e(".cp-hsvpanel-a span",ie),a_marker:e(".cp-hsvpanel-a .cp-hsvmarker-vertical",ie)},sliders:{hue:e(".cp-hslhue span",ie),hue_marker:e(".cp-hslhue .cp-marker",ie),saturation:e(".cp-hslsaturation span",ie),saturation_marker:e(".cp-hslsaturation .cp-marker",ie),lightness:e(".cp-hsllightness span",ie),lightness_marker:e(".cp-hsllightness .cp-marker",ie),opacity:e(".cp-opacity span",ie),opacity_marker:e(".cp-opacity .cp-marker",ie),red:e(".cp-rgbred span",ie),red_marker:e(".cp-rgbred .cp-marker",ie),green:e(".cp-rgbgreen span",ie),green_marker:e(".cp-rgbgreen .cp-marker",ie),blue:e(".cp-rgbblue span",ie),blue_marker:e(".cp-rgbblue .cp-marker",ie),cielightness:e(".cp-cielightness span",ie),cielightness_marker:e(".cp-cielightness .cp-marker",ie),ciechroma:e(".cp-ciechroma span",ie),ciechroma_marker:e(".cp-ciechroma .cp-marker",ie),ciehue:e(".cp-ciehue span",ie),ciehue_marker:e(".cp-ciehue .cp-marker",ie),preview:e(".cp-preview input",ie)},all_pills:e(".cp-pills",ie),pills:{hsvpanel:e(".cp-pill-hsvpanel",ie),sliders:e(".cp-pill-sliders",ie),swatches:e(".cp-pill-swatches",ie)}},ae.customswatches||(oe.swatches_add.hide(),oe.swatches_remove.hide(),oe.swatches_reset.hide())}function u(){ae.flat&&(de?ie=e('<div class="cp-container"></div>').insertAfter(he):(ie=e('<div class="cp-container"></div>'),he.append(ie)),ie.append(d()),s(),y())}function v(){ae.connectedinput instanceof jQuery?ae.connectedinput.add(he):!1===ae.connectedinput?ae.connectedinput=he:ae.connectedinput=e(ae.connectedinput).add(he)}function g(){he.on("colorpickersliders.updateColor",function(e,r){n(r)}),he.on("colorpickersliders.show",function(){o()}),he.on("colorpickersliders.hide",function(){c()}),ae.flat||"focus"!==ae.trigger||(void 0===he.attr("tabindex")&&he.attr("tabindex",-1),ae.preventtouchkeyboardonshow&&(e(he).prop("readonly",!0).addClass("cp-preventtouchkeyboardonshow"),e(he).on("click",function(r){ge&&(e(he).prop("readonly",!1),r.stopPropagation())})),de||e(he).on("click",function(e){o(),e.stopPropagation()}),e(he).on("focus",function(e){o(),e.stopPropagation()}),e(he).on("blur",function(r){c(),ae.preventtouchkeyboardonshow&&e(he).prop("readonly",!0),r.stopPropagation()})),pe&&pe.on("keyup change",function(){n(e(this).val(),!0)})}function f(){ie.on("contextmenu",function(e){return e.preventDefault(),!1}),e(document).on("colorpickersliders.changeswatches",function(){G()}),oe.swatches.on("touchstart mousedown click","li span",function(r){n(e(this).css("background-color")),r.preventDefault()}),oe.swatches_add.on("touchstart mousedown click",function(e){E(),e.preventDefault(),e.stopPropagation()}),oe.swatches_remove.on("touchstart mousedown click",function(e){O(),e.preventDefault(),e.stopPropagation()}),oe.swatches_reset.on("touchstart touchend mousedown click",function(e){"click"!==e.type&&"touchend"!==e.type||H(),e.preventDefault(),e.stopImmediatePropagation()}),oe.sliders.hue.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("hsla","h",3.6*z(be="hue",e)),Y())}),oe.sliders.saturation.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("hsla","s",z(be="saturation",e)/100),Y())}),oe.sliders.lightness.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("hsla","l",z(be="lightness",e)/100),Y())}),oe.sliders.opacity.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("hsla","a",z(be="opacity",e)/100),Y())}),oe.sliders.red.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("rgba","r",2.55*z(be="red",e)),Y())}),oe.sliders.green.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("rgba","g",2.55*z(be="green",e)),Y())}),oe.sliders.blue.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("rgba","b",2.55*z(be="blue",e)),Y())}),oe.hsvpanel.sv.on("touchstart mousedown",function(e){if(e.preventDefault(),!(e.which>1)){be="hsvsv";var r=L("sv",e);F("hsv","s",r.horizontal/100),F("hsv","v",(100-r.vertical)/100),Y()}}),oe.hsvpanel.h.on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(be="hsvh",F("hsv","h",3.6*L("h",e).vertical),Y())}),oe.hsvpanel.a.on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(be="hsva",F("hsv","a",(100-L("a",e).vertical)/100),Y())}),oe.sliders.cielightness.parent().on("touchstart mousedown",function(e){if(e.preventDefault(),!(e.which>1)){var r=z(be="cielightness",e);F("cielch","l",fe/100*r),Y()}}),oe.sliders.ciechroma.parent().on("touchstart mousedown",function(e){if(e.preventDefault(),!(e.which>1)){var r=z(be="ciechroma",e);F("cielch","c",Pe/100*r),Y()}}),oe.sliders.ciehue.parent().on("touchstart mousedown",function(e){e.preventDefault(),e.which>1||(F("cielch","h",3.6*z(be="ciehue",e)),Y())}),oe.sliders.preview.on("click",function(){this.select()}),e(document).on("touchmove mousemove",function(e){be&&((new Date).getTime()-ye>me&&!Se?M(be,e):_(be,e))}),e(document).on("touchend mouseup",function(e){e.which>1||be&&(be=!1,e.preventDefault())}),oe.pills.hsvpanel.on("click",function(e){e.preventDefault(),C()}),oe.pills.sliders.on("click",function(e){e.preventDefault(),P()}),oe.pills.swatches.on("click",function(e){e.preventDefault(),x()}),ae.flat||ne.on("touchstart mousedown",".popover",function(e){return e.preventDefault(),e.stopPropagation(),!1})}function b(e,r){try{localStorage.setItem("cp-userdata-"+e,JSON.stringify(r))}catch(e){}}function k(e){try{return JSON.parse(localStorage.getItem("cp-userdata-"+e))}catch(e){return null}}function w(){return""!==ue?ue:(0===oe.pills.hsvpanel.length&&(ue+="_hsvpanel_"),0===oe.pills.sliders.length&&(ue+="_sliders_"),0===oe.pills.swatches.length&&(ue+="_swatches_"),ue)}function m(){return k("config_activepill"+w())}function S(e){return b("config_activepill"+w(),e)}function y(){switch(m()){case"hsvpanel":C();break;case"sliders":P();break;case"swatches":x();break;default:if(oe.pills.hsvpanel.length){C();break}if(oe.pills.sliders.length){P();break}if(oe.pills.swatches.length){x();break}}}function C(){return 0!==oe.pills.hsvpanel.length&&(e("a",oe.all_pills).removeClass("active"),oe.pills.hsvpanel.addClass("active"),ie.removeClass("sliders-active swatches-active").addClass("hsvpanel-active"),S("hsvpanel"),Y(!0),o(!0),!0)}function P(){return 0!==oe.pills.sliders.length&&(e("a",oe.all_pills).removeClass("active"),oe.pills.sliders.addClass("active"),ie.removeClass("hsvpanel-active swatches-active").addClass("sliders-active"),S("sliders"),Y(!0),o(!0),!0)}function x(){return 0!==oe.pills.swatches.length&&(e("a",oe.all_pills).removeClass("active"),oe.pills.swatches.addClass("active"),ie.removeClass("hsvpanel-active sliders-active").addClass("swatches-active"),S("swatches"),Y(!0),o(!0),!0)}function _(e,r){clearTimeout(we),we=setTimeout(function(){M(e,r)},me)}function M(e,r){var t;if(Se)_(e,r);else{switch(Se=!0,ye=(new Date).getTime(),t="hsvsv"===e?L("sv",r):"hsvh"===e?L("h",r):"hsva"===e?L("a",r):z(e,r),e){case"hsvsv":F("hsv","s",t.horizontal/100),F("hsv","v",(100-t.vertical)/100);break;case"hsvh":F("hsv","h",3.6*t.vertical);break;case"hsva":F("hsv","a",(100-t.vertical)/100);break;case"hue":F("hsla","h",3.6*t);break;case"saturation":F("hsla","s",t/100);break;case"lightness":F("hsla","l",t/100);break;case"opacity":F("hsla","a",t/100);break;case"red":F("rgba","r",2.55*t);break;case"green":F("rgba","g",2.55*t);break;case"blue":F("rgba","b",2.55*t);break;case"cielightness":F("cielch","l",fe/100*t);break;case"ciechroma":F("cielch","c",Pe/100*t);break;case"ciehue":F("cielch","h",3.6*t)}Y(),r.preventDefault(),Se=!1}}function I(){ce=[];for(var e=0;e<ae.swatches.length;e++){var r=tinycolor(ae.swatches[e]);r.isValid()&&ce.push(r.toRgbString())}}function G(){if(ae.swatches){if(ae.customswatches){var r=!1;try{r=JSON.parse(localStorage.getItem("swatches-"+ae.customswatches))}catch(e){}r?ce=r:I()}else I();if(ce instanceof Array){oe.swatches.html("");for(var t=0;t<ce.length;t++){var s=tinycolor(ce[t]);if(s.isValid()){var a=e("<span></span>").css("background-color",s.toRgbString()),i=e('<div class="btn btn-default cp-swatch"></div>');i.append(a),oe.swatches.append(e("<li></li>").append(i))}}}D()}}function D(){var r=!1;e("span",oe.swatches).filter(function(){var t=e(this).css("background-color");if(t=tinycolor(t),t.alpha=Math.round(100*t.alpha)/100,t.toRgbString()===Ce.tiny.toRgbString()){r=!0;var s=e(this).parent();s.is(oe.actualswatch)||(oe.actualswatch&&oe.actualswatch.removeClass("actual"),oe.actualswatch=s,s.addClass("actual"))}}),r||oe.actualswatch&&(oe.actualswatch.removeClass("actual"),oe.actualswatch=!1),oe.actualswatch?(oe.swatches_add.prop("disabled",!0),oe.swatches_remove.prop("disabled",!1)):(oe.swatches_add.prop("disabled",!1),oe.swatches_remove.prop("disabled",!0))}function R(){localStorage.setItem("swatches-"+ae.customswatches,JSON.stringify(ce))}function E(){ce.unshift(Ce.tiny.toRgbString()),R(),e(document).trigger("colorpickersliders.changeswatches")}function O(){var r=ce.indexOf(Ce.tiny.toRgbString());-1!==r&&(ce.splice(r,1),R(),e(document).trigger("colorpickersliders.changeswatches"))}function H(){confirm("Do you really want to reset the swatches? All customizations will be lost!")&&(I(),R(),e(document).trigger("colorpickersliders.changeswatches"))}function F(r,t,s){switch(r){case"hsv":Ce.hsv[t]=s,Ce.tiny=tinycolor({h:Ce.hsv.h,s:Ce.hsv.s,v:Ce.hsv.v,a:Ce.hsv.a}),Ce.rgba=Ce.tiny.toRgb(),Ce.hsla=Ce.tiny.toHsl(),Ce.cielch=e.fn.ColorPickerSliders.rgb2lch(Ce.rgba);break;case"hsla":Ce.hsla[t]=s,Ce.tiny=tinycolor({h:Ce.hsla.h,s:Ce.hsla.s,l:Ce.hsla.l,a:Ce.hsla.a}),Ce.rgba=Ce.tiny.toRgb(),Ce.hsv=Ce.tiny.toHsv(),Ce.cielch=e.fn.ColorPickerSliders.rgb2lch(Ce.rgba),ie.removeClass("cp-unconvertible-cie-color");break;case"rgba":Ce.rgba[t]=s,Ce.tiny=tinycolor({r:Ce.rgba.r,g:Ce.rgba.g,b:Ce.rgba.b,a:Ce.hsla.a}),Ce.hsla=Ce.tiny.toHsl(),Ce.hsv=Ce.tiny.toHsv(),Ce.cielch=e.fn.ColorPickerSliders.rgb2lch(Ce.rgba),ie.removeClass("cp-unconvertible-cie-color");break;case"cielch":Ce.cielch[t]=s,Ce.rgba=e.fn.ColorPickerSliders.lch2rgb(Ce.cielch),Ce.tiny=tinycolor(Ce.rgba),Ce.hsla=Ce.tiny.toHsl(),Ce.hsv=Ce.tiny.toHsv(),ae.erroneousciecolormarkers&&(Ce.rgba.isok?ie.removeClass("cp-unconvertible-cie-color"):ie.addClass("cp-unconvertible-cie-color"))}}function z(r,t){var s=e.fn.ColorPickerSliders.calculateEventPositionPercentage(t,oe.sliders[r]);return oe.sliders[r+"_marker"].data("position",s),s}function L(r,t){var s=e.fn.ColorPickerSliders.calculateEventPositionPercentage(t,oe.hsvpanel.sv,!0);return oe.hsvpanel[r+"_marker"].data("position",s),s}function X(e){xe=setTimeout(function(){Y(e)},ae.updateinterval)}function Y(e){clearTimeout(xe),Date.now=Date.now||function(){return+new Date},Date.now()-ke<ae.updateinterval?X(e):(void 0===e&&(e=!1),ke=Date.now(),!1===ae.hsvpanel||ae.grouping&&"hsvpanel"!==m()||(Z(),N(),V()),!ae.sliders||ae.grouping&&"sliders"!==m()||(!1!==ae.order.opacity&&Q(),!1!==ae.order.hsl&&(B(),j(),J()),!1!==ae.order.rgb&&(U(),W(),q()),!1!==ae.order.cie&&($(),ee(),re()),!1!==ae.order.preview&&te()),e||T(),(100-Ce.cielch.l)*Ce.cielch.a<ae.previewcontrasttreshold?(oe.all_sliders.css("color","#000"),de&&ae.previewontriggerelement&&he.css("background",Ce.tiny.toRgbString()).css("color","#000")):(oe.all_sliders.css("color","#fff"),de&&ae.previewontriggerelement&&he.css("background",Ce.tiny.toRgbString()).css("color","#fff")),!ae.swatches||ae.grouping&&"swatches"!==m()||D(),ae.onchange(ie,Ce),he.data("color",Ce))}function A(){de&&ae.previewontriggerelement&&((100-Ce.cielch.l)*Ce.cielch.a<ae.previewcontrasttreshold?he.css("background",Ce.tiny.toRgbString()).css("color","#000"):he.css("background",Ce.tiny.toRgbString()).css("color","#fff"))}function T(){pe&&pe.each(function(r,t){var s=e(t);switch(s.data("color-format")||ae.previewformat){case"hex":Ce.hsla.a<1?s.val(Ce.tiny.toRgbString()):s.val(Ce.tiny.toHexString());break;case"hsl":s.val(Ce.tiny.toHslString());break;case"rgb":default:s.val(Ce.tiny.toRgbString())}})}function Z(){oe.hsvpanel.sv.css("background",tinycolor("hsv("+Ce.hsv.h+",100%,100%)").toRgbString()),oe.hsvpanel.sv_marker.css("left",100*Ce.hsv.s+"%").css("top",100-100*Ce.hsv.v+"%")}function N(){oe.hsvpanel.h_marker.css("top",Ce.hsv.h/360*100+"%")}function V(){se(oe.hsvpanel.a,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.hsla,"a",1,0,2),!0),oe.hsvpanel.a_marker.css("top",100-100*Ce.hsv.a+"%")}function B(){se(oe.sliders.hue,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.hsla,"h",0,360,7)),oe.sliders.hue_marker.css("left",Ce.hsla.h/360*100+"%")}function j(){se(oe.sliders.saturation,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.hsla,"s",0,1,2)),oe.sliders.saturation_marker.css("left",100*Ce.hsla.s+"%")}function J(){se(oe.sliders.lightness,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.hsla,"l",0,1,3)),oe.sliders.lightness_marker.css("left",100*Ce.hsla.l+"%")}function Q(){se(oe.sliders.opacity,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.hsla,"a",0,1,2)),oe.sliders.opacity_marker.css("left",100*Ce.hsla.a+"%")}function U(){se(oe.sliders.red,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.rgba,"r",0,255,2)),oe.sliders.red_marker.css("left",Ce.rgba.r/255*100+"%")}function W(){se(oe.sliders.green,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.rgba,"g",0,255,2)),oe.sliders.green_marker.css("left",Ce.rgba.g/255*100+"%")}function q(){se(oe.sliders.blue,e.fn.ColorPickerSliders.getScaledGradientStops(Ce.rgba,"b",0,255,2)),oe.sliders.blue_marker.css("left",Ce.rgba.b/255*100+"%")}function K(r,t){if(1===ae.invalidcolorsopacity||!ae.finercierangeedges)return r;r.sort(function(e,r){return e.position-r.position});for(var s=[],a=1;a<r.length;a++)if(r[a].isok!==r[a-1].isok)for(var i=Math.round(r[a].position)-Math.round(r[a-1].position),n=e.fn.ColorPickerSliders.getScaledGradientStops(r[a].rawcolor,t,r[a-1].rawcolor[t],r[a].rawcolor[t],i,ae.invalidcolorsopacity,r[a-1].position,r[a].position),o=0;o<n.length;o++)if(n[o].isok!==r[a-1].isok){s.push(n[o]),o>0&&s.push(n[o-1]);break}return e.merge(s,r)}function $(){var r=e.fn.ColorPickerSliders.getScaledGradientStops(Ce.cielch,"l",0,100,10,ae.invalidcolorsopacity);r=K(r,"l"),se(oe.sliders.cielightness,r),oe.sliders.cielightness_marker.css("left",Ce.cielch.l/fe*100+"%")}function ee(){var r=e.fn.ColorPickerSliders.getScaledGradientStops(Ce.cielch,"c",0,Pe,5,ae.invalidcolorsopacity);r=K(r,"c"),se(oe.sliders.ciechroma,r),oe.sliders.ciechroma_marker.css("left",Ce.cielch.c/Pe*100+"%")}function re(){var r=e.fn.ColorPickerSliders.getScaledGradientStops(Ce.cielch,"h",0,360,28,ae.invalidcolorsopacity);r=K(r,"h"),se(oe.sliders.ciehue,r),oe.sliders.ciehue_marker.css("left",Ce.cielch.h/360*100+"%")}function te(){oe.sliders.preview.css("background",e.fn.ColorPickerSliders.csscolor(Ce.rgba));var r;switch(ae.previewformat){case"hex":r=Ce.hsla.a<1?Ce.tiny.toRgbString():Ce.tiny.toHexString();break;case"hsl":r=Ce.tiny.toHslString();break;case"rgb":default:r=Ce.tiny.toRgbString()}oe.sliders.preview.val(r)}function se(r,t,s){switch(void 0===s&&(s=!1),t.sort(function(e,r){return e.position-r.position}),ve){case"noprefix":e.fn.ColorPickerSliders.renderNoprefix(r,t,s);break;case"webkit":e.fn.ColorPickerSliders.renderWebkit(r,t,s);break;case"ms":e.fn.ColorPickerSliders.renderMs(r,t,s);break;case"svg":e.fn.ColorPickerSliders.renderSVG(r,t,s);break;case"oldwebkit":e.fn.ColorPickerSliders.renderOldwebkit(r,t,s)}}var ae,ie,ne,oe,ce,le=!1,he=e(this),de=he.is("input"),pe=!1,ue="",ve=!1,ge=!1,fe=101,be=!1,ke=0,we=null,me=70,Se=!1,ye=0,Ce={tiny:null,hsla:null,rgba:null,hsv:null,cielch:null},Pe=144;le||(le=!0,"filter"===(ve=e.fn.ColorPickerSliders.detectWhichGradientIsSupported())&&(ve=!1),!ve&&e.fn.ColorPickerSliders.svgSupported()&&(ve="svg"),t(),ae.order.hasOwnProperty("preview")&&!1!==ae.order.preview||ve||(ae.order.preview=10),v(),a(),i(),A(),T(),ae.flat&&u(),g());var xe})},e.fn.ColorPickerSliders.getEventCoordinates=function(e){return void 0!==e.pageX?{pageX:e.originalEvent.pageX,pageY:e.originalEvent.pageY}:void 0!==e.originalEvent.touches?{pageX:e.originalEvent.touches[0].pageX,pageY:e.originalEvent.touches[0].pageY}:void 0},e.fn.ColorPickerSliders.calculateEventPositionPercentage=function(r,t,s){void 0===s&&(s=!1);var a=e.fn.ColorPickerSliders.getEventCoordinates(r),i=t.width(),n=(a.pageX-t.offset().left)/i*100;if(n<0&&(n=0),n>100&&(n=100),s){var o=t.height(),c=(a.pageY-t.offset().top)/o*100;return c<0&&(c=0),c>100&&(c=100),{horizontal:n,vertical:c}}return n},e.fn.ColorPickerSliders.getScaledGradientStops=function(r,t,s,a,i,n,o,c){void 0===n&&(n=1),void 0===o&&(o=0),void 0===c&&(c=100);for(var l=[],h=a-s,d=!0,p=0;p<i;++p){var u,v=p/(i-1),g=e.fn.ColorPickerSliders.modifyColor(r,t,v*h+s);if(n<1){var f=e.fn.ColorPickerSliders.lch2rgb(g,n);d=f.isok,u=e.fn.ColorPickerSliders.csscolor(f,n)}else u=e.fn.ColorPickerSliders.csscolor(g,n);l[p]={color:u,position:v*(c-o)+o,isok:d,rawcolor:g}}return l},e.fn.ColorPickerSliders.getGradientStopsCSSString=function(e){for(var r="",t="",s="",a=0;a<e.length;a++){var i=e[a];r+=","+i.color+" "+i.position+"%",t+=",color-stop("+i.position+"%,"+i.color+")";var n=tinycolor(i.color);s+='<stop stop-color="'+n.toHexString()+'" stop-opacity="'+n.toRgb().a+'" offset="'+i.position/100+'"/>'}return{noprefix:r,oldwebkit:t,svg:s}},e.fn.ColorPickerSliders.renderNoprefix=function(r,t,s){void 0===s&&(s=!1);var a,i=e.fn.ColorPickerSliders.getGradientStopsCSSString(t).noprefix;a=s?"linear-gradient(to bottom":"linear-gradient(to right",a+=i+")",r.css("background-image",a)},e.fn.ColorPickerSliders.renderWebkit=function(r,t,s){void 0===s&&(s=!1);var a,i=e.fn.ColorPickerSliders.getGradientStopsCSSString(t).noprefix;a=s?"-webkit-linear-gradient(top":"-webkit-linear-gradient(left",a+=i+")",r.css("background-image",a)},e.fn.ColorPickerSliders.renderOldwebkit=function(r,t,s){void 0===s&&(s=!1);var a,i=e.fn.ColorPickerSliders.getGradientStopsCSSString(t).oldwebkit;a=s?"-webkit-gradient(linear, 0% 0%, 0 100%":"-webkit-gradient(linear, 0% 0%, 100% 0%",a+=i+")",r.css("background-image",a)},e.fn.ColorPickerSliders.renderMs=function(r,t,s){void 0===s&&(s=!1);var a,i=e.fn.ColorPickerSliders.getGradientStopsCSSString(t).noprefix;a=s?"-ms-linear-gradient(to bottom":"-ms-linear-gradient(to right",a+=i+")",r.css("background-image",a)},e.fn.ColorPickerSliders.renderSVG=function(r,t,s){void 0===s&&(s=!1);var a="",i=e.fn.ColorPickerSliders.getGradientStopsCSSString(t).svg;a=s?'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100%">':'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><linearGradient id="vsgg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">',a+=i,a+='</linearGradient><rect x="0" y="0" width="1" height="1" fill="url(#vsgg)" /></svg>',a="url(data:image/svg+xml;base64,"+e.fn.ColorPickerSliders.base64encode(a)+")",r.css("background-image",a)},e.fn.ColorPickerSliders.base64encode=function(e){var r,t,s,a,i,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=0,c=0,l="",h=[];if(!e)return e;do{r=(i=e.charCodeAt(o++)<<16|e.charCodeAt(o++)<<8|e.charCodeAt(o++))>>18&63,t=i>>12&63,s=i>>6&63,a=63&i,h[c++]=n.charAt(r)+n.charAt(t)+n.charAt(s)+n.charAt(a)}while(o<e.length);l=h.join("");var d=e.length%3;return(d?l.slice(0,d-3):l)+"===".slice(d||3)},e.fn.ColorPickerSliders.isGoodRgb=function(e){return!(e.r>258||e.g>258||e.b>258||e.r<-1||e.g<-1||e.b<-1)&&(e.r=Math.min(255,e.r),e.g=Math.min(255,e.g),e.b=Math.min(255,e.b),e.r=Math.max(0,e.r),e.g=Math.max(0,e.g),e.b=Math.max(0,e.b),!0)},e.fn.ColorPickerSliders.rgb2lch=function(r){var t=e.fn.ColorPickerSliders.CIELab2CIELCH(e.fn.ColorPickerSliders.XYZ2CIELab(e.fn.ColorPickerSliders.rgb2XYZ(r)));return r.hasOwnProperty("a")&&(t.a=r.a),t},e.fn.ColorPickerSliders.lch2rgb=function(r,t){void 0===t&&(t=1);var s=e.fn.ColorPickerSliders.XYZ2rgb(e.fn.ColorPickerSliders.CIELab2XYZ(e.fn.ColorPickerSliders.CIELCH2CIELab(r)));if(e.fn.ColorPickerSliders.isGoodRgb(s))return r.hasOwnProperty("a")&&(s.a=r.a),s.isok=!0,s;var a=e.extend({},r),i=a.c,n=-1,o=0;do{++o,a.c=n+(i-n)/2,s=e.fn.ColorPickerSliders.XYZ2rgb(e.fn.ColorPickerSliders.CIELab2XYZ(e.fn.ColorPickerSliders.CIELCH2CIELab(a))),e.fn.ColorPickerSliders.isGoodRgb(s)?n=a.c:i=a.c}while(Math.abs(i-n)>.9&&o<100);return r.hasOwnProperty("a")&&(s.a=r.a),s.r=Math.max(0,s.r),s.g=Math.max(0,s.g),s.b=Math.max(0,s.b),s.r=Math.min(255,s.r),s.g=Math.min(255,s.g),s.b=Math.min(255,s.b),t<1&&(s.hasOwnProperty("a")?s.a=s.a*t:s.a=t),s.isok=!1,s},e.fn.ColorPickerSliders.modifyColor=function(r,t,s){var a=e.extend({},r);if(!r.hasOwnProperty(t))throw"Missing color property: "+t;return a[t]=s,a},e.fn.ColorPickerSliders.csscolor=function(r,t){void 0===t&&(t=1);var s=!1,a=e.extend({},r);return a.hasOwnProperty("c")&&(a=e.fn.ColorPickerSliders.lch2rgb(a,t)),a.hasOwnProperty("h")&&(s="hsla("+a.h+","+100*a.s+"%,"+100*a.l+"%,"+a.a+")"),a.hasOwnProperty("r")&&(s=a.a<1?"rgba("+Math.round(a.r)+","+Math.round(a.g)+","+Math.round(a.b)+","+a.a+")":"rgb("+Math.round(a.r)+","+Math.round(a.g)+","+Math.round(a.b)+")"),s},e.fn.ColorPickerSliders.rgb2XYZ=function(e){var r={},t=e.r/255,s=e.g/255,a=e.b/255;return t>.04045?t=Math.pow((t+.055)/1.055,2.4):t/=12.92,s>.04045?s=Math.pow((s+.055)/1.055,2.4):s/=12.92,a>.04045?a=Math.pow((a+.055)/1.055,2.4):a/=12.92,t*=100,s*=100,a*=100,r.x=.4124*t+.3576*s+.1805*a,r.y=.2126*t+.7152*s+.0722*a,r.z=.0193*t+.1192*s+.9505*a,r},e.fn.ColorPickerSliders.XYZ2CIELab=function(e){var r={},t=e.x/95.047,s=e.y/100,a=e.z/108.883;return t=t>.008856?Math.pow(t,.333333333):7.787*t+.137931034,s=s>.008856?Math.pow(s,.333333333):7.787*s+.137931034,a=a>.008856?Math.pow(a,.333333333):7.787*a+.137931034,r.l=116*s-16,r.a=500*(t-s),r.b=200*(s-a),r},e.fn.ColorPickerSliders.CIELab2CIELCH=function(e){var r={};return r.l=e.l,r.c=Math.sqrt(Math.pow(e.a,2)+Math.pow(e.b,2)),r.h=Math.atan2(e.b,e.a),r.h>0?r.h=r.h/Math.PI*180:r.h=360-Math.abs(r.h)/Math.PI*180,r},e.fn.ColorPickerSliders.CIELCH2CIELab=function(e){var r={};return r.l=e.l,r.a=Math.cos(.01745329251*e.h)*e.c,r.b=Math.sin(.01745329251*e.h)*e.c,r},e.fn.ColorPickerSliders.CIELab2XYZ=function(e){var r={};return r.y=(e.l+16)/116,r.x=e.a/500+r.y,r.z=r.y-e.b/200,Math.pow(r.y,3)>.008856?r.y=Math.pow(r.y,3):r.y=(r.y-.137931034)/7.787,Math.pow(r.x,3)>.008856?r.x=Math.pow(r.x,3):r.x=(r.x-.137931034)/7.787,Math.pow(r.z,3)>.008856?r.z=Math.pow(r.z,3):r.z=(r.z-.137931034)/7.787,r.x=95.047*r.x,r.y=100*r.y,r.z=108.883*r.z,r},e.fn.ColorPickerSliders.XYZ2rgb=function(e){var r={};return e.x=e.x/100,e.y=e.y/100,e.z=e.z/100,r.r=3.2406*e.x+-1.5372*e.y+-.4986*e.z,r.g=-.9689*e.x+1.8758*e.y+.0415*e.z,r.b=.0557*e.x+-.204*e.y+1.057*e.z,r.r>.0031308?r.r=1.055*Math.pow(r.r,.41666667)-.055:r.r=12.92*r.r,r.g>.0031308?r.g=1.055*Math.pow(r.g,.41666667)-.055:r.g=12.92*r.g,r.b>.0031308?r.b=1.055*Math.pow(r.b,.41666667)-.055:r.b=12.92*r.b,r.r=Math.round(255*r.r),r.g=Math.round(255*r.g),r.b=Math.round(255*r.b),r},e.fn.ColorPickerSliders.detectWhichGradientIsSupported=function(){var e=document.createElement("detectGradientSupport").style;try{if(e.backgroundImage="linear-gradient(to top left, #9f9, white)",-1!==e.backgroundImage.indexOf("gradient"))return"noprefix";if(e.backgroundImage="-webkit-linear-gradient(left top, #9f9, white)",-1!==e.backgroundImage.indexOf("gradient"))return"webkit";if(e.backgroundImage="-ms-linear-gradient(left top, #9f9, white)",-1!==e.backgroundImage.indexOf("gradient"))return"ms";if(e.backgroundImage="-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))",-1!==e.backgroundImage.indexOf("gradient"))return"oldwebkit"}catch(r){try{if(e.filter='progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=0)',-1!==e.filter.indexOf("DXImageTransform"))return"filter"}catch(e){}}return!1},e.fn.ColorPickerSliders.svgSupported=function(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}}(jQuery);