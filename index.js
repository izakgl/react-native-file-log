"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var RNReactLogging = react_native_1.NativeModules.RNReactLogging;
exports["default"] = {
    printLog: function (content) {
        RNReactLogging.printLog(content);
    },
    setTag: function (tag) {
        RNReactLogging.setTag(tag);
    },
    setConsoleLogEnabled: function (enabled) {
        RNReactLogging.setConsoleLogEnabled(enabled);
    },
    setFileLogEnabled: function (enabled) {
        RNReactLogging.setFileLogEnabled(enabled);
    },
    setMaxFileSize: function (size) {
        RNReactLogging.setMaxFileSize(size);
    },
    listAllLogFiles: function () {
        return RNReactLogging.listAllLogFiles();
    }
};
