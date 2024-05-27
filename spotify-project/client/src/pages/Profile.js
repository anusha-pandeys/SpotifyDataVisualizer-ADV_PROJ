import { useState, useEffect } from 'react';
import { accessToken, getCurrentUserProfile, getCurrentUserPlaylists, getTopArtists } from '../spotify';
import { StyledHeader } from '../styles';
import blank_profile from './blank_profile.jpg'; 

const Profile = () => {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

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
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [token]);

  console.log(topArtists);

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
        </>
      )}
    </>
  );
};

export default Profile;
