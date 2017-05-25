import React from 'react';
import '../../theme/style/main.css';

export default function (props) {
    return (
        <article className="container">
            <div className="row">
                <div className="col-xs-12">
                    <section>
                        <div>
                            {props.children}
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
}