(()=>{"use strict";const t=new class{constructor(){this._lastResult=0}_sanitizeInput(t){if(!isNaN(t)&&""!==t.toString())return"number"==typeof t?t:-1!==t.toString().indexOf(".")?Number.parseFloat(t):Number.parseInt(t);throw"Invalid Input: "+JSON.stringify(t)+" is not a number"}add(t,e){return this._lastResult=this._sanitizeInput(t)+this._sanitizeInput(e),this._lastResult}get lastResult(){return this._lastResult}},e=document.getElementById("calculatorArea"),n=document.createElement("input"),s=document.createElement("input"),a=document.createElement("button");a.innerHTML="Add",a.addEventListener("click",(()=>alert(t.add(n.value,s.value)))),e.appendChild(n),e.appendChild(s),e.appendChild(a)})();