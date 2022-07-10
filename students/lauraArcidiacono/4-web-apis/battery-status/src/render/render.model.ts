import { BatteryManagerInfo } from "../battery/battery-model";

export interface IRender {
    renderBattery: (batteryManagerInfo: BatteryManagerInfo) => void;
}