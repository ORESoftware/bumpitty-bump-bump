#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var residence = require("residence");
var syncSetup = function () {
    var projectRoot = residence.findProjectRoot(process.cwd());
    var pkgPath = path.resolve(projectRoot + '/package.json');
    var pkg = require(pkgPath);
    pkg.b3val = pkg.b3val || 0;
    pkg.b3val++;
    return { pkg: pkg, pkgPath: pkgPath };
};
exports.bumpSync = function () {
    var _a = syncSetup(), pkg = _a.pkg, pkgPath = _a.pkgPath;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
};
exports.bumpp = function () {
    return new Promise(function (resolve, reject) {
        var _a = syncSetup(), pkg = _a.pkg, pkgPath = _a.pkgPath;
        fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), function (err) {
            err ? reject(err) : resolve();
        });
    });
};
exports.bump = function (cb) {
    var _a = syncSetup(), pkg = _a.pkg, pkgPath = _a.pkgPath;
    fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), cb);
};
if (require.main === module) {
    exports.bumpSync();
}
