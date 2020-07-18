const {Router} = require ('express');
const router = Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM the_user', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM branches WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
});

module.exports = router;