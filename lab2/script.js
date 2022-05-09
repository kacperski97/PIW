"use strict";

var ableToRestore = false;
var previouslyRemoved = "";

function addElement() {
	var elementText = document.getElementById("addElementTextBox").value;
	
	if(elementText !== ""){
		var ul = document.getElementById("toDoList");
		var li = document.createElement("li");
		var del = document.createElement("span");
		del.appendChild(document.createTextNode("X"));
		
		li.appendChild(del);
		li.appendChild(document.createTextNode(elementText));
		ul.appendChild(li);
	}
	
	document.getElementById("addElementTextBox").value = "";
}

function setDone(event){
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
		
		if (event.target.classList.contains('checked')){
			var date = new Date();
			event.target.childNodes[1].textContent = event.target.childNodes[1].textContent + " " + String(date.getDate()).padStart(2, '0') + "/" + String((date.getMonth() + 1)).padStart(2, '0') + "/" + date.getFullYear();
		}else{
			event.target.childNodes[1].textContent = event.target.childNodes[1].textContent.slice(0, -11);
		}
	}
}

function load(){
	var ul = document.getElementById("toDoList");
	ul.addEventListener('click', setDone, false);
}

$(document).ready(function(){
	$(document).on("click", "span", function() {
		previouslyRemoved = $(this)[0].nextSibling.textContent;
		
		if($(this).parent().hasClass('checked')){
			previouslyRemoved = previouslyRemoved.slice(0, -11);
		}
		
		ableToRestore = true;
		$(this).parent().remove();
	});
	
	$('#restoreButton').click(function(){
		if(ableToRestore && confirm("Press OK to confirm")){
			var ul = document.getElementById("toDoList");
			var li = document.createElement("li");
			var del = document.createElement("span");
			del.appendChild(document.createTextNode("X"));
		
			li.appendChild(del);
			li.appendChild(document.createTextNode(previouslyRemoved));
			ul.appendChild(li);
			
			ableToRestore = false;
		}else{
			alert("No object to restore");
		}
	});
});
