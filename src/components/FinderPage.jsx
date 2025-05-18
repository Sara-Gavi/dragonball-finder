import { Link } from "react-router-dom";
import kintoApp from "../images/kinto_app.png";

function FinderPage() {
  return (
    <div className="finder-page">
      <p>Coming soon... Dragon Finder</p>

      <div className="finder__logo-end">
        <Link to="/">
          <img src={kintoApp} alt="Volver al inicio" className="finder__logo" />
        </Link>
      </div>
    </div>
  );
}

export default FinderPage;
