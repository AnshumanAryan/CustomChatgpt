import { useState } from "react";
import InputElement from "./InputElement";
import SubmitBtn from "./SubmitBtn";
import {msgType} from "./Chatbot";

export default function Footer({addMessage}) {

    const [value, setValue] = useState("");

    const handleInpChang = (e: any) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        addMessage([{msgType: 'outgoing', response: value}, {msgType: 'incoming', response: 'msg recieved'}]);
    }

    return (
        <>
        <InputElement value={value} handleInpChang={handleInpChang}/>
        <SubmitBtn handleSubmit={handleSubmit} />
        </>
    )
}