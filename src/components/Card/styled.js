import styled from 'styled-components';

export const  CardWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
    border-radius: 5px;
    background: white;
    padding-bottom: 10px;
    border: 1px solid #ededf0;
    box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
    transition: all ease 150ms;
    width: 100%;
`
export const CardImage = styled.div`
    margin: 0 auto;
    border-radius: inherit;

    img{
        border-radius: 5px 5px 0px 0px;
        max-width: 100%;
    }
`

export const CardTitle = styled.h3`
    text-align: center;
    padding: 30px;
    font-family: 'Open Sans', sans-serif;
    color: black;
`

export const CardFooter = styled.p`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: grey;
`