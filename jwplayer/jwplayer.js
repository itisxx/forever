/*!
JW Player version 8.23.0
Copyright (c) 2021, JW Player, All Rights Reserved 
https://github.com/jwplayer/jwplayer/blob/v8.23.0/README.md

This source code and its use and distribution is subject to the terms and conditions of the applicable license agreement. 
https://www.jwplayer.com/tos/

This product includes portions of other software. For the full text of licenses, see below:

JW Player Third Party Software Notices and/or Additional Terms and Conditions

**************************************************************************************************
The following software is used under Apache License 2.0
**************************************************************************************************

vtt.js v0.13.0
Copyright (c) 2021 Mozilla (http://mozilla.org)
https://github.com/mozilla/vtt.js/blob/v0.13.0/LICENSE

* * *

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and
limitations under the License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under MIT license
**************************************************************************************************

Underscore.js v1.6.0
Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative
https://github.com/jashkenas/underscore/blob/1.6.0/LICENSE

Backbone backbone.events.js v1.1.2
Copyright (c) 2010-2014 Jeremy Ashkenas, DocumentCloud
https://github.com/jashkenas/backbone/blob/1.1.2/LICENSE

Promise Polyfill v7.1.1
Copyright (c) 2014 Taylor Hakes and Forbes Lindesay
https://github.com/taylorhakes/promise-polyfill/blob/v7.1.1/LICENSE

can-autoplay.js v3.0.0
Copyright (c) 2017 video-dev
https://github.com/video-dev/can-autoplay/blob/v3.0.0/LICENSE

focus-options-polyfill v1.5.0
Copyright (c) 2018 Juan Valencia
https://github.com/calvellido/focus-options-polyfill/blob/v1.5.0/LICENSE

* * *

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**************************************************************************************************
The following software is used under W3C license
**************************************************************************************************

Intersection Observer v0.5.0
Copyright (c) 2016 Google Inc. (http://google.com)
https://github.com/w3c/IntersectionObserver/blob/v0.5.0/LICENSE.md

* * *

W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE
Status: This license takes effect 13 May, 2015.

This work is being provided by the copyright holders under the following license.

License
By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.

Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software and Document Short Notice should be included.

Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from [title and URI of the W3C document]. Copyright © [YEAR] W3C® (MIT, ERCIM, Keio, Beihang)."

Disclaimers
THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.
*/
window.jwplayer = function (t) {
    function e(e) {
        for (var n, i, o = e[0], u = e[1], a = 0, s = []; a < o.length; a++) i = o[a], Object.prototype.hasOwnProperty
            .call(r, i) && r[i] && s.push(r[i][0]), r[i] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
        for (c && c(e); s.length;) s.shift()()
    }
    var n = {},
        r = {
            0: 0
        };

    function i(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function (t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise((function (e, i) {
                    n = r[t] = [e, i]
                }));
                e.push(n[2] = o);
                var u, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function (
                    t) {
                    return i.p + "" + ({
                        1: "jwplayer.controls",
                        2: "jwplayer.controls.tizen",
                        3: "jwplayer.core",
                        4: "jwplayer.core.controls",
                        5: "jwplayer.core.controls.html5",
                        6: "jwplayer.core.controls.polyfills",
                        7: "jwplayer.core.controls.polyfills.html5",
                        8: "polyfills.intersection-observer",
                        9: "polyfills.webvtt",
                        10: "provider.html5",
                        11: "vttparser"
                    } [t] || t) + ".js"
                }(t);
                var c = new Error;
                u = function (e) {
                    a.onerror = a.onload = null, clearTimeout(s);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", c.name =
                                "ChunkLoadError", c.type = i, c.request = o, n[1](c)
                        }
                        r[t] = void 0
                    }
                };
                var s = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: a
                    })
                }), 12e4);
                a.onerror = a.onload = u, document.head.appendChild(a)
            } return Promise.all(e)
    }, i.m = t, i.c = n, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i.oe = function (t) {
        throw console.error(t), t
    };
    var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [],
        u = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var a = 0; a < o.length; a++) e(o[a]);
    var c = u;
    return i(i.s = 56)
}([function (t, e, n) {
    "use strict";
    n.d(e, "f", (function () {
        return k
    })), n.d(e, "v", (function () {
        return P
    })), n.d(e, "i", (function () {
        return F
    })), n.d(e, "h", (function () {
        return L
    })), n.d(e, "z", (function () {
        return Q
    })), n.d(e, "b", (function () {
        return H
    })), n.d(e, "j", (function () {
        return U
    })), n.d(e, "e", (function () {
        return Y
    })), n.d(e, "l", (function () {
        return $
    })), n.d(e, "a", (function () {
        return G
    })), n.d(e, "A", (function () {
        return nt
    })), n.d(e, "m", (function () {
        return ot
    })), n.d(e, "d", (function () {
        return ut
    })), n.d(e, "g", (function () {
        return at
    })), n.d(e, "x", (function () {
        return ct
    })), n.d(e, "p", (function () {
        return ht
    })), n.d(e, "r", (function () {
        return gt
    })), n.d(e, "s", (function () {
        return vt
    })), n.d(e, "o", (function () {
        return mt
    })), n.d(e, "q", (function () {
        return bt
    })), n.d(e, "n", (function () {
        return yt
    })), n.d(e, "t", (function () {
        return wt
    })), n.d(e, "k", (function () {
        return Ot
    })), n.d(e, "y", (function () {
        return kt
    })), n.d(e, "w", (function () {
        return Ct
    })), n.d(e, "u", (function () {
        return xt
    }));
    var r = n(16),
        i = {},
        o = Array.prototype,
        u = Object.prototype,
        a = Function.prototype,
        c = o.slice,
        s = o.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        d = o.map,
        p = o.reduce,
        h = o.forEach,
        g = o.filter,
        v = o.every,
        m = o.some,
        b = o.indexOf,
        y = Array.isArray,
        w = Object.keys,
        j = a.bind,
        O = window.isFinite,
        k = function (t, e, n) {
            var r, o;
            if (null == t) return t;
            if (h && t.forEach === h) t.forEach(e, n);
            else if (t.length === +t.length) {
                for (r = 0, o = t.length; r < o; r++)
                    if (e.call(n, t[r], r, t) === i) return
            } else {
                var u = rt(t);
                for (r = 0, o = u.length; r < o; r++)
                    if (e.call(n, t[u[r]], u[r], t) === i) return
            }
            return t
        },
        C = k,
        P = function (t, e, n) {
            var r = [];
            return null == t ? r : d && t.map === d ? t.map(e, n) : (k(t, (function (t, i, o) {
                r.push(e.call(n, t, i, o))
            })), r)
        },
        x = P,
        S = "Reduce of empty array with no initial value",
        E = function (t, e, n, r) {
            var i = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return r && (e = G(e, r)), i ? t.reduce(e, n) :
                t.reduce(e);
            if (k(t, (function (t, o, u) {
                    i ? n = e.call(r, n, t, o, u) : (n = t, i = !0)
                })), !i) throw new TypeError(S);
            return n
        },
        T = E,
        A = E,
        F = function (t, e, n) {
            var r;
            return R(t, (function (t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            })), r
        },
        _ = F,
        L = function (t, e, n) {
            var r = [];
            return null == t ? r : g && t.filter === g ? t.filter(e, n) : (k(t, (function (t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            })), r)
        },
        I = L,
        M = function (t, e, n) {
            e || (e = Ot);
            var r = !0;
            return null == t ? r : v && t.every === v ? t.every(e, n) : (k(t, (function (t, o, u) {
                if (!(r = r && e.call(n, t, o, u))) return i
            })), !!r)
        },
        N = M,
        R = function (t, e, n) {
            e || (e = Ot);
            var r = !1;
            return null == t ? r : m && t.some === m ? t.some(e, n) : (k(t, (function (t, o, u) {
                if (r || (r = e.call(n, t, o, u))) return i
            })), !!r)
        },
        D = R,
        q = function (t, e) {
            var n;
            return function () {
                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
            }
        },
        B = function (t) {
            return null == t ? Ot : ht(t) ? t : kt(t)
        },
        z = function (t) {
            return function (e, n, r) {
                var i = {};
                return n = B(n), k(e, (function (o, u) {
                    var a = n.call(r, o, u, e);
                    t(i, a, o)
                })), i
            }
        },
        V = z((function (t, e, n) {
            jt(t, e) ? t[e].push(n) : t[e] = [n]
        })),
        W = z((function (t, e, n) {
            t[e] = n
        })),
        Q = function (t, e, n, r) {
            for (var i = (n = B(n)).call(r, e), o = 0, u = t.length; o < u;) {
                var a = o + u >>> 1;
                n.call(r, t[a]) < i ? o = a + 1 : u = a
            }
            return o
        },
        H = function (t, e) {
            return null != t && (t.length !== +t.length && (t = it(t)), $(t, e) >= 0)
        },
        X = H,
        U = function (t, e) {
            return F(t, Ct(e))
        },
        Y = function (t) {
            var e = s.apply(o, c.call(arguments, 1));
            return L(t, (function (t) {
                return !H(e, t)
            }))
        },
        $ = function (t, e, n) {
            if (null == t) return -1;
            var r = 0,
                i = t.length;
            if (n) {
                if ("number" != typeof n) return t[r = Q(t, e)] === e ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (b && t.indexOf === b) return t.indexOf(e, n);
            for (; r < i; r++)
                if (t[r] === e) return r;
            return -1
        },
        J = function () {},
        G = function (t, e) {
            var n, r;
            if (j && t.bind === j) return j.apply(t, c.call(arguments, 1));
            if (!ht(t)) throw new TypeError;
            return n = c.call(arguments, 2), r = function () {
                if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
                J.prototype = t.prototype;
                var i = new J;
                J.prototype = null;
                var o = t.apply(i, n.concat(c.call(arguments)));
                return Object(o) === o ? o : i
            }
        },
        K = function (t) {
            var e = c.call(arguments, 1);
            return function () {
                for (var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++) jt(r[i], "partial") &&
                    (r[i] = arguments[n++]);
                for (; n < arguments.length;) r.push(arguments[n++]);
                return t.apply(this, r)
            }
        },
        Z = K(q, 2),
        tt = function (t, e) {
            var n = c.call(arguments, 2);
            return setTimeout((function () {
                return t.apply(null, n)
            }), e)
        },
        et = K(tt, {
            partial: K
        }, 1),
        nt = function (t, e, n) {
            var r, i, o, u = null,
                a = 0;
            n || (n = {});
            var c = function () {
                a = !1 === n.leading ? 0 : Pt(), u = null, o = t.apply(r, i), r = i = null
            };
            return function () {
                var s = Pt();
                a || !1 !== n.leading || (a = s);
                var l = e - (s - a);
                return r = this, i = arguments, l <= 0 ? (clearTimeout(u), u = null, a = s, o = t.apply(
                    r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, l)), o
            }
        },
        rt = function (t) {
            if (!lt(t)) return [];
            if (w) return w(t);
            var e = [];
            for (var n in t) jt(t, n) && e.push(n);
            return e
        },
        it = function (t) {
            for (var e = rt(t), n = rt.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
            return r
        },
        ot = function (t) {
            for (var e = {}, n = rt(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
            return e
        },
        ut = function (t) {
            return k(c.call(arguments, 1), (function (e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            })), t
        },
        at = Object.assign || function (t) {
            return k(c.call(arguments, 1), (function (e) {
                if (e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })), t
        },
        ct = function (t) {
            var e = {},
                n = s.apply(o, c.call(arguments, 1));
            return k(n, (function (n) {
                n in t && (e[n] = t[n])
            })), e
        },
        st = y || function (t) {
            return "[object Array]" == l.call(t)
        },
        lt = function (t) {
            return t === Object(t)
        },
        ft = [];
    k(["Function", "String", "Number", "Date", "RegExp"], (function (t) {
        ft[t] = function (e) {
            return l.call(e) == "[object " + t + "]"
        }
    })), ft.Function = function (t) {
        return "function" == typeof t
    };
    var dt = ft.Date,
        pt = ft.RegExp,
        ht = ft.Function,
        gt = ft.Number,
        vt = ft.String,
        mt = function (t) {
            return O(t) && !bt(parseFloat(t))
        },
        bt = function (t) {
            return gt(t) && t != +t
        },
        yt = function (t) {
            return !0 === t || !1 === t || "[object Boolean]" == l.call(t)
        },
        wt = function (t) {
            return void 0 === t
        },
        jt = function (t, e) {
            return f.call(t, e)
        },
        Ot = function (t) {
            return t
        },
        kt = function (t) {
            return function (e) {
                return e[t]
            }
        },
        Ct = function (t) {
            return function (e) {
                if (e === t) return !0;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }
        },
        Pt = r.a,
        xt = function (t) {
            return gt(t) && !bt(t)
        };
    e.c = {
        after: function (t, e) {
            return function () {
                if (--t < 1) return e.apply(this, arguments)
            }
        },
        all: M,
        any: R,
        before: q,
        bind: G,
        clone: function (t) {
            return lt(t) ? st(t) ? t.slice() : at({}, t) : t
        },
        collect: x,
        compact: function (t) {
            return L(t, Ot)
        },
        constant: function (t) {
            return function () {
                return t
            }
        },
        contains: H,
        debounce: function (t, e) {
            var n;
            return void 0 === e && (e = 100),
                function () {
                    for (var r = this, i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[
                        u] = arguments[u];
                    clearTimeout(n), n = setTimeout((function () {
                        t.apply(r, o)
                    }), e)
                }
        },
        defaults: ut,
        defer: et,
        delay: tt,
        detect: _,
        difference: Y,
        each: k,
        every: N,
        extend: at,
        filter: L,
        find: F,
        findWhere: U,
        foldl: T,
        forEach: C,
        groupBy: V,
        has: jt,
        identity: Ot,
        include: X,
        indexBy: W,
        indexOf: $,
        inject: A,
        invert: ot,
        isArray: st,
        isBoolean: yt,
        isDate: dt,
        isFinite: mt,
        isFunction: ht,
        isNaN: bt,
        isNull: function (t) {
            return null === t
        },
        isNumber: gt,
        isObject: lt,
        isRegExp: pt,
        isString: vt,
        isUndefined: wt,
        isValidNumber: xt,
        keys: rt,
        last: function (t, e, n) {
            if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length -
                e, 0))
        },
        map: P,
        matches: Ct,
        max: function (t, e, n) {
            if (!e && st(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            var r = -1 / 0,
                i = -1 / 0;
            return k(t, (function (t, o, u) {
                var a = e ? e.call(n, t, o, u) : t;
                a > i && (r = t, i = a)
            })), r
        },
        memoize: function (t, e) {
            var n = {};
            return e || (e = Ot),
                function () {
                    var r = e.apply(this, arguments);
                    return jt(n, r) ? n[r] : n[r] = t.apply(this, arguments)
                }
        },
        now: Pt,
        omit: function (t) {
            var e = {},
                n = s.apply(o, c.call(arguments, 1));
            for (var r in t) H(n, r) || (e[r] = t[r]);
            return e
        },
        once: Z,
        partial: K,
        pick: ct,
        pluck: function (t, e) {
            return P(t, kt(e))
        },
        property: kt,
        propertyOf: function (t) {
            return null == t ? function () {} : function (e) {
                return t[e]
            }
        },
        reduce: E,
        reject: function (t, e, n) {
            return L(t, (function (t, r, i) {
                return !e.call(n, t, r, i)
            }), n)
        },
        result: function (t, e) {
            if (null != t) {
                var n = t[e];
                return ht(n) ? n.call(t) : n
            }
        },
        select: I,
        size: function (t) {
            return null == t ? 0 : t.length === +t.length ? t.length : rt(t).length
        },
        some: D,
        sortedIndex: Q,
        throttle: nt,
        where: function (t, e) {
            return L(t, Ct(e))
        },
        without: function (t) {
            return Y(t, c.call(arguments, 1))
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "v", (function () {
        return i
    })), n.d(e, "u", (function () {
        return o
    })), n.d(e, "t", (function () {
        return u
    })), n.d(e, "q", (function () {
        return a
    })), n.d(e, "r", (function () {
        return c
    })), n.d(e, "p", (function () {
        return s
    })), n.d(e, "b", (function () {
        return l
    })), n.d(e, "d", (function () {
        return f
    })), n.d(e, "s", (function () {
        return d
    })), n.d(e, "e", (function () {
        return p
    })), n.d(e, "i", (function () {
        return h
    })), n.d(e, "a", (function () {
        return g
    })), n.d(e, "f", (function () {
        return v
    })), n.d(e, "c", (function () {
        return m
    })), n.d(e, "g", (function () {
        return b
    })), n.d(e, "h", (function () {
        return y
    })), n.d(e, "l", (function () {
        return w
    })), n.d(e, "j", (function () {
        return j
    })), n.d(e, "k", (function () {
        return O
    })), n.d(e, "m", (function () {
        return k
    })), n.d(e, "n", (function () {
        return C
    })), n.d(e, "o", (function () {
        return P
    })), n.d(e, "x", (function () {
        return x
    })), n.d(e, "w", (function () {
        return S
    })), n.d(e, "y", (function () {
        return E
    }));
    var r = n(0),
        i = 1e5,
        o = 100001,
        u = 100002,
        a = 101e3,
        c = 102e3,
        s = 102700,
        l = 200001,
        f = 202e3,
        d = 104e3,
        p = 203e3,
        h = 203640,
        g = 203700,
        v = 204e3,
        m = 306e3,
        b = 308e3,
        y = 308640,
        w = "cantPlayVideo",
        j = "badConnection",
        O = "cantLoadPlayer",
        k = "liveStreamDown",
        C = "technicalError",
        P = function () {
            function t(t, e, n) {
                this.code = Object(r.u)(e) ? e : 0, this.sourceError = n || null, t && (this.key = t)
            }
            return t.logMessage = function (t) {
                var e = t % 1e3,
                    n = Math.floor((t - e) / 1e3),
                    r = t.toString();
                return e >= 400 && e < 600 && (r = n + "400-" + n + "599"), "JW Player " + (t > 299999 &&
                        t < 4e5 ? "Warning" : "Error") + " " + t +
                    ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" +
                    r
            }, t
        }();

    function x(t, e, n) {
        return n instanceof P && n.code ? n : new P(t, e, n)
    }

    function S(t, e) {
        var n = x(C, e, t);
        return n.code = (t && t instanceof P && t.code || 0) + e, n
    }

    function E(t) {
        var e = t.name,
            n = t.message;
        switch (e) {
            case "AbortError":
                return /pause/.test(n) ? 303213 : /load/.test(n) ? 303212 : 303210;
            case "NotAllowedError":
                return 303220;
            case "NotSupportedError":
                return 303230;
            default:
                return 303200
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "i", (function () {
        return o
    })), n.d(e, "e", (function () {
        return u
    })), n.d(e, "j", (function () {
        return a
    })), n.d(e, "a", (function () {
        return c
    })), n.d(e, "b", (function () {
        return s
    })), n.d(e, "g", (function () {
        return l
    })), n.d(e, "d", (function () {
        return f
    })), n.d(e, "f", (function () {
        return d
    })), n.d(e, "h", (function () {
        return p
    })), n.d(e, "c", (function () {
        return h
    }));
    var r = n(0),
        i = window.parseFloat;

    function o(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }

    function u(t, e, n) {
        for (t = "" + t, n = n || "0"; t.length < e;) t = n + t;
        return t
    }

    function a(t, e) {
        for (var n = t.attributes, r = 0; r < n.length; r++)
            if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
        return ""
    }

    function c(t) {
        if (!t || "rtmp" === t.substr(0, 4)) return "";
        var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
        if (e) return e[1];
        var n = t.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1");
        return n !== t ? n.toLowerCase() : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(
            t.lastIndexOf(".") + 1, t.length).toLowerCase() : ""
    }

    function s(t) {
        var e = (t / 60 | 0) % 60,
            n = t % 60;
        return u((t / 3600 | 0).toString(), 2) + ":" + u(e.toString(), 2) + ":" + u(n.toFixed(3), 6)
    }

    function l(t, e) {
        if (!t) return 0;
        if (Object(r.u)(t)) return t;
        var n = t.replace(",", "."),
            o = n.slice(-1),
            u = n.split(":"),
            a = u.length,
            c = 0;
        if ("s" === o) c = i(n);
        else if ("m" === o) c = 60 * i(n);
        else if ("h" === o) c = 3600 * i(n);
        else if (a > 1) {
            var s = a - 1;
            4 === a && (e && (c = i(u[s]) / e), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c +=
                3600 * i(u[s - 2]))
        } else c = i(n);
        return Object(r.u)(c) ? c : 0
    }

    function f(t, e, n) {
        if (Object(r.s)(t) && "%" === t.slice(-1)) {
            var o = i(t);
            return e && Object(r.u)(e) && Object(r.u)(o) ? e * o / 100 : null
        }
        return l(t, n)
    }

    function d(t, e) {
        return t.map((function (t) {
            return e + t
        }))
    }

    function p(t, e) {
        return t.map((function (t) {
            return t + e
        }))
    }

    function h(t) {
        return !!t && Object(r.s)(t) && "%" === t.slice(-1)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "jb", (function () {
        return r
    })), n.d(e, "mb", (function () {
        return i
    })), n.d(e, "kb", (function () {
        return o
    })), n.d(e, "ob", (function () {
        return u
    })), n.d(e, "pb", (function () {
        return a
    })), n.d(e, "lb", (function () {
        return c
    })), n.d(e, "nb", (function () {
        return s
    })), n.d(e, "qb", (function () {
        return l
    })), n.d(e, "s", (function () {
        return f
    })), n.d(e, "u", (function () {
        return d
    })), n.d(e, "t", (function () {
        return p
    })), n.d(e, "o", (function () {
        return h
    })), n.d(e, "r", (function () {
        return g
    })), n.d(e, "Z", (function () {
        return v
    })), n.d(e, "W", (function () {
        return m
    })), n.d(e, "v", (function () {
        return b
    })), n.d(e, "Y", (function () {
        return y
    })), n.d(e, "w", (function () {
        return w
    })), n.d(e, "ub", (function () {
        return j
    })), n.d(e, "a", (function () {
        return O
    })), n.d(e, "b", (function () {
        return k
    })), n.d(e, "c", (function () {
        return C
    })), n.d(e, "d", (function () {
        return P
    })), n.d(e, "e", (function () {
        return x
    })), n.d(e, "f", (function () {
        return S
    })), n.d(e, "i", (function () {
        return E
    })), n.d(e, "F", (function () {
        return T
    })), n.d(e, "gb", (function () {
        return A
    })), n.d(e, "Q", (function () {
        return F
    })), n.d(e, "C", (function () {
        return _
    })), n.d(e, "B", (function () {
        return L
    })), n.d(e, "E", (function () {
        return I
    })), n.d(e, "q", (function () {
        return M
    })), n.d(e, "cb", (function () {
        return N
    })), n.d(e, "n", (function () {
        return R
    })), n.d(e, "G", (function () {
        return D
    })), n.d(e, "H", (function () {
        return q
    })), n.d(e, "N", (function () {
        return B
    })), n.d(e, "O", (function () {
        return z
    })), n.d(e, "R", (function () {
        return V
    })), n.d(e, "ib", (function () {
        return W
    })), n.d(e, "bb", (function () {
        return Q
    })), n.d(e, "D", (function () {
        return H
    })), n.d(e, "S", (function () {
        return X
    })), n.d(e, "P", (function () {
        return U
    })), n.d(e, "T", (function () {
        return Y
    })), n.d(e, "V", (function () {
        return $
    })), n.d(e, "M", (function () {
        return J
    })), n.d(e, "L", (function () {
        return G
    })), n.d(e, "K", (function () {
        return K
    })), n.d(e, "I", (function () {
        return Z
    })), n.d(e, "J", (function () {
        return tt
    })), n.d(e, "U", (function () {
        return et
    })), n.d(e, "p", (function () {
        return nt
    })), n.d(e, "y", (function () {
        return rt
    })), n.d(e, "hb", (function () {
        return it
    })), n.d(e, "db", (function () {
        return ot
    })), n.d(e, "eb", (function () {
        return ut
    })), n.d(e, "g", (function () {
        return at
    })), n.d(e, "h", (function () {
        return ct
    })), n.d(e, "rb", (function () {
        return st
    })), n.d(e, "sb", (function () {
        return lt
    })), n.d(e, "ab", (function () {
        return ft
    })), n.d(e, "A", (function () {
        return dt
    })), n.d(e, "m", (function () {
        return pt
    })), n.d(e, "l", (function () {
        return ht
    })), n.d(e, "fb", (function () {
        return gt
    })), n.d(e, "tb", (function () {
        return vt
    })), n.d(e, "z", (function () {
        return mt
    })), n.d(e, "k", (function () {
        return bt
    })), n.d(e, "X", (function () {
        return yt
    })), n.d(e, "j", (function () {
        return wt
    })), n.d(e, "x", (function () {
        return jt
    }));
    var r = "buffering",
        i = "idle",
        o = "complete",
        u = "paused",
        a = "playing",
        c = "error",
        s = "loading",
        l = "stalled",
        f = "drag",
        d = "dragStart",
        p = "dragEnd",
        h = "click",
        g = "doubleClick",
        v = "over",
        m = "move",
        b = "enter",
        y = "out",
        w = c,
        j = "warning",
        O = "adClick",
        k = "mediaLoaded",
        C = "adPause",
        P = "adPlay",
        x = "adSkipped",
        S = "adTime",
        E = "autostartNotAllowed",
        T = o,
        A = "ready",
        F = "seek",
        _ = "beforePlay",
        L = "beforeComplete",
        I = "bufferFull",
        M = "displayClick",
        N = "playlistComplete",
        R = "cast",
        D = "mediaError",
        q = "firstFrame",
        B = "playAttempt",
        z = "playAttemptFailed",
        V = "seeked",
        W = "setupError",
        Q = "state",
        H = "bufferChange",
        X = "time",
        U = "ratechange",
        Y = "mediaType",
        $ = "volume",
        J = "mute",
        G = "metadataCueParsed",
        K = "meta",
        Z = "levels",
        tt = "levelsChanged",
        et = "visualQuality",
        nt = "controls",
        rt = "fullscreen",
        it = "resize",
        ot = "playlistItem",
        ut = "playlist",
        at = "audioTracks",
        ct = "audioTrackChanged",
        st = "subtitlesTracks",
        lt = "subtitlesTrackChanged",
        ft = "playbackRateChanged",
        dt = "logoClick",
        pt = "captionsList",
        ht = "captionsChanged",
        gt = "providerFirstFrame",
        vt = "userAction",
        mt = "instreamClick",
        bt = "breakpoint",
        yt = "fullscreenchange",
        wt = "bandwidthEstimate",
        jt = "float"
}, function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return i
    })), n.d(e, "d", (function () {
        return o
    })), n.d(e, "a", (function () {
        return u
    })), n.d(e, "c", (function () {
        return a
    }));
    var r = n(2);

    function i(t) {
        var e = "";
        return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)), e
    }

    function o(t) {
        var e = "";
        return t && (t.textContent ? e = Object(r.i)(t.textContent) : t.text && (e = Object(r.i)(t.text))),
            e
    }

    function u(t, e) {
        return t.childNodes[e]
    }

    function a(t) {
        return t.childNodes ? t.childNodes.length : 0
    }
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return null !== navigator.userAgent.match(t)
    }
    n.d(e, "f", (function () {
        return o
    })), n.d(e, "l", (function () {
        return u
    })), n.d(e, "k", (function () {
        return a
    })), n.d(e, "p", (function () {
        return c
    })), n.d(e, "g", (function () {
        return s
    })), n.d(e, "e", (function () {
        return l
    })), n.d(e, "n", (function () {
        return f
    })), n.d(e, "r", (function () {
        return d
    })), n.d(e, "s", (function () {
        return p
    })), n.d(e, "d", (function () {
        return h
    })), n.d(e, "i", (function () {
        return g
    })), n.d(e, "q", (function () {
        return v
    })), n.d(e, "j", (function () {
        return m
    })), n.d(e, "c", (function () {
        return b
    })), n.d(e, "b", (function () {
        return y
    })), n.d(e, "o", (function () {
        return w
    })), n.d(e, "m", (function () {
        return j
    })), n.d(e, "h", (function () {
        return O
    })), n.d(e, "a", (function () {
        return k
    }));
    var i = function () {
            return "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        },
        o = function () {
            return r(/firefox\//i)
        },
        u = function () {
            return r(/iP(hone|od)/i)
        },
        a = function () {
            return r(/iPad/i) || i()
        },
        c = function () {
            return r(/Macintosh/i) && !i()
        },
        s = function () {
            return r(/FBAV/i)
        },
        l = function () {
            return r(/\sEdge?\/\d+/i)
        },
        f = function () {
            return r(/msie/i)
        },
        d = function () {
            return r(/SMART-TV/)
        },
        p = function () {
            return d() && !r(/SamsungBrowser/)
        },
        h = function () {
            return r(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !l() && !r(/UCBrowser/i)
        },
        g = function () {
            return !r(/\sEdg\/\d+/i) && (l() || r(/trident\/.+rv:\s*11/i) || f())
        },
        v = function () {
            return r(/safari/i) && !r(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !d()
        },
        m = function () {
            return r(/iP(hone|ad|od)/i) || i()
        };

    function b() {
        return !(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !o()) && y()
    }
    var y = function () {
            return r(/Android/i) && !r(/Windows Phone/i)
        },
        w = function () {
            return m() || y() || r(/Windows Phone/i)
        };

    function j() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    }
    var O = function () {
            return !1
        },
        k = function () {
            return 0
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "j", (function () {
        return s
    })), n.d(e, "f", (function () {
        return l
    })), n.d(e, "r", (function () {
        return f
    })), n.d(e, "k", (function () {
        return d
    })), n.d(e, "t", (function () {
        return p
    })), n.d(e, "s", (function () {
        return g
    })), n.d(e, "v", (function () {
        return v
    })), n.d(e, "e", (function () {
        return y
    })), n.d(e, "b", (function () {
        return w
    })), n.d(e, "p", (function () {
        return j
    })), n.d(e, "q", (function () {
        return O
    })), n.d(e, "w", (function () {
        return k
    })), n.d(e, "u", (function () {
        return C
    })), n.d(e, "i", (function () {
        return P
    })), n.d(e, "c", (function () {
        return x
    })), n.d(e, "h", (function () {
        return S
    })), n.d(e, "d", (function () {
        return E
    })), n.d(e, "n", (function () {
        return T
    })), n.d(e, "l", (function () {
        return A
    })), n.d(e, "o", (function () {
        return F
    })), n.d(e, "m", (function () {
        return _
    })), n.d(e, "g", (function () {
        return L
    })), n.d(e, "a", (function () {
        return I
    }));
    var r, i = n(0),
        o = n(2),
        u = n(7),
        a = window.DOMParser,
        c = !0;

    function s(t, e) {
        return t.classList.contains(e)
    }

    function l(t) {
        return d(t).firstChild
    }

    function f(t, e) {
        P(t),
            function (t, e) {
                if (!e) return;
                for (var n = document.createDocumentFragment(), r = d(e).childNodes, i = 0; i < r.length; i++)
                    n.appendChild(r[i].cloneNode(!0));
                t.appendChild(n)
            }(t, e)
    }

    function d(t) {
        var e = function (t) {
            r || (r = new a, c = function () {
                try {
                    if (r.parseFromString("", "text/html")) return !0
                } catch (t) {}
                return !1
            }());
            if (c) return r.parseFromString(t, "text/html").body;
            var e = document.implementation.createHTMLDocument("");
            t.toLowerCase().indexOf("<!doctype") > -1 ? e.documentElement.innerHTML = t : e.body.innerHTML =
                t;
            return e.body
        }(t);
        p(e);
        for (var n = e.querySelectorAll("*"), i = n.length; i--;) {
            g(n[i])
        }
        return e
    }

    function p(t) {
        for (var e = t.querySelectorAll("script,object,iframe,meta"), n = e.length; n--;) {
            var r = e[n];
            r.parentNode.removeChild(r)
        }
        return t
    }
    var h = new RegExp(
        /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/
    );

    function g(t) {
        for (var e = t.attributes, n = e.length; n--;) {
            var r = e[n].name;
            if (/^on/.test(r) && t.removeAttribute(r), /href/.test(r)) {
                var i = e[n].value;
                ///javascript:|javascript:/.test(i) || !h.test(i) ? t.removeAttribute(r) : console.warn("Invalid or unsafe URL")
            }
        }
        return t
    }

    function v(t) {
        return t + (t.toString().indexOf("%") > 0 ? "" : "px")
    }

    function m(t) {
        return Object(i.s)(t.className) ? t.className.split(" ") : []
    }

    function b(t, e) {
        e = Object(o.i)(e), t.className !== e && (t.className = e)
    }

    function y(t) {
        return t.classList ? t.classList : m(t)
    }

    function w(t, e) {
        var n = m(t);
        (Array.isArray(e) ? e : e.split(" ")).forEach((function (t) {
            Object(i.b)(n, t) || n.push(t)
        })), b(t, n.join(" "))
    }

    function j(t, e) {
        var n = m(t),
            r = Array.isArray(e) ? e : e.split(" ");
        b(t, Object(i.e)(n, r).join(" "))
    }

    function O(t, e, n) {
        var r = t.className || "";
        e.test(r) ? r = r.replace(e, n) : n && (r += " " + n), b(t, r)
    }

    function k(t, e, n) {
        var r = s(t, e);
        (n = Object(i.n)(n) ? n : !r) !== r && (n ? w(t, e) : j(t, e))
    }

    function C(t, e, n) {
        t.setAttribute(e, n)
    }

    function P(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function x(t) {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
    }

    function S(t) {
        t && P(t)
    }

    function E(t) {
        var e = {
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            top: 0,
            bottom: 0
        };
        if (!t || !document.body.contains(t)) return e;
        var n = t.getBoundingClientRect(),
            r = window.pageYOffset,
            i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (e.left = n.left + i, e.right = n.right + i, e.top =
            n.top + r, e.bottom = n.bottom + r, e.width = n.right - n.left, e.height = n.bottom - n.top,
            e) : e
    }

    function T(t, e) {
        t.insertBefore(e, t.firstChild)
    }

    function A(t) {
        return t.nextElementSibling
    }

    function F(t) {
        return t.previousElementSibling
    }

    function _(t, e, n) {
        if (void 0 === n && (n = {}), h.test(t)) {
            var r = document.createElement("a");
            r.href = t, r.target = e, r = g(Object(i.g)(r, n)), u.Browser.firefox ? r.dispatchEvent(new MouseEvent(
                "click", {
                    bubbles: !0,
                    cancelable: !0,
                    view: window
                })) : r.click()
        }
    }

    function L() {
        var t = window.screen.orientation;
        return !!t && ("landscape-primary" === t.type || "landscape-secondary" === t.type) || 90 === window
            .orientation || -90 === window.orientation
    }

    function I(t) {
        return function (t) {
            var e = document.createElement("textarea");
            return e.innerHTML = t, e.value
        }(t).replace(/&|<|>|"|''/gm, (function (t) {
            return "&#" + t.charCodeAt(0) + ";"
        })).replace(/<(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)>/gim, "<$1$2>")
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(5);

    function i(t, e) {
        var n = t.exec(e);
        if (n && n.length > 1) return n[1]
    }
    n.d(e, "Browser", (function () {
        return a
    })), n.d(e, "OS", (function () {
        return c
    })), n.d(e, "Features", (function () {
        return s
    }));
    var o = navigator.userAgent,
        u = function () {};
    var a = {
            get androidNative() {
                return Object(r.c)()
            },
            get chrome() {
                return Object(r.d)()
            },
            get edge() {
                return Object(r.e)()
            },
            get facebook() {
                return Object(r.g)()
            },
            get firefox() {
                return Object(r.f)()
            },
            get ie() {
                return Object(r.i)()
            },
            get msie() {
                return Object(r.n)()
            },
            get safari() {
                return Object(r.q)()
            },
            get version() {
                return function (t, e) {
                    var n, r, i, o;
                    if (t.chrome) n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") +
                        7) : e.substring(e.indexOf("CriOS") + 6);
                    else if (t.safari) n = e.substring(e.indexOf("Version") + 8);
                    else if (t.firefox) n = e.substring(e.indexOf("Firefox") + 8);
                    else if (t.edge) {
                        var u = e.indexOf("Edge"); - 1 === u ? u = e.indexOf("Edg") + 4 : u += 5, n =
                            e.substring(u)
                    } else t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) :
                        -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5)));
                    return n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o =
                        n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(
                        ")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(
                        n.split(".")[1], 10)), {
                        version: n,
                        major: r,
                        minor: i
                    }
                }(this, o)
            }
        },
        c = {
            get android() {
                return Object(r.b)()
            },
            get iOS() {
                return Object(r.j)()
            },
            get mobile() {
                return Object(r.o)()
            },
            get mac() {
                return Object(r.p)()
            },
            get iPad() {
                return Object(r.k)()
            },
            get iPhone() {
                return Object(r.l)()
            },
            get windows() {
                return o.indexOf("Windows") > -1
            },
            get tizen() {
                return Object(r.r)()
            },
            get tizenApp() {
                return Object(r.s)()
            },
            get version() {
                return function (t, e) {
                    var n, r, o;
                    if (t.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/, e)) {
                        case "6.1":
                            n = "7.0";
                            break;
                        case "6.2":
                            n = "8.0";
                            break;
                        case "6.3":
                            n = "8.1"
                    } else t.android ? n = i(/Android ([._\d]+)/, e) : t.iOS ? n = i(
                            /OS ([._\d]+)/, e) : t.mac ? n = i(/Mac OS X ([._\d]+)/, e) : t.tizen &&
                        (n = i(/Tizen ([._\d]+)/, e));
                    if (n) {
                        r = parseInt(n, 10);
                        var u = n.split(/[._]/);
                        u && (o = parseInt(u[1], 10))
                    }
                    return {
                        version: n,
                        major: r,
                        minor: o
                    }
                }(this, o)
            }
        },
        s = {
            get flash() {
                return Object(r.h)()
            },
            get flashVersion() {
                return Object(r.a)()
            },
            get iframe() {
                return Object(r.m)()
            },
            get passiveEvents() {
                return function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                return t = !0
                            }
                        });
                        window.addEventListener("testPassive", u, e), window.removeEventListener(
                            "testPassive", u, e)
                    } catch (t) {}
                    return t
                }()
            },
            get backgroundLoading() {
                return !(c.iOS || a.safari || c.tizen)
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    })), n.d(e, "c", (function () {
        return i
    })), n.d(e, "d", (function () {
        return o
    })), n.d(e, "b", (function () {
        return u
    })), n.d(e, "e", (function () {
        return a
    })), n.d(e, "f", (function () {
        return c
    }));
    var r = function () {
            function t() {}
            var e = t.prototype;
            return e.on = function (t, e, n) {
                if (!l(this, "on", t, [e, n]) || !e) return this;
                var r = this._events || (this._events = {});
                return (r[t] || (r[t] = [])).push({
                    callback: e,
                    context: n
                }), this
            }, e.once = function (t, e, n) {
                if (!l(this, "once", t, [e, n]) || !e) return this;
                var r = 0,
                    i = this,
                    o = function n() {
                        r++ || (i.off(t, n), e.apply(this, arguments))
                    };
                return o._callback = e, this.on(t, o, n)
            }, e.off = function (t, e, n) {
                if (!this._events || !l(this, "off", t, [e, n])) return this;
                if (!t && !e && !n) return delete this._events, this;
                for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
                    t = r[i];
                    var u = this._events[t];
                    if (u) {
                        var a = this._events[t] = [];
                        if (e || n)
                            for (var c = 0, s = u.length; c < s; c++) {
                                var f = u[c];
                                (e && e !== f.callback && e !== f.callback._callback || n && n !== f.context) &&
                                a.push(f)
                            }
                        a.length || delete this._events[t]
                    }
                }
                return this
            }, e.trigger = function (t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r -
                    1] = arguments[r];
                if (!this._events) return this;
                if (!l(this, "trigger", t, n)) return this;
                var i = this._events[t],
                    o = this._events.all;
                return i && f(i, n, this), o && f(o, arguments, this), this
            }, e.triggerSafe = function (t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r -
                    1] = arguments[r];
                if (!this._events) return this;
                if (!l(this, "trigger", t, n)) return this;
                var i = this._events[t],
                    o = this._events.all;
                return i && f(i, n, this, t), o && f(o, arguments, this, t), this
            }, t
        }(),
        i = r.prototype.on,
        o = r.prototype.once,
        u = r.prototype.off,
        a = r.prototype.trigger,
        c = r.prototype.triggerSafe;
    r.on = i, r.once = o, r.off = u, r.trigger = a;
    var s = /\s+/;

    function l(t, e, n, r) {
        if (!n) return !0;
        if ("object" == typeof n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t[e].apply(t, [i, n[i]].concat(r));
            return !1
        }
        if (s.test(n)) {
            for (var o = n.split(s), u = 0, a = o.length; u < a; u++) t[e].apply(t, [o[u]].concat(r));
            return !1
        }
        return !0
    }

    function f(t, e, n, r) {
        for (var i = -1, o = t.length; ++i < o;) {
            var u = t[i];
            if (r) try {
                u.callback.apply(u.context || n, e)
            } catch (t) {
                console.log('Error in "' + r + '" event handler:', t)
            } else u.callback.apply(u.context || n, e)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    })), n.d(e, "b", (function () {
        return o
    })), n.d(e, "c", (function () {
        return u
    })), n.d(e, "d", (function () {
        return a
    }));
    var r = n(1),
        i = {};

    function o(t, e) {
        return function () {
            throw new r.o(r.k, t, e)
        }
    }

    function u(t, e) {
        return function () {
            throw new r.o(null, t, e)
        }
    }

    function a() {
        return n.e(3).then(function (t) {
            return n(54).default
        }.bind(null, n)).catch(o(r.q + 101))
    }
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "exists", (function () {
        return i
    })), n.d(e, "isHTTPS", (function () {
        return o
    })), n.d(e, "isFileProtocol", (function () {
        return u
    })), n.d(e, "isRtmp", (function () {
        return a
    })), n.d(e, "isYouTube", (function () {
        return c
    })), n.d(e, "typeOf", (function () {
        return s
    })), n.d(e, "isDeepKeyCompliant", (function () {
        return l
    }));
    var r = window.location.protocol;

    function i(t) {
        switch (typeof t) {
            case "string":
                return t.length > 0;
            case "object":
                return null !== t;
            case "undefined":
                return !1;
            default:
                return !0
        }
    }

    function o() {
        return "https:" === r
    }

    function u() {
        return "file:" === r
    }

    function a(t, e) {
        return 0 === t.indexOf("rtmp:") || "rtmp" === e
    }

    function c(t, e) {
        return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
    }

    function s(t) {
        if (null === t) return "null";
        var e = typeof t;
        return "object" === e && Array.isArray(t) ? "array" : e
    }

    function l(t, e, n) {
        var r = Object.keys(t);
        return Object.keys(e).length >= r.length && r.every((function (r) {
            var i = t[r],
                o = e[r];
            return i && "object" == typeof i ? !(!o || "object" != typeof o) && l(i, o, n) : n(
                r, t)
        }))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    })), n.d(e, "b", (function () {
        return c
    })), n.d(e, "d", (function () {
        return s
    })), n.d(e, "e", (function () {
        return d
    })), n.d(e, "c", (function () {
        return p
    }));
    var r, i = n(2),
        o = n(36),
        u = n.n(o),
        a = u.a.clear;

    function c(t, e, n, r) {
        n = n || "all-players";
        var i = "";
        if ("object" == typeof e) {
            var o = document.createElement("div");
            s(o, e);
            var a = o.style.cssText;
            Object.prototype.hasOwnProperty.call(e, "content") && a && (a = a + ' content: "' + e.content +
                '";'), r && a && (a = a.replace(/;/g, " !important;")), i = "{" + a + "}"
        } else "string" == typeof e && (i = e);
        "" !== i && "{}" !== i ? u.a.style([[t, t + i]], n) : u.a.clear(n, t)
    }

    function s(t, e) {
        if (null != t) {
            var n;
            void 0 === t.length && (t = [t]);
            var r = {};
            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = f(n, e[n]));
            for (var i = 0; i < t.length; i++) {
                var o = t[i],
                    u = void 0;
                if (null != o)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[
                        n] && (o.style[u] = r[n]))
            }
        }
    }

    function l(t) {
        t = t.split("-");
        for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
        return t.join("")
    }

    function f(t, e) {
        return "" === e || null == e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) &&
            e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ?
            "" + e : /color/i.test(t) ? "#" + Object(i.e)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(
                e) + "px"
    }

    function d(t, e) {
        s(t, {
            transform: e
        })
    }

    function p(t, e) {
        var n = "rgb",
            i = void 0 !== e && 100 !== e;
        if (i && (n += "a"), !r) {
            var o = document.createElement("canvas");
            o.height = 1, o.width = 1, r = o.getContext("2d")
        }
        t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000", r.clearRect(0, 0, 1, 1), r.fillStyle =
            t, r.fillRect(0, 0, 1, 1);
        var u = r.getImageData(0, 0, 1, 1).data;
        return n += "(" + u[0] + ", " + u[1] + ", " + u[2], i && (n += ", " + e / 100), n + ")"
    }
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "getAbsolutePath", (function () {
        return o
    })), n.d(e, "isAbsolutePath", (function () {
        return u
    })), n.d(e, "parseXML", (function () {
        return a
    })), n.d(e, "serialize", (function () {
        return c
    })), n.d(e, "parseDimension", (function () {
        return s
    })), n.d(e, "timeFormat", (function () {
        return l
    })), n.d(e, "timeFormatAria", (function () {
        return f
    }));
    var r = n(10),
        i = n(0);

    function o(t, e) {
        if (e && Object(r.exists)(e) || (e = document.location.href), !Object(r.exists)(t)) return "";
        if (u(t)) return t;
        var n, i = e.substring(0, e.indexOf("://") + 3),
            o = e.substring(i.length, e.indexOf("/", i.length + 1));
        if (0 === t.indexOf("/")) n = t.split("/");
        else {
            var a = e.split("?")[0];
            n = (a = a.substring(i.length + o.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split(
                "/"))
        }
        for (var c = [], s = 0; s < n.length; s++) n[s] && Object(r.exists)(n[s]) && "." !== n[s] && (".." ===
            n[s] ? c.pop() : c.push(n[s]));
        return i + o + "/" + c.join("/")
    }

    function u(t) {
        return /^(?:(?:https?|file):)?\/\//.test(t)
    }

    function a(t) {
        var e = null;
        try {
            (e = (new window.DOMParser).parseFromString(t, "text/xml")).querySelector("parsererror") && (e =
                null)
        } catch (t) {}
        return e
    }

    function c(t) {
        if (void 0 === t) return null;
        if ("string" == typeof t && t.length < 6) {
            var e = t.toLowerCase();
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (!Object(i.q)(Number(t)) && !Object(i.q)(parseFloat(t))) return Number(t)
        }
        return t
    }

    function s(t) {
        return Object(i.u)(t) ? t : "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px",
            ""), 10)
    }

    function l(t, e) {
        if (Object(i.q)(t) && (t = parseInt(t.toString())), Object(i.q)(t) || !isFinite(t) || t <= 0 && !e)
            return "00:00";
        var n = t < 0 ? "-" : "";
        t = Math.abs(t);
        var r = Math.floor(t / 3600),
            o = Math.floor((t - 3600 * r) / 60),
            u = Math.floor(t % 60);
        return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
    }

    function f(t) {
        if (Object(i.q)(t) && (t = parseInt(t.toString())), Object(i.q)(t) || !isFinite(t) || t <= 0) return "0 seconds";
        var e = Math.floor(t / 3600),
            n = Math.floor((t - 3600 * e) / 60),
            r = Math.floor(t % 60);
        return (e ? e + (e > 1 ? " hours, " : 1 === e ? " hour, " : "") : "") + (n ? n + (n > 1 ?
            " minutes, " : 1 === n ? " minute, " : "") : "") + r + (1 !== r ? " seconds" : 1 === r ?
            " second" : "")
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "h", (function () {
        return d
    })), n.d(e, "c", (function () {
        return h
    })), n.d(e, "e", (function () {
        return v
    })), n.d(e, "f", (function () {
        return m
    })), n.d(e, "b", (function () {
        return b
    })), n.d(e, "d", (function () {
        return w
    })), n.d(e, "g", (function () {
        return j
    })), n.d(e, "a", (function () {
        return O
    }));
    var r = n(0),
        i = n(5),
        o = n(21),
        u = n(10),
        a = n(30),
        c = {},
        s = {
            zh: "Chinese",
            nl: "Dutch",
            en: "English",
            fr: "French",
            de: "German",
            it: "Italian",
            ja: "Japanese",
            pt: "Portuguese",
            ru: "Russian",
            es: "Spanish",
            el: "Greek",
            fi: "Finnish",
            id: "Indonesian",
            ko: "Korean",
            th: "Thai",
            vi: "Vietnamese"
        };
    Object(r.m)(s);

    function l(t) {
        var e = f(t),
            n = e.indexOf("_");
        return -1 === n ? e : e.substring(0, n)
    }

    function f(t) {
        return t.toLowerCase().replace("-", "_")
    }

    function d(t) {
        return t ? Object.keys(t).reduce((function (e, n) {
            return e[f(n)] = t[n], e
        }), {}) : {}
    }

    function p(t) {
        var e = t.querySelector("html");
        return e ? e.getAttribute("lang") : null
    }

    function h() {
        var t = p(document);
        if (!t && Object(i.m)()) try {
            t = p(window.top.document)
        } catch (t) {}
        return t || navigator.language || "en"
    }
    var g = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no",
        "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];

    function v(t) {
        return 8207 === t.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(t)
    }

    function m(t) {
        return g.indexOf(l(t)) >= 0
    }

    function b(t, e, n) {
        return Object(r.g)({}, function (t) {
            var e = t.advertising,
                n = t.related,
                i = t.sharing,
                o = t.abouttext,
                u = Object(r.g)({}, t.localization);
            e && (u.advertising = u.advertising || {}, y(u.advertising, e, "admessage"), y(u.advertising,
                e, "cuetext"), y(u.advertising, e, "loadingAd"), y(u.advertising, e,
                "podmessage"), y(u.advertising, e, "skipmessage"), y(u.advertising, e,
                "skiptext"));
            "string" == typeof u.related ? u.related = {
                heading: u.related
            } : u.related = u.related || {};
            n && y(u.related, n, "autoplaymessage");
            i && (u.sharing = u.sharing || {}, y(u.sharing, i, "heading"), y(u.sharing, i, "copied"));
            o && y(u, t, "abouttext");
            var a = u.close || u.nextUpClose;
            a && (u.close = a);
            return u
        }(t), e[l(n)], e[f(n)])
    }

    function y(t, e, n) {
        var r = t[n] || e[n];
        r && (t[n] = r)
    }

    function w(t) {
        return Object(u.isDeepKeyCompliant)(a.a, t, (function (t, e) {
            return "string" == typeof e[t]
        }))
    }

    function j(t, e) {
        var n, r = c[e];
        if (!r) {
            var i = t + "translations/" + (n = l(e), (/^n[bn]$/.test(n) ? "no" : n) + ".json");
            c[e] = r = new Promise((function (t, n) {
                Object(o.a)({
                    url: i,
                    oncomplete: t,
                    onerror: function (t, r, i, o) {
                        c[e] = null, n(o)
                    },
                    responseType: "json"
                })
            }))
        }
        return r
    }

    function O(t, e) {
        var n = Object(r.g)({}, t, e);
        return k(n, "errors", t, e), k(n, "related", t, e), k(n, "sharing", t, e), k(n, "advertising", t, e),
            k(n, "shortcuts", t, e), k(n, "captionsStyles", t, e), n
    }

    function k(t, e, n, i) {
        t[e] = Object(r.g)({}, n[e], i[e])
    }
}, function (t, e, n) {
    "use strict";
    e.a = []
}, function (t, e, n) {
    "use strict";
    var r = n(49),
        i = n(10),
        o = document.createElement("video");
    n.d(e, "a", (function () {
        return a
    }));
    var u = {
            aac: "audio/mp4",
            mp4: "video/mp4",
            f4v: "video/mp4",
            m4v: "video/mp4",
            mov: "video/mp4",
            mp3: "audio/mpeg",
            mpeg: "audio/mpeg",
            ogv: "video/ogg",
            ogg: "video/ogg",
            oga: "video/ogg",
            vorbis: "video/ogg",
            webm: "video/webm",
            f4a: "video/aac",
            m3u8: "application/vnd.apple.mpegurl",
            m3u: "application/vnd.apple.mpegurl",
            hls: "application/vnd.apple.mpegurl"
        },
        a = [{
            name: "html5",
            supports: function (t) {
                if (!o || !o.canPlayType) return !1;
                if (!1 === Object(r.a)(t)) return !1;
                var e = t.file,
                    n = t.type;
                if (Object(i.isRtmp)(e, n)) return !1;
                var a = t.mimeType || u[n];
                if (!a) return !1;
                var c = t.mediaTypes;
                c && c.length && (a = [a].concat(c.slice()).join("; "));
                return !!o.canPlayType(a)
            }
        }]
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var r = Date.now || function () {
        return (new Date).getTime()
    }
}, function (t, e, n) {
    "use strict";
    e.a = {
        debug: !1
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = {
            none: !0,
            metadata: !0,
            auto: !0
        };

    function o(t, e) {
        return i[t] ? t : i[e] ? e : "metadata"
    }
    var u = n(24),
        a = n(27),
        c = n(31),
        s = n(1);
    n.d(e, "b", (function () {
        return l
    })), n.d(e, "e", (function () {
        return f
    })), n.d(e, "d", (function () {
        return d
    })), n.d(e, "f", (function () {
        return p
    })), n.d(e, "c", (function () {
        return h
    }));

    function l(t, e, n) {
        var i = Object(r.g)({}, n);
        return delete i.playlist, t.map((function (t) {
            return d(e, t, i)
        })).filter((function (t) {
            return !!t
        }))
    }

    function f(t) {
        if (!Array.isArray(t) || 0 === t.length) throw new s.o(s.l, 630)
    }

    function d(t, e, n) {
        var i = t.getProviders(),
            u = t.get("preload"),
            a = Object(r.g)({}, e);
        if (a.preload = o(e.preload, u), a.allSources = g(a, t), a.sources = v(a.allSources, i), a.sources.length)
            return a.file = a.sources[0].file, a.feedData = n,
                function (t) {
                    var e = t.sources[0].liveSyncDuration;
                    e && (t.liveSyncDuration = t.dvrSeekLimit = e);
                    return t
                }(a)
    }

    function p(t, e) {
        var n = (parseInt(t, 10) || 0) % e;
        return n < 0 && (n += e), n
    }
    var h = function (t, e) {
        return v(g(t, e), e.getProviders())
    };

    function g(t, e) {
        var n = e.attributes,
            r = t.sources,
            i = t.allSources,
            u = t.preload,
            c = t.drm,
            s = m(t.withCredentials, n.withCredentials);
        return (i || r).map((function (e) {
            if (e !== Object(e)) return null;
            b(e, n, "androidhls"), b(e, n, "hlsjsdefault"), b(e, n, "safarihlsjs"),
                function (t, e, n) {
                    if (t.liveSyncDuration) return;
                    var r = e.liveSyncDuration ? e : n;
                    b(t, r, "liveSyncDuration")
                }(e, t, n), b(e, n, "_hlsjsProgressive"), e.preload = o(e.preload, u);
            var r = e.drm || c || n.drm;
            r && (e.drm = r);
            var i = m(e.withCredentials, s);
            return void 0 !== i && (e.withCredentials = i), Object(a.a)(e)
        })).filter((function (t) {
            return !!t
        }))
    }

    function v(t, e) {
        e && e.choose || (e = new c.a);
        var n = function (t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = e.choose(r).providerToCheck;
                if (i) return {
                    type: r.type,
                    provider: i
                }
            }
            return null
        }(t, e);
        if (!n) return [];
        var r = n.provider,
            i = n.type;
        return t.filter((function (t) {
            return t.type === i && e.providerSupports(r, t)
        }))
    }

    function m(t, e) {
        return void 0 === t ? e : t
    }

    function b(t, e, n) {
        n in e && (t[n] = e[n])
    }
    e.a = function (t) {
        return (Array.isArray(t) ? t : [t]).map(u.a)
    }
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "getScriptPath", (function () {
        return i
    })), n.d(e, "repo", (function () {
        return o
    })), n.d(e, "versionCheck", (function () {
        return u
    })), n.d(e, "loadFrom", (function () {
        return a
    }));
    var r = n(22),
        i = (n(10), function (t) {
            for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
                var r = e[n].src;
                if (r) {
                    var i = r.lastIndexOf("/" + t);
                    if (i >= 0) return r.substr(0, i + 1)
                }
            }
            return ""
        }),
        o = function () {
            return i("jwplayer.js")
        },
        u = function (t) {
            var e = ("0" + t).split(/\W/),
                n = r.a.split(/\W/),
                i = parseFloat(e[0]),
                o = parseFloat(n[0]);
            return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
        },
        a = function () {
            return i("jwplayer.js")
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var r = n(26),
        i = n(15),
        o = n(50),
        u = n(0);
    n(8);

    function a(t) {
        var e = t.getName().name;
        if (!r.a[e]) {
            if (!Object(u.i)(i.a, Object(u.w)({
                    name: e
                }))) {
                if (!Object(u.p)(t.supports)) throw new Error(
                    "Tried to register a provider with an invalid object");
                i.a.unshift({
                    name: e,
                    supports: t.supports
                })
            }
            0, Object(u.d)(t.prototype, o.a), r.a[e] = t
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return c
    }));
    var r = n(0),
        i = n(12),
        o = n(10),
        u = n(1),
        a = function () {};

    function c(t, e, n, d) {
        var p;
        t === Object(t) && (t = (d = t).url);
        var h = Object(r.g)({
                xhr: null,
                url: t,
                withCredentials: !1,
                retryWithoutCredentials: !1,
                timeout: 6e4,
                timeoutId: -1,
                oncomplete: e || a,
                onerror: n || a,
                mimeType: d && !d.responseType ? "text/xml" : "",
                requireValidXML: !1,
                responseType: d && d.plainText ? "text" : "",
                useDomParser: !1,
                requestFilter: null
            }, d),
            g = function (t, e) {
                return function (t, n) {
                    var i = t.currentTarget || e.xhr;
                    if (clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials)
                        return s(i), void c(Object(r.g)({}, e, {
                            xhr: null,
                            withCredentials: !1,
                            retryWithoutCredentials: !1
                        }));
                    !n && i.status >= 400 && i.status < 600 && (n = i.status), l(e, n ? u.l : u.n, n ||
                        6, t)
                }
            }(0, h);
        if ("XMLHttpRequest" in window) {
            if (p = h.xhr = h.xhr || new window.XMLHttpRequest, "function" == typeof h.requestFilter) {
                var v;
                try {
                    v = h.requestFilter({
                        url: t,
                        xhr: p
                    })
                } catch (t) {
                    return g(t, 5), p
                }
                v && "open" in v && "send" in v && (p = h.xhr = v)
            }
            p.onreadystatechange = function (t) {
                    return function (e) {
                        var n = e.currentTarget || t.xhr;
                        if (4 === n.readyState) {
                            clearTimeout(t.timeoutId);
                            var a = n.status;
                            if (a >= 400) return void l(t, u.l, a < 600 ? a : 6);
                            if (200 === a) return function (t) {
                                return function (e) {
                                    var n = e.currentTarget || t.xhr;
                                    if (clearTimeout(t.timeoutId), t.responseType) {
                                        if ("json" === t.responseType) return function (t,
                                            e) {
                                            if (!t.response || "string" == typeof t
                                                .response && '"' !== t.responseText
                                                .substr(1)) try {
                                                t = Object(r.g)({}, t, {
                                                    response: JSON.parse(
                                                        t.responseText
                                                    )
                                                })
                                            } catch (t) {
                                                return void l(e, u.l, 611, t)
                                            }
                                            return e.oncomplete(t)
                                        }(n, t)
                                    } else {
                                        var o, a = n.responseXML;
                                        if (a) try {
                                            o = a.firstChild
                                        } catch (t) {}
                                        if (a && o) return f(n, a, t);
                                        if (t.useDomParser && n.responseText && !a && (a =
                                                Object(i.parseXML)(n.responseText)) && a.firstChild)
                                            return f(n, a, t);
                                        if (t.requireValidXML) return void l(t, u.l, 602)
                                    }
                                    t.oncomplete(n)
                                }
                            }(t)(e);
                            0 === a && Object(o.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(t.url) &&
                                l(t, u.l, 7)
                        }
                    }
                }(h), p.onerror = g, "overrideMimeType" in p ? h.mimeType && p.overrideMimeType(h.mimeType) :
                h.useDomParser = !0;
            try {
                t = t.replace(/#.*$/, ""), p.open("GET", t, !0)
            } catch (t) {
                return g(t, 3), p
            }
            if (h.responseType) try {
                p.responseType = h.responseType
            } catch (t) {}
            h.timeout && (h.timeoutId = setTimeout((function () {
                s(p), l(h, u.n, 1)
            }), h.timeout), p.onabort = function () {
                clearTimeout(h.timeoutId)
            });
            try {
                h.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
            } catch (t) {
                g(t, 4)
            }
            return p
        }
        l(h, u.n, 2)
    }

    function s(t) {
        t.onload = null, t.onprogress = null, t.onreadystatechange = null, t.onerror = null, "abort" in t &&
            t.abort()
    }

    function l(t, e, n, r) {
        t.onerror(e, t.url, t.xhr, new u.o(e, n, r))
    }

    function f(t, e, n) {
        var i = e.documentElement;
        if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length)
            return t.responseXML || (t = Object(r.g)({}, t, {
                responseXML: e
            })), n.oncomplete(t);
        l(n, u.l, 601)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var r = "8.23.0+local.2021-10-06-21-12-06-121"
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(16),
        o = window.performance || {
            timing: {}
        },
        u = o.timing.navigationStart || Object(i.a)();

    function a() {
        return u + o.now()
    }
    "now" in o || (o.now = function () {
        return Object(i.a)() - u
    });
    var c = function () {
        function t() {
            this.startTimes = {}, this.sum = {}, this.counts = {}, this.ticks = {}
        }
        var e = t.prototype;
        return e.start = function (t) {
            this.startTimes[t] = a(), this.counts[t] = this.counts[t] + 1 || 1
        }, e.end = function (t) {
            if (this.startTimes[t]) {
                var e = a() - this.startTimes[t];
                delete this.startTimes[t], this.sum[t] = this.sum[t] + e || e
            }
        }, e.dump = function () {
            var t = Object(r.g)({}, this.sum);
            for (var e in this.startTimes)
                if (Object.prototype.hasOwnProperty.call(this.startTimes, e)) {
                    var n = a() - this.startTimes[e];
                    t[e] = t[e] + n || n
                } return {
                counts: Object(r.g)({}, this.counts),
                sums: t,
                events: Object(r.g)({}, this.ticks)
            }
        }, e.tick = function (t) {
            this.ticks[t] = a()
        }, e.clear = function (t) {
            delete this.ticks[t]
        }, e.between = function (t, e) {
            return this.ticks[e] && this.ticks[t] ? this.ticks[e] - this.ticks[t] : null
        }, t
    }();
    e.a = c
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(27),
        o = ["captions", "metadata", "thumbnails", "chapters"];
    var u = function (t) {
            if (t && t.file) {
                var e, n = Object(r.g)({}, {
                    kind: "captions",
                    default: !1
                }, t);
                return n.kind = (e = n.kind, -1 !== o.indexOf(e) ? n.kind : "captions"), n.default = !!n.default,
                    n
            }
        },
        a = n(28),
        c = Array.isArray;
    e.a = function (t) {
        c((t = t || {}).tracks) || delete t.tracks;
        var e = Object(r.g)({}, {
            sources: [],
            tracks: [],
            minDvrWindow: a.b
        }, t);
        e.sources !== Object(e.sources) || c(e.sources) || (e.sources = [Object(i.a)(e.sources)]), c(e.sources) &&
            0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [Object(i.a)(t)]);
        for (var n = 0; n < e.sources.length; n++) {
            var o = e.sources[n];
            if (o) {
                var s = o.default;
                o.default = !!s && "true" === s.toString(), e.sources[n].label || (e.sources[n].label =
                    n.toString()), e.sources[n] = Object(i.a)(e.sources[n])
            }
        }
        return e.sources = e.sources.filter((function (t) {
            return !!t
        })), c(e.tracks) || (e.tracks = []), c(e.captions) && (e.tracks = e.tracks.concat(e.captions),
            delete e.captions), e.tracks = e.tracks.map(u).filter((function (t) {
            return !!t
        })), e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0),
        o = function (t) {
            return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
        };
    var u = function () {
            this.load = function (t, e, n, o) {
                return n && "object" == typeof n ? Promise.all(Object.keys(n).filter((function (t) {
                    return t
                })).map((function (u) {
                    var a = n[u];
                    return e.setupPlugin(u).then((function (e) {
                        if (!o.attributes._destroyed) return function (t, e,
                            n) {
                            var r = t.name,
                                o = Object(i.g)({}, e),
                                u = document.createElement("div");
                            u.id = n.id + "_" + r, u.className =
                                "jw-plugin jw-reset";
                            var a = t.getNewInstance(n, o, u);
                            return n.addPlugin(r, a), a
                        }(e, a, t)
                    })).catch((function (t) {
                        return e.removePlugin(u), t.code ? t : new r.o(null,
                            305e3, t)
                    }))
                }))) : Promise.resolve()
            }
        },
        a = n(34),
        c = n(12),
        s = n(2),
        l = function (t) {
            if ("string" == typeof t) {
                var e = (t = t.split("?")[0]).indexOf("://");
                if (e > 0) return 0;
                var n = t.indexOf("/"),
                    r = Object(s.a)(t);
                return !(e < 0 && n < 0) || r && isNaN(r) ? 1 : 2
            }
        };
    var f = function (t) {
        this.url = t, this.promise_ = null
    };
    Object.defineProperties(f.prototype, {
        promise: {
            get: function () {
                return this.load()
            },
            set: function () {}
        }
    }), Object(i.g)(f.prototype, {
        load: function () {
            var t = this,
                e = this.promise_;
            if (!e) {
                if (2 === l(this.url)) return Promise.resolve(this);
                var n = new a.a(function (t) {
                    switch (l(t)) {
                        case 0:
                            return t;
                        case 1:
                            return Object(c.getAbsolutePath)(t, window.location.href)
                    }
                }(this.url));
                this.loader = n, e = n.load().then((function () {
                    return t
                })), this.promise_ = e
            }
            return e
        },
        registerPlugin: function (t, e, n) {
            this.name = t, this.target = e, this.js = n
        },
        getNewInstance: function (t, e, n) {
            var i = this.js;
            if ("function" != typeof i) throw new r.o(null, (this.url, 305100));
            var o = new i(t, e, n);
            return o.addToPlayer = function () {
                var t = this.getContainer().querySelector(".jw-overlays");
                t && (n.left = t.style.left, n.top = t.style.top, t.appendChild(n))
            }, o.resizeHandler = function () {
                var t = this.getContainer().querySelector(".jw-overlays");
                t && o.resize(t.clientWidth, t.clientHeight)
            }, o
        }
    });
    var d = f,
        p = n(35),
        h = {},
        g = function () {
            function t() {}
            var e = t.prototype;
            return e.setupPlugin = function (t) {
                var e = this.getPlugin(t);
                return e ? (e.url !== t && Object(p.a)('JW Plugin "' + o(t) + '" already loaded from "' +
                    e.url + '". Ignoring "' + t + '."'), e.promise) : this.addPlugin(t).load()
            }, e.addPlugin = function (t) {
                var e = o(t),
                    n = h[e];
                return n || (n = new d(t), h[e] = n), n
            }, e.getPlugin = function (t) {
                return h[o(t)]
            }, e.removePlugin = function (t) {
                delete h[o(t)]
            }, e.getPlugins = function () {
                return h
            }, t
        }();
    n.d(e, "b", (function () {
        return m
    })), n.d(e, "a", (function () {
        return b
    }));
    var v = new g,
        m = function (t, e, n) {
            var r = v.addPlugin(t);
            r.js || r.registerPlugin(t, e, n)
        };

    function b(t, e) {
        var n = t.get("plugins");
        return window.jwplayerPluginJsonp = m, (t.pluginLoader = t.pluginLoader || new u).load(e, v, n, t).then(
            (function (e) {
                if (!t.attributes._destroyed) return delete window.jwplayerPluginJsonp, e
            }))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var r = {}
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(10),
        o = n(2);
    e.a = function (t) {
        if (t && t.file) {
            var e = Object(r.g)({}, {
                default: !1,
                type: ""
            }, t);
            e.file = Object(o.i)("" + e.file);
            var n = /^[^/]+\/(?:x-)?([^/]+)$/,
                u = e.type;
            if (n.test(u) && (e.mimeType = u, e.type = u.replace(n, "$1")), Object(i.isYouTube)(e.file) ?
                e.type = "youtube" : Object(i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type =
                    Object(o.a)(e.file)), e.type) {
                switch (e.type) {
                    case "m3u8":
                    case "vnd.apple.mpegurl":
                        e.type = "hls";
                        break;
                    case "dash+xml":
                        e.type = "dash";
                        break;
                    case "m4a":
                        e.type = "aac";
                        break;
                    case "smil":
                        e.type = "rtmp"
                }
                return Object.keys(e).forEach((function (t) {
                    "" === e[t] && delete e[t]
                })), e
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "d", (function () {
        return r
    })), n.d(e, "c", (function () {
        return i
    })), n.d(e, "b", (function () {
        return o
    })), n.d(e, "a", (function () {
        return u
    }));
    var r = {
            audioMode: !1,
            itemMeta: {},
            playbackRate: 1,
            playRejected: !1,
            state: n(3).mb,
            itemReady: !1,
            controlsEnabled: !1
        },
        i = {
            position: 0,
            duration: 0,
            buffer: 0,
            currentTime: 0
        },
        o = 120,
        u = 25
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return u
    })), n.d(e, "b", (function () {
        return a
    }));
    var r = n(9),
        i = n(7),
        o = null,
        u = {};

    function a() {
        return o || (o = i.OS.tizenApp ? n.e(2).then(function (t) {
            var e = n(55).default;
            return u.controls = e, e
        }.bind(null, n)).catch((function () {
            o = null, Object(r.c)(301133)()
        })) : n.e(1).then(function (t) {
            var e = n(52).default;
            return u.controls = e, e
        }.bind(null, n)).catch((function () {
            o = null, Object(r.c)(301130)()
        }))), o
    }
}, function (t, e, n) {
    "use strict";
    e.a = {
        advertising: {
            admessage: "This ad will end in xx",
            cuetext: "Advertisement",
            displayHeading: "Advertisement",
            loadingAd: "Loading ad",
            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
            skipmessage: "Skip ad in xx",
            skiptext: "Skip"
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
            badConnection: "This video cannot be played because of a problem with your internet connection.",
            cantLoadPlayer: "Sorry, the video player failed to load.",
            cantPlayInBrowser: "The video cannot be played in this browser.",
            cantPlayVideo: "This video file cannot be played.",
            errorCode: "Error Code",
            liveStreamDown: "The live stream is either down or has ended.",
            protectedContent: "There was a problem providing access to protected content.",
            technicalError: "This video cannot be played because of a technical error."
        },
        exitFullscreen: "Exit Fullscreen",
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        mute: "Mute",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        pipIcon: "Picture in Picture (PiP)",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {
            autoplaymessage: "Next up in xx",
            heading: "More Videos"
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
            copied: "Copied",
            email: "Email",
            embed: "Embed",
            heading: "Share",
            link: "Link"
        },
        slider: "Seek",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume",
        shortcuts: {
            playPause: "Play/Pause",
            volumeToggle: "Mute/Unmute",
            fullscreenToggle: "Fullscreen/Exit Fullscreen",
            seekPercent: "Seek %",
            keyboardShortcuts: "Keyboard Shortcuts",
            increaseVolume: "Increase Volume",
            decreaseVolume: "Decrease Volume",
            seekForward: "Seek Forward",
            seekBackward: "Seek Backward",
            spacebar: "SPACE",
            captionsToggle: "Captions On/Off"
        },
        captionsStyles: {
            subtitleSettings: "Subtitle Settings",
            color: "Font Color",
            fontOpacity: "Font Opacity",
            userFontScale: "Font Size",
            fontFamily: "Font Family",
            edgeStyle: "Character Edge",
            backgroundColor: "Background Color",
            backgroundOpacity: "Background Opacity",
            windowColor: "Window Color",
            windowOpacity: "Window Opacity",
            white: "White",
            black: "Black",
            red: "Red",
            green: "Green",
            blue: "Blue",
            yellow: "Yellow",
            magenta: "Magenta",
            cyan: "Cyan",
            none: "None",
            raised: "Raised",
            depressed: "Depressed",
            uniform: "Uniform",
            dropShadow: "Drop Shadow"
        },
        disabled: "Disabled",
        enabled: "Enabled",
        reset: "Reset"
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(15),
        o = n(26),
        u = n(20),
        a = n(9),
        c = {
            html5: function () {
                return n.e(10).then(function (t) {
                    var e = n(118).default;
                    return Object(u.a)(e), e
                }.bind(null, n)).catch(Object(a.b)(152))
            }
        };

    function s(t) {
        this.config = t || {}
    }
    Object(r.g)(s.prototype, {
        load: function (t) {
            var e = c[t],
                n = function () {
                    return Promise.reject(new Error("Failed to load media"))
                };
            return e ? e().then((function () {
                var e = o.a[t];
                return e || n()
            })) : n()
        },
        providerSupports: function (t, e) {
            return t.supports(e)
        },
        choose: function (t) {
            if (t === Object(t))
                for (var e = i.a.length, n = 0; n < e; n++) {
                    var r = i.a[n];
                    if (this.providerSupports(r, t)) return {
                        priority: e - n - 1,
                        name: r.name,
                        type: t.type,
                        providerToCheck: r,
                        provider: o.a[r.name]
                    }
                }
            return {}
        }
    });
    e.a = s
}, function (t, e, n) {
    "use strict";
    var r = n(6),
        i = n(11);

    function o(t, e) {
        var n = e.message,
            o = e.code,
            u = function (t, e, n, r) {
                return '<div id="' + t +
                    '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' +
                    t + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + t +
                    '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' +
                    t +
                    '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' +
                    (e || "") + '<span class="jw-break jw-reset"></span>' + (r ? ("(" + n + ": " + r + ")")
                        .replace(/\s+/g, " ") : "") + "</div></div></div></div>"
            }(t.get("id"), n, t.get("localization").errors.errorCode, o.toString()),
            a = t.get("width"),
            c = t.get("height"),
            s = Object(r.f)(u);
        return Object(i.d)(s, {
            width: a.toString().indexOf("%") > 0 ? a : a + "px",
            height: c.toString().indexOf("%") > 0 ? c : c + "px"
        }), s
    }
    n.d(e, "a", (function () {
        return o
    }))
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)), t
    }

    function i(t, e) {
        if (-1 === e.toString().indexOf("%")) return 0;
        if ("string" != typeof t || !t) return 0;
        if (/^\d*\.?\d+%$/.test(t)) return t;
        var n = t.indexOf(":");
        if (-1 === n) return 0;
        var r = parseFloat(t.substr(0, n)),
            i = parseFloat(t.substr(n + 1));
        return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
    }
    n.d(e, "b", (function () {
        return r
    })), n.d(e, "a", (function () {
        return i
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(8),
        o = n(3),
        u = {};

    function a(t) {
        var e = document.createElement("link");
        return e.type = "text/css", e.rel = "stylesheet", e.href = t, e
    }

    function c(t, e) {
        var n = document.createElement("script");
        return n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.timeout = e || 45e3, n.src =
            t, n
    }
    var s = function (t, e, n) {
        var r = this,
            i = 0;

        function s(t) {
            i = 2, r.trigger(o.w, t).off()
        }

        function l(t) {
            i = 3, r.trigger(o.kb, t).off()
        }
        this.getStatus = function () {
            return i
        }, this.load = function () {
            var r = u[t];
            return 0 !== i || (r && r.then(l).catch(s), i = 1, r = new Promise((function (r, i) {
                var o = (e ? a : c)(t, n),
                    u = function () {
                        o.onerror = o.onload = null, clearTimeout(d)
                    },
                    f = function (t) {
                        u(), s(t), i(t)
                    },
                    d = setTimeout((function () {
                        f(new Error("Network timeout " + t))
                    }), 45e3);
                o.onerror = function () {
                    f(new Error("Failed to load " + t))
                }, o.onload = function (t) {
                    u(), l(t), r(t)
                };
                var p = document.getElementsByTagName("head")[0] || document.documentElement;
                p.insertBefore(o, p.firstChild)
            })), u[t] = r), r
        }
    };
    Object(r.g)(s.prototype, i.a), e.a = s
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var r = "function" == typeof console.log ? console.log.bind(console) : function () {}
}, function (t, e) {
    var n, r, i = {},
        o = {},
        u = (n = function () {
            return document.head || document.getElementsByTagName("head")[0]
        }, function () {
            return void 0 === r && (r = n.apply(this, arguments)), r
        });

    function a(t) {
        var e = document.createElement("style");
        return e.type = "text/css", e.setAttribute("data-jwplayer-id", t),
            function (t) {
                u().appendChild(t)
            }(e), e
    }

    function c(t, e) {
        var n, r, i, u = o[t];
        u || (u = o[t] = {
            element: a(t),
            counter: 0
        });
        var c = u.counter++;
        return n = u.element, i = function () {
                f(n, c, "")
            }, (r = function (t) {
                f(n, c, t)
            })(e.css),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media) return;
                    r((e = t).css)
                } else i()
            }
    }
    t.exports = {
        style: function (t, e) {
            ! function (t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = (i[t] || {})[r.id];
                    if (o) {
                        for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
                        for (; u < r.parts.length; u++) o.parts.push(c(t, r.parts[u]))
                    } else {
                        var a = [];
                        for (u = 0; u < r.parts.length; u++) a.push(c(t, r.parts[u]));
                        i[t] = i[t] || {}, i[t][r.id] = {
                            id: r.id,
                            parts: a
                        }
                    }
                }
            }(e, function (t) {
                for (var e = [], n = {}, r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = i[0],
                        u = i[1],
                        a = i[2],
                        c = {
                            css: u,
                            media: a
                        };
                    n[o] ? n[o].parts.push(c) : e.push(n[o] = {
                        id: o,
                        parts: [c]
                    })
                }
                return e
            }(t))
        },
        clear: function (t, e) {
            var n = i[t];
            if (!n) return;
            if (e) {
                var r = n[e];
                if (r)
                    for (var o = 0; o < r.parts.length; o += 1) r.parts[o]();
                return
            }
            for (var u = Object.keys(n), a = 0; a < u.length; a += 1)
                for (var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
            delete i[t]
        }
    };
    var s, l = (s = [], function (t, e) {
        return s[t] = e, s.filter(Boolean).join("\n")
    });

    function f(t, e, n) {
        if (t.styleSheet) t.styleSheet.cssText = l(e, n);
        else {
            var r = document.createTextNode(n),
                i = t.childNodes[e];
            i ? t.replaceChild(r, i) : t.appendChild(r)
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return v
    })), n.d(e, "b", (function () {
        return k
    })), n.d(e, "c", (function () {
        return A
    }));
    var r = n(7),
        i = n(3),
        o = n(8),
        u = n(16),
        a = n(6);

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var s, l, f = "ontouchstart" in window,
        d = "PointerEvent" in window && !r.OS.android,
        p = !(d || f && r.OS.mobile),
        h = r.Features.passiveEvents,
        g = !!h && {
            passive: !0
        },
        v = function (t) {
            var e, n;

            function r(e, n) {
                var r;
                r = t.call(this) || this;
                var i = !(n = n || {}).preventScrolling;
                return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleClick = !1, r.el =
                    e, r.handlers = {}, r.options = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId =
                    null, r.startX = 0, r.startY = 0, r.event = null, r.clicking = !1, r
            }
            n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, c(e, n);
            var i = r.prototype;
            return i.on = function (e, n, r) {
                return b(e) && (this.handlers[e] || O[e](this)), t.prototype.on.call(this, e, n, r)
            }, i.off = function (e, n, r) {
                var i = this;
                if (b(e)) P(this, e);
                else if (!e) {
                    var o = this.handlers;
                    Object.keys(o).forEach((function (t) {
                        P(i, t)
                    }))
                }
                return t.prototype.off.call(this, e, n, r)
            }, i.destroy = function () {
                this.el && (this.off(), d && x(this), this.el = null)
            }, r
        }(o.a),
        m = /\s+/;

    function b(t) {
        return t && !(m.test(t) || "object" == typeof t)
    }

    function y(t) {
        if (!t.handlers.init) {
            var e = t.el,
                n = t.passive,
                r = !!h && {
                    passive: n
                },
                o = function (e) {
                    if (t.dragged) E(t, i.s, e);
                    else {
                        var r = T(e),
                            o = r.pageX,
                            u = r.pageY,
                            a = o - t.startX,
                            c = u - t.startY;
                        a * a + c * c > 36 && (E(t, i.u, e), t.dragged = !0, E(t, i.s, e))
                    }
                    var s;
                    n || "touchmove" !== e.type || (s = e).preventDefault && s.preventDefault()
                },
                u = function (e) {
                    clearTimeout(s), t.el && (x(t), P(t, "window"), t.dragged && (t.dragged = !1, E(t, i.t,
                        e)))
                };
            j(t, "init"), F(t, "init", (function (i) {
                if (Object(a.p)(e, "jw-tab-focus"), !A(i)) {
                    var c = i.target,
                        s = i.type;
                    if (!t.directSelect || c === e) {
                        var l = T(i),
                            f = l.pageX,
                            d = l.pageY;
                        if (t.dragged = !1, t.startX = f, t.startY = d, P(t, "window"),
                            "pointerdown" === s && i.isPrimary) {
                            if (!n) {
                                var p = i.pointerId;
                                t.pointerId = p, e.setPointerCapture(p)
                            }
                            C(t, "window", "pointermove", o, r), C(t, "window", "pointercancel",
                                u), C(t, "window", "pointerup", u)
                        } else "mousedown" === s ? (C(t, "window", "mousemove", o, r), C(t,
                            "window", "mouseup", u)) : "touchstart" === s && (C(t, "window",
                            "touchmove", o, r), C(t, "window", "touchcancel", u), C(t,
                            "window", "touchend", u))
                    }
                }
            }), r), l || (l = new v(document).on("interaction"))
        }
    }

    function w(t) {
        if (!t.handlers.select) {
            var e = t.el;
            j(t, "select"), F(t, "select", (function (n) {
                var r = n.target;
                A(n) || t.directSelect && r !== e || (n.isPrimary && "BUTTON" === r.tageName &&
                    r.focus(), t.lastStart = Object(u.a)(), t.clicking = !0)
            })), C(t, "select", "click", (function (n) {
                A(n) || t.directSelect && n.target !== e || (Object(u.a)() - t.lastStart > 500 &&
                    !0 === t.clicking || (function (t, e) {
                        t.enableDoubleClick && (Object(u.a)() - t.lastClick < 300 ? (E(
                            t, i.r, e), t.lastClick = 0) : t.lastClick = Object(
                            u.a)())
                    }(t, n), E(t, i.o, n)), t.clicking = !1)
            }))
        }
    }

    function j(t, e) {
        if (!t.handlers.init && !t.handlers.select) {
            var n = t.el;
            C(t, e, "blur", (function () {
                Object(a.p)(n, "jw-tab-focus"), t.clicking = !1
            })), C(t, e, "focus", (function () {
                l.event && "keydown" === l.event.type && Object(a.b)(n, "jw-tab-focus")
            }))
        }
    }
    var O = {
        drag: function (t) {
            y(t)
        },
        dragStart: function (t) {
            y(t)
        },
        dragEnd: function (t) {
            y(t)
        },
        click: function (t) {
            w(t)
        },
        doubleClick: function (t) {
            t.enableDoubleClick = !0, w(t)
        },
        longPress: function (t) {
            if (r.OS.iOS) {
                var e = function () {
                    clearTimeout(s)
                };
                C(t, "longPress", "touchstart", (function (n) {
                    e(), s = setTimeout((function () {
                        E(t, "longPress", n)
                    }), 500)
                })), C(t, "longPress", "touchmove", e), C(t, "longPress", "touchcancel", e), C(
                    t, "longPress", "touchend", e)
            } else t.el.oncontextmenu = function (e) {
                return E(t, "longPress", e), !1
            }
        },
        focus: function (t) {
            C(t, "focus", "focus", (function (e) {
                S(t, "focus", e)
            }))
        },
        blur: function (t) {
            C(t, "blur", "blur", (function (e) {
                S(t, "blur", e)
            }))
        },
        over: function (t) {
            (d || p) && C(t, i.Z, d ? "pointerover" : "mouseover", (function (e) {
                "touch" !== e.pointerType && E(t, i.Z, e)
            }))
        },
        out: function (t) {
            if (d) {
                var e = t.el;
                C(t, i.Y, "pointerout", (function (n) {
                    if ("touch" !== n.pointerType && "clientX" in n) {
                        var r = document.elementFromPoint(n.clientX, n.clientY);
                        e.contains(r) || E(t, i.Y, n)
                    }
                }))
            } else p && C(t, i.Y, "mouseout", (function (e) {
                E(t, i.Y, e)
            }))
        },
        move: function (t) {
            (d || p) && C(t, i.W, d ? "pointermove" : "mousemove", (function (e) {
                "touch" !== e.pointerType && E(t, i.W, e)
            }))
        },
        enter: function (t) {
            C(t, i.v, "keydown", (function (e) {
                "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(), S(t, i.v,
                    e))
            }))
        },
        keydown: function (t) {
            C(t, "keydown", "keydown", (function (e) {
                S(t, "keydown", e)
            }), !1)
        },
        gesture: function (t) {
            var e = function (e) {
                return E(t, "gesture", e)
            };
            C(t, "gesture", "click", e), C(t, "gesture", "keydown", e)
        },
        interaction: function (t) {
            var e = function (e) {
                t.event = e
            };
            C(t, "interaction", "mousedown", e, !0), C(t, "interaction", "keydown", e, !0)
        },
        tap: function () {},
        doubleTap: function () {}
    };

    function k(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || window
    }

    function C(t, e, n, r, i) {
        void 0 === i && (i = g);
        var o = t.handlers[e],
            u = t.options[e];
        if (o || (o = t.handlers[e] = {}, u = t.options[e] = {}), o[n]) throw new Error(e + " " + n +
            " already registered");
        o[n] = r, u[n] = i;
        var a = t.el;
        ("window" === e ? k(a) : a).addEventListener(n, r, i)
    }

    function P(t, e) {
        var n = t.el,
            r = t.handlers,
            i = t.options,
            o = "window" === e ? k(n) : n,
            u = r[e],
            a = i[e];
        u && (Object.keys(u).forEach((function (t) {
            var e = a[t];
            "boolean" == typeof e ? o.removeEventListener(t, u[t], e) : o.removeEventListener(
                t, u[t])
        })), r[e] = null, i[e] = null)
    }

    function x(t) {
        var e = t.el;
        null !== t.pointerId && (e.releasePointerCapture(t.pointerId), t.pointerId = null)
    }

    function S(t, e, n) {
        var r = t.el,
            i = n.target;
        t.trigger(e, {
            type: e,
            sourceEvent: n,
            currentTarget: r,
            target: i
        })
    }

    function E(t, e, n) {
        var r = function (t, e, n) {
            var r, i = e.target,
                o = e.touches,
                u = e.changedTouches,
                a = e.pointerType;
            o || u ? (r = o && o.length ? o[0] : u[0], a = a || "touch") : (r = e, a = a || "mouse");
            var c = r,
                s = c.pageX,
                l = c.pageY;
            return {
                type: t,
                pointerType: a,
                pageX: s,
                pageY: l,
                sourceEvent: e,
                currentTarget: n,
                target: i
            }
        }(e, n, t.el);
        t.trigger(e, r)
    }

    function T(t) {
        return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t
    }

    function A(t) {
        return !(!t.ctrlKey || "click" !== t.type) || ("which" in t ? 3 === t.which : "button" in t && 2 ===
            t.button)
    }

    function F(t, e, n, r) {
        d ? C(t, e, "pointerdown", n, r) : (p && C(t, e, "mousedown", n, r), C(t, e, "touchstart", n, r))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
        return r
    })), n.d(e, "a", (function () {
        return i
    }));
    var r = window.requestAnimationFrame || function (t) {
            return setTimeout(t, 17)
        },
        i = window.cancelAnimationFrame || clearTimeout
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(19),
        o = n(10),
        u = n(12),
        a = n(2),
        c = n(23),
        s = n(17);

    function l(t, e) {
        this.name = t, this.message = e.message || e.toString(), this.error = e
    }
    var f = n(5),
        d = n(6),
        p = n(11),
        h = n(21),
        g = n(40),
        v = n(35),
        m = n(41);
    var b = Object(r.g)({}, u, o, i, {
        addClass: d.b,
        hasClass: d.j,
        removeClass: d.p,
        replaceClass: d.q,
        toggleClass: d.w,
        classList: d.e,
        styleDimension: d.v,
        createElement: d.f,
        emptyElement: d.i,
        addStyleSheet: d.c,
        bounds: d.d,
        openLink: d.m,
        replaceInnerHtml: d.r,
        css: p.b,
        clearCss: p.a,
        style: p.d,
        transform: p.e,
        getRgba: p.c,
        ajax: h.a,
        crossdomain: function (t) {
            var e = window.URL;
            try {
                var n = new e(t, location.origin);
                return location.protocol + "//" + location.host != n.protocol + "//" + n.host
            } catch (t) {}
            return !0
        },
        tryCatch: function (t, e, n) {
            if (void 0 === n && (n = []), s.a.debug) return t.apply(e || this, n);
            try {
                return t.apply(e || this, n)
            } catch (e) {
                return new l(t.name, e)
            }
        },
        Error: l,
        Timer: c.a,
        log: v.a,
        genId: m.b,
        between: g.a,
        foreach: function (t, e) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
        },
        flashVersion: f.a,
        isIframe: f.m,
        indexOf: r.l,
        trim: a.i,
        pad: a.e,
        extension: a.a,
        hms: a.b,
        seconds: a.g,
        prefix: a.f,
        suffix: a.h,
        noop: function () {}
    });
    e.a = b
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var r = function (t, e, n) {
        return Math.max(Math.min(t, n), e)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    })), n.d(e, "b", (function () {
        return o
    }));
    var r = 12;

    function i() {
        try {
            var t = window.crypto || window.msCrypto;
            if (t && t.getRandomValues) return t.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (t) {}
        return Math.random().toString(36).slice(2, 9)
    }

    function o(t) {
        for (var e = ""; e.length < t;) e += i();
        return e.slice(0, t)
    }
}, function (t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = [],
            i = {};

        function o() {
            for (; r.length > 0;) {
                var e = r.shift(),
                    n = e.command,
                    o = e.args;
                (i[n] || t[n]).apply(t, o)
            }
        }
        e.forEach((function (e) {
            var u = t[e];
            i[e] = u, t[e] = function () {
                for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] =
                    arguments[a];
                n() ? r.push({
                    command: e,
                    args: i
                }) : (o(), u && u.apply(this, i))
            }
        })), Object.defineProperty(this, "queue", {
            enumerable: !0,
            get: function () {
                return r
            }
        }), this.flush = o, this.empty = function () {
            r.length = 0
        }, this.off = function () {
            e.forEach((function (e) {
                var n = i[e];
                n && (t[e] = n, delete i[e])
            }))
        }, this.destroy = function () {
            this.off(), this.empty()
        }
    }
    n.d(e, "a", (function () {
        return r
    }))
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        return (r = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    n.d(e, "a", (function () {
        return i
    }));
    var i = function (t) {
        var e, n;

        function i() {
            var e;
            return (e = t.call(this) || this).attributes = Object.create(null), e
        }
        n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, r(e, n);
        var o = i.prototype;
        return o.addAttributes = function (t) {
            var e = this;
            Object.keys(t).forEach((function (n) {
                e.add(n, t[n])
            }))
        }, o.add = function (t, e) {
            var n = this;
            Object.defineProperty(this, t, {
                get: function () {
                    return n.attributes[t]
                },
                set: function (e) {
                    return n.set(t, e)
                },
                enumerable: !1
            }), this.attributes[t] = e
        }, o.get = function (t) {
            return this.attributes[t]
        }, o.set = function (t, e) {
            if (this.attributes[t] !== e) {
                var n = this.attributes[t];
                this.attributes[t] = e, this.trigger("change:" + t, this, e, n)
            }
        }, o.clone = function () {
            var t = {},
                e = this.attributes;
            if (e)
                for (var n in e) t[n] = e[n];
            return t
        }, o.change = function (t, e, n) {
            this.on("change:" + t, e, n);
            var r = this.get(t);
            return e.call(n, this, r, r), this
        }, i
    }(n(8).a)
}, function (t, e, n) {
    "use strict";
    n.d(e, "c", (function () {
        return r
    })), n.d(e, "b", (function () {
        return i
    })), n.d(e, "a", (function () {
        return o
    }));
    var r = 4,
        i = 5,
        o = 1
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    var r = n(0);

    function i(t, e) {
        return Object(r.g)({}, e, {
            prime: function () {
                t.src || t.load()
            },
            getPrimedElement: function () {
                return t
            },
            clean: function () {
                e.clean(t)
            },
            recycle: function () {
                e.clean(t)
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    e.a = "hidden" in document ? function () {
        return !document.hidden
    } : "webkitHidden" in document ? function () {
        return !document.webkitHidden
    } : function () {
        return !0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(42),
        o = n(33),
        u = n(19),
        a = n(12),
        c = n(7),
        s = n(30),
        l = n(13),
        f = {
            autoPause: {
                viewability: !1,
                pauseAds: !1
            },
            autostart: !1,
            allowFullscreen: !0,
            bandwidthEstimate: null,
            bitrateSelection: null,
            castAvailable: !1,
            controls: !0,
            cues: [],
            defaultPlaybackRate: 1,
            displaydescription: !0,
            displaytitle: !0,
            displayPlaybackLabel: !1,
            enableShortcuts: !0,
            height: 360,
            intl: {},
            item: 0,
            language: "en",
            liveTimeout: null,
            localization: s.a,
            mute: !1,
            nextUpDisplay: !0,
            playbackRateControls: !1,
            playbackRates: [.5, 1, 1.25, 1.5, 2],
            renderCaptionsNatively: !1,
            repeat: !1,
            stretching: "uniform",
            volume: 90,
            width: 640
        };
    var d = function (t, e) {
            var i = Object(r.g)({}, (window.jwplayer || {}).defaults, e, t);
            ! function (t) {
                Object.keys(t).forEach((function (e) {
                    "id" !== e && (t[e] = Object(a.serialize)(t[e]))
                }))
            }(i);
            var d = i.forceLocalizationDefaults ? f.language : Object(l.c)(),
                p = Object(l.h)(i.intl);
            i.localization = Object(l.a)(s.a, Object(l.b)(i, p, d));
            var h = Object(r.g)({}, f, i);
            "." === h.base && (h.base = Object(u.getScriptPath)("jwplayer.js")), h.base = (h.base || Object(
                    u.loadFrom)()).replace(/\/?$/, "/"), n.p = h.base, h.width = Object(o.b)(h.width), h.height =
                Object(o.b)(h.height), h.aspectratio = Object(o.a)(h.aspectratio, h.width), h.volume =
                Object(r.u)(h.volume) ? Math.min(Math.max(0, h.volume), 100) : f.volume, h.mute = !!h.mute,
                h.language = d, h.intl = p;
            var g = h.playlistIndex;
            g && (h.item = g), Object(r.r)(h.item) || (h.item = 0);
            var v = i.autoPause;
            v && (h.autoPause.viewability = !("viewability" in v) || !!v.viewability);
            var m = h.playbackRateControls;
            if (m) {
                var b = h.playbackRates;
                Array.isArray(m) && (b = m), (b = b.filter((function (t) {
                        return Object(r.r)(t) && t >= .25 && t <= 4
                    })).map((function (t) {
                        return Math.round(100 * t) / 100
                    }))).indexOf(1) < 0 && b.push(1), b.sort(), h.playbackRateControls = !0, h.playbackRates =
                    b
            }(!h.playbackRateControls || h.playbackRates.indexOf(h.defaultPlaybackRate) < 0) && (h.defaultPlaybackRate =
                1), h.playbackRate = h.defaultPlaybackRate, h.aspectratio || delete h.aspectratio;
            var y = h.playlist;
            if (y) Array.isArray(y.playlist) && (h.feedData = y, h.playlist = y.playlist);
            else {
                var w = Object(r.x)(h, ["title", "description", "type", "mediaid", "image", "images",
                    "file", "sources", "tracks", "preload", "duration"]);
                h.playlist = [w]
            }
            h.qualityLabels = h.qualityLabels || h.hlslabels, delete h.duration;
            var j = h.liveTimeout;
            null !== j && (Object(r.u)(j) ? 0 !== j && (j = Math.max(30, j)) : j = null, h.liveTimeout = j);
            var O, k, C, P = parseFloat(h.bandwidthEstimate),
                x = parseFloat(h.bitrateSelection);
            return h.bandwidthEstimate = Object(r.u)(P) ? P : (O = h.defaultBandwidthEstimate, k =
                    parseFloat(O), Object(r.u)(k) ? Math.max(k, 1) : f.bandwidthEstimate), h.bitrateSelection =
                Object(r.u)(x) ? x : f.bitrateSelection, h.liveSyncDuration = (C = h.liveSyncDuration) < 5 ?
                5 : C > 30 ? 30 : C, h.backgroundLoading = Object(r.n)(h.backgroundLoading) ? h.backgroundLoading :
                c.Features.backgroundLoading, h
        },
        p = n(9),
        h = n(24),
        g = n(18),
        v = n(15),
        m = n(20),
        b = n(29),
        y = n(1),
        w = null;

    function j(t) {
        return w || (w = function (t) {
            var e = t.get("controls"),
                r = O(),
                i = function (t, e) {
                    var n = t.get("playlist");
                    if (Array.isArray(n) && n.length)
                        for (var r = Object(g.f)(t.get("item"), n.length), i = Object(g.c)(Object(h
                                .a)(n[r]), t), o = 0; o < i.length; o++)
                            for (var u = i[o], a = t.getProviders(), c = 0; c < v.a.length; c++) {
                                var s = v.a[c];
                                if (a.providerSupports(s, u)) return s.name === e
                            }
                    return !1
                }(t, "html5");
            if (c.OS.tizen) return k();
            if (e && r && i) return o = n.e(7).then(function (t) {
                n(117);
                var e = n(54).default;
                return b.a.controls = n(52).default, Object(m.a)(n(118).default), e
            }.bind(null, n)).catch(Object(p.b)(y.q + 105)), p.a.html5 = o, o;
            var o;
            if (e && i) return function () {
                var t = n.e(5).then(function (t) {
                    var e = n(54).default;
                    return b.a.controls = n(52).default, Object(m.a)(n(118).default),
                        e
                }.bind(null, n)).catch(Object(p.b)(y.q + 104));
                return p.a.html5 = t, t
            }();
            if (e && r) return n.e(6).then(function (t) {
                n(117);
                var e = n(54).default;
                return b.a.controls = n(52).default, e
            }.bind(null, n)).catch(Object(p.b)(y.q + 103));
            if (e) return n.e(4).then(function (t) {
                var e = n(54).default;
                return b.a.controls = n(52).default, e
            }.bind(null, n)).catch(Object(p.b)(y.q + 102));
            return k()
        }(t)), w
    }

    function O() {
        var t = window.IntersectionObserverEntry;
        return !t || !("IntersectionObserver" in window) || !("intersectionRatio" in t.prototype)
    }

    function k() {
        return function () {
            if (O()) return n.e(8).then(function (t) {
                return n(117)
            }.bind(null, n)).catch(Object(p.b)(y.q + 120));
            return Promise.resolve()
        }().then(p.d)
    }
    var C = n(3),
        P = n(48),
        x = n(34),
        S = n(25);

    function E(t, e, n) {
        var r = t.attributes;
        r.playlist = Object(g.a)(e), r.feedData = n
    }

    function T(t) {
        return function (t) {
            var e = t.get("playlist");
            return new Promise((function (n, r) {
                if ("string" != typeof e) {
                    var i = t.get("feedData") || {};
                    return E(t, e, i), n()
                }
                var o = new P.a;
                o.on(C.eb, (function (e) {
                    var r = e.playlist;
                    delete e.playlist, E(t, r, e), n()
                })), o.on(C.w, (function (e) {
                    E(t, [], {}), r(Object(y.w)(e, y.r))
                })), o.load(e)
            }))
        }(t).then((function () {
            if (!_(t)) {
                var e = Object(g.b)(t.get("playlist"), t);
                t.attributes.playlist = e;
                try {
                    Object(g.e)(e)
                } catch (t) {
                    throw t.code += y.r, t
                }
                0;
                var n = t.getProviders(),
                    r = Object(g.f)(t.get("item"), e.length),
                    i = n.choose(e[r].sources[0]),
                    o = i.provider,
                    u = i.name;
                return "function" == typeof o ? o : p.a.html5 && "html5" === u ? p.a.html5 : n.load(
                    u).catch((function (t) {
                    throw Object(y.w)(t, y.s)
                }))
            }
        }))
    }

    function A(t) {
        var e = t.get("skin") ? t.get("skin").url : void 0;
        if ("string" == typeof e && ! function (t) {
                for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
                    if (e[n].href === t) return !0;
                return !1
            }(e)) {
            return new x.a(e, !0).load().catch((function (t) {
                return t
            }))
        }
        return Promise.resolve()
    }

    function F(t) {
        var e = t.attributes,
            n = e.language,
            r = e.base,
            i = e.setupConfig,
            o = e.intl,
            u = Object(l.b)(i, o, n);
        return !Object(l.f)(n) || Object(l.d)(u) ? Promise.resolve() : new Promise((function (i) {
            return Object(l.g)(r, n).then((function (n) {
                var r = n.response;
                if (!_(t)) {
                    if (!r) throw new y.o(null, y.h);
                    e.localization = Object(l.a)(r, u), i()
                }
            })).catch((function (t) {
                i(t.code === y.h ? t : Object(y.w)(t, y.g))
            }))
        }))
    }

    function _(t) {
        return t.attributes._destroyed
    }
    var L = function (t) {
            var e;
            this.start = function (n) {
                var r = function (t, e) {
                        return Object(S.a)(t, e)
                    }(t, n),
                    i = Promise.all([j(t), r, T(t), Promise.resolve(), A(t), F(t)]),
                    o = new Promise((function (t, n) {
                        e = setTimeout((function () {
                            n(new y.o(y.k, y.u))
                        }), 6e4);
                        var r = function () {
                            clearTimeout(e), setTimeout(t, 6e4)
                        };
                        i.then(r).catch(r)
                    }));
                return Promise.race([i, o]).catch((function (t) {
                    var e = function () {
                        throw t
                    };
                    return r.then(e).catch(e)
                })).then((function (t) {
                    return function (t) {
                        if (!t || !t.length) return {
                            core: null,
                            warnings: []
                        };
                        var e = t.reduce((function (t, e) {
                            return t.concat(e)
                        }), []).filter((function (t) {
                            return t && t.code
                        }));
                        return {
                            core: t[0],
                            warnings: e
                        }
                    }(t)
                }))
            }, this.destroy = function () {
                clearTimeout(e), t.set("_destroyed", !0), t = null
            }
        },
        I = n(31),
        M = n(23),
        N = n(17),
        R = {
            removeItem: function (t) {}
        };
    try {
        R = window.localStorage || R
    } catch (t) {}
    var D = function () {
            function t(t, e) {
                this.namespace = t, this.items = e
            }
            var e = t.prototype;
            return e.getAllItems = function () {
                var t = this;
                return this.items.reduce((function (e, n) {
                    var r = R[t.namespace + "." + n];
                    return r && (e[n] = "captions" !== n ? Object(a.serialize)(r) : JSON.parse(
                        r)), e
                }), {})
            }, e.track = function (t) {
                var e = this;
                this.items.forEach((function (n) {
                    t.on("change:" + n, (function (t, r) {
                        try {
                            "captions" === n && (r = JSON.stringify(r)), R[e.namespace +
                                "." + n] = r
                        } catch (t) {
                            N.a.debug && console.error(t)
                        }
                    }))
                }))
            }, e.clear = function () {
                var t = this;
                this.items.forEach((function (e) {
                    R.removeItem(t.namespace + "." + e)
                }))
            }, t
        }(),
        q = n(43),
        B = n(28),
        z = n(8),
        V = n(32),
        W = n(44);

    function Q(t) {
        t.src || t.load()
    }

    function H(t) {
        var e = document.createElement("video");
        return e.className = "jw-video jw-reset", e.setAttribute("tabindex", "-1"), e.setAttribute(
            "disableRemotePlayback", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute(
            "playsinline", ""), t && Object.keys(t).forEach((function (n) {
            e.setAttribute(n, t[n])
        })), e
    }
    var X = n(45),
        U = n(37);
    n(51), n(53);
    n.d(e, "b", (function () {
        return G
    }));
    var Y = function (t) {
        this._events = {}, this.modelShim = new q.a, this.modelShim._qoeItem = new M.a, this.mediaShim = {},
            this.setup = new L(this.modelShim), this.currentContainer = this.originalContainer = t,
            this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem",
                "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen",
                "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality",
                "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle",
                "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "setPlaylistItem",
                "stopCasting", "resize", "setCaptions", "setControls"], (function () {
                return !0
            }))
    };

    function $(t, e) {
        e && e.code && (e.sourceError && console.error(e.sourceError), console.error(y.o.logMessage(e.code)))
    }

    function J(t) {
        t && t.code && console.warn(y.o.logMessage(t.code))
    }

    function G(t, e) {
        if (!document.body.contains(t.currentContainer)) {
            var n = document.getElementById(t.get("id"));
            n && (t.currentContainer = n)
        }
        t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer),
            t.currentContainer = e
    }
    Object(r.g)(Y.prototype, {
        on: z.a.on,
        once: z.a.once,
        off: z.a.off,
        trigger: z.a.trigger,
        init: function (t, e) {
            var n = this,
                i = this.modelShim,
                o = new D("jwplayer", ["volume", "mute", "captionLabel", "captions",
                    "bandwidthEstimate", "bitrateSelection", "qualityLabel",
                    "enableShortcuts"]),
                u = o && o.getAllItems();
            i.attributes = i.attributes || {}, Object(r.g)(this.mediaShim, B.c);
            var a = t,
                c = d(Object(r.g)({}, t), u);
            c.id = e.id, c.setupConfig = a, Object(r.g)(i.attributes, c, B.d), i.getProviders =
                function () {
                    return new I.a(c)
                }, i.setProvider = function () {};
            var s = function () {
                for (var t = W.c, e = [], n = [], r = 0; r < t; r++) {
                    var i = H();
                    e.push(i), n.push(i), Q(i)
                }
                var o = n.shift(),
                    u = n.shift(),
                    a = !1;
                return {
                    primed: function () {
                        return a
                    },
                    prime: function () {
                        e.forEach(Q), a = !0
                    },
                    played: function () {
                        a = !0
                    },
                    getPrimedElement: function () {
                        return n.shift() || null
                    },
                    getAdElement: function () {
                        return o
                    },
                    getTestElement: function () {
                        return u
                    },
                    clean: function (t) {
                        if (t.src) {
                            t.removeAttribute("src");
                            try {
                                t.load()
                            } catch (t) {}
                        }
                    },
                    recycle: function (t) {
                        t && !n.some((function (e) {
                            return e === t
                        })) && (this.clean(t), n.push(t))
                    },
                    syncVolume: function (t) {
                        var n = Math.min(Math.max(0, t / 100), 1);
                        e.forEach((function (t) {
                            t.volume = n
                        }))
                    },
                    syncMute: function (t) {
                        e.forEach((function (e) {
                            e.muted = t
                        }))
                    }
                }
            }();
            i.get("backgroundLoading") || (s = Object(X.a)(s.getPrimedElement(), s));
            var l = this.primeUi = new U.a(Object(U.b)(this.originalContainer)).once("gesture",
                (function () {
                    s.prime(), n.preload(), l.destroy()
                }));
            return i.on("change:errorEvent", $), this.setup.start(e).then((function (t) {
                var u = t.core;
                if (!u) throw Object(y.w)(null, y.t);
                if (n.setup) {
                    n.on(C.ub, J), t.warnings.forEach((function (t) {
                        n.trigger(C.ub, t)
                    }));
                    var a = n.modelShim.clone();
                    if (a.error) throw a.error;
                    var c = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(), Object(r.g)(n, u.prototype), n.playerSetup(
                        a, e, n.originalContainer, n._events, c, s);
                    var l = n._model;
                    return i.off("change:errorEvent", $), l.on("change:errorEvent",
                        $), o.track(l), n.updatePlaylist(l.get("playlist"), l.get(
                        "feedData")).catch((function (t) {
                        var e = t.code === y.a ? y.p : y.r;
                        throw Object(y.w)(t, e)
                    }))
                }
            })).then((function () {
                n.setup && n.playerReady()
            })).catch((function (t) {
                n.setup && function (t, e, n) {
                    Promise.resolve().then((function () {
                        var r = Object(y.x)(y.n, y.v, n),
                            i = t._model || t.modelShim;
                        r.message = r.message || i.get(
                                "localization").errors[r.key],
                            delete r.key;
                        var o = i.get("contextual");
                        if (!o) {
                            var u = Object(V.a)(t, r);
                            V.a.cloneIcon && u.querySelector(
                                ".jw-icon").appendChild(V.a.cloneIcon(
                                "error")), G(t, u)
                        }
                        i.set("errorEvent", r), i.set("state", C.lb),
                            t.trigger(C.ib, r), o && e.remove()
                    }))
                }(n, e, t)
            }))
        },
        playerDestroy: function () {
            this.destroy && this.destroy(), this.apiQueue && this.apiQueue.destroy(), this.setup &&
                this.setup.destroy(), this.primeUi && this.primeUi.destroy(), this.currentContainer !==
                this.originalContainer && G(this, this.originalContainer), this.off(), this._events =
                this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null
        },
        getContainer: function () {
            return this.currentContainer
        },
        get: function (t) {
            if (this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim
                .get(t)
        },
        getItemQoe: function () {
            return this.modelShim._qoeItem
        },
        getItemPromise: function () {
            return null
        },
        setItemCallback: function (t) {
            this.modelShim && (this.modelShim.attributes.playlistItemCallback = t)
        },
        getConfig: function () {
            return Object(r.g)({}, this.modelShim.attributes, this.mediaShim)
        },
        getCurrentCaptions: function () {
            return this.get("captionsIndex")
        },
        getWidth: function () {
            return this.get("containerWidth")
        },
        getHeight: function () {
            return this.get("containerHeight")
        },
        getMute: function () {
            return this.get("mute")
        },
        getProvider: function () {
            return this.get("provider")
        },
        getState: function () {
            return this.get("state")
        },
        getAudioTracks: function () {
            return null
        },
        getCaptionsList: function () {
            return null
        },
        getQualityLevels: function () {
            return null
        },
        getVisualQuality: function () {
            return null
        },
        getCurrentQuality: function () {
            return -1
        },
        getCurrentAudioTrack: function () {
            return -1
        },
        getSafeRegion: function () {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        },
        isBeforeComplete: function () {
            return !1
        },
        isBeforePlay: function () {
            return !1
        },
        createInstream: function () {
            return null
        },
        skipAd: function () {},
        attachMedia: function () {},
        detachMedia: function () {}
    });
    e.a = Y
}, function (t, e, n) {
    "use strict";
    var r = n(0),
        i = n(3),
        o = n(4),
        u = n(2);

    function a(t) {
        var e = {
            zh: "Chinese",
            nl: "Dutch",
            en: "English",
            fr: "French",
            de: "German",
            it: "Italian",
            ja: "Japanese",
            pt: "Portuguese",
            ru: "Russian",
            es: "Spanish"
        };
        return e[t] ? e[t] : t
    }

    function c(t) {
        for (var e = [], n = 0; n < Object(o.c)(t); n++) {
            var r = t.childNodes[n];
            "jwplayer" === r.prefix && "mediatypes" === Object(o.b)(r).toLowerCase() && e.push(Object(o.d)(
                r))
        }
        return e
    }
    var s = function t(e, n) {
            for (var r = [], i = 0; i < Object(o.c)(e); i++) {
                var s = e.childNodes[i];
                if ("media" === s.prefix) {
                    if (!Object(o.b)(s)) continue;
                    switch (Object(o.b)(s).toLowerCase()) {
                        case "content":
                            if (Object(u.j)(s, "duration") && (n.duration = Object(u.g)(Object(u.j)(s,
                                    "duration"))), Object(u.j)(s, "url")) {
                                n.sources || (n.sources = []);
                                var l = {
                                        file: Object(u.j)(s, "url"),
                                        type: Object(u.j)(s, "type"),
                                        width: Object(u.j)(s, "width"),
                                        label: Object(u.j)(s, "label")
                                    },
                                    f = c(s);
                                f.length && (l.mediaTypes = f), n.sources.push(l)
                            }
                            Object(o.c)(s) > 0 && (n = t(s, n));
                            break;
                        case "title":
                            n.title = Object(o.d)(s);
                            break;
                        case "description":
                            n.description = Object(o.d)(s);
                            break;
                        case "guid":
                            n.mediaid = Object(o.d)(s);
                            break;
                        case "thumbnail":
                            n.image || (n.image = Object(u.j)(s, "url"));
                            break;
                        case "group":
                            t(s, n);
                            break;
                        case "subtitle":
                            var d = {
                                file: Object(u.j)(s, "url"),
                                kind: "captions"
                            };
                            Object(u.j)(s, "lang").length > 0 && (d.label = a(Object(u.j)(s, "lang"))), r.push(
                                d)
                    }
                }
            }
            n.tracks || (n.tracks = []);
            for (var p = 0; p < r.length; p++) n.tracks.push(r[p]);
            return n
        },
        l = n(12),
        f = function (t, e) {
            for (var n = "default", r = [], i = [], a = e, c = 0; c < t.childNodes.length; c++) {
                var s = t.childNodes[c];
                if ("jwplayer" === s.prefix) {
                    var f = Object(o.b)(s);
                    "source" === f ? (delete e.sources, r.push({
                        file: Object(u.j)(s, "file"),
                        default: Object(u.j)(s, n),
                        label: Object(u.j)(s, "label"),
                        type: Object(u.j)(s, "type")
                    })) : "track" === f ? (delete e.tracks, i.push({
                        file: Object(u.j)(s, "file"),
                        default: Object(u.j)(s, n),
                        kind: Object(u.j)(s, "kind"),
                        label: Object(u.j)(s, "label")
                    })) : (e[f] = Object(l.serialize)(Object(o.d)(s)), "file" === f && e.sources &&
                        delete e.sources)
                }
                e.file || (e.file = e.link)
            }
            if (r.length) {
                e.sources = [];
                for (var d = 0; d < r.length; d++) {
                    var p = r[d];
                    p.file.length > 0 && (p[n] = "true" === r[d][n], p.label || delete p.label, a.sources.push(
                        p))
                }
            }
            if (i.length) {
                e.tracks = [];
                for (var h = 0; h < i.length; h++) {
                    var g = i[h];
                    g.file && g.file.length > 0 && (g[n] = "true" === i[h][n], g.kind = i[h].kind.length ?
                        i[h].kind : "captions", g.label || delete g.label, a.tracks.push(g))
                }
            }
            return a
        },
        d = n(24);

    function p(t) {
        for (var e = {}, n = 0; n < t.childNodes.length; n++) {
            var r = t.childNodes[n],
                i = Object(o.b)(r);
            if (i) switch (i.toLowerCase()) {
                case "enclosure":
                    e.file = Object(u.j)(r, "url");
                    break;
                case "title":
                    e.title = Object(o.d)(r);
                    break;
                case "guid":
                    e.mediaid = Object(o.d)(r);
                    break;
                case "pubdate":
                    e.date = Object(o.d)(r);
                    break;
                case "description":
                    e.description = Object(o.d)(r);
                    break;
                case "link":
                    e.link = Object(o.d)(r);
                    break;
                case "category":
                    e.tags ? e.tags += Object(o.d)(r) : e.tags = Object(o.d)(r)
            }
        }
        return new d.a(f(t, s(t, e)))
    }
    var h = n(21),
        g = n(8),
        v = n(1);
    e.a = function () {
        var t = Object(r.g)(this, g.a);

        function e(e) {
            try {
                var u, a = e.responseXML ? e.responseXML.childNodes : null,
                    c = null;
                if (a) {
                    for (var s = 0; s < a.length && 8 === (c = a[s]).nodeType; s++);
                    if (c && "xml" === Object(o.b)(c) && (c = c.nextSibling), c && "rss" === Object(o.b)
                        (c)) {
                        var l = function (t) {
                            var e = [];
                            e.feedData = {};
                            for (var n = 0; n < Object(o.c)(t); n++) {
                                var r = Object(o.a)(t, n);
                                if ("channel" === Object(o.b)(r).toLowerCase())
                                    for (var i = 0; i < Object(o.c)(r); i++) {
                                        var u = Object(o.a)(r, i),
                                            a = Object(o.b)(u).toLowerCase();
                                        "item" === a ? e.push(p(u)) : a && (e.feedData[a] = Object(
                                            o.d)(u))
                                    }
                            }
                            return e
                        }(c);
                        u = Object(r.g)({
                            playlist: l
                        }, l.feedData)
                    }
                }
                if (!u) try {
                    var f = JSON.parse(e.responseText);
                    if (Array.isArray(f)) u = {
                        playlist: f
                    };
                    else {
                        if (!Array.isArray(f.playlist)) throw Error("Playlist is not an array");
                        u = f
                    }
                } catch (t) {
                    throw new v.o(v.l, 621, t)
                }
                t.trigger(i.eb, u)
            } catch (t) {
                n(t)
            }
        }

        function n(e) {
            e instanceof v.o && !e.code && (e = new v.o(v.l, 0)), t.trigger(i.w, e)
        }
        this.load = function (t) {
            Object(h.a)(t, e, (function (t, e, r, i) {
                n(i)
            }))
        }, this.destroy = function () {
            this.off()
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return i
    }));
    var r = n(7);

    function i(t) {
        return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(
            r.OS.version.version || "0") >= 4.4) : null
    }
}, function (t, e, n) {
    "use strict";
    var r = n(3),
        i = function () {},
        o = function () {
            return !1
        },
        u = {
            name: "default"
        },
        a = {
            supports: o,
            play: i,
            pause: i,
            preload: i,
            load: i,
            stop: i,
            volume: i,
            mute: i,
            seek: i,
            resize: i,
            remove: i,
            destroy: i,
            setVisibility: i,
            setFullscreen: i,
            getFullscreen: o,
            supportsFullscreen: o,
            getContainer: i,
            setContainer: i,
            getName: function () {
                return u
            },
            getQualityLevels: i,
            getCurrentQuality: i,
            setCurrentQuality: i,
            getAudioTracks: i,
            getCurrentAudioTrack: i,
            setCurrentAudioTrack: i,
            getSeekRange: function () {
                return {
                    start: 0,
                    end: this.getDuration()
                }
            },
            setPlaybackRate: i,
            getPlaybackRate: function () {
                return 1
            },
            getBandwidthEstimate: function () {
                return null
            },
            getLiveLatency: function () {
                return null
            },
            attachMedia: i,
            detachMedia: i,
            init: i,
            setState: function (t) {
                this.state = t, this.trigger(r.bb, {
                    newstate: t
                })
            },
            sendMediaType: function (t) {
                var e = t[0],
                    n = e.type,
                    i = e.mimeType,
                    o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
                this.trigger(r.T, {
                    mediaType: o ? "audio" : "video"
                })
            },
            getDuration: function () {
                return 0
            },
            trigger: i
        };
    e.a = a
}, function (t, e, n) {
    "use strict";
    var r, i = n(46),
        o = n(7),
        u = n(6),
        a = [],
        c = [],
        s = [],
        l = {},
        f = "screen" in window && "orientation" in window.screen,
        d = o.OS.android && o.Browser.chrome,
        p = !1;

    function h(t, e) {
        for (var n = e.length; n--;) {
            var r = e[n];
            if (t.target === r.getContainer()) {
                r.setIntersection(t);
                break
            }
        }
    }

    function g() {
        a.forEach((function (t) {
            var e = t.model;
            if (!(e.get("audioMode") || e.get("isFloating") || !e.get("controls") || e.get(
                    "visibility") < .75)) {
                var n = e.get("state"),
                    r = Object(u.g)();
                !r && "paused" === n && t.api.getFullscreen() ? t.api.setFullscreen(!1) :
                    "playing" === n && t.api.setFullscreen(r)
            }
        }))
    }

    function v() {
        a.forEach((function (t) {
            t.model.set("activeTab", Object(i.a)())
        }))
    }

    function m(t, e) {
        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
    }

    function b(t) {
        s.forEach((function (e) {
            e(t)
        }))
    }
    document.addEventListener("visibilitychange", v), document.addEventListener("webkitvisibilitychange", v),
        d && f && window.screen.orientation.addEventListener("change", g), window.addEventListener(
            "beforeunload", (function () {
                document.removeEventListener("visibilitychange", v), document.removeEventListener(
                        "webkitvisibilitychange", v), window.removeEventListener("scroll", b), d && f &&
                    window.screen.orientation.removeEventListener("change", g)
            })), e.a = {
            add: function (t) {
                a.push(t)
            },
            remove: function (t) {
                m(t, a)
            },
            addScrollHandler: function (t) {
                p || (p = !0, window.addEventListener("scroll", b)), s.push(t)
            },
            removeScrollHandler: function (t) {
                var e = s.indexOf(t); - 1 !== e && s.splice(e, 1)
            },
            addWidget: function (t) {
                c.push(t)
            },
            removeWidget: function (t) {
                m(t, c)
            },
            size: function () {
                return a.length
            },
            observe: function (t) {
                var e;
                e = window.IntersectionObserver, r || (r = new e((function (t) {
                    if (t && t.length)
                        for (var e = t.length; e--;) {
                            var n = t[e];
                            h(n, a), h(n, c)
                        }
                }), {
                    threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                })), l[t.id] || (l[t.id] = !0, r.observe(t))
            },
            unobserve: function (t) {
                r && l[t.id] && (delete l[t.id], r.unobserve(t))
            }
        }
}, , function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return l
    }));
    var r = n(0),
        i = n(38),
        o = n(6),
        u = n(11),
        a = [],
        c = -1;

    function s() {
        Object(i.a)(c), c = Object(i.b)((function () {
            a.forEach((function (t) {
                t.view.updateBounds();
                var e = t.view.model.get("containerWidth");
                t.resized = t.width !== e, t.width = e
            })), a.forEach((function (t) {
                t.contractElement.scrollLeft = 2 * t.width
            })), a.forEach((function (t) {
                Object(u.d)(t.expandChild, {
                    width: t.width + 1
                }), t.resized && t.view.model.get("visibility") && t.view.updateStyles()
            })), a.forEach((function (t) {
                t.expandElement.scrollLeft = t.width + 1
            })), a.forEach((function (t) {
                t.resized && t.view.checkResized()
            }))
        }))
    }
    var l = function () {
        function t(t, e, n) {
            var i = {
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                c = {
                    width: "100%",
                    height: "100%"
                },
                l = Object(o.f)(
                    '<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'
                ),
                f = l.firstChild,
                d = f.firstChild,
                p = f.nextSibling;
            Object(u.d)([f, p], Object(r.g)({
                    overflow: "auto"
                }, i, c)), Object(u.d)(l, Object(r.g)({}, i, c)), this.expandElement = f, this.expandChild =
                d, this.contractElement = p, this.hiddenElement = l, this.element = t, this.view = e,
                this.model = n, this.width = 0, this.resized = !1, t.firstChild ? t.insertBefore(l, t.firstChild) :
                t.appendChild(l), t.addEventListener("scroll", s, !0), a.push(this), s()
        }
        return t.prototype.destroy = function () {
            if (this.view) {
                var t = a.indexOf(this); - 1 !== t && a.splice(t, 1), this.element.removeEventListener(
                        "scroll", s, !0), this.element.removeChild(this.hiddenElement), this.view =
                    this.model = null
            }
        }, t
    }()
}, , , function (t, e, n) {
    "use strict";
    n.r(e);
    var r = setTimeout;

    function i() {}

    function o(t) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
    }

    function u(t, e) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, o._immediateFn((function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(t._value)
                } catch (t) {
                    return void c(e.promise, t)
                }
                a(e.promise, r)
            } else(1 === t._state ? a : c)(e.promise, t._value)
        }))) : t._deferreds.push(e)
    }

    function a(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof o) return t._state = 3, t._value = e, void s(t);
                if ("function" == typeof n) return void f((r = n, i = e, function () {
                    r.apply(i, arguments)
                }), t)
            }
            t._state = 1, t._value = e, s(t)
        } catch (e) {
            c(t, e)
        }
        var r, i
    }

    function c(t, e) {
        t._state = 2, t._value = e, s(t)
    }

    function s(t) {
        2 === t._state && 0 === t._deferreds.length && o._immediateFn((function () {
            t._handled || o._unhandledRejectionFn(t._value)
        }));
        for (var e = 0, n = t._deferreds.length; e < n; e++) u(t, t._deferreds[e]);
        t._deferreds = null
    }

    function l(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e :
            null, this.promise = n
    }

    function f(t, e) {
        var n = !1;
        try {
            t((function (t) {
                n || (n = !0, a(e, t))
            }), (function (t) {
                n || (n = !0, c(e, t))
            }))
        } catch (t) {
            if (n) return;
            n = !0, c(e, t)
        }
    }
    o.prototype.catch = function (t) {
        return this.then(null, t)
    }, o.prototype.then = function (t, e) {
        var n = new this.constructor(i);
        return u(this, new l(t, e, n)), n
    }, o.prototype.finally = function (t) {
        var e = this.constructor;
        return this.then((function (n) {
            return e.resolve(t()).then((function () {
                return n
            }))
        }), (function (n) {
            return e.resolve(t()).then((function () {
                return e.reject(n)
            }))
        }))
    }, o.all = function (t) {
        return new o((function (e, n) {
            if (!t || void 0 === t.length) throw new TypeError(
                "Promise.all accepts an array");
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            var i = r.length;

            function o(t, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var a = u.then;
                        if ("function" == typeof a) return void a.call(u, (function (e) {
                            o(t, e)
                        }), n)
                    }
                    r[t] = u, 0 == --i && e(r)
                } catch (t) {
                    n(t)
                }
            }
            for (var u = 0; u < r.length; u++) o(u, r[u])
        }))
    }, o.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === o ? t : new o((function (e) {
            e(t)
        }))
    }, o.reject = function (t) {
        return new o((function (e, n) {
            n(t)
        }))
    }, o.race = function (t) {
        return new o((function (e, n) {
            for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n)
        }))
    }, o._immediateFn = "function" == typeof setImmediate && function (t) {
        setImmediate(t)
    } || function (t) {
        r(t, 0)
    }, o._unhandledRejectionFn = function (t) {
        "undefined" != typeof console && console && console.warn(
            "Possible Unhandled Promise Rejection:", t)
    };
    var d = o;
    window.Promise || (window.Promise = d);
    var p = n(19),
        h = n(14),
        g = n(15),
        v = n(20),
        m = {
            availableProviders: g.a,
            registerProvider: v.a
        },
        b = n(25),
        y = n(22),
        w = n(0),
        j = n(17),
        O = n(7),
        k = n(47),
        C = n(3),
        P = n(23),
        x = n(8),
        S = n(39),
        E = 0;

    function T(t, e) {
        var n = new k.a(e);
        return n.on(C.gb, (function (e) {
            t._qoe.tick("ready"), e.setupTime = t._qoe.between("setup", "ready")
        })), n.on("all", (function (e, n) {
            t.trigger(e, n)
        })), n
    }

    function A(t, e) {
        var n = t.plugins,
            r = Object.keys(n).map((function (t) {
                var e = n[t];
                return delete n[t], e
            }));
        e.get("setupConfig") && t.trigger("remove"), t.off(), e.playerDestroy(), r.forEach((function (t) {
            if (t.destroy) try {
                t.destroy()
            } catch (t) {}
        })), e.getContainer().removeAttribute("data-jwplayer-id")
    }

    function F(t) {
        var e = ++E,
            n = t.id || "player-" + e,
            r = new P.a,
            i = {},
            o = T(this, t);
        r.tick("init"), t.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function () {
                    return n
                }
            },
            uniqueId: {
                enumerable: !0,
                get: function () {
                    return e
                }
            },
            plugins: {
                enumerable: !0,
                get: function () {
                    return i
                }
            },
            _qoe: {
                enumerable: !0,
                get: function () {
                    return r
                }
            },
            version: {
                enumerable: !0,
                get: function () {
                    return y.a
                }
            },
            Events: {
                enumerable: !0,
                get: function () {
                    return x.a
                }
            },
            utils: {
                enumerable: !0,
                get: function () {
                    return S.a
                }
            },
            _: {
                enumerable: !0,
                get: function () {
                    return w.c
                }
            }
        }), Object(w.g)(this, {
            _events: {},
            setup: function (e) {
                return r.clear("ready"), r.tick("setup"), o && A(this, o), (o = T(this, t)).init(
                    e, this), this.on(e.events, null, this)
            },
            remove: function () {
                return this.getPip() && this.setPip(!1),
                    function (t) {
                        for (var e = h.a.length; e--;)
                            if (h.a[e].uniqueId === t.uniqueId) {
                                h.a.splice(e, 1);
                                break
                            }
                    }(this), o && A(this, o), Object.keys(i).forEach((function (t) {
                        delete i[t]
                    })), this
            },
            qoe: function () {
                var t = o.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: t.getFirstFrame ? t.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: t.dump()
                }
            },
            addCues: function (t) {
                return Array.isArray(t) && o.addCues(t), this
            },
            getAudioTracks: function () {
                return o.getAudioTracks()
            },
            getBuffer: function () {
                return o.get("buffer")
            },
            getCaptions: function () {
                return o.get("captions")
            },
            getCaptionsList: function () {
                return o.getCaptionsList()
            },
            getConfig: function () {
                return o.getConfig()
            },
            getContainer: function () {
                return o.getContainer()
            },
            getControls: function () {
                return o.get("controls")
            },
            getCues: function () {
                return o.get("cues")
            },
            getCurrentAudioTrack: function () {
                return o.getCurrentAudioTrack()
            },
            getCurrentCaptions: function () {
                return o.getCurrentCaptions()
            },
            getCurrentQuality: function () {
                return o.getCurrentQuality()
            },
            getCurrentTime: function () {
                return o.get("currentTime")
            },
            getDuration: function () {
                return o.get("duration")
            },
            getEnvironment: function () {
                return O
            },
            getFullscreen: function () {
                return o.get("fullscreen")
            },
            getHeight: function () {
                return o.getHeight()
            },
            getItemMeta: function () {
                return o.get("itemMeta") || {}
            },
            getMute: function () {
                return o.getMute()
            },
            getPercentViewable: function () {
                return o.get("visibility")
            },
            getPip: function () {
                return o.get("pip")
            },
            getPlaybackRate: function () {
                return o.get("playbackRate")
            },
            getPlaylist: function () {
                return o.get("playlist")
            },
            getPlaylistIndex: function () {
                return o.get("item")
            },
            getPlaylistItem: function (t) {
                if (!S.a.exists(t)) return o.get("playlistItem");
                var e = this.getPlaylist();
                return e ? e[t] : null
            },
            getPosition: function () {
                return o.get("position")
            },
            getProvider: function () {
                return o.getProvider()
            },
            getQualityLevels: function () {
                return o.getQualityLevels()
            },
            getSafeRegion: function (t) {
                return void 0 === t && (t = !0), o.getSafeRegion(t)
            },
            getState: function () {
                return o.getState()
            },
            getStretching: function () {
                return o.get("stretching")
            },
            getViewable: function () {
                return o.get("viewable")
            },
            getVisualQuality: function () {
                return o.getVisualQuality()
            },
            getVolume: function () {
                return o.get("volume")
            },
            getWidth: function () {
                return o.getWidth()
            },
            setCaptions: function (t) {
                return o.setCaptions(t), this
            },
            setConfig: function (t) {
                return o.setConfig(t), this
            },
            setControls: function (t) {
                return o.setControls(t), this
            },
            setCurrentAudioTrack: function (t) {
                o.setCurrentAudioTrack(t)
            },
            setCurrentCaptions: function (t) {
                o.setCurrentCaptions(t)
            },
            setCurrentQuality: function (t) {
                o.setCurrentQuality(t)
            },
            setFullscreen: function (t) {
                return o.setFullscreen(t), this
            },
            setAllowFullscreen: function (t) {
                return o.setAllowFullscreen(t), this
            },
            setMute: function (t) {
                return o.setMute(t), this
            },
            setPip: function (t) {
                return o.setPip(t), this
            },
            setPlaybackRate: function (t) {
                return o.setPlaybackRate(t), this
            },
            setPlaylistItem: function (t, e) {
                return o.setPlaylistItem(t, e), this
            },
            setCues: function (t) {
                return Array.isArray(t) && o.setCues(t), this
            },
            setVolume: function (t) {
                return o.setVolume(t), this
            },
            load: function (t, e) {
                return o.load(t, e), this
            },
            play: function (t) {
                return o.play(t), this
            },
            pause: function (t) {
                return o.pause(t), this
            },
            playToggle: function (t) {
                switch (this.getState()) {
                    case C.pb:
                    case C.jb:
                        return this.pause(t);
                    default:
                        return this.play(t)
                }
            },
            seek: function (t, e) {
                return o.seek(t, e), this
            },
            playlistItem: function (t, e) {
                return o.playlistItem(t, e), this
            },
            playlistNext: function (t) {
                return o.playlistNext(t), this
            },
            playlistPrev: function (t) {
                return o.playlistPrev(t), this
            },
            next: function (t) {
                return o.next(t), this
            },
            requestPip: function (t) {
                return o.requestPip(t), this
            },
            castToggle: function () {
                return o.castToggle(), this
            },
            stopCasting: function () {
                return o.stopCasting(), this
            },
            createInstream: function () {
                return o.createInstream()
            },
            stop: function () {
                return o.stop(), this
            },
            resize: function (t, e) {
                return o.resize(t, e), this
            },
            addButton: function (t, e, n, r, i) {
                return o.addButton(t, e, n, r, i), this
            },
            removeButton: function (t) {
                return o.removeButton(t), this
            },
            attachMedia: function () {
                return o.attachMedia(), this
            },
            detachMedia: function () {
                return o.detachMedia(), this
            },
            isBeforeComplete: function () {
                return o.isBeforeComplete()
            },
            isBeforePlay: function () {
                return o.isBeforePlay()
            },
            setPlaylistItemCallback: function (t, e) {
                o.setItemCallback(t, e)
            },
            removePlaylistItemCallback: function () {
                o.setItemCallback(null)
            },
            getPlaylistItemPromise: function (t) {
                return o.getItemPromise(t)
            },
            getFloating: function () {
                return !!o.get("isFloating")
            },
            setFloating: function (t) {
                o.setConfig({
                    floating: {
                        mode: t ? "always" : "never"
                    }
                })
            }
        })
    }
    Object(w.g)(F.prototype, {
        on: function (t, e, n) {
            return x.c.call(this, t, e, n)
        },
        once: function (t, e, n) {
            return x.d.call(this, t, e, n)
        },
        off: function (t, e, n) {
            return x.b.call(this, t, e, n)
        },
        trigger: function (t, e) {
            return (e = w.c.isObject(e) ? Object(w.g)({}, e) : {}).type = t, j.a.debug ? x.e.call(
                this, t, e) : x.f.call(this, t, e)
        },
        getPlugin: function (t) {
            return this.plugins[t]
        },
        addPlugin: function (t, e) {
            this.plugins[t] = e, this.on("ready", e.addToPlayer), e.resize && this.on("resize",
                e.resizeHandler)
        },
        registerPlugin: function (t, e, n) {
            Object(b.b)(t, e, n)
        },
        getAdBlock: function () {
            return !1
        },
        playAd: function (t) {},
        pauseAd: function (t) {},
        skipAd: function () {}
    }), n.d(e, "assignLibraryProperties", (function () {
        return I
    })), n.p = Object(p.loadFrom)();
    var _ = function (t) {
        var e, n;
        if (t ? "string" == typeof t ? (e = L(t)) || (n = document.getElementById(t)) : "number" ==
            typeof t ? e = h.a[t] : t.nodeType && (e = L((n = t).id || n.getAttribute(
                "data-jwplayer-id"))) : e = h.a[0], e) return e;
        if (n) {
            var r = new F(n);
            return h.a.push(r), r
        }
        return {
            registerPlugin: b.b
        }
    };

    function L(t) {
        for (var e = 0; e < h.a.length; e++)
            if (h.a[e].id === t) return h.a[e];
        return null
    }

    function I(t) {
        Object.defineProperties(t, {
            api: {
                get: function () {
                    return m
                },
                set: function () {}
            },
            version: {
                get: function () {
                    return y.a
                },
                set: function () {}
            },
            debug: {
                get: function () {
                    return j.a.debug
                },
                set: function (t) {
                    j.a.debug = !!t
                }
            }
        })
    }
    I(_);
    e.default = _
}]).default;