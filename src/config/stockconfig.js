

if(process.env("NODE_CONFIG_DIR")=== undefined){
    process.env.NODE_ENV = 'dev'
    const path = require('path')
    let configFolder = path.resolve(__dirname,"../../../");
    console.log('NODE_CONFIG_DIR not found, hence setting new default value :', configFolder);
    process.env["NODE_CONFIG_DIR"] = configFolder;
}
const config = require('config');

module.exports = config;


