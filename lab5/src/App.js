import "./App.css";
import React from 'react';
import {Students} from "./Students";

function App() {
	return (
		<div className="App">
			<span onClick={hideStudents}>Studenci</span>
			<Students />
		</div>
	);
}

function hideStudents(){
	var students = document.getElementById("studentsContainer");
	
	if (students.style.display === "block") {
		students.style.display = "none";
	} else {
		students.style.display = "block";
	}
}

export default App;