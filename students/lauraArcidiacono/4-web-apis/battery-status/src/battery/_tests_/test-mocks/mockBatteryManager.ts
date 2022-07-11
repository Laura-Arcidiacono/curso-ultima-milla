import { BatteryManager } from "../../battery-model";

export const MockBatteryManager: BatteryManager = {
    level: 0.55,
    charging: true,
    dischargingTime: 0,
    chargingTime: 0,
    onchargingchange: null,
    onchargingtimechange: null,
    ondischargingtimechange: null,
    onlevelchange: null,
}