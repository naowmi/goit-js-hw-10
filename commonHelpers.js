import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as D,i as C}from"./assets/vendor-651d7991.js";let s;const d=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]"),n=document.querySelector(".start-btn");n.disabled=!0;const x={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(C.error({title:"ERROR",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(n.disabled=!1,s=e,console.log(s))}};D("#datetime-picker",x);let m;n.addEventListener("click",()=>{n.disabled=!0,m=setInterval(S,1e3)});function S(){const t=s-new Date;if(t<=0){clearInterval(m),d.textContent="00",i.textContent="00",u.textContent="00",l.textContent="00";return}const{days:e,hours:r,minutes:a,seconds:c}=b(t);d.textContent=o(e),i.textContent=o(r),u.textContent=o(a),l.textContent=o(c)}function b(t){const y=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:h,minutes:f,seconds:p}}function o(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
