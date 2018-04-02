module.exports = (python, path) => {
    const uploaded_datasets_path = path.join(__dirname + '/../' + 'uploaded-datasets/'),
    img_path = path.join(__dirname + '/../' + 'public' + '/img/'),
    python_scripts_path = path.join(__dirname + '/../' + 'python-scripts');

    simple_linear_regression = (csv) => {
        let dataset = csv;
        args = []
        args.push(uploaded_datasets_path);
        args.push(img_path);
        args.push(dataset);

        let options = {
            mode: 'text',
            scriptPath: python_scripts_path,
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

    simple_linear_regression_gradient_descent = (csv) => {
        args = []
        args.push(uploaded_datasets_path);
        args.push(img_path);
        args.push(csv);

        let options = {
            mode: 'text',
            scriptPath: python_scripts_path,
            args: args
        }

        python.run('simple-linear-regression-gradient-descent.py', options, (err, result) => {
            if(err) {
                throw err;
            }
            console.log('-----------results--------------');
            console.log(results);
            console.log('--------------------------------');
            return results;
        })

    }
    
}