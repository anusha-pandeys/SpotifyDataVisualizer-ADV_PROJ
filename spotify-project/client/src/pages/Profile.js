import { useState, useEffect } from 'react';
import { accessToken, getCurrentUserProfile } from '../spotify';


 
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
        <div>
          <h1>{profile.display_name}</h1>
          <p>{profile.followers.total} Followers</p>
          {profile.images.length && profile.images[0].url && (
            <img src={profile.images[0].url} alt="Avatar"/>
          )}
        </div>
      )}
    </>
  )
};

export default Profile;