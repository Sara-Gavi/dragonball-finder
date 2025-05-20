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

  // Apply the name and ki filter to the character array
  const filteredCharacters = characters.filter((character) => {
    // 1. Check if the name matches the user s search
    const characterName = character.name.toLowerCase();
    const searchInput = nameFilter.toLowerCase();
    const nameMatches = characterName.includes(searchInput);

    // 2. Convert the character's ki text to a number
    const kiText = character.ki; // Example: "15,000"
    const kiOnlyNumbers = kiText.replace(/\D/g, ""); // Remove all non numbers
    const kiAsNumber = parseInt(kiOnlyNumbers); // "15000" becomes 15000

    // 3. Check if the ki is in the selected range
    let kiMatches = true; // Start by saying "yes, it matches"

    // If the user wrote a minimum value
    if (kiFrom !== null) {
      kiMatches = kiMatches && kiAsNumber >= kiFrom;
    }

    // If the user wrote a maximum value
    if (kiTo !== null) {
      kiMatches = kiMatches && kiAsNumber <= kiTo;
    }

    // 4. Return the character only if name AND ki match
    return nameMatches && kiMatches;
  });

  /*//4. Characters filtered by name input
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );*/

  // 3.2 Event functions for Ki range inputs
  const handleKiFromChange = (event) => {
    setKiFromInput(event.currentTarget.value);
  };

  const handleKiToChange = (event) => {
    setKiToInput(event.currentTarget.value);
  };

  //click the Search button, it takes values and converts them to numberrs
  const handleKiSearch = (event) => {
    // Stop the form from reloading the page
    event.preventDefault();
    // If the user wrote something in "From", change it to a number
    // If not use nulll
    if (kiFromInput !== "") {
      setKiFrom(parseInt(kiFromInput));
    } else {
      setKiFrom(null);
    }
    // If the user wrote something in "To", change it to a number
    // If not use null
    if (kiToInput !== "") {
      setKiTo(parseInt(kiToInput));
    } else {
      setKiTo(null);
    }
  };

  return (
    <div className="finder">
      <h1 className="finder__title">Discover your character!</h1>

      <SearchForm value={nameFilter} onInput={handleInput} />
      <KiFilterForm
        kiFromInput={kiFromInput}
        kiToInput={kiToInput}
        onKiFromChange={handleKiFromChange}
        onKiToChange={handleKiToChange}
        onKiSearch={handleKiSearch}
      />

      {(nameFilter !== "" || kiFrom !== null || kiTo !== null) && (
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
