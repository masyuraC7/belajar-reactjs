import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import SearchBar from "./components/SearchBar";
import Box from "./components/box";

const animesData = [
  {
    mal_id: 21,
    title: "One Piece",
    year: 1999,
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    score: 8.71,
    synopsis:
      "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.",
  },
  {
    mal_id: 20,
    title: "Naruto",
    year: 2002,
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    score: 8.71,
    synopsis:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
  },
  {
    mal_id: 269,
    title: "Bleach",
    year: 2004,
    image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    score: 8.71,
    synopsis:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
  },
  {
    mal_id: 31964,
    title: "Boku no Hero Academia",
    year: 2016,
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    score: 8.71,
    synopsis:
      'The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
  },
];

function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState([]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  function handleSearchAnime(newQuery) {
    let selectedAnimeStatus = true;
    const newAnimes = animes.filter(
      (anime) => anime.title.toLowerCase().search(newQuery.toLowerCase()) !== -1
    );

    newAnimes.map((anime) => {
      if (anime.mal_id === selectedAnime.mal_id) {
        selectedAnimeStatus = false;
      }
    });

    if (selectedAnimeStatus) {
      setSelectedAnime([]);
    }

    if (newQuery.length === 0) {
      setAnimes(animesData);
    } else {
      setAnimes(newAnimes);
    }
  }

  return (
    <div className="app-container">
      <NavBar>
        <SearchBar animes={animes} onSearchAnime={handleSearchAnime} />
      </NavBar>
      <main className="main">
        <Box title="Anime List">
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box title="Anime Details">
          <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </main>
    </div>
  );
}

export default App;
