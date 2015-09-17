/**
 * @fileOverview wrap validator middleware, and handle with options
 * @author Max
 **/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

var defaultOptions = {
    key: 'meta'
};

exports['default'] = function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? defaultOptions : arguments[0];

    return (0, _validator2['default'])(options);
};

module.exports = exports['default'];