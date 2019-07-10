import styled from 'styled-components';

export const Title = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
    font-family: 'Open Sans', sans-serif;   
    margin-top: 100px;
    margin-left: 265px;
`

export const CardContainer = styled.div`
    width: 1050px;
    margin-left: 265px;
    margin-top: 15px;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    
    a{
        text-decoration: none;
        transition: margin-top 0.5s;
    }

    a:hover{
        margin-top: -8px;
    }
`