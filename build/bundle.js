var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function l(t){return null==t?"":t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let g;function p(t){g=t}const m=[],y=[],x=[],b=[],_=Promise.resolve();let v=!1;function C(t){x.push(t)}let w=!1;const q=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<m.length;t+=1){const n=m[t];p(n),H(n.$$)}for(m.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];q.has(n)||(q.add(n),n())}x.length=0}while(m.length);for(;b.length;)b.pop()();v=!1,w=!1,q.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const j=new Set;function A(t,n){t&&t.i&&(j.delete(t),t.i(n))}function M(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),(void 0).c.push(()=>{j.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function k(t){t&&t.c()}function N(t,e,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:s}=t.$$;i&&i.m(e,c),C(()=>{const e=l.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(C)}function B(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(n,r,c,i,l,u,s=[-1]){const a=g;p(n);const d=r.props||{},h=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:s};let $=!1;if(h.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),$&&O(n,t)),e}):[],h.update(),$=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();r.intro&&A(n.$$.fragment),N(n,r.target,r.anchor),E()}p(a)}class D{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}var G=["嗨","Hey","Hallo","Hola","Hoi","Halló","Bonjour","こんにちは"];function P(t,n,e){const o=t.slice();return o[5]=n[e],o[7]=e,o}function T(n){let e,o;return{c(){e=a("i"),$(e,"class",o="iconfont icon-"+n[5]+" svelte-9aqs42")},m(t,n){s(t,e,n)},p:t,d(t){t&&f(e)}}}function z(t){let n,e,o,r,c,d=t[1],g=[];for(let n=0;n<d.length;n+=1)g[n]=T(P(t,d,n));const p=t[4].default,m=function(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}(p,t,t[3],null);return{c(){n=a("div");for(let t=0;t<g.length;t+=1)g[t].c();e=h(),o=a("span"),m&&m.c(),$(o,"class",r=l(t[0])+" svelte-9aqs42"),$(n,"class","highlight svelte-9aqs42")},m(t,r){s(t,n,r);for(let t=0;t<g.length;t+=1)g[t].m(n,null);u(n,e),u(n,o),m&&m.m(o,null),c=!0},p(t,[u]){if(2&u){let o;for(d=t[1],o=0;o<d.length;o+=1){const r=P(t,d,o);g[o]?g[o].p(r,u):(g[o]=T(r),g[o].c(),g[o].m(n,e))}for(;o<g.length;o+=1)g[o].d(1);g.length=d.length}m&&m.p&&8&u&&m.p(i(p,t,t[3],null),function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(p,t[3],u,null)),(!c||1&u&&r!==(r=l(t[0])+" svelte-9aqs42"))&&$(o,"class",r)},i(t){c||(A(m,t),c=!0)},o(t){M(m,t),c=!1},d(t){t&&f(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(g,t),m&&m.d(t)}}}function F(t,n,e){let{icon:o}=n,{highlightClass:r}=n;const c=o?o.split(","):[];let{$$slots:i={},$$scope:l}=n;return t.$set=t=>{"icon"in t&&e(2,o=t.icon),"highlightClass"in t&&e(0,r=t.highlightClass),"$$scope"in t&&e(3,l=t.$$scope)},[r,c,o,l,i]}class I extends D{constructor(t){super(),S(this,t,F,z,c,{icon:2,highlightClass:0})}}function J(t){let n;return{c(){n=d("泛前端")},m(t,e){s(t,n,e)},d(t){t&&f(n)}}}function K(t){let n;return{c(){n=d("滴滴出行")},m(t,e){s(t,n,e)},d(t){t&&f(n)}}}function L(t){let n,e,o,r,c,i,l,g,p,m,y,x,b,_;const v=new I({props:{icon:"apple,h5",highlightClass:"moegi",$$slots:{default:[J]},$$scope:{ctx:t}}}),C=new I({props:{icon:"didi",highlightClass:"orange",$$slots:{default:[K]},$$scope:{ctx:t}}});return{c(){n=a("main"),e=a("h1"),o=a("span"),o.textContent=t[0]+",",r=d("我是Diu."),c=h(),i=a("p"),l=d("主流"),k(v.$$.fragment),g=d("开发工程师，就职于"),k(C.$$.fragment),p=d("。"),m=h(),y=a("p"),y.textContent="开发之外，也做一些设计领域的事。",x=h(),b=a("a"),b.textContent="Github",$(b,"href","https://github.com/ddiu8081")},m(t,f){s(t,n,f),u(n,e),u(e,o),u(e,r),u(n,c),u(n,i),u(i,l),N(v,i,null),u(i,g),N(C,i,null),u(i,p),u(n,m),u(n,y),u(n,x),u(n,b),_=!0},p(t,[n]){const e={};2&n&&(e.$$scope={dirty:n,ctx:t}),v.$set(e);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),C.$set(o)},i(t){_||(A(v.$$.fragment,t),A(C.$$.fragment,t),_=!0)},o(t){M(v.$$.fragment,t),M(C.$$.fragment,t),_=!1},d(t){t&&f(n),B(v),B(C)}}}function Q(t){return[G[Math.floor(Math.random()*G.length)]]}return new class extends D{constructor(t){super(),S(this,t,Q,L,c,{})}}({target:document.body})}();
