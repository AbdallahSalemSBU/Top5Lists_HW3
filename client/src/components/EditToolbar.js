import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();

    let editStatus = false;
    if (store.isListNameEditActive) {
        editStatus = true;
    }
    //console.log(store.jsTPS.hasTransactionToUndo());

    let enabledButtonClass = editStatus? "top5-button-disabled" : "top5-button";
    enabledButtonClass = !store.currentList? "top5-button-disabled" : "top5-button";
    let enabledRedoButtonClass = !store.hasTransactionToRedo()? "top5-button-disabled" : enabledButtonClass;
    let enabledUndoButtonClass = !store.hasTransactionToUndo()? "top5-button-disabled" : enabledButtonClass;
    
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    let toolbar = 
        <div id="edit-toolbar">
                <div
                    //disabled={editStatus}
                    id='undo-button'
                    onClick={handleUndo}
                    className={enabledUndoButtonClass}>
                    &#x21B6;
                </div>
                <div
                    //disabled={editStatus}
                    id='redo-button'
                    onClick={handleRedo}
                    className={enabledRedoButtonClass}>
                    &#x21B7;
                </div>
                <div
                    //disabled={editStatus}
                    id='close-button'
                    onClick={handleClose}
                    className={enabledButtonClass}>
                    &#x24E7;
                </div>
        </div>;

    /*if(editStatus) {
        let button = document.getElementById('undo-button');
        button.classList.replace("top5-button", "top5-button-disabled");
        button = document.getElementById('redo-button');
        button.classList.replace("top5-button", "top5-button-disabled");
        button = document.getElementById('close-button');
        button.classList.replace("top5-button", "top5-button-disabled");
    }
    let button = document.getElementById('undo-button');
    if(!editStatus && button) {
        let button = document.getElementById('undo-button');
        button.classList.replace("top5-button-disabled", "top5-button");
        button = document.getElementById('redo-button');
        button.classList.replace("top5-button-disabled", "top5-button");
        button = document.getElementById('close-button');
        button.classList.replace("top5-button-disabled", "top5-button");
    }*/
    return (
        toolbar
    )
}

export default EditToolbar;