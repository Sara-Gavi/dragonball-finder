import { Link } from "react-router-dom";
import kintoApp from "../images/kinto_app.png";

function FinderPage() {
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
            value=""
            onInput=""
            className="finder__input"
          />
        </label>
      </form>
      <>
        <p className="finder__results"> results found</p>
        <ul className="finder__list">
          <li className="finder__item">
            <span>NAME: </span>
            <span>KI: </span>
          </li>
        </ul>
      </>

      <div className="finder__logo-end">
        <Link to="/">
          <img src={kintoApp} alt="Volver al inicio" className="finder__logo" />
        </Link>
      </div>
    </div>
  );
}

export default FinderPage;
