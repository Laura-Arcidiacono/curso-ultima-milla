import { Subject, Subscription } from 'rxjs';
import { BatteryManagerInfo } from './battery-model';
import { IRender } from '../render/render.model';

export class BatteryListener {

    private battery$: Subject<BatteryManagerInfo>; //The Subject it's going to emit the level of the battery

    constructor(){
        this.battery$ = new Subject<BatteryManagerInfo>()
            navigator.getBattery().then(battery => {
                this.battery$.next(battery); // The Subject take the battery status from the navigator.getBattery(), and emit it to the subscribers.

                const baterryEvent = () => this.battery$.next(battery);

                battery.onlevelchange = baterryEvent;
                battery.onchargingchange = baterryEvent;
                // battery.onchargingtimechange = baterryEvent;
                // battery.ondischargingtimechange = baterryEvent;
            });
    }

    renderSubscribe(render: IRender): Subscription {
        return this.battery$.subscribe(battery => render.renderBattery(battery));
    }

};