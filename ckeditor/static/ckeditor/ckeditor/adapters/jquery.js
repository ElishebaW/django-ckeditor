﻿/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){CKEDITOR.config.jqueryOverrideVal=typeof CKEDITOR.config.jqueryOverrideVal=='undefined'?true:CKEDITOR.config.jqueryOverrideVal;var a=Array.prototype.reduce;if(!a)a=function(k){var o=this;if(o===null||o===undefined)throw new TypeError('Object is null or undefined');var l=0,m=o.length>>0,n;if(typeof k!=='function')throw new TypeError('First argument is not callable');if(arguments.length<2){if(m===0)throw new TypeError('Array length is 0 and no second argument');n=o[0];l=1;}else n=arguments[1];while(l<m){if(l in o)n=k.call(undefined,n,o[l],l,o);++l;}return n;};var b=function(k){var l=[],m=k.split('.');for(var n=0;n<m.length;n++)l.push(parseInt(m[n],10));return l;},c=function(k,l){if('undefined'===typeof k)throw new Error('$.versioncompare needs at least one parameter.');l=l||$.fn.jquery;if(k==l)return 0;var m=b(k),n=b(l),o=Math.max(m.length,n.length);for(var p=0;p<o;p++){m[p]=m[p]||0;n[p]=n[p]||0;if(m[p]==n[p])continue;return m[p]>n[p]?1:-1;}return 0;},d=function(){var k=[];if(typeof window.django!='undefined'&&typeof django.jQuery!='undefined')k.push(['django.jQuery',django.jQuery]);if(typeof window.jQuery!='undefined')k.push(['jQuery',window.jQuery]);if(typeof window.grp!='undefined'&&typeof grp.jQuery!='undefined')k.push(['grp.jQuery',grp.jQuery]);return a.call(k,function(l,m,n,o){return c(m[1].fn.jquery,l[1].fn.jquery)>=0?m:l;});};if(typeof CKEDITOR.jQuery=='undefined'){if(typeof CKEDITOR.versionCompare!='function')CKEDITOR.versionCompare=c;var e=d();if(c(e[1].fn.jquery,'1.4.2')<=0){var f=document.getElementsByTagName('script'),g=f[f.length-1],h=g.src,i=h.replace(/\/[^\/]+$/,''),j=i+'/jquery-1.7.2.js';document.write('<script type="text/javascript" src="'+j+'"></sc'+'ript>');}else{CKEDITOR.jQueryObj=e[0];CKEDITOR.jQuery=e[1].noConflict();}}if(typeof CKEDITOR.jQuery=='undefined')return;(function(k){k.extend(k.fn,{ckeditorGet:function(){var l=this.eq(0).data('ckeditorInstance');if(!l)throw 'CKEditor not yet initialized, use ckeditor() with callback.';return l;},ckeditor:function(l,m){if(!CKEDITOR.env.isCompatible)return this;if(!k.isFunction(l)){var n=m;m=l;l=n;}this.filter('textarea, div, p').each(function(){var o=k(this),p=o.data('ckeditorInstance'),q=o.data('_ckeditorInstanceLock'),r=this;if(p&&!q){if(l)l.apply(p,[this]);}else if(!q){if(m.autoUpdateElement||typeof m.autoUpdateElement=='undefined'&&CKEDITOR.config.autoUpdateElement)m.autoUpdateElementJquery=true;m.autoUpdateElement=false;o.data('_ckeditorInstanceLock',true);p=CKEDITOR.replace(r,m);
o.data('ckeditorInstance',p);p.on('instanceReady',function(s){var t=s.editor;setTimeout(function(){if(!t.element){setTimeout(arguments.callee,100);return;}s.removeListener('instanceReady',this.callee);t.on('dataReady',function(){o.trigger('setData.ckeditor',[t]);});t.on('getData',function(w){o.trigger('getData.ckeditor',[t,w.data]);},999);t.on('destroy',function(){o.trigger('destroy.ckeditor',[t]);});var u=o.parents('form');if(t.config.autoUpdateElementJquery&&o.is('textarea')&&u.length){var v=function(){t.updateElement();};u.bind('submit.ckeditor',v);u.bind('form-pre-serialize.ckeditor',v);o.bind('destroy.ckeditor',function(){u.unbind('submit.ckeditor',v);u.unbind('form-pre-serialize.ckeditor',v);});}t.on('destroy',function(){o.data('ckeditorInstance',null);});o.data('_ckeditorInstanceLock',null);o.trigger('instanceReady.ckeditor',[t]);if(l)l.apply(t,[r]);},0);},null,null,9999);}else CKEDITOR.on('instanceReady',function(s){var t=s.editor;setTimeout(function(){if(!t.element){setTimeout(arguments.callee,100);return;}if(t.element.$==r)if(l)l.apply(t,[r]);},0);},null,null,9999);});return this;}});if(CKEDITOR.config.jqueryOverrideVal)k.fn.val=CKEDITOR.tools.override(k.fn.val,function(l){return function(m,n){var o=typeof m!='undefined',p;this.each(function(){var q=k(this),r=q.data('ckeditorInstance');if(!n&&q.is('textarea')&&r){if(o)r.setData(m);else{p=r.getData();return false;}}else if(o)l.call(q,m);else{p=l.call(q);return false;}return true;});return o?this:p;};});})(CKEDITOR.jQuery);})();
