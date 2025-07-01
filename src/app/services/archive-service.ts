import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Archive} from '../models/archive';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private httpClient : HttpClient) { }

  public getArchiveList() : Observable<Array<Archive>> {
    return this.httpClient.get<Array<Archive>>("http://localhost:9090/api/v1/files/data")
  }

}
