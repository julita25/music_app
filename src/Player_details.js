import React from 'react'

function Player_details(props) {
    return (
        <div>
            <div className="details-img">
                <img className= "cover-img" src={props.song.image} alt="song cover"/>
            </div>
            <div className="description">
                <h3 className="title">{props.song.title}</h3>
                <h5 className="album">{props.song.album}</h5>
            
            </div>
            
        </div>
    )
}

export default Player_details
