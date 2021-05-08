import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { CenterResponse } from "../models/response";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  centers(): Observable<CenterResponse> {
    return this.http.get<CenterResponse>(`api/centers`);
  }
}
