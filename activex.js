var ActiveX = module.exports = require('bindings')('Release/node_activex');
// var ActiveX = module.exports = require('./build/Release/node_activex');
// var ActiveX = module.exports = require('./build/Debug/node_activex');

global.ActiveXObject = function(id, opt) {
    return new ActiveX.Object(id, opt);
};
