import { App } from './components/app.js';

window.Telegram.WebApp.ready();
const appElement = document.getElementById('app');
const app = new App(appElement);