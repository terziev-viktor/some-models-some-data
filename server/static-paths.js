module.exports = (express, app, path) => {

    app.use('/styles', express.static(path.join(__dirname + '/..' + '/public' + '/css')));
    app.use('/scripts', express.static(path.join(__dirname + '/..' + '/public' + '/js')));
    app.use('/python-scripts', express.static(path.join(__dirname + '/..' + '/python-scripts')));
}