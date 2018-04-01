
module.exports = (app, db, python, path) => {
    const fileUpload = require('express-fileupload');

    // default options
    app.use(fileUpload());
    
    app.post('/upload', (req, res) => {
        
        if (!req.files) {
            res.status(400).send('No files were uploaded.');
        }
        
        let dataset = req.files.csv;

        db.SaveFile(dataset, (good, info) => {
            // simple linear regression only ! (for now)

            // if(!good) {
            //     return res.status(500).send(info.msg);
            // }
            let dataset = info.filename;
            let pathtoscripts = path.join(__dirname + '/../' + 'python-scripts');
            console.log('dataset:');
            console.log(dataset);
            args = []
            args.push(dataset);

            let options = {
                mode: 'text',
                scriptPath: pathtoscripts,
                args: args
            }
            python.run('simple-linear-regression.py', options, (err, results) => {
                console.log('python.run() return values:');
                console.log(err);
                console.log(results);
            });
        });  
        res.status(200).send('OK');     
    });

    app.get('/upload', (req, res) => {
        //res.sendFile(path.join(__dirname + '/../' + '/public' + 'uploaded.html'));
    })
    
    // routes
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../' + '/public' + '/index.html'));
    });
}
