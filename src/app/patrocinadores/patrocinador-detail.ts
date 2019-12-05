import { Patrocinador } from './patrocinador';
import {Hackaton} from '../hackaton/hackaton';
export class PatrocinadorDetail extends Patrocinador{
  descripcion: string;
  ubicacion: string;
  infoAdicional: string;
  hackatones: Hackaton[];
}