

module.exports = (app, db, path, Q) => {
    const fileUpload = require('express-fileupload');

    // default options
    app.use(fileUpload());

    let pack = get_pug_pack();

    app.post('/simple-linear-regression', (req, res) => {

        if (!req.files) {
            res.status(400).send('No files were uploaded.');
        }

        let dataset = req.files.csv;
        Q.fcall(db.SaveFile, dataset)
            .then(values => {
                return simple_linear_regression(values.filename);
            })
            .then((values) => {
                let def = Q.defer();
                // values = ['filename.png', 'Rq']
                console.log("----------values----------------");
                console.log(values);
                console.log("--------------------------------");
                let locals = {
                    modelpng: values[0],
                    rsq: values[1]
                }
                def.resolve(pack.pug_simple_linear_regression_result(locals));
                return def.promise;
            }, (err) => {
                console.log(err);
            })
            .then(html => {
                res.status(200).send(html);
            })
            .catch(err => {
                console.log('-------------err-------------------');
                console.log(err);
                console.log('-----------------------------------');
                return res.status(500).send(err);
            })
            .done();
    });

    app.get('/', (req, res) => {
        let html = pack.pug_index();
        res.send(html);
    });

    app.get('/simple-linear-regression', (req, res) => {
        let html = pack.pug_simple_linear_regression();
        res.status(200).send(html);
    })
}
