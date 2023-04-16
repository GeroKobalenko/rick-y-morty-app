export class DatoRegion {

  name: string = '';
  url: string ='';

  constructor(params?: any) {
    if (!params) return;
    this.name = params.name;
    this.url = params.url;
  }
}
