import React, { useState, useRef } from 'react';
import Footer from "../../Footer.jsx";

const ChatbotIntegration = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const conversationHistory = useRef([]);

    const isValidTopic = (input) => {
        const keywords = [
            'coal', 'carbon emissions', 'carbon neutrality', 'coal mines', 'carbon', 'emissions', 'neutrality',
            'fossil fuels', 'greenhouse gases', 'climate change', 'sustainability', 'renewable energy', 'mining',
            'carbon footprint', 'environment', 'pollution', 'air quality', 'energy consumption', 'carbon capture',
            'clean energy', 'green energy', 'solar power', 'wind power', 'hydropower', 'bioenergy', 'geothermal energy',
            'energy efficiency', 'recycling', 'waste management', 'deforestation', 'afforestation', 'biodiversity',
            'ecosystem', 'environmental impact', 'global warming', 'ozone layer', 'sustainable development', 'eco-friendly',
            'natural resources', 'conservation', 'methane', 'carbon tax', 'emission trading', 'carbon offset', 'energy transition',
            'circular economy', 'environmental policy', 'sustainable agriculture', 'water conservation', 'energy storage',
            'electric vehicles', 'carbon sequestration', 'industrial emissions', 'carbon budgeting', 'renewable resources'
        ];
    
        const lowerCaseInput = input.toLowerCase();
    
        // Check if the input is relevant to the specific topics
        const isTopicRelevant = keywords.some(keyword => 
            lowerCaseInput.includes(keyword) || 
            lowerCaseInput.split(' ').some(word => word.length > 3 && keyword.includes(word))
        );
    
        // Allow general conversation if not directly relevant
        return isTopicRelevant || isGeneralConversation(input);
    };
    
    // Function to handle general conversation detection
    const isGeneralConversation = (input) => {
        // List of common conversational phrases
        const generalPhrases = [
            'hello', 'hi', 'how are you', 'good morning', 'good night', 'thank you', 'thanks', 'please', 'bye',
            'how is your day', 'what are you doing', 'tell me a joke', 'who are you', 'what is your name', 'how old are you',
            'where are you from', 'what do you like', 'do you have any hobbies', 'what is your favorite color',
            'what is your favorite food', 'do you have any pets', 'what is your job', 'tell me a story', 'what time is it',
            'what is the weather', 'can you help me', 'how do you work', 'what can you do', 'are you a robot',
            'what is your purpose', 'can you chat with me', 'how do I use you', 'who created you'
        ];
    
        const lowerCaseInput = input.toLowerCase();
        return generalPhrases.some(phrase => lowerCaseInput.includes(phrase));
    };
    

    const handleSend = async () => {
        if (!userInput.trim()) return;

        if (!isValidTopic(userInput)) {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Please ask a more relevant question', type: 'bot' }
            ]);
            setUserInput('');
            return;
        }

        setMessages(prevMessages => [...prevMessages, { text: userInput, type: 'user' }]);
        conversationHistory.current.push({ role: 'user', content: userInput });
        setUserInput('');
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;


        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: conversationHistory.current,
                    stream: true
                })
            });

            const botMessage = { text: '', type: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let done = false;
            let result = '';

            while (!done) {
                const { done: streamDone, value } = await reader.read();
                done = streamDone;

                const chunk = decoder.decode(value, { stream: true });
                chunk.split('\n').forEach(line => {
                    if (line.startsWith("data:")) {
                        const jsonData = line.replace("data: ", "");
                        if (jsonData === "[DONE]") {
                            done = true;
                        } else {
                            try {
                                const parsedData = JSON.parse(jsonData);
                                const content = parsedData.choices[0].delta.content || '';
                                result += content;
                                setMessages(prevMessages => {
                                    const updatedMessages = [...prevMessages];
                                    updatedMessages[updatedMessages.length - 1].text = result;
                                    return updatedMessages;
                                });
                            } catch (e) {
                                console.error('Error parsing JSON:', e);
                            }
                        }
                    }
                });

                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }

            conversationHistory.current.push({ role: 'assistant', content: result });

        } catch (error) {
            console.error('Error:', error);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: 'An error occurred.', type: 'bot' }
            ]);
        }
    };

    return (
        <div className="m">
            <div style={styles.pageContainer}>
                <div style={styles.chatContainer}>
                    <div style={styles.messages} ref={chatContainerRef}>
                        {messages.map((message, index) => (
                            <div key={index} style={{ ...styles.message, ...(message.type === 'user' ? styles.userMessage : styles.botMessage) }}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div style={styles.chatInputContainer}>
                        <input
                            type="text"
                            style={styles.chatInput}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type a message..."
                        />
                        <button style={styles.sendBtn} onClick={handleSend}>Send</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2c2c2c', // Coal-themed background color
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        padding: '20px', // Add padding for spacing
        boxSizing: 'border-box', // Ensure padding is included in height/width
    },
    chatContainer: {
        width: '100%', // Use full width
        height: '100%', // Use full height
        maxWidth: '1400px', // Set a maximum width
        maxHeight: '650px', // Set a maximum height
        border: '1px solid #444',
        borderRadius: '10px',
        padding: '15px',
        backgroundColor: '#1e1e1e', // Dark background for the chat container
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    messages: {
        flex: 1,
        overflowY: 'auto',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#333', // Slightly lighter background for messages
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
        marginBottom: '10px',
    },
    message: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        lineHeight: '1.5',
        fontSize: '14px',
    },
    userMessage: {
        backgroundColor: '#007bff', // User message color
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
    botMessage: {
        backgroundColor: '#444', // Bot message color
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    chatInputContainer: {
        display: 'flex',
        borderTop: '1px solid #444',
        paddingTop: '10px',
    },
    chatInput: {
        flex: 1,
        padding: '10px',
        border: '1px solid #444',
        borderRadius: '5px',
        marginRight: '10px',
        fontSize: '14px',
        backgroundColor: '#555', // Input field background
        color: '#fff',
    },
    sendBtn: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s',
    },
};

// Add hover effect for the send button
const sendBtnHover = {
    ...styles.sendBtn,
    backgroundColor: '#0056b3',
};

export default ChatbotIntegration;
