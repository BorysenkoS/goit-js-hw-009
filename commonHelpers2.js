import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form");document.querySelector("textarea");a.addEventListener("input",e=>{const t=new FormData(a),o=t.get("email"),s=t.get("message");r("userData",{email:o,message:s})});a.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(a),o=t.get("email"),s=t.get("message"),m={email:o,message:s};m.email===""||m.message===""?alert("Fill please all fields"):(localStorage.removeItem("email"),localStorage.removeItem("message"),localStorage.removeItem("userData"),a.reset())});function r(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function n(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}window.addEventListener("DOMContentLoaded",()=>{const e=n("userData");a.elements.email.value=(e==null?void 0:e.email)||"",a.elements.message.value=(e==null?void 0:e.message)||""});
//# sourceMappingURL=commonHelpers2.js.map
