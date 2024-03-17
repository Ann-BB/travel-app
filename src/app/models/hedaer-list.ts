export interface HedaerList {
  title: string;
  section: ISections | ISection;
}

export interface ISections {
  [name: string]: string[];
}

export interface ISection {
  imgUrl: string;
  title: string
}