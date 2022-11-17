import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
 ${normalize}

 @font-face {
  font-family: 'Marck Script', cursive;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Yanone+Kaffeesatz:wght@700&display=swap');
}

body {
  font-family: 'Marck Script', cursive;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
