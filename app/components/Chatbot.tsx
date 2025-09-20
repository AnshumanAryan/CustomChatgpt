import ChatbotWindow from "./ChatbotWindow";
import Footer from "./Footer";
import Header from "./Header";
import styles from './componentstyle.module.css'
import { useState } from "react";

export type messageType = {
    msgType: string,
    response: string
}

export default function Chatbot() {

    const [messages, setMessages] = useState<messageType[]>([])

    const addMessage = (msgObj: messageType[]) => {
        setMessages([...messages, ...msgObj]);
    }

    return (
        <div className={styles.container}>
        <Header />
        <ChatbotWindow messages={messages}/>
        <Footer addMessage={addMessage}/>
        </div>
)
}