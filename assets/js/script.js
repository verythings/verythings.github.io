!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase();
    };
  (n.fn = n.prototype =
    {
      jquery: m,
      constructor: n,
      selector: "",
      length: 0,
      toArray: function () {
        return e.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : e.call(this);
      },
      pushStack: function (a) {
        var b = n.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a) {
        return n.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          n.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(e.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: g,
      sort: c.sort,
      splice: c.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g &&
            ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (n.isPlainObject(c) || (b = n.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && n.isArray(a) ? a : []))
                        : (f = a && n.isPlainObject(a) ? a : {}),
                      (g[d] = n.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    n.extend({
      expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === n.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === n.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        var b = a && a.toString();
        return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !k.call(a, "constructor") &&
            !k.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (!l.ownFirst) for (b in a) return k.call(a, b);
        for (b in a);
        return void 0 === b || k.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? i[j.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          n.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (s(a)) {
          for (c = a.length; c > d; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(o, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (s(Object(a))
              ? n.merge(c, "string" == typeof a ? [a] : a)
              : g.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (h) return h.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          g = 0,
          h = [];
        if (s(a))
          for (d = a.length; d > g; g++)
            (e = b(a[g], g, c)), null != e && h.push(e);
        else for (g in a) (e = b(a[g], g, c)), null != e && h.push(e);
        return f.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          n.isFunction(a)
            ? ((c = e.call(arguments, 2)),
              (d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)));
              }),
              (d.guid = a.guid = a.guid || n.guid++),
              d)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: l,
    }),
    "function" == typeof Symbol &&
      (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a)
      ? !1
      : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var t = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        M +
        "))|)" +
        L +
        "*\\]",
      O =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        N +
        ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp(
        "^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$",
        "g"
      ),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      da = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== x && 9 !== x && 11 !== x))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== x && (o = $.exec(a)))
          if ((f = o[1])) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (
              w &&
              (j = w.getElementById(f)) &&
              t(b, j) &&
              j.id === f
            )
              return d.push(j), d;
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = o[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return H.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) (w = b), (s = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(aa, "\\$&"))
              : b.setAttribute("id", (k = u)),
              (r = g(a)),
              (h = r.length),
              (l = V.test(k) ? "#" + k : "[id='" + k + "']");
            while (h--) r[h] = l + " " + qa(r[h]);
            (s = r.join(",")), (w = (_.test(a) && oa(b.parentNode)) || b);
          }
          if (s)
            try {
              return H.apply(d, w.querySelectorAll(s)), d;
            } catch (y) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ha(a) {
      return (a[u] = !0), a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return (
          (b = +b),
          ha(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = fa.support = {}),
      (f = fa.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = fa.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ia(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ia(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Z.test(
                n.getElementsByClassName
              )),
              (c.getById = ia(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ba, ca);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return "undefined" != typeof b.getElementsByClassName &&
                    p
                    ? b.getElementsByClassName(a)
                    : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = Z.test(n.querySelectorAll)) &&
                (ia(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length ||
                      q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ia(function (a) {
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Z.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ia(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", O);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Z.test(o.compareDocumentPosition)),
              (t =
                b || Z.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b)
                        while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition -
                      !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached &&
                          b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return ka(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? ka(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (fa.matches = function (a, b) {
        return fa(a, null, null, b);
      }),
      (fa.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(T, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return fa(b, n, null, [a]).length > 0;
      }),
      (fa.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (fa.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f =
            e && D.call(d.attrHandle, b.toLowerCase())
              ? e(a, b, !p)
              : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (fa.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (fa.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = fa.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = fa.selectors =
        {
          cacheLength: 50,
          createPseudo: ha,
          match: W,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ba, ca)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || fa.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && fa.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return W.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      U.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ba, ca).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = fa.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (
                        ((o = [g ? q.firstChild : q.lastChild]), g && s)
                      ) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m =
                            (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m =
                            (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (
                        (t -= e), t === d || (t % d === 0 && t / d >= 0)
                      );
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  fa.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ha(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--)
                          (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ha(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(Q, "$1"));
              return d[u]
                ? ha(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ha(function (a) {
              return function (b) {
                return fa(a, b).length > 0;
              };
            }),
            contains: ha(function (a) {
              return (
                (a = a.replace(ba, ca)),
                function (b) {
                  return (
                    (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                  );
                }
              );
            }),
            lang: ha(function (a) {
              return (
                V.test(a || "") || fa.error("unsupported lang: " + a),
                (a = a.replace(ba, ca).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") ||
                          b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex,
                a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Y.test(a.nodeName);
            },
            input: function (a) {
              return X.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && "button" === a.type) || "button" === b
              );
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: na(function () {
              return [0];
            }),
            last: na(function (a, b) {
              return [b - 1];
            }),
            eq: na(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: na(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: na(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: na(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    })
      d.pseudos[b] = la(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);
    function pa() {}
    (pa.prototype = d.filters = d.pseudos),
      (d.setFilters = new pa()),
      (g = fa.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = R.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = S.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(Q, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = W[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        });
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d]))
              if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j,
              k = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((j = b[u] || (b[u] = {})),
                    (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (k[2] = h[2]);
                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function sa(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = va(d)),
        e && !e[u] && (e = va(e, f)),
        ha(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : ua(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = ua(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = ua(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function wa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ra(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ra(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ra(sa(m), c)];
        else {
          if (
            ((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])
          ) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return va(
              i > 1 && sa(m),
              i > 1 &&
                qa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(Q, "$1"),
              c,
              e > i && wa(a.slice(i, e)),
              f > e && wa((a = a.slice(e))),
              f > e && qa(a)
            );
          }
          m.push(c);
        }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u),
              k &&
                !f &&
                u.length > 0 &&
                r + b.length > 1 &&
                fa.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ha(f) : f;
    }
    return (
      (h = fa.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = wa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, xa(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = fa.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) ||
                  [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode),
                (a = a.slice(j.shift().value.length));
            }
            i = W.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ba, ca),
                  (_.test(j[0].type) && oa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && qa(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(
              f,
              b,
              !p,
              e,
              !b || (_.test(a) && oa(b.parentNode)) || b
            ),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ia(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ia(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ja("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ia(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ja("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ia(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ja(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      fa
    );
  })(a);
  (n.find = t),
    (n.expr = t.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = t.uniqueSort),
    (n.text = t.getText),
    (n.isXMLDoc = t.isXML),
    (n.contains = t.contains);
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }
  (n.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? n.find.matchesSelector(d, a)
          ? [d]
          : []
        : n.find.matches(
            a,
            n.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            n(a).filter(function () {
              for (b = 0; e > b; b++)
                if (n.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) n.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? n.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(z(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(z(this, a || [], !0));
      },
      is: function (a) {
        return !!z(
          this,
          "string" == typeof a && w.test(a) ? n(a) : a || [],
          !1
        ).length;
      },
    });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = (n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || A), "string" == typeof a)) {
        if (
          ((e =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : B.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof n ? b[0] : b),
            n.merge(
              this,
              n.parseHTML(
                e[1],
                b && b.nodeType ? b.ownerDocument || b : d,
                !0
              )
            ),
            x.test(e[1]) && n.isPlainObject(b))
          )
            for (e in b)
              n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        if (((f = d.getElementById(e[2])), f && f.parentNode)) {
          if (f.id !== e[2]) return A.find(a);
          (this.length = 1), (this[0] = f);
        }
        return (this.context = d), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : n.isFunction(a)
        ? "undefined" != typeof c.ready
          ? c.ready(a)
          : a(n)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          n.makeArray(a, this));
    });
  (C.prototype = n.fn), (A = n(d));
  var D = /^(?:parents|prev(?:Until|All))/,
    E = { children: !0, contents: !0, next: !0, prev: !0 };
  n.fn.extend({
    has: function (a) {
      var b,
        c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (n.contains(this, c[b])) return !0;
      });
    },
    closest: function (a, b) {
      for (
        var c,
          d = 0,
          e = this.length,
          f = [],
          g =
            w.test(a) || "string" != typeof a
              ? n(a, b || this.context)
              : 0;
        e > d;
        d++
      )
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (
            c.nodeType < 11 &&
            (g
              ? g.index(c) > -1
              : 1 === c.nodeType && n.find.matchesSelector(c, a))
          ) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? n.inArray(this[0], n(a))
          : n.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(
        null == a ? this.prevObject : this.prevObject.filter(a)
      );
    },
  });
  function F(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  n.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return u(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return u(a, "parentNode", c);
      },
      next: function (a) {
        return F(a, "nextSibling");
      },
      prev: function (a) {
        return F(a, "previousSibling");
      },
      nextAll: function (a) {
        return u(a, "nextSibling");
      },
      prevAll: function (a) {
        return u(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return u(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return u(a, "previousSibling", c);
      },
      siblings: function (a) {
        return v((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return v(a.firstChild);
      },
      contents: function (a) {
        return n.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : n.merge([], a.childNodes);
      },
    },
    function (a, b) {
      n.fn[a] = function (c, d) {
        var e = n.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = n.filter(d, e)),
          this.length > 1 &&
            (E[a] || (e = n.uniqueSort(e)),
            D.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return (
      n.each(a.match(G) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                n.each(b, function (b, c) {
                  n.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== n.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (a, b) {
              var c;
              while ((c = n.inArray(b, f, c)) > -1)
                f.splice(c, 1), h >= c && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = !0), c || j.disable(), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  }),
    n.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
            ["notify", "progress", n.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return n
                .Deferred(function (c) {
                  n.each(b, function (b, f) {
                    var g = n.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && n.isFunction(a.promise)
                        ? a
                            .promise()
                            .progress(c.notify)
                            .done(c.resolve)
                            .fail(c.reject)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? n.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          n.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return (
                  e[f[0] + "With"](this === e ? d : this, arguments), this
                );
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || (a && n.isFunction(a.promise)) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? e.call(arguments) : d),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (d > 1)
          for (
            i = new Array(d), j = new Array(d), k = new Array(d);
            d > b;
            b++
          )
            c[b] && n.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .progress(h(b, j, i))
                  .done(h(b, k, c))
                  .fail(g.reject)
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var I;
  (n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? n.readyWait++ : n.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0),
          (a !== !0 && --n.readyWait > 0) ||
            (I.resolveWith(d, [n]),
            n.fn.triggerHandler &&
              (n(d).triggerHandler("ready"), n(d).off("ready"))));
      },
    });
  function J() {
    d.addEventListener
      ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K))
      : (d.detachEvent("onreadystatechange", K),
        a.detachEvent("onload", K));
  }
  function K() {
    (d.addEventListener ||
      "load" === a.event.type ||
      "complete" === d.readyState) &&
      (J(), n.ready());
  }
  (n.ready.promise = function (b) {
    if (!I)
      if (
        ((I = n.Deferred()),
        "complete" === d.readyState ||
          ("loading" !== d.readyState && !d.documentElement.doScroll))
      )
        a.setTimeout(n.ready);
      else if (d.addEventListener)
        d.addEventListener("DOMContentLoaded", K),
          a.addEventListener("load", K);
      else {
        d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
        var c = !1;
        try {
          c = null == a.frameElement && d.documentElement;
        } catch (e) {}
        c &&
          c.doScroll &&
          !(function f() {
            if (!n.isReady) {
              try {
                c.doScroll("left");
              } catch (b) {
                return a.setTimeout(f, 50);
              }
              J(), n.ready();
            }
          })();
      }
    return I.promise(b);
  }),
    n.ready.promise();
  var L;
  for (L in n(l)) break;
  (l.ownFirst = "0" === L),
    (l.inlineBlockNeedsLayout = !1),
    n(function () {
      var a, b, c, e;
      (c = d.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = d.createElement("div")),
          (e = d.createElement("div")),
          (e.style.cssText =
            "position:absolute;border:0;width:;height:0;top:0;left:-9999px"),
          c.appendChild(e).appendChild(b),
          "undefined" != typeof b.style.zoom &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(e));
    }),
    (function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test;
      } catch (b) {
        l.deleteExpando = !1;
      }
      a = null;
    })();
  var M = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : N.test(c)
              ? n.parseJSON(c)
              : c;
        } catch (e) {}
        n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
        return !1;
    return !0;
  }
  function R(a, b, d, e) {
    if (M(a)) {
      var f,
        g,
        h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || n.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: n.noop }),
          ("object" != typeof b && "function" != typeof b) ||
            (e
              ? (j[k] = n.extend(j[k], b))
              : (j[k].data = n.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[n.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[n.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function S(a, b, c) {
    if (M(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b)
            ? (b = b.concat(n.map(b, n.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = n.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) &&
          (f
            ? n.cleanData([a], !0)
            : l.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = void 0));
      }
    }
  }
  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]),
        !!a && !Q(a)
      );
    },
    data: function (a, b, c) {
      return R(a, b, c);
    },
    removeData: function (a, b) {
      return S(a, b);
    },
    _data: function (a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return S(a, b, !0);
    },
  }),
    n.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = n.data(f)),
            1 === f.nodeType && !n._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              n.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              n.data(this, a, b);
            })
          : f
          ? P(f, a, n.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a);
        });
      },
    }),
    n.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = n._data(a, b)),
            c &&
              (!d || n.isArray(c)
                ? (d = n._data(a, b, n.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          n._data(a, c) ||
          n._data(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              n._removeData(a, b + "queue"), n._removeData(a, c);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? n.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                  "fx" === a &&
                    "inprogress" !== c[0] &&
                    n.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = n._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    }),
    (function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return (
          (c = d.getElementsByTagName("body")[0]),
          c && c.style
            ? ((b = d.createElement("div")),
              (e = d.createElement("div")),
              (e.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              c.appendChild(e).appendChild(b),
              "undefined" != typeof b.style.zoom &&
                ((b.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (b.appendChild(d.createElement("div")).style.width =
                  "5px"),
                (a = 3 !== b.offsetWidth)),
              c.removeChild(e),
              a)
            : void 0
        );
      };
    })();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return (
        (a = b || a),
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
      );
    };
  function X(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return n.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || ("px" !== j && +i)) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), n.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var Y = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        n.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(n(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !(function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    (a.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (l.leadingWhitespace = 3 === a.firstChild.nodeType),
      (l.tbody = !a.getElementsByTagName("tbody").length),
      (l.htmlSerialize = !!a.getElementsByTagName("link").length),
      (l.html5Clone =
        "<:nav></:nav>" !==
        d.createElement("nav").cloneNode(!0).outerHTML),
      (c.type = "checkbox"),
      (c.checked = !0),
      b.appendChild(c),
      (l.appendChecked = c.checked),
      (a.innerHTML = "<textarea>x</textarea>"),
      (l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue),
      b.appendChild(a),
      (c = d.createElement("input")),
      c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      a.appendChild(c),
      (l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (l.noCloneEvent = !!a.addEventListener),
      (a[n.expando] = 1),
      (l.attributes = !a.getAttribute(n.expando));
  })();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (da.optgroup = da.option),
    (da.tbody = da.tfoot = da.colgroup = da.caption = da.thead),
    (da.th = da.td);
  function ea(a, b) {
    var c,
      d,
      e = 0,
      f =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], f) : f;
  }
  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }
  function ja(a, b, c, d, e) {
    for (
      var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0;
      o > r;
      r++
    )
      if (((g = a[r]), g || 0 === g))
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
          (i = i || p.appendChild(b.createElement("div"))),
            (j = ($.exec(g) || ["", ""])[1].toLowerCase()),
            (m = da[j] || da._default),
            (i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2]),
            (f = m[0]);
          while (f--) i = i.lastChild;
          if (
            (!l.leadingWhitespace &&
              aa.test(g) &&
              q.push(b.createTextNode(aa.exec(g)[0])),
            !l.tbody)
          ) {
            (g =
              "table" !== j || ha.test(g)
                ? "<table>" !== m[1] || ha.test(g)
                  ? 0
                  : i
                : i.firstChild),
              (f = g && g.childNodes.length);
            while (f--)
              n.nodeName((k = g.childNodes[f]), "tbody") &&
                !k.childNodes.length &&
                g.removeChild(k);
          }
          n.merge(q, i.childNodes), (i.textContent = "");
          while (i.firstChild) i.removeChild(i.firstChild);
          i = p.lastChild;
        } else q.push(b.createTextNode(g));
    i && p.removeChild(i),
      l.appendChecked || n.grep(ea(q, "input"), ia),
      (r = 0);
    while ((g = q[r++]))
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (
        ((h = n.contains(g.ownerDocument, g)),
        (i = ea(p.appendChild(g), "script")),
        h && fa(i),
        c)
      ) {
        f = 0;
        while ((g = i[f++])) _.test(g.type || "") && c.push(g);
      }
    return (i = null), p;
  }
  !(function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in { submit: !0, change: !0, focusin: !0 })
      (c = "on" + b),
        (l[b] = c in a) ||
          (e.setAttribute(c, "t"),
          (l[b] = e.attributes[c].expando === !1));
    e = null;
  })();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return !0;
  }
  function qa() {
    return !1;
  }
  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) sa(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = qa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return n().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = n.guid++))),
      a.each(function () {
        n.event.add(this, b, e, d, c);
      })
    );
  }
  (n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = n.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return "undefined" == typeof n ||
                  (a && n.event.triggered === a.type)
                  ? void 0
                  : n.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(G) || [""]),
          (h = b.length);
        while (h--)
          (f = oa.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = n.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = n.event.special[o] || {}),
              (l = n.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && n.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (m = g[o]) ||
                ((m = g[o] = []),
                (m.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l),
                l.handler.guid || (l.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
              (n.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(G) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = oa.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = n.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (m = k[o] || []),
              (h =
                h[2] &&
                new RegExp(
                  "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                )),
              (i = f = m.length);
            while (f--)
              (g = m[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (m.splice(f, 1),
                  g.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                n.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) &&
          (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((i = m = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !na.test(q + n.event.triggered) &&
          (q.indexOf(".") > -1 &&
            ((r = q.split(".")), (q = r.shift()), r.sort()),
          (h = q.indexOf(":") < 0 && "on" + q),
          (b = b[n.expando]
            ? b
            : new n.Event(q, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = r.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : n.makeArray(c, [b])),
          (l = n.event.special[q] || {}),
          f || !l.trigger || l.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (
            j = l.delegateType || q, na.test(j + q) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            p.push(i), (m = i);
          m === (e.ownerDocument || d) &&
            p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped())
          (b.type = o > 1 ? j : l.bindType || q),
            (g =
              (n._data(i, "events") || {})[b.type] &&
              n._data(i, "handle")),
            g && g.apply(i, c),
            (g = h && i[h]),
            g &&
              g.apply &&
              M(i) &&
              ((b.result = g.apply(i, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = q),
          !f &&
            !b.isDefaultPrevented() &&
            (!l._default || l._default.apply(p.pop(), c) === !1) &&
            M(e) &&
            h &&
            e[q] &&
            !n.isWindow(e))
        ) {
          (m = e[h]), m && (e[h] = null), (n.event.triggered = q);
          try {
            e[q]();
          } catch (s) {}
          (n.event.triggered = void 0), m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = n.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (c = 0);
          while (
            (g = f.handlers[c++]) &&
            !a.isImmediatePropagationStopped()
          )
            (a.rnamespace && !a.rnamespace.test(g.namespace)) ||
              ((a.handleObj = g),
              (a.data = g.data),
              (d = (
                (n.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (
        h &&
        i.nodeType &&
        ("click" !== a.type || isNaN(a.button) || a.button < 1)
      )
        for (; i != this; i = i.parentNode || this)
          if (
            1 === i.nodeType &&
            (i.disabled !== !0 || "click" !== a.type)
          ) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? n(e, this).index(i) > -1
                    : n.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return (
        h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
      );
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h ||
        (this.fixHooks[f] = h =
          ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
        (e = h.props ? this.props.concat(h.props) : this.props),
        (a = new n.Event(g)),
        (b = e.length);
      while (b--) (c = e[b]), (a[c] = g[c]);
      return (
        a.target || (a.target = g.srcElement || d),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        h.filter ? h.filter(a, g) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((e = a.target.ownerDocument || d),
            (f = e.documentElement),
            (c = e.body),
            (a.pageX =
              b.clientX +
              ((f && f.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((f && f.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((f && f.scrollTop) || (c && c.scrollTop) || 0) -
              ((f && f.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            h &&
            (a.relatedTarget = h === a.target ? b.toElement : h),
          a.which ||
            void 0 === g ||
            (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });
      n.event.trigger(d, null, b),
        d.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (n.removeEvent = d.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            ("undefined" == typeof a[d] && (a[d] = null),
            a.detachEvent(d, c));
        }),
    (n.Event = function (a, b) {
      return this instanceof n.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? pa
                  : qa))
            : (this.type = a),
          b && n.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || n.now()),
          void (this[n.expando] = !0))
        : new n.Event(a, b);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: qa,
      isPropagationStopped: qa,
      isImmediatePropagationStopped: qa,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = pa),
          a &&
            (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = pa),
          a &&
            !this.isSimulated &&
            (a.stopPropagation && a.stopPropagation(),
            (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = pa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        n.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || n.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    l.submit ||
      (n.event.special.submit = {
        setup: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      n.nodeName(b, "input") || n.nodeName(b, "button")
                        ? n.prop(b, "form")
                        : void 0;
                  c &&
                    !n._data(c, "submit") &&
                    (n.event.add(c, "submit._submit", function (a) {
                      a._submitBubble = !0;
                    }),
                    n._data(c, "submit", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submitBubble &&
            (delete a._submitBubble,
            this.parentNode &&
              !a.isTrigger &&
              n.event.simulate("submit", this.parentNode, a));
        },
        teardown: function () {
          return n.nodeName(this, "form")
            ? !1
            : void n.event.remove(this, "._submit");
        },
      }),
    l.change ||
      (n.event.special.change = {
        setup: function () {
          return ka.test(this.nodeName)
            ? (("checkbox" !== this.type && "radio" !== this.type) ||
                (n.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                n.event.add(this, "click._change", function (a) {
                  this._justChanged &&
                    !a.isTrigger &&
                    (this._justChanged = !1),
                    n.event.simulate("change", this, a);
                })),
              !1)
            : void n.event.add(
                this,
                "beforeactivate._change",
                function (a) {
                  var b = a.target;
                  ka.test(b.nodeName) &&
                    !n._data(b, "change") &&
                    (n.event.add(b, "change._change", function (a) {
                      !this.parentNode ||
                        a.isSimulated ||
                        a.isTrigger ||
                        n.event.simulate("change", this.parentNode, a);
                    }),
                    n._data(b, "change", !0));
                }
              );
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return n.event.remove(this, "._change"), !ka.test(this.nodeName);
        },
      }),
    l.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b);
            e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = n._data(d, b) - 1;
            e
              ? n._data(d, b, e)
              : (d.removeEventListener(a, c, !0), n._removeData(d, b));
          },
        };
      }),
    n.fn.extend({
      on: function (a, b, c, d) {
        return sa(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return sa(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            n(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = qa),
          this.each(function () {
            n.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          n.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? n.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a, b) {
    return n.nodeName(a, "table") &&
      n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function Da(a) {
    return (a.type = (null !== n.find.attr(a, "type")) + "/" + a.type), a;
  }
  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
        d,
        e,
        f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++)
            n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = n.extend({}, g.data));
    }
  }
  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (
        ((c = b.nodeName.toLowerCase()), !l.noCloneEvent && b[n.expando])
      ) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando);
      }
      "script" === c && b.text !== a.text
        ? ((Da(b).text = a.text), Ea(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          l.html5Clone &&
            a.innerHTML &&
            !n.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && Z.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }
  }
  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (
      r ||
      (o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
    )
      return a.each(function (e) {
        var f = a.eq(e);
        r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
      });
    if (
      o &&
      ((k = ja(b, a[0].ownerDocument, !1, a, d)),
      (e = k.firstChild),
      1 === k.childNodes.length && (k = e),
      e || d)
    ) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++)
        (g = k),
          m !== p &&
            ((g = n.clone(g, !0, !0)), h && n.merge(i, ea(g, "script"))),
          c.call(a[m], g, m);
      if (h)
        for (
          j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0;
          h > m;
          m++
        )
          (g = i[m]),
            _.test(g.type || "") &&
              !n._data(g, "globalEval") &&
              n.contains(j, g) &&
              (g.src
                ? n._evalUrl && n._evalUrl(g.src)
                : n.globalEval(
                    (g.text || g.textContent || g.innerHTML || "").replace(
                      za,
                      ""
                    )
                  ));
      k = e = null;
    }
    return a;
  }
  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || n.cleanData(ea(d)),
        d.parentNode &&
          (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = n.contains(a.ownerDocument, a);
      if (
        (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((Ba.innerHTML = a.outerHTML),
            Ba.removeChild((f = Ba.firstChild))),
        !(
          (l.noCloneEvent && l.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          n.isXMLDoc(a)
        ))
      )
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (
            h = h || ea(a), d = d || ea(f), g = 0;
            null != (e = h[g]);
            g++
          )
            Fa(e, d[g]);
        else Fa(a, f);
      return (
        (d = ea(f, "script")),
        d.length > 0 && fa(d, !i && ea(a, "script")),
        (d = h = e = null),
        f
      );
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = n.expando,
          j = n.cache,
          k = l.attributes,
          m = n.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || M(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            k || "undefined" == typeof d.removeAttribute
              ? (d[i] = void 0)
              : d.removeAttribute(i),
            c.push(f));
        }
    },
  }),
    n.fn.extend({
      domManip: Ha,
      detach: function (a) {
        return Ia(this, a, !0);
      },
      remove: function (a) {
        return Ia(this, a);
      },
      text: function (a) {
        return Y(
          this,
          function (a) {
            return void 0 === a
              ? n.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || d).createTextNode(
                    a
                  )
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ha(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ca(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ha(this, arguments, function (a) {
          this.parentNode &&
            this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && n.cleanData(ea(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && n.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return n.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return Y(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType
                ? b.innerHTML.replace(ta, "")
                : void 0;
            if (
              "string" == typeof a &&
              !wa.test(a) &&
              (l.htmlSerialize || !ua.test(a)) &&
              (l.leadingWhitespace || !aa.test(a)) &&
              !da[($.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = n.htmlPrefilter(a);
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (n.cleanData(ea(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ha(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            n.inArray(this, a) < 0 &&
              (n.cleanData(ea(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        n.fn[a] = function (a) {
          for (
            var c, d = 0, e = [], f = n(a), h = f.length - 1;
            h >= d;
            d++
          )
            (c = d === h ? this : this.clone(!0)),
              n(f[d])[b](c),
              g.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ja,
    Ka = { HTML: "block", BODY: "block" };
  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d;
  }
  function Ma(a) {
    var b = d,
      c = Ka[a];
    return (
      c ||
        ((c = La(a, b)),
        ("none" !== c && c) ||
          ((Ja = (
            Ja || n("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ja[0].contentWindow || Ja[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = La(a, b)),
          Ja.detach()),
        (Ka[a] = c)),
      c
    );
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Qa = d.documentElement;
  !(function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      (j.style.cssText = "float:left;opacity:.5"),
        (l.opacity = "0.5" === j.style.opacity),
        (l.cssFloat = !!j.style.cssFloat),
        (j.style.backgroundClip = "content-box"),
        (j.cloneNode(!0).style.backgroundClip = ""),
        (l.clearCloneStyle = "content-box" === j.style.backgroundClip),
        (i = d.createElement("div")),
        (i.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (j.innerHTML = ""),
        i.appendChild(j),
        (l.boxSizing =
          "" === j.style.boxSizing ||
          "" === j.style.MozBoxSizing ||
          "" === j.style.WebkitBoxSizing),
        n.extend(l, {
          reliableHiddenOffsets: function () {
            return null == b && k(), f;
          },
          boxSizingReliable: function () {
            return null == b && k(), e;
          },
          pixelMarginRight: function () {
            return null == b && k(), c;
          },
          pixelPosition: function () {
            return null == b && k(), b;
          },
          reliableMarginRight: function () {
            return null == b && k(), g;
          },
          reliableMarginLeft: function () {
            return null == b && k(), h;
          },
        });
      function k() {
        var k,
          l,
          m = d.documentElement;
        m.appendChild(i),
          (j.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (b = e = h = !1),
          (c = g = !0),
          a.getComputedStyle &&
            ((l = a.getComputedStyle(j)),
            (b = "1%" !== (l || {}).top),
            (h = "2px" === (l || {}).marginLeft),
            (e = "4px" === (l || { width: "4px" }).width),
            (j.style.marginRight = "50%"),
            (c = "4px" === (l || { marginRight: "4px" }).marginRight),
            (k = j.appendChild(d.createElement("div"))),
            (k.style.cssText = j.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (k.style.marginRight = k.style.width = "0"),
            (j.style.width = "1px"),
            (g = !parseFloat((a.getComputedStyle(k) || {}).marginRight)),
            j.removeChild(k)),
          (j.style.display = "none"),
          (f = 0 === j.getClientRects().length),
          f &&
            ((j.style.display = ""),
            (j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (j.childNodes[0].style.borderCollapse = "separate"),
            (k = j.getElementsByTagName("td")),
            (k[0].style.cssText =
              "margin:0;border:0;padding:0;display:none"),
            (f = 0 === k[0].offsetHeight),
            f &&
              ((k[0].style.display = ""),
              (k[1].style.display = "none"),
              (f = 0 === k[0].offsetHeight))),
          m.removeChild(i);
      }
    }
  })();
  var Ra,
    Sa,
    Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          ("" !== g && void 0 !== g) ||
            n.contains(a.ownerDocument, a) ||
            (g = n.style(a, b)),
          c &&
            !l.pixelMarginRight() &&
            Oa.test(g) &&
            Na.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f)),
          void 0 === g ? g : g + ""
        );
      }))
    : Qa.currentStyle &&
      ((Ra = function (a) {
        return a.currentStyle;
      }),
      (Sa = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ra(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Oa.test(g) &&
            !Ta.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Ua(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = { position: "absolute", visibility: "hidden", display: "block" },
    $a = { letterSpacing: "0", fontWeight: "400" },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--) if (((a = _a[c] + b), a in ab)) return a;
  }
  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = n._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                W(d) &&
                (f[g] = n._data(d, "olddisplay", Ma(d.nodeName))))
            : ((e = W(d)),
              ((c && "none" !== c) || !e) &&
                n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function eb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += n.css(a, c + V[f], !0, e)),
        d
          ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c &&
              (g -= n.css(a, "border" + V[f] + "Width", !0, e)))
          : ((g += n.css(a, "padding" + V[f], !0, e)),
            "padding" !== c &&
              (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g;
  }
  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Sa(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Oa.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: l.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = n.camelCase(b),
          i = a.style;
        if (
          ((b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
          (g = n.cssHooks[b] || n.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d))
            ? e
            : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = U.exec(c)) &&
            e[1] &&
            ((c = X(a, b, e)), (f = "number")),
          null != c &&
            c === c &&
            ("number" === f &&
              (c += (e && e[3]) || (n.cssNumber[h] ? "" : "px")),
            l.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = n.camelCase(b);
      return (
        (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h)),
        (g = n.cssHooks[b] || n.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Sa(a, b, d)),
        "normal" === f && b in $a && (f = $a[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || isFinite(e) ? e || 0 : f)
          : f
      );
    },
  }),
    n.each(["height", "width"], function (a, b) {
      n.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth
              ? Pa(a, Za, function () {
                  return fb(a, b, d);
                })
              : fb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ra(a);
          return db(
            a,
            c,
            d
              ? eb(
                  a,
                  b,
                  d,
                  l.boxSizing &&
                    "border-box" === n.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    l.opacity ||
      (n.cssHooks.opacity = {
        get: function (a, b) {
          return Wa.test(
            (b && a.currentStyle
              ? a.currentStyle.filter
              : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === n.trim(f.replace(Va, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"),
              "" === b || (d && !d.filter))) ||
              (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
        },
      }),
    (n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
      return b
        ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"])
        : void 0;
    })),
    (n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
      return b
        ? (parseFloat(Sa(a, "marginLeft")) ||
            (n.contains(a.ownerDocument, a)
              ? a.getBoundingClientRect().left -
                Pa(a, { marginLeft: 0 }, function () {
                  return a.getBoundingClientRect().left;
                })
              : 0)) + "px"
        : void 0;
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (n.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0,
              e = {},
              f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Na.test(a) || (n.cssHooks[a + b].set = db);
    }),
    n.fn.extend({
      css: function (a, b) {
        return Y(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (n.isArray(b)) {
              for (d = Ra(a), e = b.length; e > g; g++)
                f[b[g]] = n.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return cb(this, !0);
      },
      hide: function () {
        return cb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              W(this) ? n(this).show() : n(this).hide();
            });
      },
    });
  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }
  (n.Tween = gb),
    (gb.prototype = {
      constructor: gb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || n.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (n.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = gb.propHooks[this.prop];
        return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = gb.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                n.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : gb.propHooks._default.set(this),
          this
        );
      },
    }),
    (gb.prototype.init.prototype = gb.prototype),
    (gb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          n.fx.step[a.prop]
            ? n.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[n.cssProps[a.prop]] &&
                !n.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : n.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (gb.propHooks.scrollTop = gb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (n.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (n.fx = gb.prototype.init),
    (n.fx.step = {});
  var hb,
    ib,
    jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
  function lb() {
    return (
      a.setTimeout(function () {
        hb = void 0;
      }),
      (hb = n.now())
    );
  }
  function mb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = V[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function nb(a, b, c) {
    for (
      var d,
        e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]),
        f = 0,
        g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue ||
      ((h = n._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      m.always(function () {
        m.always(function () {
          h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = n.css(a, "display")),
        (k =
          "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j),
        "inline" === k &&
          "none" === n.css(a, "float") &&
          (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        l.shrinkWrapBlocks() ||
          m.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), jb.exec(e))) {
        if (
          (delete b[d],
          (f = f || "toggle" === e),
          e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || n.style(a, d);
      } else j = void 0;
    if (n.isEmptyObject(o))
      "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = n._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? n(a).show()
          : m.done(function () {
              n(a).hide();
            }),
        m.done(function () {
          var b;
          n._removeData(a, "fxshow");
          for (b in o) n.style(a, b, o[b]);
        });
      for (d in o)
        (g = nb(q ? r[d] : 0, d, m)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = n.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = n.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function qb(a, b, c) {
    var d,
      e,
      f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = hb || lb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(
          !0,
          { specialEasing: {}, easing: n.easing._default },
          c
        ),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if ((d = qb.prefilters[f].call(j, a, k, j.opts)))
        return (
          n.isFunction(d.stop) &&
            (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(
              d.stop,
              d
            )),
          d
        );
    return (
      n.map(k, nb, j),
      n.isFunction(j.opts.start) && j.opts.start.call(a, j),
      n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (n.Animation = n.extend(qb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(G));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]),
          (qb.tweeners[c] = qb.tweeners[c] || []),
          qb.tweeners[c].unshift(b);
    },
    prefilters: [ob],
    prefilter: function (a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    },
  })),
    (n.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? n.extend({}, a)
          : {
              complete: c || (!c && b) || (n.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !n.isFunction(b) && b),
            };
      return (
        (d.duration = n.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in n.fx.speeds
          ? n.fx.speeds[d.duration]
          : n.fx.speeds._default),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue);
        }),
        d
      );
    }),
    n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = n.timers,
              g = n._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || n.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = n._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = n.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(mb(b, !0), a, d, e);
      };
    }),
    n.each(
      {
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        n.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (n.timers = []),
    (n.fx.tick = function () {
      var a,
        b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), (hb = void 0);
    }),
    (n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }),
    (n.fx.interval = 13),
    (n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
    }),
    (n.fx.stop = function () {
      a.clearInterval(ib), (ib = null);
    }),
    (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (n.fn.delay = function (b, c) {
      return (
        (b = n.fx ? n.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      (c = d.createElement("div")),
        c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (a = c.getElementsByTagName("a")[0]),
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        (a = c.getElementsByTagName("a")[0]),
        (a.style.cssText = "top:1px"),
        (l.getSetAttribute = "t" !== c.className),
        (l.style = /top/.test(a.getAttribute("style"))),
        (l.hrefNormalized = "/a" === a.getAttribute("href")),
        (l.checkOn = !!b.value),
        (l.optSelected = f.selected),
        (l.enctype = !!d.createElement("form").enctype),
        (e.disabled = !0),
        (l.optDisabled = !f.disabled),
        (b = d.createElement("input")),
        b.setAttribute("value", ""),
        (l.input = "" === b.getAttribute("value")),
        (b.value = "t"),
        b.setAttribute("type", "radio"),
        (l.radioValue = "t" === b.value);
    })();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = n.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, n(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : n.isArray(e) &&
                    (e = n.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b =
              n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c
                  ? c.replace(rb, "")
                  : null == c
                  ? ""
                  : c)
          );
      }
    },
  }),
    n.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = n.find.attr(a, "value");
            return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                (c.selected || i === e) &&
                  (l.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !n.nodeName(c.parentNode, "optgroup")))
              ) {
                if (((b = n(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;
            while (g--)
              if (
                ((d = e[g]), n.inArray(n.valHooks.option.get(d), f) > -1)
              )
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (a, b) {
          return n.isArray(b)
            ? (a.checked = n.inArray(n(a).val(), b) > -1)
            : void 0;
        },
      }),
        l.checkOn ||
          (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var tb,
    ub,
    vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    },
  }),
    n.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? n.prop(a, b, c)
            : ((1 === f && n.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (e =
                  n.attrHooks[b] ||
                  (n.expr.match.bool.test(b) ? ub : tb))),
              void 0 !== c
                ? null === c
                  ? void n.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = n.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(G);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = n.propFix[c] || c),
              n.expr.match.bool.test(c)
                ? (yb && xb) || !wb.test(c)
                  ? (a[d] = !1)
                  : (a[n.camelCase("default-" + c)] = a[d] = !1)
                : n.attr(a, c, ""),
              a.removeAttribute(xb ? c : d);
      },
    }),
    (ub = {
      set: function (a, b, c) {
        return (
          b === !1
            ? n.removeAttr(a, c)
            : (yb && xb) || !wb.test(c)
            ? a.setAttribute((!xb && n.propFix[c]) || c, c)
            : (a[n.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = vb[b] || n.find.attr;
      (yb && xb) || !wb.test(b)
        ? (vb[b] = function (a, b, d) {
            var e, f;
            return (
              d ||
                ((f = vb[b]),
                (vb[b] = e),
                (e = null != c(a, b, d) ? b.toLowerCase() : null),
                (vb[b] = f)),
              e
            );
          })
        : (vb[b] = function (a, b, c) {
            return c
              ? void 0
              : a[n.camelCase("default-" + b)]
              ? b.toLowerCase()
              : null;
          });
    }),
    (yb && xb) ||
      (n.attrHooks.value = {
        set: function (a, b, c) {
          return n.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : tb && tb.set(a, b, c);
        },
      }),
    xb ||
      ((tb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d ||
              a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (vb.id =
        vb.name =
        vb.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (n.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: tb.set,
      }),
      (n.attrHooks.contenteditable = {
        set: function (a, b, c) {
          tb.set(a, "" === b ? !1 : b, c);
        },
      }),
      n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    l.style ||
      (n.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = n.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    n.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && n.isXMLDoc(a)) ||
              ((b = n.propFix[b] || b), (e = n.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = n.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : zb.test(a.nodeName) || (Ab.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    l.hrefNormalized ||
      n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    l.optSelected ||
      (n.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b &&
              (b.selectedIndex,
              b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
        set: function (a) {
          var b = a.parentNode;
          b &&
            (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;
  function Cb(a) {
    return n.attr(a, "class") || "";
  }
  n.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, Cb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, Cb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while ((c = this[i++]))
          if (
            ((e = Cb(c)),
            (d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")))
          ) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = n.trim(d)), e !== h && n.attr(c, "class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : n.isFunction(a)
        ? this.each(function (c) {
            n(this).toggleClass(a.call(this, c, Cb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = n(this)), (f = a.match(G) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = Cb(this)), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (
          1 === c.nodeType &&
          (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
  }),
    n.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        n.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    n.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = n.trim(b + "");
    return e &&
      !n.trim(
        e.replace(Gb, function (a, b, e, f) {
          return (
            c && b && (d = 0),
            0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : n.error("Invalid JSON: " + b);
  }),
    (n.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new a.DOMParser()),
            (c = d.parseFromString(b, "text/xml")))
          : ((c = new a.ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          n.error("Invalid XML: " + b),
        c
      );
    });
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];
  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        n.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Vb(a, b) {
    var c,
      d,
      e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a;
  }
  function Wb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e &&
          (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Xb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a.throws) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while ((b = Jb.exec(g))) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u) for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this;
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this;
          },
        };
      if (
        ((p.promise(w).complete = q.add),
        (w.success = w.done),
        (w.error = w.fail),
        (l.url = ((b || l.url || Rb) + "")
          .replace(Hb, "")
          .replace(Mb, Sb[1] + "//")),
        (l.type = c.method || c.type || l.method || l.type),
        (l.dataTypes = n
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(G) || [""]),
        null == l.crossDomain &&
          ((d = Nb.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !d ||
            (d[1] === Sb[1] &&
              d[2] === Sb[2] &&
              (d[3] || ("http:" === d[1] ? "80" : "443")) ===
                (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = n.param(l.data, l.traditional)),
        Ub(Ob, l, c, w),
        2 === u)
      )
        return w;
      (i = n.event && l.global),
        i && 0 === n.active++ && n.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !Lb.test(l.type)),
        (f = l.url),
        l.hasContent ||
          (l.data &&
            ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data),
            delete l.data),
          l.cache === !1 &&
            (l.url = Ib.test(f)
              ? f.replace(Ib, "$1_=" + Eb++)
              : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
        l.ifModified &&
          (n.lastModified[f] &&
            w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
          n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
        ((l.data && l.hasContent && l.contentType !== !1) ||
          c.contentType) &&
          w.setRequestHeader("Content-Type", l.contentType),
        w.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
        return w.abort();
      v = "abort";
      for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]);
      if ((j = Ub(Pb, l, c, w))) {
        if (
          ((w.readyState = 1), i && o.trigger("ajaxSend", [w, l]), 2 === u)
        )
          return w;
        l.async &&
          l.timeout > 0 &&
          (h = a.setTimeout(function () {
            w.abort("timeout");
          }, l.timeout));
        try {
          (u = 1), j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");
      function y(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u &&
          ((u = 2),
          h && a.clearTimeout(h),
          (j = void 0),
          (g = e || ""),
          (w.readyState = b > 0 ? 4 : 0),
          (k = (b >= 200 && 300 > b) || 304 === b),
          d && (v = Wb(l, w, d)),
          (v = Xb(l, v, w, k)),
          k
            ? (l.ifModified &&
                ((x = w.getResponseHeader("Last-Modified")),
                x && (n.lastModified[f] = x),
                (x = w.getResponseHeader("etag")),
                x && (n.etag[f] = x)),
              204 === b || "HEAD" === l.type
                ? (y = "nocontent")
                : 304 === b
                ? (y = "notmodified")
                : ((y = v.state), (s = v.data), (t = v.error), (k = !t)))
            : ((t = y), (!b && y) || ((y = "error"), 0 > b && (b = 0))),
          (w.status = b),
          (w.statusText = (c || y) + ""),
          k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
          w.statusCode(r),
          (r = void 0),
          i &&
            o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
          q.fireWith(m, [w, y]),
          i &&
            (o.trigger("ajaxComplete", [w, l]),
            --n.active || n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    },
  }),
    n.each(["get", "post"], function (a, b) {
      n[b] = function (a, c, d, e) {
        return (
          n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          n.ajax(
            n.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              n.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (n._evalUrl = function (a) {
      return n.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    n.fn.extend({
      wrapAll: function (a) {
        if (n.isFunction(a))
          return this.each(function (b) {
            n(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return n.isFunction(a)
          ? this.each(function (b) {
              n(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = n(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = n.isFunction(a);
        return this.each(function (c) {
          n(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            n.nodeName(this, "body") ||
              n(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  function Yb(a) {
    return (a.style && a.style.display) || n.css(a, "display");
  }
  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  (n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets()
      ? a.offsetWidth <= 0 &&
          a.offsetHeight <= 0 &&
          !a.getClientRects().length
      : Zb(a);
  }),
    (n.expr.filters.visible = function (a) {
      return !n.expr.filters.hidden(a);
    });
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || _b.test(a)
          ? d(a, e)
          : dc(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== n.type(b)) d(a, b);
    else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
  }
  (n.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = n.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] =
            encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
      n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
    )
      n.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+");
  }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = n.prop(this, "elements");
          return a ? n.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              cc.test(this.nodeName) &&
              !bc.test(a) &&
              (this.checked || !Z.test(a))
            );
          })
          .map(function (a, b) {
            var c = n(this).val();
            return null == c
              ? null
              : n.isArray(c)
              ? n.map(c, function (a) {
                  return { name: b.name, value: a.replace(ac, "\r\n") };
                })
              : { name: b.name, value: c.replace(ac, "\r\n") };
          })
          .get();
      },
    }),
    (n.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return this.isLocal
              ? ic()
              : d.documentMode > 8
              ? hc()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  hc()) ||
                ic();
          }
        : hc);
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in fc) fc[a](void 0, !0);
    }),
    (l.cors = !!gc && "withCredentials" in gc),
    (gc = l.ajax = !!gc),
    gc &&
      n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
          var c;
          return {
            send: function (d, e) {
              var f,
                g = b.xhr(),
                h = ++ec;
              if (
                (g.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (f in b.xhrFields) g[f] = b.xhrFields[f];
              b.mimeType &&
                g.overrideMimeType &&
                g.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  d["X-Requested-With"] ||
                  (d["X-Requested-With"] = "XMLHttpRequest");
              for (f in d)
                void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
              g.send((b.hasContent && b.data) || null),
                (c = function (a, d) {
                  var f, i, j;
                  if (c && (d || 4 === g.readyState))
                    if (
                      (delete fc[h],
                      (c = void 0),
                      (g.onreadystatechange = n.noop),
                      d)
                    )
                      4 !== g.readyState && g.abort();
                    else {
                      (j = {}),
                        (f = g.status),
                        "string" == typeof g.responseText &&
                          (j.text = g.responseText);
                      try {
                        i = g.statusText;
                      } catch (k) {
                        i = "";
                      }
                      f || !b.isLocal || b.crossDomain
                        ? 1223 === f && (f = 204)
                        : (f = j.text ? 200 : 404);
                    }
                  j && e(f, i, j, g.getAllResponseHeaders());
                }),
                b.async
                  ? 4 === g.readyState
                    ? a.setTimeout(c)
                    : (g.onreadystatechange = fc[h] = c)
                  : c();
            },
            abort: function () {
              c && c(void 0, !0);
            },
          };
        }
      });
  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a;
      },
    },
  }),
    n.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    n.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = d.head || n("head")[0] || d.documentElement;
        return {
          send: function (e, f) {
            (b = d.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || f(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return (this[a] = !0), a;
    },
  }),
    n.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (kc.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              kc.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            n.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(kc, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? n(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), jc.push(e)),
              g && n.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (n.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || d);
      var e = x.exec(a),
        f = !c && [];
      return e
        ? [b.createElement(e[1])]
        : ((e = ja([a], b, f)),
          f && f.length && n(f).remove(),
          n.merge([], e.childNodes));
    });
  var lc = n.fn.load;
  (n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h > -1 && ((d = n.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      n.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        n
          .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
          })
          .always(
            c &&
              function (a, b) {
                g.each(function () {
                  c.apply(this, f || [a.responseText, b, a]);
                });
              }
          ),
      this
    );
  }),
    n.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        n.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (n.expr.filters.animated = function (a) {
      return n.grep(n.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  function mc(a) {
    return n.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (n.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = n.css(a, "top")),
        (i = n.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          n.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    n.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                n.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            n.contains(b, e)
              ? ("undefined" != typeof e.getBoundingClientRect &&
                  (d = e.getBoundingClientRect()),
                (c = mc(f)),
                {
                  top:
                    d.top +
                    (c.pageYOffset || b.scrollTop) -
                    (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === n.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                n.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += n.css(a[0], "borderTopWidth", !0)),
                (c.left += n.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - n.css(d, "marginTop", !0),
              left: b.left - c.left - n.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (
            a &&
            !n.nodeName(a, "html") &&
            "static" === n.css(a, "position")
          )
            a = a.offsetParent;
          return a || Qa;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
          return Y(
            this,
            function (a, d, e) {
              var f = mc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? n(f).scrollLeft() : e,
                        c ? e : n(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    n.each(["top", "left"], function (a, b) {
      n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
        return c
          ? ((c = Sa(a, b)), Oa.test(c) ? n(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (a, b) {
      n.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          n.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return Y(
              this,
              function (b, c, d) {
                var e;
                return n.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? n.css(b, c, g)
                  : n.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    n.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (n.fn.size = function () {
      return this.length;
    }),
    (n.fn.andSelf = n.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      });
  var nc = a.jQuery,
    oc = a.$;
  return (
    (n.noConflict = function (b) {
      return (
        a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
      );
    }),
    b || (a.jQuery = a.$ = n),
    n
  );
});
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  "use strict";
  var f =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    J =
      "undefined" == typeof window
        ? {
            document: f,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    l = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  function L(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof l) return e;
    if (e)
      if ("string" == typeof e) {
        var s,
          r,
          n = e.trim();
        if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
          var o = "div";
          for (
            0 === n.indexOf("<li") && (o = "ul"),
              0 === n.indexOf("<tr") && (o = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) ||
                (o = "tr"),
              0 === n.indexOf("<tbody") && (o = "table"),
              0 === n.indexOf("<option") && (o = "select"),
              (r = f.createElement(o)).innerHTML = n,
              i = 0;
            i < r.childNodes.length;
            i += 1
          )
            a.push(r.childNodes[i]);
        } else
          for (
            s =
              t || "#" !== e[0] || e.match(/[ .<>:~]/)
                ? (t || f).querySelectorAll(e.trim())
                : [f.getElementById(e.trim().split("#")[1])],
              i = 0;
            i < s.length;
            i += 1
          )
            s[i] && a.push(s[i]);
      } else if (e.nodeType || e === J || e === f) a.push(e);
      else if (0 < e.length && e[0].nodeType)
        for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new l(a);
  }
  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
  var t = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.add(t[a]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.remove(t[a]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1)
        for (var i = 0; i < this.length; i += 1)
          void 0 !== this[i] &&
            void 0 !== this[i].classList &&
            this[i].classList.toggle(t[a]);
      return this;
    },
    attr: function (e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1)
        if (2 === a.length) this[i].setAttribute(e, t);
        else
          for (var s in e)
            (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1)
          (a = this[i]).dom7ElementDataStorage ||
            (a.dom7ElementDataStorage = {}),
            (a.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((a = this[0])) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
          return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransform = e), (a.transform = e);
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        (a.webkitTransitionDuration = e), (a.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i = t[0],
        r = t[1],
        n = t[2],
        s = t[3];
      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)))
            n.apply(t, a);
          else
            for (var i = L(t).parents(), s = 0; s < i.length; s += 1)
              L(i[s]).is(r) && n.apply(i[s], a);
        }
      }
      function l(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] &&
        ((i = (e = t)[0]), (n = e[1]), (s = e[2]), (r = void 0)),
        s || (s = !1);
      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
              u.dom7LiveListeners[h].push({
                listener: n,
                proxyListener: o,
              }),
              u.addEventListener(h, o, s);
          }
        else
          for (d = 0; d < p.length; d += 1) {
            var v = p[d];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
              u.dom7Listeners[v].push({ listener: n, proxyListener: l }),
              u.addEventListener(v, l, s);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] &&
        ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)),
        n || (n = !1);
      for (var o = i.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            u = void 0;
          if (
            (!s && c.dom7Listeners
              ? (u = c.dom7Listeners[d])
              : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
            u && u.length)
          )
            for (var h = u.length - 1; 0 <= h; h -= 1) {
              var v = u[h];
              r && v.listener === r
                ? (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1))
                : r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r
                ? (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1))
                : r ||
                  (c.removeEventListener(d, v.proxyListener, n),
                  u.splice(h, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
        for (var r = a[s], n = 0; n < this.length; n += 1) {
          var o = this[n],
            l = void 0;
          try {
            l = new J.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (l = f.createEvent("Event")).initEvent(r, !0, !0),
              (l.detail = i);
          }
          (o.dom7EventData = e.filter(function (e, t) {
            return 0 < t;
          })),
            o.dispatchEvent(l),
            (o.dom7EventData = []),
            delete o.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (t) {
      var a,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function r(e) {
        if (e.target === this)
          for (t.call(this, e), a = 0; a < i.length; a += 1)
            s.off(i[a], r);
      }
      if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
      return this;
    },
    outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (0 < this.length) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = f.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === J ? J.scrollY : e.scrollTop,
          n = e === J ? J.scrollX : e.scrollLeft;
        return { top: t.top + r - i, left: t.left + n - s };
      }
      return null;
    },
    css: function (e, t) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0])
          return J.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      var t,
        a,
        i = this[0];
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (t = L(e), a = 0; a < t.length; a += 1)
          if (t[a] === i) return !0;
        return !1;
      }
      if (e === f) return i === f;
      if (e === J) return i === J;
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
          if (t[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        a = this.length;
      return new l(
        a - 1 < e
          ? []
          : e < 0
          ? (t = a + e) < 0
            ? []
            : [this[t]]
          : [this[e]]
      );
    },
    append: function () {
      for (var e, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      for (var i = 0; i < t.length; i += 1) {
        e = t[i];
        for (var s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            var r = f.createElement("div");
            for (r.innerHTML = e; r.firstChild; )
              this[s].appendChild(r.firstChild);
          } else if (e instanceof l)
            for (var n = 0; n < e.length; n += 1)
              this[s].appendChild(e[n]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t, a;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var i = f.createElement("div");
          for (
            i.innerHTML = e, a = i.childNodes.length - 1;
            0 <= a;
            a -= 1
          )
            this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
        } else if (e instanceof l)
          for (a = 0; a < e.length; a += 1)
            this[t].insertBefore(e[a], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
      return this;
    },
    next: function (e) {
      return 0 < this.length
        ? e
          ? this[0].nextElementSibling &&
            L(this[0].nextElementSibling).is(e)
            ? new l([this[0].nextElementSibling])
            : new l([])
          : this[0].nextElementSibling
          ? new l([this[0].nextElementSibling])
          : new l([])
        : new l([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.nextElementSibling; ) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
      }
      return new l(t);
    },
    prev: function (e) {
      if (0 < this.length) {
        var t = this[0];
        return e
          ? t.previousElementSibling && L(t.previousElementSibling).is(e)
            ? new l([t.previousElementSibling])
            : new l([])
          : t.previousElementSibling
          ? new l([t.previousElementSibling])
          : new l([]);
      }
      return new l([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.previousElementSibling; ) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
      }
      return new l(t);
    },
    parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        null !== this[a].parentNode &&
          (e
            ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode)
            : t.push(this[a].parentNode));
      return L(r(t));
    },
    parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].parentNode; i; )
          e ? L(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      return L(r(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new l([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (
          var i = this[a].querySelectorAll(e), s = 0;
          s < i.length;
          s += 1
        )
          t.push(i[s]);
      return new l(t);
    },
    children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1)
        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
          e
            ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s])
            : 1 === i[s].nodeType && t.push(i[s]);
      return new l(r(t));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a, i;
      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);
        for (i = 0; i < s.length; i += 1)
          (this[this.length] = s[i]), (this.length += 1);
      }
      return this;
    },
    styles: function () {
      return this[0] ? J.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });
  var e,
    a,
    i,
    s,
    ee = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        var a, i, s;
        void 0 === t && (t = "x");
        var r = J.getComputedStyle(e, null);
        return (
          J.WebKitCSSMatrix
            ? (6 <
                (i = r.transform || r.webkitTransform).split(",").length &&
                (i = i
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (s = new J.WebKitCSSMatrix("none" === i ? "" : i)))
            : (a = (s =
                r.MozTransform ||
                r.OTransform ||
                r.MsTransform ||
                r.msTransform ||
                r.transform ||
                r
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (i = J.WebKitCSSMatrix
              ? s.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          "y" === t &&
            (i = J.WebKitCSSMatrix
              ? s.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          i || 0
        );
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          s,
          r = {},
          n = e || J.location.href;
        if ("string" == typeof n && n.length)
          for (
            s = (a = (n =
              -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              t = 0;
            t < s;
            t += 1
          )
            (i = a[t].replace(/#\S+/g, "").split("=")),
              (r[decodeURIComponent(i[0])] =
                void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
        return r;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s)
            for (
              var r = Object.keys(Object(s)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var l = r[n],
                d = Object.getOwnPropertyDescriptor(s, l);
              void 0 !== d &&
                d.enumerable &&
                (ee.isObject(a[l]) && ee.isObject(s[l])
                  ? ee.extend(a[l], s[l])
                  : !ee.isObject(a[l]) && ee.isObject(s[l])
                  ? ((a[l] = {}), ee.extend(a[l], s[l]))
                  : (a[l] = s[l]));
            }
        }
        return a;
      },
    },
    te =
      ((i = f.createElement("div")),
      {
        touch:
          (J.Modernizr && !0 === J.Modernizr.touch) ||
          !!(
            0 < J.navigator.maxTouchPoints ||
            "ontouchstart" in J ||
            (J.DocumentTouch && f instanceof J.DocumentTouch)
          ),
        pointerEvents: !!(
          J.navigator.pointerEnabled ||
          J.PointerEvent ||
          ("maxTouchPoints" in J.navigator &&
            0 < J.navigator.maxTouchPoints)
        ),
        prefixedPointerEvents: !!J.navigator.msPointerEnabled,
        transition:
          ((a = i.style),
          "transition" in a ||
            "webkitTransition" in a ||
            "MozTransition" in a),
        transforms3d:
          (J.Modernizr && !0 === J.Modernizr.csstransforms3d) ||
          ((e = i.style),
          "webkitPerspective" in e ||
            "MozPerspective" in e ||
            "OPerspective" in e ||
            "MsPerspective" in e ||
            "perspective" in e),
        flexbox: (function () {
          for (
            var e = i.style,
              t =
                "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                  " "
                ),
              a = 0;
            a < t.length;
            a += 1
          )
            if (t[a] in e) return !0;
          return !1;
        })(),
        observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
        passiveListener: (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            J.addEventListener("testPassiveListener", null, t);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in J,
      }),
    I = {
      isIE:
        !!J.navigator.userAgent.match(/Trident/g) ||
        !!J.navigator.userAgent.match(/MSIE/g),
      isEdge: !!J.navigator.userAgent.match(/Edge/g),
      isSafari:
        ((s = J.navigator.userAgent.toLowerCase()),
        0 <= s.indexOf("safari") &&
          s.indexOf("chrome") < 0 &&
          s.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        J.navigator.userAgent
      ),
    },
    n = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    o = { components: { configurable: !0 } };
  (n.prototype.on = function (e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []),
          i.eventsListeners[e][s](t);
      }),
      i
    );
  }),
    (n.prototype.once = function (a, i, e) {
      var s = this;
      if ("function" != typeof i) return s;
      function r() {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
      }
      return (r.f7proxy = i), s.on(a, r, e);
    }),
    (n.prototype.off = function (e, i) {
      var s = this;
      return (
        s.eventsListeners &&
          e.split(" ").forEach(function (a) {
            void 0 === i
              ? (s.eventsListeners[a] = [])
              : s.eventsListeners[a] &&
                s.eventsListeners[a].length &&
                s.eventsListeners[a].forEach(function (e, t) {
                  (e === i || (e.f7proxy && e.f7proxy === i)) &&
                    s.eventsListeners[a].splice(t, 1);
                });
          }),
        s
      );
    }),
    (n.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a,
        i,
        s,
        r = this;
      return (
        r.eventsListeners &&
          ("string" == typeof e[0] || Array.isArray(e[0])
            ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r))
            : ((a = e[0].events),
              (i = e[0].data),
              (s = e[0].context || r)),
          (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
              var t = [];
              r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
                t.forEach(function (e) {
                  e.apply(s, i);
                });
            }
          })),
        r
      );
    }),
    (n.prototype.useModulesParams = function (a) {
      var i = this;
      i.modules &&
        Object.keys(i.modules).forEach(function (e) {
          var t = i.modules[e];
          t.params && ee.extend(a, t.params);
        });
    }),
    (n.prototype.useModules = function (i) {
      void 0 === i && (i = {});
      var s = this;
      s.modules &&
        Object.keys(s.modules).forEach(function (e) {
          var a = s.modules[e],
            t = i[e] || {};
          a.instance &&
            Object.keys(a.instance).forEach(function (e) {
              var t = a.instance[e];
              s[e] = "function" == typeof t ? t.bind(s) : t;
            }),
            a.on &&
              s.on &&
              Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e]);
              }),
            a.create && a.create.bind(s)(t);
        });
    }),
    (o.components.set = function (e) {
      this.use && this.use(e);
    }),
    (n.installModule = function (t) {
      for (var e = [], a = arguments.length - 1; 0 < a--; )
        e[a] = arguments[a + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s =
        t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
      return (
        (i.prototype.modules[s] = t).proto &&
          Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e];
          }),
        t.static &&
          Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e];
          }),
        t.install && t.install.apply(i, e),
        i
      );
    }),
    (n.use = function (e) {
      for (var t = [], a = arguments.length - 1; 0 < a--; )
        t[a] = arguments[a + 1];
      var i = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return i.installModule(e);
          }),
          i)
        : i.installModule.apply(i, [e].concat(t));
    }),
    Object.defineProperties(n, o);
  var d = {
    updateSize: function () {
      var e,
        t,
        a = this,
        i = a.$el;
      (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
        (t =
          void 0 !== a.params.height
            ? a.params.height
            : i[0].clientHeight),
        (0 === e && a.isHorizontal()) ||
          (0 === t && a.isVertical()) ||
          ((e =
            e -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (t =
            t -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          ee.extend(a, {
            width: e,
            height: t,
            size: a.isHorizontal() ? e : t,
          }));
    },
    updateSlides: function () {
      var e = this,
        t = e.params,
        a = e.$wrapperEl,
        i = e.size,
        s = e.rtlTranslate,
        r = e.wrongRTL,
        n = e.virtual && t.virtual.enabled,
        o = n ? e.virtual.slides.length : e.slides.length,
        l = a.children("." + e.params.slideClass),
        d = n ? e.virtual.slides.length : l.length,
        p = [],
        c = [],
        u = [],
        h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length,
        m = e.snapGrid.length,
        g = t.spaceBetween,
        b = -h,
        w = 0,
        y = 0;
      if (void 0 !== i) {
        var x, T;
        "string" == typeof g &&
          0 <= g.indexOf("%") &&
          (g = (parseFloat(g.replace("%", "")) / 100) * i),
          (e.virtualSize = -g),
          s
            ? l.css({ marginLeft: "", marginTop: "" })
            : l.css({ marginRight: "", marginBottom: "" }),
          1 < t.slidesPerColumn &&
            ((x =
              Math.floor(d / t.slidesPerColumn) ===
              d / e.params.slidesPerColumn
                ? d
                : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (
          var E,
            S = t.slidesPerColumn,
            C = x / S,
            M = Math.floor(d / t.slidesPerColumn),
            z = 0;
          z < d;
          z += 1
        ) {
          T = 0;
          var P = l.eq(z);
          if (1 < t.slidesPerColumn) {
            var k = void 0,
              $ = void 0,
              L = void 0;
            "column" === t.slidesPerColumnFill
              ? ((L = z - ($ = Math.floor(z / S)) * S),
                (M < $ || ($ === M && L === S - 1)) &&
                  S <= (L += 1) &&
                  ((L = 0), ($ += 1)),
                (k = $ + (L * x) / S),
                P.css({
                  "-webkit-box-ordinal-group": k,
                  "-moz-box-ordinal-group": k,
                  "-ms-flex-order": k,
                  "-webkit-order": k,
                  order: k,
                }))
              : ($ = z - (L = Math.floor(z / C)) * C),
              P.css(
                "margin-" + (e.isHorizontal() ? "top" : "left"),
                0 !== L && t.spaceBetween && t.spaceBetween + "px"
              )
                .attr("data-swiper-column", $)
                .attr("data-swiper-row", L);
          }
          if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null),
                D = P[0].style.transform,
                O = P[0].style.webkitTransform;
              if (
                (D && (P[0].style.transform = "none"),
                O && (P[0].style.webkitTransform = "none"),
                t.roundLengths)
              )
                T = e.isHorizontal()
                  ? P.outerWidth(!0)
                  : P.outerHeight(!0);
              else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")),
                  H = parseFloat(I.getPropertyValue("padding-left")),
                  N = parseFloat(I.getPropertyValue("padding-right")),
                  G = parseFloat(I.getPropertyValue("margin-left")),
                  B = parseFloat(I.getPropertyValue("margin-right")),
                  X = I.getPropertyValue("box-sizing");
                T =
                  X && "border-box" === X ? A + G + B : A + H + N + G + B;
              } else {
                var Y = parseFloat(I.getPropertyValue("height")),
                  V = parseFloat(I.getPropertyValue("padding-top")),
                  F = parseFloat(I.getPropertyValue("padding-bottom")),
                  R = parseFloat(I.getPropertyValue("margin-top")),
                  q = parseFloat(I.getPropertyValue("margin-bottom")),
                  W = I.getPropertyValue("box-sizing");
                T =
                  W && "border-box" === W ? Y + R + q : Y + V + F + R + q;
              }
              D && (P[0].style.transform = D),
                O && (P[0].style.webkitTransform = O),
                t.roundLengths && (T = Math.floor(T));
            } else
              (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView),
                t.roundLengths && (T = Math.floor(T)),
                l[z] &&
                  (e.isHorizontal()
                    ? (l[z].style.width = T + "px")
                    : (l[z].style.height = T + "px"));
            l[z] && (l[z].swiperSlideSize = T),
              u.push(T),
              t.centeredSlides
                ? ((b = b + T / 2 + w / 2 + g),
                  0 === w && 0 !== z && (b = b - i / 2 - g),
                  0 === z && (b = b - i / 2 - g),
                  Math.abs(b) < 0.001 && (b = 0),
                  t.roundLengths && (b = Math.floor(b)),
                  y % t.slidesPerGroup == 0 && p.push(b),
                  c.push(b))
                : (t.roundLengths && (b = Math.floor(b)),
                  y % t.slidesPerGroup == 0 && p.push(b),
                  c.push(b),
                  (b = b + T + g)),
              (e.virtualSize += T + g),
              (w = T),
              (y += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + v),
          s &&
            r &&
            ("slide" === t.effect || "coverflow" === t.effect) &&
            a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
          (te.flexbox && !t.setWrapperSize) ||
            (e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
          1 < t.slidesPerColumn &&
            ((e.virtualSize = (T + t.spaceBetween) * x),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) -
              t.spaceBetween),
            e.isHorizontal()
              ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
              : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
            t.centeredSlides))
        ) {
          E = [];
          for (var j = 0; j < p.length; j += 1) {
            var U = p[j];
            t.roundLengths && (U = Math.floor(U)),
              p[j] < e.virtualSize + p[0] && E.push(U);
          }
          p = E;
        }
        if (!t.centeredSlides) {
          E = [];
          for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];
            t.roundLengths && (_ = Math.floor(_)),
              p[K] <= e.virtualSize - i && E.push(_);
          }
          (p = E),
            1 <
              Math.floor(e.virtualSize - i) -
                Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
        }
        if (
          (0 === p.length && (p = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? s
                ? l.css({ marginLeft: g + "px" })
                : l.css({ marginRight: g + "px" })
              : l.css({ marginBottom: g + "px" })),
          t.centerInsufficientSlides)
        ) {
          var Z = 0;
          if (
            (u.forEach(function (e) {
              Z += e + (t.spaceBetween ? t.spaceBetween : 0);
            }),
            (Z -= t.spaceBetween) < i)
          ) {
            var Q = (i - Z) / 2;
            p.forEach(function (e, t) {
              p[t] = e - Q;
            }),
              c.forEach(function (e, t) {
                c[t] = e + Q;
              });
          }
        }
        ee.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u,
        }),
          d !== o && e.emit("slidesLengthChange"),
          p.length !== f &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          c.length !== m && e.emit("slidesGridLengthChange"),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        a = this,
        i = [],
        s = 0;
      if (
        ("number" == typeof e
          ? a.setTransition(e)
          : !0 === e && a.setTransition(a.params.speed),
        "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
      )
        for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          var r = a.activeIndex + t;
          if (r > a.slides.length) break;
          i.push(a.slides.eq(r)[0]);
        }
      else i.push(a.slides.eq(a.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var n = i[t].offsetHeight;
          s = s < n ? n : s;
        }
      s && a.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this,
        a = t.params,
        i = t.slides,
        s = t.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e),
          i.removeClass(a.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l =
              (r +
                (a.centeredSlides ? t.minTranslate() : 0) -
                o.swiperSlideOffset) /
              (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              p = d + t.slidesSizesGrid[n];
            ((0 <= d && d < t.size) ||
              (0 < p && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(n),
              i.eq(n).addClass(a.slideVisibleClass));
          }
          o.progress = s ? -l : l;
        }
        t.visibleSlides = L(t.visibleSlides);
      }
    },
    updateProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this,
        a = t.params,
        i = t.maxTranslate() - t.minTranslate(),
        s = t.progress,
        r = t.isBeginning,
        n = t.isEnd,
        o = r,
        l = n;
      0 === i
        ? (n = r = !(s = 0))
        : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = 1 <= s)),
        ee.extend(t, { progress: s, isBeginning: r, isEnd: n }),
        (a.watchSlidesProgress || a.watchSlidesVisibility) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !l && t.emit("reachEnd toEdge"),
        ((o && !r) || (l && !n)) && t.emit("fromEdge"),
        t.emit("progress", s);
    },
    updateSlidesClasses: function () {
      var e,
        t = this,
        a = t.slides,
        i = t.params,
        s = t.$wrapperEl,
        r = t.activeIndex,
        n = t.realIndex,
        o = t.virtual && i.virtual.enabled;
      a.removeClass(
        i.slideActiveClass +
          " " +
          i.slideNextClass +
          " " +
          i.slidePrevClass +
          " " +
          i.slideDuplicateActiveClass +
          " " +
          i.slideDuplicateNextClass +
          " " +
          i.slideDuplicatePrevClass
      ),
        (e = o
          ? t.$wrapperEl.find(
              "." + i.slideClass + '[data-swiper-slide-index="' + r + '"]'
            )
          : a.eq(r)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    n +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    n +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass));
      var l = e
        .nextAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e
        .prevAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass);
      i.loop &&
        0 === d.length &&
        (d = a.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    d.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    d.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        a = this,
        i = a.rtlTranslate ? a.translate : -a.translate,
        s = a.slidesGrid,
        r = a.snapGrid,
        n = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        d = a.snapIndex,
        p = e;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1)
          void 0 !== s[c + 1]
            ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2
              ? (p = c)
              : i >= s[c] && i < s[c + 1] && (p = c + 1)
            : i >= s[c] && (p = c);
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }
      if (
        ((t =
          0 <= r.indexOf(i)
            ? r.indexOf(i)
            : Math.floor(p / n.slidesPerGroup)) >= r.length &&
          (t = r.length - 1),
        p !== o)
      ) {
        var u = parseInt(
          a.slides.eq(p).attr("data-swiper-slide-index") || p,
          10
        );
        ee.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p,
        }),
          a.emit("activeIndexChange"),
          a.emit("snapIndexChange"),
          l !== u && a.emit("realIndexChange"),
          a.emit("slideChange");
      } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this,
        a = t.params,
        i = L(e.target).closest("." + a.slideClass)[0],
        s = !1;
      if (i)
        for (var r = 0; r < t.slides.length; r += 1)
          t.slides[r] === i && (s = !0);
      if (!i || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              L(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = L(i).index()),
        a.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var p = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        a = this.rtlTranslate,
        i = this.translate,
        s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = ee.getTranslate(s[0], e);
      return a && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var a = this,
        i = a.rtlTranslate,
        s = a.params,
        r = a.$wrapperEl,
        n = a.progress,
        o = 0,
        l = 0;
      a.isHorizontal() ? (o = i ? -e : e) : (l = e),
        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
        s.virtualTranslate ||
          (te.transforms3d
            ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)")
            : r.transform("translate(" + o + "px, " + l + "px)")),
        (a.previousTranslate = a.translate),
        (a.translate = a.isHorizontal() ? o : l);
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n &&
        a.updateProgress(e),
        a.emit("setTranslate", a.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
  };
  var c = {
    setTransition: function (e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.params,
        r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;
      if (
        (n || (n = r < i ? "next" : i < r ? "prev" : "reset"),
        a.emit("transitionStart"),
        e && i !== r)
      ) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"),
          "next" === n
            ? a.emit("slideNextTransitionStart")
            : a.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.previousIndex;
      (a.animating = !1), a.setTransition(0);
      var r = t;
      if (
        (r || (r = s < i ? "next" : i < s ? "prev" : "reset"),
        a.emit("transitionEnd"),
        e && i !== s)
      ) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"),
          "next" === r
            ? a.emit("slideNextTransitionEnd")
            : a.emit("slidePrevTransitionEnd");
      }
    },
  };
  var u = {
    slideTo: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      var s = this,
        r = e;
      r < 0 && (r = 0);
      var n = s.params,
        o = s.snapGrid,
        l = s.slidesGrid,
        d = s.previousIndex,
        p = s.activeIndex,
        c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1),
        (p || n.initialSlide || 0) === (d || 0) &&
          a &&
          s.emit("beforeSlideChangeStart");
      var h,
        v = -o[u];
      if ((s.updateProgress(v), n.normalizeSlideIndex))
        for (var f = 0; f < l.length; f += 1)
          -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
          return !1;
        if (
          !s.allowSlidePrev &&
          v > s.translate &&
          v > s.maxTranslate() &&
          (p || 0) !== r
        )
          return !1;
      }
      return (
        (h = p < r ? "next" : r < p ? "prev" : "reset"),
        (c && -v === s.translate) || (!c && v === s.translate)
          ? (s.updateActiveIndex(r),
            n.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== n.effect && s.setTranslate(v),
            "reset" !== h &&
              (s.transitionStart(a, h), s.transitionEnd(a, h)),
            !1)
          : (0 !== t && te.transition
              ? (s.setTransition(t),
                s.setTranslate(v),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a, h),
                s.animating ||
                  ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                    (s.onSlideToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onSlideToWrapperTransitionEnd
                        ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(a, h));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  )))
              : (s.setTransition(0),
                s.setTranslate(v),
                s.updateActiveIndex(r),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, i),
                s.transitionStart(a, h),
                s.transitionEnd(a, h)),
            !0)
      );
    },
    slideToLoop: function (e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      var s = e;
      return (
        this.params.loop && (s += this.loopedSlides),
        this.slideTo(s, t, a, i)
      );
    },
    slideNext: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating;
      return s.loop
        ? !r &&
            (i.loopFix(),
            (i._clientLeft = i.$wrapperEl[0].clientLeft),
            i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
        : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    },
    slidePrev: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.snapGrid,
        o = i.slidesGrid,
        l = i.rtlTranslate;
      if (s.loop) {
        if (r) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var p,
        c = d(l ? i.translate : -i.translate),
        u = n.map(function (e) {
          return d(e);
        }),
        h =
          (o.map(function (e) {
            return d(e);
          }),
          n[u.indexOf(c)],
          n[u.indexOf(c) - 1]);
      return (
        void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
        i.slideTo(p, e, t, a)
      );
    },
    slideReset: function (e, t, a) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, a)
      );
    },
    slideToClosest: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.activeIndex,
        r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
          o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o &&
          (s = i.params.slidesPerGroup);
      }
      return i.slideTo(s, e, t, a);
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        a = t.params,
        i = t.$wrapperEl,
        s =
          "auto" === a.slidesPerView
            ? t.slidesPerViewDynamic()
            : a.slidesPerView,
        r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) return;
        (e = parseInt(
          L(t.clickedSlide).attr("data-swiper-slide-index"),
          10
        )),
          a.centeredSlides
            ? r < t.loopedSlides - s / 2 ||
              r > t.slides.length - t.loopedSlides + s / 2
              ? (t.loopFix(),
                (r = i
                  .children(
                    "." +
                      a.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      a.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                ee.nextTick(function () {
                  t.slideTo(r);
                }))
              : t.slideTo(r)
            : r > t.slides.length - s
            ? (t.loopFix(),
              (r = i
                .children(
                  "." +
                    a.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    a.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              ee.nextTick(function () {
                t.slideTo(r);
              }))
            : t.slideTo(r);
      } else t.slideTo(r);
    },
  };
  var h = {
    loopCreate: function () {
      var i = this,
        e = i.params,
        t = i.$wrapperEl;
      t.children(
        "." + e.slideClass + "." + e.slideDuplicateClass
      ).remove();
      var s = t.children("." + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - (s.length % e.slidesPerGroup);
        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(
              e.slideClass + " " + e.slideBlankClass
            );
            t.append(n);
          }
          s = t.children("." + e.slideClass);
        }
      }
      "auto" !== e.slidesPerView ||
        e.loopedSlides ||
        (e.loopedSlides = s.length),
        (i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
        (i.loopedSlides += e.loopAdditionalSlides),
        i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [],
        l = [];
      s.each(function (e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t),
          e < s.length && e >= s.length - i.loopedSlides && o.push(t),
          a.attr("data-swiper-slide-index", e);
      });
      for (var d = 0; d < l.length; d += 1)
        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      for (var p = o.length - 1; 0 <= p; p -= 1)
        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
    },
    loopFix: function () {
      var e,
        t = this,
        a = t.params,
        i = t.activeIndex,
        s = t.slides,
        r = t.loopedSlides,
        n = t.allowSlidePrev,
        o = t.allowSlideNext,
        l = t.snapGrid,
        d = t.rtlTranslate;
      (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
      var p = -l[i] - t.getTranslate();
      i < r
        ? ((e = s.length - 3 * r + i),
          (e += r),
          t.slideTo(e, 0, !1, !0) &&
            0 !== p &&
            t.setTranslate((d ? -t.translate : t.translate) - p))
        : (("auto" === a.slidesPerView && 2 * r <= i) ||
            i >= s.length - r) &&
          ((e = -s.length + i + r),
          (e += r),
          t.slideTo(e, 0, !1, !0) &&
            0 !== p &&
            t.setTranslate((d ? -t.translate : t.translate) - p));
      (t.allowSlidePrev = n), (t.allowSlideNext = o);
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        a = this.slides;
      e
        .children(
          "." +
            t.slideClass +
            "." +
            t.slideDuplicateClass +
            ",." +
            t.slideClass +
            "." +
            t.slideBlankClass
        )
        .remove(),
        a.removeAttr("data-swiper-slide-index");
    },
  };
  var v = {
    setGrabCursor: function (e) {
      if (
        !(
          te.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked)
        )
      ) {
        var t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      }
    },
    unsetGrabCursor: function () {
      te.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        (this.el.style.cursor = "");
    },
  };
  var m = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if (
          (i.loop && t.loopDestroy(),
          "object" == typeof e && "length" in e)
        )
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(),
          (i.observer && te.observer) || t.update();
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length;
        } else i.prepend(e);
        a.loop && t.loopCreate(),
          (a.observer && te.observer) || t.update(),
          t.slideTo(r, 0, !1);
      },
      addSlide: function (e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
        s.loop &&
          ((r -= a.loopedSlides),
          a.loopDestroy(),
          (a.slides = i.children("." + s.slideClass)));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);
        else if (n <= e) a.appendSlide(t);
        else {
          for (
            var o = e < r ? r + 1 : r, l = [], d = n - 1;
            e <= d;
            d -= 1
          ) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p);
          }
          if ("object" == typeof t && "length" in t) {
            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
            o = e < r ? r + t.length : r;
          } else i.append(t);
          for (var u = 0; u < l.length; u += 1) i.append(l[u]);
          s.loop && a.loopCreate(),
            (s.observer && te.observer) || a.update(),
            s.loop
              ? a.slideTo(o + a.loopedSlides, 0, !1)
              : a.slideTo(o, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop &&
          ((s -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = i.children("." + a.slideClass)));
        var r,
          n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1)
            (r = e[o]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
            (n = Math.max(n, 0));
        a.loop && t.loopCreate(),
          (a.observer && te.observer) || t.update(),
          a.loop
            ? t.slideTo(n + t.loopedSlides, 0, !1)
            : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    g = (function () {
      var e = J.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: J.cordova || J.phonegap,
          phonegap: J.cordova || J.phonegap,
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
        i &&
          !a &&
          ((t.os = "android"),
          (t.osVersion = i[2]),
          (t.android = !0),
          (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
        (s || n || r) && ((t.os = "ios"), (t.ios = !0)),
        n &&
          !r &&
          ((t.osVersion = n[2].replace(/_/g, ".")), (t.iphone = !0)),
        s && ((t.osVersion = s[2].replace(/_/g, ".")), (t.ipad = !0)),
        r &&
          ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null),
          (t.iphone = !0)),
        t.ios &&
          t.osVersion &&
          0 <= e.indexOf("Version/") &&
          "10" === t.osVersion.split(".")[0] &&
          (t.osVersion = e
            .toLowerCase()
            .split("version/")[1]
            .split(" ")[0]),
        (t.desktop = !(t.os || t.android || t.webView)),
        (t.webView =
          (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        t.os && "ios" === t.os)
      ) {
        var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');
        t.minimalUi =
          !t.webView &&
          (r || n) &&
          (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) &&
          l &&
          0 <= l.getAttribute("content").indexOf("minimal-ui");
      }
      return (t.pixelRatio = J.devicePixelRatio || 1), t;
    })();
  function b() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      if (
        ((e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        t.freeMode)
      ) {
        var n = Math.min(
          Math.max(e.translate, e.maxTranslate()),
          e.minTranslate()
        );
        e.setTranslate(n),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          t.autoHeight && e.updateAutoHeight();
      } else
        e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || 1 < t.slidesPerView) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0);
      (e.allowSlidePrev = s),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  var w = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    y = {
      update: d,
      translate: p,
      transition: c,
      slide: u,
      loop: h,
      grabCursor: v,
      manipulation: m,
      events: {
        attachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
          (e.onTouchStart = function (e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches;
            if (!t.animating || !i.preventInteractionOnTransition) {
              var r = e;
              if (
                (r.originalEvent && (r = r.originalEvent),
                (a.isTouchEvent = "touchstart" === r.type),
                (a.isTouchEvent || !("which" in r) || 3 !== r.which) &&
                  !(
                    (!a.isTouchEvent && "button" in r && 0 < r.button) ||
                    (a.isTouched && a.isMoved)
                  ))
              )
                if (
                  i.noSwiping &&
                  L(r.target).closest(
                    i.noSwipingSelector
                      ? i.noSwipingSelector
                      : "." + i.noSwipingClass
                  )[0]
                )
                  t.allowClick = !0;
                else if (
                  !i.swipeHandler ||
                  L(r).closest(i.swipeHandler)[0]
                ) {
                  (s.currentX =
                    "touchstart" === r.type
                      ? r.targetTouches[0].pageX
                      : r.pageX),
                    (s.currentY =
                      "touchstart" === r.type
                        ? r.targetTouches[0].pageY
                        : r.pageY);
                  var n = s.currentX,
                    o = s.currentY,
                    l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                  if (!l || !(n <= d || n >= J.screen.width - d)) {
                    if (
                      (ee.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (s.startX = n),
                      (s.startY = o),
                      (a.touchStartTime = ee.now()),
                      (t.allowClick = !0),
                      t.updateSize(),
                      (t.swipeDirection = void 0),
                      0 < i.threshold && (a.allowThresholdMove = !1),
                      "touchstart" !== r.type)
                    ) {
                      var p = !0;
                      L(r.target).is(a.formElements) && (p = !1),
                        f.activeElement &&
                          L(f.activeElement).is(a.formElements) &&
                          f.activeElement !== r.target &&
                          f.activeElement.blur();
                      var c =
                        p &&
                        t.allowTouchMove &&
                        i.touchStartPreventDefault;
                      (i.touchStartForcePreventDefault || c) &&
                        r.preventDefault();
                    }
                    t.emit("touchStart", r);
                  }
                }
            }
          }.bind(e)),
            (e.onTouchMove = function (e) {
              var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                n = e;
              if (
                (n.originalEvent && (n = n.originalEvent), a.isTouched)
              ) {
                if (!a.isTouchEvent || "mousemove" !== n.type) {
                  var o =
                      "touchmove" === n.type
                        ? n.targetTouches[0].pageX
                        : n.pageX,
                    l =
                      "touchmove" === n.type
                        ? n.targetTouches[0].pageY
                        : n.pageY;
                  if (n.preventedByNestedSwiper)
                    return (s.startX = o), void (s.startY = l);
                  if (!t.allowTouchMove)
                    return (
                      (t.allowClick = !1),
                      void (
                        a.isTouched &&
                        (ee.extend(s, {
                          startX: o,
                          startY: l,
                          currentX: o,
                          currentY: l,
                        }),
                        (a.touchStartTime = ee.now()))
                      )
                    );
                  if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                    if (t.isVertical()) {
                      if (
                        (l < s.startY &&
                          t.translate <= t.maxTranslate()) ||
                        (l > s.startY && t.translate >= t.minTranslate())
                      )
                        return (a.isTouched = !1), void (a.isMoved = !1);
                    } else if (
                      (o < s.startX && t.translate <= t.maxTranslate()) ||
                      (o > s.startX && t.translate >= t.minTranslate())
                    )
                      return;
                  if (
                    a.isTouchEvent &&
                    f.activeElement &&
                    n.target === f.activeElement &&
                    L(n.target).is(a.formElements)
                  )
                    return (a.isMoved = !0), void (t.allowClick = !1);
                  if (
                    (a.allowTouchCallbacks && t.emit("touchMove", n),
                    !(n.targetTouches && 1 < n.targetTouches.length))
                  ) {
                    (s.currentX = o), (s.currentY = l);
                    var d,
                      p = s.currentX - s.startX,
                      c = s.currentY - s.startY;
                    if (
                      !(
                        t.params.threshold &&
                        Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) <
                          t.params.threshold
                      )
                    )
                      if (
                        (void 0 === a.isScrolling &&
                          ((t.isHorizontal() && s.currentY === s.startY) ||
                          (t.isVertical() && s.currentX === s.startX)
                            ? (a.isScrolling = !1)
                            : 25 <= p * p + c * c &&
                              ((d =
                                (180 *
                                  Math.atan2(Math.abs(c), Math.abs(p))) /
                                Math.PI),
                              (a.isScrolling = t.isHorizontal()
                                ? d > i.touchAngle
                                : 90 - d > i.touchAngle))),
                        a.isScrolling && t.emit("touchMoveOpposite", n),
                        void 0 === a.startMoving &&
                          ((s.currentX === s.startX &&
                            s.currentY === s.startY) ||
                            (a.startMoving = !0)),
                        a.isScrolling)
                      )
                        a.isTouched = !1;
                      else if (a.startMoving) {
                        (t.allowClick = !1),
                          n.preventDefault(),
                          i.touchMoveStopPropagation &&
                            !i.nested &&
                            n.stopPropagation(),
                          a.isMoved ||
                            (i.loop && t.loopFix(),
                            (a.startTranslate = t.getTranslate()),
                            t.setTransition(0),
                            t.animating &&
                              t.$wrapperEl.trigger(
                                "webkitTransitionEnd transitionend"
                              ),
                            (a.allowMomentumBounce = !1),
                            !i.grabCursor ||
                              (!0 !== t.allowSlideNext &&
                                !0 !== t.allowSlidePrev) ||
                              t.setGrabCursor(!0),
                            t.emit("sliderFirstMove", n)),
                          t.emit("sliderMove", n),
                          (a.isMoved = !0);
                        var u = t.isHorizontal() ? p : c;
                        (s.diff = u),
                          (u *= i.touchRatio),
                          r && (u = -u),
                          (t.swipeDirection = 0 < u ? "prev" : "next"),
                          (a.currentTranslate = u + a.startTranslate);
                        var h = !0,
                          v = i.resistanceRatio;
                        if (
                          (i.touchReleaseOnEdges && (v = 0),
                          0 < u && a.currentTranslate > t.minTranslate()
                            ? ((h = !1),
                              i.resistance &&
                                (a.currentTranslate =
                                  t.minTranslate() -
                                  1 +
                                  Math.pow(
                                    -t.minTranslate() +
                                      a.startTranslate +
                                      u,
                                    v
                                  )))
                            : u < 0 &&
                              a.currentTranslate < t.maxTranslate() &&
                              ((h = !1),
                              i.resistance &&
                                (a.currentTranslate =
                                  t.maxTranslate() +
                                  1 -
                                  Math.pow(
                                    t.maxTranslate() -
                                      a.startTranslate -
                                      u,
                                    v
                                  ))),
                          h && (n.preventedByNestedSwiper = !0),
                          !t.allowSlideNext &&
                            "next" === t.swipeDirection &&
                            a.currentTranslate < a.startTranslate &&
                            (a.currentTranslate = a.startTranslate),
                          !t.allowSlidePrev &&
                            "prev" === t.swipeDirection &&
                            a.currentTranslate > a.startTranslate &&
                            (a.currentTranslate = a.startTranslate),
                          0 < i.threshold)
                        ) {
                          if (
                            !(
                              Math.abs(u) > i.threshold ||
                              a.allowThresholdMove
                            )
                          )
                            return void (a.currentTranslate =
                              a.startTranslate);
                          if (!a.allowThresholdMove)
                            return (
                              (a.allowThresholdMove = !0),
                              (s.startX = s.currentX),
                              (s.startY = s.currentY),
                              (a.currentTranslate = a.startTranslate),
                              void (s.diff = t.isHorizontal()
                                ? s.currentX - s.startX
                                : s.currentY - s.startY)
                            );
                        }
                        i.followFinger &&
                          ((i.freeMode ||
                            i.watchSlidesProgress ||
                            i.watchSlidesVisibility) &&
                            (t.updateActiveIndex(),
                            t.updateSlidesClasses()),
                          i.freeMode &&
                            (0 === a.velocities.length &&
                              a.velocities.push({
                                position:
                                  s[
                                    t.isHorizontal() ? "startX" : "startY"
                                  ],
                                time: a.touchStartTime,
                              }),
                            a.velocities.push({
                              position:
                                s[
                                  t.isHorizontal()
                                    ? "currentX"
                                    : "currentY"
                                ],
                              time: ee.now(),
                            })),
                          t.updateProgress(a.currentTranslate),
                          t.setTranslate(a.currentTranslate));
                      }
                  }
                }
              } else
                a.startMoving &&
                  a.isScrolling &&
                  t.emit("touchMoveOpposite", n);
            }.bind(e)),
            (e.onTouchEnd = function (e) {
              var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtlTranslate,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
              if (
                (d.originalEvent && (d = d.originalEvent),
                a.allowTouchCallbacks && t.emit("touchEnd", d),
                (a.allowTouchCallbacks = !1),
                !a.isTouched)
              )
                return (
                  a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                  (a.isMoved = !1),
                  void (a.startMoving = !1)
                );
              i.grabCursor &&
                a.isMoved &&
                a.isTouched &&
                (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                t.setGrabCursor(!1);
              var p,
                c = ee.now(),
                u = c - a.touchStartTime;
              if (
                (t.allowClick &&
                  (t.updateClickedSlide(d),
                  t.emit("tap", d),
                  u < 300 &&
                    300 < c - a.lastClickTime &&
                    (a.clickTimeout && clearTimeout(a.clickTimeout),
                    (a.clickTimeout = ee.nextTick(function () {
                      t && !t.destroyed && t.emit("click", d);
                    }, 300))),
                  u < 300 &&
                    c - a.lastClickTime < 300 &&
                    (a.clickTimeout && clearTimeout(a.clickTimeout),
                    t.emit("doubleTap", d))),
                (a.lastClickTime = ee.now()),
                ee.nextTick(function () {
                  t.destroyed || (t.allowClick = !0);
                }),
                !a.isTouched ||
                  !a.isMoved ||
                  !t.swipeDirection ||
                  0 === s.diff ||
                  a.currentTranslate === a.startTranslate)
              )
                return (
                  (a.isTouched = !1),
                  (a.isMoved = !1),
                  void (a.startMoving = !1)
                );
              if (
                ((a.isTouched = !1),
                (a.isMoved = !1),
                (a.startMoving = !1),
                (p = i.followFinger
                  ? r
                    ? t.translate
                    : -t.translate
                  : -a.currentTranslate),
                i.freeMode)
              ) {
                if (p < -t.minTranslate())
                  return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                  return void (t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1));
                if (i.freeModeMomentum) {
                  if (1 < a.velocities.length) {
                    var h = a.velocities.pop(),
                      v = a.velocities.pop(),
                      f = h.position - v.position,
                      m = h.time - v.time;
                    (t.velocity = f / m),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                        (t.velocity = 0),
                      (150 < m || 300 < ee.now() - h.time) &&
                        (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= i.freeModeMomentumVelocityRatio),
                    (a.velocities.length = 0);
                  var g = 1e3 * i.freeModeMomentumRatio,
                    b = t.velocity * g,
                    w = t.translate + b;
                  r && (w = -w);
                  var y,
                    x,
                    T = !1,
                    E =
                      20 *
                      Math.abs(t.velocity) *
                      i.freeModeMomentumBounceRatio;
                  if (w < t.maxTranslate())
                    i.freeModeMomentumBounce
                      ? (w + t.maxTranslate() < -E &&
                          (w = t.maxTranslate() - E),
                        (y = t.maxTranslate()),
                        (T = !0),
                        (a.allowMomentumBounce = !0))
                      : (w = t.maxTranslate()),
                      i.loop && i.centeredSlides && (x = !0);
                  else if (w > t.minTranslate())
                    i.freeModeMomentumBounce
                      ? (w - t.minTranslate() > E &&
                          (w = t.minTranslate() + E),
                        (y = t.minTranslate()),
                        (T = !0),
                        (a.allowMomentumBounce = !0))
                      : (w = t.minTranslate()),
                      i.loop && i.centeredSlides && (x = !0);
                  else if (i.freeModeSticky) {
                    for (var S, C = 0; C < l.length; C += 1)
                      if (l[C] > -w) {
                        S = C;
                        break;
                      }
                    w = -(w =
                      Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) ||
                      "next" === t.swipeDirection
                        ? l[S]
                        : l[S - 1]);
                  }
                  if (
                    (x &&
                      t.once("transitionEnd", function () {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  )
                    g = r
                      ? Math.abs((-w - t.translate) / t.velocity)
                      : Math.abs((w - t.translate) / t.velocity);
                  else if (i.freeModeSticky)
                    return void t.slideToClosest();
                  i.freeModeMomentumBounce && T
                    ? (t.updateProgress(y),
                      t.setTransition(g),
                      t.setTranslate(w),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      n.transitionEnd(function () {
                        t &&
                          !t.destroyed &&
                          a.allowMomentumBounce &&
                          (t.emit("momentumBounce"),
                          t.setTransition(i.speed),
                          t.setTranslate(y),
                          n.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          }));
                      }))
                    : t.velocity
                    ? (t.updateProgress(w),
                      t.setTransition(g),
                      t.setTranslate(w),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        n.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(w),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else if (i.freeModeSticky)
                  return void t.slideToClosest();
                (!i.freeModeMomentum || u >= i.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              } else {
                for (
                  var M = 0, z = t.slidesSizesGrid[0], P = 0;
                  P < o.length;
                  P += i.slidesPerGroup
                )
                  void 0 !== o[P + i.slidesPerGroup]
                    ? p >= o[P] &&
                      p < o[P + i.slidesPerGroup] &&
                      (z = o[(M = P) + i.slidesPerGroup] - o[P])
                    : p >= o[P] &&
                      ((M = P), (z = o[o.length - 1] - o[o.length - 2]));
                var k = (p - o[M]) / z;
                if (u > i.longSwipesMs) {
                  if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    (k >= i.longSwipesRatio
                      ? t.slideTo(M + i.slidesPerGroup)
                      : t.slideTo(M)),
                    "prev" === t.swipeDirection &&
                      (k > 1 - i.longSwipesRatio
                        ? t.slideTo(M + i.slidesPerGroup)
                        : t.slideTo(M));
                } else {
                  if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    t.slideTo(M + i.slidesPerGroup),
                    "prev" === t.swipeDirection && t.slideTo(M);
                }
              }
            }.bind(e)),
            (e.onClick = function (e) {
              this.allowClick ||
                (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation &&
                  this.animating &&
                  (e.stopPropagation(), e.stopImmediatePropagation()));
            }.bind(e));
          var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (
            te.touch ||
            (!te.pointerEvents && !te.prefixedPointerEvents)
          ) {
            if (te.touch) {
              var o = !(
                "touchstart" !== a.start ||
                !te.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              r.addEventListener(a.start, e.onTouchStart, o),
                r.addEventListener(
                  a.move,
                  e.onTouchMove,
                  te.passiveListener ? { passive: !1, capture: n } : n
                ),
                r.addEventListener(a.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !g.ios && !g.android) ||
              (t.simulateTouch && !te.touch && g.ios)) &&
              (r.addEventListener("mousedown", e.onTouchStart, !1),
              f.addEventListener("mousemove", e.onTouchMove, n),
              f.addEventListener("mouseup", e.onTouchEnd, !1));
          } else
            r.addEventListener(a.start, e.onTouchStart, !1),
              f.addEventListener(a.move, e.onTouchMove, n),
              f.addEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) &&
            r.addEventListener("click", e.onClick, !0),
            e.on(
              g.ios || g.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              b,
              !0
            );
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (
            te.touch ||
            (!te.pointerEvents && !te.prefixedPointerEvents)
          ) {
            if (te.touch) {
              var o = !(
                "onTouchStart" !== a.start ||
                !te.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              r.removeEventListener(a.start, e.onTouchStart, o),
                r.removeEventListener(a.move, e.onTouchMove, n),
                r.removeEventListener(a.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !g.ios && !g.android) ||
              (t.simulateTouch && !te.touch && g.ios)) &&
              (r.removeEventListener("mousedown", e.onTouchStart, !1),
              f.removeEventListener("mousemove", e.onTouchMove, n),
              f.removeEventListener("mouseup", e.onTouchEnd, !1));
          } else
            r.removeEventListener(a.start, e.onTouchStart, !1),
              f.removeEventListener(a.move, e.onTouchMove, n),
              f.removeEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) &&
            r.removeEventListener("click", e.onClick, !0),
            e.off(
              g.ios || g.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              b
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides;
          void 0 === i && (i = 0);
          var s = e.params,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var n = e.getBreakpoint(r);
            if (n && e.currentBreakpoint !== n) {
              var o = n in r ? r[n] : void 0;
              o &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                ].forEach(function (e) {
                  var t = o[e];
                  void 0 !== t &&
                    (o[e] =
                      "slidesPerView" !== e ||
                      ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var l = o || e.originalParams,
                d = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
              d && a && e.changeDirection(),
                ee.extend(e.params, l),
                ee.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = n),
                p &&
                  a &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              a = [];
            Object.keys(e).forEach(function (e) {
              a.push(e);
            }),
              a.sort(function (e, t) {
                return parseInt(e, 10) - parseInt(t, 10);
              });
            for (var i = 0; i < a.length; i += 1) {
              var s = a[i];
              this.params.breakpointsInverse
                ? s <= J.innerWidth && (t = s)
                : s >= J.innerWidth && !t && (t = s);
            }
            return t || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.isLocked;
          (e.isLocked = 1 === e.snapGrid.length),
            (e.allowSlideNext = !e.isLocked),
            (e.allowSlidePrev = !e.isLocked),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
            t &&
              t !== e.isLocked &&
              ((e.isEnd = !1), e.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];
          s.push("initialized"),
            s.push(a.direction),
            a.freeMode && s.push("free-mode"),
            te.flexbox || s.push("no-flexbox"),
            a.autoHeight && s.push("autoheight"),
            e && s.push("rtl"),
            1 < a.slidesPerColumn && s.push("multirow"),
            g.android && s.push("android"),
            g.ios && s.push("ios"),
            (I.isIE || I.isEdge) &&
              (te.pointerEvents || te.prefixedPointerEvents) &&
              s.push("wp8-" + a.direction),
            s.forEach(function (e) {
              t.push(a.containerModifierClass + e);
            }),
            i.addClass(t.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n;
          function o() {
            r && r();
          }
          e.complete && s
            ? o()
            : t
            ? (((n = new J.Image()).onload = o),
              (n.onerror = o),
              i && (n.sizes = i),
              a && (n.srcset = a),
              t && (n.src = t))
            : o();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    x = {},
    T = (function (u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--; )
          a[i] = arguments[i];
        1 === a.length && a[0].constructor && a[0].constructor === Object
          ? (s = a[0])
          : ((t = (e = a)[0]), (s = e[1])),
          s || (s = {}),
          (s = ee.extend({}, s)),
          t && !s.el && (s.el = t),
          u.call(this, s),
          Object.keys(y).forEach(function (t) {
            Object.keys(y[t]).forEach(function (e) {
              h.prototype[e] || (h.prototype[e] = y[t][e]);
            });
          });
        var r = this;
        void 0 === r.modules && (r.modules = {}),
          Object.keys(r.modules).forEach(function (e) {
            var t = r.modules[e];
            if (t.params) {
              var a = Object.keys(t.params)[0],
                i = t.params[a];
              if ("object" != typeof i || null === i) return;
              if (!(a in s && "enabled" in i)) return;
              !0 === s[a] && (s[a] = { enabled: !0 }),
                "object" != typeof s[a] ||
                  "enabled" in s[a] ||
                  (s[a].enabled = !0),
                s[a] || (s[a] = { enabled: !1 });
            }
          });
        var n = ee.extend({}, w);
        r.useModulesParams(n),
          (r.params = ee.extend({}, n, x, s)),
          (r.originalParams = ee.extend({}, r.params)),
          (r.passedParams = ee.extend({}, s));
        var o = (r.$ = L)(r.params.el);
        if ((t = o[0])) {
          if (1 < o.length) {
            var l = [];
            return (
              o.each(function (e, t) {
                var a = ee.extend({}, s, { el: t });
                l.push(new h(a));
              }),
              l
            );
          }
          (t.swiper = r), o.data("swiper", r);
          var d,
            p,
            c = o.children("." + r.params.wrapperClass);
          return (
            ee.extend(r, {
              $el: o,
              el: t,
              $wrapperEl: c,
              wrapperEl: c[0],
              classNames: [],
              slides: L(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === r.params.direction;
              },
              isVertical: function () {
                return "vertical" === r.params.direction;
              },
              rtl:
                "rtl" === t.dir.toLowerCase() ||
                "rtl" === o.css("direction"),
              rtlTranslate:
                "horizontal" === r.params.direction &&
                ("rtl" === t.dir.toLowerCase() ||
                  "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === c.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: r.params.allowSlideNext,
              allowSlidePrev: r.params.allowSlidePrev,
              touchEvents:
                ((d = ["touchstart", "touchmove", "touchend"]),
                (p = ["mousedown", "mousemove", "mouseup"]),
                te.pointerEvents
                  ? (p = ["pointerdown", "pointermove", "pointerup"])
                  : te.prefixedPointerEvents &&
                    (p = [
                      "MSPointerDown",
                      "MSPointerMove",
                      "MSPointerUp",
                    ]),
                (r.touchEventsTouch = {
                  start: d[0],
                  move: d[1],
                  end: d[2],
                }),
                (r.touchEventsDesktop = {
                  start: p[0],
                  move: p[1],
                  end: p[2],
                }),
                te.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video",
                lastClickTime: ee.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: r.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            r.useModules(),
            r.params.init && r.init(),
            r
          );
        }
      }
      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (((h.prototype = Object.create(u && u.prototype)).constructor =
          h).prototype.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var o, l = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !o &&
                ((n += 1), s < (l += a[d].swiperSlideSize) && (o = !0));
            for (var p = r - 1; 0 <= p; p -= 1)
              a[p] &&
                !o &&
                ((n += 1), s < (l += a[p].swiperSlideSize) && (o = !0));
          } else
            for (var c = r + 1; c < a.length; c += 1)
              i[c] - i[r] < s && (n += 1);
          return n;
        }),
        (h.prototype.update = function () {
          var a = this;
          if (a && !a.destroyed) {
            var e = a.snapGrid,
              t = a.params;
            t.breakpoints && a.setBreakpoint(),
              a.updateSize(),
              a.updateSlides(),
              a.updateProgress(),
              a.updateSlidesClasses(),
              a.params.freeMode
                ? (i(), a.params.autoHeight && a.updateAutoHeight())
                : (("auto" === a.params.slidesPerView ||
                    1 < a.params.slidesPerView) &&
                  a.isEnd &&
                  !a.params.centeredSlides
                    ? a.slideTo(a.slides.length - 1, 0, !1, !0)
                    : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
              t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
              a.emit("update");
          }
          function i() {
            var e = a.rtlTranslate ? -1 * a.translate : a.translate,
              t = Math.min(
                Math.max(e, a.maxTranslate()),
                a.minTranslate()
              );
            a.setTranslate(t),
              a.updateActiveIndex(),
              a.updateSlidesClasses();
          }
        }),
        (h.prototype.changeDirection = function (a, e) {
          void 0 === e && (e = !0);
          var t = this,
            i = t.params.direction;
          return (
            a || (a = "horizontal" === i ? "vertical" : "horizontal"),
            a === i ||
              ("horizontal" !== a && "vertical" !== a) ||
              ("vertical" === i &&
                (t.$el
                  .removeClass(
                    t.params.containerModifierClass +
                      "vertical wp8-vertical"
                  )
                  .addClass("" + t.params.containerModifierClass + a),
                (I.isIE || I.isEdge) &&
                  (te.pointerEvents || te.prefixedPointerEvents) &&
                  t.$el.addClass(
                    t.params.containerModifierClass + "wp8-" + a
                  )),
              "horizontal" === i &&
                (t.$el
                  .removeClass(
                    t.params.containerModifierClass +
                      "horizontal wp8-horizontal"
                  )
                  .addClass("" + t.params.containerModifierClass + a),
                (I.isIE || I.isEdge) &&
                  (te.pointerEvents || te.prefixedPointerEvents) &&
                  t.$el.addClass(
                    t.params.containerModifierClass + "wp8-" + a
                  )),
              (t.params.direction = a),
              t.slides.each(function (e, t) {
                "vertical" === a
                  ? (t.style.width = "")
                  : (t.style.height = "");
              }),
              t.emit("changeDirection"),
              e && t.update()),
            t
          );
        }),
        (h.prototype.init = function () {
          var e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"));
        }),
        (h.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides;
          return (
            void 0 === a.params ||
              a.destroyed ||
              (a.emit("beforeDestroy"),
              (a.initialized = !1),
              a.detachEvents(),
              i.loop && a.loopDestroy(),
              t &&
                (a.removeClasses(),
                s.removeAttr("style"),
                r.removeAttr("style"),
                n &&
                  n.length &&
                  n
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")
                    .removeAttr("data-swiper-column")
                    .removeAttr("data-swiper-row")),
              a.emit("destroy"),
              Object.keys(a.eventsListeners).forEach(function (e) {
                a.off(e);
              }),
              !1 !== e &&
                ((a.$el[0].swiper = null),
                a.$el.data("swiper", null),
                ee.deleteProps(a)),
              (a.destroyed = !0)),
            null
          );
        }),
        (h.extendDefaults = function (e) {
          ee.extend(x, e);
        }),
        (e.extendedDefaults.get = function () {
          return x;
        }),
        (e.defaults.get = function () {
          return w;
        }),
        (e.Class.get = function () {
          return u;
        }),
        (e.$.get = function () {
          return L;
        }),
        Object.defineProperties(h, e),
        h
      );
    })(n),
    E = { name: "device", proto: { device: g }, static: { device: g } },
    S = {
      name: "support",
      proto: { support: te },
      static: { support: te },
    },
    C = { name: "browser", proto: { browser: I }, static: { browser: I } },
    M = {
      name: "resize",
      create: function () {
        var e = this;
        ee.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          J.addEventListener("resize", this.resize.resizeHandler),
            J.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          J.removeEventListener("resize", this.resize.resizeHandler),
            J.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    z = {
      func: J.MutationObserver || J.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new z.func(function (e) {
            if (1 !== e.length) {
              var t = function () {
                a.emit("observerUpdate", e[0]);
              };
              J.requestAnimationFrame
                ? J.requestAnimationFrame(t)
                : J.setTimeout(t, 0);
            } else a.emit("observerUpdate", e[0]);
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          a.observer.observers.push(i);
      },
      init: function () {
        var e = this;
        if (te.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    P = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1,
      },
      create: function () {
        ee.extend(this, {
          observer: {
            init: z.init.bind(this),
            attach: z.attach.bind(this),
            destroy: z.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    k = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          w = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(i / 2) + s + o),
              (b = Math.floor(i / 2) + s + l))
            : ((g = i + (s - 1) + o), (b = s + l));
        var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
        function E() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (ee.extend(t.virtual, {
            from: y,
            to: x,
            offset: T,
            slidesGrid: t.slidesGrid,
          }),
          p === y && c === x && !e)
        )
          return (
            t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: T,
              from: y,
              to: x,
              slides: (function () {
                for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void E()
          );
        var S = [],
          C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var M = p; M <= c; M += 1)
            (M < y || x < M) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    M +
                    '"]'
                )
                .remove();
        for (var z = 0; z < u.length; z += 1)
          y <= z &&
            z <= x &&
            (void 0 === c || e
              ? C.push(z)
              : (c < z && C.push(z), z < p && S.push(z)));
        C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }),
          S.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
          E();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide
          ? L(i.renderSlide.call(a, e, t))
          : L(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (a.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1)
            e[r] && t.virtual.slides.unshift(e[r]);
          (i = a + e.length), (s = e.length);
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            o = {};
          Object.keys(n).forEach(function (e) {
            o[parseInt(e, 10) + s] = n[e];
          }),
            (t.virtual.cache = o);
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; 0 <= i; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < a && (a -= 1),
                (a = Math.max(a, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < a && (a -= 1),
              (a = Math.max(a, 0));
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        (e.virtual.slides = []),
          e.params.virtual.cache && (e.virtual.cache = {}),
          e.virtual.update(!0),
          e.slideTo(0, 0);
      },
    },
    $ = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          virtual: {
            update: k.update.bind(e),
            appendSlide: k.appendSlide.bind(e),
            prependSlide: k.prependSlide.bind(e),
            removeSlide: k.removeSlide.bind(e),
            removeAllSlides: k.removeAllSlides.bind(e),
            renderSlide: k.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            ee.extend(e.params, t),
              ee.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    D = {
      handle: function (e) {
        var t = this,
          a = t.rtlTranslate,
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === s) || (t.isVertical() && 40 === s))
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === s) || (t.isVertical() && 38 === s))
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (f.activeElement &&
              f.activeElement.nodeName &&
              ("input" === f.activeElement.nodeName.toLowerCase() ||
                "textarea" === f.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (37 === s || 39 === s || 38 === s || 40 === s)
          ) {
            var r = !1;
            if (
              0 < t.$el.parents("." + t.params.slideClass).length &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            var n = J.innerWidth,
              o = J.innerHeight,
              l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);
            for (
              var d = [
                  [l.left, l.top],
                  [l.left + t.width, l.top],
                  [l.left, l.top + t.height],
                  [l.left + t.width, l.top + t.height],
                ],
                p = 0;
              p < d.length;
              p += 1
            ) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
            }
            if (!r) return;
          }
          t.isHorizontal()
            ? ((37 !== s && 39 !== s) ||
                (i.preventDefault
                  ? i.preventDefault()
                  : (i.returnValue = !1)),
              ((39 === s && !a) || (37 === s && a)) && t.slideNext(),
              ((37 === s && !a) || (39 === s && a)) && t.slidePrev())
            : ((38 !== s && 40 !== s) ||
                (i.preventDefault
                  ? i.preventDefault()
                  : (i.returnValue = !1)),
              40 === s && t.slideNext(),
              38 === s && t.slidePrev()),
            t.emit("keyPress", s);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (L(f).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (L(f).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    O = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        ee.extend(this, {
          keyboard: {
            enabled: !1,
            enable: D.enable.bind(this),
            disable: D.disable.bind(this),
            handle: D.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var A = {
      lastScrollTime: ee.now(),
      event:
        -1 < J.navigator.userAgent.indexOf("firefox")
          ? "DOMMouseScroll"
          : (function () {
              var e = "onwheel",
                t = e in f;
              if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"),
                  (t = "function" == typeof a[e]);
              }
              return (
                !t &&
                  f.implementation &&
                  f.implementation.hasFeature &&
                  !0 !== f.implementation.hasFeature("", "") &&
                  (t = f.implementation.hasFeature("Events.wheel", "3.0")),
                t
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e &&
            e.axis === e.HORIZONTAL_AXIS &&
            ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = A.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            s = n.pixelX * r;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            s = n.pixelY;
          }
        else
          s =
            Math.abs(n.pixelX) > Math.abs(n.pixelY)
              ? -n.pixelX * r
              : -n.pixelY;
        if (0 === s) return !0;
        if ((i.invert && (s = -s), a.params.freeMode)) {
          a.params.loop && a.loopFix();
          var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;
          if (
            (o >= a.minTranslate() && (o = a.minTranslate()),
            o <= a.maxTranslate() && (o = a.maxTranslate()),
            a.setTransition(0),
            a.setTranslate(o),
            a.updateProgress(),
            a.updateActiveIndex(),
            a.updateSlidesClasses(),
            ((!l && a.isBeginning) || (!d && a.isEnd)) &&
              a.updateSlidesClasses(),
            a.params.freeModeSticky &&
              (clearTimeout(a.mousewheel.timeout),
              (a.mousewheel.timeout = ee.nextTick(function () {
                a.slideToClosest();
              }, 300))),
            a.emit("scroll", t),
            a.params.autoplay &&
              a.params.autoplayDisableOnInteraction &&
              a.autoplay.stop(),
            o === a.minTranslate() || o === a.maxTranslate())
          )
            return !0;
        } else {
          if (60 < ee.now() - a.mousewheel.lastScrollTime)
            if (s < 0)
              if ((a.isEnd && !a.params.loop) || a.animating) {
                if (i.releaseOnEdges) return !0;
              } else a.slideNext(), a.emit("scroll", t);
            else if ((a.isBeginning && !a.params.loop) || a.animating) {
              if (i.releaseOnEdges) return !0;
            } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = new J.Date().getTime();
        }
        return (
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
        );
      },
      enable: function () {
        var e = this;
        if (!A.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = L(e.params.mousewheel.eventsTarged)),
          t.on("mouseenter", e.mousewheel.handleMouseEnter),
          t.on("mouseleave", e.mousewheel.handleMouseLeave),
          t.on(A.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !0)
        );
      },
      disable: function () {
        var e = this;
        if (!A.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = L(e.params.mousewheel.eventsTarged)),
          t.off(A.event, e.mousewheel.handle),
          !(e.mousewheel.enabled = !1)
        );
      },
    },
    H = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s &&
            0 < s.length &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked
                ? "addClass"
                : "removeClass"
            ](t.lockClass)),
            i &&
              0 < i.length &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = L(i.nextEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              1 < e.length &&
              1 === a.$el.find(i.nextEl).length &&
              (e = a.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = L(i.prevEl)),
            a.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              1 < t.length &&
              1 === a.$el.find(i.prevEl).length &&
              (t = a.$el.find(i.prevEl))),
          e && 0 < e.length && e.on("click", a.navigation.onNextClick),
          t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
          ee.extend(a.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (a.off("click", e.navigation.onNextClick),
          a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", e.navigation.onPrevClick),
            i.removeClass(e.params.navigation.disabledClass));
      },
    },
    N = {
      update: function () {
        var e = this,
          t = e.rtl,
          s = e.params.pagination;
        if (
          s.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var r,
            a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop
              ? Math.ceil(
                  (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                )
              : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((r = Math.ceil(
                  (e.activeIndex - e.loopedSlides) /
                    e.params.slidesPerGroup
                )) >
                  a - 1 - 2 * e.loopedSlides &&
                  (r -= a - 2 * e.loopedSlides),
                n - 1 < r && (r -= n),
                r < 0 &&
                  "bullets" !== e.params.paginationType &&
                  (r = n + r))
              : (r =
                  void 0 !== e.snapIndex
                    ? e.snapIndex
                    : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              0 < e.pagination.bullets.length)
          ) {
            var o,
              l,
              d,
              p = e.pagination.bullets;
            if (
              (s.dynamicBullets &&
                ((e.pagination.bulletSize = p
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                i.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (s.dynamicMainBullets + 4) +
                    "px"
                ),
                1 < s.dynamicMainBullets &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex +=
                    r - e.previousIndex),
                  e.pagination.dynamicBulletIndex >
                  s.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        s.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (o = r - e.pagination.dynamicBulletIndex),
                (d =
                  ((l =
                    o + (Math.min(p.length, s.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              p.removeClass(
                s.bulletActiveClass +
                  " " +
                  s.bulletActiveClass +
                  "-next " +
                  s.bulletActiveClass +
                  "-next-next " +
                  s.bulletActiveClass +
                  "-prev " +
                  s.bulletActiveClass +
                  "-prev-prev " +
                  s.bulletActiveClass +
                  "-main"
              ),
              1 < i.length)
            )
              p.each(function (e, t) {
                var a = L(t),
                  i = a.index();
                i === r && a.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (o <= i &&
                      i <= l &&
                      a.addClass(s.bulletActiveClass + "-main"),
                    i === o &&
                      a
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(s.bulletActiveClass + "-prev-prev"),
                    i === l &&
                      a
                        .next()
                        .addClass(s.bulletActiveClass + "-next")
                        .next()
                        .addClass(s.bulletActiveClass + "-next-next"));
              });
            else if (
              (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets)
            ) {
              for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)
                p.eq(h).addClass(s.bulletActiveClass + "-main");
              c
                .prev()
                .addClass(s.bulletActiveClass + "-prev")
                .prev()
                .addClass(s.bulletActiveClass + "-prev-prev"),
                u
                  .next()
                  .addClass(s.bulletActiveClass + "-next")
                  .next()
                  .addClass(s.bulletActiveClass + "-next-next");
            }
            if (s.dynamicBullets) {
              var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f =
                  (e.pagination.bulletSize * v - e.pagination.bulletSize) /
                    2 -
                  d * e.pagination.bulletSize,
                m = t ? "right" : "left";
              p.css(e.isHorizontal() ? m : "top", f + "px");
            }
          }
          if (
            ("fraction" === s.type &&
              (i
                .find("." + s.currentClass)
                .text(s.formatFractionCurrent(r + 1)),
              i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
            "progressbar" === s.type)
          ) {
            var g;
            g = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            var b = (r + 1) / n,
              w = 1,
              y = 1;
            "horizontal" === g ? (w = b) : (y = b),
              i
                .find("." + s.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")"
                )
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (i.html(s.renderCustom(e, r + 1, n)),
              e.emit("paginationRender", e, i[0]))
            : e.emit("paginationUpdate", e, i[0]),
            i[
              e.params.watchOverflow && e.isLocked
                ? "addClass"
                : "removeClass"
            ](s.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s),
              (e.pagination.bullets = i.find("." + t.bulletClass));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var a = this,
          e = a.params.pagination;
        if (e.el) {
          var t = L(e.el);
          0 !== t.length &&
            (a.params.uniqueNavElements &&
              "string" == typeof e.el &&
              1 < t.length &&
              1 === a.$el.find(e.el).length &&
              (t = a.$el.find(e.el)),
            "bullets" === e.type &&
              e.clickable &&
              t.addClass(e.clickableClass),
            t.addClass(e.modifierClass + e.type),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
              (a.pagination.dynamicBulletIndex = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              t.addClass(e.progressbarOppositeClass),
            e.clickable &&
              t.on("click", "." + e.bulletClass, function (e) {
                e.preventDefault();
                var t = L(this).index() * a.params.slidesPerGroup;
                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
              }),
            ee.extend(a.pagination, { $el: t, el: t[0] }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", "." + t.bulletClass);
        }
      },
    },
    G = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a
            ? 0 < (p = -p)
              ? ((d = s - p), (p = 0))
              : r < -p + s && (d = r + p)
            : p < 0
            ? ((d = s + p), (p = 0))
            : r < p + s && (d = r - p),
            e.isHorizontal()
              ? (te.transforms3d
                  ? n.transform("translate3d(" + p + "px, 0, 0)")
                  : n.transform("translateX(" + p + "px)"),
                (n[0].style.width = d + "px"))
              : (te.transforms3d
                  ? n.transform("translate3d(0px, " + p + "px, 0)")
                  : n.transform("translateY(" + p + "px)"),
                (n[0].style.height = d + "px")),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s/3 + "px"),
            (i[0].style.display = 1 <= n ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            ee.extend(t, {
              trackSize: r,
              divider: n,
              moveDivider: o,
              dragSize: s,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked
                ? "addClass"
                : "removeClass"
            ](e.params.scrollbar.lockClass);
        }
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
        (t =
          ((a.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageX
              : e.pageX || e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].pageY
            : e.pageY || e.clientY) -
            r.offset()[a.isHorizontal() ? "left" : "top"] -
            n / 2) /
          (o - n)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l =
          a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l),
          a.setTranslate(l),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          a.transition(0),
          i.transition(0),
          s.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = ee.nextTick(function () {
              i.css("opacity", 0), i.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          te.touch
            ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n),
              r.addEventListener(a.move, e.scrollbar.onDragMove, n),
              r.addEventListener(a.end, e.scrollbar.onDragEnd, o))
            : (r.addEventListener(i.start, e.scrollbar.onDragStart, n),
              f.addEventListener(i.move, e.scrollbar.onDragMove, n),
              f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          te.touch
            ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n),
              r.removeEventListener(a.move, e.scrollbar.onDragMove, n),
              r.removeEventListener(a.end, e.scrollbar.onDragEnd, o))
            : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n),
              f.removeEventListener(i.move, e.scrollbar.onDragMove, n),
              f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            1 < s.length &&
            1 === a.find(i.el).length &&
            (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = L(
              '<div class="' + e.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(r)),
            ee.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && t.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    B = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (
          (n || o
            ? ((n = n || "0"), (o = o || "0"))
            : this.isHorizontal()
            ? ((n = r), (o = "0"))
            : ((o = r), (n = "0")),
          (n =
            0 <= n.indexOf("%")
              ? parseInt(n, 10) * t * s + "%"
              : n * t * s *+ "px"),
          (o =
            0 <= o.indexOf("%")
              ? parseInt(o, 10) * t + "%"
              : o * t + "px"),
          null != d)
        ) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == l)
          i.transform("translate3d(" + n + ", " + o + ", 0px)");
        else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          i.transform(
            "translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")"
          );
        }
      },
      setTranslate: function () {
        var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;
        e
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, t) {
            i.parallax.setTransform(t, s);
          }),
          t.each(function (e, t) {
            var a = t.progress;
            1 < i.params.slidesPerGroup &&
              "auto" !== i.params.slidesPerView &&
              (a += Math.ceil(e / 2) - s * (r.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              L(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function (e, t) {
                  i.parallax.setTransform(t, a);
                });
          });
      },
      setTransition: function (s) {
        void 0 === s && (s = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, t) {
            var a = L(t),
              i =
                parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
            0 === s && (i = 0), a.transition(i);
          });
      },
    },
    X = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (
          ((i.fakeGestureTouched = !1),
          (i.fakeGestureMoved = !1),
          !te.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (s.scaleStart = X.getDistanceBetweenTouches(e));
        }
        (s.$slideEl && s.$slideEl.length) ||
        ((s.$slideEl = L(e.target).closest(".swiper-slide")),
        0 === s.$slideEl.length &&
          (s.$slideEl = t.slides.eq(t.activeIndex)),
        (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
        (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
        (s.maxRatio =
          s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
        0 !== s.$imageWrapEl.length)
          ? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (s.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (a.fakeGestureMoved = !0),
            (i.scaleMove = X.getDistanceBetweenTouches(e));
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = te.gestures
            ? e.scale * a.currentScale
            : (i.scaleMove / i.scaleStart) * a.currentScale),
          a.scale > i.maxRatio &&
            (a.scale =
              i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
          a.scale < t.minRatio &&
            (a.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
          i.$imageEl.transform(
            "translate3d(0,0,0) scale(" + a.scale + ")"
          ));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type &&
              e.changedTouches.length < 2 &&
              !g.android)
          )
            return;
          (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio)),
          i.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
          (a.currentScale = a.scale),
          (a.isScaling = !1),
          1 === a.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (i.isTouched ||
            (g.android && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              "touchstart" === e.type
                ? e.targetTouches[0].pageX
                : e.pageX),
            (i.touchesStart.y =
              "touchstart" === e.type
                ? e.targetTouches[0].pageY
                : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type
                  ? e.targetTouches[0].pageX
                  : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type
                  ? e.targetTouches[0].pageY
                  : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX =
                s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY =
                s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 &&
                (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 &&
                (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = o), (a.currentY = d);
          var c = a.width * e.scale,
            u = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(0)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl ||
          ((y.$slideEl = g.clickedSlide
            ? L(g.clickedSlide)
            : g.slides.eq(g.activeIndex)),
          (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
          (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === x.touchesStart.x && e
            ? ((t =
                "touchend" === e.type
                  ? e.changedTouches[0].pageX
                  : e.pageX),
              (a =
                "touchend" === e.type
                  ? e.changedTouches[0].pageY
                  : e.pageY))
            : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
          (b.scale =
            y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (b.currentScale =
            y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((f = y.$slideEl[0].offsetWidth),
              (m = y.$slideEl[0].offsetHeight),
              (i = y.$slideEl.offset().left + f / 2 - t),
              (s = y.$slideEl.offset().top + m / 2 - a),
              (o = y.$imageEl[0].offsetWidth),
              (l = y.$imageEl[0].offsetHeight),
              (d = o * b.scale),
              (p = l * b.scale),
              (h = -(c = Math.min(f / 2 - d / 2, 0))),
              (v = -(u = Math.min(m / 2 - p / 2, 0))),
              (r = i * b.scale) < c && (r = c),
              h < r && (r = h),
              (n = s * b.scale) < u && (n = u),
              v < n && (n = v))
            : (n = r = 0),
          y.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          y.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl ||
          ((i.$slideEl = e.clickedSlide
            ? L(e.clickedSlide)
            : e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(0)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this,
          t = e.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var a = !(
            "touchstart" !== e.touchEvents.start ||
            !te.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          te.gestures
            ? (e.$wrapperEl.on(
                "gesturestart",
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                "gesturechange",
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on(
                "gestureend",
                ".swiper-slide",
                t.onGestureEnd,
                a
              ))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(
                e.touchEvents.start,
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.move,
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.on(
                e.touchEvents.end,
                ".swiper-slide",
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !(
            "touchstart" !== e.touchEvents.start ||
            !te.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          te.gestures
            ? (e.$wrapperEl.off(
                "gesturestart",
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                "gesturechange",
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                "gestureend",
                ".swiper-slide",
                t.onGestureEnd,
                a
              ))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(
                e.touchEvents.start,
                ".swiper-slide",
                t.onGestureStart,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.move,
                ".swiper-slide",
                t.onGestureChange,
                a
              ),
              e.$wrapperEl.off(
                e.touchEvents.end,
                ".swiper-slide",
                t.onGestureEnd,
                a
              )),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove
            );
        }
      },
    },
    Y = {
      loadInSlide: function (e, l) {
        void 0 === l && (l = !0);
        var d = this,
          p = d.params.lazy;
        if (void 0 !== e && 0 !== d.slides.length) {
          var c =
              d.virtual && d.params.virtual.enabled
                ? d.$wrapperEl.children(
                    "." +
                      d.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : d.slides.eq(e),
            t = c.find(
              "." +
                p.elementClass +
                ":not(." +
                p.loadedClass +
                "):not(." +
                p.loadingClass +
                ")"
            );
          !c.hasClass(p.elementClass) ||
            c.hasClass(p.loadedClass) ||
            c.hasClass(p.loadingClass) ||
            (t = t.add(c[0])),
            0 !== t.length &&
              t.each(function (e, t) {
                var i = L(t);
                i.addClass(p.loadingClass);
                var s = i.attr("data-background"),
                  r = i.attr("data-src"),
                  n = i.attr("data-srcset"),
                  o = i.attr("data-sizes");
                d.loadImage(i[0], r || s, n, o, !1, function () {
                  if (null != d && d && (!d || d.params) && !d.destroyed) {
                    if (
                      (s
                        ? (i.css("background-image", 'url("' + s + '")'),
                          i.removeAttr("data-background"))
                        : (n &&
                            (i.attr("srcset", n),
                            i.removeAttr("data-srcset")),
                          o &&
                            (i.attr("sizes", o),
                            i.removeAttr("data-sizes")),
                          r &&
                            (i.attr("src", r), i.removeAttr("data-src"))),
                      i
                        .addClass(p.loadedClass)
                        .removeClass(p.loadingClass),
                      c.find("." + p.preloaderClass).remove(),
                      d.params.loop && l)
                    ) {
                      var e = c.attr("data-swiper-slide-index");
                      if (c.hasClass(d.params.slideDuplicateClass)) {
                        var t = d.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            d.params.slideDuplicateClass +
                            ")"
                        );
                        d.lazy.loadInSlide(t.index(), !1);
                      } else {
                        var a = d.$wrapperEl.children(
                          "." +
                            d.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        d.lazy.loadInSlide(a.index(), !1);
                      }
                    }
                    d.emit("lazyImageReady", c[0], i[0]);
                  }
                }),
                  d.emit("lazyImageLoad", c[0], i[0]);
              });
        }
      },
      load: function () {
        var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;
        function l(e) {
          if (r) {
            if (
              t.children(
                "." +
                  a.slideClass +
                  '[data-swiper-slide-index="' +
                  e +
                  '"]'
              ).length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
        }
        if (
          ("auto" === o && (o = 0),
          i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
          i.params.watchSlidesVisibility)
        )
          t.children("." + a.slideVisibleClass).each(function (e, t) {
            var a = r
              ? L(t).attr("data-swiper-slide-index")
              : L(t).index();
            i.lazy.loadInSlide(a);
          });
        else if (1 < o)
          for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
        else i.lazy.loadInSlide(e);
        if (n.loadPrevNext)
          if (
            1 < o ||
            (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)
          ) {
            for (
              var c = n.loadPrevNextAmount,
                u = o,
                h = Math.min(e + u + Math.max(c, u), s.length),
                v = Math.max(e - Math.max(u, c), 0),
                f = e + o;
              f < h;
              f += 1
            )
              l(f) && i.lazy.loadInSlide(f);
            for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
          } else {
            var g = t.children("." + a.slideNextClass);
            0 < g.length && i.lazy.loadInSlide(d(g));
            var b = t.children("." + a.slidePrevClass);
            0 < b.length && i.lazy.loadInSlide(d(b));
          }
      },
    },
    V = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          o = function (e, t) {
            for (i = -1, a = e.length; 1 < a - i; )
              e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
            return a;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new V.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new V.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control;
        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (i = -s.controller.spline.interpolate(-t))),
            (i && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (i = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (i = e.maxTranslate() - i),
            e.updateProgress(i),
            e.setTranslate(i, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof T && n(r[o]);
        else r instanceof T && t !== r && n(r);
      },
      setTransition: function (t, e) {
        var a,
          i = this,
          s = i.controller.control;
        function r(e) {
          e.setTransition(t, i),
            0 !== t &&
              (e.transitionStart(),
              e.params.autoHeight &&
                ee.nextTick(function () {
                  e.updateAutoHeight();
                }),
              e.$wrapperEl.transitionEnd(function () {
                s &&
                  (e.params.loop &&
                    "slide" === i.params.controller.by &&
                    e.loopFix(),
                  e.transitionEnd());
              }));
        }
        if (Array.isArray(s))
          for (a = 0; a < s.length; a += 1)
            s[a] !== e && s[a] instanceof T && r(s[a]);
        else s instanceof T && e !== s && r(s);
      },
    },
    F = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this,
          a = t.params.a11y;
        if (13 === e.keyCode) {
          var i = L(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(a.lastSlideMessage)
              : t.a11y.notify(a.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(a.firstSlideMessage)
                : t.a11y.notify(a.prevSlideMessage)),
            t.pagination &&
              i.is("." + t.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            0 < i.length &&
            (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
            a &&
              0 < a.length &&
              (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function () {
        var i = this,
          s = i.params.a11y;
        i.pagination &&
          i.params.pagination.clickable &&
          i.pagination.bullets &&
          i.pagination.bullets.length &&
          i.pagination.bullets.each(function (e, t) {
            var a = L(t);
            i.a11y.makeElFocusable(a),
              i.a11y.addElRole(a, "button"),
              i.a11y.addElLabel(
                a,
                s.paginationBulletMessage.replace(
                  /{{index}}/,
                  a.index() + 1
                )
              );
          });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          a,
          i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation &&
            e.navigation.$prevEl &&
            (a = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
          a &&
            (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion &&
          0 < a.a11y.liveRegion.length &&
          a.a11y.liveRegion.remove(),
          a.navigation &&
            a.navigation.$nextEl &&
            (e = a.navigation.$nextEl),
          a.navigation &&
            a.navigation.$prevEl &&
            (t = a.navigation.$prevEl),
          e && e.off("keydown", a.a11y.onEnterKey),
          t && t.off("keydown", a.a11y.onEnterKey),
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.$el.off(
              "keydown",
              "." + a.params.pagination.bulletClass,
              a.a11y.onEnterKey
            );
      },
    },
    R = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!J.history || !J.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var t = e.history;
          (t.initialized = !0),
            (t.paths = R.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(
                0,
                t.paths.value,
                e.params.runCallbacksOnInit
              ),
              e.params.history.replaceState ||
                J.addEventListener(
                  "popstate",
                  e.history.setHistoryPopState
                ));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          J.removeEventListener(
            "popstate",
            this.history.setHistoryPopState
          );
      },
      setHistoryPopState: function () {
        (this.history.paths = R.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = J.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory: function (e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
            i = R.slugify(a.attr("data-history"));
          J.location.pathname.includes(e) || (i = e + "/" + i);
          var s = J.history.state;
          (s && s.value === i) ||
            (this.params.history.replaceState
              ? J.history.replaceState({ value: i }, null, i)
              : J.history.pushState({ value: i }, null, i));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              R.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var o = n.index();
              i.slideTo(o, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    q = {
      onHashCange: function () {
        var e = this,
          t = f.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var a = e.$wrapperEl
            .children(
              "." + e.params.slideClass + '[data-hash="' + t + '"]'
            )
            .index();
          if (void 0 === a) return;
          e.slideTo(a);
        }
      },
      setHash: function () {
        var e = this;
        if (
          e.hashNavigation.initialized &&
          e.params.hashNavigation.enabled
        )
          if (
            e.params.hashNavigation.replaceState &&
            J.history &&
            J.history.replaceState
          )
            J.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            );
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
            f.location.hash = a || "";
          }
      },
      init: function () {
        var e = this;
        if (
          !(
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
        ) {
          e.hashNavigation.initialized = !0;
          var t = f.location.hash.replace("#", "");
          if (t)
            for (var a = 0, i = e.slides.length; a < i; a += 1) {
              var s = e.slides.eq(a);
              if (
                (s.attr("data-hash") || s.attr("data-history")) === t &&
                !s.hasClass(e.params.slideDuplicateClass)
              ) {
                var r = s.index();
                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
              }
            }
          e.params.hashNavigation.watchState &&
            L(J).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          L(J).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    W = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          (e.autoplay.timeout = ee.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    ),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0),
                  e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    },
    j = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.$wrapperEl;
        if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          t.transitionEnd(function () {
            if (!s && a && !a.destroyed) {
              (s = !0), (a.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                i.trigger(e[t]);
            }
          });
        }
      },
    },
    U = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;
        d.shadow &&
          (p
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = L('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = a.find(".swiper-cube-shadow")).length &&
              ((e = L('<div class="swiper-cube-shadow"></div>')),
              a.append(e)));
        for (var h = 0; h < s.length; h += 1) {
          var v = s.eq(h),
            f = h;
          c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((w = 0), (x = 4 * -g * l))
            : (f - 2) % 4 == 0
            ? ((w = l + 4 * g * l), (x = l))
            : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            p || ((y = w), (w = 0));
          var T =
            "rotateX(" +
            (p ? 0 : -m) +
            "deg) rotateY(" +
            (p ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 &&
              -1 < b &&
              ((u = 90 * f + 90 * b), o && (u = 90 * -f - 90 * b)),
            v.transform(T),
            d.slideShadows)
          ) {
            var E = p
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = p
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = L(
                '<div class="swiper-slide-shadow-' +
                  (p ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = L(
                  '<div class="swiper-slide-shadow-' +
                    (p ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (p)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + d.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              M =
                1.5 -
                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                  Math.cos((2 * C * Math.PI) / 360) / 2),
              z = d.shadowScale,
              P = d.shadowScale / M,
              k = d.shadowOffset;
            e.transform(
              "scale3d(" +
                z +
                ", 1, " +
                P +
                ") translate3d(0px, " +
                (n / 2 + k) +
                "px, " +
                -n / 2 / P +
                "px) rotateX(-90deg)"
            );
          }
        var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            $ +
            "px) rotateX(" +
            (t.isHorizontal() ? 0 : u) +
            "deg) rotateY(" +
            (t.isHorizontal() ? -u : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    K = {
      setTranslate: function () {
        for (
          var e = this, t = e.slides, a = e.rtlTranslate, i = 0;
          i < t.length;
          i += 1
        ) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (e.isHorizontal()
              ? a && (n = -n)
              : ((d = l), (o = -n), (n = l = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            var p = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = L(
                '<div class="swiper-slide-shadow-' +
                  (e.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === c.length &&
                ((c = L(
                  '<div class="swiper-slide-shadow-' +
                    (e.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(c)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              c.length && (c[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;
        if (
          (t
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          a.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          t.eq(i).transitionEnd(function () {
            if (!r && a && !a.destroyed) {
              (r = !0), (a.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                s.trigger(e[t]);
            }
          });
        }
      },
    },
    _ = {
      setTranslate: function () {
        for (
          var e = this,
            t = e.width,
            a = e.height,
            i = e.slides,
            s = e.$wrapperEl,
            r = e.slidesSizesGrid,
            n = e.params.coverflowEffect,
            o = e.isHorizontal(),
            l = e.translate,
            d = o ? t / 2 - l : a / 2 - l,
            p = o ? n.rotate : -n.rotate,
            c = n.depth,
            u = 0,
            h = i.length;
          u < h;
          u += 1
        ) {
          var v = i.eq(u),
            f = r[u],
            m = ((d - v[0].swiperSlideOffset - f / 2) / f) * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;
          Math.abs(x) < 0.001 && (x = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(b) < 0.001 && (b = 0);
          var T =
            "translate3d(" +
            x +
            "px," +
            y +
            "px," +
            w +
            "px)  rotateX(" +
            b +
            "deg) rotateY(" +
            g +
            "deg)";
          if (
            (v.transform(T),
            (v[0].style.zIndex = 1 - Math.abs(Math.round(m))),
            n.slideShadows)
          ) {
            var E = o
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = o
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = L(
                '<div class="swiper-slide-shadow-' +
                  (o ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = L(
                  '<div class="swiper-slide-shadow-' +
                    (o ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = 0 < m ? m : 0),
              S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
          }
        }
        (te.pointerEvents || te.prefixedPointerEvents) &&
          (s[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    Z = {
      init: function () {
        var e = this,
          t = e.params.thumbs,
          a = e.constructor;
        t.swiper instanceof a
          ? ((e.thumbs.swiper = t.swiper),
            ee.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            ee.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : ee.isObject(t.swiper) &&
            ((e.thumbs.swiper = new a(
              ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(
            e.params.thumbs.thumbsContainerClass
          ),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (
            !(
              (i &&
                L(i).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
              null == a
            )
          ) {
            var s;
            if (
              ((s = t.params.loop
                ? parseInt(
                    L(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (r = e.activeIndex));
              var n = e.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                o = e.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s =
                void 0 === n
                  ? o
                  : void 0 === o
                  ? n
                  : o - r < r - n
                  ? o
                  : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i =
            "auto" === a.params.slidesPerView
              ? a.slidesPerViewDynamic()
              : a.params.slidesPerView;
          if (t.realIndex !== a.realIndex) {
            var s,
              r = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(r).hasClass(a.params.slideDuplicateClass) &&
                (a.loopFix(),
                (a._clientLeft = a.$wrapperEl[0].clientLeft),
                (r = a.activeIndex));
              var n = a.slides
                  .eq(r)
                  .prevAll(
                    '[data-swiper-slide-index="' + t.realIndex + '"]'
                  )
                  .eq(0)
                  .index(),
                o = a.slides
                  .eq(r)
                  .nextAll(
                    '[data-swiper-slide-index="' + t.realIndex + '"]'
                  )
                  .eq(0)
                  .index();
              s =
                void 0 === n
                  ? o
                  : void 0 === o
                  ? n
                  : o - r == r - n
                  ? r
                  : o - r < r - n
                  ? o
                  : n;
            } else s = t.realIndex;
            a.visibleSlidesIndexes.indexOf(s) < 0 &&
              (a.params.centeredSlides
                ? (s =
                    r < s
                      ? s - Math.floor(i / 2) + 1
                      : s + Math.floor(i / 2) - 1)
                : r < s && (s = s - i + 1),
              a.slideTo(s, e ? 0 : void 0));
          }
          var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;
          if (
            (1 < t.params.slidesPerView &&
              !t.params.centeredSlides &&
              (l = t.params.slidesPerView),
            a.slides.removeClass(d),
            a.params.loop)
          )
            for (var p = 0; p < l; p += 1)
              a.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (t.realIndex + p) + '"]'
                )
                .addClass(d);
          else
            for (var c = 0; c < l; c += 1)
              a.slides.eq(t.realIndex + c).addClass(d);
        }
      },
    },
    Q = [
      E,
      S,
      C,
      M,
      P,
      $,
      O,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            mousewheel: {
              enabled: !1,
              enable: A.enable.bind(e),
              disable: A.disable.bind(e),
              handle: A.handle.bind(e),
              handleMouseEnter: A.handleMouseEnter.bind(e),
              handleMouseLeave: A.handleMouseLeave.bind(e),
              lastScrollTime: ee.now(),
            },
          });
        },
        on: {
          init: function () {
            this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            navigation: {
              init: H.init.bind(e),
              update: H.update.bind(e),
              destroy: H.destroy.bind(e),
              onNextClick: H.onNextClick.bind(e),
              onPrevClick: H.onPrevClick.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t,
              a = this,
              i = a.navigation,
              s = i.$nextEl,
              r = i.$prevEl;
            !a.params.navigation.hideOnClick ||
              L(e.target).is(r) ||
              L(e.target).is(s) ||
              (s
                ? (t = s.hasClass(a.params.navigation.hiddenClass))
                : r && (t = r.hasClass(a.params.navigation.hiddenClass)),
              !0 === t
                ? a.emit("navigationShow", a)
                : a.emit("navigationHide", a),
              s && s.toggleClass(a.params.navigation.hiddenClass),
              r && r.toggleClass(a.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass:
              "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            pagination: {
              init: N.init.bind(e),
              render: N.render.bind(e),
              update: N.update.bind(e),
              destroy: N.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            var t = this;
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              0 < t.pagination.$el.length &&
              !L(e.target).hasClass(t.params.pagination.bulletClass) &&
              (!0 ===
              t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                ? t.emit("paginationShow", t)
                : t.emit("paginationHide", t),
              t.pagination.$el.toggleClass(
                t.params.pagination.hiddenClass
              ));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            scrollbar: {
              init: G.init.bind(e),
              destroy: G.destroy.bind(e),
              updateSize: G.updateSize.bind(e),
              setTranslate: G.setTranslate.bind(e),
              setTransition: G.setTransition.bind(e),
              enableDraggable: G.enableDraggable.bind(e),
              disableDraggable: G.disableDraggable.bind(e),
              setDragPosition: G.setDragPosition.bind(e),
              onDragStart: G.onDragStart.bind(e),
              onDragMove: G.onDragMove.bind(e),
              onDragEnd: G.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          ee.extend(this, {
            parallax: {
              setTransform: B.setTransform.bind(this),
              setTranslate: B.setTranslate.bind(this),
              setTransition: B.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var i = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (e) {
              t[e] = X[e].bind(i);
            }),
            ee.extend(i, { zoom: t });
          var s = 1;
          Object.defineProperty(i.zoom, "scale", {
            get: function () {
              return s;
            },
            set: function (e) {
              if (s !== e) {
                var t = i.zoom.gesture.$imageEl
                    ? i.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = i.zoom.gesture.$slideEl
                    ? i.zoom.gesture.$slideEl[0]
                    : void 0;
                i.emit("zoomChange", e, t, a);
              }
              s = e;
            },
          });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          ee.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: Y.load.bind(this),
              loadInSlide: Y.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            var e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: {
          controller: { control: void 0, inverse: !1, by: "slide" },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            controller: {
              control: e.params.controller.control,
              getInterpolateFunction: V.getInterpolateFunction.bind(e),
              setTranslate: V.setTranslate.bind(e),
              setTransition: V.setTransition.bind(e),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var t = this;
          ee.extend(t, {
            a11y: {
              liveRegion: L(
                '<span class="' +
                  t.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(F).forEach(function (e) {
              t.a11y[e] = F[e].bind(t);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: {
          history: { enabled: !1, replaceState: !1, key: "slides" },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            history: {
              init: R.init.bind(e),
              setHistory: R.setHistory.bind(e),
              setHistoryPopState: R.setHistoryPopState.bind(e),
              scrollToSlide: R.scrollToSlide.bind(e),
              destroy: R.destroy.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
          },
        },
        create: function () {
          var e = this;
          ee.extend(e, {
            hashNavigation: {
              initialized: !1,
              init: q.init.bind(e),
              destroy: q.destroy.bind(e),
              setHash: q.setHash.bind(e),
              onHashCange: q.onHashCange.bind(e),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled &&
              this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled &&
              this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized &&
              this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var t = this;
          ee.extend(t, {
            autoplay: {
              running: !1,
              paused: !1,
              run: W.run.bind(t),
              start: W.start.bind(t),
              stop: W.stop.bind(t),
              pause: W.pause.bind(t),
              onTransitionEnd: function (e) {
                t &&
                  !t.destroyed &&
                  t.$wrapperEl &&
                  e.target === this &&
                  (t.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ),
                  (t.autoplay.paused = !1),
                  t.autoplay.running
                    ? t.autoplay.run()
                    : t.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled && this.autoplay.start();
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop();
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          ee.extend(this, {
            fadeEffect: {
              setTranslate: j.setTranslate.bind(this),
              setTransition: j.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              ee.extend(e.params, t), ee.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect &&
              this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect &&
              this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          ee.extend(this, {
            cubeEffect: {
              setTranslate: U.setTranslate.bind(this),
              setTransition: U.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              ee.extend(e.params, t), ee.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect &&
              this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect &&
              this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          ee.extend(this, {
            flipEffect: {
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              ee.extend(e.params, t), ee.extend(e.originalParams, t);
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect &&
              this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect &&
              this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          ee.extend(this, {
            coverflowEffect: {
              setTranslate: _.setTranslate.bind(this),
              setTransition: _.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this;
            "coverflow" === e.params.effect &&
              (e.classNames.push(
                e.params.containerModifierClass + "coverflow"
              ),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          ee.extend(this, {
            thumbs: {
              swiper: null,
              init: Z.init.bind(this),
              update: Z.update.bind(this),
              onThumbClick: Z.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
  return (
    void 0 === T.use &&
      ((T.use = T.Class.use), (T.installModule = T.Class.installModule)),
    T.use(Q),
    T
  );
});
!(function (t, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define(r)
    : (t.ColorThief = r());
})(this, function () {
  if (!t)
    var t = {
      map: function (t, r) {
        var n = {};
        return r
          ? t.map(function (t, o) {
              return (n.index = o), r.call(n, t);
            })
          : t.slice();
      },
      naturalOrder: function (t, r) {
        return t < r ? -1 : t > r ? 1 : 0;
      },
      sum: function (t, r) {
        var n = {};
        return t.reduce(
          r
            ? function (t, o, e) {
                return (n.index = e), t + r.call(n, o);
              }
            : function (t, r) {
                return t + r;
              },
          0
        );
      },
      max: function (r, n) {
        return Math.max.apply(null, n ? t.map(r, n) : r);
      },
    };
  var r = (function () {
      var r = 5,
        n = 8 - r,
        o = 1e3;
      function e(t, n, o) {
        return (t << (2 * r)) + (n << r) + o;
      }
      function i(t) {
        var r = [],
          n = !1;
        function o() {
          r.sort(t), (n = !0);
        }
        return {
          push: function (t) {
            r.push(t), (n = !1);
          },
          peek: function (t) {
            return n || o(), void 0 === t && (t = r.length - 1), r[t];
          },
          pop: function () {
            return n || o(), r.pop();
          },
          size: function () {
            return r.length;
          },
          map: function (t) {
            return r.map(t);
          },
          debug: function () {
            return n || o(), r;
          },
        };
      }
      function u(t, r, n, o, e, i, u) {
        (this.r1 = t),
          (this.r2 = r),
          (this.g1 = n),
          (this.g2 = o),
          (this.b1 = e),
          (this.b2 = i),
          (this.histo = u);
      }
      function a() {
        this.vboxes = new i(function (r, n) {
          return t.naturalOrder(
            r.vbox.count() * r.vbox.volume(),
            n.vbox.count() * n.vbox.volume()
          );
        });
      }
      function s(r, n) {
        if (n.count()) {
          var o = n.r2 - n.r1 + 1,
            i = n.g2 - n.g1 + 1,
            u = t.max([o, i, n.b2 - n.b1 + 1]);
          if (1 == n.count()) return [n.copy()];
          var a,
            s,
            h,
            c,
            f = 0,
            v = [],
            l = [];
          if (u == o)
            for (a = n.r1; a <= n.r2; a++) {
              for (c = 0, s = n.g1; s <= n.g2; s++)
                for (h = n.b1; h <= n.b2; h++) c += r[e(a, s, h)] || 0;
              v[a] = f += c;
            }
          else if (u == i)
            for (a = n.g1; a <= n.g2; a++) {
              for (c = 0, s = n.r1; s <= n.r2; s++)
                for (h = n.b1; h <= n.b2; h++) c += r[e(s, a, h)] || 0;
              v[a] = f += c;
            }
          else
            for (a = n.b1; a <= n.b2; a++) {
              for (c = 0, s = n.r1; s <= n.r2; s++)
                for (h = n.g1; h <= n.g2; h++) c += r[e(s, h, a)] || 0;
              v[a] = f += c;
            }
          return (
            v.forEach(function (t, r) {
              l[r] = f - t;
            }),
            (function (t) {
              var r,
                o,
                e,
                i,
                u,
                s = t + "1",
                h = t + "2",
                c = 0;
              for (a = n[s]; a <= n[h]; a++)
                if (v[a] > f / 2) {
                  for (
                    e = n.copy(),
                      i = n.copy(),
                      u =
                        (r = a - n[s]) <= (o = n[h] - a)
                          ? Math.min(n[h] - 1, ~~(a + o / 2))
                          : Math.max(n[s], ~~(a - 1 - r / 2));
                    !v[u];

                  )
                    u++;
                  for (c = l[u]; !c && v[u - 1]; ) c = l[--u];
                  return (e[h] = u), (i[s] = e[h] + 1), [e, i];
                }
            })(u == o ? "r" : u == i ? "g" : "b")
          );
        }
      }
      return (
        (u.prototype = {
          volume: function (t) {
            return (
              (this._volume && !t) ||
                (this._volume =
                  (this.r2 - this.r1 + 1) *
                  (this.g2 - this.g1 + 1) *
                  (this.b2 - this.b1 + 1)),
              this._volume
            );
          },
          count: function (t) {
            var r = this.histo;
            if (!this._count_set || t) {
              var n,
                o,
                i,
                u = 0;
              for (n = this.r1; n <= this.r2; n++)
                for (o = this.g1; o <= this.g2; o++)
                  for (i = this.b1; i <= this.b2; i++)
                    u += r[e(n, o, i)] || 0;
              (this._count = u), (this._count_set = !0);
            }
            return this._count;
          },
          copy: function () {
            return new u(
              this.r1,
              this.r2,
              this.g1,
              this.g2,
              this.b1,
              this.b2,
              this.histo
            );
          },
          avg: function (t) {
            var n = this.histo;
            if (!this._avg || t) {
              var o,
                i,
                u,
                a,
                s = 0,
                h = 1 << (8 - r),
                c = 0,
                f = 0,
                v = 0;
              for (i = this.r1; i <= this.r2; i++)
                for (u = this.g1; u <= this.g2; u++)
                  for (a = this.b1; a <= this.b2; a++)
                    (s += o = n[e(i, u, a)] || 0),
                      (c += o * (i + 0.5) * h),
                      (f += o * (u + 0.5) * h),
                      (v += o * (a + 0.5) * h);
              this._avg = s
                ? [~~(c / s), ~~(f / s), ~~(v / s)]
                : [
                    ~~((h * (this.r1 + this.r2 + 1)) / 2),
                    ~~((h * (this.g1 + this.g2 + 1)) / 2),
                    ~~((h * (this.b1 + this.b2 + 1)) / 2),
                  ];
            }
            return this._avg;
          },
          contains: function (t) {
            var r = t[0] >> n;
            return (
              (gval = t[1] >> n),
              (bval = t[2] >> n),
              r >= this.r1 &&
                r <= this.r2 &&
                gval >= this.g1 &&
                gval <= this.g2 &&
                bval >= this.b1 &&
                bval <= this.b2
            );
          },
        }),
        (a.prototype = {
          push: function (t) {
            this.vboxes.push({ vbox: t, color: t.avg() });
          },
          palette: function () {
            return this.vboxes.map(function (t) {
              return t.color;
            });
          },
          size: function () {
            return this.vboxes.size();
          },
          map: function (t) {
            for (var r = this.vboxes, n = 0; n < r.size(); n++)
              if (r.peek(n).vbox.contains(t)) return r.peek(n).color;
            return this.nearest(t);
          },
          nearest: function (t) {
            for (var r, n, o, e = this.vboxes, i = 0; i < e.size(); i++)
              ((n = Math.sqrt(
                Math.pow(t[0] - e.peek(i).color[0], 2) +
                  Math.pow(t[1] - e.peek(i).color[1], 2) +
                  Math.pow(t[2] - e.peek(i).color[2], 2)
              )) < r ||
                void 0 === r) &&
                ((r = n), (o = e.peek(i).color));
            return o;
          },
          forcebw: function () {
            var r = this.vboxes;
            r.sort(function (r, n) {
              return t.naturalOrder(t.sum(r.color), t.sum(n.color));
            });
            var n = r[0].color;
            n[0] < 5 && n[1] < 5 && n[2] < 5 && (r[0].color = [0, 0, 0]);
            var o = r.length - 1,
              e = r[o].color;
            e[0] > 251 &&
              e[1] > 251 &&
              e[2] > 251 &&
              (r[o].color = [255, 255, 255]);
          },
        }),
        {
          quantize: function (h, c) {
            if (!h.length || c < 2 || c > 256) return !1;
            var f = (function (t) {
              var o,
                i = new Array(1 << (3 * r));
              return (
                t.forEach(function (t) {
                  (o = e(t[0] >> n, t[1] >> n, t[2] >> n)),
                    (i[o] = (i[o] || 0) + 1);
                }),
                i
              );
            })(h);
            f.forEach(function () {});
            var v = (function (t, r) {
                var o,
                  e,
                  i,
                  a = 1e6,
                  s = 0,
                  h = 1e6,
                  c = 0,
                  f = 1e6,
                  v = 0;
                return (
                  t.forEach(function (t) {
                    (o = t[0] >> n) < a ? (a = o) : o > s && (s = o),
                      (e = t[1] >> n) < h ? (h = e) : e > c && (c = e),
                      (i = t[2] >> n) < f ? (f = i) : i > v && (v = i);
                  }),
                  new u(a, s, h, c, f, v, r)
                );
              })(h, f),
              l = new i(function (r, n) {
                return t.naturalOrder(r.count(), n.count());
              });
            function g(t, r) {
              for (var n, e = t.size(), i = 0; i < o; ) {
                if (e >= r) return;
                if (i++ > o) return;
                if ((n = t.pop()).count()) {
                  var u = s(f, n),
                    a = u[0],
                    h = u[1];
                  if (!a) return;
                  t.push(a), h && (t.push(h), e++);
                } else t.push(n), i++;
              }
            }
            l.push(v), g(l, 0.75 * c);
            for (
              var p = new i(function (r, n) {
                return t.naturalOrder(
                  r.count() * r.volume(),
                  n.count() * n.volume()
                );
              });
              l.size();

            )
              p.push(l.pop());
            g(p, c);
            for (var d = new a(); p.size(); ) d.push(p.pop());
            return d;
          },
        }
      );
    })().quantize,
    n = function (t) {
      (this.canvas = document.createElement("canvas")),
        (this.context = this.canvas.getContext("2d")),
        (this.width = this.canvas.width = t.width),
        (this.height = this.canvas.height = t.height),
        this.context.drawImage(t, 0, 0, this.width, this.height);
    };
  n.prototype.getImageData = function () {
    return this.context.getImageData(0, 0, this.width, this.height);
  };
  var o = function () {};
  return (
    (o.prototype.getColor = function (t, r) {
      return void 0 === r && (r = 10), this.getPalette(t, 5, r)[0];
    }),
    (o.prototype.getPalette = function (t, o, e) {
      var i = (function (t) {
          var r = t.colorCount,
            n = t.quality;
          if (void 0 !== r && Number.isInteger(r)) {
            if (1 === r)
              throw new Error(
                "colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()"
              );
            (r = Math.max(r, 2)), (r = Math.min(r, 20));
          } else r = 10;
          return (
            void 0 === n || Number.isInteger(n)
              ? (n = 10)
              : n < 1 && (n = 10),
            { colorCount: r, quality: n }
          );
        })({ colorCount: o, quality: e }),
        u = new n(t),
        a = (function (t, r, n) {
          for (
            var o = t,
              e = [],
              i = 0,
              u = void 0,
              a = void 0,
              s = void 0,
              h = void 0,
              c = void 0;
            i < r;
            i += n
          )
            (a = o[0 + (u = 4 * i)]),
              (s = o[u + 1]),
              (h = o[u + 2]),
              (void 0 === (c = o[u + 3]) || c >= 125) &&
                ((a > 250 && s > 250 && h > 250) || e.push([a, s, h]));
          return e;
        })(u.getImageData().data, u.width * u.height, i.quality),
        s = r(a, i.colorCount);
      return s ? s.palette() : null;
    }),
    (o.prototype.getColorFromUrl = function (t, r, n) {
      var o = document.createElement("img"),
        e = this;
      o.addEventListener("load", function () {
        var i = e.getPalette(o, 5, n);
        r(i[0], t);
      }),
        (o.src = t);
    }),
    (o.prototype.getImageData = function (t, r) {
      var n = new XMLHttpRequest();
      n.open("GET", t, !0),
        (n.responseType = "arraybuffer"),
        (n.onload = function () {
          if (200 == this.status) {
            var t = new Uint8Array(this.response);
            o = t.length;
            for (var n = new Array(o), o = 0; o < t.length; o++)
              n[o] = String.fromCharCode(t[o]);
            var e = n.join(""),
              i = window.btoa(e);
            r("data:image/png;base64," + i);
          }
        }),
        n.send();
    }),
    (o.prototype.getColorAsync = function (t, r, n) {
      var o = this;
      this.getImageData(t, function (t) {
        var e = document.createElement("img");
        e.addEventListener("load", function () {
          var t = o.getPalette(e, 5, n);
          r(t[0], this);
        }),
          (e.src = t);
      });
    }),
    o
  );
});
!(function (global, factory) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = factory())
    : "function" == typeof define && define.amd
    ? define(factory)
    : (global.OnScreen = factory());
})(this, function () {
  "use strict";
  function attach() {
    var container = this.options.container;
    if (container instanceof HTMLElement) {
      var style = window.getComputedStyle(container);
      "static" === style.position &&
        (container.style.position = "relative");
    }
    container.addEventListener("scroll", this._scroll, { passive: !0 }),
      window.addEventListener("resize", this._scroll, { passive: !0 }),
      this._scroll(),
      (this.attached = !0);
  }
  function inViewport(el) {
    var options =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { tolerance: 0 };
    if (!el)
      throw new Error("You should specify the element you want to test");
    "string" == typeof el && (el = document.querySelector(el));
    var elRect = el.getBoundingClientRect();
    return (
      elRect.bottom - options.tolerance > 0 &&
      elRect.right - options.tolerance > 0 &&
      elRect.left + options.tolerance <
        (window.innerWidth || document.documentElement.clientWidth) &&
      elRect.top + options.tolerance <
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  function inContainer(el) {
    var options =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { tolerance: 0, container: "" };
    if (!el)
      throw new Error("You should specify the element you want to test");
    if (
      ("string" == typeof el && (el = document.querySelector(el)),
      "string" == typeof options &&
        (options = {
          tolerance: 0,
          container: document.querySelector(options),
        }),
      "string" == typeof options.container &&
        (options.container = document.querySelector(options.container)),
      options instanceof HTMLElement &&
        (options = { tolerance: 0, container: options }),
      !options.container)
    )
      throw new Error("You should specify a container element");
    var containerRect = options.container.getBoundingClientRect();
    return (
      el.offsetTop + el.clientHeight - options.tolerance >
        options.container.scrollTop &&
      el.offsetLeft + el.clientWidth - options.tolerance >
        options.container.scrollLeft &&
      el.offsetLeft + options.tolerance <
        containerRect.width + options.container.scrollLeft &&
      el.offsetTop + options.tolerance <
        containerRect.height + options.container.scrollTop
    );
  }
  function eventHandler() {
    var trackedElements =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {},
      options =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { tolerance: 0 },
      selectors = Object.keys(trackedElements),
      testVisibility = void 0;
    selectors.length &&
      ((testVisibility =
        options.container === window ? inViewport : inContainer),
      selectors.forEach(function (selector) {
        trackedElements[selector].nodes.forEach(function (item) {
          if (
            (testVisibility(item.node, options)
              ? ((item.wasVisible = item.isVisible), (item.isVisible = !0))
              : ((item.wasVisible = item.isVisible),
                (item.isVisible = !1)),
            item.isVisible === !0 && item.wasVisible === !1)
          ) {
            if (!trackedElements[selector].enter) return;
            Object.keys(trackedElements[selector].enter).forEach(function (
              callback
            ) {
              "function" ==
                typeof trackedElements[selector].enter[callback] &&
                trackedElements[selector].enter[callback](
                  item.node,
                  "enter"
                );
            });
          }
          if (item.isVisible === !1 && item.wasVisible === !0) {
            if (!trackedElements[selector].leave) return;
            Object.keys(trackedElements[selector].leave).forEach(function (
              callback
            ) {
              "function" ==
                typeof trackedElements[selector].leave[callback] &&
                trackedElements[selector].leave[callback](
                  item.node,
                  "leave"
                );
            });
          }
        });
      }));
  }
  function debouncedScroll() {
    var _this = this,
      timeout = void 0;
    return function () {
      clearTimeout(timeout),
        (timeout = setTimeout(function () {
          eventHandler(_this.trackedElements, _this.options);
        }, _this.options.debounce));
    };
  }
  function destroy() {
    this.options.container.removeEventListener("scroll", this._scroll),
      window.removeEventListener("resize", this._scroll),
      (this.attached = !1);
  }
  function off(event, selector, handler) {
    var enterCallbacks = Object.keys(
        this.trackedElements[selector].enter || {}
      ),
      leaveCallbacks = Object.keys(
        this.trackedElements[selector].leave || {}
      );
    if ({}.hasOwnProperty.call(this.trackedElements, selector))
      if (handler) {
        if (this.trackedElements[selector][event]) {
          var callbackName =
            "function" == typeof handler ? handler.name : handler;
          delete this.trackedElements[selector][event][callbackName];
        }
      } else delete this.trackedElements[selector][event];
    enterCallbacks.length ||
      leaveCallbacks.length ||
      delete this.trackedElements[selector];
  }
  function on(event, selector, callback) {
    var allowed = ["enter", "leave"];
    if (!event)
      throw new Error("No event given. Choose either enter or leave");
    if (!selector) throw new Error("No selector to track");
    if (allowed.indexOf(event) < 0)
      throw new Error(event + " event is not supported");
    ({}.hasOwnProperty.call(this.trackedElements, selector) ||
      (this.trackedElements[selector] = {}),
      (this.trackedElements[selector].nodes = []));
    for (
      var i = 0, elems = document.querySelectorAll(selector);
      i < elems.length;
      i++
    ) {
      var item = { isVisible: !1, wasVisible: !1, node: elems[i] };
      this.trackedElements[selector].nodes.push(item);
    }
    "function" == typeof callback &&
      (this.trackedElements[selector][event] ||
        (this.trackedElements[selector][event] = {}),
      (this.trackedElements[selector][event][
        callback.name || "anonymous"
      ] = callback));
  }
  function observeDOM(obj, callback) {
    var MutationObserver =
      window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      var obs = new MutationObserver(callback);
      obs.observe(obj, { childList: !0, subtree: !0 });
    } else obj.addEventListener("DOMNodeInserted", callback, !1), obj.addEventListener("DOMNodeRemoved", callback, !1);
  }
  function OnScreen() {
    var _this = this,
      options =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { tolerance: 0, debounce: 100, container: window };
    (this.options = {}),
      (this.trackedElements = {}),
      Object.defineProperties(this.options, {
        container: {
          configurable: !1,
          enumerable: !1,
          get: function () {
            var container = void 0;
            return (
              "string" == typeof options.container
                ? (container = document.querySelector(options.container))
                : options.container instanceof HTMLElement &&
                  (container = options.container),
              container || window
            );
          },
          set: function (value) {
            options.container = value;
          },
        },
        debounce: {
          get: function () {
            return parseInt(options.debounce, 10) || 100;
          },
          set: function (value) {
            options.debounce = value;
          },
        },
        tolerance: {
          get: function () {
            return parseInt(options.tolerance, 10) || 0;
          },
          set: function (value) {
            options.tolerance = value;
          },
        },
      }),
      Object.defineProperty(this, "_scroll", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: this._debouncedScroll.call(this),
      }),
      observeDOM(document.querySelector("body"), function () {
        Object.keys(_this.trackedElements).forEach(function (element) {
          _this.on("enter", element), _this.on("leave", element);
        });
      }),
      this.attach();
  }
  return (
    Object.defineProperties(OnScreen.prototype, {
      _debouncedScroll: {
        configurable: !1,
        writable: !1,
        enumerable: !1,
        value: debouncedScroll,
      },
      attach: {
        configurable: !1,
        writable: !1,
        enumerable: !1,
        value: attach,
      },
      destroy: {
        configurable: !1,
        writable: !1,
        enumerable: !1,
        value: destroy,
      },
      off: { configurable: !1, writable: !1, enumerable: !1, value: off },
      on: { configurable: !1, writable: !1, enumerable: !1, value: on },
    }),
    (OnScreen.check = inViewport),
    OnScreen
  );
});
$(document).ready(function () {
  jQuery.easing.jswing = jQuery.easing.swing;
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    easeInQuad: function (x, t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
      return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
      return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
      return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
      return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
      return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * 0.3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
      return (
        -(
          a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)
        ) + b
      );
    },
    easeOutElastic: function (x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * 0.3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
      return (
        a *
          Math.pow(2, -10 * t) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
        c +
        b
      );
    },
    easeInOutElastic: function (x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (!p) p = d * (0.3 * 1.5);
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
      if (t < 1)
        return (
          -0.5 *
            (a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
          b
        );
      return (
        a *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
          0.5 +
        c +
        b
      );
    },
    easeInBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
      if (s == undefined) s = 1.70158;
      if ((t /= d / 2) < 1)
        return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      return (
        (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
      );
    },
    easeInBounce: function (x, t, b, c, d) {
      return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }
    },
    easeInOutBounce: function (x, t, b, c, d) {
      if (t < d / 2)
        return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
      return (
        jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 +
        c * 0.5 +
        b
      );
    },
  });
});
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof module && module.exports
    ? (module.exports = function (t, i) {
        return (
          void 0 === i &&
            (i =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(t)),
          e(i),
          i
        );
      })
    : e(jQuery);
})(function (l) {
  var r = function (t, i) {
    (this.settings = i),
      this.checkSettings(),
      (this.imgAnalyzerTimeout = null),
      (this.entries = null),
      (this.buildingRow = {
        entriesBuff: [],
        width: 0,
        height: 0,
        aspectRatio: 0,
      }),
      (this.lastFetchedEntry = null),
      (this.lastAnalyzedIndex = -1),
      (this.yield = { every: 2, flushed: 0 }),
      (this.border = 0 <= i.border ? i.border : i.margins),
      (this.maxRowHeight = this.retrieveMaxRowHeight()),
      (this.suffixRanges = this.retrieveSuffixRanges()),
      (this.offY = this.border),
      (this.rows = 0),
      (this.spinner = {
        phase: 0,
        timeSlot: 150,
        $el: l(
          '<div class="jg-spinner"><span></span><span></span><span></span></div>'
        ),
        intervalId: null,
      }),
      (this.scrollBarOn = !1),
      (this.checkWidthIntervalId = null),
      (this.galleryWidth = t.width()),
      (this.$gallery = t);
  };
  (r.prototype.getSuffix = function (t, i) {
    var e, s;
    for (e = i < t ? t : i, s = 0; s < this.suffixRanges.length; s++)
      if (e <= this.suffixRanges[s])
        return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];
    return this.settings.sizeRangeSuffixes[this.suffixRanges[s - 1]];
  }),
    (r.prototype.removeSuffix = function (t, i) {
      return t.substring(0, t.length - i.length);
    }),
    (r.prototype.endsWith = function (t, i) {
      return -1 !== t.indexOf(i, t.length - i.length);
    }),
    (r.prototype.getUsedSuffix = function (t) {
      for (var i in this.settings.sizeRangeSuffixes)
        if (this.settings.sizeRangeSuffixes.hasOwnProperty(i)) {
          if (0 === this.settings.sizeRangeSuffixes[i].length) continue;
          if (this.endsWith(t, this.settings.sizeRangeSuffixes[i]))
            return this.settings.sizeRangeSuffixes[i];
        }
      return "";
    }),
    (r.prototype.newSrc = function (t, i, e, s) {
      var n;
      if (this.settings.thumbnailPath)
        n = this.settings.thumbnailPath(t, i, e, s);
      else {
        var r = t.match(this.settings.extension),
          o = null !== r ? r[0] : "";
        (n = t.replace(this.settings.extension, "")),
          (n = this.removeSuffix(n, this.getUsedSuffix(n))),
          (n += this.getSuffix(i, e) + o);
      }
      return n;
    }),
    (r.prototype.showImg = function (t, i) {
      this.settings.cssAnimation
        ? (t.addClass("jg-entry-visible"), i && i())
        : (t.stop().fadeTo(this.settings.imagesAnimationDuration, 1, i),
          t
            .find(this.settings.imgSelector)
            .stop()
            .fadeTo(this.settings.imagesAnimationDuration, 1, i));
    }),
    (r.prototype.extractImgSrcFromImage = function (t) {
      var i = t.data("safe-src"),
        e = "data-safe-src";
      return (
        void 0 === i && ((i = t.attr("src")), (e = "src")),
        t.data("jg.originalSrc", i),
        t.data("jg.src", i),
        t.data("jg.originalSrcLoc", e),
        i
      );
    }),
    (r.prototype.imgFromEntry = function (t) {
      var i = t.find(this.settings.imgSelector);
      return 0 === i.length ? null : i;
    }),
    (r.prototype.captionFromEntry = function (t) {
      var i = t.find("> .jg-caption");
      return 0 === i.length ? null : i;
    }),
    (r.prototype.displayEntry = function (t, i, e, s, n, r) {
      t.width(s), t.height(r), t.css("top", e), t.css("left", i);
      var o = this.imgFromEntry(t);
      if (null !== o) {
        o.css("width", s),
          o.css("height", n),
          o.css("margin-left", -Math.round(s/2)),
          o.css("margin-top", -Math.round(n/2));
        var a = o.data("jg.src");
        if (a) {
          (a = this.newSrc(a, s, n, o[0])),
            o.one("error", function () {
              this.resetImgSrc(o);
            });
          var h = function () {
            o.attr("src", a);
          };
          "skipped" === t.data("jg.loaded") && a
            ? this.onImageEvent(
                a,
                function () {
                  this.showImg(t, h), t.data("jg.loaded", !0);
                }.bind(this)
              )
            : this.showImg(t, h);
        }
      } else this.showImg(t);
      this.displayEntryCaption(t);
    }),
    (r.prototype.displayEntryCaption = function (t) {
      var i = this.imgFromEntry(t);
      if (null !== i && this.settings.captions) {
        var e = this.captionFromEntry(t);
        if (null === e) {
          var s = i.attr("alt");
          this.isValidCaption(s) || (s = t.attr("title")),
            this.isValidCaption(s) &&
              ((e = l('<div class="jg-caption">' + s + "</div>")),
              t.append(e),
              t.data("jg.createdCaption", !0));
        }
        null !== e &&
          (this.settings.cssAnimation ||
            e
              .stop()
              .fadeTo(0, this.settings.captionSettings.nonVisibleOpacity),
          this.addCaptionEventsHandlers(t));
      } else this.removeCaptionEventsHandlers(t);
    }),
    (r.prototype.isValidCaption = function (t) {
      return void 0 !== t && 0 < t.length;
    }),
    (r.prototype.onEntryMouseEnterForCaption = function (t) {
      var i = this.captionFromEntry(l(t.currentTarget));
      this.settings.cssAnimation
        ? i.addClass("jg-caption-visible").removeClass("jg-caption-hidden")
        : i
            .stop()
            .fadeTo(
              this.settings.captionSettings.animationDuration,
              this.settings.captionSettings.visibleOpacity
            );
    }),
    (r.prototype.onEntryMouseLeaveForCaption = function (t) {
      var i = this.captionFromEntry(l(t.currentTarget));
      this.settings.cssAnimation
        ? i
            .removeClass("jg-caption-visible")
            .removeClass("jg-caption-hidden")
        : i
            .stop()
            .fadeTo(
              this.settings.captionSettings.animationDuration,
              this.settings.captionSettings.nonVisibleOpacity
            );
    }),
    (r.prototype.addCaptionEventsHandlers = function (t) {
      var i = t.data("jg.captionMouseEvents");
      void 0 === i &&
        ((i = {
          mouseenter: l.proxy(this.onEntryMouseEnterForCaption, this),
          mouseleave: l.proxy(this.onEntryMouseLeaveForCaption, this),
        }),
        t.on("mouseenter", void 0, void 0, i.mouseenter),
        t.on("mouseleave", void 0, void 0, i.mouseleave),
        t.data("jg.captionMouseEvents", i));
    }),
    (r.prototype.removeCaptionEventsHandlers = function (t) {
      var i = t.data("jg.captionMouseEvents");
      void 0 !== i &&
        (t.off("mouseenter", void 0, i.mouseenter),
        t.off("mouseleave", void 0, i.mouseleave),
        t.removeData("jg.captionMouseEvents"));
    }),
    (r.prototype.clearBuildingRow = function () {
      (this.buildingRow.entriesBuff = []),
        (this.buildingRow.aspectRatio = 0),
        (this.buildingRow.width = 0);
    }),
    (r.prototype.prepareBuildingRow = function (t, i) {
      var e,
        s,
        n,
        r,
        o,
        a = !0,
        h = 0,
        g =
          this.galleryWidth -
          1 * this.border -
          (this.buildingRow.entriesBuff.length - 1) *
            this.settings.margins,
        l = g / this.buildingRow.aspectRatio,
        u = this.settings.rowHeight,
        d = this.buildingRow.width / g > this.settings.justifyThreshold;
      if (i || (t && "hide" === this.settings.lastRow && !d)) {
        for (e = 0; e < this.buildingRow.entriesBuff.length; e++)
          (s = this.buildingRow.entriesBuff[e]),
            this.settings.cssAnimation
              ? s.removeClass("jg-entry-visible")
              : (s.stop().fadeTo(0, 0.1),
                s.find("> img, > a > img").fadeTo(0, 0));
        return -1;
      }
      for (
        t &&
          !d &&
          "justify" !== this.settings.lastRow &&
          "hide" !== this.settings.lastRow &&
          ((a = !1),
          0 < this.rows &&
            (a =
              ((u =
                (this.offY -
                  this.border -
                  this.settings.margins * this.rows) /
                this.rows) *
                this.buildingRow.aspectRatio) /
                g >
              this.settings.justifyThreshold)),
          e = 0;
        e < this.buildingRow.entriesBuff.length;
        e++
      )
        (n =
          (s = this.buildingRow.entriesBuff[e]).data("jg.width") /
          s.data("jg.height")),
          (o = a
            ? ((r =
                e === this.buildingRow.entriesBuff.length - 1 ? g : l * n),
              l)
            : ((r = u * n), u)),
          (g -= Math.round(r)),
          s.data("jg.jwidth", Math.round(r)),
          s.data("jg.jheight", Math.ceil(o)),
          (0 === e || o < h) && (h = o);
      return (this.buildingRow.height = h), a;
    }),
    (r.prototype.flushRow = function (t, i) {
      var e,
        s,
        n,
        r = this.settings,
        o = this.border;
      if (
        ((s = this.prepareBuildingRow(t, i)),
        i || (t && "hide" === r.lastRow && -1 === s))
      )
        this.clearBuildingRow();
      else {
        if (
          (this.maxRowHeight &&
            this.maxRowHeight < this.buildingRow.height &&
            (this.buildingRow.height = this.maxRowHeight),
          t && ("center" === r.lastRow || "right" === r.lastRow))
        ) {
          var a =
            this.galleryWidth -
            2 * this.border -
            (this.buildingRow.entriesBuff.length - 1) * r.margins;
          for (n = 0; n < this.buildingRow.entriesBuff.length; n++)
            a -= (e = this.buildingRow.entriesBuff[n]).data("jg.jwidth");
          "center" === r.lastRow
            ? (o += Math.round(a / 2))
            : "right" === r.lastRow && (o += a);
        }
        var h = this.buildingRow.entriesBuff.length - 1;
        for (n = 0; n <= h; n++)
          (e =
            this.buildingRow.entriesBuff[this.settings.rtl ? h - n : n]),
            this.displayEntry(
              e,
              o,
              this.offY,
              e.data("jg.jwidth"),
              e.data("jg.jheight"),
              this.buildingRow.height
            ),
            (o += e.data("jg.jwidth") + r.margins);
        (this.galleryHeightToSet =
          this.offY + this.buildingRow.height + this.border),
          this.setGalleryTempHeight(
            this.galleryHeightToSet + this.getSpinnerHeight()
          ),
          (!t || (this.buildingRow.height <= r.rowHeight && s)) &&
            ((this.offY += this.buildingRow.height + r.margins),
            (this.rows += 1),
            this.clearBuildingRow(),
            this.settings.triggerEvent.call(this, "jg.rowflush"));
      }
    });
  var i = 0;
  (r.prototype.rememberGalleryHeight = function () {
    (i = this.$gallery.height()), this.$gallery.height(i);
  }),
    (r.prototype.setGalleryTempHeight = function (t) {
      (i = Math.max(t, i)), this.$gallery.height(i);
    }),
    (r.prototype.setGalleryFinalHeight = function (t) {
      (i = t), this.$gallery.height(t);
    }),
    (r.prototype.checkWidth = function () {
      this.checkWidthIntervalId = setInterval(
        l.proxy(function () {
          if (this.$gallery.is(":visible")) {
            var t = parseFloat(this.$gallery.width());
            Math.abs(t - this.galleryWidth) >
              this.settings.refreshSensitivity &&
              ((this.galleryWidth = t),
              this.rewind(),
              this.rememberGalleryHeight(),
              this.startImgAnalyzer(!0));
          }
        }, this),
        this.settings.refreshTime
      );
    }),
    (r.prototype.isSpinnerActive = function () {
      return null !== this.spinner.intervalId;
    }),
    (r.prototype.getSpinnerHeight = function () {
      return this.spinner.$el.innerHeight();
    }),
    (r.prototype.stopLoadingSpinnerAnimation = function () {
      clearInterval(this.spinner.intervalId),
        (this.spinner.intervalId = null),
        this.setGalleryTempHeight(
          this.$gallery.height() - this.getSpinnerHeight()
        ),
        this.spinner.$el.detach();
    }),
    (r.prototype.startLoadingSpinnerAnimation = function () {
      var t = this.spinner,
        i = t.$el.find("span");
      clearInterval(t.intervalId),
        this.$gallery.append(t.$el),
        this.setGalleryTempHeight(
          this.offY + this.buildingRow.height + this.getSpinnerHeight()
        ),
        (t.intervalId = setInterval(function () {
          t.phase < i.length
            ? i.eq(t.phase).fadeTo(t.timeSlot, 1)
            : i.eq(t.phase - i.length).fadeTo(t.timeSlot, 0),
            (t.phase = (t.phase + 1) % (2 * i.length));
        }, t.timeSlot));
    }),
    (r.prototype.rewind = function () {
      (this.lastFetchedEntry = null),
        (this.lastAnalyzedIndex = -1),
        (this.offY = this.border),
        (this.rows = 0),
        this.clearBuildingRow();
    }),
    (r.prototype.getSelectorWithoutSpinner = function () {
      return this.settings.selector + ", div:not(.jg-spinner)";
    }),
    (r.prototype.getAllEntries = function () {
      var t = this.getSelectorWithoutSpinner();
      return this.$gallery.children(t).toArray();
    }),
    (r.prototype.updateEntries = function (t) {
      var i;
      if (t && null != this.lastFetchedEntry) {
        var e = this.getSelectorWithoutSpinner();
        i = l(this.lastFetchedEntry).nextAll(e).toArray();
      } else (this.entries = []), (i = this.getAllEntries());
      return (
        0 < i.length &&
          (l.isFunction(this.settings.sort)
            ? (i = this.sortArray(i))
            : this.settings.randomize && (i = this.shuffleArray(i)),
          (this.lastFetchedEntry = i[i.length - 1]),
          this.settings.filter
            ? (i = this.filterArray(i))
            : this.resetFilters(i)),
        (this.entries = this.entries.concat(i)),
        !0
      );
    }),
    (r.prototype.insertToGallery = function (t) {
      var i = this;
      l.each(t, function () {
        l(this).appendTo(i.$gallery);
      });
    }),
    (r.prototype.shuffleArray = function (t) {
      var i, e, s;
      for (i = t.length - 1; 0 < i; i--)
        (e = Math.floor(Math.random() * (i + 1))),
          (s = t[i]),
          (t[i] = t[e]),
          (t[e] = s);
      return this.insertToGallery(t), t;
    }),
    (r.prototype.sortArray = function (t) {
      return t.sort(this.settings.sort), this.insertToGallery(t), t;
    }),
    (r.prototype.resetFilters = function (t) {
      for (var i = 0; i < t.length; i++)
        l(t[i]).removeClass("jg-filtered");
    }),
    (r.prototype.filterArray = function (t) {
      var e = this.settings;
      if ("string" === l.type(e.filter))
        return t.filter(function (t) {
          var i = l(t);
          return i.is(e.filter)
            ? (i.removeClass("jg-filtered"), !0)
            : (i.addClass("jg-filtered").removeClass("jg-visible"), !1);
        });
      if (l.isFunction(e.filter)) {
        for (var i = t.filter(e.filter), s = 0; s < t.length; s++)
          -1 === i.indexOf(t[s])
            ? l(t[s]).addClass("jg-filtered").removeClass("jg-visible")
            : l(t[s]).removeClass("jg-filtered");
        return i;
      }
    }),
    (r.prototype.resetImgSrc = function (t) {
      "src" === t.data("jg.originalSrcLoc")
        ? t.attr("src", t.data("jg.originalSrc"))
        : t.attr("src", "");
    }),
    (r.prototype.destroy = function () {
      clearInterval(this.checkWidthIntervalId),
        this.stopImgAnalyzerStarter(),
        l.each(
          this.getAllEntries(),
          l.proxy(function (t, i) {
            var e = l(i);
            e.css("width", ""),
              e.css("height", ""),
              e.css("top", ""),
              e.css("left", ""),
              e.data("jg.loaded", void 0),
              e.removeClass("jg-entry jg-filtered jg-entry-visible");
            var s = this.imgFromEntry(e);
            s &&
              (s.css("width", ""),
              s.css("height", ""),
              s.css("margin-left", ""),
              s.css("margin-top", ""),
              this.resetImgSrc(s),
              s.data("jg.originalSrc", void 0),
              s.data("jg.originalSrcLoc", void 0),
              s.data("jg.src", void 0)),
              this.removeCaptionEventsHandlers(e);
            var n = this.captionFromEntry(e);
            e.data("jg.createdCaption")
              ? (e.data("jg.createdCaption", void 0),
                null !== n && n.remove())
              : null !== n && n.fadeTo(0, 1);
          }, this)
        ),
        this.$gallery.css("height", ""),
        this.$gallery.removeClass("justified-gallery"),
        this.$gallery.data("jg.controller", void 0),
        this.settings.triggerEvent.call(this, "jg.destroy");
    }),
    (r.prototype.analyzeImages = function (t) {
      for (
        var i = this.lastAnalyzedIndex + 1;
        i < this.entries.length;
        i++
      ) {
        var e = l(this.entries[i]);
        if (
          !0 === e.data("jg.loaded") ||
          "skipped" === e.data("jg.loaded")
        ) {
          var s =
              this.galleryWidth * 1.65 -
              2 * this.border -
              (this.buildingRow.entriesBuff.length - 1) *
                this.settings.margins,
            n = e.data("jg.width") / e.data("jg.height");
          if (
            (this.buildingRow.entriesBuff.push(e),
            (this.buildingRow.aspectRatio += n),
            (this.buildingRow.width += n * this.settings.rowHeight),
            (this.lastAnalyzedIndex = i),
            s / (this.buildingRow.aspectRatio + n) <
              this.settings.rowHeight &&
              (this.flushRow(
                !1,
                0 < this.settings.maxRowsCount &&
                  this.rows === this.settings.maxRowsCount
              ),
              ++this.yield.flushed >= this.yield.every))
          )
            return void this.startImgAnalyzer(t);
        } else if ("error" !== e.data("jg.loaded")) return;
      }
      0 < this.buildingRow.entriesBuff.length &&
        this.flushRow(
          !0,
          0 < this.settings.maxRowsCount &&
            this.rows === this.settings.maxRowsCount
        ),
        this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(),
        this.stopImgAnalyzerStarter(),
        this.setGalleryFinalHeight(this.galleryHeightToSet),
        this.settings.triggerEvent.call(
          this,
          t ? "jg.resize" : "jg.complete"
        );
    }),
    (r.prototype.stopImgAnalyzerStarter = function () {
      (this.yield.flushed = 0),
        null !== this.imgAnalyzerTimeout &&
          (clearTimeout(this.imgAnalyzerTimeout),
          (this.imgAnalyzerTimeout = null));
    }),
    (r.prototype.startImgAnalyzer = function (t) {
      var i = this;
      this.stopImgAnalyzerStarter(),
        (this.imgAnalyzerTimeout = setTimeout(function () {
          i.analyzeImages(t);
        }, 0.001));
    }),
    (r.prototype.onImageEvent = function (t, i, e) {
      if (i || e) {
        var s = new Image(),
          n = l(s);
        i &&
          n.one("load", function () {
            n.off("load error"), i(s);
          }),
          e &&
            n.one("error", function () {
              n.off("load error"), e(s);
            }),
          (s.src = t);
      }
    }),
    (r.prototype.init = function () {
      var a = !1,
        h = !1,
        g = this;
      l.each(this.entries, function (t, i) {
        var e = l(i),
          s = g.imgFromEntry(e);
        if (
          (e.addClass("jg-entry"),
          !0 !== e.data("jg.loaded") && "skipped" !== e.data("jg.loaded"))
        )
          if (
            (null !== g.settings.rel && e.attr("rel", g.settings.rel),
            null !== g.settings.target &&
              e.attr("target", g.settings.target),
            null !== s)
          ) {
            var n = g.extractImgSrcFromImage(s);
            if (!1 === g.settings.waitThumbnailsLoad || !n) {
              var r = parseFloat(s.attr("width")),
                o = parseFloat(s.attr("height"));
              if (
                ("svg" === s.prop("tagName") &&
                  ((r = parseFloat(s[0].getBBox().width)),
                  (o = parseFloat(s[0].getBBox().height))),
                !isNaN(r) && !isNaN(o))
              )
                return (
                  e.data("jg.width", r),
                  e.data("jg.height", o),
                  e.data("jg.loaded", "skipped"),
                  (h = !0),
                  g.startImgAnalyzer(!1),
                  !0
                );
            }
            e.data("jg.loaded", !1),
              (a = !0),
              g.isSpinnerActive() || g.startLoadingSpinnerAnimation(),
              g.onImageEvent(
                n,
                function (t) {
                  e.data("jg.width", t.width),
                    e.data("jg.height", t.height),
                    e.data("jg.loaded", !0),
                    g.startImgAnalyzer(!1);
                },
                function () {
                  e.data("jg.loaded", "error"), g.startImgAnalyzer(!1);
                }
              );
          } else
            e.data("jg.loaded", !0),
              e.data(
                "jg.width",
                e.width() | parseFloat(e.css("width")) | 1
              ),
              e.data(
                "jg.height",
                e.height() | parseFloat(e.css("height")) | 1
              );
      }),
        a || h || this.startImgAnalyzer(!1),
        this.checkWidth();
    }),
    (r.prototype.checkOrConvertNumber = function (t, i) {
      if (
        ("string" === l.type(t[i]) && (t[i] = parseFloat(t[i])),
        "number" !== l.type(t[i]))
      )
        throw i + " must be a number";
      if (isNaN(t[i])) throw "invalid number for " + i;
    }),
    (r.prototype.checkSizeRangesSuffixes = function () {
      if ("object" !== l.type(this.settings.sizeRangeSuffixes))
        throw "sizeRangeSuffixes must be defined and must be an object";
      var t = [];
      for (var i in this.settings.sizeRangeSuffixes)
        this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(i);
      for (var e = { 0: "" }, s = 0; s < t.length; s++)
        if ("string" === l.type(t[s]))
          try {
            e[parseInt(t[s].replace(/^[a-z]+/, ""), 10)] =
              this.settings.sizeRangeSuffixes[t[s]];
          } catch (t) {
            throw (
              "sizeRangeSuffixes keys must contains correct numbers (" +
              t +
              ")"
            );
          }
        else e[t[s]] = this.settings.sizeRangeSuffixes[t[s]];
      this.settings.sizeRangeSuffixes = e;
    }),
    (r.prototype.retrieveMaxRowHeight = function () {
      var t = null,
        i = this.settings.rowHeight;
      if ("string" === l.type(this.settings.maxRowHeight))
        t = this.settings.maxRowHeight.match(/^[0-9]+%$/)
          ? (i *
              parseFloat(
                this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]
              )) /
            100
          : parseFloat(this.settings.maxRowHeight);
      else {
        if ("number" !== l.type(this.settings.maxRowHeight)) {
          if (
            !1 === this.settings.maxRowHeight ||
            null == this.settings.maxRowHeight
          )
            return null;
          throw "maxRowHeight must be a number or a percentage";
        }
        t = this.settings.maxRowHeight;
      }
      if (isNaN(t)) throw "invalid number for maxRowHeight";
      return t < i && (t = i), t;
    }),
    (r.prototype.checkSettings = function () {
      this.checkSizeRangesSuffixes(),
        this.checkOrConvertNumber(this.settings, "rowHeight"),
        this.checkOrConvertNumber(this.settings, "margins"),
        this.checkOrConvertNumber(this.settings, "border"),
        this.checkOrConvertNumber(this.settings, "maxRowsCount");
      var t = ["justify", "nojustify", "left", "center", "right", "hide"];
      if (-1 === t.indexOf(this.settings.lastRow))
        throw "lastRow must be one of: " + t.join(", ");
      if (
        (this.checkOrConvertNumber(this.settings, "justifyThreshold"),
        this.settings.justifyThreshold < 0 ||
          1 < this.settings.justifyThreshold)
      )
        throw "justifyThreshold must be in the interval [0,1]";
      if ("boolean" !== l.type(this.settings.cssAnimation))
        throw "cssAnimation must be a boolean";
      if ("boolean" !== l.type(this.settings.captions))
        throw "captions must be a boolean";
      if (
        (this.checkOrConvertNumber(
          this.settings.captionSettings,
          "animationDuration"
        ),
        this.checkOrConvertNumber(
          this.settings.captionSettings,
          "visibleOpacity"
        ),
        this.settings.captionSettings.visibleOpacity < 0 ||
          1 < this.settings.captionSettings.visibleOpacity)
      )
        throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
      if (
        (this.checkOrConvertNumber(
          this.settings.captionSettings,
          "nonVisibleOpacity"
        ),
        this.settings.captionSettings.nonVisibleOpacity < 0 ||
          1 < this.settings.captionSettings.nonVisibleOpacity)
      )
        throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
      if (
        (this.checkOrConvertNumber(
          this.settings,
          "imagesAnimationDuration"
        ),
        this.checkOrConvertNumber(this.settings, "refreshTime"),
        this.checkOrConvertNumber(this.settings, "refreshSensitivity"),
        "boolean" !== l.type(this.settings.randomize))
      )
        throw "randomize must be a boolean";
      if ("string" !== l.type(this.settings.selector))
        throw "selector must be a string";
      if (!1 !== this.settings.sort && !l.isFunction(this.settings.sort))
        throw "sort must be false or a comparison function";
      if (
        !1 !== this.settings.filter &&
        !l.isFunction(this.settings.filter) &&
        "string" !== l.type(this.settings.filter)
      )
        throw "filter must be false, a string or a filter function";
    }),
    (r.prototype.retrieveSuffixRanges = function () {
      var t = [];
      for (var i in this.settings.sizeRangeSuffixes)
        this.settings.sizeRangeSuffixes.hasOwnProperty(i) &&
          t.push(parseInt(i, 10));
      return (
        t.sort(function (t, i) {
          return i < t ? 1 : t < i ? -1 : 0;
        }),
        t
      );
    }),
    (r.prototype.updateSettings = function (t) {
      (this.settings = l.extend({}, this.settings, t)),
        this.checkSettings(),
        (this.border =
          0 <= this.settings.border
            ? this.settings.border
            : this.settings.margins),
        (this.maxRowHeight = this.retrieveMaxRowHeight()),
        (this.suffixRanges = this.retrieveSuffixRanges());
    }),
    (r.prototype.defaults = {
      sizeRangeSuffixes: {},
      thumbnailPath: void 0,
      rowHeight: 120,
      maxRowHeight: !1,
      maxRowsCount: 0,
      margins: 1,
      border: -1,
      lastRow: "nojustify",
      justifyThreshold: 0.9,
      waitThumbnailsLoad: !0,
      captions: !0,
      cssAnimation: !0,
      imagesAnimationDuration: 500,
      captionSettings: {
        animationDuration: 500,
        visibleOpacity: 0.7,
        nonVisibleOpacity: 0,
      },
      rel: null,
      target: null,
      extension: /\.[^.\\/]+$/,
      refreshTime: 200,
      refreshSensitivity: 0,
      randomize: !1,
      rtl: !1,
      sort: !1,
      filter: !1,
      selector: "a",
      imgSelector: "> img, > a > img, > svg, > a > svg",
      triggerEvent: function (t) {
        this.$gallery.trigger(t);
      },
    }),
    (l.fn.justifiedGallery = function (n) {
      return this.each(function (t, i) {
        var e = l(i);
        e.addClass("justified-gallery");
        var s = e.data("jg.controller");
        if (void 0 === s) {
          if (null != n && "object" !== l.type(n)) {
            if ("destroy" === n) return;
            throw "The argument must be an object";
          }
          (s = new r(e, l.extend({}, r.prototype.defaults, n))),
            e.data("jg.controller", s);
        } else if ("norewind" === n);
        else {
          if ("destroy" === n) return void s.destroy();
          s.updateSettings(n), s.rewind();
        }
        s.updateEntries("norewind" === n) && s.init();
      });
    });
});
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("ScrollBooster", [], e)
    : "object" == typeof exports
    ? (exports.ScrollBooster = e())
    : (t.ScrollBooster = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function i(o) {
      if (e[o]) return e[o].exports;
      var n = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, o) {
        i.o(t, e) ||
          Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (i.r(o),
          Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t,
          }),
          2 & e && "string" != typeof t)
        )
          for (var n in t)
            i.d(
              o,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return o;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 0))
    );
  })([
    function (t, e, i) {
      "use strict";
      function o(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, o);
        }
        return i;
      }
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(i), !0).forEach(function (e) {
                r(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(i)
              )
            : o(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function r(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      i.r(e),
        i.d(e, "default", function () {
          return p;
        });
      var l = function (t) {
          return Math.max(t.offsetHeight, t.scrollHeight);
        },
        p = (function () {
          function t() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            s(this, t);
            var i = {
              content: e.viewport.children[0],
              direction: "all",
              pointerMode: "all",
              scrollMode: void 0,
              bounce: !0,
              bounceForce: 0.1,
              friction: 0.05,
              textSelection: !1,
              inputsFocus: !0,
              emulateScroll: !1,
              preventDefaultOnEmulateScroll: !1,
              preventPointerMoveDefault: !0,
              lockScrollOnDragDirection: !1,
              pointerDownPreventDefault: !0,
              dragDirectionTolerance: 40,
              onPointerDown: function () {},
              onPointerUp: function () {},
              onPointerMove: function () {},
              onClick: function () {},
              onUpdate: function () {},
              onWheel: function () {},
              shouldScroll: function () {
                return !0;
              },
            };
            if (
              ((this.props = n(n({}, i), e)),
              this.props.viewport &&
                this.props.viewport instanceof Element)
            )
              if (this.props.content) {
                (this.isDragging = !1),
                  (this.isTargetScroll = !1),
                  (this.isScrolling = !1),
                  (this.isRunning = !1);
                var o = { x: 0, y: 0 };
                (this.position = n({}, o)),
                  (this.velocity = n({}, o)),
                  (this.dragStartPosition = n({}, o)),
                  (this.dragOffset = n({}, o)),
                  (this.clientOffset = n({}, o)),
                  (this.dragPosition = n({}, o)),
                  (this.targetPosition = n({}, o)),
                  (this.scrollOffset = n({}, o)),
                  (this.rafID = null),
                  (this.events = {}),
                  this.updateMetrics(),
                  this.handleEvents();
              } else
                console.error(
                  "ScrollBooster init error: Viewport does not have any content"
                );
            else
              console.error(
                'ScrollBooster init error: "viewport" config property must be present and must be Element'
              );
          }
          var e, i, o;
          return (
            (e = t),
            (i = [
              {
                key: "updateOptions",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.props = n(n({}, this.props), t)),
                    this.props.onUpdate(this.getState()),
                    this.startAnimationLoop();
                },
              },
              {
                key: "updateMetrics",
                value: function () {
                  var t;
                  (this.viewport = {
                    width: this.props.viewport.clientWidth,
                    height: this.props.viewport.clientHeight,
                  }),
                    (this.content = {
                      width:
                        ((t = this.props.content),
                        Math.max(t.offsetWidth, t.scrollWidth)),
                      height: l(this.props.content),
                    }),
                    (this.edgeX = {
                      from: Math.min(
                        -this.content.width + this.viewport.width,
                        0
                      ),
                      to: 0,
                    }),
                    (this.edgeY = {
                      from: Math.min(
                        -this.content.height + this.viewport.height,
                        0
                      ),
                      to: 0,
                    }),
                    this.props.onUpdate(this.getState()),
                    this.startAnimationLoop();
                },
              },
              {
                key: "startAnimationLoop",
                value: function () {
                  var t = this;
                  (this.isRunning = !0),
                    cancelAnimationFrame(this.rafID),
                    (this.rafID = requestAnimationFrame(function () {
                      return t.animate();
                    }));
                },
              },
              {
                key: "animate",
                value: function () {
                  var t = this;
                  if (this.isRunning) {
                    this.updateScrollPosition(),
                      this.isMoving() ||
                        ((this.isRunning = !1),
                        (this.isTargetScroll = !1));
                    var e = this.getState();
                    this.setContentPosition(e),
                      this.props.onUpdate(e),
                      (this.rafID = requestAnimationFrame(function () {
                        return t.animate();
                      }));
                  }
                },
              },
              {
                key: "updateScrollPosition",
                value: function () {
                  this.applyEdgeForce(),
                    this.applyDragForce(),
                    this.applyScrollForce(),
                    this.applyTargetForce();
                  var t = 1 - this.props.friction;
                  (this.velocity.x *= t),
                    (this.velocity.y *= t),
                    "vertical" !== this.props.direction &&
                      (this.position.x += this.velocity.x),
                    "horizontal" !== this.props.direction &&
                      (this.position.y += this.velocity.y),
                    (this.props.bounce && !this.isScrolling) ||
                      this.isTargetScroll ||
                      ((this.position.x = Math.max(
                        Math.min(this.position.x, this.edgeX.to),
                        this.edgeX.from
                      )),
                      (this.position.y = Math.max(
                        Math.min(this.position.y, this.edgeY.to),
                        this.edgeY.from
                      )));
                },
              },
              {
                key: "applyForce",
                value: function (t) {
                  (this.velocity.x += t.x), (this.velocity.y += t.y);
                },
              },
              {
                key: "applyEdgeForce",
                value: function () {
                  if (this.props.bounce && !this.isDragging) {
                    var t = this.position.x < this.edgeX.from,
                      e = this.position.x > this.edgeX.to,
                      i = this.position.y < this.edgeY.from,
                      o = this.position.y > this.edgeY.to,
                      n = t || e,
                      r = i || o;
                    if (n || r) {
                      var s = t ? this.edgeX.from : this.edgeX.to,
                        a = i ? this.edgeY.from : this.edgeY.to,
                        l = s - this.position.x,
                        p = a - this.position.y,
                        c = {
                          x: l * this.props.bounceForce,
                          y: p * this.props.bounceForce,
                        },
                        h =
                          this.position.x +
                          (this.velocity.x + c.x) / this.props.friction,
                        u =
                          this.position.y +
                          (this.velocity.y + c.y) / this.props.friction;
                      ((t && h >= this.edgeX.from) ||
                        (e && h <= this.edgeX.to)) &&
                        (c.x =
                          l * this.props.bounceForce - this.velocity.x),
                        ((i && u >= this.edgeY.from) ||
                          (o && u <= this.edgeY.to)) &&
                          (c.y =
                            p * this.props.bounceForce - this.velocity.y),
                        this.applyForce({
                          x: n ? c.x : 0,
                          y: r ? c.y : 0,
                        });
                    }
                  }
                },
              },
              {
                key: "applyDragForce",
                value: function () {
                  if (this.isDragging) {
                    var t = this.dragPosition.x - this.position.x,
                      e = this.dragPosition.y - this.position.y;
                    this.applyForce({
                      x: t - this.velocity.x,
                      y: e - this.velocity.y,
                    });
                  }
                },
              },
              {
                key: "applyScrollForce",
                value: function () {
                  this.isScrolling &&
                    (this.applyForce({
                      x: this.scrollOffset.x - this.velocity.x,
                      y: this.scrollOffset.y - this.velocity.y,
                    }),
                    (this.scrollOffset.x = 0),
                    (this.scrollOffset.y = 0));
                },
              },
              {
                key: "applyTargetForce",
                value: function () {
                  this.isTargetScroll &&
                    this.applyForce({
                      x:
                        0.08 * (this.targetPosition.x - this.position.x) -
                        this.velocity.x,
                      y:
                        0.08 * (this.targetPosition.y - this.position.y) -
                        this.velocity.y,
                    });
                },
              },
              {
                key: "isMoving",
                value: function () {
                  return (
                    this.isDragging ||
                    this.isScrolling ||
                    Math.abs(this.velocity.x) >= 0.01 ||
                    Math.abs(this.velocity.y) >= 0.01
                  );
                },
              },
              {
                key: "scrollTo",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.isTargetScroll = !0),
                    (this.targetPosition.x = -t.x || 0),
                    (this.targetPosition.y = -t.y || 0),
                    this.startAnimationLoop();
                },
              },
              {
                key: "setPosition",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.velocity.x = 0),
                    (this.velocity.y = 0),
                    (this.position.x = -t.x || 0),
                    (this.position.y = -t.y || 0),
                    this.startAnimationLoop();
                },
              },
              {
                key: "getState",
                value: function () {
                  return {
                    isMoving: this.isMoving(),
                    isDragging: !(
                      !this.dragOffset.x && !this.dragOffset.y
                    ),
                    position: { x: -this.position.x, y: -this.position.y },
                    dragOffset: this.dragOffset,
                    dragAngle: this.getDragAngle(
                      this.clientOffset.x,
                      this.clientOffset.y
                    ),
                    borderCollision: {
                      left: this.position.x >= this.edgeX.to,
                      right: this.position.x <= this.edgeX.from,
                      top: this.position.y >= this.edgeY.to,
                      bottom: this.position.y <= this.edgeY.from,
                    },
                  };
                },
              },
              {
                key: "getDragAngle",
                value: function (t, e) {
                  return Math.round(Math.atan2(t, e) * (180 / Math.PI));
                },
              },
              {
                key: "getDragDirection",
                value: function (t, e) {
                  return Math.abs(90 - Math.abs(t)) <= 90 - e
                    ? "horizontal"
                    : "vertical";
                },
              },
              {
                key: "setContentPosition",
                value: function (t) {
                  "transform" === this.props.scrollMode &&
                    (this.props.content.style.transform = "translate3d("
                      .concat(-t.position.x, "px, ")
                      .concat(-t.position.y, "px, 0px)")),
                    "native" === this.props.scrollMode &&
                      ((this.props.viewport.scrollTop = t.position.y),
                      (this.props.viewport.scrollLeft = t.position.x));
                },
              },
              {
                key: "handleEvents",
                value: function () {
                  var t = this,
                    e = { x: 0, y: 0 },
                    i = { x: 0, y: 0 },
                    o = null,
                    n = null,
                    r = !1,
                    s = function (n) {
                      if (t.isDragging) {
                        var s = r ? n.touches[0] : n,
                          a = s.pageX,
                          l = s.pageY,
                          p = s.clientX,
                          c = s.clientY;
                        (t.dragOffset.x = a - e.x),
                          (t.dragOffset.y = l - e.y),
                          (t.clientOffset.x = p - i.x),
                          (t.clientOffset.y = c - i.y),
                          ((Math.abs(t.clientOffset.x) > 5 && !o) ||
                            (Math.abs(t.clientOffset.y) > 5 && !o)) &&
                            (o = t.getDragDirection(
                              t.getDragAngle(
                                t.clientOffset.x,
                                t.clientOffset.y
                              ),
                              t.props.dragDirectionTolerance
                            )),
                          t.props.lockScrollOnDragDirection &&
                          "all" !== t.props.lockScrollOnDragDirection
                            ? o === t.props.lockScrollOnDragDirection && r
                              ? ((t.dragPosition.x =
                                  t.dragStartPosition.x + t.dragOffset.x),
                                (t.dragPosition.y =
                                  t.dragStartPosition.y + t.dragOffset.y))
                              : r
                              ? ((t.dragPosition.x =
                                  t.dragStartPosition.x),
                                (t.dragPosition.y = t.dragStartPosition.y))
                              : ((t.dragPosition.x =
                                  t.dragStartPosition.x + t.dragOffset.x),
                                (t.dragPosition.y =
                                  t.dragStartPosition.y + t.dragOffset.y))
                            : ((t.dragPosition.x =
                                t.dragStartPosition.x + t.dragOffset.x),
                              (t.dragPosition.y =
                                t.dragStartPosition.y + t.dragOffset.y));
                      }
                    };
                  (this.events.pointerdown = function (o) {
                    (r = !(!o.touches || !o.touches[0])),
                      t.props.onPointerDown(t.getState(), o, r);
                    var n = r ? o.touches[0] : o,
                      a = n.pageX,
                      l = n.pageY,
                      p = n.clientX,
                      c = n.clientY,
                      h = t.props.viewport,
                      u = h.getBoundingClientRect();
                    if (
                      !(p - u.left >= h.clientLeft + h.clientWidth) &&
                      !(c - u.top >= h.clientTop + h.clientHeight) &&
                      t.props.shouldScroll(t.getState(), o) &&
                      2 !== o.button &&
                      ("mouse" !== t.props.pointerMode || !r) &&
                      ("touch" !== t.props.pointerMode || r) &&
                      !(
                        t.props.inputsFocus &&
                        [
                          "input",
                          "textarea",
                          "button",
                          "select",
                          "label",
                        ].indexOf(o.target.nodeName.toLowerCase()) > -1
                      )
                    ) {
                      if (t.props.textSelection) {
                        if (
                          (function (t, e, i) {
                            for (
                              var o = t.childNodes,
                                n = document.createRange(),
                                r = 0;
                              r < o.length;
                              r++
                            ) {
                              var s = o[r];
                              if (3 === s.nodeType) {
                                n.selectNodeContents(s);
                                var a = n.getBoundingClientRect();
                                if (
                                  e >= a.left &&
                                  i >= a.top &&
                                  e <= a.right &&
                                  i <= a.bottom
                                )
                                  return s;
                              }
                            }
                            return !1;
                          })(o.target, p, c)
                        )
                          return;
                        (f = window.getSelection
                          ? window.getSelection()
                          : document.selection) &&
                          (f.removeAllRanges
                            ? f.removeAllRanges()
                            : f.empty && f.empty());
                      }
                      var f;
                      (t.isDragging = !0),
                        (e.x = a),
                        (e.y = l),
                        (i.x = p),
                        (i.y = c),
                        (t.dragStartPosition.x = t.position.x),
                        (t.dragStartPosition.y = t.position.y),
                        s(o),
                        t.startAnimationLoop(),
                        !r &&
                          t.props.pointerDownPreventDefault &&
                          o.preventDefault();
                    }
                  }),
                    (this.events.pointermove = function (e) {
                      !e.cancelable ||
                        ("all" !== t.props.lockScrollOnDragDirection &&
                          t.props.lockScrollOnDragDirection !== o) ||
                        e.preventDefault(),
                        s(e),
                        t.props.onPointerMove(t.getState(), e, r);
                    }),
                    (this.events.pointerup = function (e) {
                      (t.isDragging = !1),
                        (o = null),
                        t.props.onPointerUp(t.getState(), e, r);
                    }),
                    (this.events.wheel = function (e) {
                      var i = t.getState();
                      t.props.emulateScroll &&
                        ((t.velocity.x = 0),
                        (t.velocity.y = 0),
                        (t.isScrolling = !0),
                        (t.scrollOffset.x = -e.deltaX),
                        (t.scrollOffset.y = -e.deltaY),
                        t.props.onWheel(i, e),
                        t.startAnimationLoop(),
                        clearTimeout(n),
                        (n = setTimeout(function () {
                          return (t.isScrolling = !1);
                        }, 80)),
                        t.props.preventDefaultOnEmulateScroll &&
                          t.getDragDirection(
                            t.getDragAngle(-e.deltaX, -e.deltaY),
                            t.props.dragDirectionTolerance
                          ) === t.props.preventDefaultOnEmulateScroll &&
                          e.preventDefault());
                    }),
                    (this.events.scroll = function () {
                      var e = t.props.viewport,
                        i = e.scrollLeft,
                        o = e.scrollTop;
                      Math.abs(t.position.x + i) > 3 &&
                        ((t.position.x = -i), (t.velocity.x = 0)),
                        Math.abs(t.position.y + o) > 3 &&
                          ((t.position.y = -o), (t.velocity.y = 0));
                    }),
                    (this.events.click = function (e) {
                      var i = t.getState(),
                        o =
                          "vertical" !== t.props.direction
                            ? i.dragOffset.x
                            : 0,
                        n =
                          "horizontal" !== t.props.direction
                            ? i.dragOffset.y
                            : 0;
                      Math.max(Math.abs(o), Math.abs(n)) > 5 &&
                        (e.preventDefault(), e.stopPropagation()),
                        t.props.onClick(i, e, r);
                    }),
                    (this.events.contentLoad = function () {
                      return t.updateMetrics();
                    }),
                    (this.events.resize = function () {
                      return t.updateMetrics();
                    }),
                    this.props.viewport.addEventListener(
                      "mousedown",
                      this.events.pointerdown
                    ),
                    this.props.viewport.addEventListener(
                      "touchstart",
                      this.events.pointerdown,
                      { passive: !1 }
                    ),
                    this.props.viewport.addEventListener(
                      "click",
                      this.events.click
                    ),
                    this.props.viewport.addEventListener(
                      "wheel",
                      this.events.wheel,
                      { passive: !1 }
                    ),
                    this.props.viewport.addEventListener(
                      "scroll",
                      this.events.scroll
                    ),
                    this.props.content.addEventListener(
                      "load",
                      this.events.contentLoad,
                      !0
                    ),
                    window.addEventListener(
                      "mousemove",
                      this.events.pointermove
                    ),
                    window.addEventListener(
                      "touchmove",
                      this.events.pointermove,
                      { passive: !1 }
                    ),
                    window.addEventListener(
                      "mouseup",
                      this.events.pointerup
                    ),
                    window.addEventListener(
                      "touchend",
                      this.events.pointerup
                    ),
                    window.addEventListener("resize", this.events.resize);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.props.viewport.removeEventListener(
                    "mousedown",
                    this.events.pointerdown
                  ),
                    this.props.viewport.removeEventListener(
                      "touchstart",
                      this.events.pointerdown
                    ),
                    this.props.viewport.removeEventListener(
                      "click",
                      this.events.click
                    ),
                    this.props.viewport.removeEventListener(
                      "wheel",
                      this.events.wheel
                    ),
                    this.props.viewport.removeEventListener(
                      "scroll",
                      this.events.scroll
                    ),
                    this.props.content.removeEventListener(
                      "load",
                      this.events.contentLoad
                    ),
                    window.removeEventListener(
                      "mousemove",
                      this.events.pointermove
                    ),
                    window.removeEventListener(
                      "touchmove",
                      this.events.pointermove
                    ),
                    window.removeEventListener(
                      "mouseup",
                      this.events.pointerup
                    ),
                    window.removeEventListener(
                      "touchend",
                      this.events.pointerup
                    ),
                    window.removeEventListener(
                      "resize",
                      this.events.resize
                    );
                },
              },
            ]) && a(e.prototype, i),
            o && a(e, o),
            t
          );
        })();
    },
  ]).default;
});
//# sourceMappingURL=scrollbooster.min.js.map
var maxRowHeight;
var mySwiper;
var os;
var sb;
var displayImagesTimer;
var checkLoading;
var rowHeight;
var mobile;
var swipers = [];
var gridSet;
var setHomeGrid;
var direction;
var distance;
var gridPositions;
var pointerDown;
var drag;
var displayImageTO;
var scale = 0.1;
var isMoving;
$(document).ready(function () {
  if ($("body").hasClass("page")) {
    $(".viewport-content, .content").click(function (e) {
      e.stopPropagation();
      window.location.reload(!1);
    });
  }
  checkImageVisibility = function () {
    $(".img-wrapper").each(function () {
      if (elementInViewport($(this)[0])) {
        triggerElementVisibilty($(this)[0]);
      } else {
        $(this).removeClass("visible");
      }
    });
  };
  checkSelectedVisibility = function () {
    $(".img-wrapper.visible").each(function () {
      if (elementInViewport($(this)[0], !0)) {
        $(this).addClass("selected");
        if ($(this).hasClass("has-video")) {
          var id = $(this).find("video").attr("id");
          var video = document.getElementById(id);
          setTimeout(function () {
            video.play();
          }, 1000);
        }
      } else {
        $(this).removeClass("selected");
        if ($(this).hasClass("has-video")) {
          var id = $(this).find("video").attr("id");
          var video = document.getElementById(id);
          video.pause();
        }
      }
    });
  };
  if ($("body").hasClass("home")) {
    var scrollMode;
    mobile = $(window).width() < 900 ? !0 : !1;
    if (mobile) {
      scrollMode = "transform";
    } else {
      scrollMode = "native";
    }
    $("body").attr("data-scrollmode", scrollMode);
    sb = new ScrollBooster({
      viewport: document.querySelector(".viewport-container"),
      content: document.querySelector(".viewport-content"),
      scrollMode: scrollMode,
      emulateScroll: !0,
      shouldScroll: (state, event) => {
        return !0;
      },
      onPointerDown: function () {
        console.log("wheeel");
        if (sb.isRunning) {
          window.cancelAnimationFrame(sb.rafID);
          sb.isTargetScroll = !1;
          sb.setPosition = sb.position;
        }
        $(".has-video").each(function () {
          var id = $(this).find("video").attr("id");
          var video = document.getElementById(id);
          video.pause();
        });
      },
      onWheel: function () {
        if (sb.isRunning) {
          window.cancelAnimationFrame(sb.rafID);
          sb.isTargetScroll = !1;
          sb.setPosition = sb.position;
        }
      },
      onUpdate: state => {
        if (state.isMoving || state.isDragging) {
          checkImageVisibility();
          if (mobile) {
            checkSelectedVisibility();
            if (sb.edgeY.from > sb.setPosition.y - 20) {
              $("body").addClass("at-bottom");
            } else {
              $("body").removeClass("at-bottom");
            }
          }
          console.log("moving");
        } else {
          console.log("not-moving");
        }
      },
    });
    setInterval(function () {
      if (mobile) {
        if (sb.isMoving()) {
          $(".has-video").each(function () {
            var id = $(this).find("video").attr("id");
            var video = document.getElementById(id);
            video.pause();
          });
        } else {
          $(".has-video.selected").each(function () {
            var id = $(this).find("video").attr("id");
            var video = document.getElementById(id);
            video.play();
          });
        }
      }
    }, 100);
  } else {
    os = new OnScreen({ tolerance: 2, debounce: 2, container: window });
  }
  if ($("body").hasClass("page")) {
    $(".bg-wrapper").css("opacity", "1");
  }
  if ($("body").hasClass("serie")) {
  }
  setHomeGrid = function () {
    if (mobile) {
      $(".img-wrapper.landscape").remove();
    }
    if (gridSet) {
      $(".grid").justifiedGallery("destroy");
    }
    var lastRow;
    if ($(".img-wrapper").length < 8) {
      lastRow = "nojustify";
    } else {
      lastRow = "hide";
    }
    $(".grid").justifiedGallery({
      rowHeight: rowHeight,
      margins: 0,
      refreshSensitivity: 0,
      refreshTime: 200,
      borders: 0,
      lastRow: "hide",
      randomize: !1,
      selector: "> div > .img-wrapper",
    });
    $(".grid")
      .justifiedGallery()
      .on("jg.complete", function (e) {
        $(".grid").css("visibility", "visible");
        sb.scrollTo({ x: 0, y: 0 });
        checkImageVisibility();
      });
    gridSet = !0;
    setTimeout(function () {
      $(".img-wrapper").removeClass("triggered");
    }, 500);
  };
  imagesAreLoaded = function () {
    if ($(".img-loaded").length === $(".visible").length) {
      return !0;
    }
  };
  initSwiper = function () {
    $(".swiper-container").each(function (index) {
      mySwiper = new Swiper($(this), {
        direction: "horizontal",
        speed: 500,
        slidesPerView: "auto",
        loop: !0,
        shortSwipes: !0,
        watchSlidesVisibility: !0,
        on: {
          init: function () {
            $(".menu-item").each(function (i) {
              setTimeout(
                function () {
                  $(this).css("opacity", "1");
                }.bind(this),
                i * 150
              );
            });
          },
          slideChangeTransitionEnd: function () {
            $(".swiper-slide-visible").addClass("display-img");
          },
        },
      });
      swipers.push(mySwiper);
    });
  };
  initSwiper();
  $(".menu-item").each(function (index) {
    swipers[index].slideTo(0, 1);
    clearTimeout(displayImageTO);
    var url = $(this).parent("a").attr("href");
    $(this).attr("data-url", url);
    $(this).unwrap();
    $(this).bind("click", function () {
      if (mobile) {
        $(".menu-item").not($(this)).removeClass("selected");
        if ($(this).hasClass("selected")) {
          gotoPage(url);
        } else {
          $(this).addClass("selected");
        }
      } else {
        gotoPage(url);
      }
    });
  });
  if ($("body").hasClass("serie")) {
    os.on("enter", ".img-wrapper", (element, event) => {
      triggerElementVisibilty(element);
      $(element).addClass("visible");
      if ($(element).find("video").length > 0) {
        var id = $(element).find("video").attr("id");
        $(element).find(".image").css("opacity", "0");
        $(element).find("video").css("opacity", "1");
        var video = document.getElementById(id);
        video.play();
      }
    });
    os.on("leave", ".img-wrapper", (element, event) => {
      $(element).removeClass("triggered");
      $(element).removeClass("visible");
      if ($(element).find("video").length > 0) {
        var id = $(element).find("video").attr("id");
        $(element).find("video").css("opacity", "0");
        var video = document.getElementById(id);
        if (video.readyState === 4) {
          video.pause();
        }
      }
    });
    os.on("enter", ".page-footer-trigger", (element, event) => {
      $(".menu").addClass("open");
    });
    os.on("leave", ".page-footer-trigger", (element, event) => {
      $(".menu").removeClass("open");
    });
  }
  if ($("body").hasClass("series")) {
    os.on("enter", ".menu-item", (element, event) => {
      $(element).addClass("visible");
    });
    os.on("leave", ".menu-item", (element, event) => {
      $(element).removeClass("visible");
    });
    os.on("enter", ".page-footer-trigger", (element, event) => {
      $(".menu").addClass("open");
    });
    os.on("leave", ".page-footer-trigger", (element, event) => {
      $(".menu").removeClass("open");
    });
  }
  gotoPage = function (url) {
    $("#cursor").css("transform", "scale(0)");
    if ($("body").hasClass("series")) {
      $(".menu-item.visible").each(function (i) {
        setTimeout(
          function () {
            $(this).css("opacity", "0");
          }.bind(this),
          i * 80
        );
      });
      setTimeout(
        function () {
          window.location.href = url;
        }.bind(this),
        $(".menu-item.visible").length * 80 + 80
      );
    } else {
      event.preventDefault();
      event.stopPropagation();
      $(".img-wrapper.visible").each(function (i) {
        setTimeout(
          function () {
            $(this).css("opacity", "0");
          }.bind(this),
          i * 100
        );
      });
      setTimeout(
        function () {
          window.location.href = url;
        }.bind(this),
        $(".img-wrapper.visible").length * 100 + 100
      );
    }
    $(".menu").removeClass("open");
    $(".bg-wrapper").css("opacity", "0");
    $(".content").css("opacity", "0");
  };
  $("body").on("click", "a:not(.filter-selector)", function (event) {
    event.preventDefault();
    gotoPage($(this).attr("href"));
  });
  $(".filter-selector").click(function (e) {
    e.preventDefault();
    var filter = $(this).data("filter");
    if (!$(this).hasClass("selected")) {
      $(".filter-selector").parent().parent().removeClass("blended");
      $(".filter-selector").removeClass("selected");
      $(".menu-item").removeClass("filtered");
      $(".menu-item")
        .not("[data-filter=" + filter + "]")
        .addClass("filtered");
      $(this).addClass("selected");
    } else {
      $(".filter-selector").parent().parent().addClass("blended");
      $(".menu-item").removeClass("filtered");
      $(this).removeClass("selected");
    }
  });
  $(".viewport-container .img-wrapper.selected").on(
    "mouseover mousemove",
    this,
    function (e) {
      if (!$(this).hasClass("img-loaded")) {
        $("#cursor").addClass("loading");
      } else {
        $("#cursor").removeClass("loading");
      }
      $("#cursor").addClass("selected");
    }
  );
  $("body").on(
    "mouseover mousemove",
    ".viewport-container .img-wrapper.selected, .menu-item",
    function (e) {
      $("#cursor").addClass("selected");
    }
  );
  $(".viewport-container .img-wrapper.selected").on(
    "mouseleave",
    this,
    function (e) {
      $("#cursor").removeClass("selected");
    }
  );
  $(".viewport-container .small-nav").on("mousemove", this, function (e) {
    $("#cursor").removeClass("selected");
    e.stopPropagation();
    $("#cursor").css("transition", "300ms");
    $("#cursor").css("visibility", "visible");
    var x = $(this).offset().left + 10 - $(window).scrollLeft();
    var y = $(this).offset().top + 12 - $(window).scrollTop();
    console.log(x, y);
    $("#cursor").css(
      "transform",
      "translate3d(" + x + "px," + y + "px,0px)"
    );
  });
  $(".viewport-container").on("mousemove", this, function (e) {
    $("#cursor").removeClass("selected");
    var x = e.pageX - $(window).scrollLeft();
    var y = e.pageY - $(window).scrollTop();
    $("#cursor").css("transition", "0ms");
    $("#cursor").css("visibility", "visible");
    $("#cursor").css(
      "transform",
      "translate3d(" + x + "px," + y + "px,0px)"
    );
  });
  $(".viewport-container").on("mouseleave", this, function (e) {
    $("#cursor").css("visibility", "hidden");
  });
  $(window).resize();
});
$(".viewport-container").scroll(function () {
  if ($(window).width() < 800) {
    $(".img-wrapper").removeClass("inviewport");
    $(".img-wrapper").removeClass("selected");
    $(".img-wrapper").each(function () {
      if (elementInViewport($(this), 0)) {
        $(this).addClass("inviewport");
        $(".inviewport").addClass("selected");
      }
    });
  }
  var maxScroll =
    $(".viewport-content").height() - $(".viewport-container").height();
  if ($(".viewport-container").scrollTop() > maxScroll - 10) {
    $("body").addClass("at-bottom");
  } else {
    $("body").removeClass("at-bottom");
  }
});
$("body").on("click", ".img-wrapper", function (e) {
  var x = $(this).position().left;
  var y = $(this).position().top;
  var scrollY = y - ($(window).height() - $(this).height()) / 2;
  if ($("body").hasClass("home")) {
    var scrollX = x - ($(window).width() - $(this).width()) / 2;
    if (scrollX > $(".grid").width() - $(window).width()) {
      scrollX = $(".grid").width() - $(window).width();
    } else if (scrollX < 0) {
      scrollX = 0;
    }
    if (scrollY > $(".grid").height() - $(window).height()) {
      scrollY = $(".grid").height() - $(window).height();
    } else if (scrollY < 0) {
      scrollY = 0;
    }
    setTimeout(
      function () {
        $(".img-wrapper").removeClass("click-to-go");
        $(this).addClass("click-to-go");
      }.bind(this),
      500
    );
    if ($(this).hasClass("click-to-go")) {
      var url = $(this).find("a.caption").attr("href");
      gotoPage(url);
    }
    if ($(this).hasClass("has-video")) {
      var id = $(this).find("video").attr("id");
      var video = document.getElementById(id);
      video.play();
    }
    sb.scrollTo({ x: scrollX, y: scrollY });
    $(".img-wrapper").removeClass("selected");
    $(this).addClass("selected");
  }
});
$("body").on("mouseover", ".img-wrapper", function (e) {
  if ($(this).hasClass("has-video")) {
    var id = $(this).find("video").attr("id");
    var video = document.getElementById(id);
    video.play();
  }
});
$("body").on("mouseleave", ".img-wrapper:not(.selected)", function (e) {
  if ($(this).hasClass("has-video")) {
    var id = $(this).find("video").attr("id");
    var video = document.getElementById(id);
    video.pause();
  }
});
$(".next").mouseover(function () {
  $(".img-wrapper .image.visible").css("opacity", "0");
});
$(".next").mouseleave(function () {
  $(".img-wrapper .image.visible").css("opacity", "1");
});
$(window).resize(function () {
  mobile = $(window).width() < 900 ? !0 : !1;
  if ($("body").hasClass("home")) {
    rowHeight = mobile
      ? 0.58 * $(window).height()
      : 0.75 * $(window).height();
  } else {
    rowHeight = 1.4 * $(window).height();
  }
  setHomeGrid();
  if ($("body").hasClass("page")) {
    if ($(".content").height() > $(window).height()) {
      $(".bottom-left").addClass("not-fixed");
    } else {
      $(".bottom-left").removeClass("not-fixed");
    }
  }
});
var prevScrollpos = window.pageYOffset;
$(window).scroll(function () {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  if (prevScrollpos > currentScrollPos || window.pageYOffset < 50) {
    $(".hide-on-scroll").removeClass("hidden").removeClass("onTop");
  } else if (currentScrollPos < 2) {
    $(".hide-on-scroll").removeClass("hidden").addClass("onTop");
  } else {
    console.log("add hide-on-scroll");
    $(".hide-on-scroll").addClass("hidden").removeClass("onTop");
  }
  if (
    $(window).scrollTop() >
    $(document).height() - $(window).height() - 50
  ) {
    $(".hide-on-scroll").removeClass("hidden").removeClass("onTop");
  }
  prevScrollpos = currentScrollPos;
});
var triggerElementVisibilty = function (el) {
  $(el).addClass("visible");
  if (!$(el).hasClass("triggered")) {
    var hd_url = $(el).find("img.image").attr("data-hd");
    $(el).addClass("display-img");
    $(el)
      .find("img.image:not(.img-loaded)")
      .load(function () {
        $(el).addClass("img-loaded");
        if ($(".display-img.img-loaded").last()) {
        } else {
        }
      })
      .attr("src", hd_url);
    displayImageTO = setTimeout(function () {
      $(".display-img").each(function (i) {
        if (
          $("body").hasClass("page") ||
          $(".grid").hasClass("zoomed-out") ||
          $("body").hasClass("series")
        ) {
          $(".display-img")
            .eq(i)
            .css("transition-delay", (i + 1) * 30 + "ms");
        } else {
          $(".display-img")
            .eq(i)
            .css("transition-delay", (i + 1) * 150 + "ms");
        }
        $(".display-img").eq(i).css("opacity", "1");
        $(".display-img")
          .eq(i)
          .bind(
            "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
            function () {
              $(".display-img").eq(i).css("transition-delay", "0ms");
              $(".display-img").addClass("triggered");
              $(".display-img").eq(i).removeClass("display-img");
              clearTimeout(displayImageTO);
            }
          );
      });
    }, displayImagesTimer);
  }
};
$("a[data-feel]").click(function (event) {
  event.preventDefault();
});
function elementInViewport(el, total) {
  var myElement = el;
  var bounding = myElement.getBoundingClientRect();
  var myElementHeight = myElement.offsetHeight;
  var myElementWidth = myElement.offsetWidth;
  var bounding = myElement.getBoundingClientRect();
  if (!total) {
    if (
      bounding.top >= -myElementHeight &&
      bounding.left >= -myElementWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          myElementWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          myElementHeight
    ) {
      return !0;
    } else {
      return !1;
    }
  } else {
    var bounding = myElement.getBoundingClientRect();
    if (
      bounding.top >= -35 &&
      bounding.left >= -35 &&
      bounding.right - 35 <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom - 35 <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return !0;
    } else {
      return !1;
    }
  }
}
window.addEventListener(
  "pageshow",
  function (evt) {
    if (evt.persisted) {
      setTimeout(function () {
        window.location.reload();
        document.body.innerHTML = "";
      }, 10);
    }
  },
  !1
);
