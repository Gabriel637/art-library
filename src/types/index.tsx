export interface IArt {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
}

export interface IArtist {
  id: number;
  name: string;
  full_name: string;
  birthplace: string;
  birthdate: string;
  image: string;
  color?: string;
  highlight?: string;
  description: string;
  arts: IArt[];
}
