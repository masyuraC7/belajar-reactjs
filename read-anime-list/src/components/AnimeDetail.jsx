/* eslint-disable react/prop-types */
export default function AnimeDetail({ selectedAnime }) {
  return (
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
  );
}
