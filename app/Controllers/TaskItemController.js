import { ProxyState } from "../AppState.js";
import { taskItemService } from "../Services/TaskItemService.js";
import { Pop } from "../Utils/Pop.js";


function _drawTaskCard() {
    let template = ''
    ProxyState.taskCards.forEach(c => template += c.Template);
    document.getElementById('card-template').innerHTML = template;
    console.log(ProxyState.taskItems);

}

export class TaskItemController {
    constructor() {
        ProxyState.on('taskItems', _drawTaskCard)
        console.log("TaskItemController Loaded");
    }

    createTaskItem(cardId) {
        window.event.preventDefault()
        let form = window.event.target

        let newTaskItem = {
            cardId,
            text: form.name.value
        }
        _drawTaskCard()
        console.log("[TaskItemController]: createTaskItem", newTaskItem)
        taskItemService.createTaskItem(newTaskItem)
    }
    async deleteTaskItem(id) {
        if (await Pop.confirm()) {
            taskItemService.deleteTaskItem(id)
            ProxyState.taskItems.splice(i => i.id == id)
        }
        _drawTaskCard()
    }

    setIsDone(id) {
        let foundTask = ProxyState.taskItems.find(i => i.id == id)
        if (foundTask.isDone == false) {
            foundTask.isDone = true
        } else {
            foundTask.isDone = false
        }
    }
}