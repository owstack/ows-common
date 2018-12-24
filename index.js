'use strict';

var owsCommon = {};

// module information
owsCommon.version = 'v' + require('./package.json').version;

owsCommon.BN = require('./lib/bn');
owsCommon.buffer = require('./lib/buffer');
owsCommon.Constants = require('./lib/constants');
owsCommon.Hash = require('./lib/hash');
owsCommon.Random = require('./lib/random');

// encoding
owsCommon.encoding = {};
owsCommon.encoding.Base32 = require('./lib/encoding/base32');
owsCommon.encoding.Base58 = require('./lib/encoding/base58');
owsCommon.encoding.Base58Check = require('./lib/encoding/base58check');
owsCommon.encoding.BufferReader = require('./lib/encoding/bufferreader');
owsCommon.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
owsCommon.encoding.Varint = require('./lib/encoding/varint');

// utilities
owsCommon.util = {};
owsCommon.util.Context = require('./lib/util/context');
owsCommon.util.js = require('./lib/util/js');
owsCommon.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
owsCommon.errors = require('./lib/errors');

// dependencies, subject to change
owsCommon.deps = {};
owsCommon.deps.bnjs = require('bn.js');
owsCommon.deps.bs58 = require('bs58');
owsCommon.deps.Buffer = Buffer;
owsCommon.deps.lodash = require('lodash');

module.exports = owsCommon;
