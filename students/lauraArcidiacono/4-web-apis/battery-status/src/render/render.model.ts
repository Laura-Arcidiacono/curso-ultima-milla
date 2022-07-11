import { BatteryManagerInfo } from "../battery/battery-model";

export interface IRender {
    renderBattery: (b: BatteryManagerInfo) => void;
}