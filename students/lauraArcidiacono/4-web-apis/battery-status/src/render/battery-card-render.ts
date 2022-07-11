import { BatteryManagerInfo } from "../battery/battery-model";
import { IRender } from "./render.model";

export class BatteryCardRender implements IRender {

    private batteryFraction: HTMLDivElement;
    private batteryBody: HTMLElement;
    private status: HTMLElement;
    private level: HTMLElement;
    private chargerIcon: HTMLElement;

    constructor() {
        this.batteryFraction = document.createElement('div');
        this.batteryFraction.setAttribute('id', `percentage`)

        this.batteryBody = document.getElementById('top_bodyBattery')!;
        this.batteryBody.appendChild(this.batteryFraction);

        this.chargerIcon = document.getElementById('batteryCard_icon')!;

        this.status = document.getElementById('botom_batteryStatus')!;

        this.level = document.getElementById('botom_batteryLevel')!;
    }

    renderBattery(batteryManagerInfo: BatteryManagerInfo){
        const currentLevel = batteryManagerInfo.level;
        const multipliedCurrentLevel = currentLevel * 100;

        this.status.textContent = currentLevel > 0.2 ? 'Battery Ok' : 'Low Battery';
        this.status.style.color = currentLevel > 0.2 ? '#22c23d' : '#c2222c';
        this.level.textContent = `${(multipliedCurrentLevel).toFixed()}%`;
        this.batteryFraction.style.height = `${multipliedCurrentLevel}%`;
        this.chargerIcon!.textContent = (multipliedCurrentLevel) >= 15 ? '⚡' :  '⚠️';
    };
};