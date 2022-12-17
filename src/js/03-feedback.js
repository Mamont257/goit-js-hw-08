import Throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener("submit", onSubmit);
const obj = {};

const { email, message } = form.elements;

const memory = localStorage.getItem("feedback-form-state");

if (!memory) {
    form.addEventListener("input", new Throttle(onInput, 500));
} else {
    const currentValue = JSON.parse(memory);
    email.value = currentValue.email;
    message.value = currentValue.message;
}

function onInput(evt) {
    if (evt.target.name === "email") {
        obj.email = evt.target.value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(obj))
    } else {
        obj.message = evt.target.value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(obj))
    }
};

function onSubmit(evt) {
    evt.preventDefault();

    const user = localStorage.getItem("feedback-form-state");
    console.log(JSON.parse(user));

    localStorage.clear();
    evt.currentTarget.reset()
};







// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.