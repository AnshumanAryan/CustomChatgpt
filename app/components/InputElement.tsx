export default function InputElement({value, handleInpChang}) {
    return (
        <input value={value} type="text" placeholder="Type your message..." onChange={handleInpChang} />
    )
}