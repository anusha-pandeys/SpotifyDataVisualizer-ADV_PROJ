import { useState, useEffect } from 'react';
import { getTopTracks, getAudioFeaturesForTracks } from '../spotify'; // Import functions to fetch user's top tracks and audio features from Spotify API
import { catchErrors } from '../util';
import { StyledGrid, StyledSection} from '../styles';
import { SectionWrapper, TrackList, TimeRangeButtons, Loader } from '../components';
import { useParams } from 'react-router-dom';


const GenrePlot = () => {
  const { id } = useParams();
  const [topGenres, setTopGenres] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [trackIDs, setTrackIDs] = useState (null);
  const [audioFeatures, setAudioFeatures] = useState(null);
  const [activeRange, setActiveRange] = useState('short');
  const [map, setMap] = useState(new Map());
  const [numberAnalysis, setNumAnalysis] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopTracks(`${activeRange}_term`);
      setTopTracks(data);
      //setTrackIDs(data.id);
    };


    catchErrors(fetchData());

  }, [activeRange]);


  useEffect (() => {
    const buildTrackAndCategoryMaps = async () => {
        
        const tempMap = new Map();
        for (let i = 0; i < topTracks.items.length; i++) {
            const audioFeatures = await getAudioFeaturesForTracks(topTracks.items[i].id);
            tempMap.set(topTracks.items[i].id, audioFeatures.data.audio_features[0]);
        }
        setMap(tempMap);

        setNumAnalysis(null);

        const categories = new Map([
            ["acousticness", 0],
            ["danceability", 0],
            ["energy", 0],
            ["instrumentalness", 0],
            ["loudness", 0],
            ["speechiness", 0],
            ["tempo", 0]
          ]);
    
        for (let [key, value] of tempMap) {
            categories.set ("acousticness", categories.get("acousticness") + value.acousticness)
            categories.set ("danceability", categories.get("danceability") + value.danceability)
            categories.set ("energy", categories.get("energy") + value.energy)
            categories.set ("instrumentalness", categories.get("instrumentalness") + value.instrumentalness)
            categories.set ("loudness", categories.get("loudness") - value.loudness)
            categories.set ("speechiness", categories.get("speechiness") + value.speechiness)
            categories.set ("tempo", categories.get("tempo") + value.tempo)
        }
    
        for (let [key, value] of categories) {
            categories.set(key, value/tempMap.size);
            if (key = "loudness") {
                categories.set(key, value/60);
            }
            
            if (key = "tempo") {
                categories.set (key, value/150);
                if (categories.get("tempo") > 1) {
                    categories.set (key, 1);
                }

                if (categories.get("tempo") < 0) {
                    categories.set (key, 0);
                }
            }
            
        };
    
        setNumAnalysis(categories);
        
      };
      if (topTracks) {
        buildTrackAndCategoryMaps();
      }
  }, [topTracks]);

console.log(map);
  console.log (numberAnalysis);


  return (
    <StyledSection type="genre">
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
    </StyledSection>
  );
};

/*
{playlists.map((playlist, i) => (
        <li className="grid__item" key={i}>
          <Link className="grid__item__inner" to={`/playlists/${playlist.id}`}>
            {playlist.images && playlist.images.length > 0 && playlist.images[0] && (
              <div className="grid__item__img">
                <img src={playlist.images[0].url} alt={playlist.name} />
              </div>
            )}
            <h3 className="grid__item__name overflow-ellipsis">{playlist.name}</h3>
            <p className="grid__item__label">Playlist</p>
          </Link>
        </li>
      ))}
*/
export default GenrePlot;
