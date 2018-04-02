const httpStatus = require('http-status');
const { omit } = require('lodash');
const Slip = require('../models/slipGaji');
const { handler: errorHandler } = require('../../middleware/error');


/**
 * Post Present
 * @private
 */
exports.ajukanSlipGaji = async (req, res, next) => {
  	try{
  		const slip = new Slip(req.body);
   		const savedcuti = await cuti.save();        
        const cutiTransformed = savedcuti.transform();     
        res.status(httpStatus.CREATED);
        return res.json(cutiTransformed);
    }catch(error){
        return error;
    }
}
exports.getAllSlipGaji = async (req, res) => {
	try{
		Slip.find(function(err, slip){
		if(err){
			res.send(err);
			console.log(err);
		}
		res.json(slip);
	});
	}catch(error){
		return error;
	}
}
exports.getOneSlipGaji = async (req, res) => {
	
}
