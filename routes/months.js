//Requires
const express = require('express');
const controller = require('../controllers/monthsController');
const views = require('../controllers/viewController');
const monthsRouter = express.Router();



//New/Edit Routes
monthsRouter.get('/:id/edit', controller.getOne, views.showEditMonthForm, views.show404);
monthsRouter.get('/new', views.showAddMonthForm);

//Single Routes
monthsRouter.route('/:id')
  .get(controller.getOne, views.showOneMonth, views.show404)
  .put(controller.update, views.handleUpdateMonth, views.show406)
  .delete(controller.destroy, views.handleDeleteMonth, views.show404);

//Show Routes
monthsRouter.route('/')
  .get(controller.index, views.showMonths, views.show404)
  .post(controller.save, views.handleCreateMonth,  views.show406);


module.exports = monthsRouter;
