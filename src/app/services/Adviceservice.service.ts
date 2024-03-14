
import { Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AdviceInterface } from "../models/AdviceModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class AdviceService {

    private apiurl = environment.Apiurl
    
    constructor(private httpClient : HttpClient) {}

    getAdviceFromAPI() : Observable<AdviceInterface> {
        return this.httpClient.get<AdviceInterface>(this.apiurl)
    }

}