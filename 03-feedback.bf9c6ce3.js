!function(){function e(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=l.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var l=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,l){r[e]=l},l.parcelRequired7c6=a);var o=a("dCfNN"),n={formEl:document.querySelector(".feedback-form"),labelEl:document.querySelector('[name="email"]'),textAreaEl:document.querySelector('[name="message"]')};n.formEl.addEventListener("input",e(o)((function(e){localStorage.setItem(f,JSON.stringify({email:n.labelEl.value,message:n.textAreaEl.value}))}),500)),n.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(f),console.log({email:n.labelEl.value,message:n.textAreaEl.value})}));var u,i,f="feedback-form-state";u=localStorage.getItem(f),(i=JSON.parse(u))&&(n.textAreaEl.value=i.message,n.labelEl.value=i.email)}();
//# sourceMappingURL=03-feedback.bf9c6ce3.js.map
