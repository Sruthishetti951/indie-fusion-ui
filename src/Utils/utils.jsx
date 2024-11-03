import { Bounce, toast } from "react-toastify";

export const VIDEO_FORMATS = ['mp4', 'mov'];

export const getIsImageFormat = (fileName) => {
    const spilltedFileName = fileName?.split('.');
    const fileFormat = spilltedFileName[spilltedFileName.length - 1];
    return !VIDEO_FORMATS.includes(fileFormat?.toLowerCase());
}


export const openToast = (message, isError = true) => {
    toast[isError ? 'error' : 'success'](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
}