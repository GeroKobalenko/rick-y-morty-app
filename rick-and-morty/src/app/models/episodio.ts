export class Episodio {

  id: number = -1;
  name: string = "";
  air_date: string= "";
  episode: string= "";
  characters: string[] = [];
  url: string = "";
  created: string = "";

  constructor(params?: any) {
    if (!params) return;
    this.id = params.id;
    this.name = params.name;
    this.air_date = params.air_date;
    this.episode = params.episode;
    this.characters = params.characters;
    this.url = params.url;
    this.created = params.created;
  }
}
