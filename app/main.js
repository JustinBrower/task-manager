import { TaskCardController } from "./Controllers/TaskCardController.js";
import { TaskItemController } from "./Controllers/TaskItemController.js";

class App {
  taskCardController = new TaskCardController();
  taskItemController = new TaskItemController();
}

window["app"] = new App();
