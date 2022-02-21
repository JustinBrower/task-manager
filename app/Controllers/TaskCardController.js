import { ProxyState } from "../AppState.js";
import { taskCardService } from "../Services/TaskCardService.js";
import { saveState, loadState } from "../Utils/localStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawTaskCard() {
    let template = ''
    ProxyState.taskCards.forEach(c => template += c.Template);
    document.getElementById('card-template').innerHTML = template;
}

function _drawTaskCount() {
    let totalCount = ProxyState.taskItems.length
    let doneItems = ProxyState.taskItems.filter(i => i.isDone == true)
    let doneCount = doneItems.length
    let template = `To Do: ${doneCount}/${totalCount}`
    document.getElementById('taskCount').innerHTML = template;
}

export class TaskCardController {
    constructor() {
        console.log("TaskCardController Loaded");
        ProxyState.on('taskCards', _drawTaskCard)
        ProxyState.on('taskItems', _drawTaskCard)
        ProxyState.on('taskItems', _drawTaskCount)
        ProxyState.on('taskCards', saveState)
        ProxyState.on('taskItems', saveState)
        loadState()
    }

    createTaskCard() {
        window.event.preventDefault()
        let form = window.event.target
        console.log("creating Task Card");
        let newTaskCard = {
            title: form.title.value,
            color: form.color.value
        }
        taskCardService.createTaskCard(newTaskCard)
    }
    async deleteTaskCard(id) {
        if (await Pop.confirm()) {
            taskCardService.deleteTaskCard(id)
        }
    }
}
