import { useState, useEffect } from "react"; // Hooks to allow adding state and effects to components
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";
import BackToHome from "./BackToHome";
import KiFilterForm from "./KiFilterForm";

function FinderPage() {
  // 1. State variables
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [expandedCharacter, setExpandedCharacter] = useState(null);

  // States for what the user types
  const [kiFromInput, setKiFromInput] = useState("");
  const [kiToInput, setKiToInput] = useState("");
  // States for the actual filter values
  const [kiFrom, setKiFrom] = useState(null);
  const [kiTo, setKiTo] = useState(null);

  // 2. useEffect
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=58")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.items);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);
  // 3. Event functions
  const handleInput = (event) => {
    setNameFilter(event.currentTarget.value);
  };

  const handleExpand = (id) => {
    setExpandedCharacter((prevId) => (prevId === id ? null : id));
  };
  //4. Characters filtered by name input
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  // 3.2 Event functions for Ki range inputs
  const handleKiFromChange = (event) => {
    setKiFromInput(event.currentTarget.value);
  };

  const handleKiToChange = (event) => {
    setKiToInput(event.currentTarget.value);
  };

  //click the Search button, it takes those values and converts them to numbers
  const handleKiSearch = (event) => {
    event.preventDefault(); // prevents the form from reloading the page
    setKiFrom(kiFromInput ? parseInt(kiFromInput) : null);
    setKiTo(kiToInput ? parseInt(kiToInput) : null);
  };

  return (
    <div className="finder">
      <h1 className="finder__title">Discover your character!</h1>

      <SearchForm value={nameFilter} onInput={handleInput} />
      <KiFilterForm />

      {nameFilter !== "" && (
        <>
          <p className="finder__results">
            {filteredCharacters.length} results found
          </p>
          <CharacterList
            characters={filteredCharacters}
            expandedId={expandedCharacter}
            onExpand={handleExpand}
          />
        </>
      )}

      <BackToHome />
    </div>
  );
}

export default FinderPage;
