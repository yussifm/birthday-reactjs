import React from "react";

import "./App.css";

const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article key={id} >
						<img src={image} alt={name} />
						<div className="card">
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
						
						
					</article>
				);
			})}
		</>
	);
};

export default List;
