import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form")
const delayInput = document.querySelector("input[name=delay]")
const fulfilledRadio = document.querySelector("input[value=fulfilled]")
const rejectedRadio = document.querySelector("input[value=rejected]")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = parseInt(delayInput.value);
    const fulfilled = fulfilledRadio.checked
    const rejected = rejectedRadio.checked
    event.target.reset();
    const getPromise = new Promise((res, rej) => {
        setTimeout(() => {
            if (fulfilled) {
                res(delay);
            } else if (rejected) {
                rej(delay);
            }
        }, delay)
    });

    getPromise.then((delay) => {
        iziToast.success({
            timeout: 5000,
            title: "Success",
            message: `Fulfilled promise in ${delay}ms`,
            position: "topRight"
            });    
    })
        .catch((delay) => {
            iziToast.error({
                timeout: 5000,
                title: "Error",
                type: "error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight"
           })
        });
});
