import styled from 'styled-components';


export const HeaderWrapper = styled.nav`
    height: 75px;
    width: 100%;
    background-color: #bdf2d5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 1;

    .btn-search:hover{
        background-color: blue;
        cursor: pointer;
    }
`

export const Logo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

    h1{
        color: white;
        font-family: 'Anton', sans-serif;
        text-shadow: 2px 2px 5px grey;
    }
`

export const SearchButton = styled.button`
height: 37px;
width: 70px;
border: 0px;
background: rgba(82,163,235,1);
border-radius: 25px 25px 25px 25px;
color: white;
font-size: 15px;
` 

export const SearchInput = styled.input`
    height: 25px;
    width: 400px;
    padding: 5px;
    border: 0px;
    border-radius: 15px 15px 15px 15px;
    margin-right: 20px;
    font-size: 15px;
    color: grey;
`

export const InputWrapper = styled.div`
    heigth: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const SocialNetwork = styled.div`
    heigth: 100%;
    width: 150px;
    display: flex;
    justify-content: space-between;

 `

 export const SocialNetworkItem = styled.div`
    background-color: white;
    border-radius: 50px;
    padding: 10px;
    text-align: center;
 `