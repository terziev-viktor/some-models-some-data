
module.exports = (path) => {

    let pug = require('pug');

    get_pug_pack = () => {
        return {
            pug_index: pug.compileFile(path.join(__dirname + '/..' + '/templates' + '/index.pug')),
            pug_simple_linear_regression: pug.compileFile(path.join(__dirname + "/.." + "/templates" + "/simple-linear-regression.pug")),
            pug_simple_linear_regression_result: pug.compileFile(path.join(__dirname + "/.." + "/templates" + "/simple-linear-regression-result.pug"))
        }
    }
}
