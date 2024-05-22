/*

You'll notice that we can also store values like font families in our CSS variables.

In these lessons, I'll be using the Circular font family since I have the font files locally. If you have Circular, feel free to use it too! Otherwise we can just default to the sans-serif system font.

If you have Circular or another custom font you'd like to use, put the font files (.woff or .woff2 format) in client/public/fonts. (With Create React App, any static assets that we put in the public folder are automatically added to the build folder as-is.)

Then, create a file to store the @font-faces just like we did with global styles. In client/src/styles/fonts.js, we'll add the following.
*/


/*
import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Circular Std';
    src: url('../fonts/CircularStd-Book.woff2') format('woff2'),
    url('../fonts/CircularStd-Book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url('../fonts/CircularStd-Bold.woff2') format('woff2'),
    url('../fonts/CircularStd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular Std';
    src: url('../fonts/CircularStd-Black.woff2') format('woff2'),
    url('../fonts/CircularStd-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;
*/