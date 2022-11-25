const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    body {
        width: 100vw;
        height: 100vh;
        background: #7897d1;
        overflow: hidden;
    }
`