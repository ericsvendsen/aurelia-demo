import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class DataService {
    constructor(httpClient) {
        this.http = httpClient;
    }

    getChargecodes() {
        return this.http.get('/api/chargecodes').then(response => response.content);
    }

    getTimelogs() {
        return this.http.get('/api/timelogs').then(response => response.content);
    }

}