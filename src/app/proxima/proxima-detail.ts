import {Proxima} from './proxima';
import {Participante} from '../participante/participante';

export class ProximaDetail extends Proxima {
    inscritos: Participante[];
    listaDeEspera: Participante[];
}