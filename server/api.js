
;

module.exports = (app, db, path) => {
    const fileUpload = require('express-fileupload');
    let Q = require('q');

    // default options
    app.use(fileUpload());

    app.post('/upload', (req, res) => {

        if (!req.files) {
            res.status(400).send('No files were uploaded.');
        }

        let dataset = req.files.csv;
        Q.fcall(db.SaveFile, dataset)
            .then(values => {
                return simple_linear_regression(values.filename);
            })
            .then(values => {
                return res.status(200).sendFile(path.join(__dirname + '/..' + '/public' + '/uploaded.html'));
            })
            .catch(err => {
                console.log('-------------err-------------------');
                console.log(err);
                console.log('-----------------------------------');
                return res.status(500).sendFile(__dirname + '/..' + '/public' + '/error.html');
            })
            .done();
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/..' + '/public' + '/index.html'));
    });
}
