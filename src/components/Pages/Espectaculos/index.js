import React, { Component } from 'react';
import Card from '../../Card';
import { CardContainer, Title }from './styled';


class Espectaculos extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: false,
            data: []
        }
    }

    async componentDidMount(){
        const url = "https://api.canillitapp.com/news/category/4";
        this.setState({ isLoading: true });

        try{
            const response = await fetch(url);
            const data = await response.json();
    
            this.setState({ data });
            console.log(this.state.data);
            
        }catch(error){
            console.log(error);
        }finally{
            this.setState({ isLoading: false })
        }


    }

    render(){
        const { isLoading, data } = this.state;
        
        console.log(data);

        return(
            <div>
                <Title> Espectaculos </Title>
                <CardContainer>
                    { 
                        isLoading ? <img src="../../../assets/loading.gif" width="35px"/> : data.slice(0,50).map( data => (
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

export default Espectaculos;