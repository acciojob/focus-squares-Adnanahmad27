const squares = [];
for(let i=0 ; i<3 ; i++){
	let id = i+1;
	squares[i] = document.getElementById("square"+id);
}
for(let i=0 ; i<3 ; i++){
	squares[i].addEventListener("mouseover", onMouse);
	squares[i].addEventListener("mouseout", offMouse);
}
function toggleBgColor(e){
	e.classList.toggle("coffee");
	e.classList.toggle("lavender");
}
function onMouse(e){
	for(let j=0 ; j<3 ; j++){
		if(e.target!==squares[j]){
			toggleBgColor(squares[j]);
		}
	}
}
function offMouse(e){
	for(let j=0 ; j<3 ; j++){		
		if(e.target!==squares[j]){
			toggleBgColor(squares[j]);
		}
	}
}
