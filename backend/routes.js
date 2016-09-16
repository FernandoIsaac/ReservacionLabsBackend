var adminuserController = require('./controllers/adminuserController');
var authController = require('./controllers/authController');
var labController = require('./controllers/labController');
var docenteController = require('./controllers/docenteController');
var reservacionController = require('./controllers/reservacionController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, LABS')}}},

	{method: 'POST', path: '/v1/register', config: adminuserController.createUser},
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

	{method: 'POST', path: '/v1/addDocente', config: docenteController.addDocente},
	{method: 'GET', path: '/v1/listDocente', config: docenteController.listDocentes},
	{method: 'DELETE', path: '/v1/removeDocente/{docenteId}', config: docenteController.removeDocente},

];
