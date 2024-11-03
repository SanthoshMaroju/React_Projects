import React, {useState} from 'react';
import './Roulette.css'  
import {items} from './items.js'

function getRandomInteger(size) {
    const randomNumber = Math.floor(Math.random() * size) % size;
    return randomNumber;
}

function Roulette() {
    const [roulette, setRoulette] = useState([{emoji: '7'}, {emoji: '7'}, {emoji: '7'}]);
    const spinRoulette = () => {
    const intervalId = setInterval(() => {
        const size = items.length;
        setRoulette([
            items[getRandomInteger(size)], 
            items[getRandomInteger(size)], 
            items[getRandomInteger(size)]]
        );
    }, 50);


    setTimeout(() => {
        clearInterval(intervalId); 
    }, 1000);
        
    };

    return (
        <div style = {{textAlign: 'center'}}>
            <h1>Roulette</h1>
            <h2 class = "spin">{roulette[0].emoji}, {roulette[1].emoji}, {roulette[2].emoji}</h2>
            <button onClick = {spinRoulette}>Spin</button>
            <div>
                <h2>Rewards</h2>
                {roulette.length > 0 ? (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        {roulette.map((item, index) => (
                            item ? ( // Check if item is defined
                                <div key={index} style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '50px' }}>{item.emoji}</span>
                                    <p>{item.count} x {item.name} ({item.type}, {item.rarity})</p>
                                </div>
                            ) : (
                                <div key={index} style={{ textAlign: 'center' }}>
                                    <p>Item not available.</p>
                                </div>
                            )
                        ))}
                    </div>
                ) : (
                    <p>No rewards yet.</p>
                )}
            </div>
            
        </div>
    )
}

export default Roulette;