const pool = require('./db');
const Query = require('./quaries');



const main_type = (req, res) => {
    pool.query(Query.main_type, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const addmain_type = (req, res) => {
    const { name, description} = req.body;
   // console.log(req.body);
    pool.query(Query.addmainn_type, [name, description], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const delmain_type = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(Query.delmain_type, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const body_part = (req, res) => {
    pool.query(Query.body_part, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const addbody_part = (req, res) => {
    const { name, description} = req.body;
    console.log(req.body);
    pool.query(Query.addbody_part, [name, description], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const delbody_part = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(Query.delbody_part, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const exercise = (req, res) => {
    pool.query(Query.exercise, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const addexercise = (req, res) => {
    const { name, description , set ,reps,rest_time} = req.body;
  //  console.log(req.body);
    pool.query(Query.addexercise, [ name, description , set ,reps,rest_time], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const delexercise = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(Query.delexercise, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};



const sub_type = (req, res) => {
    pool.query(Query.sub_type, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const addsub_type = (req, res) => {
    const { name, description , main_tupe_id} = req.body;
  console.log(req.body);
    pool.query(Query.addsub_type, [ name, description , main_tupe_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const delsub_type = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(Query.delsub_type, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const workout_plan = (req, res) => {
    pool.query(Query.workout_plan, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        console.log(results);
       
    });
};
const addworkout_plan = (req, res) => {
    const { main_tupe_id,sub_type_id,body_part_id,day,exercise_id,is_active} = req.body;
   console.log(req.body);
    pool.query(Query.addworkout_plan, [main_tupe_id,sub_type_id,body_part_id,day,exercise_id,is_active], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const delworkout_plan = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(Query.delworkout_plan, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


module.exports = {
   
    main_type,
    addmain_type,
    delmain_type,
    body_part,
    addbody_part,
    delbody_part,
    addexercise,
    exercise,
    delexercise,
    sub_type,
    addsub_type,
    delsub_type,
    workout_plan,
    addworkout_plan,
    delworkout_plan,
}