var pg = require("pg");
var conString = "pg://postgres:xandre1996&@localhost:5432/ReservacionLab";
var client = new pg.Client(conString);

exports.getReservacion = {
  handler: function(request, reply){
    var reservacion = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Reservacion Where id_Reservacion = ($1) ",[request.params.reservacionId]);

        query.on('row', function(row) {
            reservacion.push(row);
        });

        query.on('end', function() {
            done();
            return reply(reservacion);
        });

    });
    console.log('list Reservacion success')
  }
}

exports.listReservaciones = {
  handler: function(request, reply){
    var reservacion = [];

    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        var query = client.query("SELECT * FROM Reservacion");

        query.on('row', function(row) {
            reservacion.push(row);
        });

        query.on('end', function() {
            done();
            return reply(reservacion);
        });

    });
    console.log('list Reservacion success')
  }
}

exports.addReservacion = {
  handler: function(request, reply){
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }
        client.query("INSERT INTO Reservacion values($1, $2, $3, $4, $5, $6, $7, $8, $9)", [request.payload.id_Reservacion, request.payload.descripcion, request.payload.estado, request.payload.fecha_inicial, request.payload.fecha_final, request.payload.hora_inicial, request.payload.hora_final, request.payload.emaildocente, request.payload.id_Laboratorio]);

    });
    console.log('Reservacion added');
  }
}

exports.editReservacion = {
  handler: function(request, reply){
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("UPDATE Reservacion SET descripcion = ($1), estado = ($2), fecha_inicial = ($3), fecha_final = ($4), hora_inicial = ($5), hora_final = ($6), emaildocente = ($7), id_Laboratorio = ($8) WHERE id_Rervacion = ($9)", [request.payload.descripcion, request.payload.estado, request.payload.fecha_inicial, request.payload.fecha_final, request.payload.hora_inicial, request.payload.hora_final, request.payload.emaildocente, request.payload.id_Laboratorio, request.params.reservacionId]);

    });
      reply("Reservacion edited")
  }
}

exports.removeReservacion = {
  handler: function(request, reply){
    pg.connect(conString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return reply.status(500).json({ success: false, data: err});
        }

        client.query("DELETE FROM Reservacion WHERE id_Reservacion = ($1)", [request.params.reservacionId]);

    });
  }
}
