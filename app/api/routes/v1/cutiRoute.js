const express = require('express');
const validate = require('express-validation');
const cutiController = require('../../controllers/cutiController');
const { authorize, ADMIN, LOGGED_USER } = require('../../../middleware/auth');
const router = express.Router();
const {
  listUsers,
  createUser,
  replaceUser,
  updateUser,
} = require('../../validations/user.validation');

router
  .route('/ajukanCuti')
  /**
   * @api {post} api/cuti/ajukanCuti add cuti
   * @apiDescription post user's cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  User's access token
   *
   * @apiParam  {String}   email       email's user
   * @apiParam  {Date}   awal_cuti   awal cuti user
   * @apiParam  {Date}   akhir_cuti  akhir cuti user
   * @apiParam  {String}   keterangan  keterangan user
   *
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
    .post(authorize(), cutiController.ajukanCuti);
 router.route('/getAllCuti')
 /**
   * @api {get} api/cuti/getAllCuti Get All cuti
   * @apiDescription get all user's cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  User's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
  .get(authorize(), cutiController.getAllCuti);
  router.route('/getOneCuti/:id')
  /**
   * @api {get} api/cuti/getOneCuti Get One cuti
   * @apiDescription get One user's cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  User's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   .get(authorize(), cutiController.findByID);
   router.route('/accCuti').post(authorize(ADMIN), cutiController.accCuti);
module.exports = router;