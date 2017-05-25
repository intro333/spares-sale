import React from 'react';
import '../../../theme/style/main.css';
import ArticleContainer from '../ArticleContainer';

export default function (props) {
    let textAlign = {
        textAlign: 'left'
    };
    return (
        <ArticleContainer>
            <p style={textAlign}>Оригинальные запасные части Toyota теперь можно приобрести по привлекательной цене! Легендарное качество Toyota, подтвержденное официальной гарантией, позволит Вам не только позаботиться о своем автомобиле, но и ощутить особую уверенность на дороге.
                <br/><br/>
                <strong>Срок действия кампании – до 30 июня 2017.</strong>
            </p>
        </ArticleContainer>
    );
}