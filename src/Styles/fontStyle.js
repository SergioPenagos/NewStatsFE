import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY5KcCsww.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  .pre-header ul li {
    display: inline-block;
  }
  
  .pre-header ul.info li {
    margin-right: 45px;
  }
  
  .pre-header ul.info li a {
    color: #afafaf;
    font-size: 14px;
    transition: all .3s;
  }
  
  .pre-header ul.info li a:hover {
    color: #4da6e7;
  }
  
  .pre-header ul.info li a i {
    font-size: 18px;
    margin-right: 8px;
  }
  
  .pre-header ul.social-media {
    text-align: right;
  }
  
  .pre-header ul.social-media li {
    margin-left: 100px;
  }
  
  .pre-header ul.social-media li a {
    background-color: #afafaf;
    color: #fff;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    font-size: 14px;
    transition: all .3s;
  }
  
  .pre-header ul.social-media li a:hover {
    background-color: #4da6e7;
  }
  
  body {
    font-family: "Libre Baskerville";
    color: #444;
  }
  
  a {
    color: #444;
  }
  
  .all {
    width: 1090px;
    margin: auto;
  }
  
  .header {
    text-align: center;
    margin-top: 60px;
  }
  
  .header svg {
    width: 100%;
    height: 500px;
    margin: 40px 0;
  }
  .header h1 {
    font-size: 64px;
    margin-bottom: 0px;
  }
  .header .description {
    margin: 20px auto;
    width: 320px;
    font-size: 18px;
  }
  
  .content {
    position: relative;
  }
  
  .content svg {
    position: absolute;
    width: 900px;
    height: 6200px;
    top: 0;
  }
  
  .years {
    position: absolute;
    top: 0;
    text-align: center;
  }
  
  .year {
    font-size: 28px;
  }
  
  .titles {
    position: absolute;
    top: 0;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
  }
  
`;

export default GlobalStyle
