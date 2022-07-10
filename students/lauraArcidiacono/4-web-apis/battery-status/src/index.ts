import { BatteryListener } from './battery/battery-listener';
import { IRender } from './render/render.model';
import { HTMLRender } from './render/html-render';
import { ConsoleRender } from './render/console-render';


console.log('Hola');

const bateryListener$ = new BatteryListener();

const htmlRender: IRender = new HTMLRender();
const consoleRender: IRender = new ConsoleRender();

bateryListener$.renderSubscribe(htmlRender);
bateryListener$.renderSubscribe(consoleRender);
