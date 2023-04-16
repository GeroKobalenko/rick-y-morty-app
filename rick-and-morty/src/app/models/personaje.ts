import { DatoRegion } from './dato-region';

export class Personaje {
  id: number = -1;
  name: string = "";
  status: string = "";
  species: string = "";
  type: string = "";
  gender: string = "";
  origin: DatoRegion = new DatoRegion();
  location: DatoRegion = new DatoRegion();
  image: string = "";
  episode: string[] = [];
  url: string = "";
  created: string = "";

  constructor(params?: any) {
    if (!params) return;
    this.id = params.id;
    this.name = params.name;
    this.status = params.status;
    this.species = params.species;
    this.type = params.type;
    this.gender = params.gender;
    this.origin = params.origin;
    this.location = params.location;
    this.image = params.image;
    this.episode = params.episode;
    this.url = params.url;
    this.created = params.created;
  }
}
