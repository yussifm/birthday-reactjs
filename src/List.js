import React from 'react'


import './App.css';



const List = ({ people }) => {
     return(
    < >
        {
            people.map((person) => {
                const { id, name, image } = person;
                return <>
                   
                  
                        <ul >
                            <li key={id}>{name}</li>
                    </ul>
                    
                  
                   
                    </>
      })}
        </>
     )

}



export default List;