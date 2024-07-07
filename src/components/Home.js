import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const message = "Ei, fiz uma pequena lembrança para você no seu dia! Espero que goste, ela é apenas uma pequena parcela da gratidão por ter te conhecido.";
        const messageContainer = document.getElementById("personal-message");
        let i = 0;
        let timer;

        function typeWriter() {
            if (i < message.length) {
                messageContainer.innerHTML += message.charAt(i);
                i++;
                timer = setTimeout(typeWriter, 50);
            }
        }

        messageContainer.innerHTML = ''; // Limpar o conteúdo do contêiner antes de começar a digitar
        typeWriter();

        // Cleanup function to clear the timer if the component unmounts
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="background">
            <div className="scrolling-background">
                <p>Parabéns!</p>
                <p>Happy Birthday!</p>
                <p>Feliz Cumpleaños!</p>
                <p>Joyeux Anniversaire!</p>
                <p>Buon Compleanno!</p>
                <p>Frohes Geburtstag!</p>
                <p>Grattis på födelsedagen!</p>
                <p>お誕生日おめでとうございます！</p>
                <p>생일 축하합니다!</p>
                <p>生日快乐!</p>
                <p>Χρόνια Πολλά!</p>
                <p>С Днем Рождения!</p>
                <p>¡Feliz Aniversário!</p>
                <p>С Днем Народження!</p>
                <p>Grattis på födelsedagen!</p>
            </div>
            <div className="content">
                <h1>PARABÉNS!! Patrielly!</h1>
                <div className="personal-message">
                    <p id="personal-message"></p>
                </div>
                <div className="buttons">
                    <button onClick={() => navigate('/gallery')}>Galeria de Fotos</button>
                    <button onClick={() => navigate('/memes')}>Galeria de Memes</button>
                    <button onClick={() => navigate('/messages')}>Deixe uma Mensagem</button>
                    <button onClick={() => navigate('/about')}>🕳️</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
