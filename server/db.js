const uniqid = require('uniqid')

module.exports = class Database {

    // config object for future enchantments
    // config must contain savelocation prop
    constructor(config) {
        this.config = config;

        this.SaveFile = (file, cb) => {
            if(file.truncated) {
                cb(false, {msg: 'file is over the size limit'});
            } else {
                let newfilename = uniqid() + file.name;
                let savepath = this.config.savelocation + '\\' + newfilename;
               
                file.mv(savepath, (err) => {
                    cb(false, {msg: 'Could not save the file', err: err});
                });
                
                // sending the file location for debug purpuses
                cb(true, {msg: 'File saved!', savelocation: savepath, filename: newfilename });
            }
        }
    }
}
