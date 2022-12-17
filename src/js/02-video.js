import Vimeo from "@vimeo/player";
import Throttle from "lodash.throttle";
const currentTime = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const endTime = localStorage.getItem(currentTime);

player.on('timeupdate', new Throttle(onTimes, 1000));

function onTimes(data) {
    console.dir(data.seconds);
    localStorage.setItem(currentTime, data.seconds);
}

if(endTime){player.setCurrentTime(endTime)};
// console.log(endTime);





// 1. Ознайомся з документацією бібліотеки Vimeo плеєра.
// 2. Додай бібліотеку як залежність проекту через npm.
// 3. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// 4. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// 5. Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6. Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// 7. Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.