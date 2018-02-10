import React from 'react';
import styles from './Cards.module.css'

const Cards = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div>
                    <div>Phantom Menace</div>
                    <div>Nisi tempor do magna labore. Deserunt reprehenderit ea nostrud velit. Mollit ad non aliqua excepteur qui aliqua duis. Adipisicing quis esse consectetur aute cillum non sint aliquip minim nisi.</div>
                    <div>
                        <span>Release Date:</span>
                        <span>23th June 2017</span>
                    </div>
                </div>
                <div>
                    <div>Director</div>
                    <div>Name</div>
                </div>
                <div>
                    <div>Producer</div>
                    <div>Name</div>
                </div>
                <div>
                    <div>Characters</div>
                    <div>
                        Name
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;