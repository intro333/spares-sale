import React from 'react';
import Container from './Container/Container';
import ChooseModel from './ChooseModel/ChooseModel';

export default function (props) {
    return (
        <section id="mainContent" className="maincontent">
            <Container />
            <ChooseModel selectStateChange={props.selectStateChange} selectState={props.selectState} />
        </section>
    );
}