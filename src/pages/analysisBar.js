import * as React from "react"

import { useEffect, useState } from "react"
import useWebSocket, {ReadyState}from 'react-use-websocket'

const AnalysisBar = ({game}) => {
    // here set up the connection for the web socket
    // probably put this into component did mount
    const [socketUrl, setSocketUrl] = useState(process.env.GATSBY_SOCKET_URL);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const [currentAnalysis, setCurrentAnalysis] = useState("");
    console.log(readyState === ReadyState.CLOSED)
    
    useEffect(() => {
        console.log(lastMessage);
        if (lastMessage !== null) {
            setCurrentAnalysis(lastMessage.data);
        }
    }, [lastMessage]);

    useEffect(()=>{
        // send into websocket for the analysis
        sendMessage(game.fen());
    }, [game])


    return (
        <div>{currentAnalysis}</div>
    )
}

export default AnalysisBar;