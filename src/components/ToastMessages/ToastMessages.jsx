import { toast } from 'react-toastify';

export const showInfo = (message) => toast(`${message}`, {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});

export const showSuccess = (message) => toast.success(`${message}`, {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});

export const showWarning = (message) => toast.warn(`${message}`, {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});

export const showError = (message) => toast.error(`${message}`, {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});