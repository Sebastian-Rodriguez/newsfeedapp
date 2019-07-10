import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//components
import { Logo, 
        SearchButton, 
        SearchInput, 
        HeaderWrapper, 
        InputWrapper, 
        SocialNetwork, 
        SocialNetworkItem 
    } from './styled';



class Header extends Component {
    constructor(){
        super()
        this.state = {
            key: ""
        }
    }

    handlerKeyChange = (e) => {
        this.setState({
            key: e.target.value
        })
    }

    handlerButtonClick = () => {
        const { history } = this.props;
        const { key } = this.state;
        const inputValue = document.querySelector(".input-search").value;  

        if(key && inputValue){

            history.push(`/search/${key}`)
            document.querySelector(".input-search").value = "";
        }
    }

    render(){

        return(
            <HeaderWrapper>
                <Logo> <h1>NeewsFeeds</h1> </Logo>
                <InputWrapper>
                    <SearchInput type="text" placeholder="Buscar Noticias" className="input-search" onChange={this.handlerKeyChange}/> 
                    <SearchButton className="btn-search" onClick={ () => this.handlerButtonClick() }>Buscar</SearchButton>
                </InputWrapper>
                <SocialNetwork>
                    <SocialNetworkItem><i class="fab fa-twitter"></i></SocialNetworkItem>
                    <SocialNetworkItem><i class="fab fa-facebook"></i></SocialNetworkItem>
                    <SocialNetworkItem><i class="fab fa-instagram"></i></SocialNetworkItem>
                </SocialNetwork>
            </HeaderWrapper>
        )
    }
}

export default withRouter(Header);

