var adminusersController = require('./controllers/adminuserController');
var authController = require('./controllers/authController');
var labController = require('./controllers/labController');
var docenteController = require('./controllers/docenteController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, DOGS')}}},

	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},

	{method: 'POST', path: '/v1/addLab', config: dogController.addLab},
	{method: 'PUT', path: '/v1/editLab/{labId}', config: dogController.editLab},
	{method: 'DELETE', path: '/v1/removeLab/{labId}', config: dogController.removeLab},
	{method: 'GET', path: '/v1/listLabs', config: dogController.listLabs},
	{method: 'GET', path: '/v1/getLab/{labId}', config: dogController.getLab},

	{method: 'POST', path: '/v1/addDocente', config: docenteController.addDocente},
	{method: 'GET', path: '/v1/listDocente', config: docenteController.listDocentes},
	{method: 'DELETE', path: '/v1/removeDocente/{docenteId}', config: docenteController.removeDocente},

];
