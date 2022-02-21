import { generateId } from "../Utils/generateId.js";

export class TaskItem {
    constructor(data) {
        this.id = generateId()
        this.isDone = data.isDone || false
        this.text = data.text
        this.cardId = data.cardId
    }

    get Template() {
        return `<li class="list-group-item d-flex justify-content-between align-items-center mb-2">${this.text}
                    <div class="justify-content-end">
                    <input minlength="3" maxlength="15" class="justify-content-end form-check-input me-2" type="checkbox" onclick="app.taskItemController.setIsDone('${this.id}')" value="" aria-label="..." />
                    <button class="btn btn-danger" title="Delete ${this.id}" onclick="app.taskItemController.deleteTaskItem('${this.id}')">Delete</button></div></li>`
    }




}
