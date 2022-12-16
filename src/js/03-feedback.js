const form = document.querySelector('.feedback-form');
form.addEventListener("submit", onSubmit);
const obj = {};

function onSubmit(evt) {
    // evt.preventDefault();
    const { email, message } = evt.currentTarget;

    // email.value = "efffe";
    // console.dir(email.value);
    // console.log(message.value);

    obj.email = email.value;
    obj.message = message.value;
    // console.log(obj);
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}


// console.log(obj);

// console.dir(form.children[0].tex);
