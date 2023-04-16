import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { Episodio } from 'src/app/models/episodio';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-detalle-caracter',
  templateUrl: './detalle-caracter.page.html',
  styleUrls: ['./detalle-caracter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
})
export class DetalleCaracterPage implements OnInit {
  idCaracter: string = '';
  personaje: Personaje | null = null;
  episodios: Episodio[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {}

  ngOnInit() {
    this.idCaracter = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ionViewWillEnter() {
    this.getCaracterById(this.idCaracter);
  }

  getCaracterById(id: string) {
    this.rickAndMortyService.getCaracterById(id).subscribe({
      next: (res: any) => {
        this.personaje = res;
        this.getEpisodios();
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  getEpisodios() {
    this.personaje?.episode.forEach((episodio: any) => {
      this.rickAndMortyService.getByUrl(episodio).subscribe({
        next: (res: any) => {
          this.episodios.push(res);
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    });
  }
}
