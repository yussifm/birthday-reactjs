import "./App.css";
import React, { useState } from "react";
import List from "./List.js";
import data from "./data.js";

function App() {
	const [people, setPeople] = useState(data);

	return (
		<div className="container">
			<h2> Birday Reminder</h2>
			<div className="list">
				<h4> {people.length} Birthday to day</h4>
				<List people={people} />
				<button className="btn" onClick={() => setPeople([])}>
					clear all
				</button>
			</div>
		</div>
	);
}

export default App;
