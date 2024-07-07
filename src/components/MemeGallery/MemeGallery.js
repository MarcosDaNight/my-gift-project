import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemeGallery.css';

const memes = [
    'https://tenor.com/pt-BR/view/feliz-anivers%C3%A1rio-valtatui-gif-27554221',
    'https://tenor.com/pt-BR/view/parab%C3%A9ns-valtatu%C3%AD-gif-24897890',
    'https://media1.tenor.com/m/A2CgrVKXHgkAAAAC/hbd.gif',
    'https://pbs.twimg.com/media/FNWQz_wXIAALo5G?format=png&name=small',
    'https://pbs.twimg.com/media/E1HXHZCXsAQ0B3p.jpg',
    'https://media1.tenor.com/m/jxnkGfsUyYUAAAAd/maya-massafera-tchau.gif',
    'https://media1.tenor.com/m/pwxV91vxbKIAAAAC/lula-da-silva-jair-bolsonaro.gif',
    'https://media1.tenor.com/m/agHWAJt0_bkAAAAC/bolsonaro-israel.gif',
    'https://media1.tenor.com/m/rTohwIgEl5QAAAAd/racoon.gif',
    'https://media1.tenor.com/m/7TzEQ2nkWscAAAAd/funny-memes-discord.gif'
    // Adicione mais URLs de memes aqui
];

function MemeGallery() {
    const [currentMeme, setCurrentMeme] = useState(0);
    const navigate = useNavigate();

    const nextMeme = () => {
        setCurrentMeme((currentMeme + 1) % memes.length);
    };

    const prevMeme = () => {
        setCurrentMeme((currentMeme - 1 + memes.length) % memes.length);
    };

    const renderMeme = () => {
        const currentFile = memes[currentMeme];
        if (currentFile.endsWith('.mp4')) {
            return <video src={currentFile} controls className="meme" />;
        } else {
            return <img src={currentFile} alt="Meme" className="meme" />;
        }
    };

    return (
        <div className="meme-gallery">
            <div className="meme-container">
                <button onClick={prevMeme} className="nav-button prev">{"<"}</button>
                {renderMeme()}
                <button onClick={nextMeme} className="nav-button next">{">"}</button>
            </div>
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
        </div>
    );
}

export default MemeGallery;


