import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";


export class TaskCard {
  constructor(data) {
    this.cardId = generateId()
    this.title = data.title
    this.color = data.color
  }


  get Template() {
    return `
    <div class="col-4 card mt-5">
            <div class="card-body" style="background-color: ${this.color}">
            <h5 class="mb-2">${this.title}</h5>
            <button class="btn btn-danger ms-2" onclick="app.taskCardController.deleteTaskCard('${this.cardId}')">Delete</button>
              <ul class="list-group mb-0" id="">
              ${this.TaskItemTemplate}
              </div>
              <form class="px-3 pb-2" onsubmit="app.taskItemController.createTaskItem('${this.cardId}')">
              <div class="input-group">
              <input minlength="3" maxlength="50" type="text" class="form-control" placeholder="Task..." aria-label="taskItem"
                aria-describedby="taskItem" id="name">
               <button class="btn btn-primary ms-2">Add</button>
            </div>
            </div>`
  }

  get TaskItemTemplate() {
    let template = ''
    let myTaskItem = ProxyState.taskItems.filter(i => i.cardId == this.cardId)
    myTaskItem.forEach(i => template += i.Template)
    return template
  }
}






