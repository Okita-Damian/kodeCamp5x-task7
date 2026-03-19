"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _a, e_1, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var summarizer_1 = require("./src/agents/summarizer");
var stream = await summarizer_1.summarizerAgent.stream([
    { role: "user", content: "wha is you name " },
]);
try {
    for (var _d = true, _e = __asyncValues(stream.textStream), _f; _f = await _e.next(), _a = _f.done, !_a; _d = true) {
        _c = _f.value;
        _d = false;
        var chunk = _c;
        console.log(chunk);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (!_d && !_a && (_b = _e.return)) await _b.call(_e);
    }
    finally { if (e_1) throw e_1.error; }
}
