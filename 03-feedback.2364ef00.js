!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},l={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in l){var t=l[e];delete l[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},t.parcelRequired7c6=a);var n=a("dCfNN"),o={formEl:document.querySelector(".feedback-form"),labelEl:document.querySelector('[name="email"]'),textAreaEl:document.querySelector('[name="message"]')};o.formEl.addEventListener("input",e(n)((function(e){localStorage.setItem(f,JSON.stringify({email:o.labelEl.value,message:o.textAreaEl.value}))}),500)),o.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(f)}));var u,i,f="feedback-form-state";u=localStorage.getItem(f),(i=JSON.parse(u))&&(o.textAreaEl.value=i.message,o.labelEl.value=i.email)}();
//# sourceMappingURL=03-feedback.2364ef00.js.map
