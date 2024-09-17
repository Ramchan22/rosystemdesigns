import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";
import { RenderEnvironment } from "../../environments/render-environment";

@Injectable({ providedIn: 'root' })
export class RoService {

    constructor(
        private http: HttpClient,
        private commonService: CommonService,
    ) { }

    baseURL = RenderEnvironment.baseURL;

    addServiceDetails(data: any): Observable<any> {
        const url = this.baseURL.concat('serviceDetails/addServiceDetails');
        let header = this.commonService.getTransferIp();
        return this.http.post(url, data, { headers: header });
    }

    lasySearch(data: any): Observable<any> {
        const url = this.baseURL.concat('serviceDetails/lazySearch');
        let header = this.commonService.getTransferIp();
        return this.http.post(url, data, { headers: header });
    }

}