import { BatteryManagerInfo } from "../battery/battery-model";
import { IRender } from "./render.model";

export class HTMLRender implements IRender{

   private CONTAINER_CLASS = 'battery_container';
   private container: HTMLElement;

   constructor(){
      this.container = document.createElement('section');
      this.container.classList.add(this.CONTAINER_CLASS);
      document.body.appendChild(this.container);
   }

   renderBattery(batteryManagerInfo: BatteryManagerInfo){
      this.clearMethod();
      const parrafo = document.createElement('p');
      parrafo.textContent = batteryManagerInfo.charging.toString();
      this.container.appendChild(parrafo);
   };

   private clearMethod(){
      this.container.innerHTML = '';
   }

};