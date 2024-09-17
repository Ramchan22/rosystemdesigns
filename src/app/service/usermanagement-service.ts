import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonService } from "./common-service";
import { RenderEnvironment } from "../../environments/render-environment";

@Injectable({ providedIn: 'root' })
export class UserManagementService {

    constructor(private http: HttpClient,
        private commonService: CommonService
    ) { }

    baseURL = RenderEnvironment.baseURL;

    login(data: any): Observable<any> {
        const url = this.baseURL.concat('user/login');
        return this.http.post(url, data, { observe: 'response' });
    }

    logout(): Observable<any> {
        const url = this.baseURL.concat('user/logout');

        let header = this.commonService.getTransferIp();

        return this.http.get(url, { headers: header });
    }

    getAllUserDetail(): Observable<any> {
        const url = this.baseURL.concat('user/getAllUser');

        let header = this.commonService.getTransferIp();

        return this.http.get(url, { headers: header });
    }

}