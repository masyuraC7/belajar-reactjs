/* eslint-disable react/prop-types */
export default function AnimeDetail({ selectedAnime, isOpen2, setIsOpen2 }) {
  return (
    <div className="box-container">
      <div className="box">
        <div className={isOpen2 ? "box-header open" : "box-header"}>
          <h1 className="box-title">Anime Details</h1>
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
        </div>
        {isOpen2 && (
          <div className="box-content">
            <div className="details">
              {selectedAnime.length === 0 ? (
                <h2 className="no-result">No anime selected</h2>
              ) : (
                <div>
                  <header>
                    <img
                      src={selectedAnime.image}
                      alt={`${selectedAnime.title} cover`}
                    />
                    <div className="details-overview">
                      <h2>{selectedAnime.title}</h2>
                      <p>
                        {selectedAnime.year} &bull; {selectedAnime.score}
                      </p>
                    </div>
                  </header>
                  <section>
                    <p>
                      <em>{selectedAnime.synopsis}</em>
                    </p>
                  </section>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
