import styles from './Cards.module.css';
import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            errorMessage: '',
            title: '',
            description: '',
            release_date: '',
            info: {},
        };
    }
    handleArrayUrlFetch = (urls, callback) =>
        Promise.all(urls.map(url => fetch(url))).then(responses =>
            Promise.all(responses.map(res => res.text()))
        );
    componentDidMount() {
        fetch('https://swapi.co/api/films/1/')
            .then(data => data.json())
            .then(data =>
                this.setState(
                    {
                        loading: false,
                        title: data.title,
                        description: data.opening_crawl,
                        release_date: data.release_date,
                    },
                    () => {
                        // fetch all the individual characters
                        this.handleArrayUrlFetch(data.characters).then(characters =>
                            this.setState({
                                info: {
                                    ...this.state.info,
                                    characters: characters.map(JSON.parse).map(data => ({
                                        name: data.name,
                                        url: data.url,
                                    })),
                                },
                            })
                        );

                        // fetch all the individual characters
                        this.handleArrayUrlFetch(data.starships).then(starships =>{
                            this.setState({
                                info: {
                                    ...this.state.info,
                                    starships: starships.map(JSON.parse).map(data => ({
                                        name: data.name,
                                        url: data.url,
                                    })),
                                },
                            })
                        }
                        );
                    }
                )
            )
            .catch(err =>
                this.setState({
                    error: true,
                    errorMessage: 'Unable to fetch the data',
                })
            );
    }
    render() {
        return (
            <div>
                {this.state.error && <div>{this.state.errorMessage}</div>}

                {!this.state.error &&
                    this.state.loading && <div>Loading...</div>}

                {!this.state.error &&
                    !this.state.loading && (
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <div className={styles.titleBlock}>
                                    <div className={styles.title}>
                                        {this.state.title}
                                    </div>
                                    <div className={styles.description}>
                                        {this.state.description}
                                    </div>
                                    <div className={styles.release}>
                                        <div>Release Date:</div>
                                        <div>{this.state.release_date}</div>
                                    </div>
                                </div>
                                {Object.keys(this.state.info).map(key => {
                                return (
                                    <div>
                                        <div className={styles.label}>
                                            {key}
                                        </div>
                                        {this.state.info[key] &&
                                            this.state.info[key].map(data => (
                                                <div
                                                    onClick={() => {
                                                        console.log(data.url);
                                                    }}
                                                    className={styles.names}
                                                >
                                                    {data.name}
                                                </div>
                                            ))}
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default Cards;
