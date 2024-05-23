import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
//import './App.css';
import { catchErrors } from './util'; //excluded since async doesn't work
import {styled} from 'styled-components';
import variables from './styles/variables.js';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { GlobalStyle } from './styles'; //import { GlobalStyle, OtherStyledComponent } from './styles';

//added 'a' since it's still an anchor link

const StyledLoginButton = styled.a` 
  background-color: var(--green);
  color: var(--white);
  padding: 10px 20px;
  margin: 20px;
  border-radius: 30px;
  display: inline-block;
`;

// Scroll to top of page when changing routes
// https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
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
  }, [token]); // Depend on `token` so it re-runs when `token` changes
  
 /*
  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);
  */

  return (
    <div className="App">
    <GlobalStyle />
    <header className="App-header">
        
      {!token ? (
          <StyledLoginButton href="http://localhost:8888/login">
          Log in to Spotify
        </StyledLoginButton>
        ) : (

          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/top-artists" element={<h1>Top Artists</h1>} />
              <Route path="/top-tracks" element={<h1>Top Tracks</h1>} />
              <Route path="/playlists/:id" element={<h1>Playlist</h1>} />
              <Route path="/playlists" element={<h1>Playlists</h1>} />
              <Route
                path="/"
                element={
                  <>
                    <button onClick={logout}>Log Out</button>
                    {profile && (
                      <div>
                        <h1>{profile.display_name}</h1>
                        <p>{profile.followers.total} Followers</p>
                        {profile.images.length && profile.images[0].url && (
                          <img src={profile.images[0].url} alt="Avatar" />
                        )}
                      </div>
                    )}
                  </>
                }
              />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;

          /*
          <Router>
          <ScrollToTop />

          <Routes>
            <Route path="/top-artists">
              <h1>Top Artists</h1>
            </Route>
            <Route path="/top-tracks">
              <h1>Top Tracks</h1>
            </Route>
            <Route path="/playlists/:id">
              <h1>Playlist</h1>
            </Route>
            <Route path="/playlists">
              <h1>Playlists</h1>
            </Route>
            <Route path="/">
              <>
                <button onClick={logout}>Log Out</button>

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
            </Route>
          </Routes>
        </Router>
        )}
      </header>
    </div>
  );
}

export default App;

*/