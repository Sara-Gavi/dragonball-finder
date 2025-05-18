import { Link } from "react-router-dom";
import kintoApp from "../images/kinto_app.png";
// Hooks to allow adding state and effects to components
import { useState, useEffect } from "react";

function FinderPage() {
  // 1. State variables
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [expandedCharacter, setExpandedCharacter] = useState(null);

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
    setExpandedCharacter((prevId) => {
      if (prevId === id) {
        return null; // Close the card if it's already open
      } else {
        return id; // Open the clicked card
      }
    });
  };

  //4. Characters filtered by name input
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="finder">
      <h1 className="finder__title">Discover your character!</h1>

      <form className="finder__form">
        <p className="finder__subtitle">Find them by name</p>
        <label htmlFor="name" className="finder__label">
          <input
            type="text"
            id="name"
            placeholder="Master Roshi"
            value={nameFilter}
            onInput={handleInput}
            className="finder__input"
          />
        </label>
      </form>
      {nameFilter !== "" && (
        <>
          <p className="finder__results">
            {filteredCharacters.length} results found
          </p>
          <ul className="finder__list">
            {filteredCharacters.map((character) => (
              <li
                key={character.id}
                className="finder__item"
                onClick={() => handleExpand(character.id)}
              >
                <div className="finder__summary">
                  <p>{character.name}</p>
                  <p>{character.ki}</p>
                </div>

                {expandedCharacter === character.id && (
                  <div className="finder__details">
                    <div className="finder__image-wrapper">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="finder__image"
                      />
                    </div>
                    <p className="finder__description">
                      {character.description}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Kinto logo used to return to the landing page */}
      <div className="finder__logo-end">
        <Link to="/">
          <img src={kintoApp} alt="Volver al inicio" className="finder__logo" />
        </Link>
      </div>
    </div>
  );
}

export default FinderPage;
