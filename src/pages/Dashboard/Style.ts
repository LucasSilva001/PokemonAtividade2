import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
    display: flex;
    font-size: 50px;
    color: #f9ffba;
    line-weigth: 56px;
    margin-top: 80px;
    justify-content: center;
    text-shadow: 4px 8px #065c28;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 800px;

    display: flex;
    margin-left: auto;
    margin-right: auto;

    input {
        flex: 1;
        height: 65px;
        width: 500px;
        padding: 0 24px; 
        border: 0;
        border-radius: 5px 0 0 5px; 
        color: #3a3a3a;
        background-color: #c2deb1;
    }

    button {
        width: 210px;
        height: 65px;
        background: linear-gradient(90deg, rgba(203,203,200,1) 2%, rgba(173,173,171,1) 21%, rgba(173,173,171,1) 86%, rgba(203,203,200,1) 99%);
        border-radious: 0 5px 5px 0;
        border: 0;
        
        color: #3d3d4d;
        font-weight: bold:

        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.1, "#92bef7")}
        }

    }

`;

export const CardPoke = styled.div`

    display: flex;
    flex-wrap: wrap;
    max-width: 880px;
    margin-top: 80px;
    margin-left: 19%;
    font: 16px Robot;

    .poke {
        width: 220px;
        height: 220px;
        position: relative;
        border-radius: 5px;

        .circulo {
            height: 100%;
            width: 100%;
            background: radial-gradient(circle, rgba(249,255,186,1) 0%, rgba(132,176,116,1) 29%, rgba(6,92,40,1) 56%);
            border-radius: 10px;

            clip-path: circle(90px);

            img {
                position: absolute;
                width: 125px;
                height: 125px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &:hover {
                clip-path: circle(200px);

                img {
                    height: 0px;
                    width: 0px;
                }

                .retangulo {
                    opacity: 1;
                }
            }
        

            .retangulo {
                display: flex;
                flex-direction: column;
                text-align: center;
                height: 220px;
                opacity: 0;
                background: linear-gradient(0deg, rgba(27,106,58,1) 0%, rgba(132,176,116,1) 20%, rgba(196,219,154,1) 37%, rgba(212,236,171,1) 48%, rgba(212,236,171,1) 52%, rgba(196,219,154,1) 70%, rgba(132,176,116,1) 83%, rgba(27,106,58,1) 100%);
                border-radius: 10px;

                h4 {
                    font-size: 26px;
                    margin-top: 20px;
                    color: #3d3d4d;
                }

                strong {
                    font-size: 18px;
                    color: #144561;
                    margin-top: 15px;
                }
            
                p {
                    font-size: 18px;
                    color: #3d3d4d;
                    margin-top: 2px;
                }
            }
        }
    }
    
`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;
    margin-left: 25%;
`
    