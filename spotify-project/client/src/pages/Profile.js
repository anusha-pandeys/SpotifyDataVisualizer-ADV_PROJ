import { useState, useEffect } from 'react';
import { accessToken, getCurrentUserProfile } from '../spotify';
import { StyledHeader } from '../styles';
import blank_profile from './blank_profile.jpg'; 
 
const Profile = () => {
    const [token, setToken] = useState(null);
    const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Set the token from the access token
    setToken(accessToken);

    // Fetch profile data if the token is available
    if (accessToken) {
      const fetchData = async () => {
        try {
          const { data } = await getCurrentUserProfile();
          setProfile(data);
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [token]);

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
  )
};

export default Profile;