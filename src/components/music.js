import React from "react";
import audioSong from "../mymusic.mp3";

function Song() {
    
    let playing = false;
    const song = new Audio(audioSong);

    const music = () => {
        if (playing === false){
            song.play();
            playing = true;
        } else {
            song.pause();
            playing = false;
        };
    };
  
    return (
        <button onClick={music} id="song-button">🎵</button>
  );

};

export default Song;