import * as React from "react"

import { useEffect } from "react"

const AnalysisBar = ({game}) => {
    // here set up the connection for the web socket
    useEffect(()=>{
        // send into websocket for the analysis

        console.log("using effect, to no effect")
    }, [game])

    return (
        <div>{game.fen()}</div>
    )
}

export default AnalysisBar;