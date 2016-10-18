/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-placeholder-touchevents-setclasses !*/
! function(e, n, t) {
    function o(e, n) {
        return typeof e === n
    }

    function r() {
        var e, n, t, r, s, i, a;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], n = C[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (r = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), g.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function s(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";
        if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? _.className.baseVal = n : _.className = n)
    }

    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a() {
        var e = n.body;
        return e || (e = i(x ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, t, o, r) {
        var s, l, f, u, c = "modernizr",
            d = i("div"),
            p = a();
        if (parseInt(o, 10))
            for (; o--;) f = i("div"), f.id = r ? r[o] : c + (o + 1), d.appendChild(f);
        return s = i("style"), s.type = "text/css", s.id = "s" + c, (p.fake ? p : d).appendChild(s), p.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), l = t(d, e), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = u, _.offsetHeight) : d.parentNode.removeChild(d), !!l
    }

    function f(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function d(e, n, t) {
        var r;
        for (var s in e)
            if (e[s] in n) return t === !1 ? e[s] : (r = n[e[s]], o(r, "function") ? c(r, t || n) : r);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(n, o) {
        var r = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(p(n[r]), o)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; r--;) s.push("(" + p(n[r]) + ":" + o + ")");
            return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function h(e, n, r, s) {
        function a() {
            c && (delete N.style, delete N.modElem)
        }
        if (s = o(s, "undefined") ? !1 : s, !o(r, "undefined")) {
            var l = m(e, r);
            if (!o(l, "undefined")) return l
        }
        for (var c, d, p, h, v, y = ["modernizr", "tspan", "samp"]; !N.style && y.length;) c = !0, N.modElem = i(y.shift()), N.style = N.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (h = e[d], v = N.style[h], f(h, "-") && (h = u(h)), N.style[h] !== t) {
                if (s || o(r, "undefined")) return a(), "pfx" == n ? h : !0;
                try {
                    N.style[h] = r
                } catch (g) {}
                if (N.style[h] != v) return a(), "pfx" == n ? h : !0
            }
        return a(), !1
    }

    function v(e, n, t, r, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + z.join(i + " ") + i).split(" ");
        return o(n, "string") || o(n, "undefined") ? h(a, n, r, s) : (a = (e + " " + P.join(i + " ") + i).split(" "), d(a, n, t))
    }

    function y(e, n, o) {
        return v(e, t, t, n, o)
    }
    var g = [],
        C = [],
        w = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                C.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr;
    var _ = n.documentElement,
        x = "svg" === _.nodeName.toLowerCase(),
        S = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = S;
    var b = w.testStyles = l;
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
        else {
            var o = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            b(o, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    });
    var T = "Moz O ms Webkit",
        z = w._config.usePrefixes ? T.split(" ") : [];
    w._cssomPrefixes = z;
    var P = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    w._domPrefixes = P;
    var E = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete E.elem
    });
    var N = {
        style: E.elem.style
    };
    Modernizr._q.unshift(function() {
        delete N.style
    }), w.testAllProps = v, w.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("placeholder", "placeholder" in i("input") && "placeholder" in i("textarea")), r(), s(g), delete w.addTest, delete w.addAsyncTest;
    for (var j = 0; j < Modernizr._q.length; j++) Modernizr._q[j]();
    e.Modernizr = Modernizr
}(window, document);