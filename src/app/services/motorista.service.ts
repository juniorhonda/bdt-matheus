import { Injectable } from '@angular/core';
import { IViagem } from '../models/IViagem';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  constructor() {
    if (this.lstViagem.length == 0) {
      this.popularViagem();
    }

  }

  lstViagem: IViagem[] = [];

  obterTodos() {
    return this.lstViagem;
  }

  cadastrar(viagem: IViagem) {
    this.lstViagem.push(viagem);
  }

  atualizar(viagem: IViagem) {

  }

  obterPorId(id: number) {

  }

  excluirPorId(id: number) {

  }



  //DadosMocados
  popularViagem() {
    this.lstViagem = [{
      dataSaida: 102030,
      dataRetorno: 102030,
      horaSaida: 102030,
      horaRetorno: 102030,
      motorista: 'Motorista',
      destino: 'Santos',
      kmSaida: 1000,
      kmChegada: 1100,
      veiculo: 'Up'
    }, {
      dataSaida: 102030,
      dataRetorno: 102030,
      horaSaida: 102030,
      horaRetorno: 102030,
      motorista: 'Motorista',
      destino: 'Santos',
      kmSaida: 11000,
      kmChegada: 11110,
      veiculo: 'Van'
    }, {
      dataSaida: 102030,
      dataRetorno: 102030,
      horaSaida: 102030,
      horaRetorno: 102030,
      motorista: 'Motorista',
      destino: 'SP',
      kmSaida: 12000,
      kmChegada: 12500,
      veiculo: 'Uno'
    }, {
      dataSaida: 102030,
      dataRetorno: 102030,
      horaSaida: 102030,
      horaRetorno: 102030,
      motorista: 'Motorista',
      destino: 'Guarujá',
      kmSaida: 120,
      kmChegada: 130,
      veiculo: 'Palio'
    }, {
      dataSaida: 102030,
      dataRetorno: 102030,
      horaSaida: 102030,
      horaRetorno: 102030,
      motorista: 'Motorista',
      destino: 'Praia Grande',
      kmSaida: 8500,
      kmChegada: 9750,
      veiculo: 'Gol'
    }]
  }

}
