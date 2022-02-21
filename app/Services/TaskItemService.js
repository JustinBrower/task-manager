import { ProxyState } from "../AppState.js";
import { TaskItem } from "../Models/TaskItem.js";



class TaskItemService {
    createTaskItem(newTaskItem) {
        let realTaskItem = new TaskItem(newTaskItem)
        ProxyState.taskItems = [...ProxyState.taskItems, realTaskItem]
        console.log(realTaskItem);
    }
    deleteTaskItem(id) {
        ProxyState.taskItems = ProxyState.taskItems.splice(i => i.id == id)
    }
}

export const taskItemService = new TaskItemService