import styled from 'styled-components';

export const SideBarWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
    height:542px;
    width: 15%;
    background-color: #f6f6f6;
    margin-top: 75px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    
    .items:hover{
        color: white;
        background-color: #bdf2d5;
    }

    hr{
        border-color: #E6E6E6;
        height: 0px;
        opacity: 0.2
    }
`
export const Items = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: start;
    display: block;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    i{
        margin-right: 30px;
    }

    .link{
        text-decoration: none;
    }
`

