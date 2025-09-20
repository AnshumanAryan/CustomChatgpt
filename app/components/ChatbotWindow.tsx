import styles from './componentstyle.module.css';

export default function ChatbotWindow({messages}) {
    return (
        <div className={styles.chatWindow}>
            {messages.map((msg) => (
                <div>
                    {msg.response}
                </div>
            ))}
        </div>
    )
}