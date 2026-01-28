let games=[];

fetch("games.json")
.then(r=>r.json())
.then(data=>{
games=data;
render();
load(games[0]);
});

function render(){
const ul=document.querySelector(".game-list");
ul.innerHTML="";
games.forEach(g=>{
const li=document.createElement("li");
li.textContent=g.recommended?"🔥 "+g.name:g.name;
li.onclick=()=>load(g);
ul.appendChild(li);
});
}

function load(g){
document.getElementById("game-title").textContent=g.name;
document.getElementById("game-desc").textContent=g.description;
document.getElementById("download-btn").href=g.download;
const o=document.getElementById("online-btn");
if(g.online){o.style.display="inline-block";o.href=g.online;}
else{o.style.display="none";}
}