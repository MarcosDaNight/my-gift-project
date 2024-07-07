import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhotoGallery.css';
import messages from './messages.json';

const media = [
    'photo1.jpeg',
    'photo2.jpeg',
    'photo3.jpeg',
    'photo4.jpeg',
    'photo5.jpeg',
    'photo6.jpeg',
    'photo7.jpeg',
    'photo8.jpeg',
    'photo9.jpeg',
    'photo10.jpeg',
    'photo11.jpeg',
    'photo12.jpeg',
    'photo13.jpeg',
    'photo14.jpeg',
    'video1.mp4',
    'video2.mp4',
    'video3.mp4',
    'video4.mp4'
];

function PhotoGallery() {
    const [currentMedia, setCurrentMedia] = useState(0);
    const navigate = useNavigate();

    const nextMedia = () => {
        setCurrentMedia((currentMedia + 1) % media.length);
    };

    const prevMedia = () => {
        setCurrentMedia((currentMedia - 1 + media.length) % media.length);
    };

    const renderMedia = () => {
        const currentFile = media[currentMedia];
        const mediaPath = `${process.env.PUBLIC_URL}/midia/${currentFile}`;
        
        if (currentFile.endsWith('.mp4')) {
            return <video src={mediaPath} controls className="media" />;
        } else {
            return <img src={mediaPath} alt="Galeria de Mídia" className="media" />;
        }
    };

    return (
        <div className="photo-gallery">
            <div className="media-container">
                <button onClick={prevMedia} className="nav-button">{"<"}</button>
                <div className="polaroid">
                    {renderMedia()}
                    <div className="caption">{messages[media[currentMedia]]}</div>
                </div>
                <button onClick={nextMedia} className="nav-button">{">"}</button>
            </div>
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
        </div>
    );
}

export default PhotoGallery;
