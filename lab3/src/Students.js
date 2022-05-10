import React from "react";
import "./App.css";
import { studentsData } from "./studentsData";
import {useState} from "react";

export const Students = () => {
	const [query, setQuery] = useState("")
	return (
		<>
			<input placeholder="search..." onChange={event => setQuery(event.target.value)} />
			<div className="studentsContainer">
			{studentsData.filter(data => {
					var tagData = "";
				
					data.tags.map((tag) => {
						tagData += tag;
						tagData += " ";
					})
					
					if (query === ""){
						return data;
					} else if (data.lecture.toLowerCase().includes(query.toLowerCase()) || data.description.toLowerCase().includes(query.toLowerCase()) || tagData.toLowerCase().includes(query.toLowerCase())){
						return data;
					} 
				}).map((data, key) => {
					return (
						<div className="student" key={key}>
							<ul>
								<li>Name: {data.name}</li>
								<li>Lecture: {data.lecture}</li>
								<li>Description: {data.description}</li>								
								<li>Tags:</li>
								<li>
								{data.tags.map((tag) => {
									return (
										<div>{tag} </div> 
									);
								})}
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		</>
	);
};
