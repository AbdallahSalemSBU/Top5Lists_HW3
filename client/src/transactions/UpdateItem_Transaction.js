import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * UpdateItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
    
    @author Abdallah Salem
 */
export default class UpdateItem_Transaction extends jsTPS_Transaction {
    constructor(initStore, index, newName, oldName) {
        super();
        this.store = initStore;
        this.index = index;
        this.newName = newName;
        this.oldName = oldName;
    }

    doTransaction() {
        this.store.updateItem(this.index, this.newName);
    }
    
    undoTransaction() {
        this.store.updateItem(this.index, this.oldName);
    }
}