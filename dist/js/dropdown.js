/*! formstone v0.5.2 [dropdown.js] 2015-04-14 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){I=b.$body}function e(d){d.multiple=this.prop("multiple"),d.disabled=this.is(":disabled"),d.multiple?d.links=!1:d.external&&(d.links=!0);var e=this.find(":selected").not(":disabled"),f=e.text(),g=this.find("option").index(e);d.multiple||""===d.label?d.label="":(e=this.prepend('<option value="" class="'+C.item_placeholder+'" selected>'+d.label+"</option>"),f=d.label,g=0);var h=this.find("option, optgroup"),i=h.filter("option");d.tabIndex=this[0].tabIndex,this[0].tabIndex=-1;var l=[C.base,d.customClass];d.mobile||b.isMobile?l.push(C.mobile):d.cover&&l.push(C.cover),d.multiple&&l.push(C.multiple),d.disabled&&l.push(C.disabled);var m='<div class="'+l.join(" ")+'" tabindex="'+d.tabIndex+'"></div>',n="";d.multiple||(n+='<button type="button" class="'+C.selected+'">',n+=a("<span></span>").text(y(f,d.trim)).html(),n+="</button>"),n+='<div class="'+C.options+'">',n+="</div>",this.wrap(m).after(n),d.$dropdown=this.parent(B.base),d.$allOptions=h,d.$options=i,d.$selected=d.$dropdown.find(B.selected),d.$wrapper=d.$dropdown.find(B.options),d.$placeholder=d.$dropdown.find(B.placeholder),d.index=-1,d.guid=F++,d.closed=!0,d.keyDownGUID=D.keyDown+d.guid,d.clickGUID=D.click+d.guid,j(d),d.multiple||u(g,d),a.fn.scrollbar!==c&&d.$wrapper.scrollbar(),d.$selected.touch({tap:!0}).on(D.tap,d,k),d.$dropdown.on(D.click,B.item,d,p).on(D.close,d,o),this.on(D.change,d,q),b.isMobile||(d.$dropdown.on(D.focus,d,r).on(D.blur,d,s),this.on(D.focus,d,function(a){a.data.$dropdown.trigger(D.raw.focus)}))}function f(b){b.$dropdown.hasClass(C.open)&&b.$selected.trigger(D.click),a.fn.scrollbar!==c&&b.$wrapper.scrollbar("destroy"),b.$el[0].tabIndex=b.tabIndex,b.$dropdown.off(D.namespace),b.$options.off(D.namespace),b.$placeholder.remove(),b.$selected.remove(),b.$wrapper.remove(),b.$el.off(D.namespace).show().unwrap()}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(C.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(C.open)&&a.$selected.trigger(D.click),a.$dropdown.addClass(C.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function h(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(C.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(C.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function i(a){var b=a.index;a.$allOptions=a.$el.find("option, optgroup"),a.$options=a.$allOptions.filter("option"),a.index=-1,b=a.$options.index(a.$options.filter(":selected")),j(a),a.multiple||u(b,a)}function j(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(C.group),g.is(":disabled")&&h.push(C.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val();g.attr("value")||g.attr("value",i),h.push(C.item),g.hasClass(C.item_placeholder)&&h.push(C.item_placeholder),g.is(":selected")&&h.push(C.item_selected),g.is(":disabled")&&h.push(C.item_disabled),c+='<button type="button" class="'+h.join(" ")+'" ',c+='data-value="'+i+'">',c+=a("<span></span>").text(y(g.text(),b.trim)).html(),c+="</button>",d++}}b.$items=b.$wrapper.html(c).find(B.item)}function k(a){E.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile)c.closed?l(c):m(c);else{var d=c.$el[0];if(H.createEvent){var e=H.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,G,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}}function l(b){if(b.closed){a(B.base).not(b.$dropdown).trigger(D.close,[b]);{var c=b.$dropdown.offset(),d=I.outerHeight(),e=b.$wrapper.outerHeight(!0);b.index>=0?b.$items.eq(b.index).position():{left:0,top:0}}c.top+e>d&&b.$dropdown.addClass(C.bottom),I.on(b.clickGUID,":not("+B.options+")",b,n),b.$dropdown.addClass(C.open),v(b),b.closed=!1}}function m(a){a&&!a.closed&&(I.off(a.clickGUID),a.$dropdown.removeClass([C.open,C.bottom].join(" ")),a.closed=!0)}function n(b){E.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(B.base).length&&m(c)}function o(a){var b=a.data;b&&m(b)}function p(b){E.killEvent(b);var c=a(this),d=b.data;if(!d.disabled){if(d.$wrapper.is(":visible")){var e=d.$items.index(c);e!==d.index&&(u(e,d),w(d))}d.multiple||m(d)}}function q(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+z(d.val())+"']"));u(f,e),w(e)}}function r(a){E.killEvent(a);var b=a.data;b.disabled||b.multiple||b.$dropdown.addClass(C.focus).on(b.keyDownGUID,b,t)}function s(a){E.killEvent(a);var b=a.data;b.$dropdown.removeClass(C.focus).off(b.keyDownGUID),b.multiple||m(b)}function t(c){var d=c.data;if(13===c.keyCode)d.closed||(m(d),u(d.index,d)),w(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){E.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}}f>=0&&(u(f,d),v(d))}}function u(a,b){var c=b.$items.eq(a),d=b.$options.eq(a),e=c.hasClass(C.item_selected),f=c.hasClass(C.item_disabled);if(!f)if(b.multiple)e?(d.prop("selected",null),c.removeClass(C.item_selected)):(d.prop("selected",!0),c.addClass(C.item_selected));else if(a>-1&&a<b.$items.length){var g=d.data("label")||c.html();b.$selected.html(g).removeClass(B.item_placeholder),b.$items.filter(B.item_selected).removeClass(C.item_selected),b.$el[0].selectedIndex=a,c.addClass(C.item_selected),b.index=a}else""!==b.label&&b.$selected.html(b.label)}function v(b){var d=b.$items.eq(b.index),e=b.index>=0&&!d.hasClass(B.item_placeholder)?d.position():{left:0,top:0};a.fn.scrollbar!==c?b.$wrapper.scrollbar("scroll",b.$wrapper.find(".fs-scrollbar-content").scrollTop()+e.top,0).scrollbar("reset"):b.$wrapper.scrollTop(b.$wrapper.scrollTop()+e.top)}function w(a){a.links?x(a):a.$el.trigger(D.raw.change,[!0])}function x(a){var b=a.$el.val();a.external?G.open(b):G.location.href=b}function y(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function z(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var A=b.Plugin("dropdown",{widget:!0,defaults:{cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},methods:{_setup:d,_construct:e,_destruct:f,disable:g,enable:h,update:i,open:l,close:m},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{tap:"tap",close:"close"}}),B=A.classes,C=B.raw,D=A.events,E=A.functions,F=0,G=b.window,H=(b.$window,b.document),I=null}(jQuery,Formstone);