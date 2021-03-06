var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);

exports.listLabs = {
  handler: function(request, reply){
    var lab = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Laboratorio");

        query.on('row', function(row) {
            lab.push(row);
        });

        query.on('end', function() {
            done();
            return reply(lab);
        });

    });
    console.log('get Laboratorio success')
  }
}

exports.getLab = {
  handler: function(request, reply){
    var lab = [];

    var labId = request.params.labId;
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Laboratorio Where id_Laboratorio = ($1) ",[labId]);

        query.on('row', function(row) {
            lab.push(row);
        });

        query.on('end', function() {
            done();
            return reply(lab);
        });

    });
    console.log('get Laboratorio success')
  }
}


exports.addLab = {
  handler: function(request, reply){
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("INSERT INTO Laboratorio values($1, $2, $3, $4, $5)", [request.payload.id_Laboratorio, request.payload.nombre, request.payload.descripcion,request.payload.ubicacion,request.payload.capacidad]);
        reply("Lab agregado")
        
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
  }
}

exports.editLab = {
  handler: function(request, reply){
    var labId = request.params.labId;
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }
        client.query("UPDATE Laboratorio SET nombre = ($1), descripcion = ($2), ubicacion = ($3), capacidad = ($4) WHERE id_Laboratorio = ($5)",[request.payload.nombre, request.payload.descripcion,request.payload.ubicacion,request.payload.capacidad,labId]);
        reply("Lab Editado")
        
        query.on('end', function() {
            done();
            return res.json(results);
        });
        
    });
  }
}

exports.removeLab = {
  handler: function(request, reply){
    var labId = request.params.labId;
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("DELETE FROM Laboratorio WHERE id_Laboratorio = ($1)", [labId]);
        reply("Lab removed");
        
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });

  }
}
