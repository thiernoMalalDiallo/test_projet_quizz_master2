"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    // send a random number to be used
    static getRandom(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
    }
    //delete a element in a array
    static deleteElement(array, id_friend) {
        var position = 0;
        var i;
        for (i = 0; i < array.length; i++) {
            if (array[i] = id_friend) {
                position = i;
                break;
            }
        }
        //i = position à partir de la quelle on supprime, 1 = nbre d'éléments à supprimer
        var elementsSupprimes = array.splice(i, 1);
        return array;
    }
}
exports.Util = Util;
//# sourceMappingURL=Utils.js.map