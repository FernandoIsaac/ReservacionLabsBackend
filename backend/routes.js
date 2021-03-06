var adminuserController = require('./controllers/adminuserController');
var authController = require('./controllers/authController');
var labController = require('./controllers/labController');
var docenteController = require('./controllers/docenteController');
var reservacionController = require('./controllers/reservacionController');
var recursoController = require('./controllers/recursoController');
var recurso_labController = require('./controllers/recurso_labController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, LABS')}}},

	{method: 'POST', path: '/v1/register', config: adminuserController.createDocente},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},

	{method: 'POST', path: '/v1/addLab', config: labController.addLab},
	{method: 'PUT', path: '/v1/editLab/{labId}', config: labController.editLab},
	{method: 'DELETE', path: '/v1/removeLab/{labId}', config: labController.removeLab},
	{method: 'GET', path: '/v1/listLabs', config: labController.listLabs},
	{method: 'GET', path: '/v1/getLab/{labId}', config: labController.getLab},

	{method: 'POST', path: '/v1/addReservacion', config: reservacionController.addReservacion},
	{method: 'PUT', path: '/v1/editReservacion/{reservacionId}', config: reservacionController.editReservacion},
	{method: 'DELETE', path: '/v1/removeReservacion/{reservacionId}', config: reservacionController.removeReservacion},
	{method: 'GET', path: '/v1/listReservaciones', config: reservacionController.listReservaciones},
	{method: 'GET', path: '/v1/getReservacion/{reservacionId}', config: reservacionController.getReservacion},

	{method: 'POST', path: '/v1/addRecurso', config: recursoController.addRecurso},
	{method: 'PUT', path: '/v1/editRecurso/{recursoId}', config: recursoController.editRecurso},
	{method: 'DELETE', path: '/v1/removeRecurso/{recursoId}', config: recursoController.removeRecurso},
	{method: 'GET', path: '/v1/listRecursos', config: recursoController.listRecursos},
	{method: 'GET', path: '/v1/getRecurso/{recursoId}', config: recursoController.getRecurso},

	{method: 'POST', path: '/v1/addDocente', config: docenteController.addDocente},
	{method: 'PUT', path: '/v1/editDocente/{email}', config: docenteController.editDocente},
	{method: 'GET', path: '/v1/listDocentes', config: docenteController.listDocentes},
	{method: 'DELETE', path: '/v1/removeDocente/{email}', config: docenteController.removeDocente},
	{method: 'GET', path: '/v1/getDocente/{email}', config: docenteController.getDocente},

	{method: 'POST', path: '/v1/addRecurso_lab', config: recurso_labController.addRecurso_Lab},
	{method: 'PUT', path: '/v1/editRecurso_lab/{labId}', config: recurso_labController.editRecurso_Lab},
	{method: 'GET', path: '/v1/listRecursos_lab', config: recurso_labController.listRecursos_Lab},
	{method: 'DELETE', path: '/v1/removeRecurso_lab/{labId}/{recursoId}', config: recurso_labController.removeRecurso_Lab},
	{method: 'GET', path: '/v1/getRecurso_lab/{labId}', config: recurso_labController.getRecurso_Lab},

];
