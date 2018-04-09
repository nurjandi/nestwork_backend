const httpStatus = require('http-status');
const { omit } = require('lodash');
const Cuti = require('../models/cuti');
const { handler: errorHandler } = require('../../middleware/error');
/**
 * Post Present
 * @private
 */
exports.ajukanCuti = async (req, res, next) => {
  	try{
  		const cuti = new Cuti(req.body);
   		const savedcuti = await cuti.save();        
        const cutiTransformed = savedcuti.transform();     
        res.status(httpStatus.CREATED);
        const status = httpStatus.CREATED;
        const message = 'created';
        return res.json({message, status, cutiTransformed});
    }catch(error){
        return error;
    }
}

exports.getAllCuti = async (req, res) => {
	try{
		Cuti.find(function(err, cuti){
		if(err){
			res.send(err);
			console.log(err);
		}
		const message = 'OK'
		const status = httpStatus.OK;
		res.json({message, status, cuti});
	});
	}catch(error){
		return error;
	}
}

exports.accCuti = async (req, res) => {
	var id = req.params.id;
	var status  = 1;
	var respons = 1;
	Cuti.findOneAndUpdate({"_id" : id}, {"$set" : {"status" : status, "respons" : respons}}, {upsert:true}, function(err, cuti){
    	if(err){
			res.send(err);
			console.log(err);
		}
		const message = 'updated'
		const status = httpStatus.OK;
		res.json({message, status, cuti});
	});
}

exports.tolakCuti = async (req, res) => {
	var id = req.params.id;
	var status  = 0;
	var respons = 1;
	Cuti.findOneAndUpdate({"_id" : id}, {"$set" : {"status" : status, "respons" : respons}}, {upsert:true}, function(err, cuti){
    	if(err){
			res.send(err);
			console.log(err);
		}
		const message = 'updated'
		const status = httpStatus.OK;
		res.json({message, status, cuti});
	});
}

exports.findByEmail = function(req, res){
	const email = req.params.email;
	Cuti.findOne({'email' : email},
		function(err, cuti){
			if(err){
				res.send(err);
				console.log(err);
			}
			res.json(cuti);
	});
};
exports.findByStatus = function(req, res){
	const status = req.params.status;
	Cuti.findOne({'status' : status},
		function(err, cuti){
			if(err){
				res.send(err);
				console.log(err);
			}
			res.json(cuti);
		});
};
exports.findByRespons = function(req, res){
	const respons = req.params.respons;
	Cuti.findOne({'respons' : respons},
		function(err, cuti){
			if(err){
				res.send(err);
				console.log(err);
			}
			res.json(cuti);
	});
};