/* ========= INFORMATION ============================

- document:  catok popups
- author:    Kameng Grop Grop
- profile:   http://gropgrop.com
- version:   0.0.1

==================================================== */

!function(a){a.fn.slickModals=function(b){var c=a.extend({cookieTriggerClass:"setSlickCookie",cookieName:"slickCookie"},b);return this.each(function(){function j(c){"center"===c?a(b).children(".slickWindow").css({margin:"auto"}):"bottomCenter"===c||"topCenter"===c?a(b).children(".slickWindow").css({"margin-left":"auto","margin-right":"auto"}):"right"!==c&&"left"!==c||a(b).children(".slickWindow").css({"margin-top":"auto","margin-bottom":"auto"})}function k(){c.breakPoint=parseInt(c.breakPoint),a(b).children(".slickWindow").addClass("animated").css({"box-shadow":c.popupShadowOffsetX+" "+c.popupShadowOffsetY+" "+c.popupShadowBlurRadius+" "+c.popupShadowSpreadRadius+" "+c.popupShadowColor,background:c.popupBackground,"-webkit-animation-duration":c.popupAnimationDuration+"s","animation-duration":c.popupAnimationDuration+"s","-webkit-animation-delay":parseFloat(c.overlayTransitionSpeed)/2+"s","animation-delay":parseFloat(c.overlayTransitionSpeed)/2+"s"}),c.responsive===!0&&a(window).width()<=c.breakPoint?(a(b).children(".slickWindow").addClass(c.mobileLocation).css({"border-radius":c.mobileRadius,width:c.mobileWidth,height:c.mobileHeight,margin:c.mobileMargin,padding:c.mobilePadding}),j(c.mobileLocation)):(a(b).children(".slickWindow").addClass(c.popupLocation).css({"border-radius":c.popupRadius,width:c.popupWidth,height:c.popupHeight,margin:c.popupMargin,padding:c.popupPadding}),j(c.popupLocation))}function l(){a(b).children(".slickWindow").addClass(c.popupAnimationEffect)}function m(){a(b).children(".slickWindow").removeClass(c.popupAnimationEffect)}function n(){c.contentAnimate===!0&&a(b).children(".slickWindow").children().not(".slickCloseBtn").wrapAll('<div class="slickContent"></div>')}function o(){c.contentAnimate===!0&&a(b).find(".slickWindow .slickContent").addClass(c.contentAnimateEffect+" animated").css({"-webkit-animation-duration":c.contentAnimateSpeed+"s","animation-duration":c.contentAnimateSpeed+"s","-webkit-animation-delay":c.contentAnimateDelay+"s","animation-delay":c.contentAnimateDelay+"s"})}function p(){c.contentAnimate===!0&&a(b).find(".slickWindow .slickContent").removeClass(c.contentAnimateEffect)}function q(){i.addClass("blurred").css({"-webkit-filter":"blur("+c.blurBgRadius+")",filter:"blur("+c.blurBgRadius+")"})}function r(){i.addClass("scaled").css({"-webkit-transform":"scale("+c.scaleBgValue+")",transform:"scale("+c.scaleBgValue+")"})}function s(){"blur"===c.pageEffect?q():"scale"===c.pageEffect?r():"both"===c.pageEffect&&(q(),r()),"blur"!==c.pageEffect&&"scale"!==c.pageEffect&&"both"!==c.pageEffect||i.css({"-webkit-transition-duration":c.overlayTransitionSpeed+"s","transition-duration":c.overlayTransitionSpeed+"s"})}function t(){(i.hasClass("blurred")||i.hasClass("scaled"))&&i.removeClass("blurred scaled").css({"-webkit-transform":"",transform:"","-webkit-filter":"",filter:""})}function u(){c.overlayBg===!0&&(a(b).prepend('<div class="slickOverlay"></div>'),c.overlayClosesModal===!0&&a(b).children(".slickOverlay").addClass("closeModal"),a(b).children(".slickOverlay").addClass(c.cookieTriggerClass).css({background:c.overlayBgColor,"-webkit-transition-duration":c.overlayTransitionSpeed+"s","transition-duration":c.overlayTransitionSpeed+"s"}))}function v(){c.addCloseButton===!0&&(a(b).children(".slickWindow").prepend('<div class="slickCloseBtn close closeModal '+c.buttonStyle+'"></div>'),c.setCookie===!0&&a(b).find(".slickWindow").children(".closeModal").addClass(c.cookieTriggerClass))}function w(){c.enableESC===!0&&a(window).bind("keydown",function(a){27===a.keyCode&&G()})}function x(){void 0!==c.onSlickLoad&&c.onSlickLoad()}function y(){void 0!==c.onSlickClose&&c.onSlickClose()}function z(){if(!d)if("delayed"===c.popupType)setTimeout(F,c.delayTime);else if("exit"===c.popupType){var b=!1;a(document).on("mouseleave",function(a){a.clientY<0&&!b&&(b=!0,F())})}else if("scrolled"===c.popupType){var e=!1;a(document).scroll(function(){var b=a(this).scrollTop();b>c.scrollTopDistance&&!e&&(e=!0,F())})}}function A(){c.videoSupport===!0&&c.videoAutoPlay===!0&&g.length>0&&g.attr("src",h+"?autoplay=1")}function B(){c.videoSupport===!0&&c.videoStopOnClose===!0&&g.length>0&&g.attr("src",h+"?autoplay=0")}function C(){switch(days=c.cookieDays,CookieDate=new Date,CookieDate.setTime(CookieDate.getTime()+24*days*60*60*1e3),c.cookieScope){case"domain":scopeSetting="/";break;case"page":scopeSetting=window.location.href}days>0?document.cookie=c.cookieName+"=true; path="+scopeSetting+"; expires="+CookieDate.toGMTString():0===days&&(document.cookie=c.cookieName+"=true; path="+scopeSetting+";")}function D(){c.setCookie===!0&&(a("."+c.cookieTriggerClass).on("click",function(){C()}),c.enableESC===!0&&a(window).bind("keydown",function(a){27===a.keyCode&&C()}))}function E(){a(b).css({"-webkit-transition-duration":c.overlayTransitionSpeed+"s","transition-duration":c.overlayTransitionSpeed+"s"})}function F(){a(b).addClass("isActive"),s(),l(),o(),x(),A()}function G(){a(b).removeClass("isActive"),t(),m(),p(),y(),B()}var b=this,d=document.cookie.indexOf(c.cookieName)>=0,e=window.location.pathname,f=a.inArray(e,c.hideOnPages)===-1,g=a(b).find('iframe[src*="youtube.com"]'),h=g.attr("src"),i=a("body > *").not(".slickModal, script");f&&(E(),u(),v(),w(),z(),k(),D(),n(),a(b).find(".closeModal").on("click",function(){G()}),a("."+c.reopenClass).on("click",function(){F()}))})}}(jQuery);
