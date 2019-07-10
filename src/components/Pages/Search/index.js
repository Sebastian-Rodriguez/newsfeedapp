import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../Card';
import { CardContainer, Title }from './styled';


class Search extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            data: []
        }
    }

    async fetchNeews(){
        const key = this.props.match.params.key;
        
        const url = `https://api.canillitapp.com/search/${key}`;
        this.setState({ isLoading: true });

            try{
                const response = await fetch(url);
                const data = await response.json();
        
                this.setState({ data });
                
            }catch(error){
                console.log(error);
            }finally{
                this.setState({ isLoading: false })
            }
    }

    componentDidMount(){
        this.fetchNeews()    
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.key !== this.props.match.params.key) {
          this.fetchNeews()
        }
    }
    
    render(){
        const { isLoading, data } = this.state;
        const { key } = this.props.match.params;
        const message = "no se encontraron resultados para tu busqueda :(";
        
        return(
            <div>
                
                <Title> Resultados de la busqueda: { key }</Title>
                 
                <CardContainer>
                    {   
                        isLoading ? <img src="../../../assets/loading.gif" width="35px"/> : data.length === 0 ? <p>{ message }</p> :
                        data.map( data => (
                            <a href={data.url}>
                                <Card title={ data.title} image={ data.img_url } source={ data.source_name } date={ data.date }></Card>
                            </a>
                        )) 
                    }
                                
                </CardContainer>
            </div>
        )
    }

}

export default withRouter(Search);