'use strict';

const assert = require('assert');

const bling = require('../');

describe('hash algorithm tests', function() {
  const words = [];
  const algorithms = [
    'CITY32',
    'CITY64',
    'CITY128',
  ];

  before(function() {
    const fs = require('fs');
    const str = fs.readFileSync(__dirname + '/resources/words.txt', { encoding: 'utf8' });
    const temp = str.split('\n');
    for (let i = 0; i < temp.length; i++) {
      if (!temp[i]) continue;
      const line = temp[i].split(' ');
      for (let j = 0; j < line.length; j++) {
        if (!line[j]) continue;
        words.push(line[j]);
      }
    }
  });

  const getProcesser = function(name) {
    name = name.toLowerCase();

    return function() {
      const res = [];
      for (let i = 0; i < words.length; i++) {
        res.push(bling[name](words[i]));
      }

      const fs = require('fs');
      const std = fs.readFileSync(__dirname + '/resources/' + name + '.txt', {
        encoding: 'utf8',
      });

      assert.strictEqual(res.join('\n'), std);
    };
  };

  for (let i = 0; i < algorithms.length; i++) {
    it(algorithms[i] + ' Hash', getProcesser(algorithms[i]));
  }
});
