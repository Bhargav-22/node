
const main_type = "SELECT * From main_type";
const addmainn_type = "INSERT INTO main_type(name,description,is_active) VALUES($1,$2,False)";
const delmain_type = "DELETE FROM main_type WHERE id = $1";

const body_part = "SELECT * From body_part";
const addbody_part = "INSERT INTO body_part(name,description,is_active) VALUES($1,$2,TRUE)";
const delbody_part = "DELETE FROM body_part WHERE id = $1";

const exercise = "SELECT * From exercise";
const addexercise = "INSERT INTO exercise(name, description , set ,reps,rest_time,is_active) VALUES($1,$2,$3,$4,$5,TRUE)";
const delexercise = "DELETE FROM exercise WHERE id = $1";

const sub_type = "SELECT * From sub_type JOIN main_type ON sub_type.main_type_id = main_type.id";
const addsub_type = "INSERT INTO sub_type(name, description , main_type_id,is_active) VALUES($1,$2,$3,TRUE)";
const delsub_type = "DELETE FROM sub_type WHERE id = $1";



const workout_plan = "SELECT * FROM workout_plan JOIN main_type ON workout_plan.main_type_id = main_type.id JOIN sub_type ON workout_plan.sub_type_id = sub_type.id JOIN body_part ON workout_plan.body_part_id = body_part.id JOIN exercise ON workout_plan.exercise_id = exercise.id ";

const addworkout_plan = "INSERT INTO workout_plan(main_type_id,sub_type_id,body_part_id,day,exercise_id,is_active) VALUES($1,$2,$3,$4,$5,TRUE)";
const delworkout_plan = "DELETE FROM workout_plan WHERE id = $1";

module.exports = {

    main_type,
    addmainn_type,
    delmain_type,
    body_part,
    addbody_part,
    delbody_part,
    exercise,
    addexercise,
    delexercise,
    sub_type,
    addsub_type,
    delsub_type,
    workout_plan,
    addworkout_plan,
    delworkout_plan,
}