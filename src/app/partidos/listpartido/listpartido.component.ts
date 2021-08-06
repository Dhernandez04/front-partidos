import { Component, OnInit } from '@angular/core';

import { PartidoService } from '../../services/partido.service';
import {Partido} from '../../models/Partido';

@Component({
  selector: 'app-listpartido',
  templateUrl: './listpartido.component.html',
  styleUrls: ['./listpartido.component.css']
})
export class ListpartidoComponent implements OnInit {
  public partidos: Partido[] = [];
  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
  }

  traerPartidos() {
    this.partidoService.traerPartido().subscribe((partido: any) => {
      this.partidos = partido.partido;
      console.log(this.partidos);
      
    })
  }
}
