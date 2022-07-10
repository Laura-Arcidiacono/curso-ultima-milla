export type BatteryManagerInfo = {
    charging: Readonly<boolean>;
    chargingTime: Readonly<number>;
    dischargingTime: Readonly<number>;
    level: Readonly<number>;
};

// BatteryManager contains all properties from BatteryManagerInfo and
// the private methods that will not be expoust
export type BatteryManager = BatteryManagerInfo & {
    onchargingchange: (event: Event) => void;
    onchargingtimechange: (event: Event) => void;
    ondischargingtimechange: (event: Event) => void;
    onlevelchange: (event: Event) => void;
}