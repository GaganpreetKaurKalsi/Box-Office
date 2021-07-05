import React from 'react'
import { SeasonsWrapper, SeasonList } from './Seasons.styled';

// Seasons.js
const Seasons = ({ seasons, theme }) => {
  return (
      <SeasonsWrapper>
          <p>
              Seasons in total: <span>{seasons.length}</span>
          </p>
          <p>
              Episodes in total:{' '}
              <span>
                  {seasons.reduce(
                      (acc, season) => acc + season.episodeOrder,
                      0
                  )}
              </span>
          </p>
          <SeasonList>
              {seasons.map(season => (
                  <div className="season-item" key={season.id}>
                      <div className={`left ${theme}`}>
                          <p>Season {season.number}</p>
                          <p>
                              Episodes: <span>{season.episodeOrder}</span>
                          </p>
                      </div>
                      <div className={`right ${theme}`}>
                          Aired:{' '}
                          <span>
                              {season.premiereDate} - {season.endDate}
                          </span>
                      </div>
                  </div>
              ))}
          </SeasonList>
      </SeasonsWrapper>
  );
};

export default Seasons
