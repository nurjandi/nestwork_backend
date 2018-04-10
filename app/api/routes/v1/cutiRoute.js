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
  router.route('/getOneCuti/:email')
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
   .get(authorize(), cutiController.findByEmail);
   router.route('/accCuti/:id').
   /**
   * @api {get} api/cuti/accCuti Accept cuti by ID
   * @apiDescription accept user's cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  Admin's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   get(authorize(ADMIN), cutiController.accCuti);
   router.route('/tolakCuti/:id')
   /**
   * @api {get} api/cuti/tolakCuti Decline cuti by ID
   * @apiDescription decline user's cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  Admin's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   .get(authorize(ADMIN), cutiController.tolakCuti);
   router.route('/findByStatus/:status')
   /**
   * @api {get} api/cuti/findByStatus Get cuti by status
   * @apiDescription get user's cuti by status
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  Admin's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   .get(authorize(ADMIN), cutiController.findByStatus);
   router.route('/findByRespons/:respons')
   /**
   * @api {get} api/cuti/findByRespons Get cuti by Respons
   * @apiDescription get cuti by Respons
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  Admin's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   .get(authorize(ADMIN), cutiController.findByRespons);
   router.route('/DeleteAllCuti/')
   /**
   * @api {delete} api/cuti/DeleteAllCuti delete all cuti
   * @apiDescription delete all cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  Admin's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   .delete(authorize(ADMIN), cutiController.destroyAll);
   router.route('/DropCollectionCuti')
   /**
   * @api {delete} api/cuti/dropCollectionCuti Get
   * @apiDescription drop tabel cuti
   * @apiVersion 1.0.0
   * @apiName UserPresent
   * @apiGroup User
   * @apiPermission user
   *
   * @apiHeader {String} Athorization  Admin's access token
   * @apiSuccess  {String}   email       email's user
   * @apiSuccess  {Date}   awal_cuti   awal cuti user
   * @apiSuccess  {Date}   akhir_cuti  akhir cuti user
   * @apiSuccess  {String}   keterangan  keterangan user
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Users can access the data
   */
   .delete(authorize(ADMIN), cutiController.dropCuti);
module.exports = router;
