import Cl_Padre from "./Cl_Padre.js";

export default class Cl_Hija extends Cl_Padre {

    constructor(atribA, atribB) {
        super(atribA);
        this.atribB = atribB;
    }

    set atribB(atribB) {
        this.atribB = atribB;
    }

    get atribB() {
        return this.atribB;
    }
}
