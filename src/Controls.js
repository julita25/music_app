import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className="control-btn">
            <button className="backward-btn" onClick={() => props.skipSong(false)}>
                <FontAwesomeIcon icon={faBackward}/>
            </button>

            <button className="playpause-btn" onClick={() => props.setIsRunning(!props.isRunning)}>
                <FontAwesomeIcon icon={props.isRunning ? faPause : faPlay} />
            </button>

            <button className="forward-btn" onClick={() => props.skipSong()}>
                <FontAwesomeIcon icon={faForward}/>
            </button>
            
        </div>
    )
}

export default Controls
