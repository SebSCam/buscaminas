import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent{
    title = "Calculator";
    numberA!: number;
    numberB!: number;
    operation!: string;
    result: any;

    constructor(private http: HttpClient) { }

    solve() {    
      
      let body = {
        "numberA":this.numberA,
        "numberB":this.numberB,
        "operation":this.operation
      }
        // Simple POST request with a JSON body and response type <any>
        this.result = this.http.post(environment.endpointUrl, body)
    }
}