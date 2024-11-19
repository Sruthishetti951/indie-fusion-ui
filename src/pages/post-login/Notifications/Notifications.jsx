import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './Notifications.module.css';
import axios from 'axios';
import { API_URL } from '../../../appConfig';
import { capitalizeParagraph, NOTIFICATION_TYPES, openToast } from '../../../Utils/utils';
import { useNavigate } from 'react-router-dom';
const deafultProfileImage = '/Images/DefaultProfileImage.webp';

function Notifications() {

    const [notifications, setNotifications] = useState({
        loading: false,
        data: []
    });

    const navigate = useNavigate();

    const fetchNotifications = useCallback(() => {
        setNotifications({
            loading: true,
            data: null
        });
        const userID = localStorage.getItem('USER_ID');
        axios.get(`${API_URL}/notifications/${userID}`).then((res) => {
            if (res.data) {
                setNotifications({
                    loading: false,
                    data: res.data?.data,
                });
            } else {
                setNotifications({
                    loading: false,
                    data: null
                });
                openToast("Unable to fetch Groups... Please try again ...");
            }
        }).catch(() => {
            openToast("Unable to fetch Groups... Please try again ...")
        })
    }, []);

    useEffect(() => {
        fetchNotifications()
    }, [fetchNotifications]);

    const navigateToExternalPage = useCallback((eachNotification) => {
        if (eachNotification.notificationType === NOTIFICATION_TYPES.GROUP) {
            navigate(`/groups/${eachNotification?.externalId}`);
        } else {
            navigate(`/profile/${eachNotification?.notificationFrom}`);
        }
    }, [navigate]);
    const notificationsList = useMemo(() => {
        return notifications?.data?.map((eachNotification) => {
            return <div className={`${styles["main-Card"]} ${styles["card-items"]}`} key={eachNotification._id} role='button' onClick={() => navigateToExternalPage(eachNotification)}>
                
                {eachNotification?.notificationType === NOTIFICATION_TYPES.GROUP && <div>
                    <i className={`fa fa-users ${styles["fafa-icon-size"]}`} aria-hidden="true" ></i>
                </div>}
               { eachNotification?.notificationType === NOTIFICATION_TYPES.COLLAB && <div>
                    <img src={eachNotification?.fromUserProfileImage?.imageUrl ? `${API_URL}/${eachNotification?.fromUserProfileImage?.imageUrl}` : deafultProfileImage} alt="Profile Not found" className={`${styles["profile-img"]} ${styles["mg-right"]}`} />
                </div>}
                <div>
                    <p className={`${styles["p-margin"]}`}>
                        <span className='fw-bold'>{capitalizeParagraph(`${eachNotification?.fromUserDetails?.firstName} ${eachNotification?.fromUserDetails?.lastName}`)}</span>&nbsp;
                        <span>{`${eachNotification?.message}`}</span>
                    </p>
                    <p className={`${styles["p-margin"]} ${styles["date"]}`}>{`${eachNotification?.createdDate ? new Date(eachNotification?.createdDate).toDateString() : null}`}</p>
                </div>
            </div>
        })
    }, [notifications?.data]);

    const notificationLoading = useMemo(() => {
        return <div className={`${styles["loading-container"]}`}>
            <div className={`spinner-border text-primary ${styles["indicator"]}`} role="status" >
                <span className="sr-only"></span>
            </div>
        </div>
    }, []);
    return (
        <div className={`${styles["container"]}`}>
            <div>
                <div className={`${styles["card-gap"]}`}>
                    <h5 className='mb-4'>Notifications</h5>
                    {notificationsList?.loading && notificationLoading}
                    {notificationsList?.length > 0 ? notificationsList : null}
                </div>
            </div>

        </div>
    )
}

export default Notifications