var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);
var SHA3 = require("crypto-js/sha3");

exports.listDocentes = {
  handler: function(request, reply){
    var docente = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Docente");

        query.on('row', function(row) {
            docente.push(row);
        });

        query.on('end', function() {
            done();
            return reply(docente);
        });

    });
    console.log('get Docente success')
  }
}

exports.getDocente = {
  handler: function(request, reply){
    var docente = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

          var query = client.query("SELECT * FROM Docente Where email = ($1) ",[request.payload.email]);

        query.on('row', function(row) {
            docente.push(row);
        });

        query.on('end', function() {
            done();
            return reply(docente);
        });

    });
    console.log('get Docente success')
  }
}

exports.addDocente = {
  handler: function(request, reply){
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }
        client.query("INSERT INTO Docente VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,'docente')",[request.payload.email,String(SHA3(request.payload.password)), request.payload.primerNombre, request.payload.segundoNombre, request.payload.primerApellido, request.payload.segundoApellido, request.payload.campus, request.payload.departamento, request.payload.telefono]);

    });
    reply("Docente agregado")
  }
}

exports.editDocente = {
  handler: function(request, reply){
    console.log(request.payload);
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("UPDATE Docente SET password = ($1), primerNombre = ($2), segundoNombre = ($3), primerApellido = ($4), segundoApellido = ($5), campus = ($6), departamento = ($7), telefono = ($8), scope = ($9) WHERE email = ($10)",[String(SHA3(request.payload.password)), request.payload.primerNombre, request.payload.segundoNombre, request.payload.primerApellido, request.payload.segundoApellido, request.payload.campus, request.payload.departamento, request.payload.telefono, 'docente',request.payload.email]);

    });
    reply("Docente Modificado")
  }
}

exports.removeDocente = {
  handler: function(request, reply){
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("DELETE FROM Docente WHERE email = ($1)", [request.payload.email]);

    });
    reply("Docente removed");
  }
}
