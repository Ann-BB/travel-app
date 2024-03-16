export interface HedaerList {
  title: string;
  section: string[] | ISection;
}

export interface ISections {
  [name: string]: string[];
}

export interface ISection {
  imgUrl: string;
  title: string
}