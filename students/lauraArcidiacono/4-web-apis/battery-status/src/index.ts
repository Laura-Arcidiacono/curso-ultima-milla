import { BatteryListener } from './battery/batery-listener';

console.log('Hola');

const bateryListener$ = new BatteryListener();
bateryListener$.getObservable().subscribe(console.log);