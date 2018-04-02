module.exports = (express, app, path) => {
    app.use('/public', express.static(path.join(__dirname + '/..' + '/public')));
    
    app.use('/python-scripts', express.static(path.join(__dirname + '/..' + '/python-scripts')));
}