import {Component} from '@angular/core';
import { IViagem } from '../../../models/IViagem';
import { MotoristaService } from '../../../services/motorista.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  // @Input() list : any;
  id: any;
  listaViagem: any;

  constructor(private motoristaService: MotoristaService) {
    this.obterListaMotorista();
  }


  obterListaMotorista() {
    this.listaViagem = this.motoristaService.obterTodos();
  }

  CadastrarViagem() {

    var viagem: IViagem = {
      dataSaida: 102030,
      dataRetorno: 102030,
      horaSaida: 102030,
      horaRetorno: 102030,
      motorista: 'Motorista',
      destino: 'SantosSSS',
      kmSaida: 1000,
      kmChegada: 1100,
      veiculo: 'Up'
    };

    this.motoristaService.cadastrar(viagem);
  }

  ObterPorId() {
    alert(this.id);
  }
  Excluir() {
  }

  ngoninit(): void {

  }
}
