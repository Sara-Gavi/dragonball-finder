function KiFilterForm() {
  return (
    <>
      <p className="finder__subtitle">Or filter by base Ki</p>
      <form className="finder__ki-filter">
        <label htmlFor="kiFrom" className="finder__label">
          From:
          <input type="number" id="kiFrom" className="finder__input" />
        </label>
        <label htmlFor="kiTo" className="finder__label">
          To:
          <input type="number" id="kiTo" className="finder__input" />
        </label>
        <button type="submit" className="finder__button">
          Search
        </button>
      </form>
    </>
  );
}

export default KiFilterForm;
