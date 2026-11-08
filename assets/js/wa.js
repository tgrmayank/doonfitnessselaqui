/* WhatsApp popup with auto-typing message (shared by all pages) */
(function(){
var NUM="918851347337",ov=document.getElementById("ov"),tp=document.getElementById("typed"),sd=document.getElementById("send"),ch=document.getElementById("chips"),cl=document.getElementById("cl"),tm,last=null;
if(!ov)return;
var topics=["I want to join the gym.","What are the membership plans?","I need a personal trainer.","I want a diet plan.","Where is the gym located?"];
topics.forEach(function(t){var b=document.createElement("button");b.textContent=t.replace(/^I want to |^I need a |^I want a /,"").replace(/\.$/,"");b.onclick=function(){type("Hi Doon Fitness, "+t.charAt(0).toLowerCase()+t.slice(1))};ch.appendChild(b)});
function type(m){clearInterval(tm);tp.textContent="";tp.classList.add("cur");var i=0;sd.href="https://wa.me/"+NUM+"?text="+encodeURIComponent(m);
if(matchMedia("(prefers-reduced-motion:reduce)").matches){tp.textContent=m;tp.classList.remove("cur");return}
tm=setInterval(function(){tp.textContent=m.slice(0,++i);if(i>=m.length){clearInterval(tm);tp.classList.remove("cur")}},35)}
function openWa(m){ov.classList.add("on");last=document.activeElement;type(m);cl.focus()}
function closeWa(){ov.classList.remove("on");clearInterval(tm);if(last)last.focus()}
var fb=document.getElementById("openWa");if(fb)fb.onclick=function(){openWa("Hi Doon Fitness, I want to know about membership plans.")};
document.querySelectorAll("[data-wa]").forEach(function(b){b.onclick=function(){openWa(b.dataset.wa)}});
cl.onclick=closeWa;ov.onclick=function(e){if(e.target===ov)closeWa()};
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeWa()});
var f=document.getElementById("enq");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var n=(document.getElementById("en").value||"").trim(),g=document.getElementById("eg").value;
openWa("Hi Doon Fitness, "+(n?"my name is "+n+". ":"")+"I am interested in: "+g+". Please share the details.")});
})();
