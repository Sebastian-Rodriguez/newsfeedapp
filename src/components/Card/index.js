import React from 'react';
import dayjs from 'dayjs';
import { CardWrapper, CardImage, CardTitle, CardFooter } from './styled';

const Card = (props) => {
    
    const newdate = dayjs(props.date * 1000).format('DD[/]MM[/]YYYY');

    return(
        <CardWrapper>
            <CardImage>
                <img src={ props.image }/>
            </CardImage> 
            <CardTitle> { props.title }</CardTitle>    
            <CardFooter>{ `${newdate} - ${props.source}` }</CardFooter>
        </CardWrapper>
    )
}

export default Card;