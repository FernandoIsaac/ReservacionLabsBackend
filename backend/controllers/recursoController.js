var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);

exports.listRecursos = {
  handler: function(request, reply){
    var recurso = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Recurso");

        query.on('row', function(row) {
            recurso.push(row);
        });

        query.on('end', function() {
            done();
            return reply(recurso);
        });

    });
    console.log('get Laboratorio success')
  }
}

exports.getRecurso = {
  handler: function(request, reply){
    var recurso = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Recurso Where id_Recurso = ($1) ",[request.params.recursoId]);

        query.on('row', function(row) {
            recurso.push(row);
        });

        query.on('end', function() {
            done();
            return reply(recurso);
        });

    });
    console.log('get Recurso success')
  }
}

exports.addRecurso = {
  handler: function(request, reply){

    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }
        client.query("INSERT INTO Recurso values($1, $2, $3)", [request.payload.id_Recurso, request.payload.nombre, request.payload.descripcion]);

    });

    reply("Recurso agregado")
  }
}

exports.editRecurso = {
    handler: function(request, reply){
      pg.connect(conString, function(err, client, done) {
          if(err) {
            done();
            console.log(err);
            return reply.status(500).json({ success: false, data: err});
          }

          client.query("UPDATE Recurso SET nombre = ($1), descripcion = ($2) WHERE id_Recurso = ($3)", [request.payload.nombre, request.payload.descripcion, request.params.recursoId]);

      });
        reply("Recurso edited")
    }
}

exports.removeRecurso = {
  handler: function(request, reply){

      pg.connect(conString, function(err, client, done) {
          if(err) {
            done();
            console.log(err);
            return reply.status(500).json({ success: false, data: err});
          }

          client.query("DELETE FROM Recurso WHERE id_Recurso = ($1)", [request.params.recursoId]);

      });
    reply("Recurso removed");
  }
}
