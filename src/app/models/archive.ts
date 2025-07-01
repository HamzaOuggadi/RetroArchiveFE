export interface Archive {
  filename : string;
  location : string;
  category : 'GAME' | 'SOFTWARE' | 'EDUCATION' | 'EDUTAINMENT';
  uploadDate : Date;
  author : string;
  articleTitle : string
  downloads : number;
}
