/**
 * Created by fukagawa on 2015/04/13.
 */

function f_dragstart(event){
    event.dataTransfer.setData("text", event.target.id);
}

function f_dragover(event){
    event.preventDefault();
}

function f_drop(event){
    var id_name = event.dataTransfer.getData("text");
    alert(id_name);
    event.preventDefault();
}