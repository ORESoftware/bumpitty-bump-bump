#!/usr/bin/env node

import fs = require('fs');
import path = require('path');
import residence = require('residence');
import ErrnoException = NodeJS.ErrnoException;

let syncSetup = function(){
  const projectRoot = residence.findProjectRoot(process.cwd());
  const pkgPath = path.resolve(projectRoot + '/package.json');
  const pkg = require(pkgPath);
  pkg.b3val = pkg.b3val || 0;
  pkg.b3val++;
  return {pkg, pkgPath};
};


export const bumpSync = function(){
  const {pkg, pkgPath} = syncSetup();
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
};

export const bumpp = function(){
  return new Promise(function(resolve,reject){
    const {pkg, pkgPath} = syncSetup();
    fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), function(err){
        err ? reject(err) : resolve();
    });
  });
};

export const bump = function(cb: ErrnoException){
  const {pkg, pkgPath} = syncSetup();
  fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), cb);
};


if (require.main === module) {
  bumpSync();
}