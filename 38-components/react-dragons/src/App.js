import React from 'react';
import { dragons } from './dragons.js'

class App extends React.Component {
    render(){

        return (
            <div>
                <Title />
                <DragonCardContainer />
           </div>
        )
    }
}

// class Title extends React.Component{

//     render(){
//         return <h1>Dragons</h1>
//     }
// }

function Title(){
    return <h1>Dragons</h1>
}

function DragonCardContainer(){

    // let dragonCards = []

    // dragons.forEach( (dragon) => {
    //     dragonCards.push( <DragonCard dragon={ dragon } key={dragon.id}  /> )
    // })

    // let dragonCards = dragons.map( dragon => {
    //     return <DragonCard dragon={ dragon } key={dragon.id}  />
    // })

    return (
        <div>
            {dragons.map( dragon => 
                <DragonCard { ...dragon } key={dragon.id}  />
            )}
        </div>
    )
}

// function DragonCard(props){
//     const { name, description, image } = props
//     return (
//         <div>
//             <h3>{name}</h3>
//             <p>{description}</p>
//             <img src={image} width="100px"/>
//         </div>
//     )
// }

let DragonCard = ({ name, description, image }) =>
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={image} width="100px"/>
        </div>



export default App