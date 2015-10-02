import {inject} from 'aurelia-framework';
import {DataService} from './dataService';

@inject(DataService)
export class Timelog {
    constructor(dataService) {
        this.dataService = dataService;
        this.timeLogs = [];
    }

    activate() {
        return this.dataService.getTimelogs()
            .then(timeLogs => this.timeLogs = timeLogs);
    }
}