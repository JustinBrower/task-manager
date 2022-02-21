import { ProxyState } from "../AppState.js";
import { TaskCard } from "../Models/TaskCard.js";



class TaskCardService {
    createTaskCard(newTaskCard) {
        let realTaskCard = new TaskCard(newTaskCard)
        ProxyState.taskCards = [realTaskCard, ...ProxyState.taskCards]
        console.log(realTaskCard);
    }
    deleteTaskCard(id) {
        ProxyState.taskCards = ProxyState.taskCards.filter(c => c.cardId != id)
        ProxyState.taskItems = ProxyState.taskItems.filter(i => i.cardId != id)
    }
}

export const taskCardService = new TaskCardService