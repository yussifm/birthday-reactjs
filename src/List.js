import React from "react";

import "./App.css";

const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<article key={id} >
						<div className="card">
							
							<img src={image} alt={name} />
							<h4>{name}</h4>
							<p>{ age}</p>

						</div>
						
						
					</article>
				);
			})}
		</>
	);
};

export default List;
