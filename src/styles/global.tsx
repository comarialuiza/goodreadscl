import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #E8E0D2;

        --color-lighter: #FFFFFF;

        --color-primary-light: #796db5;
        --color-primary: #6255a5;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #E6E6F0;

        --color-secundary: #85d19e;
        --color-title-in-secundary: #333333;
        --color-text-in-secundary: #333333;

        --color-text-title: #382110;
        --color-text-complement: #52433D;
        --color-text-base: #333333;

        --color-line-in-white: #E6E6F0;
        --color-input-background: #F8F8FC;
        --color-box-base: #FFFFFF;
        --color-box-footer: #FAFAFC;

        font-size: 62.5%;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background-color: var(--color-background);
        padding: 40px;
    }

    .container {
        width: 90vw;
        max-width: 100rem;
        margin: 0 auto;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    body, input, button, textarea {
        font: 500 1.4rem Lato, sans-serif;
        color: var(--color-text-base);
    }
`;

export default GlobalStyle;