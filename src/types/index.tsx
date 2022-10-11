export interface IArt {
  name: string;
  url: string;
  image: string;
  description: string;
}

export interface IArtist {
  name: string;
  full_name: string;
  color?: string;
  birthplace: string;
  birthdate: string;
  image: string;
  highlight?: string;
  description: string;
  arts: IArt[];
}
