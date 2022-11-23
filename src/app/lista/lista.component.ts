import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public data: any;
  constructor(private apiCallsService: ApiCallsService) {}

  ngOnInit() {
    this.apiCallsService.pegaLista()
      .subscribe((lista: any) => {
        this.data = lista.map((item: any) => {
          return {
            ...item
          }
        })
      })
  }

  public deletaBusinessPartner(cardCode: number) {
    this.apiCallsService.deleteItemDaLista(cardCode).subscribe({
      next: data => {
        console.log('Deletado com sucesso!');
        location.reload();
      },
      error: error => {
          console.error('Teve um erro!', error);
      }
    });
  }

  public editaCardNameBusinessPartner(cardCode: number, cardName: string) {
    this.apiCallsService.atualizaItemDaLista(cardCode, cardName).subscribe({
      next: data => {
        console.log('Atualizado com sucesso');
        location.reload();
      },
      error: error => {
          console.error('Teve um erro!', error);
      }
    });
  }
}
