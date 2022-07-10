import { BatteryListener } from "../battery-listener";
import { MockRender } from "./test-mocks/mock-render";
import { MockBatteryManager } from "./test-mocks/mockBatteryManager";


navigator.getBattery = () => Promise.resolve(MockBatteryManager);

describe('BatteryListener', () => {
    const myRender = new MockRender();
    let batteryListener: BatteryListener;

    beforeEach(() => {
        batteryListener = new BatteryListener();
    });

    describe('When new subscriber', () => {
        it('Should return the battery info', () => {
            jest.spyOn(myRender, 'renderBattery').mockImplementation(batteryManagerInfo => {
                expect(batteryManagerInfo).toBeDefined();
            });
            batteryListener.renderSubscribe(myRender);
        });

        describe('And the battery level is 0.55', () => {
            it('Should return battery level = 0.55', () => {
                jest.spyOn(myRender, 'renderBattery').mockImplementation(batteryManagerInfo => {
                    expect(batteryManagerInfo.level).toBe(0.55);
                });
                batteryListener.renderSubscribe(myRender);
            });
        });
    });

    describe('Given a subscriber', () => {
        describe('When unplug the charger', () => {
            it('Charging should be false', () => {
                jest.spyOn(myRender, 'renderBattery').mockImplementation(batteryManagerInfo => {
                    expect(batteryManagerInfo.charging).toBe(false);
                });
                batteryListener.renderSubscribe(myRender);
                MockBatteryManager.charging = false;
                MockBatteryManager.onchargingchange?.(new Event('charginchange'));
            });
        });
    });
});