"use strict"
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require("./models/user").User;
const bodyParser = require("body-parser");
const methodOverride = require ("method-override");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




/*********RUTAS**********/

app.post("/users",function(req,res){

	var user = new User({
			nombre:req.body.nombre,
			apellido:req.body.apellido
	});

	user.save(function(err){
		res.setHeader("Content-Type","application/json");
		if (err){
			res.send(JSON.stringify({
				success:false,
				message:"Ocurrio un error, recuerda que ambos campos son requeridos"
			}));
		}else{
			res.send(JSON.stringify({
				success:true,
				message:"Tus datos fueron guardados correctamente"
			}));
		}
		
	});

});
app.get("/users",function(req,res){
	res.setHeader("Content-Type","application/json");
	User.find(function(err,doc){
		if (err){
			res.send(JSON.stringify({
				success:false,
				message:"Ocurrio un error, intenta mas tarde"
			}));
		}else{
		  res.send(JSON.stringify({
				success:true,
				users:doc
			}));

		}
	});

});

app.get("/users/:id",function(req,res){
	res.setHeader("Content-Type","application/json");
	User.findById(req.params.id,function(err,docs){
		if (err){
			res.send(JSON.stringify({
				success:false,
				message:"No se encontro el usuario, intenta mas tarde"
			}));
		}else{
			res.send(JSON.stringify({
			success:true,
			user:docs
		}));
		}

	})
});
app.put("/users/:id",function(req,res){
	res.setHeader("Content-Type","application/json");
	User.findById(req.params.id,function(err,user){
		console.log(req.body);
		if (err){
			res.send(JSON.stringify({
				success:false,
				message:"Ocurrio un error buscando el usuario, intenta mas tarde"
			}));
		}else{
			if(req.body.nombre){
				user.nombre = req.body.nombre;
			}
			if(req.body.apellido){
				user.apellido =req.body.apellido;

			}
			user.save(function(err){
				if(err){
					res.send(JSON.stringify({
						success:false,
						message:"Ocurrio un error al actualizar, intenta mas tarde"
					}));
				}else{
					res.send(JSON.stringify({
						success:true,
						message:"Usuario actualizado correctamente"
					}));
				}
			});

		}
	});
});
app.delete("/users/:id",function(req,res){
	res.setHeader("Content-Type","application/json");
	User.findById(req.params.id,function(err,docs){
		if (err){
			res.send(JSON.stringify({
				success:false,
				message:"No se encontro el usuario, intenta mas tarde"
			}));
		}else{
			User.findOneAndRemove({_id:req.params.id},function(err){
				if (err){
					res.send(JSON.stringify({
						success:false,
						message:"Ocurrio un error, intenta mas tarde"
					}));
				}else{
					res.send(JSON.stringify({
						success:true,
						message:"Se elimino el usuario correctamente"
					}));	
				}
			});

		}
	});
});

app.listen(8080);
