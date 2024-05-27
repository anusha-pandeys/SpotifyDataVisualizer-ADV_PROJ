import React, { useState, useEffect } from 'react';
import { getTopTracks, getAudioFeaturesForTracks } from '../spotify'; // Import functions to fetch user's top tracks and audio features from Spotify API
import { catchErrors } from '../util';
import { StyledGrid } from '../styles';

const GenrePlot = () => {
  const [topGenres, setTopGenres] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's top tracks from Spotify API
        const topTracks = await getTopTracks();
        
        // Extract track IDs from top tracks
        const trackIds = topTracks.map(track => track.id);
        
        // Fetch audio features for the top tracks from Spotify API
        const audioFeatures = await getAudioFeaturesForTracks(trackIds);
        
        // Analyze audio features to determine top genres
        const genres = analyzeGenres(audioFeatures);

        // Update state with top genres and their ratings
        setTopGenres(genres);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data when the component mounts
    catchErrors(fetchData());
  }, []);

  const analyzeGenres = (audioFeatures) => {
    // Implement your logic to analyze audio features and determine top genres
    // For example, you could calculate averages or use thresholds for different genres
    // This is just a placeholder logic, you should customize it based on your requirements

    // Example: Calculate average danceability and energy
    const avgDanceability = audioFeatures.reduce((acc, track) => acc + track.danceability, 0) / audioFeatures.length;
    const avgEnergy = audioFeatures.reduce((acc, track) => acc + track.energy, 0) / audioFeatures.length;

    // Example: Determine top genres based on thresholds
    const topGenres = [];
    if (avgDanceability > 0.7) {
      topGenres.push({ genre: 'Dance', rating: avgDanceability });
    }
    if (avgEnergy > 0.7) {
      topGenres.push({ genre: 'Energy', rating: avgEnergy });
    }
    // Add more genres and conditions as needed

    return topGenres;
  };

  return (
    <StyledGrid type="genre">
      {topGenres ? (
        topGenres.map((genre, i) => (
          <li className="grid__item" key={i}>
            <div className="grid__item__inner">
              <h3 className="grid__item__name">{genre.genre}</h3>
              <p className="grid__item__rating">{genre.rating}</p>
            </div>
          </li>
        ))
      ) : (
        <p className="empty-notice">Loading genres...</p>
      )}
    </StyledGrid>
  );
};

export default GenrePlot;
