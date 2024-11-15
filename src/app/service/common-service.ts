import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CommonService {

    constructor(private http: HttpClient) { }

    getTransferIp() {
        return new HttpHeaders().set(
            "Authorization",
            localStorage.getItem("token") || ""
        );
    }

}