import React, { useState, useRef } from 'react';
import Footer from "../../Footer.jsx";
import zIndex from '@mui/material/styles/zIndex.js';

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

        const restrictedPhrases = [
            'who are you', 'what is your name', 'are you a robot', 'who created you', 
            'what can you do', 'how do you work', 'can you chat with me', 
            'how do I use you', 'what is chatgpt', 'what is openai', 'what is your purpose', 
            'how do you generate responses', 'are you an AI', 'what is your job'
        ];

        const lowerCaseInput = input.toLowerCase();

        // Return false if the input is related to the restricted topics
        return generalPhrases.some(phrase => lowerCaseInput.includes(phrase)) && 
               !restrictedPhrases.some(phrase => lowerCaseInput.includes(phrase));
    };

    const handleSend = async () => {
        if (!userInput.trim()) return;

        setMessages(prevMessages => [...prevMessages, { text: userInput, type: 'user' }]);
        conversationHistory.current.push({ role: 'user', content: userInput });

        setUserInput('');
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

        if (!isValidTopic(userInput)) {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: 'As a chatbot for CarbonMitra, I don’t have information on that topic.', type: 'bot' }
            ]);
            return;
        }

        // if (!(userInput)) {
        //     // Provide a custom response for questions about the chatbot itself
        //     setMessages(prevMessages => [
        //         ...prevMessages,
        //         { text: 'As a chatbot for CarbonMitra, I don’t have information on that topic.', type: 'bot' }
        //     ]);
        //     return;
        // }

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
        <div style={{margin:0}}>
    <div style={styles.pageContainer}>
        <div style={styles.chatContainer}>
            <div style={styles.messages} ref={chatContainerRef}>
                <div style={styles.watermark}>CarbonAI</div>   
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
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSend();
                        }
                    }}
                />
                <button style={styles.sendBtn} onClick={handleSend}>Send</button>
            </div>
        </div>
    </div>
</div>

    );
};
const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000000', // Pure black background
        color: '#ffffff', // White text color
        fontFamily: 'Arial, sans-serif',
        padding: '0px 20px',
        boxSizing: 'border-box',
    },
    chatContainer: {
        position: 'relative',
        width: '100%',
        height: '90%',
        maxWidth: '1400px',
        maxHeight: '650px',
        border: '1px solid #444',
        borderRadius: '10px',
        padding: '15px',
        backgroundColor: 'black',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    watermark: {
        position: 'absolute',
        top: '10px', // Position at the top
        left: '10%',
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '40px',
        color: 'white', // Red color for the text
        fontWeight: 'bold',
        fontFamily: '"Courier New", Courier, monospace', // Watermark-like font
        opacity: 1, // Slight transparency to give a watermark effect
        zIndex: 1, // Ensure it's above other elements
        pointerEvents: 'none', // Make sure it doesn't interfere with other elements
    },
    messages: {
        flex: 1,
        overflowY: 'auto',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: 'black', // White background for messages
        color: 'black', // Black text for messages
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3)',
        marginBottom: '10px',
        position: 'relative', // To ensure z-index stacking
        zIndex: 3, // Make sure messages are above the watermark
    },
    message: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        lineHeight: '1.5',
        fontSize: '14px',
        color: 'black',
        zIndex: 3, // Black text color for messages
    },
    userMessage: {
        backgroundColor: 'white', // Black background for user messages
        textAlign: 'right',
        alignSelf: 'flex-end',
        color: 'black',
        zIndex:3,
    },
    botMessage: {
        backgroundColor: '#e6c7eb', // Green background for bot messages
        textAlign: 'left',
        alignSelf: 'flex-start',
        color:'black',
        zIndex:3,
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
        backgroundColor: 'white', // White background for input field
        color: 'black', // Black text color for input
    },
    sendBtn: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#6200EA', // Purple background for the send button
        color: '#ffffff', // White text color for the send button
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.3s',
        zIndex: 1, // Make sure the button is above the watermark
    },
};

// Add hover effect for the send button
const sendBtnHover = {
    ...styles.sendBtn,
    backgroundColor: '#3700B3', // Darker purple for hover effect
};


export default ChatbotIntegration;
