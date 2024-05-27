import { useState, useEffect } from 'react';
import {
  accessToken,
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopArtists,
  getTopTracks,
  getAudioFeaturesForTracks
} from '../spotify';
import { StyledHeader } from '../styles';
import blank_profile from './blank_profile.jpg'; 
import { SectionWrapper, ArtistsGrid, TrackList, PlaylistsGrid, Loader, GenrePlot } from '../components';

/*
For each component...
1. Add a function to client/src/spotify.js to hit a Spotify API endpoint with axios
2. Create a new JS file for the component and and export it in client/src/components/index.js
3. Add new Styled Components for the component as needed
4. Import the component to client/src/pages/Profile.js and add it to the template
*/

const Profile = () => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    // Set the token from the access token
    setToken(accessToken);

    // Fetch profile data if the token is available
    if (accessToken) {
      const fetchData = async () => {
        try {
          const { data: profileData } = await getCurrentUserProfile();
          setProfile(profileData);
          const { data: playlistsData } = await getCurrentUserPlaylists();
          setPlaylists(playlistsData);
          const {data: topArtistsData} = await getTopArtists();
          setTopArtists(topArtistsData);
          const {data: topTracksData} = await getTopTracks();
          setTopTracks(topTracksData);
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [token]);

  console.log(topTracks);

/*
    useEffect(() => {
      setToken(accessToken);
      const fetchData = async () => {
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile.data);
  
        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylists(userPlaylists.data);

        const userTopArtist = await getTopArtists();
        setTopArtists(userTopArtist.data);
      };
  
      catchErrors(fetchData());
    }, []);
  */

  return (
    <>
      {profile && (
        <>
          <StyledHeader type="user">
            <div className="header__inner">
              <img
                className="header__img"
                src={profile.images && profile.images.length > 0 && profile.images[0].url ? profile.images[0].url : blank_profile}
                alt="Avatar"
              />
              <div>
                <div className="header__overline">Profile</div>
                <h1 className="header__name">{profile.display_name}</h1>
                <p className="header__meta">
                  {playlists && (
                    <span>{playlists.total} Playlist{playlists.total !== 1 ? 's' : ''}</span>
                  )}
                  <span>
                    {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                  </span>
                </p>
              </div>
            </div>
          </StyledHeader>
          <main>
            {topArtists && topTracks && playlists ? (
              <>
                <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
                  <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
                </SectionWrapper>

                <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
                  <TrackList tracks={topTracks.items.slice(0, 10)} />
                </SectionWrapper>

                <SectionWrapper title="Genre analysis">
                  <GenrePlot> </GenrePlot>
                </SectionWrapper>

                <SectionWrapper title="Public Playlists" seeAllLink="/playlists">
                  <PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
                </SectionWrapper>
              </>
            ) : (
              <Loader />
            )}
          </main>
        </>
      )}
    </>
  );
};

export default Profile;
