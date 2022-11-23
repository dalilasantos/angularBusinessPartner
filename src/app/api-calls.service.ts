import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  private listUrl = 'http://localhost:8080/businessPartners'
  //https://637283b2348e947299f77e08.mockapi.io/b1s/v2/BusinessPartners
  //só o avatar vai funcionar porque minha model no java foi feita com tudo em minúsculo.

  constructor(private http: HttpClient) { }

  public pegaLista() {
    return this.http.get<any>(this.listUrl)
  }

  public deleteItemDaLista(id: number) {
    return this.http.delete<any>(this.listUrl + "/" + id);
  }

  public atualizaItemDaLista(id: number, cardName: string) {
    return this.http.put<any>(this.listUrl + "/" + id, {
      cardName: cardName
    });
  }
}
