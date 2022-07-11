import { BatteryListener } from './battery/battery-listener';
import { IRender } from './render/render.model';
import { HTMLRender } from './render/html-render';
import { ConsoleRender } from './render/console-render';
import "./style.css";
import { BatteryCardRender } from './render/battery-card-render';

const bateryListener$ = new BatteryListener();

// const htmlRender: IRender = new HTMLRender();
// const consoleRender: IRender = new ConsoleRender();

const batteryCardRender: IRender = new BatteryCardRender()

// bateryListener$.renderSubscribe(htmlRender);
// bateryListener$.renderSubscribe(consoleRender);

bateryListener$.renderSubscribe(batteryCardRender);