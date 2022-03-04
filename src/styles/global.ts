import {createGlobalStyle} from 'styled-components'; 

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        transition: 1.0s;
    }

    body {
        background: linear-gradient(90deg, rgba(66,196,255,1) 0%, rgba(108,226,254,1) 17%, rgba(7,241,255,1) 35%, rgba(110,234,255,1) 61%, rgba(85,209,242,1) 80%, rgba(0,189,255,1) 100%);
        background-image: url(https://cdn.suwalls.com/wallpapers/games/pokemon-23075-1920x1200.jpg);
        background-repeat-x: no-repeat;
        background-size: 100%;
        
    }

    body, input, button {
        font-family: 'Pokemon Solid', sans-serif;                         
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    button {
        cursor: pointer; 
    }
    `;