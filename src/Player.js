import React, {useState, useEffect, useRef} from 'react'
import Player_details from './Player_details'
import Controls from './Controls'


function Player(props) {
    const audioEl = useRef(null)
    const [isRunning, setIsRunning]= useState(false)


    useEffect(() => {
        if (isRunning){
            audioEl.current.play()//anytime anything of the screen re renders lets check if there
            //is a song at the moment playing, if its true, keep playing
        }else{
            audioEl.current.pause()
        }
        
    });


    //function for forwarding and backwards song
    const skipSong = (forwards = true) => {
        if (forwards){
            props.setCurrentSong(() => {//we use the props passed from app.js
                let temp = props.currentSong
                temp++

            if (temp > props.songs.length - 1) {//if current song greater than array, return it to zero
                temp = 0
            }

            return temp;
            })
        }
        else {//if we click backwards
            props.setCurrentSong(() => {//we use the props passed from app.js
                let temp = props.currentSong
                temp--

            if (temp < 0) {//if current song greater than array, return it to zero
                temp = props.songs.length - 1
            }

            return temp;
            })

        }
    }

    return (
        <div className= "container">
            <div className="music-player">
                {/* songs is passed as a prob from app*/}
                <audio src={props.songs[props.currentSong].src} ref={audioEl}></audio>
                <h3>Now playing</h3>
                {/*Details of the song */}
                <Player_details song={props.songs[props.currentSong]} />
                <Controls 
                    isRunning={isRunning} 
                    setIsRunning={setIsRunning} 
                    skipSong={skipSong}
                    />
            </div>
                        
        </div>
    )
}

export default Player
