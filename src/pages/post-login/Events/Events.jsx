import React from 'react';
import styles from './Events.module.css';

function Events() {
    return (
        <div className={`${styles["container"]}`}>
            <div>
                <div className={`${styles["card-gap"]}`}>
                    <h5 className='mb-4'>Events</h5>
                    <div className={`${styles["main-Card"]} ${styles["card-items"]}`}>
                        <div className={`${styles["icon-box"]}`}>
                            <i className={`fa fa-calendar ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                        </div>
                        <div>
                            <p className={`${styles["p-margin"]}`}>Name of the event Creator</p>
                            <p className={`${styles["p-margin"]}`}>Event Title</p>
                            <p className={`${styles["p-margin"]} ${styles["date-font"]}`}>Date</p>
                        </div>
                    </div>

                    <div className={`${styles["main-Card"]} ${styles["card-items"]}`}>
                        <div className={`${styles["icon-box"]}`}>
                            <i className={`fa fa-calendar ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                        </div>
                        <div>
                            <p className={`${styles["p-margin"]}`}>Name of the event Creator</p>
                            <p className={`${styles["p-margin"]}`}>Event Title</p>
                            <p className={`${styles["p-margin"]} ${styles["date-font"]}`}>Date</p>
                        </div>
                    </div>

                    <div className={`${styles["main-Card"]} ${styles["card-items"]}`}>
                        <div className={`${styles["icon-box"]}`}>
                            <i className={`fa fa-calendar ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                        </div>
                        <div>
                            <p className={`${styles["p-margin"]}`}>Name of the event Creator</p>
                            <p className={`${styles["p-margin"]}`}>Event Title</p>
                            <p className={`${styles["p-margin"]} ${styles["date-font"]}`}>Date</p>
                        </div>
                    </div>

                    <div className={`${styles["main-Card"]} ${styles["card-items"]}`}>
                        <div className={`${styles["icon-box"]}`}>
                            <i className={`fa fa-calendar ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                        </div>
                        <div>
                            <p className={`${styles["p-margin"]}`}>Name of the event Creator</p>
                            <p className={`${styles["p-margin"]}`}>Event Title</p>
                            <p className={`${styles["p-margin"]} ${styles["date-font"]}`}>Date</p>
                        </div>
                    </div>

                    <div className={`${styles["main-Card"]} ${styles["card-items"]}`}>
                        <div className={`${styles["icon-box"]}`}>
                            <i className={`fa fa-calendar ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                        </div>
                        <div>
                            <p className={`${styles["p-margin"]}`}>Name of the event Creator</p>
                            <p className={`${styles["p-margin"]}`}>Event Title</p>
                            <p className={`${styles["p-margin"]} ${styles["date-font"]}`}>Date</p>
                        </div>
                    </div>

                    <div className={`${styles["main-Card"]} ${styles["card-items"]}`}>
                        <div className={`${styles["icon-box"]}`}>
                            <i className={`fa fa-calendar ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                        </div>
                        <div>
                            <p className={`${styles["p-margin"]}`}>Name of the event Creator</p>
                            <p className={`${styles["p-margin"]}`}>Event Title</p>
                            <p className={`${styles["p-margin"]} ${styles["date-font"]}`}>Date</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Events