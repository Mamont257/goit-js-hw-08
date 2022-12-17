import Throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
// form.addEventListener("input", new Throttle(onInput, 1000));
const obj = {};

console.log(localStorage.getItem("feedback-form-state"));




if (!localStorage.getItem("feedback-form-state")) {
    form.addEventListener("input", new Throttle(onInput, 1000));
};


function onInput(evt) {
    // evt.preventDefault();
    // console.dir(evt.target.value.trim());
    if (evt.target.name === "email") {
        obj.email = evt.target.value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(obj))
    } else {
        obj.message = evt.target.value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(obj))
    }
    // console.log(obj);
    // console.log(localStorage.getItem("feedback-form-state"));
};























// function onSubmit(evt) {
//     // evt.preventDefault();
//     const { email, message } = evt.currentTarget;

//     // email.value = "efffe";
//     // console.dir(email.value);
//     // console.log(message.value);

//     obj.email = email.value;
//     obj.message = message.value;
//     // console.log(obj);
//     localStorage.setItem("feedback-form-state", JSON.stringify(obj));
// }


// console.log(obj);

// console.dir(form.children[0].tex);








// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.