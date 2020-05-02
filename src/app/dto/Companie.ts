import { Meassure } from './Meassure';

export class Companie {
    companieId: string = "";
    userId: string = "";
    name: string = "";
    owner: string = "";
    representant: string = "";
    phone: string = "";
    fax: string = "";
    email: string = "";
    regNumber: string = "";
    nif: string = "";
    meassures: Meassure[] = [];
}