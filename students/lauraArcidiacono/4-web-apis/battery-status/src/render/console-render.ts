import { BatteryManagerInfo } from "../battery/battery-model";
import { IRender } from "./render.model";

export class ConsoleRender implements IRender {

    renderBattery(batteryManagerInfo: BatteryManagerInfo){
        console.log('********************');
        console.log('-'.repeat(Math.floor(batteryManagerInfo.level*5)));
        console.log('********************');
        console.log(batteryManagerInfo.charging ? 'Battery on charging!!!' : 'Battery not charging');
    };

}