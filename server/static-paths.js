module.exports = (express, app, path) => {

    app.use('/styles', express.static(path.join(__dirname + '/..' + '/public' + '/css')));
    app.use('/images', express.static(path.join(__dirname + '/..' + '/public' + '/img')));
    app.use('/scripts', express.static(path.join(__dirname + '/..' + '/public' + '/js')));
    app.use('/public', express.static(path.join(__dirname + '/..' + '/public')));
    
    app.use('/python-scripts', express.static(path.join(__dirname + '/..' + '/python-scripts')));
}