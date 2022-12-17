import Throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener("submit", onSubmit);
form.addEventListener("input", new Throttle(onInput, 500));
let obj = { email: "", message: "" };
const formState = "feedback-form-state";

const { email, message } = form.elements;

const memory = localStorage.getItem(formState);

if (memory) {
    try {
        obj = JSON.parse(memory);
        email.value = obj.email;
        message.value = obj.message;
    } catch (e) {
        console.log(e.name);
    }
}

function onInput(evt) {
    obj[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(formState, JSON.stringify(obj))
};

function onSubmit(evt) {
    evt.preventDefault();

    const user = localStorage.getItem(formState);
    console.log(JSON.parse(user));

    localStorage.clear();
    evt.currentTarget.reset()
    obj = {email: "", message: ""};
};







// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.