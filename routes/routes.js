var express = require('express');
const controller = require('../controller');
var router = express.Router();


router.get("/main_type", controller.main_type);
router.post("/main_type", controller.addmain_type);
router.delete('/main_type/:id', controller.delmain_type);

router.get("/body_part", controller.body_part);
router.post("/body_part", controller.addbody_part);
router.delete('/body_part/:id', controller.delbody_part);

router.get("/exercise", controller.exercise);
router.post("/exercise", controller.addexercise);
router.delete('/exercise/:id', controller.delexercise);

router.get("/sub_type", controller.sub_type);
router.post("/sub_type", controller.sub_type);
router.delete('/sub_type/:id', controller.sub_type);

router.get("/workout_plan", controller.workout_plan);
router.post("/workout_plan", controller.workout_plan);
router.delete('/workout_plan/:id', controller.workout_plan);

module.exports = router;
