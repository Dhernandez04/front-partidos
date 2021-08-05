import { Component, OnInit } from '@angular/core';

import { PartidoService } from '../../services/partido.service';
import {partido} from '../../models/partido'

@Component({
  selector: 'app-listpartido',
  templateUrl: './listpartido.component.html',
  styleUrls: ['./listpartido.component.css']
})
export class ListpartidoComponent implements OnInit {
  public partidos: partido[] = [];
  constructor(private partidoService: PartidoService) { }

  ngOnInit(): void {
  }

  traerPartidos() {
    this.partidoService.traerPartido().subscribe((partido: partido[]) => {
      this.partidos = partido;
    })
  }
}
