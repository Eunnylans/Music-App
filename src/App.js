import { useEffect, useState } from "react";
import Player from "./Component/Player";

const App = () => {
  const [songs] = useState([
    {
      title: "Girlfriend",
      artist: "Ruger",
      img_src: "./images/ruger-song1.jpg",
      src: "./music/Ruger_-_Girlfriend.mp3",
    },
    {
      title: "Love on top",
      artist: "Beyoncce",
      img_src: "./images/beyonce-love-on-top-song2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Halo",
      artist: "Beyonce",
      img_src: "./images/Halo-song3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Buga",
      artist: "Kizz Daniel",
      img_src: "./images/Kizz-Daniel-Buga-song4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
