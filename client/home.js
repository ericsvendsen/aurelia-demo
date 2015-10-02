import {inject} from 'aurelia-framework';
import {DataService} from './dataService';

@inject(DataService)
export class App {
    constructor(dataService) {
        this.dataService = dataService;
        this.chargeCodes = [];
    }

    activate() {
        return this.dataService.getChargecodes()
            .then(chargeCodes => this.chargeCodes = chargeCodes);
    }
}