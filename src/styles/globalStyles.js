const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    body {
        width: 100vw;
        height: 100vh;
        background: whitesmoke;
        overflow: hidden;
    }
`;
