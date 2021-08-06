import { Component, OnInit } from '@angular/core';

import { PartidoService } from '../../services/partido.service';
import {Partido} from '../../models/partido';

@Component({
  selector: 'app-listpartido',
  templateUrl: './listpartido.component.html',
  styleUrls: ['./listpartido.component.css']
})
export class ListpartidoComponent implements OnInit {
  public partidos: Partido[] = [];
  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
    this.traerPartidos();
  }

  traerPartidos() {
    this.partidoService.traerPartido().subscribe((partido: Partido[]) => {
      this.partidos = partido;
    })
  }
}
