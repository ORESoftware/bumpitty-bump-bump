#!/usr/bin/env node

import fs = require('fs');
import path = require('path');
import residence = require('residence');
import ErrnoException = NodeJS.ErrnoException;
export type ErrnoExceptionFn = (e: ErrnoException) => void;

let syncSetup = function () {
  const projectRoot = residence.findProjectRoot(process.cwd());
  const pkgPath = path.resolve(projectRoot + '/package.json');
  const pkg = require(pkgPath);
  pkg.b3val = pkg.b3val || 0;
  pkg.b3val++;
  return {pkg, pkgPath};
};

let getStringifiedData = function(pkg: Object){
  return JSON.stringify(pkg, null, 2);
};

export const bumpSync = function () {
  const {pkg, pkgPath} = syncSetup();
  fs.writeFileSync(pkgPath, getStringifiedData(pkg));
};

export const bumpp = function () {
  return new Promise(function (resolve, reject) {
    const {pkg, pkgPath} = syncSetup();
    fs.writeFile(pkgPath, getStringifiedData(pkg), function (err) {
      err ? reject(err) : resolve();
    });
  });
};

export const bump = function (cb: ErrnoExceptionFn) {
  const {pkg, pkgPath} = syncSetup();
  fs.writeFile(pkgPath, getStringifiedData(pkg), cb);
};

if (require.main === module) {
  bumpSync();
}