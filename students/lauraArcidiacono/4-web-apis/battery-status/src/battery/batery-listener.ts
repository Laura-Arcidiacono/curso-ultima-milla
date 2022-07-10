import { Observable } from 'rxjs';
import { BatteryManagerInfo } from './battery-model';

export class BatteryListener {

    private battery$: Observable<BatteryManagerInfo>; //The observable it's going to emit the level of the battery

    constructor(){
        this.battery$ = new Observable<BatteryManagerInfo>(subscriber => {
            navigator.getBattery().then(battery => {
                subscriber.next(battery); // The obserbavle take the battery status from the navigator.getBattery(), and emit it to the subscribers.

                const baterryEvent = () => subscriber.next(battery);

                battery.onlevelchange = baterryEvent;
                battery.onchargingchange = baterryEvent;
                // battery.onlevelchange = () => console.log('Level has change');
                // battery.onlevelchange = () => console.log('Level has change');
            });
        });
    }

    getObservable() {
        return this.battery$;
    }

};