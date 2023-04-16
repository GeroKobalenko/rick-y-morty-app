import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
})
export class HomePage implements OnInit {
  personajes: Personaje[] = [];
  parametros: any = {};

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.parametros.page = 0;
    this.getCaracteres();
  }

  public getCaracteres(event? : any) {
    this.parametros.page += 1;
    this.rickAndMortyService.getCaracteres(this.parametros).subscribe({
      next: (res: any) => {
        this.personajes.push(...res.results);
        console.log(this.personajes);
        
      },
      error: (error: any) => {
        console.error(error);
        this.personajes = [];
      },
      complete: () => {
        if (event) event.target.complete();
      }
    });
  }

  public buscarCaracteres() {
    this.parametros.page += 1;
    this.rickAndMortyService.getCaracteres(this.parametros).subscribe({
      next: (res: any) => {
        this.personajes = res.results;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
