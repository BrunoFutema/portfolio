import ICreateTechDTO from './ICreateTechDTO';

export default interface ICreateSpotDTO {
  thumbnail: string;
  company: string;
  price: number;
  techs: ICreateTechDTO[];
  user_id: string;
}
