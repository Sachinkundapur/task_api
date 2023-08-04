const express = require("express")
const router = express.Router()
const taskControllers = require("../controller/task")

router.route('/').get(taskControllers.getAllTasks).post(taskControllers.postTask)
router.route('/:id').get(taskControllers.getTask).patch(taskControllers.upadteTask).delete(taskControllers.deleteTask)




module.exports = router