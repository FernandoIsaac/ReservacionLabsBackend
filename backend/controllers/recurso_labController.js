var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);

exports.listRecursos_Lab = {
  handler: function(request, reply){
    var recurso_lab = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Recursos_de_Laboratorio");

        query.on('row', function(row) {
            recurso_lab.push(row);
        });

        query.on('end', function() {
            done();
            return reply(recurso_lab);
        });

    });
    console.log('get Recurso_Lab success')
  }
}

exports.getRecurso_Lab = {
  handler: function(request, reply){
    var recurso_Lab = [];
    var labId = request.params.labId;
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Recursos_de_Laboratorio Where id_Laboratorio = ($1) ",[labId]);

        query.on('row', function(row) {
            recurso_Lab.push(row);
        });

        query.on('end', function() {
            done();
            return reply(recurso_Lab);
        });

    });
    console.log('get Recurso_Lab success')
  }
}

exports.addRecurso_Lab = {
  handler: function(request, reply){

    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("INSERT INTO Recursos_de_Laboratorio values($1, $2)", [request.payload.id_Laboratorio, request.payload.id_Recurso]);
        reply("Recurso_Lab agregado")
    });
  }
}

exports.editRecurso_Lab = {
    handler: function(request, reply){
      var labId = request.params.labId;
      var recursoId = request.params.recursoId;
      pg.connect(conString, function(err, client, done) {
          if(err) {
            done();
            console.log(err);
            return reply.status(500).json({ success: false, data: err});
          }

          client.query("UPDATE Recursos_de_Laboratorio SET id_Laboratorio = ($1), id_Recurso = ($2) WHERE id_Laboratorio = ($1)", [labId, recursoId]);
          reply("Recurso_Lab edited")
      });

    }
}

exports.removeRecurso_Lab = {
  handler: function(request, reply){

      pg.connect(conString, function(err, client, done) {
          if(err) {
            done();
            console.log(err);
            return reply.status(500).json({ success: false, data: err});
          }

          client.query("DELETE FROM Recursos_de_Laboratorio WHERE id_Recurso = ($1) AND id_Laboratorio = ($2)", [request.payload.recursoId,request.payload.labId]);
          reply("Recurso removed");
      });

  }
}
