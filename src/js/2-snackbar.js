import iziToast from "izitoast"
const form = document.querySelector(".form")
const delayInput = document.querySelector("input[name=delay]")
const fulfilledRadio = document.querySelector("input[value=fulfilled]")
const rejectedRadio = document.querySelector("input[value=rejected]")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = parseInt(delayInput.value);
    delayInput.value = ""
    const getPromise = new Promise((res, rej) => {
        setTimeout(() => {
            if (fulfilledRadio.checked) {
                res(delay);
            } else if (rejectedRadio.checked) {
                rej(delay);
            }
        }, delay)
    });

    getPromise.then((delay) => {
            butterup.toast({
                title: "Success",
                type: "success",
                message: `✅ Fulfilled promise in ${delay}ms`
            });    
    })
        .catch((delay) => {
            butterup.toast({
                title: "Error",
                type: "error",
                message: `❌ Rejected promise in ${delay}ms`
           })
        });
});
