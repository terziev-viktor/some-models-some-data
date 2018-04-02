const uniqid = require('uniqid');

module.exports = class Database {

    // config object for future enchantments
    // config must contain savelocation prop
    constructor(config) {
        this.config = config;
        
        this.SaveFile = (file) => {

            if(file.truncated) {
                throw 'file truncated';
            } else {
                let newfilename = uniqid() + file.name;
                let savepath = this.config.savelocation + '\\' + newfilename;
               
                file.mv(savepath, (err) => {
                    if(err) {
                        console.log('------------------err----------------------');
                        console.log(err);
                        console.log('------------------------------------------');
                        throw err;
                    }
                });
                
                return { savelocation: savepath, filename: newfilename }
            }
        }
    }
}
