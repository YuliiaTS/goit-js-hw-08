function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function b(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function E(e){return l=e,u=setTimeout(j,t),c?y(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(x(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function S(e){return u=void 0,b&&r?y(e):(r=o=void 0,a)}function T(){var e=v(),n=x(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},T.flush=function(){return void 0===u?a:S(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const y={formEl:document.querySelector(".feedback-form"),labelEl:document.querySelector('[name="email"]'),textAreaEl:document.querySelector('[name="message"]')};y.formEl.addEventListener("input",e(t)((function(e){localStorage.setItem("feedback-form-state",JSON.stringify({email:y.labelEl.value,message:y.textAreaEl.value}))}),500)),y.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log({email:y.labelEl.value,message:y.textAreaEl.value})}));!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(y.textAreaEl.value=t.message,y.labelEl.value=t.email)}();
//# sourceMappingURL=03-feedback.eb9ede41.js.map
