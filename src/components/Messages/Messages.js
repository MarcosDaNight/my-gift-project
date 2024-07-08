import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { fetchMessages, addMessage, deleteAllMessages } from '../../services/messageService';
import './Messages.css';

function Messages() {
    const [messages, setMessages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const getMessages = async () => {
            const messagesData = await fetchMessages();
            setMessages(messagesData);
        };

        getMessages();

        const subscription = supabase
            .channel('public:messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
                setMessages(prevMessages => [...prevMessages, payload.new]);
            })
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'messages' }, payload => {
                setMessages(prevMessages => prevMessages.filter(msg => msg.id !== payload.old.id));
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, []);

    const handleAddMessage = async () => {
        if (name && message) {
            const success = await addMessage(name, message);
            if (success) {
                setName('');
                setMessage('');
                setShowModal(false);
            }
        }
    };

    const handleDeleteAllMessages = async () => {
        if (password === 'mgdn2024') {
            const success = await deleteAllMessages();
            if (success) {
                setMessages([]);
                setShowDeleteModal(false);
                setPassword('');
            }
        } else {
            alert('Senha incorreta!');
        }
    };

    const randomMessage = () => {
        if (messages.length > 0) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            alert(`${messages[randomIndex].name}: ${messages[randomIndex].message}`);
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
                <button onClick={() => navigate('/')} className="back-button">Voltar</button>
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
                        <button onClick={handleAddMessage} className="submit-message-button">Enviar Mensagem</button>
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
                        <button onClick={handleDeleteAllMessages} className="submit-message-button">Apagar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Messages;
