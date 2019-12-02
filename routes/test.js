let express     = require('express'),
    router      = express.Router();

let testController = require('../controllers/testController');

/**
 * @api {get} / API Index page
 * @apiVersion 1.0.0
 * @apiName Test
 * @apiGroup First
 * @apiPermission NONE
 *
 *
 * @apiSuccessExample {json} Success response:
 *      HTTPS 200 OK
 *      {
 *          success: true,
 *          message: "Index page is opened!"
 *      }
 */
router.get('/', testController.indexPage);

/**
 * @api {get} /users List all users
 * @apiVersion 1.0.0
 * @apiName Test
 * @apiGroup Second
 * @apiPermission NONE
 *
 *
 * @apiSuccessExample {json} Success response:
 *      HTTPS 200 OK
 *      [
 *          {
 *              first_name: "melany",
 *              last_name: "wijngaard"
 *          },
 *          {
 *              first_name: "nanna",
 *              last_name: "pedersen"
 *          }
 *      ]
 */
router.get('/users', testController.listUsers);

module.exports = router;