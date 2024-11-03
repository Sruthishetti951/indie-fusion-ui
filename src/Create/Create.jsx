import { useEffect, useRef, useState } from 'react';
import styles from './Create.module.css'
import axios from 'axios';
import { API_URL } from '../appConfig';
import { useNavigate, useParams } from 'react-router-dom';
import { getIsImageFormat, openToast } from '../Utils/utils';


function Create() {
    const params = useParams();
    const defaultFormState = {
        "text": "",
        media: "",
        "type": "SELF"
    }
    const [formState, setFormState] = useState(defaultFormState);
    const [isImage, setIsImage] = useState(true);

    const navigate = useNavigate();

    const inputReference = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [blobPost, setBlobPost] = useState('');
    const [ispreview, setIsPreview] = useState(false);

    useEffect(() => {
        if (params.postId) {
            getPostDetailsByID();
        } else {
            setIsPreview(false);
            setFormState(defaultFormState)
        }
    }, [params?.postId]);

    const getPostDetailsByID = () => {
        const userId = localStorage.getItem('USER_ID');
        axios.get(`${API_URL}/post/${userId}/${params?.postId}`).then((res) => {
            if (res.data?.data) {
                const responseData = res.data.data;
                console.log(responseData);
                setFormState({
                    text: responseData.text,
                });
                setIsPreview(true);
                if (responseData?.mediaUrl) {
                    setBlobPost(`${API_URL}/${responseData.mediaUrl}`);
                }
            } else {
                openToast("Not able to fetch the data now... Try again later... ");
            }
        }).catch((e) => {
            openToast("Something went wrong... Please try again");
        })
    }

    const onPostImage = (event) => {
        if (event?.target?.files?.[0]) {
            const file = event.target.files[0];
            setIsImage(getIsImageFormat(file.name))
            setBlobPost(URL.createObjectURL(file));
            setFormState({ ...formState, media: file });
            setIsPreview(true);
        }
    }

    const onImagecLick = () => {
        inputReference.current.click();
    }

    const profileHandler = async () => {
        if (params.postId) {
            updatePost();
        } else {
            createPost()
        }
    }

    const createPost = async () => {
        const userID = localStorage.getItem('USER_ID');
        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}/post/${userID}`, formState, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (response.data.data) {
                setIsLoading(false);
                openToast("Post Created successfully!", false);
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else {
                setIsLoading(false);
                openToast("Unable to create ... Please try again");
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        } catch (e) {
            setIsLoading(false);
            openToast("Something went wrong..Please try again..!");
        }

    }

    const updatePost = async () => {
        const userID = localStorage.getItem('USER_ID');
        setIsLoading(true);
        try {
            const response = await axios.put(`${API_URL}/post/${userID}/${params.postId}`, formState, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (response.data.data) {
                setIsLoading(false);
                openToast("Post Updated successfully!", false);
            } else {
                setIsLoading(false);
                openToast("Unable to Update ... Please try again");
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        } catch (e) {
            setIsLoading(false);
            openToast("Something went wrong..Please try again..!");
        }

    }


    return (
        <div className={styles["createPostCard"]}>
            <div className={`card p-3 styles["post-height"]`}>
                <div>
                    <label htmlFor="text" >{params.postId ? "Update" : "Create"}</label>
                </div>
                <div>
                    <div className={`mb-3`}>
                        <div className="form-floating">
                            <textarea style={{height: '100px'}} className="form-control" placeholder="Type Here...." id="floatingTextarea" rows={5} value={formState.text} onChange={(event) => setFormState({ ...formState, text: event.target.value })}></textarea>
                            <label htmlFor="floatingTextarea">Status</label>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center align-items-center ${styles["image-upload"]} ${(!params.id && !ispreview) ? styles['withBackground'] : ''}`}>

                        {!ispreview ?
                            <>
                                <input type="file" id="media" hidden htmlFor="media" ref={inputReference} onChange={(event) => onPostImage(event)} accept=".mp4, .mov, .png, .jpeg, .jpg, .svg, .webp" />
                                <div>
                                    <i className={`fa fa-upload ${styles["icon"]}`} aria-hidden="true" onClick={() => onImagecLick()}></i>
                                </div>
                            </> :
                            <div className="d-flex justify-content-center">
                                {
                                    isImage ? <img src={blobPost} alt="postImage" /> : <video src={blobPost} controls />
                                }
                            </div>}
                    </div>
                    <div className={'d-flex justify-content-center pt-3'}>
                        <button className={'btn btn-primary'} onClick={profileHandler} disabled={isLoading}>{params.postId ? "Update" : "Create"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;