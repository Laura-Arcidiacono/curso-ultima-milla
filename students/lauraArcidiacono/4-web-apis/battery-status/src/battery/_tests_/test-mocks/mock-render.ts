import { IRender } from "../../../render/render.model";
import { BatteryManagerInfo } from "../../battery-model";

export class MockRender implements IRender {
    renderBattery(batteryManagerInfo: BatteryManagerInfo){};
};