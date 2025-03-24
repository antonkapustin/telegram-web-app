import { App } from './components/app.js';

const tg = window.Telegram.WebApp;

tg.ready();
const appElement = document.getElementById('app');
new App(appElement);