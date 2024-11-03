import { useEffect, useState } from 'react'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import styles from './MyProfilePage.module.css'
import axios from 'axios';
import { API_URL } from '../appConfig';
import { getIsImageFormat, openToast } from '../Utils/utils';
import { Link, useNavigate } from 'react-router-dom';
const deafultProfileImage = '/Images/DefaultProfileImage.webp';
const noPost = '/Images/no-posts.jpeg';

function MyProfilePage() {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [postIdForDelete, setPostIdForDelete] = useState(null);


    const [profileImage, setProfileImage] = useState(deafultProfileImage);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = () => {
        const userId = localStorage.getItem('USER_ID');
        axios.get(`${API_URL}/post/${userId}`).then((res) => {
            if (res.data?.data) {
                const responseData = res.data.data;
                setPostList(responseData.posts?.reverse());
                if (responseData.imageUrl) {
                    setProfileImage(`${API_URL}/${responseData.imageUrl}`);
                }
            } else {
                openToast("Not able to fetch the data now... Try again later... ");
            }
        }).catch((e) => {
            openToast("Something went wrong... Please try again");
        })
    }

    const deleteBeforeConfirmation = (postId) => {
        setPostIdForDelete(postId._id);
        setModalShow(true);
    }
    
    const deleteAfterConfirmation = () => {
        const userId = localStorage.getItem('USER_ID');
        axios.delete(`${API_URL}/post/${userId}/${postIdForDelete}`).then((res) => {
            if (res.data?.data) {
                openToast('Post Deleted Successfully', false);
                getAllPosts();
            } else {
                openToast('Not able to delete... Please try again');
            }
        }).catch((e) => {
            openToast('Something went wrong ... Please try again');
        }).finally(() => {
            setModalShow(false);
        })
    }
    return (
        <>
            <div className={'d-flex justify-content-center'}>
                <p className='fw-bold'>My Feed</p>
            </div>
            <div className={`${styles["main-container"]}`}>
                {postList?.length > 0 ? postList.map((eachPost) => {
                    return <div className={`${styles["container-profile"]}`} key={eachPost._id}>
                        <div className={`${styles["header-data"]}`}>
                            <img src={profileImage} alt="" className={`${styles["profile-img"]} ${styles["mg-right"]}`} />
                            <div className="user-wrapper">
                                <div className={`${styles["user-data"]}`} >
                                    <h3 className={`${styles['user']} ${styles["mg-right"]} ${styles["bold"]}`}>{eachPost.userId?.userName}</h3>
                                    <p className={`${styles["date"]}`}></p>
                                </div>
                            </div>

                        </div>
                        {eachPost?.mediaUrl && <div className={` ${styles["post-data"]}`}>
                            {getIsImageFormat(eachPost?.mediaUrl) ? <img src={`${API_URL}/${eachPost?.mediaUrl}`} alt="" className={`${styles["post-img"]}`} /> : <video controls src={`${API_URL}/${eachPost?.mediaUrl}`} className={`${styles["post-img"]}`} />}
                        </div>}
                        {(eachPost?.mediaUrl && eachPost?.text) && <div className={`${styles["metadata"]}`}>
                            <div className={`${styles["icon-container"]} d-flex justify-content-between`}>
                                <div>
                                    <p>{eachPost?.text}</p>
                                </div>
                            </div>
                        </div>}
                        {/* Only Text */}
                        {(!eachPost?.mediaUrl && eachPost?.text) && <div>
                            <div>
                                <p className={styles['only-text-content']}>{eachPost?.text}</p>
                            </div>
                        </div>}

                        <div className={`d-flex justify-content-between ${!eachPost?.text ? 'pt-2' : ''}`}>
                            <div>
                                <p className={`${styles["menu-date"]}`}>{eachPost?.createdDate ? (new Date(eachPost.createdDate)).toDateString() : null}</p>
                            </div>
                            <div className='d-flex justify-content-end'>
                                {/* <div className='me-3'>
                                    <i className={`fa fa-share-square ${styles["icon-size"]}`} aria-hidden="true"></i>
                                </div> */}
                                <div className='me-3'>
                                    <i className={`fa fa-pencil-square ${styles["icon-size"]}`} aria-hidden="true" onClick={() => navigate(`/create/${eachPost._id}`)}></i>
                                </div>
                                <div className='me-3'>
                                    <i className={`fa fa-trash ${styles["icon-size"]}`} aria-hidden="true"
                                        onClick={() => deleteBeforeConfirmation(eachPost)}></i>
                                </div>

                            </div>
                        </div>
                    </div>
                })
                    : <div className={'d-flex align-items-center flex-column pt-4'}>
                        <div>
                            <img src={noPost} height={300} width={400} />
                        </div>
                        <div>
                            <Link to={'/create'}>Create Here</Link>
                        </div>
                    </div>}
                <div>
                    <ConfirmationModal show={modalShow} handleClose={() => setModalShow(false)} handleSubmit={() => deleteAfterConfirmation()} title="Delete Post">
                        <p>Are you sure you want to delete this post?</p>
                    </ConfirmationModal>
                </div>
            </div>
        </>



    )
}

export default MyProfilePage