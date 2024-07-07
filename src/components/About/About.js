import React from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './About.css';

function About() {
    const navigate = useNavigate();

    const handleYesClick = () => {
        // Adicione a lógica para explodir confetes
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    const moveButton = (event) => {
        const button = event.target;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
        const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    };

    return (
        <div className="about-container">
            <div className="question-container">
                <h1>Você vai comer meu c*zinho?</h1>
            </div>
            <div className="buttons">
                <button onClick={handleYesClick}>Sim</button>
                <button id="no-button" onMouseEnter={moveButton}>Não</button>
                <button onClick={() => navigate('/')}>Voltar</button>
            </div>
        </div>
    );
}

export default About;
