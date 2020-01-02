/*
 * Copyright (c) 2019 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview Externs for wavefile-parser 1.0
 * @see https://github.com/rochars/wavefile-parser
 * @externs
 */

// wavefile-parser module
var wavefileParser = {};

// WaveFileParser class
var WaveFileParser = {};

/**
 * The container identifier.
 * RIFF, RIFX and RF64 are supported.
 * @type {string}
 */
WaveFileParser.prototype.container = '';
/**
 * @type {number}
 */
WaveFileParser.prototype.chunkSize = 0;
/**
 * The format.
 * Always WAVE.
 * @type {string}
 */
WaveFileParser.prototype.format = '';
/**
 * The data of the fmt chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.fmt = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {number} */
  audioFormat: 0,
  /** @type {number} */
  numChannels: 0,
  /** @type {number} */
  sampleRate: 0,
  /** @type {number} */
  byteRate: 0,
  /** @type {number} */
  blockAlign: 0,
  /** @type {number} */
  bitsPerSample: 0,
  /** @type {number} */
  cbSize: 0,
  /** @type {number} */
  validBitsPerSample: 0,
  /** @type {number} */
  dwChannelMask: 0,
  /**
   * 4 32-bit values representing a 128-bit ID
   * @type {!Array<number>}
   */
  subformat: []
};
/**
 * The data of the fact chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.fact = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {number} */
  dwSampleLength: 0
};
/**
 * The data of the cue  chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.cue = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {number} */
  dwCuePoints: 0,
  /** @type {!Array<!Object>} */
  points: [{
    dwName: 0, // a cue point ID
    dwPosition: 0,
    fccChunk: 0,
    dwChunkStart: 0,
    dwBlockStart: 0,
    dwSampleOffset: 0,
    milliseconds: 0
  }],
};
/**
 * The data of the smpl chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.smpl = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {number} */
  dwManufacturer: 0,
  /** @type {number} */
  dwProduct: 0,
  /** @type {number} */
  dwSamplePeriod: 0,
  /** @type {number} */
  dwMIDIUnityNote: 0,
  /** @type {number} */
  dwMIDIPitchFraction: 0,
  /** @type {number} */
  dwSMPTEFormat: 0,
  /** @type {number} */
  dwSMPTEOffset: 0,
  /** @type {number} */
  dwNumSampleLoops: 0,
  /** @type {number} */
  dwSamplerData: 0,
  /** @type {!Array<!Object>} */
  loops: [
    {
      dwName: '', // a cue point ID
      dwType: 0,
      dwStart: 0,
      dwEnd: 0,
      dwFraction: 0,
      dwPlayCount: 0
    }
  ],
};
/**
 * The data of the bext chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.bext = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {string} */
  description: '',
  /** @type {string} */
  originator: '',
  /** @type {string} */
  originatorReference: '',
  /** @type {string} */
  originationDate: '',
  /** @type {string} */
  originationTime: '',
  /**
   * 2 32-bit values, timeReference high and low
   * @type {!Array<number>}
   */
  timeReference: [0, 0],
  /** @type {number} */
  version: 0,
  /** @type {string} */
  UMID: '',
  /** @type {number} */
  loudnessValue: 0,
  /** @type {number} */
  loudnessRange: 0,
  /** @type {number} */
  maxTruePeakLevel: 0,
  /** @type {number} */
  maxMomentaryLoudness: 0,
  /** @type {number} */
  maxShortTermLoudness: 0,
  /** @type {string} */
  reserved: '',
  /** @type {string} */
  codingHistory: ''
};
/**
 * The data of the ds64 chunk.
 * Used only with RF64 files.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.ds64 = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {number} */
  riffSizeHigh: 0,
  /** @type {number} */
  riffSizeLow: 0,
  /** @type {number} */
  dataSizeHigh: 0,
  /** @type {number} */
  dataSizeLow: 0,
  /** @type {number} */
  originationTime: 0,
  /** @type {number} */
  sampleCountHigh: 0,
  /** @type {number} */
  sampleCountLow: 0
};
/**
 * The data of the data chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.data = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {!Uint8Array} */
  samples: null //
};
/**
 * The data of the LIST chunks.
 * @type {!Array<!Object>}
 */
WaveFileParser.prototype.LIST = [
  {
    chunkId: '',
    chunkSize: 0,
    format: '',
    subChunks: [
      // For format 'INFO'
      {
        chunkId: '',
        chunkSize: 0,
        value: ''
      },
      // For format 'adtl' types 'labl' or 'note'
      {
        chunkId: '',
        chunkSize: 0,
        dwName: 0,
        value: ''
      },
      // For format 'adtl' type 'ltxt'
      {
        chunkId: '',
        value: 0,
        dwName: 0,
        dwSampleLength: 0,
        dwPurposeID: 0,
        dwCountry: 0,
        dwLanguage: 0,
        dwDialect: 0,
        dwCodePage: 0
      }
    ]
  }
];
/**
 * The data of the junk chunk.
 * @type {!Object<string, *>}
 */
WaveFileParser.prototype.junk = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {!Array<number>} */
  chunkData: []
};

/**
 * Set up the WaveFile object from a byte buffer.
 * @param {!Uint8Array} bytes The buffer.
 * @param {boolean=} samples True if the samples should be loaded.
 * @throws {Error} If container is not RIFF, RIFX or RF64.
 * @throws {Error} If no fmt  chunk is found.
 * @throws {Error} If no data chunk is found.
 */
WaveFileParser.prototype.fromBuffer = function(bytes, samples=true) {};

/**
 * Return a byte buffer representig the WaveFileParser object as a .wav file.
 * The return value of this method can be written straight to disk.
 * @return {!Uint8Array} A wav file.
 */
WaveFileParser.prototype.toBuffer = function() {};

/**
 * Reset the chunks of the WaveFileParser instance.
 * @protected
 * @ignore
 */
WaveFileParser.prototype.clearHeaders = function() {};
