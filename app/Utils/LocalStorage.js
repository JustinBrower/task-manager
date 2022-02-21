import { ProxyState } from "../AppState.js"
import { TaskCard } from "../Models/TaskCard.js"
import { TaskItem } from "../Models/TaskItem.js"


export function saveState() {
    // Save the current proxy state into local storage
    // JSON.Stringiy turns the data into a special version of a string
    localStorage.setItem('Task Manager', JSON.stringify({
        taskCards: ProxyState.taskCards,
        taskItems: ProxyState.taskItems
    }))
}

export function loadState() {
    // get data from local storage by same name saved
    // JSON.parse reads that special string and turns it back into real data
    let data = JSON.parse(localStorage.getItem('Task Manager'))
    console.log('loaded data', data)
    // check for if data exists, cause we only want to try this if it does, will error otherwise
    if (data != null) {
        // the data gets saved as POJOs so has to be turned back into cards classes
        ProxyState.taskCards = data.taskCards.map(c => new TaskCard(c))
        ProxyState.taskItems = data.taskItems.map(i => new TaskItem(i))
    }
}