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
	var id = req.body._id;
	var status  = req.body.status;
	console.log(status);
	Cuti.findOneAndUpdate(id, { status: status }, {upsert:true}, function(err, cuti){
    if(err){
		res.send(err);
		console.log(err);
	}
	const message = 'updated'
	const status = httpStatus.OK;
	res.json({message, status, cuti});
	});
}

exports.findByID = function(req, res){
	const id = req.params._id;
	Cuti.findOne(id,
		function(err, cuti){
			if(err){
				res.send(err);
				console.log(err);
			}
			res.json(cuti);
	});
};