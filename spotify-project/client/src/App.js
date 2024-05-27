import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
//import './App.css';
import { catchErrors } from './util'; //excluded since async doesn't work
import {styled} from 'styled-components';
import variables from './styles/variables.js';
import { Login, Profile, TopArtists, TopTracks, Playlists, Playlist} from './pages';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { GlobalStyle } from './styles'; //import { GlobalStyle, OtherStyledComponent } from './styles';

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

//added 'a' since it's still an anchor link


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
  //const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Set the token from the access token
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
        {!token ? (
          <Login />
        ) : (
          <>
            <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
            <Router>
              <ScrollToTop />
              <Routes>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-tracks" element={<TopTracks />} />
              <Route path="/playlists/:id" element={<Playlist/>} />
               <Route path="/playlists" element={<Playlists/>} />
               <Route path="/" element={<Profile />} />
              </Routes>
            </Router>
          </>
        )}
    </div>
  );
};
export default App;