module.exports = (python, path) => {

    simple_linear_regression = (csv) => {
        let dataset = csv;
        let pathtoscripts = path.join(__dirname + '/../' + 'python-scripts');
        args = []
        args.push(dataset);

        let options = {
            mode: 'text',
            scriptPath: pathtoscripts,
            args: args
        }

        python.run('simple-linear-regression.py', options, (err, results) => {
            if(err) {
                throw err;
            }
            console.log('--------results of python script------- ');
            console.log(results);
            console.log('----------------------------------------');
            return results;
        });
    }
}