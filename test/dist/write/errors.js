/**
 * WaveFile: https://github.com/rochars/wavefile
 * Copyright (c) 2017-2018 Rafael da Silva Rocha. MIT License.
 *
 * Test the exceptions.
 * 
 */

const fs = require("fs");
var assert = assert || require('assert');
const WaveFile = require("../../loader.js");
const path = "./test/files/";

describe('errors', function() {
    it('should throw an error if there is no "fmt " chunk when writing',
        function () {
        assert.throws(function() {
            let wav = new WaveFile(
                fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav"));
            wav.fmt.chunkId = "";
            wav.toBuffer();
        }, /Could not find the "fmt " chunk/);
    });
});
