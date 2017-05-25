import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import ArticleContainer from '../ArticleContainer';

import '../../../theme/style/main.css';
import './choose-model.css';

export default class ChooseModel extends Component {

    constructor(props) {
        super(props);
        this.selectStateChange = this.selectStateChange.bind(this);
    }

    selectStateChange() {
        if (!this.props.selectState.status) {
            this.props.selectStateChange('visible', 1);
        } else this.props.selectStateChange('hidden', 0);
    }

    render() {
        let textAlign = {
            textAlign: 'left'
        };

        let selectState = {
            visibility: this.props.selectState.visibility,
            opacity: this.props.selectState.opacity
        };

        return (
            <ArticleContainer>
                <div className="main-form resizer-crutch-loaded">
                    <div className="main-form__item">
                        <div className="headline" style={textAlign}>Выберите модель</div>
                        <div className="select select-car" onClick={this.selectStateChange}>
                        {/*<div className="select select-car" onChange={selectState}>*/}
                            <div className="select__text">Land Cruiser Prado Дизель</div>
                            <ul className="select__list tabs-menu" style={selectState}>
                                <li className="select__item"><a href="#tab-1" data-car-type="B" className="select__link">Verso</a></li>
                                <li className="select__item"><a href="#tab-2" data-car-type="A" className="select__link">Auris</a></li>
                                <li className="select__item"><a href="#tab-3" data-car-type="A" className="select__link">Corolla</a></li>
                                <li className="select__item"><a href="#tab-4" data-car-type="A" className="select__link">RAV4 Бензин 2.0</a></li>
                                <li className="select__item"><a href="#tab-5" data-car-type="A" className="select__link">RAV4 Бензин 2.5</a></li>
                                <li className="select__item"><a href="#tab-6" data-car-type="A" className="select__link">RAV4 Дизель</a></li>
                                <li className="select__item"><a href="#tab-7" data-car-type="A" className="select__link">Prius</a></li>
                                <li className="select__item"><a href="#tab-8" data-car-type="A" className="select__link">Camry</a></li>
                                <li className="select__item"><a href="#tab-9" data-car-type="A" className="select__link">Venza</a></li>
                                <li className="select__item"><a href="#tab-10" data-car-type="A" className="select__link">Hilux</a></li>
                                <li className="select__item"><a href="#tab-11" data-car-type="A" className="select__link">Land Cruiser Prado Бензин 4.0</a></li>
                                <li className="select__item"><a href="#tab-12" data-car-type="A" className="select__link">Land Cruiser Prado Дизель</a></li>
                                <li className="select__item"><a href="#tab-13" data-car-type="A" className="select__link">Land Cruiser Prado Бензин 2.7</a></li>
                                <li className="select__item"><a href="#tab-14" data-car-type="A" className="select__link">Land Cruiser 200 Бензин</a></li>
                                <li className="select__item"><a href="#tab-15" data-car-type="A" className="select__link">Land Cruiser 200 Турбодизель</a></li>
                                <li className="select__item"><a href="#tab-16" data-car-type="A" className="select__link">Alphard</a></li>
                                <li className="select__item"><a href="#tab-17" data-car-type="A" className="select__link">Hiace Бензин</a></li>
                                <li className="select__item"><a href="#tab-18" data-car-type="A" className="select__link">Hiace Дизель</a></li>
                                <li className="select__item"><a href="#tab-19" data-car-type="C" className="select__link">GT86</a></li>
                                <li className="select__item"><a href="#tab-20" data-car-type="A" className="select__link">Highlander</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ArticleContainer>
        );
    }
}