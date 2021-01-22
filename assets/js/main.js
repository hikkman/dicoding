console.log("test!");

const buttons = document.querySelectorAll(".button");

function drop(id){
		id.classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.button')) {
    let dropdowns = document.getElementsByClassName("dropdown");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let open = dropdowns[i];
      if (open.classList.contains('show')) {
        open.classList.remove('show');
      }
    }
  }
 
}
for (let button of buttons){
	button.addEventListener("click", function(e){
		const target = e.target;

		if (target.classList.contains("blog")) {
			drop(document.getElementById("blog"));
		}
		else if (target.classList.contains("tutor")) {
			drop(document.getElementById("tutor"));
		}
		
	});

};


function subSide(id, chev){
	var sub = document.getElementById(id);
	var chevron = document.getElementById(chev);
	sub.classList.toggle("show");

	if(sub.classList.contains("show")){
		chevron.style.transform = "rotateX(180deg)";
	}
	else{
		chevron.style.transform = "rotateX(0deg)";
	}
	

}
// window.onclick = function(sub){
// 	if(!sub.target.matches(".subSide")){
// 		var sub = document.getElementsByClassName("subSide");
// 		sub.classList.remove("show");
// 	}
// }
function openSidenav(){
	var sidenav = document.getElementById("sidenav");
	sidenav.style.display = "block";
}
function closeSidenav(){
	var sidenav = document.getElementById("sidenav");
	sidenav.style.display = "none";
}
