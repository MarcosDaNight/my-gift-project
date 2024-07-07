import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebaseConfig';
import { collection, addDoc, onSnapshot, deleteDoc, getDocs } from 'firebase/firestore';
import './Messages.css';

function Messages() {
    const [messages, setMessages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log("Connecting to Firestore...");
        const unsubscribe = onSnapshot(collection(firestore, 'messages'), snapshot => {
            const messagesData = [];
            snapshot.forEach(doc => messagesData.push({ ...doc.data(), id: doc.id }));
            setMessages(messagesData);
            console.log("Received messages:", messagesData);
        }, (error) => {
            console.error("Error connecting to Firestore:", error);
        });

        return () => unsubscribe();
    }, []);

    const addMessage = async () => {
        if (name && message) {
            console.log("Adding message:", { name, message });
            await addDoc(collection(firestore, 'messages'), { name, message });
            setName('');
            setMessage('');
            setShowModal(false);
        }
    };

    const randomMessage = () => {
        if (messages.length > 0) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            alert(`${messages[randomIndex].name}: ${messages[randomIndex].message}`);
        }
    };

    const deleteAllMessages = async () => {
        if (password === 'mgdn2024') {
            console.log("Deleting all messages...");
            const querySnapshot = await getDocs(collection(firestore, 'messages'));
            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });
            setShowDeleteModal(false);
            setPassword('');
        } else {
            alert('Senha incorreta!');
        }
    };

    return (
        <div className="messages-container">
            <h1>Mensagens para Patrielly</h1>
            <p>Total de Mensagens: {messages.length}</p>
            <div className="buttons">
                <button onClick={() => setShowModal(true)} className="add-message-button">Adicionar Mensagem</button>
                <button onClick={randomMessage} className="random-message-button">Ver Mensagem Aleatória</button>
                <button onClick={() => setShowDeleteModal(true)} className="delete-messages-button">Apagar Todas as Mensagens</button>
                <button onClick={() => window.location.href = '/'} className="back-button">Voltar</button>
            </div>
            <div className="message-list">
                {messages.length > 0 && (
                    <div className="scrolling-names">
                        {messages.map((msg, index) => (
                            <p key={index}>{msg.name}</p>
                        ))}
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div key={index} className="message-item">
                        <p><strong>{msg.name}</strong>: {msg.message}</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Escrever Mensagem</h2>
                        <input 
                            type="text" 
                            placeholder="Seu Nome" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <textarea 
                            placeholder="Sua Mensagem (até 2000 caracteres)" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            maxLength="2000"
                        ></textarea>
                        <button onClick={addMessage} className="submit-message-button">Enviar Mensagem</button>
                    </div>
                </div>
            )}

            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowDeleteModal(false)}>&times;</span>
                        <h2>Apagar Todas as Mensagens</h2>
                        <input 
                            type="password" 
                            placeholder="Senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button onClick={deleteAllMessages} className="submit-message-button">Apagar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Messages;
