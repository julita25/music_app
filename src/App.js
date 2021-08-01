import './App.css';
import React,{useState, useEffect} from 'react'
import Player from './Player'



function App() {
  const [songs]= useState([
    {
      title: "Yellow",
      album: "Album: Parachutes",
      image: "./images/yellow.jpg",
      src: "./music/Yellow.mp3"
    },
    {
      title: "Viva La Vida",
      album: "Album: Viva La Vida",
      image: "./images/viva_la_vida.jpg",
      src: "./music/Viva.mp3"
    },
    {
      title: "Speed of Sound",
      album: "Album: x&y",
      image: "./images/speed_os.jpg",
      src: "./music/Speed_of_sound.mp3"
    },

    {
      title: "A Rush of Blood to the Head",
      album: "Album: AROBTHH",
      image: './images/arobth.jpg',
      src: "./music/rush_of_blood.mp3"
    },
 
    {
      title: "Miracles",
      album: "Album: A Head Full Of Dreams",
      image: "./images/miracles.jpg",
      src: "./music/Miracles.mp3"
    },
    {
      title: "Fix_you",
      album: "Album: x&y",
      image: "./images/fix_you.jpg",
      src: "./music/Fix_You.mp3"
    },
    {
      title: "Clocks",
      album: "Album: AROBTHH",
      image: "./images/clocks.jpg",
      src: "./music/Clocks.mp3"
    },
    {
      title: "Lost",
      album: "Album: Viva La Vida",
      image: "./images/lost.jpg",
      src: "./music/Lost.mp3"
    }
  ])

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(0);
  
  //This function specifies that everytime the current song changes the next song must change too
  useEffect(() => {
    setNextSong(() => {//if the current osong + 1 becomes greater than the array, next song becomes 0
      if (currentSong + 1 > songs.length -1){
        return 0 
      }
      else {
        return currentSong + 1
      }
    })
    
  }, [currentSong])//this happens everytime that the current song variable changes

  return (
    <div className="App">
      <h1>Your Coldplay music</h1>
      <h5>All their best hits in one place</h5>
    
      <Player //we need to continuisly update this
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        nextSong={nextSong}
        songs={songs}/>
  
     
    </div>
  );
}

export default App;
