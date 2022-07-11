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
        this.status.textContent = currentLevel < 0.6 ? `Battery Ok` : `Low Battery`;
        this.level.textContent = `${(currentLevel * 100).toFixed()}%`;
        this.batteryFraction.style.height = `${currentLevel * 100}%`;
        this.chargerIcon!.textContent = (currentLevel * 100) >= 15 ? '⚡' :  '⚠️';
    };
};