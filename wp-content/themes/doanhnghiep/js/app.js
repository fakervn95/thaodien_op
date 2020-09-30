var DOM = document,
    HTML = document.documentElement,
    LoadSig = 0,
    Xwidth = window.innerWidth,
    Yheight = window.innerHeight,
    Html = DOM.querySelector("html"),
    Body = DOM.querySelector("body"),
    Container = Body.querySelector(".container"),
    Details = 0,
    startAni = !1;
if (Header = DOM.querySelector(".header"), Logo = Header.querySelector(".logo"), NavClick = Header.querySelector(".nav-click"), OpenNav = NavClick.querySelector(".open-nav"), CloseNav = NavClick.querySelector(".close-nav"), Navigation = Header.querySelector(".navigation"), Nav = Navigation.querySelector(".nav"), NavLi = Header.querySelectorAll(".navigation li"), RightHeader = Header.querySelector(".right-header"), OverlayMenu = Header.querySelector(".overlay-menu"), OuterNav = DOM.querySelector(".outer-nav"), SearchBut = Header.querySelector(".search-but"), SearchForm = Header.querySelector(".search-form"), FormRowSearch = Header.querySelector(".form-row-search"), LoginBox = Header.querySelector(".login-box"), LoginOverlay = Header.querySelector(".login-overlay"), Hotline = Header.querySelector(".hotline"), LinkHome = DOM.querySelectorAll(".link-home"), Footer = DOM.querySelector(".footer"), LeftFooter = Footer.querySelector(".left-footer"), Wheel = DOM.querySelector(".wheel"), GoTop = DOM.querySelector(".go-top"), OverlayDark = DOM.querySelector(".overlay-dark"), OverlayApartment = DOM.querySelector(".overlay-apartment"), AllAlbum = DOM.querySelector(".all-album"), AllPics = DOM.querySelector(".all-pics"), AllVideo = DOM.querySelector(".all-video"), Mask = DOM.querySelector(".mask"), LoadIcon = Body.querySelector(".loadicon"), HomePage = DOM.querySelector("#home-page"), AboutPage = DOM.querySelector("#about-page"), LocationPage = DOM.querySelector("#location-page"), FacilitiesPage = DOM.querySelector("#facilities-page"), ApartmentPage = DOM.querySelector("#apartment-page"), EnvironmentPage = DOM.querySelector("#environment-page"), LibraryPage = DOM.querySelector("#library-page"), ProgressPage = DOM.querySelector("#progress-page"), NewsPage = DOM.querySelector("#news-page"), NewsDetailsPage = DOM.querySelector("#news-details-page"), ContactPage = DOM.querySelector("#contact-page"), SlidePagi = Container.querySelector(".slide-pagi"), BoxSlider = Container.querySelector(".box-slider"), Background = DOM.querySelector(".background"), SlideBanner = DOM.querySelector(".slide-background"), Title = DOM.querySelectorAll(".slide-title"), HomeBanner = Container.querySelector(".home-banner") || Container.querySelector(".banner-inner"), Stop = DOM.querySelector(".stop"), Play = DOM.querySelector(".play"), EachButs = Container.querySelectorAll(".but-background > button"), EachButsPath = Container.querySelectorAll(".but-background path"), NextBg = Container.querySelector(".next-background"), PrevBg = Container.querySelector(".prev-background"), PlayClip = document.querySelector(".play-clip"), StopClip = document.querySelector(".stop-clip"), OnTime = 0, AllBackG = Container.querySelectorAll(".bg"), BoxSlider) {
    var BoxNav = Container.querySelector(".box-nav"),
        BoxNavLi = BoxNav.querySelectorAll("li"),
        BoxNavLiBut = BoxNav.querySelectorAll("button"),
        GroupCentral = Container.querySelectorAll(".group-central"),
        GroupLength = GroupCentral.length;
    LastGroup = GroupCentral[GroupLength - 1]
}
var AniItems = document.querySelectorAll(".ani-item"),
    TextAniItems = document.querySelectorAll(".text-ani-item"),
    TextAniSpans = document.querySelectorAll(".text-ani-item span");
if (HomePage) {
    var HomeVideo = Container.querySelector(".home-video"),
        YoutubeVideo = Container.querySelector(".youtube-video"),
        PlayButton = Container.querySelector(".play-button"),
        PauseButton = Container.querySelector(".pause-button"),
        VideoCoverInline = Container.querySelector(".video-cover-inline"),
        HomeLocation = Container.querySelector(".home-location"),
        HomeFacilities = Container.querySelector(".home-facilities"),
        ItemFaciHome = HomeFacilities.querySelectorAll(".item-faci-home"),
        HomeNews = Container.querySelector(".home-news"),
        HomeLibrary = Container.querySelector(".home-library"),
        HomeContact = Container.querySelector(".home-contact");
    if (HomeLocation) var MapSvg = HomeLocation.querySelector(".map-desktop");
    if (HomeFacilities) var BoxFaci = Container.querySelector(".box-facilities")
} else if (AboutPage) {
    var AboutInvestor = Container.querySelector(".about-investor");
    if (AboutInvestor) var SvgInves = AboutInvestor.querySelector(".svg-investor")
} else if (LocationPage) MapSvg = (HomeLocation = Container.querySelector(".home-location")).querySelector(".map-desktop");
else if (FacilitiesPage) var FacilitiesBg1 = FacilitiesPage.querySelector(".facilities-bg-1"),
    FacilitiesBg2 = FacilitiesPage.querySelector(".facilities-bg-2"),
    AllDot1 = FacilitiesPage.querySelector(".all-dot-1"),
    AllDot2 = FacilitiesPage.querySelector(".all-dot-2"),
    FacilitiesMap1 = FacilitiesPage.querySelector(".facilities-map-1"),
    FacilitiesMap2 = FacilitiesPage.querySelector(".facilities-map-2"),
    FacilitiesBg = FacilitiesPage.querySelectorAll(".facilities-bg"),
    AllDot = FacilitiesPage.querySelectorAll(".all-dot"),
    FacilitiesMap = FacilitiesPage.querySelectorAll(".facilities-map"),
    FaciArrow = FacilitiesPage.querySelector(".arrow-facilities");
else if (ApartmentPage) var LoadApartment = DOM.querySelector(".load-apartment"),
    Apartment = Container.querySelectorAll(".apartment"),
    Allhouse = Container.querySelectorAll(".area-path"),
    HouseText = Container.querySelectorAll(".house-text"),
    StartApart = 0;
else if (EnvironmentPage);
else if (LibraryPage);
else if (ProgressPage) var ProgressList = Container.querySelector(".progress-list"),
    ProgressLoad = Container.querySelector(".progress-load");
else if (NewsPage) var newslist = Container.querySelector(".news-list"),
    WrapPage = Container.querySelector(".wrap-page"),
    Grid = WrapPage.querySelector(".grid"),
    LinkNews = Grid.querySelectorAll(".link-page");
else ContactPage;
var LinkPopup = Container.querySelectorAll(".link-popup, .link-member, .link-progress"),
    AllAlbum = DOM.querySelector(".all-album");
if (null == HomePage) var BannerInner = Container.querySelector(".banner-inner");
else BannerInner = Container.querySelector(".home-banner");
var XWidth = document.body.clientWidth,
    YHeight = document.body.clientHeight;

function inStanceof(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
}

function nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function slicedToArray(e, t) {
    return arrayWithHoles(e) || iterableToArrayLimit(e, t) || nonIterableRest()
}

function nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function iterableToArrayLimit(e, t) {
    var o = [],
        i = !0,
        n = !1,
        r = void 0;
    try {
        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); i = !0);
    } catch (e) {
        n = !0, r = e
    } finally {
        try {
            i || null == a.return || a.return()
        } finally {
            if (n) throw r
        }
    }
    return o
}

function iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
}

function arrayWithHoles(e) {
    if (Array.isArray(e)) return e
}

function arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var t = 0, o = new Array(e.length); t < e.length; t++) o[t] = e[t];
        return o
    }
}

function classCallCheck(e, t) {
    if (!inStanceof(e, t)) throw new TypeError("Cannot call a class as a function")
}

function defineProperties(e, t) {
    for (var o = 0; o < t.length; o++) {
        var i = t[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function createClass(e, t, o) {
    return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e
}

function toConsumableArray(e) {
    return arrayWithoutHoles(e) || iterableToArray(e) || nonIterableSpread()
}

function possibleConstructorReturn(e, t) {
    return !t || "object" !== Typeof(t) && "function" != typeof t ? assertThisInitialized(e) : t
}

function assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Get(e, t, o) {
    return (Get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, o) {
        var i = superPropBase(e, t);
        if (i) {
            var n = Object.getOwnPropertyDescriptor(i, t);
            return n.get ? n.get.call(o) : n.value
        }
    })(e, t, o || e)
}

function superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = getPrototypeOf(e)););
    return e
}

function getPrototypeOf(e) {
    return (getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function Inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && setPrototypeOf(e, t)
}

function setPrototypeOf(e, t) {
    return (setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function Typeof(e) {
    return (Typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var MathUtils = {
        lineEq: function(e, t, o, i, n) {
            var r = (e - t) / (o - i);
            return r * n + (t - r * i)
        },
        map: function(e, t, o, i, n) {
            return (e - t) * (n - i) / (o - t) + i
        },
        lerp: function(e, t, o) {
            return (1 - o) * e + o * t
        },
        getRandomFloat: function(e, t) {
            return (Math.random() * (t - e) + e).toFixed(2)
        }
    },
    shuffleArray = function(e) {
        return e.sort(function() {
            return Math.random() - .5
        })
    };

function RanDom(e, t) {
    return Math.max(Math.random() * (t - e) + e)
}
var winsize, debounce = function(i, n, r) {
        var s;
        return function() {
            var e = this,
                t = arguments,
                o = r && !s;
            clearTimeout(s), s = setTimeout(function() {
                s = null, r || i.apply(e, t)
            }, n), o && i.apply(e, t)
        }
    },
    calcWinsize = function() {
        return winsize = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    getMousePos = function(e) {
        var t = 0,
            o = 0;
        return e || (e = window.event), e.pageX || e.pageY ? (t = e.pageX, o = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + body.scrollLeft + document.documentElement.scrollLeft, o = e.clientY + body.scrollTop + document.documentElement.scrollTop), {
            x: t,
            y: o
        }
    };

function isInViewport(e) {
    var t = e.getBoundingClientRect(),
        o = window.innerHeight || document.documentElement.clientHeight,
        i = window.innerWidth || document.documentElement.clientWidth,
        n = t.top <= o && 0 <= t.top + t.height,
        r = t.left <= i && 0 <= t.left + t.width;
    return n && r
}
mousePos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    },
    function(e, i) {
        "use strict";
        "function" != typeof e.CustomEvent && (e.CustomEvent = function(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = i.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }, e.CustomEvent.prototype = e.Event.prototype), i.addEventListener("touchstart", o, !1), i.addEventListener("touchmove", n, !1), i.addEventListener("touchend", t, !1), i.addEventListener("mousedown", o, !1), i.addEventListener("mousemove", n, !1), i.addEventListener("mouseup", t, !1);
        var r = null,
            s = null,
            a = null,
            l = null,
            c = null,
            d = null;

        function t(e) {
            if (d === e.target) {
                var t = parseInt(d.getAttribute("data-swipe-threshold") || "20", 10),
                    o = parseInt(d.getAttribute("data-swipe-timeout") || "500", 10),
                    i = Date.now() - c,
                    n = "";
                Math.abs(a) > Math.abs(l) ? Math.abs(a) > t && i < o && (n = 0 < a ? "swiped-left" : "swiped-right") : Math.abs(l) > t && i < o && (n = 0 < l ? "swiped-up" : "swiped-down"), "" !== n && d.dispatchEvent(new CustomEvent(n, {
                    bubbles: !0,
                    cancelable: !0
                })), c = s = r = null
            }
        }

        function o(e) {
            "true" !== e.target.getAttribute("data-swipe-ignore") && (d = e.target, c = Date.now(), r = e.touches ? e.touches[0].clientX : e.clientX, s = e.touches ? e.touches[0].clientY : e.clientY, l = a = 0)
        }

        function n(e) {
            if (r && s) {
                var t = e.touches ? e.touches[0].clientX : e.clientX,
                    o = e.touches ? e.touches[0].clientY : e.clientY;
                a = r - t, l = s - o
            }
        }
    }(window, document),
    function(e) {
        "undefined" == typeof module ? this.charming = e : module.exports = e
    }(function(e, t) {
        "use strict";
        var s = (t = t || {}).tagName || "span",
            a = null != t.classPrefix ? t.classPrefix : "box char",
            l = 1;
        return function e(t) {
            for (var o = [].slice.call(t.childNodes), i = o.length, n = -1; ++n < i;) e(o[n]);
            t.nodeType === Node.TEXT_NODE && function(e) {
                for (var t = e.parentNode, o = e.nodeValue, i = o.length, n = -1; ++n < i;) {
                    var r = document.createElement(s);
                    a && (r.className = a + l, l++), r.appendChild(document.createTextNode(o[n])), t.insertBefore(r, e)
                }
                t.removeChild(e)
            }(t)
        }(e), e
    }),
    function(e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : window.BezierEasing = e()
    }(function() {
        var f = 1e-7,
            p = 10,
            m = "Float32Array" in this;

        function i(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function n(e, t) {
            return 3 * t - 6 * e
        }

        function r(e) {
            return 3 * e
        }

        function v(e, t, o) {
            return ((i(t, o) * e + n(t, o)) * e + r(t)) * e
        }

        function g(e, t, o) {
            return 3 * i(t, o) * e * e + 2 * n(t, o) * e + r(t)
        }

        function e(r, t, s, o) {
            if (4 !== arguments.length) throw new Error("BezierEasing requires 4 arguments.");
            for (var e = 0; e < 4; ++e)
                if ("number" != typeof arguments[e] || isNaN(arguments[e]) || !isFinite(arguments[e])) throw new Error("BezierEasing arguments should be integers.");
            if (r < 0 || 1 < r || s < 0 || 1 < s) throw new Error("BezierEasing x values must be in [0, 1] range.");
            var a = m ? new Float32Array(11) : new Array(11);

            function i(e) {
                for (var t = 0, o = 1; 10 != o && a[o] <= e; ++o) t += .1;
                var i = t + .1 * ((e - a[--o]) / (a[o + 1] - a[o])),
                    n = g(i, r, s);
                return .001 <= n ? function(e, t) {
                    for (var o = 0; o < 4; ++o) {
                        var i = g(t, r, s);
                        if (0 === i) return t;
                        t -= (v(t, r, s) - e) / i
                    }
                    return t
                }(e, i) : 0 === n ? i : function(e, t, o) {
                    for (var i, n, r = 0; 0 < (i = v(n = t + (o - t) / 2, mX1, mX2) - e) ? o = n : t = n, Math.abs(i) > f && ++r < p;);
                    return n
                }(e, t, t + .1)
            }
            var n = !1;

            function l() {
                n = !0, r == t && s == o || function() {
                    for (var e = 0; e < 11; ++e) a[e] = v(.1 * e, r, s)
                }()
            }
            var c = function(e) {
                return n || l(), r === t && s === o ? e : 0 === e ? 0 : 1 === e ? 1 : v(i(e), t, o)
            };
            c.getControlPoints = function() {
                return [{
                    x: r,
                    y: t
                }, {
                    x: s,
                    y: o
                }]
            };
            var d = [r, t, s, o],
                u = "BezierEasing(" + d + ")";
            c.toString = function() {
                return u
            };
            var h = "cubic-bezier(" + d + ")";
            return c.toCSS = function() {
                return h
            }, c
        }
        return e.css = {
            ease: e(.25, .1, .25, 1),
            linear: e(0, 0, 1, 1),
            "ease-in": e(.42, 0, 1, 1),
            "ease-out": e(0, 0, .58, 1),
            "ease-in-out": e(.42, 0, .58, 1)
        }, e
    }),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["exports"], t);
        else if ("undefined" != typeof exports) t(exports);
        else {
            var o = {};
            t(o), e.PinchZoom = o
        }
    }(this, function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (null != n)
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r])
                }
                return o
            },
            writable: !0,
            configurable: !0
        }), "function" != typeof Array.from && (Array.from = function(e) {
            return [].slice.call(e)
        });
        var r = function(e, t) {
                var o = document.createEvent("HTMLEvents");
                o.initEvent(t, !0, !1), e.dispatchEvent(o)
            },
            t = function() {
                var e = function(e, t) {
                        this.el = e, this.zoomFactor = 1, this.lastScale = 1, this.offset = {
                            x: 0,
                            y: 0
                        }, this.initialOffset = {
                            x: 0,
                            y: 0
                        }, this.options = Object.assign({}, this.defaults, t), this.setupMarkup(), this.bindEvents(), this.update(), this.isImageLoaded(this.el) && (this.updateAspectRatio(), this.setupOffsets()), this.enable()
                    },
                    t = function(e, t) {
                        return e + t
                    };
                e.prototype = {
                    defaults: {
                        tapZoomFactor: 2,
                        zoomOutFactor: 1.3,
                        animationDuration: 300,
                        maxZoom: 4,
                        minZoom: .5,
                        draggableUnzoomed: !0,
                        lockDragAxis: !1,
                        setOffsetsOnce: !1,
                        use2d: !0,
                        zoomStartEventName: "pz_zoomstart",
                        zoomUpdateEventName: "pz_zoomupdate",
                        zoomEndEventName: "pz_zoomend",
                        dragStartEventName: "pz_dragstart",
                        dragUpdateEventName: "pz_dragupdate",
                        dragEndEventName: "pz_dragend",
                        doubleTapEventName: "pz_doubletap",
                        verticalPadding: 0,
                        horizontalPadding: 0,
                        onZoomStart: null,
                        onZoomEnd: null,
                        onZoomUpdate: null,
                        onDragStart: null,
                        onDragEnd: null,
                        onDragUpdate: null,
                        onDoubleTap: null
                    },
                    handleDragStart: function(e) {
                        r(this.el, this.options.dragStartEventName), "function" == typeof this.options.onDragStart && this.options.onDragStart(this, e), this.stopAnimation(), this.lastDragPosition = !1, this.hasInteraction = !0, this.handleDrag(e)
                    },
                    handleDrag: function(e) {
                        var t = this.getTouches(e)[0];
                        this.drag(t, this.lastDragPosition), this.offset = this.sanitizeOffset(this.offset), this.lastDragPosition = t
                    },
                    handleDragEnd: function() {
                        r(this.el, this.options.dragEndEventName), "function" == typeof this.options.onDragEnd && this.options.onDragEnd(this, event), this.end()
                    },
                    handleZoomStart: function(e) {
                        r(this.el, this.options.zoomStartEventName), "function" == typeof this.options.onZoomStart && this.options.onZoomStart(this, e), this.stopAnimation(), this.lastScale = 1, this.nthZoom = 0, this.lastZoomCenter = !1, this.hasInteraction = !0
                    },
                    handleZoom: function(e, t) {
                        var o = this.getTouchCenter(this.getTouches(e)),
                            i = t / this.lastScale;
                        this.lastScale = t, this.nthZoom += 1, 3 < this.nthZoom && (this.scale(i, o), this.drag(o, this.lastZoomCenter)), this.lastZoomCenter = o
                    },
                    handleZoomEnd: function() {
                        r(this.el, this.options.zoomEndEventName), "function" == typeof this.options.onZoomEnd && this.options.onZoomEnd(this, event), this.end()
                    },
                    handleDoubleTap: function(e) {
                        var t = this.getTouches(e)[0],
                            o = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor,
                            i = this.zoomFactor,
                            n = function(e) {
                                this.scaleTo(i + e * (o - i), t)
                            }.bind(this);
                        this.hasInteraction || (this.isDoubleTap = !0, o < i && (t = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, n, this.swing), r(this.el, this.options.doubleTapEventName), "function" == typeof this.options.onDoubleTap && this.options.onDoubleTap(this, e))
                    },
                    computeInitialOffset: function() {
                        this.initialOffset = {
                            x: -Math.abs(this.el.offsetWidth * this.getInitialZoomFactor() - this.containPinch.offsetWidth) / 2,
                            y: -Math.abs(this.el.offsetHeight * this.getInitialZoomFactor() - this.containPinch.offsetHeight) / 2
                        }
                    },
                    resetOffset: function() {
                        this.offset.x = this.initialOffset.x, this.offset.y = this.initialOffset.y
                    },
                    isImageLoaded: function(e) {
                        return "IMG" === e.nodeName ? e.complete && 0 !== e.naturalHeight : Array.from(e.querySelectorAll("img")).every(this.isImageLoaded)
                    },
                    setupOffsets: function() {
                        this.options.setOffsetsOnce && this._isOffsetsSet || (this._isOffsetsSet = !0, this.computeInitialOffset(), this.resetOffset())
                    },
                    sanitizeOffset: function(e) {
                        var t = this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor,
                            o = this.el.offsetHeight * this.getInitialZoomFactor() * this.zoomFactor,
                            i = t - this.getContainerX() + this.options.horizontalPadding,
                            n = o - this.getContainerY() + this.options.verticalPadding,
                            r = Math.max(i, 0),
                            s = Math.max(n, 0),
                            a = Math.min(i, 0) - this.options.horizontalPadding,
                            l = Math.min(n, 0) - this.options.verticalPadding;
                        return {
                            x: Math.min(Math.max(e.x, a), r),
                            y: Math.min(Math.max(e.y, l), s)
                        }
                    },
                    scaleTo: function(e, t) {
                        this.scale(e / this.zoomFactor, t)
                    },
                    scale: function(e, t) {
                        e = this.scaleZoomFactor(e), this.addOffset({
                            x: (e - 1) * (t.x + this.offset.x),
                            y: (e - 1) * (t.y + this.offset.y)
                        }), r(this.el, this.options.zoomUpdateEventName), "function" == typeof this.options.onZoomUpdate && this.options.onZoomUpdate(this, event)
                    },
                    scaleZoomFactor: function(e) {
                        var t = this.zoomFactor;
                        return this.zoomFactor *= e, this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)), this.zoomFactor / t
                    },
                    canDrag: function() {
                        return this.options.draggableUnzoomed || (e = this.zoomFactor, !((t = 1) - .01 < e && e < t + .01));
                        var e, t
                    },
                    drag: function(e, t) {
                        t && (this.options.lockDragAxis ? Math.abs(e.x - t.x) > Math.abs(e.y - t.y) ? this.addOffset({
                            x: -(e.x - t.x),
                            y: 0
                        }) : this.addOffset({
                            y: -(e.y - t.y),
                            x: 0
                        }) : this.addOffset({
                            y: -(e.y - t.y),
                            x: -(e.x - t.x)
                        }), r(this.el, this.options.dragUpdateEventName), "function" == typeof this.options.onDragUpdate && this.options.onDragUpdate(this, event))
                    },
                    getTouchCenter: function(e) {
                        return this.getVectorAvg(e)
                    },
                    getVectorAvg: function(e) {
                        return {
                            x: e.map(function(e) {
                                return e.x
                            }).reduce(t) / e.length,
                            y: e.map(function(e) {
                                return e.y
                            }).reduce(t) / e.length
                        }
                    },
                    addOffset: function(e) {
                        this.offset = {
                            x: this.offset.x + e.x,
                            y: this.offset.y + e.y
                        }
                    },
                    sanitize: function() {
                        this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
                    },
                    isInsaneOffset: function(e) {
                        var t = this.sanitizeOffset(e);
                        return t.x !== e.x || t.y !== e.y
                    },
                    sanitizeOffsetAnimation: function() {
                        var t = this.sanitizeOffset(this.offset),
                            o = this.offset.x,
                            i = this.offset.y,
                            e = function(e) {
                                this.offset.x = o + e * (t.x - o), this.offset.y = i + e * (t.y - i), this.update()
                            }.bind(this);
                        this.animate(this.options.animationDuration, e, this.swing)
                    },
                    zoomOutAnimation: function() {
                        if (1 !== this.zoomFactor) {
                            var t = this.zoomFactor,
                                o = this.getCurrentZoomCenter(),
                                e = function(e) {
                                    this.scaleTo(t + e * (1 - t), o)
                                }.bind(this);
                            this.animate(this.options.animationDuration, e, this.swing)
                        }
                    },
                    updateAspectRatio: function() {
                        this.unsetContainerY(), null !== document.querySelector(".pinch-zoom-container") && this.setContainerY(this.containPinch.parentNode.offsetHeight)
                    },
                    getInitialZoomFactor: function() {
                        var e = this.containPinch.offsetWidth / this.el.offsetWidth,
                            t = this.containPinch.offsetHeight / this.el.offsetHeight;
                        return Math.min(e, t)
                    },
                    getAspectRatio: function() {
                        return this.el.offsetWidth / this.el.offsetHeight
                    },
                    getCurrentZoomCenter: function() {
                        var e = this.offset.x - this.initialOffset.x,
                            t = -1 * this.offset.x - e / (1 / this.zoomFactor - 1),
                            o = this.offset.y - this.initialOffset.y;
                        return {
                            x: t,
                            y: -1 * this.offset.y - o / (1 / this.zoomFactor - 1)
                        }
                    },
                    getTouches: function(e) {
                        var t = this.containPinch.getBoundingClientRect(),
                            o = document.documentElement.scrollTop || document.body.scrollTop,
                            i = document.documentElement.scrollLeft || document.body.scrollLeft,
                            n = t.top + o,
                            r = t.left + i;
                        return Array.prototype.slice.call(e.touches).map(function(e) {
                            return {
                                x: e.pageX - r,
                                y: e.pageY - n
                            }
                        })
                    },
                    animate: function(o, i, n, r) {
                        var s = (new Date).getTime(),
                            a = function() {
                                if (this.inAnimation) {
                                    var e = (new Date).getTime() - s,
                                        t = e / o;
                                    o <= e ? (i(1), r && r(), this.update(), this.stopAnimation(), this.update()) : (n && (t = n(t)), i(t), this.update(), requestAnimationFrame(a))
                                }
                            }.bind(this);
                        this.inAnimation = !0, requestAnimationFrame(a)
                    },
                    stopAnimation: function() {
                        this.inAnimation = !1
                    },
                    swing: function(e) {
                        return -Math.cos(e * Math.PI) / 2 + .5
                    },
                    getContainerX: function() {
                        return this.containPinch.offsetWidth
                    },
                    getContainerY: function() {
                        return this.containPinch.offsetHeight
                    },
                    setContainerY: function(e) {
                        return this.containPinch.style.height = e + "px"
                    },
                    unsetContainerY: function() {
                        this.containPinch.style.height = null
                    },
                    setupMarkup: function() {
                        var e, t;
                        this.containPinch = (e = '<div class="pinch-zoom-container"></div>', (t = document.implementation.createHTMLDocument("")).body.innerHTML = e, Array.from(t.body.children)[0]), this.el.parentNode.insertBefore(this.containPinch, this.el), this.containPinch.appendChild(this.el), this.containPinch.style.overflow = "hidden", this.containPinch.style.position = "relative", this.el.style.webkitTransformOrigin = "0% 0%", this.el.style.mozTransformOrigin = "0% 0%", this.el.style.msTransformOrigin = "0% 0%", this.el.style.oTransformOrigin = "0% 0%", this.el.style.transformOrigin = "0% 0%", this.el.style.position = "absolute"
                    },
                    end: function() {
                        this.hasInteraction = !1, this.sanitize(), this.update()
                    },
                    bindEvents: function() {
                        var t = this;
                        o(this.containPinch, this), window.addEventListener("resize", this.update.bind(this)), Array.from(this.el.querySelectorAll("img")).forEach(function(e) {
                            e.addEventListener("load", t.update.bind(t))
                        }), "IMG" === this.el.nodeName && this.el.addEventListener("load", this.update.bind(this))
                    },
                    update: function(s) {
                        this.updatePlaned || (this.updatePlaned = !0, window.setTimeout(function() {
                            this.updatePlaned = !1, s && "resize" === s.type && (this.updateAspectRatio(), this.setupOffsets()), s && "load" === s.type && (this.updateAspectRatio(), this.setupOffsets());
                            var e = this.getInitialZoomFactor() * this.zoomFactor,
                                t = -this.offset.x / e,
                                o = -this.offset.y / e,
                                i = "scale3d(" + e + ", " + e + ",1) translate3d(" + t + "px," + o + "px,0px)",
                                n = "scale(" + e + ", " + e + ") translate(" + t + "px," + o + "px)",
                                r = function() {
                                    this.clone && (this.clone.parentNode.removeChild(this.clone), delete this.clone)
                                }.bind(this);
                            !this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, r(), this.el.style.webkitTransform = i, this.el.style.mozTransform = n, this.el.style.msTransform = n, this.el.style.oTransform = n, this.el.style.transform = i) : (this.is3d && (this.clone = this.el.cloneNode(!0), this.clone.style.pointerEvents = "none", this.containPinch.appendChild(this.clone), window.setTimeout(r, 100)), this.el.style.webkitTransform = n, this.el.style.mozTransform = n, this.el.style.msTransform = n, this.el.style.oTransform = n, this.el.style.transform = n, this.is3d = !1)
                        }.bind(this), 0))
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    disable: function() {
                        this.enabled = !1
                    }
                };
                var o = function(e, n) {
                    var r = null,
                        o = 0,
                        i = null,
                        s = null,
                        t = function(e, t) {
                            if (r !== e) {
                                if (r && !e) switch (r) {
                                    case "zoom":
                                        n.handleZoomEnd(t);
                                        break;
                                    case "drag":
                                        n.handleDragEnd(t)
                                }
                                switch (e) {
                                    case "zoom":
                                        n.handleZoomStart(t);
                                        break;
                                    case "drag":
                                        n.handleDragStart(t)
                                }
                            }
                            r = e
                        },
                        a = function(e) {
                            2 === o ? t("zoom") : 1 === o && n.canDrag() ? t("drag", e) : t(null, e)
                        },
                        l = function(e) {
                            return Array.from(e).map(function(e) {
                                return {
                                    x: e.pageX,
                                    y: e.pageY
                                }
                            })
                        },
                        c = function(e, t) {
                            var o, i;
                            return o = e.x - t.x, i = e.y - t.y, Math.sqrt(o * o + i * i)
                        },
                        d = function(e) {
                            e.stopPropagation(), e.preventDefault()
                        },
                        u = !0;
                    e.addEventListener("touchstart", function(e) {
                        n.enabled && (u = !0, o = e.touches.length, function(e) {
                            var t = (new Date).getTime();
                            if (1 < o && (i = null), t - i < 300) switch (d(e), n.handleDoubleTap(e), r) {
                                case "zoom":
                                    n.handleZoomEnd(e);
                                    break;
                                case "drag":
                                    n.handleDragEnd(e)
                            } else n.isDoubleTap = !1;
                            1 === o && (i = t)
                        }(e))
                    }), e.addEventListener("touchmove", function(e) {
                        if (n.enabled && !n.isDoubleTap) {
                            if (u) a(e), r && d(e), s = l(e.touches);
                            else {
                                switch (r) {
                                    case "zoom":
                                        2 == s.length && 2 == e.touches.length && n.handleZoom(e, (t = s, o = l(e.touches), i = c(t[0], t[1]), c(o[0], o[1]) / i));
                                        break;
                                    case "drag":
                                        n.handleDrag(e)
                                }
                                r && (d(e), n.update())
                            }
                            u = !1
                        }
                        var t, o, i
                    }), e.addEventListener("touchend", function(e) {
                        n.enabled && (o = e.touches.length, a(e))
                    })
                };
                return e
            }();
        e.default = t
    }),
    function(t, o) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return o(t, e)
        }) : "object" == typeof exports ? o(t, require("jquery")) : o(t, t.jQuery)
    }("undefined" != typeof window ? window : this, function(e, b) {
        "use strict";
        var x = e.document,
            s = "__pz__",
            r = Array.prototype.slice,
            t = /trident\/7./i,
            u = function() {
                if (t.test(navigator.userAgent)) return !1;
                var e = x.createElement("input");
                return e.setAttribute("oninput", "return"), "function" == typeof e.oninput
            }(),
            a = /([A-Z])/g,
            l = /^http:[\w\.\/]+svg$/,
            o = "(\\-?\\d[\\d\\.e-]*)",
            i = "\\,?\\s*",
            n = new RegExp("^matrix\\(" + o + i + o + i + o + i + o + i + o + i + o + "\\)$");

        function c(e) {
            var t = {
                range: !0,
                animate: !0
            };
            return "boolean" == typeof e ? t.animate = e : b.extend(t, e), t
        }

        function v(e, t, o, i, n, r, s, a, l) {
            "array" === b.type(e) ? this.elements = [+e[0], +e[2], +e[4], +e[1], +e[3], +e[5], 0, 0, 1] : this.elements = [e, t, o, i, n, r, s || 0, a || 0, l || 1]
        }

        function g(e, t, o) {
            this.elements = [e, t, o]
        }

        function h(e, o) {
            if (!(this instanceof h)) return new h(e, o);
            1 !== e.nodeType && b.error("Panzoom called on non-Element node"), b.contains(x, e) || b.error("Panzoom element must be attached to the document");
            var t = b.data(e, s);
            if (t) return t;
            this.options = o = b.extend({}, h.defaults, o), this.elem = e;
            var i = this.$elem = b(e);
            this.$set = o.$set && o.$set.length ? o.$set : i, this.$doc = b(e.ownerDocument || x), this.$parent = i.parent(), this.parent = this.$parent[0], this.isSVG = l.test(e.namespaceURI) && "svg" !== e.nodeName.toLowerCase(), this.panning = !1, this._buildTransform(), this._transform = b.cssProps.transform ? b.cssProps.transform.replace(a, "-$1").toLowerCase() : "transform", this._buildTransition(), this.resetDimensions();
            var n = b(),
                r = this;
            b.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function(e, t) {
                r[t] = o[t] || n
            }), this.enable(), this.scale = this.getMatrix()[0], this._checkPanWhenZoomed(), b.data(e, s, this)
        }
        return v.prototype = {
            x: function(e) {
                var t = e instanceof g,
                    o = this.elements,
                    i = e.elements;
                return t && 3 === i.length ? new g(o[0] * i[0] + o[1] * i[1] + o[2] * i[2], o[3] * i[0] + o[4] * i[1] + o[5] * i[2], o[6] * i[0] + o[7] * i[1] + o[8] * i[2]) : i.length === o.length && new v(o[0] * i[0] + o[1] * i[3] + o[2] * i[6], o[0] * i[1] + o[1] * i[4] + o[2] * i[7], o[0] * i[2] + o[1] * i[5] + o[2] * i[8], o[3] * i[0] + o[4] * i[3] + o[5] * i[6], o[3] * i[1] + o[4] * i[4] + o[5] * i[7], o[3] * i[2] + o[4] * i[5] + o[5] * i[8], o[6] * i[0] + o[7] * i[3] + o[8] * i[6], o[6] * i[1] + o[7] * i[4] + o[8] * i[7], o[6] * i[2] + o[7] * i[5] + o[8] * i[8])
            },
            inverse: function() {
                var e = 1 / this.determinant(),
                    t = this.elements;
                return new v(e * (t[8] * t[4] - t[7] * t[5]), e * -(t[8] * t[1] - t[7] * t[2]), e * (t[5] * t[1] - t[4] * t[2]), e * -(t[8] * t[3] - t[6] * t[5]), e * (t[8] * t[0] - t[6] * t[2]), e * -(t[5] * t[0] - t[3] * t[2]), e * (t[7] * t[3] - t[6] * t[4]), e * -(t[7] * t[0] - t[6] * t[1]), e * (t[4] * t[0] - t[3] * t[1]))
            },
            determinant: function() {
                var e = this.elements;
                return e[0] * (e[8] * e[4] - e[7] * e[5]) - e[3] * (e[8] * e[1] - e[7] * e[2]) + e[6] * (e[5] * e[1] - e[4] * e[2])
            }
        }, g.prototype.e = v.prototype.e = function(e) {
            return this.elements[e]
        }, h.rmatrix = n, h.defaults = {
            eventNamespace: ".panzoom",
            transition: !0,
            cursor: "",
            disablePan: !1,
            disableZoom: !1,
            disableXAxis: !1,
            disableYAxis: !1,
            which: 1,
            increment: .3,
            linearZoom: !1,
            panOnlyWhenZoomed: !1,
            minScale: .3,
            maxScale: 6,
            rangeStep: .05,
            duration: 200,
            easing: "ease-in-out",
            contain: !1
        }, h.prototype = {
            constructor: h,
            instance: function() {
                return this
            },
            enable: function() {
                this._initStyle(), this._bind(), this.disabled = !1
            },
            disable: function() {
                this.disabled = !0, this._resetStyle(), this._unbind()
            },
            isDisabled: function() {
                return this.disabled
            },
            destroy: function() {
                this.disable(), b.removeData(this.elem, s)
            },
            resetDimensions: function() {
                this.container = this.parent.getBoundingClientRect();
                var e = this.elem,
                    t = e.getBoundingClientRect(),
                    o = Math.abs(this.scale);
                this.dimensions = {
                    width: t.width,
                    height: t.height,
                    left: b.css(e, "left", !0) || 0,
                    top: b.css(e, "top", !0) || 0,
                    border: {
                        top: b.css(e, "borderTopWidth", !0) * o || 0,
                        bottom: b.css(e, "borderBottomWidth", !0) * o || 0,
                        left: b.css(e, "borderLeftWidth", !0) * o || 0,
                        right: b.css(e, "borderRightWidth", !0) * o || 0
                    },
                    margin: {
                        top: b.css(e, "marginTop", !0) * o || 0,
                        left: b.css(e, "marginLeft", !0) * o || 0
                    }
                }
            },
            reset: function(e) {
                e = c(e);
                var t = this.setMatrix(this._origTransform, e);
                e.silent || this._trigger("reset", t)
            },
            resetZoom: function(e) {
                e = c(e);
                var t = this.getMatrix(this._origTransform);
                e.dValue = t[3], this.zoom(t[0], e)
            },
            resetPan: function(e) {
                var t = this.getMatrix(this._origTransform);
                this.pan(t[4], t[5], c(e))
            },
            setTransform: function(e) {
                for (var t = this.$set, o = t.length; o--;) b.style(t[o], "transform", e), this.isSVG && t[o].setAttribute("transform", e)
            },
            getTransform: function(e) {
                var t = this.$set[0];
                return e ? this.setTransform(e) : (e = b.style(t, "transform"), !this.isSVG || e && "none" !== e || (e = b.attr(t, "transform") || "none")), "none" === e || n.test(e) || this.setTransform(e = b.css(t, "transform")), e || "none"
            },
            getMatrix: function(e) {
                var t = n.exec(e || this.getTransform());
                return t && t.shift(), t || [1, 0, 0, 1, 0, 0]
            },
            setMatrix: function(e, t) {
                if (!this.disabled) {
                    t || (t = {}), "string" == typeof e && (e = this.getMatrix(e));
                    var o = +e[0],
                        i = void 0 !== t.contain ? t.contain : this.options.contain;
                    if (i) {
                        var n, r, s, a = t.dims;
                        a || (this.resetDimensions(), a = this.dimensions);
                        var l = this.container,
                            c = a.width,
                            d = a.height,
                            u = l.width,
                            h = l.height,
                            f = u / c,
                            p = h / d;
                        "center" !== this.$parent.css("textAlign") || "inline" !== b.css(this.elem, "display") ? (n = (s = (c - this.elem.offsetWidth) / 2) - a.border.left, r = c - u - s + a.border.right) : n = r = (c - u) / 2;
                        var m = (d - h) / 2 + a.border.top,
                            v = (d - h) / 2 - a.border.top - a.border.bottom;
                        e[4] = "invert" === i || "automatic" === i && f < 1.01 ? Math.max(Math.min(e[4], n - a.border.left), -r) : Math.min(Math.max(e[4], n), -r), e[5] = "invert" === i || "automatic" === i && p < 1.01 ? Math.max(Math.min(e[5], m - a.border.top), -v) : Math.min(Math.max(e[5], m), -v)
                    }
                    if ("skip" !== t.animate && this.transition(!t.animate), t.range && this.$zoomRange.val(o), this.options.disableXAxis || this.options.disableYAxis) {
                        var g = this.getMatrix();
                        this.options.disableXAxis && (e[4] = g[4]), this.options.disableYAxis && (e[5] = g[5])
                    }
                    return this.setTransform("matrix(" + e.join(",") + ")"), this.scale = o, this._checkPanWhenZoomed(o), t.silent || this._trigger("change", e), e
                }
            },
            isPanning: function() {
                return this.panning
            },
            transition: function(e) {
                if (this._transition)
                    for (var t = e || !this.options.transition ? "none" : this._transition, o = this.$set, i = o.length; i--;) b.style(o[i], "transition") !== t && b.style(o[i], "transition", t)
            },
            pan: function(e, t, o) {
                if (!this.options.disablePan) {
                    o || (o = {});
                    var i = o.matrix;
                    i || (i = this.getMatrix()), o.relative && (e += +i[4], t += +i[5]), i[4] = e, i[5] = t, this.setMatrix(i, o), o.silent || this._trigger("pan", i[4], i[5])
                }
            },
            zoom: function(e, t) {
                "object" == typeof e ? (t = e, e = null) : t || (t = {});
                var o = b.extend({}, this.options, t);
                if (!o.disableZoom) {
                    var i = !1,
                        n = o.matrix || this.getMatrix(),
                        r = +n[0];
                    "number" != typeof e && (e = o.linearZoom ? r + o.increment * (e ? -1 : 1) : e ? r / (1 + o.increment) : r * (1 + o.increment), i = !0), e = Math.max(Math.min(e, o.maxScale), o.minScale);
                    var s = o.focal;
                    if (s && !o.disablePan) {
                        this.resetDimensions();
                        var a = o.dims = this.dimensions,
                            l = s.clientX,
                            c = s.clientY;
                        this.isSVG || (l -= a.width / r / 2, c -= a.height / r / 2);
                        var d = new g(l, c, 1),
                            u = new v(n),
                            h = this.parentOffset || this.$parent.offset(),
                            f = new v(1, 0, h.left - this.$doc.scrollLeft(), 0, 1, h.top - this.$doc.scrollTop()),
                            p = u.inverse().x(f.inverse().x(d)),
                            m = e / n[0];
                        u = u.x(new v([m, 0, 0, m, 0, 0])), d = f.x(u.x(p)), n[4] = +n[4] + (l - d.e(0)), n[5] = +n[5] + (c - d.e(1))
                    }
                    n[0] = e, n[3] = "number" == typeof o.dValue ? o.dValue : e, this.setMatrix(n, {
                        animate: void 0 !== o.animate ? o.animate : i,
                        range: !o.noSetRange
                    }), o.silent || this._trigger("zoom", n[0], o)
                }
            },
            option: function(e, t) {
                var o;
                if (!e) return b.extend({}, this.options);
                if ("string" == typeof e) {
                    if (1 === arguments.length) return void 0 !== this.options[e] ? this.options[e] : null;
                    (o = {})[e] = t
                } else o = e;
                this._setOptions(o)
            },
            _setOptions: function(e) {
                b.each(e, b.proxy(function(e, t) {
                    switch (e) {
                        case "disablePan":
                            this._resetStyle();
                        case "$zoomIn":
                        case "$zoomOut":
                        case "$zoomRange":
                        case "$reset":
                        case "disableZoom":
                        case "onStart":
                        case "onChange":
                        case "onZoom":
                        case "onPan":
                        case "onEnd":
                        case "onReset":
                        case "eventNamespace":
                            this._unbind()
                    }
                    switch (this.options[e] = t, e) {
                        case "disablePan":
                            this._initStyle();
                        case "$zoomIn":
                        case "$zoomOut":
                        case "$zoomRange":
                        case "$reset":
                            this[e] = t;
                        case "disableZoom":
                        case "onStart":
                        case "onChange":
                        case "onZoom":
                        case "onPan":
                        case "onEnd":
                        case "onReset":
                        case "eventNamespace":
                            this._bind();
                            break;
                        case "cursor":
                            b.style(this.elem, "cursor", t);
                            break;
                        case "minScale":
                            this.$zoomRange.attr("min", t);
                            break;
                        case "maxScale":
                            this.$zoomRange.attr("max", t);
                            break;
                        case "rangeStep":
                            this.$zoomRange.attr("step", t);
                            break;
                        case "startTransform":
                            this._buildTransform();
                            break;
                        case "duration":
                        case "easing":
                            this._buildTransition();
                        case "transition":
                            this.transition();
                            break;
                        case "panOnlyWhenZoomed":
                            this._checkPanWhenZoomed();
                            break;
                        case "$set":
                            t instanceof b && t.length && (this.$set = t, this._initStyle(), this._buildTransform())
                    }
                }, this))
            },
            _checkPanWhenZoomed: function(e) {
                var t = this.options;
                if (t.panOnlyWhenZoomed) {
                    e || (e = this.getMatrix()[0]);
                    var o = e <= t.minScale;
                    t.disablePan !== o && this.option("disablePan", o)
                }
            },
            _initStyle: function() {
                var e = {
                    "transform-origin": this.isSVG ? "0 0" : "50% 50%"
                };
                this.options.disablePan || (e.cursor = this.options.cursor), this.$set.css(e);
                var t = this.$parent;
                t.length && !b.nodeName(this.parent, "body") && (e = {
                    overflow: "hidden"
                }, "static" === t.css("position") && (e.position = "relative"), t.css(e))
            },
            _resetStyle: function() {
                this.$elem.css({
                    cursor: "",
                    transition: ""
                }), this.$parent.css({
                    overflow: "",
                    position: ""
                })
            },
            _bind: function() {
                var o = this,
                    i = this.options,
                    t = i.eventNamespace,
                    e = "mousedown" + t + " pointerdown" + t + " MSPointerDown" + t,
                    n = "touchstart" + t + " " + e,
                    r = "touchend" + t + " click" + t + " pointerup" + t + " MSPointerUp" + t,
                    s = {},
                    a = this.$reset,
                    l = this.$zoomRange;
                if (b.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function() {
                        var e = i["on" + this];
                        b.isFunction(e) && (s["panzoom" + this.toLowerCase() + t] = e)
                    }), i.disablePan && i.disableZoom || (s[n] = function(e) {
                        var t;
                        ("touchstart" === e.type ? !(t = e.touches || e.originalEvent.touches) || (1 !== t.length || i.disablePan) && 2 !== t.length : i.disablePan || (e.which || e.originalEvent.which) !== i.which) || (e.preventDefault(), e.stopPropagation(), o._startMove(e, t))
                    }, 3 === i.which && (s.contextmenu = !1)), this.$elem.on(s), a.length && a.on(r, function(e) {
                        e.preventDefault(), o.reset()
                    }), l.length && l.attr({
                        step: i.rangeStep === h.defaults.rangeStep && l.attr("step") || i.rangeStep,
                        min: i.minScale,
                        max: i.maxScale
                    }).prop({
                        value: this.getMatrix()[0]
                    }), !i.disableZoom) {
                    var c = this.$zoomIn,
                        d = this.$zoomOut;
                    c.length && d.length && (c.on(r, function(e) {
                        e.preventDefault(), o.zoom()
                    }), d.on(r, function(e) {
                        e.preventDefault(), o.zoom(!0)
                    })), l.length && ((s = {})[e] = function() {
                        o.transition(!0)
                    }, s[(u ? "input" : "change") + t] = function() {
                        o.zoom(+this.value, {
                            noSetRange: !0
                        })
                    }, l.on(s))
                }
            },
            _unbind: function() {
                this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
            },
            _buildTransform: function() {
                return this._origTransform = this.getTransform(this.options.startTransform)
            },
            _buildTransition: function() {
                if (this._transform) {
                    var e = this.options;
                    this._transition = this._transform + " " + e.duration + "ms " + e.easing
                }
            },
            _getDistance: function(e) {
                var t = e[0],
                    o = e[1];
                return Math.sqrt(Math.pow(Math.abs(o.clientX - t.clientX), 2) + Math.pow(Math.abs(o.clientY - t.clientY), 2))
            },
            _getMiddle: function(e) {
                var t = e[0],
                    o = e[1];
                return {
                    clientX: (o.clientX - t.clientX) / 2 + t.clientX,
                    clientY: (o.clientY - t.clientY) / 2 + t.clientY
                }
            },
            _trigger: function(e) {
                "string" == typeof e && (e = "panzoom" + e), this.$elem.triggerHandler(e, [this].concat(r.call(arguments, 1)))
            },
            _startMove: function(e, n) {
                if (!this.panning) {
                    var t, o, r, s, a, l, c, i, d = this,
                        u = this.options,
                        h = u.eventNamespace,
                        f = this.getMatrix(),
                        p = f.slice(0),
                        m = +p[4],
                        v = +p[5],
                        g = {
                            matrix: f,
                            animate: "skip"
                        },
                        y = e.type;
                    o = "pointerdown" === y ? (t = "pointermove", "pointerup") : "touchstart" === y ? (t = "touchmove", "touchend") : "MSPointerDown" === y ? (t = "MSPointerMove", "MSPointerUp") : (t = "mousemove", "mouseup"), t += h, o += h, this.transition(!0), this.panning = !0, this._trigger("start", e, n);
                    var w = function(e, t) {
                        if (t) {
                            if (2 === t.length) {
                                if (null != r) return;
                                return r = d._getDistance(t), s = +f[0], void(a = d._getMiddle(t))
                            }
                            if (null != l) return;
                            (i = t[0]) && (l = i.pageX, c = i.pageY)
                        }
                        null == l && (l = e.pageX, c = e.pageY)
                    };
                    w(e, n);
                    b(x).off(h).on(t, function(e) {
                        var t;
                        if (e.preventDefault(), n = e.touches || e.originalEvent.touches, w(e, n), n) {
                            if (2 === n.length) {
                                var o = d._getMiddle(n),
                                    i = d._getDistance(n) - r;
                                return d.zoom(i * (u.increment / 100) + s, {
                                    focal: o,
                                    matrix: f,
                                    animate: "skip"
                                }), d.pan(+f[4] + o.clientX - a.clientX, +f[5] + o.clientY - a.clientY, g), void(a = o)
                            }
                            t = n[0] || {
                                pageX: 0,
                                pageY: 0
                            }
                        }
                        t || (t = e), d.pan(m + t.pageX - l, v + t.pageY - c, g)
                    }).on(o, function(e) {
                        e.preventDefault(), b(this).off(h), d.panning = !1, e.type = "panzoomend", d._trigger(e, f, ! function(e, t) {
                            for (var o = e.length; --o;)
                                if (Math.round(+e[o]) !== Math.round(+t[o])) return !1;
                            return !0
                        }(f, p))
                    })
                }
            }
        }, b.Panzoom = h, b.fn.panzoom = function(e) {
            var t, o, i, n;
            return "string" == typeof e ? (n = [], o = r.call(arguments, 1), this.each(function() {
                (t = b.data(this, s)) ? "_" !== e.charAt(0) && "function" == typeof(i = t[e]) && void 0 !== (i = i.apply(t, o)) && n.push(i): n.push(void 0)
            }), n.length ? 1 === n.length ? n[0] : n : this) : this.each(function() {
                new h(this, e)
            })
        }, h
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var E = !1,
            k = !1,
            $ = 0,
            A = 2e3,
            M = 0,
            P = e,
            O = document,
            z = window,
            q = P(z),
            D = [];
        var I = z.requestAnimationFrame || z.webkitRequestAnimationFrame || z.mozRequestAnimationFrame || !1,
            B = z.cancelAnimationFrame || z.webkitCancelAnimationFrame || z.mozCancelAnimationFrame || !1;
        if (I) z.cancelAnimationFrame || (B = function(e) {});
        else {
            var r = 0;
            I = function(e, t) {
                var o = (new Date).getTime(),
                    i = Math.max(0, 16 - (o - r)),
                    n = z.setTimeout(function() {
                        e(o + i)
                    }, i);
                return r = o + i, n
            }, B = function(e) {
                z.clearTimeout(e)
            }
        }
        var t, o, i, N = z.MutationObserver || z.WebKitMutationObserver || !1,
            H = Date.now || function() {
                return (new Date).getTime()
            },
            _ = {
                zindex: "auto",
                cursoropacitymin: 1,
                cursoropacitymax: 1,
                cursorcolor: "#c06528",
                cursorwidth: "5px",
                cursorborder: "none",
                cursorborderradius: "5px",
                scrollspeed: 90,
                mousescrollstep: 60,
                touchbehavior: !1,
                emulatetouch: !1,
                hwacceleration: !0,
                usetransition: !0,
                boxzoom: !1,
                dblclickzoom: !0,
                gesturezoom: !0,
                grabcursorenabled: !0,
                autohidemode: !0,
                background: "",
                iframeautoresize: !0,
                cursorminheight: 60,
                preservenativescrolling: !0,
                railoffset: !1,
                railhoffset: !1,
                bouncescroll: !0,
                spacebarenabled: !0,
                railpadding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                disableoutline: !0,
                horizrailenabled: !0,
                railalign: "right",
                railvalign: "bottom",
                enabletranslate3d: !0,
                enablemousewheel: !0,
                enablekeyboard: !0,
                smoothscroll: !0,
                sensitiverail: !0,
                enablemouselockapi: !0,
                cursorfixedheight: !1,
                directionlockdeadzone: 6,
                hidecursordelay: 400,
                nativeparentscrolling: !0,
                enablescrollonselection: !0,
                overflowx: !0,
                overflowy: !0,
                cursordragspeed: .3,
                rtlmode: "auto",
                cursordragontouch: !1,
                oneaxismousemode: "auto",
                scriptpath: (o = O.currentScript || !!(t = O.getElementsByTagName("script")).length && t[t.length - 1], i = o ? o.src.split("?")[0] : "", 0 < i.split("/").length ? i.split("/").slice(0, -1).join("/") + "/" : ""),
                preventmultitouchscrolling: !0,
                disablemutationobserver: !1,
                enableobserver: !0,
                scrollbarid: !1
            },
            R = !1,
            a = function(e, t) {
                var w = this;
                this.version = "3.7.6", this.name = "nicescroll", this.me = t;
                var b = P("body"),
                    x = this.opt = {
                        doc: b,
                        win: !1
                    };
                if (P.extend(x, _), x.snapbackspeed = 80, e)
                    for (var o in x) void 0 !== e[o] && (x[o] = e[o]);
                if (x.disablemutationobserver && (N = !1), this.doc = x.doc, this.iddoc = this.doc && this.doc[0] && this.doc[0].id || "", this.ispage = /^BODY|HTML/.test(x.win ? x.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== x.win, this.win = x.win || (this.ispage ? q : this.doc), this.docscroll = this.ispage && !this.haswrapper ? q : this.win, this.body = b, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != x.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
                        x: 0,
                        y: 0
                    }, this.scrollratio = {
                        x: 0,
                        y: 0
                    }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == x.rtlmode) {
                    var i = this.win[0] == z ? this.body : this.win,
                        n = i.css("writing-mode") || i.css("-webkit-writing-mode") || i.css("-ms-writing-mode") || i.css("-moz-writing-mode");
                    "horizontal-tb" == n || "lr-tb" == n || "" === n ? (this.isrtlmode = "rtl" == i.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == n || "tb" == n || "tb-rl" == n || "rl-tb" == n, this.isvertical = "vertical-rl" == n || "tb" == n || "tb-rl" == n)
                } else this.isrtlmode = !0 === x.rtlmode, this.isvertical = !1;
                if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, (this.observerbody = !1) !== x.scrollbarid) this.id = x.scrollbarid;
                else
                    for (; this.id = "ascrail" + A++, O.getElementById(this.id););
                this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = x.overflowx, this.overflowy = x.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = function() {
                    if (R) return R;
                    var e = O.createElement("DIV"),
                        r = e.style,
                        t = navigator.userAgent,
                        o = navigator.platform,
                        s = {};
                    return s.haspointerlock = "pointerLockElement" in O || "webkitPointerLockElement" in O || "mozPointerLockElement" in O, s.isopera = "opera" in z, s.isopera12 = s.isopera && "getUserMedia" in navigator, s.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(z.operamini), s.isie = "all" in O && "attachEvent" in e && !s.isopera, s.isieold = s.isie && !("msInterpolationMode" in r), s.isie7 = s.isie && !s.isieold && (!("documentMode" in O) || 7 === O.documentMode), s.isie8 = s.isie && "documentMode" in O && 8 === O.documentMode, s.isie9 = s.isie && "performance" in z && 9 === O.documentMode, s.isie10 = s.isie && "performance" in z && 10 === O.documentMode, s.isie11 = "msRequestFullscreen" in e && 11 <= O.documentMode, s.ismsedge = "msCredentials" in z, s.ismozilla = "MozAppearance" in r, s.iswebkit = !s.ismsedge && "WebkitAppearance" in r, s.ischrome = s.iswebkit && "chrome" in z, s.ischrome38 = s.ischrome && "touchAction" in r, s.ischrome22 = !s.ischrome38 && s.ischrome && s.haspointerlock, s.ischrome26 = !s.ischrome38 && s.ischrome && "transition" in r, s.cantouch = "ontouchstart" in O.documentElement || "ontouchstart" in z, s.hasw3ctouch = !!z.PointerEvent && (0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints), s.hasmstouch = !s.hasw3ctouch && (z.MSPointerEvent || !1), s.ismac = /^mac$/i.test(o), s.isios = s.cantouch && /iphone|ipad|ipod/i.test(o), s.isios4 = s.isios && !("seal" in Object), s.isios7 = s.isios && "webkitHidden" in O, s.isios8 = s.isios && "hidden" in O, s.isios10 = s.isios && z.Proxy, s.isandroid = /android/i.test(t), s.haseventlistener = "addEventListener" in e, s.trstyle = !1, s.hastransform = !1, s.hastranslate3d = !1, s.transitionstyle = !1, s.hastransition = !1, s.transitionend = !1, s.trstyle = "transform", s.hastransform = "transform" in r || function() {
                        for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, o = e.length; t < o; t++)
                            if (void 0 !== r[e[t]]) {
                                s.trstyle = e[t];
                                break
                            } s.hastransform = !!s.trstyle
                    }(), s.hastransform && (r[s.trstyle] = "translate3d(1px,2px,3px)", s.hastranslate3d = /translate3d/.test(r[s.trstyle])), s.transitionstyle = "transition", s.prefixstyle = "", s.transitionend = "transitionend", s.hastransition = "transition" in r || function() {
                        s.transitionend = !1;
                        for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], o = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], i = 0, n = e.length; i < n; i++)
                            if (e[i] in r) {
                                s.transitionstyle = e[i], s.prefixstyle = t[i], s.transitionend = o[i];
                                break
                            } s.ischrome26 && (s.prefixstyle = t[1]), s.hastransition = s.transitionstyle
                    }(), s.cursorgrabvalue = function() {
                        var e = ["grab", "-webkit-grab", "-moz-grab"];
                        (s.ischrome && !s.ischrome38 || s.isie) && (e = []);
                        for (var t = 0, o = e.length; t < o; t++) {
                            var i = e[t];
                            if (r.cursor = i, r.cursor == i) return i
                        }
                        return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
                    }(), s.hasmousecapture = "setCapture" in e, s.hasMutationObserver = !1 !== N, e = null, R = s
                }();
                var S = P.extend({}, this.detected);
                this.canhwscroll = S.hastransform && x.hwacceleration, this.ishwscroll = this.canhwscroll && w.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(S.iswebkit || S.isie || S.isie11) : this.hasreversehr = !(S.iswebkit || S.isie && !S.isie10 && !S.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, (S.cantouch || !S.hasw3ctouch && !S.hasmstouch) && (!S.cantouch || S.isios || S.isandroid || !S.iswebkit && !S.ismozilla) || (this.istouchcapable = !0), x.enablemouselockapi || (S.hasmousecapture = !1, S.haspointerlock = !1), this.debounced = function(e, t, o) {
                    w && (w.delaylist[e] || !1 || (w.delaylist[e] = {
                        h: I(function() {
                            w.delaylist[e].fn.call(w), w.delaylist[e] = !1
                        }, o)
                    }, t.call(w)), w.delaylist[e].fn = t)
                }, this.synched = function(e, t) {
                    w.synclist[e] ? w.synclist[e] = t : (w.synclist[e] = t, I(function() {
                        w && (w.synclist[e] && w.synclist[e].call(w), w.synclist[e] = null)
                    }))
                }, this.unsynched = function(e) {
                    w.synclist[e] && (w.synclist[e] = !1)
                }, this.css = function(e, t) {
                    for (var o in t) w.saved.css.push([e, o, e.css(o)]), e.css(o, t[o])
                }, this.scrollTop = function(e) {
                    return void 0 === e ? w.getScrollTop() : w.setScrollTop(e)
                }, this.scrollLeft = function(e) {
                    return void 0 === e ? w.getScrollLeft() : w.setScrollLeft(e)
                };
                var d = function(e, t, o, i, n, r, s) {
                    this.st = e, this.ed = t, this.spd = o, this.p1 = i || 0, this.p2 = n || 1, this.p3 = r || 0, this.p4 = s || 1, this.ts = H(), this.df = t - e
                };

                function r() {
                    var e = w.doc.css(S.trstyle);
                    return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
                }
                if (d.prototype = {
                        B2: function(e) {
                            return 3 * (1 - e) * (1 - e) * e
                        },
                        B3: function(e) {
                            return 3 * (1 - e) * e * e
                        },
                        B4: function(e) {
                            return e * e * e
                        },
                        getPos: function() {
                            return (H() - this.ts) / this.spd
                        },
                        getNow: function() {
                            var e = (H() - this.ts) / this.spd,
                                t = this.B2(e) + this.B3(e) + this.B4(e);
                            return 1 <= e ? this.ed : this.st + this.df * t | 0
                        },
                        update: function(e, t) {
                            return this.st = this.getNow(), this.ed = e, this.spd = t, this.ts = H(), this.df = this.ed - this.st, this
                        }
                    }, this.ishwscroll) {
                    this.doc.translate = {
                        x: 0,
                        y: 0,
                        tx: "0px",
                        ty: "0px"
                    }, S.hastranslate3d && S.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(e) {
                        if (!e) {
                            var t = r();
                            if (t) return 16 == t.length ? -t[13] : -t[5];
                            if (w.timerscroll && w.timerscroll.bz) return w.timerscroll.bz.getNow()
                        }
                        return w.doc.translate.y
                    }, this.getScrollLeft = function(e) {
                        if (!e) {
                            var t = r();
                            if (t) return 16 == t.length ? -t[12] : -t[4];
                            if (w.timerscroll && w.timerscroll.bh) return w.timerscroll.bh.getNow()
                        }
                        return w.doc.translate.x
                    }, this.notifyScrollEvent = function(e) {
                        var t = O.createEvent("UIEvents");
                        t.initUIEvent("scroll", !1, !1, z, 1), t.niceevent = !0, e.dispatchEvent(t)
                    };
                    var s = this.isrtlmode ? 1 : -1;
                    S.hastranslate3d && x.enabletranslate3d ? (this.setScrollTop = function(e, t) {
                        w.doc.translate.y = e, w.doc.translate.ty = -1 * e + "px", w.doc.css(S.trstyle, "translate3d(" + w.doc.translate.tx + "," + w.doc.translate.ty + ",0)"), t || w.notifyScrollEvent(w.win[0])
                    }, this.setScrollLeft = function(e, t) {
                        w.doc.translate.x = e, w.doc.translate.tx = e * s + "px", w.doc.css(S.trstyle, "translate3d(" + w.doc.translate.tx + "," + w.doc.translate.ty + ",0)"), t || w.notifyScrollEvent(w.win[0])
                    }) : (this.setScrollTop = function(e, t) {
                        w.doc.translate.y = e, w.doc.translate.ty = -1 * e + "px", w.doc.css(S.trstyle, "translate(" + w.doc.translate.tx + "," + w.doc.translate.ty + ")"), t || w.notifyScrollEvent(w.win[0])
                    }, this.setScrollLeft = function(e, t) {
                        w.doc.translate.x = e, w.doc.translate.tx = e * s + "px", w.doc.css(S.trstyle, "translate(" + w.doc.translate.tx + "," + w.doc.translate.ty + ")"), t || w.notifyScrollEvent(w.win[0])
                    })
                } else this.getScrollTop = function() {
                    return w.docscroll.scrollTop()
                }, this.setScrollTop = function(e) {
                    w.docscroll.scrollTop(e)
                }, this.getScrollLeft = function() {
                    return w.hasreversehr ? w.detected.ismozilla ? w.page.maxw - Math.abs(w.docscroll.scrollLeft()) : w.page.maxw - w.docscroll.scrollLeft() : w.docscroll.scrollLeft()
                }, this.setScrollLeft = function(e) {
                    return setTimeout(function() {
                        if (w) return w.hasreversehr && (e = w.detected.ismozilla ? -(w.page.maxw - e) : w.page.maxw - e), w.docscroll.scrollLeft(e)
                    }, 1)
                };
                this.getTarget = function(e) {
                    return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
                }, this.hasParent = function(e, t) {
                    if (!e) return !1;
                    for (var o = e.target || e.srcElement || e || !1; o && o.id != t;) o = o.parentNode || !1;
                    return !1 !== o
                };
                var a = {
                    thin: 1,
                    medium: 3,
                    thick: 5
                };

                function l(e, t, o) {
                    var i = e.css(t),
                        n = parseFloat(i);
                    if (isNaN(n)) {
                        var r = 3 == (n = a[i] || 0) ? o ? w.win.outerHeight() - w.win.innerHeight() : w.win.outerWidth() - w.win.innerWidth() : 1;
                        return w.isie8 && n && (n += 1), r ? n : 0
                    }
                    return n
                }
                this.getDocumentScrollOffset = function() {
                    return {
                        top: z.pageYOffset || O.documentElement.scrollTop,
                        left: z.pageXOffset || O.documentElement.scrollLeft
                    }
                }, this.getOffset = function() {
                    if (w.isfixed) {
                        var e = w.win.offset(),
                            t = w.getDocumentScrollOffset();
                        return e.top -= t.top, e.left -= t.left, e
                    }
                    var o = w.win.offset();
                    if (!w.viewport) return o;
                    var i = w.viewport.offset();
                    return {
                        top: o.top - i.top,
                        left: o.left - i.left
                    }
                }, this.updateScrollBar = function(e) {
                    var t, o;
                    if (w.ishwscroll) w.rail.css({
                        height: w.win.innerHeight() - (x.railpadding.top + x.railpadding.bottom)
                    }), w.railh && w.railh.css({
                        width: w.win.innerWidth() - (x.railpadding.left + x.railpadding.right)
                    });
                    else {
                        var i = w.getOffset();
                        if ((t = {
                                top: i.top,
                                left: i.left - (x.railpadding.left + x.railpadding.right)
                            }).top += l(w.win, "border-top-width", !0), t.left += w.rail.align ? w.win.outerWidth() - l(w.win, "border-right-width") - w.rail.width : l(w.win, "border-left-width"), (o = x.railoffset) && (o.top && (t.top += o.top), o.left && (t.left += o.left)), w.railslocked || w.rail.css({
                                top: t.top,
                                left: t.left,
                                height: (e ? e.h : w.win.innerHeight()) - (x.railpadding.top + x.railpadding.bottom)
                            }), w.zoom && w.zoom.css({
                                top: t.top + 1,
                                left: 1 == w.rail.align ? t.left - 20 : t.left + w.rail.width + 4
                            }), w.railh && !w.railslocked) {
                            t = {
                                top: i.top,
                                left: i.left
                            }, (o = x.railhoffset) && (o.top && (t.top += o.top), o.left && (t.left += o.left));
                            var n = w.railh.align ? t.top + l(w.win, "border-top-width", !0) + w.win.innerHeight() - w.railh.height : t.top + l(w.win, "border-top-width", !0),
                                r = t.left + l(w.win, "border-left-width");
                            w.railh.css({
                                top: n - (x.railpadding.top + x.railpadding.bottom),
                                left: r,
                                width: w.railh.width
                            })
                        }
                    }
                }, this.doRailClick = function(e, t, o) {
                    var i, n, r, s;
                    w.railslocked || (w.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + O.documentElement.scrollLeft, e.pageY = e.clientY + O.documentElement.scrollTop), t ? (i = o ? w.doScrollLeft : w.doScrollTop, r = o ? (e.pageX - w.railh.offset().left - w.cursorwidth / 2) * w.scrollratio.x : (e.pageY - w.rail.offset().top - w.cursorheight / 2) * w.scrollratio.y, w.unsynched("relativexy"), i(0 | r)) : (i = o ? w.doScrollLeftBy : w.doScrollBy, r = o ? w.scroll.x : w.scroll.y, s = o ? e.pageX - w.railh.offset().left : e.pageY - w.rail.offset().top, n = o ? w.view.w : w.view.h, i(s <= r ? n : -n)))
                }, w.newscrolly = w.newscrollx = 0, w.hasanimationframe = "requestAnimationFrame" in z, w.hascancelanimationframe = "cancelAnimationFrame" in z, w.hasborderbox = !1, this.init = function() {
                    if (w.saved.css = [], S.isoperamini) return !0;
                    if (S.isandroid && !("hidden" in O)) return !0;
                    x.emulatetouch = x.emulatetouch || x.touchbehavior, w.hasborderbox = z.getComputedStyle && "border-box" === z.getComputedStyle(O.body)["box-sizing"];
                    var o = {
                        "overflow-y": "hidden"
                    };
                    if ((S.isie11 || S.isie10) && (o["-ms-overflow-style"] = "none"), w.ishwscroll && (this.doc.css(S.transitionstyle, S.prefixstyle + "transform 0ms ease-out"), S.transitionend && w.bind(w.doc, S.transitionend, w.onScrollTransitionEnd, !1)), w.zindex = "auto", w.ispage || "auto" != x.zindex ? w.zindex = x.zindex : w.zindex = function() {
                            var e = w.win;
                            if ("zIndex" in e) return e.zIndex();
                            for (; 0 < e.length;) {
                                if (9 == e[0].nodeType) return !1;
                                var t = e.css("zIndex");
                                if (!isNaN(t) && 0 !== t) return parseInt(t);
                                e = e.parent()
                            }
                            return !1
                        }() || "auto", !w.ispage && "auto" != w.zindex && w.zindex > M && (M = w.zindex), w.isie && 0 === w.zindex && "auto" == x.zindex && (w.zindex = "auto"), !w.ispage || !S.isieold) {
                        var e = w.docscroll;
                        w.ispage && (e = w.haswrapper ? w.win : w.doc), w.css(e, o), w.ispage && (S.isie11 || S.isie) && w.css(P("html"), o), !S.isios || w.ispage || w.haswrapper || w.css(b, {
                            "-webkit-overflow-scrolling": "touch"
                        });
                        var t = P(O.createElement("div"));
                        t.css({
                            position: "relative",
                            top: 0,
                            float: "right",
                            width: x.cursorwidth,
                            height: 0,
                            "background-color": x.cursorcolor,
                            border: x.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": x.cursorborderradius,
                            "-moz-border-radius": x.cursorborderradius,
                            "border-radius": x.cursorborderradius
                        }), t.addClass("nicescroll-cursors"), w.cursor = t;
                        var i = P(O.createElement("div"));
                        i.attr("id", w.id), i.addClass("nicescroll-rails nicescroll-rails-vr");
                        var n, r, s = ["left", "right", "top", "bottom"];
                        for (var a in s) r = s[a], (n = x.railpadding[r] || 0) && i.css("padding-" + r, n + "px");
                        i.append(t), i.width = Math.max(parseFloat(x.cursorwidth), t.outerWidth()), i.css({
                            width: i.width + "px",
                            zIndex: w.zindex,
                            background: x.background,
                            cursor: "default"
                        }), i.visibility = !0, i.scrollable = !0, i.align = "left" == x.railalign ? 0 : 1, w.rail = i;
                        var l, c = w.rail.drag = !1;
                        if (!x.boxzoom || w.ispage || S.isieold || (c = O.createElement("div"), w.bind(c, "click", w.doZoom), w.bind(c, "mouseenter", function() {
                                w.zoom.css("opacity", x.cursoropacitymax)
                            }), w.bind(c, "mouseleave", function() {
                                w.zoom.css("opacity", x.cursoropacitymin)
                            }), w.zoom = P(c), w.zoom.css({
                                cursor: "pointer",
                                zIndex: w.zindex,
                                backgroundImage: "url(" + x.scriptpath + "zoomico.png)",
                                height: 18,
                                width: 18,
                                backgroundPosition: "0 0"
                            }), x.dblclickzoom && w.bind(w.win, "dblclick", w.doZoom), S.cantouch && x.gesturezoom && (w.ongesturezoom = function(e) {
                                return 1.5 < e.scale && w.doZoomIn(e), e.scale < .8 && w.doZoomOut(e), w.cancelEvent(e)
                            }, w.bind(w.win, "gestureend", w.ongesturezoom))), w.railh = !1, x.horizrailenabled && (w.css(e, {
                                overflowX: "hidden"
                            }), (t = P(O.createElement("div"))).css({
                                position: "absolute",
                                top: 0,
                                height: x.cursorwidth,
                                width: 0,
                                backgroundColor: x.cursorcolor,
                                border: x.cursorborder,
                                backgroundClip: "padding-box",
                                "-webkit-border-radius": x.cursorborderradius,
                                "-moz-border-radius": x.cursorborderradius,
                                "border-radius": x.cursorborderradius
                            }), S.isieold && t.css("overflow", "hidden"), t.addClass("nicescroll-cursors"), w.cursorh = t, (l = P(O.createElement("div"))).attr("id", w.id + "-hr"), l.addClass("nicescroll-rails nicescroll-rails-hr"), l.height = Math.max(parseFloat(x.cursorwidth), t.outerHeight()), l.css({
                                height: l.height + "px",
                                zIndex: w.zindex,
                                background: x.background
                            }), l.append(t), l.visibility = !0, l.scrollable = !0, l.align = "top" == x.railvalign ? 0 : 1, w.railh = l, w.railh.drag = !1), w.ispage) i.css({
                            position: "fixed",
                            top: 0,
                            height: "100%"
                        }), i.css(i.align ? {
                            right: 0
                        } : {
                            left: 0
                        }), w.body.append(i), w.railh && (l.css({
                            position: "fixed",
                            left: 0,
                            width: "100%"
                        }), l.css(l.align ? {
                            bottom: 0
                        } : {
                            top: 0
                        }), w.body.append(l));
                        else {
                            if (w.ishwscroll) {
                                "static" == w.win.css("position") && w.css(w.win, {
                                    position: "relative"
                                });
                                var d = "HTML" == w.win[0].nodeName ? w.body : w.win;
                                P(d).scrollTop(0).scrollLeft(0), w.zoom && (w.zoom.css({
                                    position: "absolute",
                                    top: 1,
                                    right: 0,
                                    "margin-right": i.width + 4
                                }), d.append(w.zoom)), i.css({
                                    position: "absolute",
                                    top: 0
                                }), i.css(i.align ? {
                                    right: 0
                                } : {
                                    left: 0
                                }), d.append(i), l && (l.css({
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }), l.css(l.align ? {
                                    bottom: 0
                                } : {
                                    top: 0
                                }), d.append(l))
                            } else {
                                w.isfixed = "fixed" == w.win.css("position");
                                var u = w.isfixed ? "fixed" : "absolute";
                                w.isfixed || (w.viewport = w.getViewport(w.win[0])), w.viewport && (w.body = w.viewport, /fixed|absolute/.test(w.viewport.css("position")) || w.css(w.viewport, {
                                    position: "relative"
                                })), i.css({
                                    position: u
                                }), w.zoom && w.zoom.css({
                                    position: u
                                }), w.updateScrollBar(), w.body.append(i), w.zoom && w.body.append(w.zoom), w.railh && (l.css({
                                    position: u
                                }), w.body.append(l))
                            }
                            S.isios && w.css(w.win, {
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                "-webkit-touch-callout": "none"
                            }), x.disableoutline && (S.isie && w.win.attr("hideFocus", "true"), S.iswebkit && w.win.css("outline", "none"))
                        }
                        if (!1 === x.autohidemode ? (w.autohidedom = !1, w.rail.css({
                                opacity: x.cursoropacitymax
                            }), w.railh && w.railh.css({
                                opacity: x.cursoropacitymax
                            })) : !0 === x.autohidemode || "leave" === x.autohidemode ? (w.autohidedom = P().add(w.rail), S.isie8 && (w.autohidedom = w.autohidedom.add(w.cursor)), w.railh && (w.autohidedom = w.autohidedom.add(w.railh)), w.railh && S.isie8 && (w.autohidedom = w.autohidedom.add(w.cursorh))) : "scroll" == x.autohidemode ? (w.autohidedom = P().add(w.rail), w.railh && (w.autohidedom = w.autohidedom.add(w.railh))) : "cursor" == x.autohidemode ? (w.autohidedom = P().add(w.cursor), w.railh && (w.autohidedom = w.autohidedom.add(w.cursorh))) : "hidden" == x.autohidemode && (w.autohidedom = !1, w.hide(), w.railslocked = !1), S.cantouch || w.istouchcapable || x.emulatetouch || S.hasmstouch) {
                            w.scrollmom = new F(w);
                            w.ontouchstart = function(e) {
                                if (w.locked) return !1;
                                if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                                if (w.hasmoving = !1, w.scrollmom.timer && (w.triggerScrollEnd(), w.scrollmom.stop()), !w.railslocked) {
                                    var t = w.getTarget(e);
                                    if (t)
                                        if (/INPUT/i.test(t.nodeName) && /range/i.test(t.type)) return w.stopPropagation(e);
                                    var o = "mousedown" === e.type;
                                    if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), w.forcescreen) {
                                        var i = e;
                                        (e = {
                                            original: e.original ? e.original : e
                                        }).clientX = i.screenX, e.clientY = i.screenY
                                    }
                                    if (w.rail.drag = {
                                            x: e.clientX,
                                            y: e.clientY,
                                            sx: w.scroll.x,
                                            sy: w.scroll.y,
                                            st: w.getScrollTop(),
                                            sl: w.getScrollLeft(),
                                            pt: 2,
                                            dl: !1,
                                            tg: t
                                        }, w.ispage || !x.directionlockdeadzone) w.rail.drag.dl = "f";
                                    else {
                                        var n = q.width(),
                                            r = q.height(),
                                            s = w.getContentSize(),
                                            a = s.h - r,
                                            l = s.w - n;
                                        w.rail.scrollable && !w.railh.scrollable ? w.rail.drag.ck = 0 < a && "v" : !w.rail.scrollable && w.railh.scrollable ? w.rail.drag.ck = 0 < l && "h" : w.rail.drag.ck = !1
                                    }
                                    if (x.emulatetouch && w.isiframe && S.isie) {
                                        var c = w.win.position();
                                        w.rail.drag.x += c.left, w.rail.drag.y += c.top
                                    }
                                    if (w.hasmoving = !1, w.lastmouseup = !1, w.scrollmom.reset(e.clientX, e.clientY), t && o) {
                                        if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(t.nodeName)) return S.hasmousecapture && t.setCapture(), x.emulatetouch ? (t.onclick && !t._onclick && (t._onclick = t.onclick, t.onclick = function(e) {
                                            if (w.hasmoving) return !1;
                                            t._onclick.call(this, e)
                                        }), w.cancelEvent(e)) : w.stopPropagation(e);
                                        /SUBMIT|CANCEL|BUTTON/i.test(P(t).attr("type")) && (w.preventclick = {
                                            tg: t,
                                            click: !1
                                        })
                                    }
                                }
                            }, w.ontouchend = function(e) {
                                if (!w.rail.drag) return !0;
                                if (2 == w.rail.drag.pt) {
                                    if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                                    w.rail.drag = !1;
                                    var t = "mouseup" === e.type;
                                    if (w.hasmoving && (w.scrollmom.doMomentum(), w.lastmouseup = !0, w.hideCursor(), S.hasmousecapture && O.releaseCapture(), t)) return w.cancelEvent(e)
                                } else if (1 == w.rail.drag.pt) return w.onmouseup(e)
                            };
                            var p = x.emulatetouch && w.isiframe && !S.hasmousecapture,
                                m = .3 * x.directionlockdeadzone | 0;
                            w.ontouchmove = function(e, t) {
                                if (!w.rail.drag) return !0;
                                if (e.targetTouches && x.preventmultitouchscrolling && 1 < e.targetTouches.length) return !0;
                                if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
                                if (2 != w.rail.drag.pt) return 1 == w.rail.drag.pt ? w.onmousemove(e) : void 0;
                                var o, i;
                                if ("changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), i = o = 0, p && !t) {
                                    var n = w.win.position();
                                    i = -n.left, o = -n.top
                                }
                                var r = e.clientY + o,
                                    s = r - w.rail.drag.y,
                                    a = e.clientX + i,
                                    l = a - w.rail.drag.x,
                                    c = w.rail.drag.st - s;
                                if (w.ishwscroll && x.bouncescroll) c < 0 ? c = Math.round(c / 2) : c > w.page.maxh && (c = w.page.maxh + Math.round((c - w.page.maxh) / 2));
                                else if (c < 0 ? r = c = 0 : c > w.page.maxh && (c = w.page.maxh, r = 0), 0 === r && !w.hasmoving) return w.ispage || (w.rail.drag = !1), !0;
                                var d = w.getScrollLeft();
                                if (w.railh && w.railh.scrollable && (d = w.isrtlmode ? l - w.rail.drag.sl : w.rail.drag.sl - l, w.ishwscroll && x.bouncescroll ? d < 0 ? d = Math.round(d / 2) : d > w.page.maxw && (d = w.page.maxw + Math.round((d - w.page.maxw) / 2)) : (d < 0 && (a = d = 0), d > w.page.maxw && (d = w.page.maxw, a = 0))), !w.hasmoving) {
                                    if (w.rail.drag.y === e.clientY && w.rail.drag.x === e.clientX) return w.cancelEvent(e);
                                    var u = Math.abs(s),
                                        h = Math.abs(l),
                                        f = x.directionlockdeadzone;
                                    if (w.rail.drag.ck ? "v" == w.rail.drag.ck ? f < h && u <= m ? w.rail.drag = !1 : f < u && (w.rail.drag.dl = "v") : "h" == w.rail.drag.ck && (f < u && h <= m ? w.rail.drag = !1 : f < h && (w.rail.drag.dl = "h")) : f < u && f < h ? w.rail.drag.dl = "f" : f < u ? w.rail.drag.dl = m < h ? "f" : "v" : f < h && (w.rail.drag.dl = m < u ? "f" : "h"), !w.rail.drag.dl) return w.cancelEvent(e);
                                    w.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), w.hasmoving = !0
                                }
                                return w.preventclick && !w.preventclick.click && (w.preventclick.click = w.preventclick.tg.onclick || !1, w.preventclick.tg.onclick = w.onpreventclick), w.rail.drag.dl && ("v" == w.rail.drag.dl ? d = w.rail.drag.sl : "h" == w.rail.drag.dl && (c = w.rail.drag.st)), w.synched("touchmove", function() {
                                    w.rail.drag && 2 == w.rail.drag.pt && (w.prepareTransition && w.resetTransition(), w.rail.scrollable && w.setScrollTop(c), w.scrollmom.update(a, r), w.railh && w.railh.scrollable ? (w.setScrollLeft(d), w.showCursor(c, d)) : w.showCursor(c), S.isie10 && O.selection.clear())
                                }), w.cancelEvent(e)
                            }, w.ontouchstartCursor = function(e, t) {
                                if (!w.rail.drag || 3 == w.rail.drag.pt) {
                                    if (w.locked) return w.cancelEvent(e);
                                    w.cancelScroll(), w.rail.drag = {
                                        x: e.touches[0].clientX,
                                        y: e.touches[0].clientY,
                                        sx: w.scroll.x,
                                        sy: w.scroll.y,
                                        pt: 3,
                                        hr: !!t
                                    };
                                    var o = w.getTarget(e);
                                    return !w.ispage && S.hasmousecapture && o.setCapture(), w.isiframe && !S.hasmousecapture && (w.saved.csspointerevents = w.doc.css("pointer-events"), w.css(w.doc, {
                                        "pointer-events": "none"
                                    })), w.cancelEvent(e)
                                }
                            }, w.ontouchendCursor = function(e) {
                                if (w.rail.drag) {
                                    if (S.hasmousecapture && O.releaseCapture(), w.isiframe && !S.hasmousecapture && w.doc.css("pointer-events", w.saved.csspointerevents), 3 != w.rail.drag.pt) return;
                                    return w.rail.drag = !1, w.cancelEvent(e)
                                }
                            }, w.ontouchmoveCursor = function(e) {
                                if (w.rail.drag) {
                                    if (3 != w.rail.drag.pt) return;
                                    if (w.cursorfreezed = !0, w.rail.drag.hr) {
                                        w.scroll.x = w.rail.drag.sx + (e.touches[0].clientX - w.rail.drag.x), w.scroll.x < 0 && (w.scroll.x = 0);
                                        var t = w.scrollvaluemaxw;
                                        w.scroll.x > t && (w.scroll.x = t)
                                    } else {
                                        w.scroll.y = w.rail.drag.sy + (e.touches[0].clientY - w.rail.drag.y), w.scroll.y < 0 && (w.scroll.y = 0);
                                        var o = w.scrollvaluemax;
                                        w.scroll.y > o && (w.scroll.y = o)
                                    }
                                    return w.synched("touchmove", function() {
                                        w.rail.drag && 3 == w.rail.drag.pt && (w.showCursor(), w.rail.drag.hr ? w.doScrollLeft(Math.round(w.scroll.x * w.scrollratio.x), x.cursordragspeed) : w.doScrollTop(Math.round(w.scroll.y * w.scrollratio.y), x.cursordragspeed))
                                    }), w.cancelEvent(e)
                                }
                            }
                        }
                        if (w.onmousedown = function(e, t) {
                                if (!w.rail.drag || 1 == w.rail.drag.pt) {
                                    if (w.railslocked) return w.cancelEvent(e);
                                    w.cancelScroll(), w.rail.drag = {
                                        x: e.clientX,
                                        y: e.clientY,
                                        sx: w.scroll.x,
                                        sy: w.scroll.y,
                                        pt: 1,
                                        hr: t || !1
                                    };
                                    var o = w.getTarget(e);
                                    return S.hasmousecapture && o.setCapture(), w.isiframe && !S.hasmousecapture && (w.saved.csspointerevents = w.doc.css("pointer-events"), w.css(w.doc, {
                                        "pointer-events": "none"
                                    })), w.hasmoving = !1, w.cancelEvent(e)
                                }
                            }, w.onmouseup = function(e) {
                                if (w.rail.drag) return 1 != w.rail.drag.pt || (S.hasmousecapture && O.releaseCapture(), w.isiframe && !S.hasmousecapture && w.doc.css("pointer-events", w.saved.csspointerevents), w.rail.drag = !1, w.cursorfreezed = !1, w.hasmoving && w.triggerScrollEnd(), w.cancelEvent(e))
                            }, w.onmousemove = function(e) {
                                if (w.rail.drag) {
                                    if (1 !== w.rail.drag.pt) return;
                                    if (S.ischrome && 0 === e.which) return w.onmouseup(e);
                                    if (w.cursorfreezed = !0, w.hasmoving || w.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), w.hasmoving = !0, w.rail.drag.hr) {
                                        w.scroll.x = w.rail.drag.sx + (e.clientX - w.rail.drag.x), w.scroll.x < 0 && (w.scroll.x = 0);
                                        var t = w.scrollvaluemaxw;
                                        w.scroll.x > t && (w.scroll.x = t)
                                    } else {
                                        w.scroll.y = w.rail.drag.sy + (e.clientY - w.rail.drag.y), w.scroll.y < 0 && (w.scroll.y = 0);
                                        var o = w.scrollvaluemax;
                                        w.scroll.y > o && (w.scroll.y = o)
                                    }
                                    return w.synched("mousemove", function() {
                                        w.cursorfreezed && (w.showCursor(), w.rail.drag.hr ? w.scrollLeft(Math.round(w.scroll.x * w.scrollratio.x)) : w.scrollTop(Math.round(w.scroll.y * w.scrollratio.y)))
                                    }), w.cancelEvent(e)
                                }
                                w.checkarea = 0
                            }, S.cantouch || x.emulatetouch) w.onpreventclick = function(e) {
                            if (w.preventclick) return w.preventclick.tg.onclick = w.preventclick.click, w.preventclick = !1, w.cancelEvent(e)
                        }, w.onclick = !S.isios && function(e) {
                            return !w.lastmouseup || (w.lastmouseup = !1, w.cancelEvent(e))
                        }, x.grabcursorenabled && S.cursorgrabvalue && (w.css(w.ispage ? w.doc : w.win, {
                            cursor: S.cursorgrabvalue
                        }), w.css(w.rail, {
                            cursor: S.cursorgrabvalue
                        }));
                        else {
                            var h = function(e) {
                                if (w.selectiondrag) {
                                    if (e) {
                                        var t = w.win.outerHeight(),
                                            o = e.pageY - w.selectiondrag.top;
                                        0 < o && o < t && (o = 0), t <= o && (o -= t), w.selectiondrag.df = o
                                    }
                                    if (0 !== w.selectiondrag.df) {
                                        var i = -2 * w.selectiondrag.df / 6 | 0;
                                        w.doScrollBy(i), w.debounced("doselectionscroll", function() {
                                            h()
                                        }, 50)
                                    }
                                }
                            };
                            w.hasTextSelected = "getSelection" in O ? function() {
                                return 0 < O.getSelection().rangeCount
                            } : "selection" in O ? function() {
                                return "None" != O.selection.type
                            } : function() {
                                return !1
                            }, w.onselectionstart = function(e) {
                                w.ispage || (w.selectiondrag = w.win.offset())
                            }, w.onselectionend = function(e) {
                                w.selectiondrag = !1
                            }, w.onselectiondrag = function(e) {
                                w.selectiondrag && w.hasTextSelected() && w.debounced("selectionscroll", function() {
                                    h(e)
                                }, 250)
                            }
                        }
                        if (S.hasw3ctouch ? (w.css(w.ispage ? P("html") : w.win, {
                                "touch-action": "none"
                            }), w.css(w.rail, {
                                "touch-action": "none"
                            }), w.css(w.cursor, {
                                "touch-action": "none"
                            }), w.bind(w.win, "pointerdown", w.ontouchstart), w.bind(O, "pointerup", w.ontouchend), w.delegate(O, "pointermove", w.ontouchmove)) : S.hasmstouch ? (w.css(w.ispage ? P("html") : w.win, {
                                "-ms-touch-action": "none"
                            }), w.css(w.rail, {
                                "-ms-touch-action": "none"
                            }), w.css(w.cursor, {
                                "-ms-touch-action": "none"
                            }), w.bind(w.win, "MSPointerDown", w.ontouchstart), w.bind(O, "MSPointerUp", w.ontouchend), w.delegate(O, "MSPointerMove", w.ontouchmove), w.bind(w.cursor, "MSGestureHold", function(e) {
                                e.preventDefault()
                            }), w.bind(w.cursor, "contextmenu", function(e) {
                                e.preventDefault()
                            })) : S.cantouch && (w.bind(w.win, "touchstart", w.ontouchstart, !1, !0), w.bind(O, "touchend", w.ontouchend, !1, !0), w.bind(O, "touchcancel", w.ontouchend, !1, !0), w.delegate(O, "touchmove", w.ontouchmove, !1, !0)), x.emulatetouch && (w.bind(w.win, "mousedown", w.ontouchstart, !1, !0), w.bind(O, "mouseup", w.ontouchend, !1, !0), w.bind(O, "mousemove", w.ontouchmove, !1, !0)), (x.cursordragontouch || !S.cantouch && !x.emulatetouch) && (w.rail.css({
                                cursor: "default"
                            }), w.railh && w.railh.css({
                                cursor: "default"
                            }), w.jqbind(w.rail, "mouseenter", function() {
                                if (!w.ispage && !w.win.is(":visible")) return !1;
                                w.canshowonmouseevent && w.showCursor(), w.rail.active = !0
                            }), w.jqbind(w.rail, "mouseleave", function() {
                                w.rail.active = !1, w.rail.drag || w.hideCursor()
                            }), x.sensitiverail && (w.bind(w.rail, "click", function(e) {
                                w.doRailClick(e, !1, !1)
                            }), w.bind(w.rail, "dblclick", function(e) {
                                w.doRailClick(e, !0, !1)
                            }), w.bind(w.cursor, "click", function(e) {
                                w.cancelEvent(e)
                            }), w.bind(w.cursor, "dblclick", function(e) {
                                w.cancelEvent(e)
                            })), w.railh && (w.jqbind(w.railh, "mouseenter", function() {
                                if (!w.ispage && !w.win.is(":visible")) return !1;
                                w.canshowonmouseevent && w.showCursor(), w.rail.active = !0
                            }), w.jqbind(w.railh, "mouseleave", function() {
                                w.rail.active = !1, w.rail.drag || w.hideCursor()
                            }), x.sensitiverail && (w.bind(w.railh, "click", function(e) {
                                w.doRailClick(e, !1, !0)
                            }), w.bind(w.railh, "dblclick", function(e) {
                                w.doRailClick(e, !0, !0)
                            }), w.bind(w.cursorh, "click", function(e) {
                                w.cancelEvent(e)
                            }), w.bind(w.cursorh, "dblclick", function(e) {
                                w.cancelEvent(e)
                            })))), x.cursordragontouch && (this.istouchcapable || S.cantouch) && (w.bind(w.cursor, "touchstart", w.ontouchstartCursor), w.bind(w.cursor, "touchmove", w.ontouchmoveCursor), w.bind(w.cursor, "touchend", w.ontouchendCursor), w.cursorh && w.bind(w.cursorh, "touchstart", function(e) {
                                w.ontouchstartCursor(e, !0)
                            }), w.cursorh && w.bind(w.cursorh, "touchmove", w.ontouchmoveCursor), w.cursorh && w.bind(w.cursorh, "touchend", w.ontouchendCursor)), x.emulatetouch || S.isandroid || S.isios ? (w.bind(S.hasmousecapture ? w.win : O, "mouseup", w.ontouchend), w.onclick && w.bind(O, "click", w.onclick), x.cursordragontouch ? (w.bind(w.cursor, "mousedown", w.onmousedown), w.bind(w.cursor, "mouseup", w.onmouseup), w.cursorh && w.bind(w.cursorh, "mousedown", function(e) {
                                w.onmousedown(e, !0)
                            }), w.cursorh && w.bind(w.cursorh, "mouseup", w.onmouseup)) : (w.bind(w.rail, "mousedown", function(e) {
                                e.preventDefault()
                            }), w.railh && w.bind(w.railh, "mousedown", function(e) {
                                e.preventDefault()
                            }))) : (w.bind(S.hasmousecapture ? w.win : O, "mouseup", w.onmouseup), w.bind(O, "mousemove", w.onmousemove), w.onclick && w.bind(O, "click", w.onclick), w.bind(w.cursor, "mousedown", w.onmousedown), w.bind(w.cursor, "mouseup", w.onmouseup), w.railh && (w.bind(w.cursorh, "mousedown", function(e) {
                                w.onmousedown(e, !0)
                            }), w.bind(w.cursorh, "mouseup", w.onmouseup)), !w.ispage && x.enablescrollonselection && (w.bind(w.win[0], "mousedown", w.onselectionstart), w.bind(O, "mouseup", w.onselectionend), w.bind(w.cursor, "mouseup", w.onselectionend), w.cursorh && w.bind(w.cursorh, "mouseup", w.onselectionend), w.bind(O, "mousemove", w.onselectiondrag)), w.zoom && (w.jqbind(w.zoom, "mouseenter", function() {
                                w.canshowonmouseevent && w.showCursor(), w.rail.active = !0
                            }), w.jqbind(w.zoom, "mouseleave", function() {
                                w.rail.active = !1, w.rail.drag || w.hideCursor()
                            }))), x.enablemousewheel && (w.isiframe || w.mousewheel(S.isie && w.ispage ? O : w.win, w.onmousewheel), w.mousewheel(w.rail, w.onmousewheel), w.railh && w.mousewheel(w.railh, w.onmousewheelhr)), w.ispage || S.cantouch || /HTML|^BODY/.test(w.win[0].nodeName) || (w.win.attr("tabindex") || w.win.attr({
                                tabindex: ++$
                            }), w.bind(w.win, "focus", function(e) {
                                E = w.getTarget(e).id || w.getTarget(e) || !1, w.hasfocus = !0, w.canshowonmouseevent && w.noticeCursor()
                            }), w.bind(w.win, "blur", function(e) {
                                E = !1, w.hasfocus = !1
                            }), w.bind(w.win, "mouseenter", function(e) {
                                k = w.getTarget(e).id || w.getTarget(e) || !1, w.hasmousefocus = !0, w.canshowonmouseevent && w.noticeCursor()
                            }), w.bind(w.win, "mouseleave", function(e) {
                                k = !1, w.hasmousefocus = !1, w.rail.drag || w.hideCursor()
                            })), w.onkeypress = function(e) {
                                if (w.railslocked && 0 === w.page.maxh) return !0;
                                e = e || z.event;
                                var t = w.getTarget(e);
                                if (t && /INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName) && (!(t.getAttribute("type") || t.type || !1) || !/submit|button|cancel/i.tp)) return !0;
                                if (P(t).attr("contenteditable")) return !0;
                                if (w.hasfocus || w.hasmousefocus && !E || w.ispage && !E && !k) {
                                    var o = e.keyCode;
                                    if (w.railslocked && 27 != o) return w.cancelEvent(e);
                                    var i = e.ctrlKey || !1,
                                        n = e.shiftKey || !1,
                                        r = !1;
                                    switch (o) {
                                        case 38:
                                        case 63233:
                                            w.doScrollBy(72), r = !0;
                                            break;
                                        case 40:
                                        case 63235:
                                            w.doScrollBy(-72), r = !0;
                                            break;
                                        case 37:
                                        case 63232:
                                            w.railh && (i ? w.doScrollLeft(0) : w.doScrollLeftBy(72), r = !0);
                                            break;
                                        case 39:
                                        case 63234:
                                            w.railh && (i ? w.doScrollLeft(w.page.maxw) : w.doScrollLeftBy(-72), r = !0);
                                            break;
                                        case 33:
                                        case 63276:
                                            w.doScrollBy(w.view.h), r = !0;
                                            break;
                                        case 34:
                                        case 63277:
                                            w.doScrollBy(-w.view.h), r = !0;
                                            break;
                                        case 36:
                                        case 63273:
                                            w.railh && i ? w.doScrollPos(0, 0) : w.doScrollTo(0), r = !0;
                                            break;
                                        case 35:
                                        case 63275:
                                            w.railh && i ? w.doScrollPos(w.page.maxw, w.page.maxh) : w.doScrollTo(w.page.maxh), r = !0;
                                            break;
                                        case 32:
                                            x.spacebarenabled && (n ? w.doScrollBy(w.view.h) : w.doScrollBy(-w.view.h), r = !0);
                                            break;
                                        case 27:
                                            w.zoomactive && (w.doZoom(), r = !0)
                                    }
                                    if (r) return w.cancelEvent(e)
                                }
                            }, x.enablekeyboard && w.bind(O, S.isopera && !S.isopera12 ? "keypress" : "keydown", w.onkeypress), w.bind(O, "keydown", function(e) {
                                (e.ctrlKey || !1) && (w.wheelprevented = !0)
                            }), w.bind(O, "keyup", function(e) {
                                e.ctrlKey || !1 || (w.wheelprevented = !1)
                            }), w.bind(z, "blur", function(e) {
                                w.wheelprevented = !1
                            }), w.bind(z, "resize", w.onscreenresize), w.bind(z, "orientationchange", w.onscreenresize), w.bind(z, "load", w.lazyResize), S.ischrome && !w.ispage && !w.haswrapper) {
                            var f = w.win.attr("style"),
                                v = parseFloat(w.win.css("width")) + 1;
                            w.win.css("width", v), w.synched("chromefix", function() {
                                w.win.attr("style", f)
                            })
                        }
                        if (w.onAttributeChange = function(e) {
                                w.lazyResize(w.isieold ? 250 : 30)
                            }, x.enableobserver && (w.isie11 || !1 === N || (w.observerbody = new N(function(e) {
                                if (e.forEach(function(e) {
                                        if ("attributes" == e.type) return b.hasClass("modal-open") && b.hasClass("modal-dialog") && !P.contains(P(".modal-dialog")[0], w.doc[0]) ? w.hide() : w.show()
                                    }), w.me.clientWidth != w.page.width || w.me.clientHeight != w.page.height) return w.lazyResize(30)
                            }), w.observerbody.observe(O.body, {
                                childList: !0,
                                subtree: !0,
                                characterData: !1,
                                attributes: !0,
                                attributeFilter: ["class"]
                            })), !w.ispage && !w.haswrapper)) {
                            var g = w.win[0];
                            !1 !== N ? (w.observer = new N(function(e) {
                                e.forEach(w.onAttributeChange)
                            }), w.observer.observe(g, {
                                childList: !0,
                                characterData: !1,
                                attributes: !0,
                                subtree: !1
                            }), w.observerremover = new N(function(e) {
                                e.forEach(function(e) {
                                    if (0 < e.removedNodes.length)
                                        for (var t in e.removedNodes)
                                            if (w && e.removedNodes[t] === g) return w.remove()
                                })
                            }), w.observerremover.observe(g.parentNode, {
                                childList: !0,
                                characterData: !1,
                                attributes: !1,
                                subtree: !1
                            })) : (w.bind(g, S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified", w.onAttributeChange), S.isie9 && g.attachEvent("onpropertychange", w.onAttributeChange), w.bind(g, "DOMNodeRemoved", function(e) {
                                e.target === g && w.remove()
                            }))
                        }!w.ispage && x.boxzoom && w.bind(z, "resize", w.resizeZoom), w.istextarea && (w.bind(w.win, "keydown", w.lazyResize), w.bind(w.win, "mouseup", w.lazyResize)), w.lazyResize(30)
                    }
                    if ("IFRAME" == this.doc[0].nodeName) {
                        var y = function() {
                            var t;
                            w.iframexd = !1;
                            try {
                                (t = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain
                            } catch (e) {
                                t = !(w.iframexd = !0)
                            }
                            if (w.iframexd) return "console" in z && console.log("NiceScroll error: policy restriced iframe"), !0;
                            if (w.forcescreen = !0, w.isiframe && (w.iframe = {
                                    doc: P(t),
                                    html: w.doc.contents().find("html")[0],
                                    body: w.doc.contents().find("body")[0]
                                }, w.getContentSize = function() {
                                    return {
                                        w: Math.max(w.iframe.html.scrollWidth, w.iframe.body.scrollWidth),
                                        h: Math.max(w.iframe.html.scrollHeight, w.iframe.body.scrollHeight)
                                    }
                                }, w.docscroll = P(w.iframe.body)), !S.isios && x.iframeautoresize && !w.isiframe) {
                                w.win.scrollTop(0), w.doc.height("");
                                var e = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight);
                                w.doc.height(e)
                            }
                            w.lazyResize(30), w.css(P(w.iframe.body), o), S.isios && w.haswrapper && w.css(P(t.body), {
                                "-webkit-transform": "translate3d(0,0,0)"
                            }), "contentWindow" in this ? w.bind(this.contentWindow, "scroll", w.onscroll) : w.bind(t, "scroll", w.onscroll), x.enablemousewheel && w.mousewheel(t, w.onmousewheel), x.enablekeyboard && w.bind(t, S.isopera ? "keypress" : "keydown", w.onkeypress), S.cantouch ? (w.bind(t, "touchstart", w.ontouchstart), w.bind(t, "touchmove", w.ontouchmove)) : x.emulatetouch && (w.bind(t, "mousedown", w.ontouchstart), w.bind(t, "mousemove", function(e) {
                                return w.ontouchmove(e, !0)
                            }), x.grabcursorenabled && S.cursorgrabvalue && w.css(P(t.body), {
                                cursor: S.cursorgrabvalue
                            })), w.bind(t, "mouseup", w.ontouchend), w.zoom && (x.dblclickzoom && w.bind(t, "dblclick", w.doZoom), w.ongesturezoom && w.bind(t, "gestureend", w.ongesturezoom))
                        };
                        this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function() {
                            y.call(w.doc[0], !1)
                        }, 250), w.bind(this.doc, "load", y)
                    }
                }, this.showCursor = function(e, t) {
                    if (w.cursortimeout && (clearTimeout(w.cursortimeout), w.cursortimeout = 0), w.rail) {
                        if (w.autohidedom && (w.autohidedom.stop().css({
                                opacity: x.cursoropacitymax
                            }), w.cursoractive = !0), w.rail.drag && 1 == w.rail.drag.pt || (void 0 !== e && !1 !== e && (w.scroll.y = e / w.scrollratio.y | 0), void 0 !== t && (w.scroll.x = t / w.scrollratio.x | 0)), w.cursor.css({
                                height: w.cursorheight,
                                top: w.scroll.y
                            }), w.cursorh) {
                            var o = w.hasreversehr ? w.scrollvaluemaxw - w.scroll.x : w.scroll.x;
                            w.cursorh.css({
                                width: w.cursorwidth,
                                left: !w.rail.align && w.rail.visibility ? o + w.rail.width : o
                            }), w.cursoractive = !0
                        }
                        w.zoom && w.zoom.stop().css({
                            opacity: x.cursoropacitymax
                        })
                    }
                }, this.hideCursor = function(e) {
                    w.cursortimeout || w.rail && w.autohidedom && (w.hasmousefocus && "leave" === x.autohidemode || (w.cursortimeout = setTimeout(function() {
                        w.rail.active && w.showonmouseevent || (w.autohidedom.stop().animate({
                            opacity: x.cursoropacitymin
                        }), w.zoom && w.zoom.stop().animate({
                            opacity: x.cursoropacitymin
                        }), w.cursoractive = !1), w.cursortimeout = 0
                    }, e || x.hidecursordelay)))
                }, this.noticeCursor = function(e, t, o) {
                    w.showCursor(t, o), w.rail.active || w.hideCursor(e)
                }, this.getContentSize = w.ispage ? function() {
                    return {
                        w: Math.max(O.body.scrollWidth, O.documentElement.scrollWidth),
                        h: Math.max(O.body.scrollHeight, O.documentElement.scrollHeight)
                    }
                } : w.haswrapper ? function() {
                    return {
                        w: w.doc[0].offsetWidth,
                        h: w.doc[0].offsetHeight
                    }
                } : function() {
                    return {
                        w: w.docscroll[0].scrollWidth,
                        h: w.docscroll[0].scrollHeight
                    }
                }, this.onResize = function(e, t) {
                    if (!w || !w.win) return !1;
                    var o = w.page.maxh,
                        i = w.page.maxw,
                        n = w.view.h,
                        r = w.view.w;
                    if (w.view = {
                            w: w.ispage ? w.win.width() : w.win[0].clientWidth,
                            h: w.ispage ? w.win.height() : w.win[0].clientHeight
                        }, w.page = t || w.getContentSize(), w.page.maxh = Math.max(0, w.page.h - w.view.h), w.page.maxw = Math.max(0, w.page.w - w.view.w), w.page.maxh == o && w.page.maxw == i && w.view.w == r && w.view.h == n) {
                        if (w.ispage) return w;
                        var s = w.win.offset();
                        if (w.lastposition) {
                            var a = w.lastposition;
                            if (a.top == s.top && a.left == s.left) return w
                        }
                        w.lastposition = s
                    }
                    return 0 === w.page.maxh ? (w.hideRail(), w.scrollvaluemax = 0, w.scroll.y = 0, w.scrollratio.y = 0, w.cursorheight = 0, w.setScrollTop(0), w.rail && (w.rail.scrollable = !1)) : (w.page.maxh -= x.railpadding.top + x.railpadding.bottom, w.rail.scrollable = !0), 0 === w.page.maxw ? (w.hideRailHr(), w.scrollvaluemaxw = 0, w.scroll.x = 0, w.scrollratio.x = 0, w.cursorwidth = 0, w.setScrollLeft(0), w.railh && (w.railh.scrollable = !1)) : (w.page.maxw -= x.railpadding.left + x.railpadding.right, w.railh && (w.railh.scrollable = x.horizrailenabled)), w.railslocked = w.locked || 0 === w.page.maxh && 0 === w.page.maxw, w.railslocked ? (w.ispage || w.updateScrollBar(w.view), !1) : (w.hidden || (w.rail.visibility || w.showRail(), w.railh && !w.railh.visibility && w.showRailHr()), w.istextarea && w.win.css("resize") && "none" != w.win.css("resize") && (w.view.h -= 20), w.cursorheight = Math.min(w.view.h, Math.round(w.view.h * (w.view.h / w.page.h))), w.cursorheight = x.cursorfixedheight ? x.cursorfixedheight : Math.max(x.cursorminheight, w.cursorheight), w.cursorwidth = Math.min(w.view.w, Math.round(w.view.w * (w.view.w / w.page.w))), w.cursorwidth = x.cursorfixedheight ? x.cursorfixedheight : Math.max(x.cursorminheight, w.cursorwidth), w.scrollvaluemax = w.view.h - w.cursorheight - (x.railpadding.top + x.railpadding.bottom), w.hasborderbox || (w.scrollvaluemax -= w.cursor[0].offsetHeight - w.cursor[0].clientHeight), w.railh && (w.railh.width = 0 < w.page.maxh ? w.rail.width : w.view.w, w.scrollvaluemaxw = w.railh.width - w.cursorwidth - (x.railpadding.left + x.railpadding.right)), w.ispage || w.updateScrollBar(w.view), w.scrollratio = {
                        x: w.page.maxw / w.scrollvaluemaxw,
                        y: w.page.maxh / w.scrollvaluemax
                    }, w.getScrollTop() > w.page.maxh ? w.doScrollTop(w.page.maxh) : (w.scroll.y = w.getScrollTop() / w.scrollratio.y | 0, w.scroll.x = w.getScrollLeft() / w.scrollratio.x | 0, w.cursoractive && w.noticeCursor()), w.scroll.y && 0 === w.getScrollTop() && w.doScrollTo(w.scroll.y * w.scrollratio.y | 0), w)
                }, this.resize = w.onResize;
                var c = 0;

                function u(o, i, n, e) {
                    w._bind(o, i, function(e) {
                        var t = {
                            original: e = e || z.event,
                            target: e.target || e.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function() {
                                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                            },
                            stopImmediatePropagation: function() {
                                e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.cancelBubble = !0
                            }
                        };
                        return "mousewheel" == i ? (e.wheelDeltaX && (t.deltaX = -.025 * e.wheelDeltaX), e.wheelDeltaY && (t.deltaY = -.025 * e.wheelDeltaY), !t.deltaY && !t.deltaX && (t.deltaY = -.025 * e.wheelDelta)) : t.deltaY = e.detail, n.call(o, t)
                    }, e)
                }
                this.onscreenresize = function(e) {
                    clearTimeout(c);
                    var t = !w.ispage && !w.haswrapper;
                    t && w.hideRails(), c = setTimeout(function() {
                        w && (t && w.showRails(), w.resize()), c = 0
                    }, 120)
                }, this.lazyResize = function(e) {
                    return clearTimeout(c), e = isNaN(e) ? 240 : e, c = setTimeout(function() {
                        w && w.resize(), c = 0
                    }, e), w
                }, this.jqbind = function(e, t, o) {
                    w.events.push({
                        e: e,
                        n: t,
                        f: o,
                        q: !0
                    }), P(e).on(t, o)
                };
                var h = !(this.mousewheel = function(e, t, o) {
                    var i = "jquery" in e ? e[0] : e;
                    if ("onwheel" in O.createElement("div")) w._bind(i, "wheel", t, o || !1);
                    else {
                        var n = void 0 !== O.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        u(i, n, t, o || !1), "DOMMouseScroll" == n && u(i, "MozMousePixelScroll", t, o || !1)
                    }
                });
                if (S.haseventlistener) {
                    try {
                        var f = Object.defineProperty({}, "passive", {
                            get: function() {
                                h = !0
                            }
                        });
                        z.addEventListener("test", null, f)
                    } catch (e) {}
                    this.stopPropagation = function(e) {
                        return e && (e = e.original ? e.original : e).stopPropagation(), !1
                    }, this.cancelEvent = function(e) {
                        return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
                    }
                } else Event.prototype.preventDefault = function() {
                    this.returnValue = !1
                }, Event.prototype.stopPropagation = function() {
                    this.cancelBubble = !0
                }, z.constructor.prototype.addEventListener = O.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(e, t, o) {
                    this.attachEvent("on" + e, t)
                }, z.constructor.prototype.removeEventListener = O.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(e, t, o) {
                    this.detachEvent("on" + e, t)
                }, this.cancelEvent = function(e) {
                    return (e = e || z.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
                }, this.stopPropagation = function(e) {
                    return (e = e || z.event) && (e.cancelBubble = !0), !1
                };
                this.delegate = function(e, t, o, i, n) {
                    var r = D[t] || !1;
                    r || (r = {
                        a: [],
                        l: [],
                        f: function(e) {
                            for (var t = r.l, o = !1, i = t.length - 1; 0 <= i; i--)
                                if (!1 === (o = t[i].call(e.target, e))) return !1;
                            return o
                        }
                    }, w.bind(e, t, r.f, i, n), D[t] = r), w.ispage ? (r.a = [w.id].concat(r.a), r.l = [o].concat(r.l)) : (r.a.push(w.id), r.l.push(o))
                }, this.undelegate = function(e, t, o, i, n) {
                    var r = D[t] || !1;
                    if (r && r.l)
                        for (var s = 0, a = r.l.length; s < a; s++) r.a[s] === w.id && (r.a.splice(s), r.l.splice(s), 0 === r.a.length && (w._unbind(e, t, r.l.f), D[t] = null))
                }, this.bind = function(e, t, o, i, n) {
                    var r = "jquery" in e ? e[0] : e;
                    w._bind(r, t, o, i || !1, n || !1)
                }, this._bind = function(e, t, o, i, n) {
                    w.events.push({
                        e: e,
                        n: t,
                        f: o,
                        b: i,
                        q: !1
                    }), h && n ? e.addEventListener(t, o, {
                        passive: !1,
                        capture: i
                    }) : e.addEventListener(t, o, i || !1)
                }, this._unbind = function(e, t, o, i) {
                    D[t] ? w.undelegate(e, t, o, i) : e.removeEventListener(t, o, i)
                }, this.unbindAll = function() {
                    for (var e = 0; e < w.events.length; e++) {
                        var t = w.events[e];
                        t.q ? t.e.unbind(t.n, t.f) : w._unbind(t.e, t.n, t.f, t.b)
                    }
                }, this.showRails = function() {
                    return w.showRail().showRailHr()
                }, this.showRail = function() {
                    return 0 === w.page.maxh || !w.ispage && "none" == w.win.css("display") || (w.rail.visibility = !0, w.rail.css("display", "block"), w.rail.addClass("visible")), w
                }, this.showRailHr = function() {
                    return w.railh && (0 === w.page.maxw || !w.ispage && "none" == w.win.css("display") || (w.railh.visibility = !0, w.railh.css("display", "block"), w.railh.addClass("visible"))), w
                }, this.hideRails = function() {
                    return w.hideRail().hideRailHr()
                }, this.hideRail = function() {
                    return w.rail.visibility = !1, w.rail.css("display", "none"), w.rail.removeClass("visible"), w
                }, this.hideRailHr = function() {
                    return w.railh && (w.railh.visibility = !1, w.railh.css("display", "none"), w.railh.removeClass("visible")), w
                }, this.show = function() {
                    return w.hidden = !1, w.railslocked = !1, w.showRails()
                }, this.hide = function() {
                    return w.hidden = !0, w.railslocked = !0, w.hideRails()
                }, this.toggle = function() {
                    return w.hidden ? w.show() : w.hide()
                }, this.remove = function() {
                    for (var e in w.stop(), w.cursortimeout && clearTimeout(w.cursortimeout), w.delaylist) w.delaylist[e] && B(w.delaylist[e].h);
                    w.doZoomOut(), w.unbindAll(), S.isie9 && w.win[0].detachEvent("onpropertychange", w.onAttributeChange), !1 !== w.observer && w.observer.disconnect(), !1 !== w.observerremover && w.observerremover.disconnect(), !1 !== w.observerbody && w.observerbody.disconnect(), w.events = null, w.cursor && w.cursor.remove(), w.cursorh && w.cursorh.remove(), w.rail && w.rail.remove(), w.railh && w.railh.remove(), w.zoom && w.zoom.remove();
                    for (var t = 0; t < w.saved.css.length; t++) {
                        var o = w.saved.css[t];
                        o[0].css(o[1], void 0 === o[2] ? "" : o[2])
                    }
                    w.saved = !1, w.me.data("__nicescroll", "");
                    var i = P.nicescroll;
                    for (var n in i.each(function(e) {
                            if (this && this.id === w.id) {
                                delete i[e];
                                for (var t = ++e; t < i.length; t++, e++) i[e] = i[t];
                                i.length--, i.length && delete i[i.length]
                            }
                        }), w) w[n] = null, delete w[n];
                    w = null
                }, this.scrollstart = function(e) {
                    return this.onscrollstart = e, w
                }, this.scrollend = function(e) {
                    return this.onscrollend = e, w
                }, this.scrollcancel = function(e) {
                    return this.onscrollcancel = e, w
                }, this.zoomin = function(e) {
                    return this.onzoomin = e, w
                }, this.zoomout = function(e) {
                    return this.onzoomout = e, w
                }, this.isScrollable = function(e) {
                    var t = e.target ? e.target : e;
                    if ("OPTION" == t.nodeName) return !0;
                    for (; t && 1 == t.nodeType && t !== this.me[0] && !/^BODY|HTML/.test(t.nodeName);) {
                        var o = P(t),
                            i = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
                        if (/scroll|auto/.test(i)) return t.clientHeight != t.scrollHeight;
                        t = !!t.parentNode && t.parentNode
                    }
                    return !1
                }, this.getViewport = function(e) {
                    for (var t = !(!e || !e.parentNode) && e.parentNode; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName);) {
                        var o = P(t);
                        if (/fixed|absolute/.test(o.css("position"))) return o;
                        var i = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
                        if (/scroll|auto/.test(i) && t.clientHeight != t.scrollHeight) return o;
                        if (0 < o.getNiceScroll().length) return o;
                        t = !!t.parentNode && t.parentNode
                    }
                    return !1
                }, this.triggerScrollStart = function(e, t, o, i, n) {
                    if (w.onscrollstart) {
                        var r = {
                            type: "scrollstart",
                            current: {
                                x: e,
                                y: t
                            },
                            request: {
                                x: o,
                                y: i
                            },
                            end: {
                                x: w.newscrollx,
                                y: w.newscrolly
                            },
                            speed: n
                        };
                        w.onscrollstart.call(w, r)
                    }
                }, this.triggerScrollEnd = function() {
                    if (w.onscrollend) {
                        var e = w.getScrollLeft(),
                            t = w.getScrollTop(),
                            o = {
                                type: "scrollend",
                                current: {
                                    x: e,
                                    y: t
                                },
                                end: {
                                    x: e,
                                    y: t
                                }
                            };
                        w.onscrollend.call(w, o)
                    }
                };
                var p = 0,
                    m = 0,
                    v = 0,
                    g = 1;

                function y(e, t, o, i) {
                    w.scrollrunning || (w.newscrolly = w.getScrollTop(), w.newscrollx = w.getScrollLeft(), v = H());
                    var n = H() - v;
                    if (v = H(), 350 < n ? g = 1 : g += (2 - g) / 10, t = t * g | 0, e = e * g | 0) {
                        if (i)
                            if (e < 0) {
                                if (w.getScrollLeft() >= w.page.maxw) return !0
                            } else if (w.getScrollLeft() <= 0) return !0;
                        var r = 0 < e ? 1 : -1;
                        m !== r && (w.scrollmom && w.scrollmom.stop(), w.newscrollx = w.getScrollLeft(), m = r), w.lastdeltax -= e
                    }
                    if (t) {
                        if (function() {
                                var e = w.getScrollTop();
                                if (t < 0) {
                                    if (e >= w.page.maxh) return !0
                                } else if (e <= 0) return !0
                            }()) {
                            if (x.nativeparentscrolling && o && !w.ispage && !w.zoomactive) return !0;
                            var s = w.view.h >> 1;
                            t = w.newscrolly < -s ? (w.newscrolly = -s, -1) : w.newscrolly > w.page.maxh + s ? (w.newscrolly = w.page.maxh + s, 1) : 0
                        }
                        var a = 0 < t ? 1 : -1;
                        p !== a && (w.scrollmom && w.scrollmom.stop(), w.newscrolly = w.getScrollTop(), p = a), w.lastdeltay -= t
                    }(t || e) && w.synched("relativexy", function() {
                        var e = w.lastdeltay + w.newscrolly;
                        w.lastdeltay = 0;
                        var t = w.lastdeltax + w.newscrollx;
                        w.lastdeltax = 0, w.rail.drag || w.doScrollPos(t, e)
                    })
                }
                var L = !1;

                function T(e, t, o) {
                    var i, n;
                    if (!o && L) return !0;
                    (0 === e.deltaMode ? (i = -e.deltaX * (x.mousescrollstep / 54) | 0, n = -e.deltaY * (x.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (i = -e.deltaX * x.mousescrollstep * 50 / 80 | 0, n = -e.deltaY * x.mousescrollstep * 50 / 80 | 0), t && x.oneaxismousemode && 0 === i && n) && (i = n, n = 0, o && (i < 0 ? w.getScrollLeft() >= w.page.maxw : w.getScrollLeft() <= 0) && (n = i, i = 0));
                    if (w.isrtlmode && (i = -i), !y(i, n, o, !0)) return L = !1, e.stopImmediatePropagation(), e.preventDefault();
                    o && (L = !0)
                }
                if (this.onmousewheel = function(e) {
                        if (w.wheelprevented || w.locked) return !1;
                        if (w.railslocked) return w.debounced("checkunlock", w.resize, 250), !1;
                        if (w.rail.drag) return w.cancelEvent(e);
                        if ("auto" === x.oneaxismousemode && 0 !== e.deltaX && (x.oneaxismousemode = !1), x.oneaxismousemode && 0 === e.deltaX && !w.rail.scrollable) return !w.railh || !w.railh.scrollable || w.onmousewheelhr(e);
                        var t = H(),
                            o = !1;
                        if (x.preservenativescrolling && w.checkarea + 600 < t && (w.nativescrollingarea = w.isScrollable(e), o = !0), w.checkarea = t, w.nativescrollingarea) return !0;
                        var i = T(e, !1, o);
                        return i && (w.checkarea = 0), i
                    }, this.onmousewheelhr = function(e) {
                        if (!w.wheelprevented) {
                            if (w.railslocked || !w.railh.scrollable) return !0;
                            if (w.rail.drag) return w.cancelEvent(e);
                            var t = H(),
                                o = !1;
                            return x.preservenativescrolling && w.checkarea + 600 < t && (w.nativescrollingarea = w.isScrollable(e), o = !0), w.checkarea = t, !!w.nativescrollingarea || (w.railslocked ? w.cancelEvent(e) : T(e, !0, o))
                        }
                    }, this.stop = function() {
                        return w.cancelScroll(), w.scrollmon && w.scrollmon.stop(), w.cursorfreezed = !1, w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)), w.noticeCursor(), w
                    }, this.getTransitionSpeed = function(e) {
                        return 80 + e / 72 * x.scrollspeed | 0
                    }, x.smoothscroll)
                    if (w.ishwscroll && S.hastransition && x.usetransition && x.smoothscroll) {
                        var C = "";
                        this.resetTransition = function() {
                            C = "", w.doc.css(S.prefixstyle + "transition-duration", "0ms")
                        }, this.prepareTransition = function(e, t) {
                            var o = t ? e : w.getTransitionSpeed(e),
                                i = o + "ms";
                            return C !== i && (C = i, w.doc.css(S.prefixstyle + "transition-duration", i)), o
                        }, this.doScrollLeft = function(e, t) {
                            var o = w.scrollrunning ? w.newscrolly : w.getScrollTop();
                            w.doScrollPos(e, o, t)
                        }, this.doScrollTop = function(e, t) {
                            var o = w.scrollrunning ? w.newscrollx : w.getScrollLeft();
                            w.doScrollPos(o, e, t)
                        }, this.cursorupdate = {
                            running: !1,
                            start: function() {
                                var e = this;
                                if (!e.running) {
                                    e.running = !0;
                                    var t = function() {
                                        e.running && I(t), w.showCursor(w.getScrollTop(), w.getScrollLeft()), w.notifyScrollEvent(w.win[0])
                                    };
                                    I(t)
                                }
                            },
                            stop: function() {
                                this.running = !1
                            }
                        }, this.doScrollPos = function(e, t, o) {
                            var i = w.getScrollTop(),
                                n = w.getScrollLeft();
                            if (((w.newscrolly - i) * (t - i) < 0 || (w.newscrollx - n) * (e - n) < 0) && w.cancelScroll(), x.bouncescroll ? (t < 0 ? t = t / 2 | 0 : t > w.page.maxh && (t = w.page.maxh + (t - w.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > w.page.maxw && (e = w.page.maxw + (e - w.page.maxw) / 2 | 0)) : (t < 0 ? t = 0 : t > w.page.maxh && (t = w.page.maxh), e < 0 ? e = 0 : e > w.page.maxw && (e = w.page.maxw)), w.scrollrunning && e == w.newscrollx && t == w.newscrolly) return !1;
                            w.newscrolly = t, w.newscrollx = e;
                            var r = w.getScrollTop(),
                                s = w.getScrollLeft(),
                                a = {};
                            a.x = e - s, a.y = t - r;
                            var l = 0 | Math.sqrt(a.x * a.x + a.y * a.y),
                                c = w.prepareTransition(l);
                            w.scrollrunning || (w.scrollrunning = !0, w.triggerScrollStart(s, r, e, t, c), w.cursorupdate.start()), w.scrollendtrapped = !0, S.transitionend || (w.scrollendtrapped && clearTimeout(w.scrollendtrapped), w.scrollendtrapped = setTimeout(w.onScrollTransitionEnd, c)), w.setScrollTop(w.newscrolly), w.setScrollLeft(w.newscrollx)
                        }, this.cancelScroll = function() {
                            if (!w.scrollendtrapped) return !0;
                            var e = w.getScrollTop(),
                                t = w.getScrollLeft();
                            return w.scrollrunning = !1, S.transitionend || clearTimeout(S.transitionend), w.scrollendtrapped = !1, w.resetTransition(), w.setScrollTop(e), w.railh && w.setScrollLeft(t), w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm), w.timerscroll = !1, w.cursorfreezed = !1, w.cursorupdate.stop(), w.showCursor(e, t), w
                        }, this.onScrollTransitionEnd = function() {
                            if (w.scrollendtrapped) {
                                var e = w.getScrollTop(),
                                    t = w.getScrollLeft();
                                if (e < 0 ? e = 0 : e > w.page.maxh && (e = w.page.maxh), t < 0 ? t = 0 : t > w.page.maxw && (t = w.page.maxw), e != w.newscrolly || t != w.newscrollx) return w.doScrollPos(t, e, x.snapbackspeed);
                                w.scrollrunning && w.triggerScrollEnd(), w.scrollrunning = !1, w.scrollendtrapped = !1, w.resetTransition(), w.timerscroll = !1, w.setScrollTop(e), w.railh && w.setScrollLeft(t), w.cursorupdate.stop(), w.noticeCursor(!1, e, t), w.cursorfreezed = !1
                            }
                        }
                    } else this.doScrollLeft = function(e, t) {
                        var o = w.scrollrunning ? w.newscrolly : w.getScrollTop();
                        w.doScrollPos(e, o, t)
                    }, this.doScrollTop = function(e, t) {
                        var o = w.scrollrunning ? w.newscrollx : w.getScrollLeft();
                        w.doScrollPos(o, e, t)
                    }, this.doScrollPos = function(e, t, o) {
                        var i = w.getScrollTop(),
                            n = w.getScrollLeft();
                        ((w.newscrolly - i) * (t - i) < 0 || (w.newscrollx - n) * (e - n) < 0) && w.cancelScroll();
                        var r = !1;
                        if (w.bouncescroll && w.rail.visibility || (t < 0 ? r = !(t = 0) : t > w.page.maxh && (t = w.page.maxh, r = !0)), w.bouncescroll && w.railh.visibility || (e < 0 ? r = !(e = 0) : e > w.page.maxw && (e = w.page.maxw, r = !0)), w.scrollrunning && w.newscrolly === t && w.newscrollx === e) return !0;
                        w.newscrolly = t, w.newscrollx = e, w.dst = {}, w.dst.x = e - n, w.dst.y = t - i, w.dst.px = n, w.dst.py = i;
                        var s = 0 | Math.sqrt(w.dst.x * w.dst.x + w.dst.y * w.dst.y),
                            a = w.getTransitionSpeed(s);
                        w.bzscroll = {};
                        var l = r ? 1 : .58;
                        w.bzscroll.x = new d(n, w.newscrollx, a, 0, 0, l, 1), w.bzscroll.y = new d(i, w.newscrolly, a, 0, 0, l, 1);
                        H();
                        var c = function() {
                            if (w.scrollrunning) {
                                var e = w.bzscroll.y.getPos();
                                w.setScrollLeft(w.bzscroll.x.getNow()), w.setScrollTop(w.bzscroll.y.getNow()), e <= 1 ? w.timer = I(c) : (w.scrollrunning = !1, w.timer = 0, w.triggerScrollEnd())
                            }
                        };
                        w.scrollrunning || (w.triggerScrollStart(n, i, e, t, a), w.scrollrunning = !0, w.timer = I(c))
                    }, this.cancelScroll = function() {
                        return w.timer && B(w.timer), w.timer = 0, w.bzscroll = !1, w.scrollrunning = !1, w
                    };
                else this.doScrollLeft = function(e, t) {
                    var o = w.getScrollTop();
                    w.doScrollPos(e, o, t)
                }, this.doScrollTop = function(e, t) {
                    var o = w.getScrollLeft();
                    w.doScrollPos(o, e, t)
                }, this.doScrollPos = function(e, t, o) {
                    var i = e > w.page.maxw ? w.page.maxw : e;
                    i < 0 && (i = 0);
                    var n = t > w.page.maxh ? w.page.maxh : t;
                    n < 0 && (n = 0), w.synched("scroll", function() {
                        w.setScrollTop(n), w.setScrollLeft(i)
                    })
                }, this.cancelScroll = function() {};
                this.doScrollBy = function(e, t) {
                    y(0, e)
                }, this.doScrollLeftBy = function(e, t) {
                    y(e, 0)
                }, this.doScrollTo = function(e, t) {
                    var o = t ? Math.round(e * w.scrollratio.y) : e;
                    o < 0 ? o = 0 : o > w.page.maxh && (o = w.page.maxh), w.cursorfreezed = !1, w.doScrollTop(e)
                }, this.checkContentSize = function() {
                    var e = w.getContentSize();
                    e.h == w.page.h && e.w == w.page.w || w.resize(!1, e)
                }, w.onscroll = function(e) {
                    w.rail.drag || w.cursorfreezed || w.synched("scroll", function() {
                        w.scroll.y = Math.round(w.getScrollTop() / w.scrollratio.y), w.railh && (w.scroll.x = Math.round(w.getScrollLeft() / w.scrollratio.x)), w.noticeCursor()
                    })
                }, w.bind(w.docscroll, "scroll", w.onscroll), this.doZoomIn = function(e) {
                    if (!w.zoomactive) {
                        w.zoomactive = !0, w.zoomrestore = {
                            style: {}
                        };
                        var t = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                            o = w.win[0].style;
                        for (var i in t) {
                            var n = t[i];
                            w.zoomrestore.style[n] = void 0 !== o[n] ? o[n] : ""
                        }
                        w.zoomrestore.style.width = w.win.css("width"), w.zoomrestore.style.height = w.win.css("height"), w.zoomrestore.padding = {
                            w: w.win.outerWidth() - w.win.width(),
                            h: w.win.outerHeight() - w.win.height()
                        }, S.isios4 && (w.zoomrestore.scrollTop = q.scrollTop(), q.scrollTop(0)), w.win.css({
                            position: S.isios4 ? "absolute" : "fixed",
                            top: 0,
                            left: 0,
                            zIndex: M + 100,
                            margin: 0
                        });
                        var r = w.win.css("backgroundColor");
                        return ("" === r || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(r)) && w.win.css("backgroundColor", "#fff"), w.rail.css({
                            zIndex: M + 101
                        }), w.zoom.css({
                            zIndex: M + 102
                        }), w.zoom.css("backgroundPosition", "0 -18px"), w.resizeZoom(), w.onzoomin && w.onzoomin.call(w), w.cancelEvent(e)
                    }
                }, this.doZoomOut = function(e) {
                    if (w.zoomactive) return w.zoomactive = !1, w.win.css("margin", ""), w.win.css(w.zoomrestore.style), S.isios4 && q.scrollTop(w.zoomrestore.scrollTop), w.rail.css({
                        "z-index": w.zindex
                    }), w.zoom.css({
                        "z-index": w.zindex
                    }), w.zoomrestore = !1, w.zoom.css("backgroundPosition", "0 0"), w.onResize(), w.onzoomout && w.onzoomout.call(w), w.cancelEvent(e)
                }, this.doZoom = function(e) {
                    return w.zoomactive ? w.doZoomOut(e) : w.doZoomIn(e)
                }, this.resizeZoom = function() {
                    if (w.zoomactive) {
                        var e = w.getScrollTop();
                        w.win.css({
                            width: q.width() - w.zoomrestore.padding.w + "px",
                            height: q.height() - w.zoomrestore.padding.h + "px"
                        }), w.onResize(), w.setScrollTop(Math.min(w.page.maxh, e))
                    }
                }, this.init(), P.nicescroll.push(this)
            },
            F = function(e) {
                var m = this;
                this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function(e, t) {
                    m.stop(), m.steptime = 0, m.lasttime = H(), m.speedx = 0, m.speedy = 0, m.lastx = e, m.lasty = t, m.lastscrollx = -1, m.lastscrolly = -1
                }, this.update = function(e, t) {
                    var o = H();
                    m.steptime = o - m.lasttime, m.lasttime = o;
                    var i = t - m.lasty,
                        n = e - m.lastx,
                        r = m.nc.getScrollTop() + i,
                        s = m.nc.getScrollLeft() + n;
                    m.snapx = s < 0 || s > m.nc.page.maxw, m.snapy = r < 0 || r > m.nc.page.maxh, m.speedx = n, m.speedy = i, m.lastx = e, m.lasty = t
                }, this.stop = function() {
                    m.nc.unsynched("domomentum2d"), m.timer && clearTimeout(m.timer), m.timer = 0, m.lastscrollx = -1, m.lastscrolly = -1
                }, this.doSnapy = function(e, t) {
                    var o = !1;
                    t < 0 ? o = !(t = 0) : t > m.nc.page.maxh && (t = m.nc.page.maxh, o = !0), e < 0 ? o = !(e = 0) : e > m.nc.page.maxw && (e = m.nc.page.maxw, o = !0), o ? m.nc.doScrollPos(e, t, m.nc.opt.snapbackspeed) : m.nc.triggerScrollEnd()
                }, this.doMomentum = function(e) {
                    var t = H(),
                        o = e ? t + e : m.lasttime,
                        i = m.nc.getScrollLeft(),
                        n = m.nc.getScrollTop(),
                        r = m.nc.page.maxh,
                        s = m.nc.page.maxw;
                    m.speedx = 0 < s ? Math.min(60, m.speedx) : 0, m.speedy = 0 < r ? Math.min(60, m.speedy) : 0;
                    var a = o && t - o <= 60;
                    (n < 0 || r < n || i < 0 || s < i) && (a = !1);
                    var l = !(!m.speedy || !a) && m.speedy,
                        c = !(!m.speedx || !a) && m.speedx;
                    if (l || c) {
                        var d = Math.max(16, m.steptime);
                        if (50 < d) {
                            var u = d / 50;
                            m.speedx *= u, m.speedy *= u, d = 50
                        }
                        m.demulxy = 0, m.lastscrollx = m.nc.getScrollLeft(), m.chkx = m.lastscrollx, m.lastscrolly = m.nc.getScrollTop(), m.chky = m.lastscrolly;
                        var h = m.lastscrollx,
                            f = m.lastscrolly,
                            p = function() {
                                var e = 600 < H() - t ? .04 : .02;
                                m.speedx && (h = Math.floor(m.lastscrollx - m.speedx * (1 - m.demulxy)), ((m.lastscrollx = h) < 0 || s < h) && (e = .1)), m.speedy && (f = Math.floor(m.lastscrolly - m.speedy * (1 - m.demulxy)), ((m.lastscrolly = f) < 0 || r < f) && (e = .1)), m.demulxy = Math.min(1, m.demulxy + e), m.nc.synched("domomentum2d", function() {
                                    if (m.speedx) {
                                        m.nc.getScrollLeft();
                                        m.chkx = h, m.nc.setScrollLeft(h)
                                    }
                                    if (m.speedy) {
                                        m.nc.getScrollTop();
                                        m.chky = f, m.nc.setScrollTop(f)
                                    }
                                    m.timer || (m.nc.hideCursor(), m.doSnapy(h, f))
                                }), m.demulxy < 1 ? m.timer = setTimeout(p, d) : (m.stop(), m.nc.hideCursor(), m.doSnapy(h, f))
                            };
                        p()
                    } else m.doSnapy(m.nc.getScrollLeft(), m.nc.getScrollTop())
                }
            },
            n = e.fn.scrollTop;
        e.cssHooks.pageYOffset = {
            get: function(e, t, o) {
                var i = P.data(e, "__nicescroll") || !1;
                return i && i.ishwscroll ? i.getScrollTop() : n.call(e)
            },
            set: function(e, t) {
                var o = P.data(e, "__nicescroll") || !1;
                return o && o.ishwscroll ? o.setScrollTop(parseInt(t)) : n.call(e, t), this
            }
        }, e.fn.scrollTop = function(t) {
            if (void 0 !== t) return this.each(function() {
                var e = P.data(this, "__nicescroll") || !1;
                e && e.ishwscroll ? e.setScrollTop(parseInt(t)) : n.call(P(this), t)
            });
            var e = this[0] && P.data(this[0], "__nicescroll") || !1;
            return e && e.ishwscroll ? e.getScrollTop() : n.call(this)
        };
        var s = e.fn.scrollLeft;
        P.cssHooks.pageXOffset = {
            get: function(e, t, o) {
                var i = P.data(e, "__nicescroll") || !1;
                return i && i.ishwscroll ? i.getScrollLeft() : s.call(e)
            },
            set: function(e, t) {
                var o = P.data(e, "__nicescroll") || !1;
                return o && o.ishwscroll ? o.setScrollLeft(parseInt(t)) : s.call(e, t), this
            }
        }, e.fn.scrollLeft = function(t) {
            if (void 0 !== t) return this.each(function() {
                var e = P.data(this, "__nicescroll") || !1;
                e && e.ishwscroll ? e.setScrollLeft(parseInt(t)) : s.call(P(this), t)
            });
            var e = this[0] && P.data(this[0], "__nicescroll") || !1;
            return e && e.ishwscroll ? e.getScrollLeft() : s.call(this)
        };
        var l = function(e) {
            var t = this;
            if (this.length = 0, this.name = "nicescrollarray", this.each = function(e) {
                    return P.each(t, e), t
                }, this.push = function(e) {
                    t[t.length] = e, t.length++
                }, this.eq = function(e) {
                    return t[e]
                }, e)
                for (var o = 0; o < e.length; o++) {
                    var i = P.data(e[o], "__nicescroll") || !1;
                    i && (this[this.length] = i, this.length++)
                }
            return this
        };
        ! function(e, t, o) {
            for (var i = 0, n = t.length; i < n; i++) o(e, t[i])
        }(l.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, t) {
            e[t] = function() {
                var e = arguments;
                return this.each(function() {
                    this[t].apply(this, e)
                })
            }
        }), e.fn.getNiceScroll = function(e) {
            return void 0 === e ? new l(this) : this[e] && P.data(this[e], "__nicescroll") || !1
        }, (e.expr.pseudos || e.expr[":"]).nicescroll = function(e) {
            return void 0 !== P.data(e, "__nicescroll")
        }, P.fn.niceScroll = function(n, r) {
            void 0 !== r || "object" != typeof n || "jquery" in n || (r = n, n = !1);
            var s = new l;
            return this.each(function() {
                var e = P(this),
                    t = P.extend({}, r);
                if (n) {
                    var o = P(n);
                    t.doc = 1 < o.length ? P(n, e) : o, t.win = e
                }!("doc" in t) || "win" in t || (t.win = e);
                var i = e.data("__nicescroll") || !1;
                i || (t.doc = t.doc || e, i = new a(t, e), e.data("__nicescroll", i)), s.push(i)
            }), 1 === s.length ? s[0] : s
        }, z.NiceScroll = {
            getjQuery: function() {
                return e
            }
        }, P.nicescroll || (P.nicescroll = new l, P.nicescroll.options = _)
    });
var core_event = function() {
        var n = [];

        function i(e) {
            e.elm && e.elm.removeEventListener(e.event, e.handler, e.options)
        }
        return {
            on: function(e, t, o, i) {
                void 0 === o && (o = null), void 0 === i && (i = {}), e.split(" ").forEach(function(e) {
                    o && o.addEventListener(e, t, i), n.push({
                        event: e,
                        handler: t,
                        elm: o,
                        options: i
                    })
                })
            },
            off: function(e, o) {
                void 0 === o && (o = null), e.split(" ").forEach(function(t) {
                    n = n.filter(function(e) {
                        return !e || e.event !== t || e.elm !== o || (i(e), !1)
                    })
                })
            },
            emit: function(t) {
                for (var e = arguments.length, o = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) o[i - 1] = arguments[i];
                n.forEach(function(e) {
                    e.elm || e.event.split(".")[0] !== t || e.handler.apply(e, o)
                })
            },
            destroy: function() {
                n.forEach(i), n = []
            }
        }
    },
    state = function(e) {
        var t = e;
        return {
            set: function(e) {
                t = e
            },
            is: function(e) {
                return e === t
            }
        }
    };

function Extends() {
    return (Extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
        }
        return e
    }).apply(this, arguments)
}
var keys = Object.keys;

function each(o, i) {
    keys(o).some(function(e, t) {
        return i(o[e], e, t)
    })
}

function values(t) {
    return keys(t).map(function(e) {
        return t[e]
    })
}

function isObject(e) {
    return "object" == typeof e
}

function merge(e, t) {
    var o = Extends({}, e);
    return each(t, function(e, t) {
        isObject(e) ? (isObject(o[t]) || (o[t] = {}), o[t] = merge(o[t], e)) : o[t] = e
    }), o
}

function object_assign(t, o) {
    return t._s = o, keys(o).forEach(function(e) {
        t[e] || Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
    }), t
}

function toArray(e) {
    return Array.isArray(e) ? e : [e]
}

function between(e, t, o) {
    return Math.min(Math.max(e, o < t ? o : t), o < t ? t : o)
}

function sprintf(e, t) {
    var o = 0;
    return e.replace(/%s/g, function() {
        return toArray(t)[o++]
    })
}

function unit(e) {
    var t = typeof e;
    return "number" === t && 0 < e ? parseFloat(e) + "px" : "string" === t ? e : ""
}

function pad(e) {
    return e < 10 ? "0" + e : e
}

function toPixel(e, t) {
    if ("string" == typeof t) {
        var o = create("div", {});
        applyStyle(o, {
            position: "absolute",
            width: t
        }), append(e, o), t = o.clientWidth, dom_remove(o)
    }
    return t
}

function find(e, t) {
    return e ? e.querySelector(t.split(" ")[0]) : null
}

function child(e, t) {
    return e && values(e.children).filter(function(e) {
        return hasClass(e, t.split(" ")[0]) || e.tagName === t
    })[0] || null
}

function create(e, t) {
    var o = document.createElement(e);
    return each(t, function(e, t) {
        return setAttribute(o, t, e)
    }), o
}

function domify(e) {
    var t = create("div", {});
    return t.innerHTML = e, t.firstChild
}

function dom_remove(e) {
    toArray(e).forEach(function(e) {
        if (e) {
            var t = e.parentElement;
            t && t.removeChild(e)
        }
    })
}

function append(e, t) {
    e && e.appendChild(t)
}

function before(e, t) {
    if (e && t) {
        var o = t.parentElement;
        o && o.insertBefore(e, t)
    }
}

function applyStyle(o, e) {
    o && each(e, function(e, t) {
        null !== e && (o.style[t] = e)
    })
}

function addOrRemoveClasses(t, e, o) {
    t && toArray(e).forEach(function(e) {
        e && t.classList[o ? "remove" : "add"](e)
    })
}

function addClass(e, t) {
    addOrRemoveClasses(e, t, !1)
}

function removeClass(e, t) {
    addOrRemoveClasses(e, t, !0)
}

function hasClass(e, t) {
    return !!e && e.classList.contains(t)
}

function setAttribute(e, t, o) {
    e && e.setAttribute(t, o)
}

function getAttribute(e, t) {
    return e ? e.getAttribute(t) : ""
}

function removeAttribute(e, t) {
    toArray(t).forEach(function(t) {
        toArray(e).forEach(function(e) {
            return e && e.removeAttribute(t)
        })
    })
}

function dom_loaded(e, t) {
    var o = e.querySelectorAll("img"),
        i = o.length;
    if (i) {
        var n = 0;
        each(o, function(e) {
            e.onload = e.onerror = function() {
                ++n === i && t()
            }
        })
    } else t()
}
var SLIDE = "slide",
    LOOP = "loop",
    FADE = "fade",
    transitions_slide = function(l, c) {
        var d, u;
        return {
            mount: function() {
                d = c.Elements.list, l.on("transitionend", function(e) {
                    e.target === d && u && u()
                }, d)
            },
            start: function(e, t, o, i, n) {
                var r = l.options,
                    s = c.Controller.edgeIndex,
                    a = r.speed;
                u = n, l.is(SLIDE) && (0 === o && s <= t || s <= o && 0 === t) && (a = r.rewindSpeed || a), applyStyle(d, {
                    transition: "transform " + a + "ms " + r.easing,
                    transform: "translate(" + i.x + "px," + i.y + "px)"
                })
            }
        }
    },
    fade = function(o, s) {
        function a(e) {
            var t = o.options;
            applyStyle(s.Elements.slides[e], {
                transition: "opacity " + t.speed + "ms " + t.easing
            })
        }
        return s.Drag && (s.Drag.required = !1), {
            mount: function() {
                a(o.index)
            },
            start: function(e, t, o, i, n) {
                var r = s.Elements.track;
                applyStyle(r, {
                    height: unit(r.clientHeight)
                }), a(t), n(), applyStyle(r, {
                    height: ""
                })
            }
        }
    };

function compose(o, e, t) {
    var i = {};
    return each(e, function(e, t) {
        i[t] = e(o, i, t.toLowerCase())
    }), t || (t = o.is(FADE) ? fade : transitions_slide), i.Transition = t(o, i), i
}
var MESSAGE_PREFIX = "[SLIDE-BOX]";

function error_error(e) {
    console.error(MESSAGE_PREFIX + " " + e)
}

function exist(e, t) {
    if (!e) throw new Error(t)
}
var ROOT = "slidebox",
    ELEMENT_CLASSES = {
        root: ROOT,
        slider: ROOT + "-slider",
        track: ROOT + "-track",
        list: ROOT + "-list",
        slide: ROOT + "-item",
        container: ROOT + "-container",
        modify: ROOT + "-modify",
        arrows: ROOT + "-arrows",
        arrow: ROOT + "-arrow",
        prev: ROOT + "-arrow-prev",
        next: ROOT + "-arrow-next",
        pagination: ROOT + "-pagination",
        page: ROOT + "-pagi-item",
        num: ROOT + "-pagi-num",
        clone: ROOT + "-item-clone",
        progress: ROOT + "-progress",
        bar: ROOT + "-progress-bar",
        autoplay: ROOT + "-autoplay",
        play: ROOT + "-play",
        pause: ROOT + "-pause",
        spinner: ROOT + "-spinner",
        sr: ROOT + "-sr"
    },
    STATUS_CLASSES = {
        active: "is-active",
        visible: "is-visible",
        loading: "is-loading"
    },
    I18N = {
        prev: "Previous slide",
        next: "Next slide",
        first: "Go to first slide",
        last: "Go to last slide",
        slideX: "Go to slide %s",
        pageX: "Go to page %s",
        play: "Start autoplay",
        pause: "Pause autoplay"
    },
    DEFAULTS = {
        type: "slide",
        rewind: !1,
        speed: 400,
        rewindSpeed: 0,
        width: 0,
        height: 0,
        fixedWidth: 0,
        fixedHeight: 0,
        heightRatio: 0,
        autoWidth: !1,
        perPage: 1,
        perMove: 0,
        clones: 0,
        start: 0,
        focus: !1,
        gap: 0,
        padding: 0,
        arrows: !0,
        arrowPath: "",
        SizeW: 40,
        SizeH: 40,
        pagination: !0,
        dotNum: !1,
        intoNav: !1,
        autoplay: !1,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        lazyLoad: !1,
        preloadPages: 1,
        easing: "cubic-bezier(.42,.65,.27,.99)",
        keyboard: !0,
        drag: !0,
        dragAngleThreshold: 30,
        swipeDistanceThreshold: 150,
        flickVelocityThreshold: .6,
        flickPower: 600,
        flickMaxPages: 1,
        direction: "ltr",
        cover: !1,
        accessibility: !0,
        isNavigation: !1,
        trimSpace: !0,
        updateOnMove: !1,
        throttle: 100,
        breakpoints: !1,
        classes: ELEMENT_CLASSES,
        i18n: I18N
    },
    CREATED = 1,
    MOUNTED = 2,
    IDLE = 3,
    MOVING = 4,
    DESTROYED = 5,
    splide_Splide = function() {
        function e(e, t, o) {
            void 0 === t && (t = {}), void 0 === o && (o = {}), this.root = e instanceof Element ? e : document.querySelector(e), exist(this.root, "An invalid element/selector was given."), this.Components = null, this.Event = core_event(), this.State = state(CREATED), this.STATES = {}, this._o = merge(DEFAULTS, t), this._i = 0, this._c = o, this._e = {}, this._t = null
        }
        var t = e.prototype;
        return t.mount = function(e, t) {
            var i = this;
            void 0 === e && (e = this._e), void 0 === t && (t = this._t), this._e = e, this._t = t, this.Components = compose(this, merge(this._c, e), t);
            try {
                each(this.Components, function(e, t) {
                    var o = e.required;
                    void 0 === o || o ? e.mount && e.mount() : delete i.Components[t]
                })
            } catch (e) {
                return void error_error(e.message)
            }
            var o = this.State;
            return o.set(MOUNTED), each(this.Components, function(e) {
                e.mounted && e.mounted()
            }), this.emit("mounted"), o.set(IDLE), this.emit("ready"), applyStyle(this.root, {
                visibility: "visible"
            }), this.on("move drag", function() {
                return o.set(MOVING)
            }).on("moved dragged", function() {
                return o.set(IDLE)
            }), this
        }, t.sync = function(e) {
            return this.sibling = e, this
        }, t.on = function(e, t, o, i) {
            return void 0 === o && (o = null), void 0 === i && (i = {}), this.Event.on(e, t, o, i), this
        }, t.off = function(e, t) {
            return void 0 === t && (t = null), this.Event.off(e, t), this
        }, t.emit = function(e) {
            for (var t, o = arguments.length, i = new Array(1 < o ? o - 1 : 0), n = 1; n < o; n++) i[n - 1] = arguments[n];
            return (t = this.Event).emit.apply(t, [e].concat(i)), this
        }, t.go = function(e, t) {
            return void 0 === t && (t = !0), (this.State.is(IDLE) || this.State.is(MOVING) && !t) && this.Components.Controller.go(e, !1), this
        }, t.is = function(e) {
            return e === this._o.type
        }, t.add = function(e, t) {
            return void 0 === t && (t = -1), this.Components.Elements.add(e, t, this.refresh.bind(this)), this
        }, t.remove = function(e) {
            return this.Components.Elements.remove(e), this.refresh(), this
        }, t.refresh = function() {
            return this.emit("refresh").emit("resize"), this
        }, t.destroy = function(t) {
            var e = this;
            if (void 0 === t && (t = !0), !this.State.is(CREATED)) return values(this.Components).reverse().forEach(function(e) {
                e.destroy && e.destroy(t)
            }), this.emit("destroy", t), this.Event.destroy(), this.State.set(DESTROYED), this;
            this.on("ready", function() {
                return e.destroy(t)
            })
        }, createClass(e, [{
            key: "index",
            get: function() {
                return this._i
            },
            set: function(e) {
                this._i = parseInt(e)
            }
        }, {
            key: "length",
            get: function() {
                return this.Components.Elements.length
            }
        }, {
            key: "options",
            get: function() {
                return this._o
            },
            set: function(e) {
                var t = this.State.is(CREATED);
                t || this.emit("update"), this._o = merge(this._o, e), t || this.emit("updated", this._o)
            }
        }, {
            key: "classes",
            get: function() {
                return this._o.classes
            }
        }, {
            key: "i18n",
            get: function() {
                return this._o.i18n
            }
        }]), e
    }(),
    components_options = function(e) {
        var t = getAttribute(e.root, "data-splide");
        if (t) try {
            e.options = JSON.parse(t)
        } catch (e) {
            error_error(e.message)
        }
        return {
            mount: function() {
                e.State.is(CREATED) && (e.index = e.options.start)
            }
        }
    },
    LTR = "ltr",
    RTL = "rtl",
    TTB = "ttb",
    STYLE_RESTORE_EVENTS = "update.slide",
    elements_slide = function(c, d, t, n) {
        var o = c.options.updateOnMove,
            i = "ready.slide updated.slide resize.slide moved.slide" + (o ? " move.slide" : ""),
            r = {
                slide: n,
                index: d,
                realIndex: t,
                container: child(n, c.classes.container),
                isClone: -1 < t,
                mount: function() {
                    var e = this;
                    this.isClone || (n.id = c.root.id + "-slide" + pad(d + 1)), c.on(i, function() {
                        return e.update()
                    }).on(STYLE_RESTORE_EVENTS, a).on("click", function() {
                        return c.emit("click", e)
                    }, n), o && c.on("move.slide", function(e) {
                        e === t && s(!0, !1)
                    }), applyStyle(n, {
                        display: ""
                    }), this.styles = getAttribute(n, "style") || ""
                },
                destroy: function() {
                    c.off(i).off(STYLE_RESTORE_EVENTS).off("click", n), removeClass(n, values(STATUS_CLASSES)), a()
                },
                update: function() {
                    s(this.isActive(), !1), s(this.isVisible(), !0)
                },
                isActive: function() {
                    return c.index === d
                },
                isVisible: function() {
                    var e = this.isActive();
                    if (c.is(FADE) || e) return e;
                    var t = Math.floor,
                        o = c.Components,
                        i = o.Track,
                        n = o.Layout,
                        r = c.options.direction === TTB,
                        s = t((i.toPosition(d) + i.offset(d) - i.position) * i.sign),
                        a = t(s + n[r ? "slideHeight" : "slideWidth"](d)),
                        l = n[r ? "height" : "width"];
                    return 0 <= s && s <= l && 0 <= a && a <= l
                },
                isWithin: function(e, t) {
                    var o = Math.abs(e - d);
                    return c.is(SLIDE) || this.isClone || (o = Math.min(o, c.length - o)), o < t
                }
            };

        function s(e, t) {
            var o = t ? "visible" : "active",
                i = STATUS_CLASSES[o];
            e ? (addClass(n, i), c.emit("" + o, r)) : hasClass(n, i) && (removeClass(n, i), c.emit(t ? "hidden" : "inactive", r))
        }

        function a() {
            setAttribute(n, "style", r.styles)
        }
        return r
    },
    UID_NAME = "uid",
    components_elements = function(n, r) {
        var o = n.root,
            i = n.classes,
            s = [];
        if (!o.id) {
            window.splide = window.splide || {};
            var e = window.splide[UID_NAME] || 0;
            window.splide[UID_NAME] = ++e, o.id = "splide" + pad(e)
        }
        var a = {
            mount: function() {
                var e = this;
                ! function() {
                    a.slider = child(o, i.slider), a.track = find(o, "." + i.track), a.list = child(a.track, i.list), exist(a.track && a.list, "Track or list was not found."), a.slides = values(a.list.children);
                    var e = l(i.arrows);
                    a.arrows = {
                        prev: find(e, "." + i.prev),
                        next: find(e, "." + i.next)
                    };
                    var t = l(i.autoplay);
                    a.bar = find(l(i.progress), "." + i.bar), a.play = find(t, "." + i.play), a.pause = find(t, "." + i.pause), a.track.id = a.track.id || o.id + "-track", a.list.id = a.list.id || o.id + "-list"
                }(), this.init(), n.on("refresh", function() {
                    e.destroy(), e.init()
                }).on("updated", function() {
                    removeClass(o, t()), addClass(o, t())
                })
            },
            destroy: function() {
                s.forEach(function(e) {
                    e.destroy()
                }), s = [], removeClass(o, t())
            },
            init: function() {
                addClass(o, t()), a.slides.forEach(function(e, t) {
                    a.register(e, t, -1)
                })
            },
            register: function(e, t, o) {
                var i = elements_slide(n, t, o, e);
                i.mount(), s.push(i)
            },
            getSlide: function(t) {
                return s.filter(function(e) {
                    return e.index === t
                })[0]
            },
            getSlides: function(e) {
                return e ? s : s.filter(function(e) {
                    return !e.isClone
                })
            },
            getSlidesByPage: function(e) {
                var o = r.Controller.toIndex(e),
                    t = n.options,
                    i = !1 !== t.focus ? 1 : t.perPage;
                return s.filter(function(e) {
                    var t = e.index;
                    return o <= t && t < o + i
                })
            },
            add: function(e, t, o) {
                if ("string" == typeof e && (e = domify(e)), e instanceof Element) {
                    var i = this.slides[t];
                    applyStyle(e, {
                        display: "none"
                    }), i ? (before(e, i), this.slides.splice(t, 0, e)) : (append(this.list, e), this.slides.push(e)), dom_loaded(e, function() {
                        o && o(e)
                    })
                }
            },
            remove: function(e) {
                dom_remove(this.slides.splice(e, 1)[0])
            },
            each: function(e) {
                s.forEach(e)
            },
            get length() {
                return this.slides.length
            },
            get total() {
                return s.length
            }
        };

        function t() {
            var e = i.root,
                t = n.options;
            return [e + "--" + t.type, e + "--" + t.direction, t.drag ? e + "-draggable" : "", t.isNavigation ? e + "-nav" : ""]
        }

        function l(e) {
            return child(o, e) || child(a.slider, e)
        }
        return a
    },
    controller_floor = Math.floor,
    controller = function(r, i) {
        var s, o, a = {
            mount: function() {
                s = r.options, o = r.is(LOOP), r.on("move", function(e) {
                    r.index = e
                }).on("updated refresh", function(e) {
                    s = e || s, r.index = between(r.index, 0, a.edgeIndex)
                })
            },
            go: function(e, t) {
                var o = this.trim(this.parse(e));
                i.Track.go(o, this.rewind(o), t)
            },
            parse: function(e) {
                var t = r.index,
                    o = String(e).match(/([+\-<>]+)(\d+)?/),
                    i = o ? o[1] : "",
                    n = o ? parseInt(o[2]) : 0;
                switch (i) {
                    case "+":
                        t += n || 1;
                        break;
                    case "-":
                        t -= n || 1;
                        break;
                    case ">":
                    case "<":
                        t = function(e, t, o) {
                            if (-1 < e) return a.toIndex(e);
                            var i = s.perMove,
                                n = o ? -1 : 1;
                            if (i) return t + i * n;
                            return a.toIndex(a.toPage(t) + n)
                        }(n, t, "<" === i);
                        break;
                    default:
                        t = parseInt(e)
                }
                return t
            },
            toIndex: function(e) {
                if (n()) return e;
                var t = r.length,
                    o = s.perPage,
                    i = e * o;
                return t - o <= (i -= (this.pageLength * o - t) * controller_floor(i / t)) && i < t && (i = t - o), i
            },
            toPage: function(e) {
                if (n()) return e;
                var t = r.length,
                    o = s.perPage;
                return controller_floor(t - o <= e && e < t ? (t - 1) / o : e / o)
            },
            trim: function(e) {
                return o || (e = s.rewind ? this.rewind(e) : between(e, 0, this.edgeIndex)), e
            },
            rewind: function(e) {
                var t = this.edgeIndex;
                if (o) {
                    for (; t < e;) e -= t + 1;
                    for (; e < 0;) e += t + 1
                } else t < e ? e = 0 : e < 0 && (e = t);
                return e
            },
            isRtl: function() {
                return s.direction === RTL
            },
            get pageLength() {
                var e = r.length;
                return n() ? e : Math.ceil(e / s.perPage)
            },
            get edgeIndex() {
                var e = r.length;
                return e ? n() || s.isNavigation || o ? e - 1 : e - s.perPage : 0
            },
            get prevIndex() {
                var e = r.index - 1;
                return (o || s.rewind) && (e = this.rewind(e)), -1 < e ? e : -1
            },
            get nextIndex() {
                var e = r.index + 1;
                return (o || s.rewind) && (e = this.rewind(e)), r.index < e && e <= this.edgeIndex || 0 === e ? e : -1
            }
        };

        function n() {
            return !1 !== s.focus
        }
        return a
    },
    vertical = function(o, i) {
        var n;
        return {
            axis: "Y",
            sign: -1,
            init: function() {
                n = i.Layout
            },
            toPosition: function(e) {
                return -((e + i.Clones.length / 2) * (n.slideHeight() + n.gap) + this.offset())
            },
            toIndex: function(e) {
                var t = n.slideHeight(),
                    o = (t + n.gap) * i.Clones.length / 2;
                return Math.round(-(e + o + this.offset()) / (t + n.gap))
            },
            trim: function(e) {
                return between(e, -(n.listHeight - (n.height + n.gap)), 0)
            },
            offset: function() {
                var e = o.options.focus,
                    t = n.slideHeight();
                return "center" === e ? -(n.height - t) / 2 : -(parseInt(e) || 0) * (t + n.gap)
            }
        }
    },
    horizontal = function(r, e) {
        var s, a;
        return {
            axis: "X",
            sign: r.options.direction === RTL ? 1 : -1,
            init: function() {
                s = e.Layout, a = e.Elements
            },
            toPosition: function(e) {
                return this.sign * (s.totalWidth(e - 1) + this.offset(e))
            },
            toIndex: function(e) {
                e *= this.sign, r.is(SLIDE) && (e = between(e, s.totalWidth(a.total), 0));
                var t = a.getSlides(!0);
                for (var o in t) {
                    var i = t[o].index,
                        n = this.sign * this.toPosition(i);
                    if (n < e && e <= n + s.slideWidth(i) + s.gap) return i
                }
                return 0
            },
            trim: function(e) {
                return between(e, this.sign * (s.totalWidth(a.total) - (s.width + s.gap)), 0)
            },
            offset: function(e) {
                var t = r.options.focus,
                    o = s.slideWidth(e);
                return "center" === t ? -(s.width - o) / 2 : -(parseInt(t) || 0) * (o + s.gap)
            }
        }
    },
    components_track = function(s, a) {
        var n, l = 0,
            t = s.options.direction === TTB,
            c = s.is(FADE),
            o = object_assign({
                mount: function() {
                    n = a.Elements.list, this.init()
                },
                mounted: function() {
                    var e = this;
                    c || s.on("mounted resize updated", function() {
                        e.jump(s.index)
                    })
                },
                go: function(e, t, o) {
                    var i = this,
                        n = d(e),
                        r = s.index;
                    o || s.emit("move", t, r, e), 1 <= Math.abs(n - l) || c ? a.Transition.start(e, t, r, this.toCoord(n), function() {
                        i.end(e, t, r, o)
                    }) : e !== r && "move" === s.options.trimSpace ? a.Controller.go(e + e - r, o) : this.end(e, t, r, o)
                },
                end: function(e, t, o, i) {
                    applyStyle(n, {
                        transition: ""
                    }), c || this.jump(t), i || s.emit("moved", t, o, e)
                },
                jump: function(e) {
                    this.translate(d(e))
                },
                translate: function(e) {
                    l = e, applyStyle(n, {
                        transform: "translate" + this.axis + "(" + e + "px)"
                    })
                },
                trim: function(e) {
                    return !s.options.trimSpace || s.is(LOOP) ? e : this._s.trim(e)
                },
                toCoord: function(e) {
                    return {
                        x: t ? 0 : e,
                        y: t ? e : 0
                    }
                },
                get position() {
                    return l
                }
            }, t ? vertical(s, a) : horizontal(s, a));

        function d(e) {
            return o.trim(o.toPosition(e))
        }
        return o
    },
    components_clones = function(n, e) {
        var s = [],
            t = 0,
            a = e.Elements,
            o = {
                mount: function() {
                    n.is(LOOP) && (i(), n.on("refresh", i).on("resize", function() {
                        t !== r() && n.refresh()
                    }))
                },
                destroy: function() {
                    dom_remove(s), s = []
                },
                get clones() {
                    return s
                },
                get length() {
                    return s.length
                }
            };

        function i() {
            o.destroy(),
                function(i) {
                    var n = a.length;
                    if (!n) return;
                    var r = a.slides;
                    for (; r.length < i;) r = r.concat(r);
                    r.slice(0, i).forEach(function(e, t) {
                        var o = l(e);
                        append(a.list, o), s.push(o), a.register(o, t + n, t % n)
                    }), r.slice(-i).forEach(function(e, t) {
                        var o = l(e);
                        before(o, r[0]), s.push(o), a.register(o, t - i, (n + t - i % n) % n)
                    })
                }(t = r())
        }

        function r() {
            var e = n.options;
            if (e.clones) return e.clones;
            var t = e.autoWidth ? a.length : e.perPage,
                o = e.direction === TTB ? "Height" : "Width",
                i = e["fixed" + o];
            return i && (t = Math.ceil(a.track["client" + o] / i)), t * (e.drag ? e.flickMaxPages + 1 : 1)
        }

        function l(e) {
            var t = e.cloneNode(!0);
            return addClass(t, n.classes.clone), removeAttribute(t, "id"), t
        }
        return o
    },
    SLIDE_MAX_WIDTH = 5e3,
    directions_horizontal = function(r, e) {
        var s, a = e.Elements,
            l = r.root,
            c = r.options;
        return {
            margin: "margin" + (c.direction === RTL ? "Left" : "Right"),
            height: 0,
            listHeight: 0,
            init: function() {
                c = r.options, s = a.track, this.gap = toPixel(l, c.gap);
                var e = c.padding,
                    t = e.left,
                    o = void 0 === t ? e : t,
                    i = e.right,
                    n = void 0 === i ? e : i;
                this.padding = {
                    left: toPixel(l, o),
                    right: toPixel(l, n)
                }, applyStyle(s, {
                    paddingLeft: unit(o),
                    paddingRight: unit(n)
                })
            },
            totalWidth: function(t) {
                var o = this;
                return a.getSlides(!0).filter(function(e) {
                    return e.index <= t
                }).reduce(function(e, t) {
                    return e + o.slideWidth(t.index) + o.gap
                }, 0)
            },
            slideWidth: function(e) {
                if (c.autoWidth) {
                    var t = a.getSlide(e);
                    return t ? t.slide.offsetWidth : 0
                }
                var o = c.fixedWidth || (this.width + this.gap) / c.perPage - this.gap;
                return toPixel(l, o)
            },
            slideHeight: function() {
                var e = c.height || c.fixedHeight || this.width * c.heightRatio;
                return toPixel(l, e)
            },
            get width() {
                return s.clientWidth - this.padding.left - this.padding.right
            },
            get listWidth() {
                var e = a.total;
                return c.autoWidth ? e * SLIDE_MAX_WIDTH : this.totalWidth(e)
            }
        }
    },
    directions_vertical = function(r, e) {
        var s, a, l = e.Elements,
            c = r.root;
        return {
            margin: "marginBottom",
            init: function() {
                a = r.options, s = l.track, this.gap = toPixel(c, a.gap);
                var e = a.padding,
                    t = e.top,
                    o = void 0 === t ? e : t,
                    i = e.bottom,
                    n = void 0 === i ? e : i;
                this.padding = {
                    top: toPixel(c, o),
                    bottom: toPixel(c, n)
                }, applyStyle(s, {
                    paddingTop: unit(o),
                    paddingBottom: unit(n)
                })
            },
            slideWidth: function() {
                return toPixel(c, a.fixedWidth || this.width)
            },
            slideHeight: function() {
                var e = a.fixedHeight || (this.height + this.gap) / a.perPage - this.gap;
                return toPixel(c, e)
            },
            get width() {
                return s.clientWidth
            },
            get height() {
                var e = a.height || this.width * a.heightRatio;
                return exist(e, '"height" or "heightRatio" is missing.'), toPixel(c, e) - this.padding.top - this.padding.bottom
            },
            get listWidth() {
                return this.width
            },
            get listHeight() {
                return (this.slideHeight() + this.gap) * l.total
            }
        }
    };

function throttle(e, t) {
    var o;
    return function() {
        o || (o = setTimeout(function() {
            e(), o = null
        }, t))
    }
}

function createInterval(o, i, n) {
    var r, s, a, l = window.requestAnimationFrame,
        c = !0,
        t = function e(t) {
            c || (r || (r = t, a && a < 1 && (r -= a * i)), a = (s = t - r) / i, i <= s && (r = 0, a = 1, o()), n && n(a), l(e))
        };
    return {
        pause: function() {
            c = !0, r = 0
        },
        play: function(e) {
            r = 0, c && (c = !1, e && (a = 0), l(t))
        }
    }
}
var layout = function(o, e) {
        var i = e.Elements,
            n = object_assign({
                mount: function() {
                    o.on("resize load", throttle(function() {
                        o.emit("resize")
                    }, o.options.throttle), window).on("resize", r).on("updated refresh", t), t()
                },
                destroy: function() {
                    removeAttribute([i.list, i.track], "style")
                }
            }, o.options.direction === TTB ? directions_vertical(o, e) : directions_horizontal(o, e));

        function t() {
            n.init(), applyStyle(o.root, {
                maxWidth: unit(o.options.width)
            }), i.each(function(e) {
                e.slide.style[n.margin] = unit(n.gap)
            }), r()
        }

        function r() {
            applyStyle(i.list, {
                width: unit(n.listWidth),
                height: unit(n.listHeight)
            }), applyStyle(i.track, {
                height: unit(n.height)
            });
            var t = unit(n.slideHeight()),
                e = n.width;
            i.each(function(e) {
                applyStyle(e.container, {
                    height: t
                }), applyStyle(e.slide, {
                    width: o.options.autoWidth ? null : unit(n.slideWidth(e.index)),
                    height: e.container ? null : t
                })
            }), e !== n.width && r()
        }
        return n
    },
    abs = Math.abs,
    FRICTION_REDUCER = 7,
    drag = function(l, c) {
        var o, i, n, r, d = c.Track,
            u = c.Controller,
            s = l.options.direction === TTB,
            h = s ? "y" : "x",
            t = {
                disabled: !l.options.drag,
                mount: function() {
                    var e = this,
                        t = c.Elements.list;
                    l.on("touchstart mousedown", a, t).on("touchmove mousemove", f, t, {
                        passive: !1
                    }).on("touchend touchcancel mouseleave mouseup dragend", p, t).on("mounted refresh", function() {
                        each(t.querySelectorAll("img, a"), function(e) {
                            l.off("dragstart", e).on("dragstart", function(e) {
                                e.preventDefault()
                            }, e, {
                                passive: !1
                            })
                        })
                    }).on("mounted updated", function() {
                        e.disabled = !l.options.drag
                    })
                }
            };

        function a(e) {
            t.disabled || r || !l.State.is(IDLE) || (o = d.toCoord(d.position), i = m(e, {}), n = i)
        }

        function f(e) {
            if (i)
                if (n = m(e, i), r) {
                    e.cancelable && e.preventDefault();
                    var t = o[h] + n.offset[h];
                    d.translate(function(e) {
                        if (!l.is(LOOP)) {
                            var t = d.sign,
                                o = t * d.trim(d.toPosition(0)),
                                i = t * d.trim(d.toPosition(u.edgeIndex));
                            (e *= t) < o ? e = o - FRICTION_REDUCER * Math.log(o - e) : i < e && (e = i + FRICTION_REDUCER * Math.log(e - i)), e *= t
                        }
                        return e
                    }(t))
                } else(function(e) {
                    var t = e.offset;
                    if (l.State.is(IDLE)) {
                        var o = 180 * Math.atan(abs(t.y) / abs(t.x)) / Math.PI;
                        return s && (o = 90 - o), o < l.options.dragAngleThreshold
                    }
                    return !1
                })(n) && (l.emit("drag", i), l.root.classList.add("dragging"), r = !0)
        }

        function p() {
            i = null, r && (l.emit("dragged", n), l.root.classList.remove("dragging"), function(e) {
                var t = e.velocity[h],
                    o = abs(t);
                if (0 < o) {
                    var i = c.Layout,
                        n = l.options,
                        r = t < 0 ? -1 : 1,
                        s = d.position;
                    o > n.flickVelocityThreshold && abs(e.offset[h]) < n.swipeDistanceThreshold && (s += r * Math.min(o * n.flickPower, i.width * (n.flickMaxPages || 1)));
                    var a = d.toIndex(s);
                    a === l.index && (a += r * d.sign), l.is(LOOP) || (a = between(a, 0, u.edgeIndex)), u.go(a, n.isNavigation)
                }
            }(n), r = !1)
        }

        function m(e, t) {
            var o = e.timeStamp,
                i = e.touches,
                n = i ? i[0] : e,
                r = n.clientX,
                s = n.clientY,
                a = t.to || {},
                l = a.x,
                c = void 0 === l ? r : l,
                d = a.y,
                u = {
                    x: r - c,
                    y: s - (void 0 === d ? s : d)
                },
                h = o - (t.time || 0);
            return {
                to: {
                    x: r,
                    y: s
                },
                offset: u,
                time: o,
                velocity: {
                    x: u.x / h,
                    y: u.y / h
                }
            }
        }
        return t
    },
    click = function(e, t) {
        var o = !1;

        function i(e) {
            o && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation())
        }
        return {
            required: e.options.drag && !e.is(FADE),
            mount: function() {
                e.on("click", i, t.Elements.track, {
                    capture: !0
                }).on("drag", function() {
                    o = !0
                }).on("moved", function() {
                    o = !1
                })
            }
        }
    },
    PAUSE_FLAGS = {
        HOVER: 1,
        FOCUS: 2,
        MANUAL: 3
    },
    components_autoplay = function(n, e, o) {
        var i, r = [],
            s = e.Elements,
            a = {
                required: n.options.autoplay,
                mount: function() {
                    var e = n.options;
                    s.slides.length > e.perPage && (i = createInterval(function() {
                        n.go(">")
                    }, e.interval, function(e) {
                        n.emit(o + ":playing", e), s.bar && applyStyle(s.bar, {
                            width: 100 * e + "%"
                        })
                    }), function() {
                        var e = n.options,
                            t = n.sibling,
                            o = [n.root, t ? t.root : null];
                        e.pauseOnHover && (l(o, "mouseleave", PAUSE_FLAGS.HOVER, !0), l(o, "mouseenter", PAUSE_FLAGS.HOVER, !1));
                        e.pauseOnFocus && (l(o, "focusout", PAUSE_FLAGS.FOCUS, !0), l(o, "focusin", PAUSE_FLAGS.FOCUS, !1));
                        n.on("click", function() {
                            a.play(PAUSE_FLAGS.FOCUS), a.play(PAUSE_FLAGS.MANUAL)
                        }, s.play).on("move refresh", function() {
                            a.play()
                        }).on("destroy", function() {
                            a.pause()
                        }), l([s.pause], "click", PAUSE_FLAGS.MANUAL, !1)
                    }(), this.play())
                },
                play: function(t) {
                    void 0 === t && (t = 0), (r = r.filter(function(e) {
                        return e !== t
                    })).length || (n.emit(o + ":play"), i.play(n.options.resetProgress))
                },
                pause: function(e) {
                    void 0 === e && (e = 0), i.pause(), -1 === r.indexOf(e) && r.push(e), 1 === r.length && n.emit(o + ":pause")
                }
            };

        function l(e, t, o, i) {
            e.forEach(function(e) {
                n.on(t, function() {
                    a[i ? "play" : "pause"](o)
                }, e)
            })
        }
        return a
    },
    components_cover = function(e, t) {
        function o(o) {
            t.Elements.each(function(e) {
                var t = child(e.slide, "IMG") || child(e.container, "IMG");
                t && t.src && i(t, o)
            })
        }

        function i(e, t) {
            applyStyle(e.parentElement, {
                background: t ? "" : 'center/cover no-repeat url("' + e.src + '")'
            }), applyStyle(e, {
                display: t ? "" : "none"
            })
        }
        return {
            required: e.options.cover,
            mount: function() {
                e.on("lazyload:loaded", function(e) {
                    i(e, !1)
                }), e.on("mounted updated refresh", function() {
                    return o(!1)
                })
            },
            destroy: function() {
                o(!0)
            }
        }
    },
    XML_NAME_SPACE = "http://www.w3.org/2000/svg",
    PATH = "M59.6,30.1 67.4,22.3 67.5,22.2 67.6,21.8 67.7,21.6 67.7,20.9 67.2,20.4 9.2,20.4 9.2,19.9 67.2,19.9 67.7,19.4 67.7,18.8 67.6,18.6 67.5,18.3 67.4,18.1 59.6,10.3 60.2,9.8 70.6,20.2 60.2,30.7z",
    PATHS1 = "M33.9,110.3V59.7c0-5.2,4.2-9.4,9.4-9.4h102.8V29.6c0-3.5,1.9-6.7,5-8.3c3.1-1.6,6.8-1.5,9.7,0.5l83.9,55.9c2.6,1.8,4.2,4.7,4.2,7.8l0,0c0,3.2-1.6,6.1-4.2,7.8l-83.9,55.9c-2.9,1.9-6.6,2.1-9.7,0.5c-3.1-1.6-5-4.8-5-8.3v-25.9c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2v25.9c0,0.5,0.3,0.8,0.5,0.9c0.3,0.1,0.6,0.2,1.1-0.1L240,86.4c0.4-0.3,0.5-0.6,0.5-0.9s-0.1-0.6-0.5-0.9l-83.9-55.9c-0.4-0.3-0.8-0.2-1.1-0.1c-0.3,0.1-0.5,0.4-0.5,0.9v29H43.3c-0.6,0-1,0.5-1,1v50.7c0,0.6,0.5,1,1,1h53.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2H43.3C38.1,119.8,33.9,115.5,33.9,110.3z",
    PATHS2 = "M123.3,120c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5c2.5,0,4.5,2,4.5,4.5C127.8,118,125.8,120,123.3,120z",
    components_arrows = function(n, r, s) {
        var a, l, t, c = n.classes,
            d = n.root,
            u = r.Elements;

        function e() {
            var e = r.Controller,
                t = e.prevIndex,
                o = e.nextIndex,
                i = n.length > n.options.perPage || n.is(LOOP);
            a.disabled = t < 0 || !i, l.disabled = o < 0 || !i, n.emit(s + ":updated", a, l, t, o)
        }

        function o(e) {
            return "special" != n.options.arrowPath ? domify('<button class="' + c.arrow + " " + (e ? c.prev : c.next) + '"><svg xmlns="' + XML_NAME_SPACE + '"\tviewBox="0 0 ' + n.options.SizeW + " " + n.options.SizeH + '"\twidth="' + n.options.SizeW + '"\theight="' + n.options.SizeH + '"><path fill="currentColor" d="' + (n.options.arrowPath || PATH) + '" />') : domify('<button class="special ' + c.arrow + " " + (e ? c.prev : c.next) + '"><svg xmlns="' + XML_NAME_SPACE + '"\tviewBox="0 0 ' + n.options.SizeW + " " + n.options.SizeH + '"\twidth="' + n.options.SizeW + '"\theight="' + n.options.SizeH + '"><path fill="currentColor" d="' + PATHS1 + '" /><path fill="currentColor" d="' + PATHS2 + '" />')
        }
        return {
            required: n.options.arrows,
            mount: function() {
                a = u.arrows.prev, l = u.arrows.next, a && l || !n.options.arrows || (a = o(!0), l = o(!1), t = !0, function() {
                    var e = n.root.querySelector(".slidebox-modify");
                    if (n.options.intoNav) {
                        if (!e) {
                            var t = create("div", {
                                class: c.arrows
                            });
                            append(t, a), append(t, l);
                            var e = create("div", {
                                class: c.modify
                            });
                            append(n.root, e), append(e, t)
                        }
                    } else {
                        var t = create("div", {
                            class: c.arrows
                        });
                        append(t, a), append(t, l);
                        var o = u.slider,
                            i = "slider" === n.options.arrows && o ? o : d;
                        before(t, i.firstElementChild)
                    }
                }()), a && l && n.on("click", function() {
                    n.go("<")
                }, a).on("click", function() {
                    n.go(">")
                }, l).on("mounted move updated refresh", e), this.arrows = {
                    prev: a,
                    next: l
                }
            },
            mounted: function() {
                n.emit(s + ":mounted", a, l)
            },
            destroy: function() {
                if (removeAttribute([a, l], "disabled"), t) {
                    dom_remove(a.parentElement);
                    var e = n.root.querySelector(".slidebox-modify");
                    e && e.remove()
                }
            }
        }
    },
    ATTRIBUTES_UPDATE_EVENT = "move.page",
    UPDATE_EVENT = "updated.page refresh.page",
    components_pagination = function(c, t, r) {
        var d = {},
            u = t.Elements,
            h = {
                mount: function() {
                    var i, n, r, e, t = c.options.pagination;
                    if (t) {
                        i = c.options, n = c.classes, r = create("div", {
                            class: n.pagination
                        }), e = u.getSlides(!1).filter(function(e) {
                            return !1 !== i.focus || e.index % i.perPage == 0
                        }).map(function(e, t) {
                            if (i.dotNum) {
                                var o = create("div", {
                                    class: n.num
                                });
                                o.innerHTML = t <= 9 ? "0" + (t + 1) : t + 1
                            } else var o = create("div", {
                                class: n.page
                            });
                            return append(r, o), c.on("click", function() {
                                c.go(">" + t)
                            }, o), {
                                button: o,
                                page: t,
                                Slides: u.getSlidesByPage(t)
                            }
                        }), d = {
                            list: r,
                            items: e
                        };
                        var o = u.slider,
                            s = "slider" === t && o ? o : c.root,
                            a = c.root.querySelector(".slidebox-arrows"),
                            l = c.root.querySelector(".slidebox-pagination");
                        c.options.intoNav ? a && !l && append(a, d.list) : append(s, d.list), c.on(ATTRIBUTES_UPDATE_EVENT, f)
                    }
                    c.off(UPDATE_EVENT).on(UPDATE_EVENT, function() {
                        h.destroy(), c.options.pagination && (h.mount(), h.mounted())
                    })
                },
                mounted: function() {
                    if (c.options.pagination) {
                        var e = c.index;
                        c.emit(r + ":mounted", d, this.getItem(e)), f(e, -1)
                    }
                },
                destroy: function() {
                    dom_remove(d.list), d.items && d.items.forEach(function(e) {
                        c.off("click", e.button)
                    }), c.off(ATTRIBUTES_UPDATE_EVENT), d = {}
                },
                getItem: function(e) {
                    return d.items[t.Controller.toPage(e)]
                },
                get data() {
                    return d
                }
            };

        function f(e, t) {
            var o = h.getItem(t),
                i = h.getItem(e),
                n = STATUS_CLASSES.active;
            o && removeClass(o.button, n), i && addClass(i.button, n), c.emit(r + ":updated", d, o, i)
        }
        return h
    },
    SRC_DATA_NAME = "data-lazy",
    lazyload = function(n, e, r) {
        var t, o, i = n.options,
            s = "sequential" === i.lazyLoad;

        function a() {
            o = [], t = 0
        }

        function l(t) {
            t = isNaN(t) ? n.index : t, (o = o.filter(function(e) {
                return !e.Slide.isWithin(t, i.perPage * (i.preloadPages + 1)) || (c(e.img, e.Slide), !1)
            }))[0] || n.off("moved." + r)
        }

        function c(e, t) {
            addClass(t.slide, STATUS_CLASSES.loading);
            var o = create("span", {
                class: n.classes.spinner
            });
            append(e.parentElement, o), e.onload = function() {
                u(e, o, t, !1)
            }, e.onerror = function() {
                u(e, o, t, !0)
            }, setAttribute(e, "src", getAttribute(e, SRC_DATA_NAME))
        }

        function d() {
            if (t < o.length) {
                var e = o[t];
                c(e.img, e.Slide)
            }
            t++
        }

        function u(e, t, o, i) {
            removeClass(o.slide, STATUS_CLASSES.loading), i || (dom_remove(t), applyStyle(e, {
                display: ""
            }), n.emit(r + ":loaded", e).emit("resize")), s && d()
        }
        return {
            required: i.lazyLoad,
            mount: function() {
                n.on("mounted refresh", function() {
                    a(), e.Elements.each(function(t) {
                        each(t.slide.querySelectorAll("[" + SRC_DATA_NAME + "]"), function(e) {
                            e.src || (o.push({
                                img: e,
                                Slide: t
                            }), applyStyle(e, {
                                display: "none"
                            }))
                        })
                    }), s && d()
                }), s || n.on("mounted refresh moved." + r, l)
            },
            destroy: a
        }
    },
    KEY_MAP = {
        ltr: {
            ArrowLeft: "<",
            ArrowRight: ">",
            Left: "<",
            Right: ">"
        },
        rtl: {
            ArrowLeft: ">",
            ArrowRight: "<",
            Left: ">",
            Right: "<"
        },
        ttb: {
            ArrowUp: "<",
            ArrowDown: ">",
            Up: "<",
            Down: ">"
        }
    },
    keyboard = function(o) {
        var e = o.root;
        return {
            mount: function() {
                var t = KEY_MAP[o.options.direction];
                o.on("mounted updated", function() {
                    o.off("keydown", e), o.options.keyboard && o.on("keydown", function(e) {
                        t[e.key] && o.go(t[e.key])
                    }, e)
                })
            }
        }
    },
    ARIA_CURRENRT = "aria-current",
    ARIA_CONTROLS = "aria-controls",
    ARIA_LABEL = "aria-label",
    ARIA_LABELLEDBY = "aria-labelledby",
    ARIA_HIDDEN = "aria-hidden",
    TAB_INDEX = "tabindex",
    a11y = function(a, o) {
        var l = a.i18n,
            i = o.Elements,
            n = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, "role"];

        function t(e, t) {
            setAttribute(e, ARIA_HIDDEN, !t), setAttribute(e, TAB_INDEX, t ? 0 : -1)
        }

        function e(e, t) {
            var o = i.track.id;
            setAttribute(e, ARIA_CONTROLS, o), setAttribute(t, ARIA_CONTROLS, o)
        }

        function r(e, t, o, i) {
            var n = a.index,
                r = -1 < o && n < o ? l.last : l.prev,
                s = -1 < i && i < n ? l.first : l.next;
            setAttribute(e, ARIA_LABEL, r), setAttribute(t, ARIA_LABEL, s)
        }

        function s(e, t) {
            t && setAttribute(t.button, ARIA_CURRENRT, !0), e.items.forEach(function(e) {
                var t = a.options,
                    o = sprintf(!1 === t.focus && 1 < t.perPage ? l.pageX : l.slideX, e.page + 1),
                    i = e.button,
                    n = e.Slides.map(function(e) {
                        return e.slide.id
                    });
                setAttribute(i, ARIA_CONTROLS, n.join(" ")), setAttribute(i, ARIA_LABEL, o)
            })
        }

        function c(e, t, o) {
            t && removeAttribute(t.button, ARIA_CURRENRT), o && setAttribute(o.button, ARIA_CURRENRT, !0)
        }

        function d(s) {
            i.each(function(e) {
                var t = e.slide,
                    o = e.realIndex;
                h(t) || setAttribute(t, "role", "button");
                var i = -1 < o ? o : e.index,
                    n = sprintf(l.slideX, i + 1),
                    r = s.Components.Elements.getSlide(i);
                setAttribute(t, ARIA_LABEL, n), r && setAttribute(t, ARIA_CONTROLS, r.slide.id)
            })
        }

        function u(e, t) {
            var o = e.slide;
            t ? setAttribute(o, ARIA_CURRENRT, !0) : removeAttribute(o, ARIA_CURRENRT)
        }

        function h(e) {
            return "BUTTON" === e.tagName
        }
        return {
            mount: function() {
                a.on("visible", function(e) {
                    t(e.slide, !0)
                }).on("hidden", function(e) {
                    t(e.slide, !1)
                }).on("arrows:mounted", e).on("arrows:updated", r).on("pagination:mounted", s).on("pagination:updated", c).on("refresh", function() {
                    removeAttribute(o.Clones.clones, n)
                }), a.options.isNavigation && a.on("navigation:mounted", d).on("active", function(e) {
                    u(e, !0)
                }).on("inactive", function(e) {
                    u(e, !1)
                }), ["play", "pause"].forEach(function(e) {
                    var t = i[e];
                    t && (h(t) || setAttribute(t, "role", "button"), setAttribute(t, ARIA_CONTROLS, i.track.id), setAttribute(t, ARIA_LABEL, l[e]))
                })
            },
            destroy: function() {
                var e = o.Arrows,
                    t = e ? e.arrows : {};
                removeAttribute(i.slides.concat([t.prev, t.next, i.play, i.pause]), n)
            }
        }
    },
    SYNC_EVENT = "move.sync",
    TRIGGER_KEYS = [" ", "Enter", "Spacebar"],
    sync = function(i) {
        var n = i.sibling,
            e = n && n.options.isNavigation;

        function r() {
            i.on(SYNC_EVENT, function(e, t, o) {
                n.off(SYNC_EVENT).go(n.is(LOOP) ? o : e, !1), s()
            })
        }

        function s() {
            n.on(SYNC_EVENT, function(e, t, o) {
                i.off(SYNC_EVENT).go(i.is(LOOP) ? o : e, !1), r()
            })
        }

        function a(e) {
            i.State.is(IDLE) && n.go(e)
        }
        return {
            required: !!n,
            mount: function() {
                r(), s(), e && n.Components.Elements.each(function(e) {
                    var t = e.slide,
                        o = e.index;
                    i.on("mouseup touchend", function(e) {
                        e.button && 0 !== e.button || a(o)
                    }, t), i.on("keyup", function(e) {
                        -1 < TRIGGER_KEYS.indexOf(e.key) && (e.preventDefault(), a(o))
                    }, t, {
                        passive: !1
                    })
                })
            },
            mounted: function() {
                e && n.emit("navigation:mounted", i)
            }
        }
    },
    THROTTLE = 50,
    components_breakpoints = function(r) {
        var s, a, l = r.options.breakpoints,
            t = throttle(e, THROTTLE),
            c = [];

        function e() {
            var e, t = (e = c.filter(function(e) {
                return e.mql.matches
            })[0]) ? e.point : -1;
            if (t !== a) {
                a = t;
                var o = r.State,
                    i = l[t] || s,
                    n = i.destroy;
                n ? (r.options = s, r.destroy("completely" === n)) : (o.is(DESTROYED) && (o.set(CREATED), r.mount()), r.options = i)
            }
        }
        return {
            required: l && matchMedia,
            mount: function() {
                c = Object.keys(l).sort(function(e, t) {
                    return parseInt(e) - parseInt(t)
                }).map(function(e) {
                    return {
                        point: e,
                        mql: matchMedia("(max-width:" + e + "px)")
                    }
                }), this.destroy(!0), addEventListener("resize", t), s = r.options, e()
            },
            destroy: function(e) {
                e && removeEventListener("resize", t)
            }
        }
    },
    COMPLETE = {
        Options: components_options,
        Breakpoints: components_breakpoints,
        Controller: controller,
        Elements: components_elements,
        Track: components_track,
        Clones: components_clones,
        Layout: layout,
        Drag: drag,
        Click: click,
        Autoplay: components_autoplay,
        Cover: components_cover,
        Arrows: components_arrows,
        Pagination: components_pagination,
        LazyLoad: lazyload,
        Keyboard: keyboard,
        Sync: sync,
        A11y: a11y
    },
    LIGHT = {
        Options: components_options,
        Elements: components_elements,
        Controller: controller,
        Track: components_track,
        Clones: components_clones,
        Layout: layout,
        Drag: drag,
        Arrows: components_arrows,
        Pagination: components_pagination,
        A11y: a11y
    };

function inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
}
var complete_Splide = function(o) {
    function e(e, t) {
        return o.call(this, e, t, COMPLETE) || this
    }
    return inheritsLoose(e, o), e
}(splide_Splide);
window.Splide = complete_Splide;
var Sketch = function() {
        function o(e) {
            var t = this;
            classCallCheck(this, o);
            this.BGslide = DOM.querySelector(".background"), this.BG = this.BGslide.querySelectorAll(".bg"), this.SlideEffect = this.BGslide.querySelector(".slide-background"), this.timeSlide = this.SlideEffect.getAttribute("data-time"), this.Disp = this.SlideEffect.dataset.disp, this.images = this.BGslide.querySelectorAll(".bg > img"), this.Stop = this.BGslide.querySelector(".stop"), this.Play = this.BGslide.querySelector(".play"), this.NextBg = this.BGslide.querySelector(".next-background"), this.PrevBg = this.BGslide.querySelector(".prev-background"), this.scene = new THREE.Scene, this.vertex = "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}", this.renderer = new THREE.WebGLRenderer({
                alpha: !0
            }), this.loader = new THREE.TextureLoader, this.width = window.innerWidth, 1100 < window.innerWidth ? HomePage || ProjectDetailsPage ? this.height = window.innerHeight : this.height = .8 * window.innerHeight : this.height = 1125 * window.innerWidth / 2e3, this.SlideEffect.appendChild(this.renderer.domElement), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.width, this.height), this.renderer.setClearColor(16777215, 0), this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, .001, 1e3), this.camera.position.set(0, 0, 2), this.duration = e.duration || 1, this.debug = e.debug || !1, this.easing = e.easing || "easeInOut", this.fragment = e.fragment, this.uniforms = e.uniforms, this.time = 0, this.current = 0, this.textures = [], this.paused = !0, this.Initiate(function() {
                t.addObjects(), t.settings(), t.Setsize(), t.bindEvents()
            }), this.loadDone = function() {
                1 <= t.images.length && (clearInterval(t.slide), t.paused = !0)
            }, this.Stop.addEventListener("click", function() {
                t.stopSlide()
            }), this.Play.addEventListener("click", function() {
                t.playSlide()
            }), this.NextBg.addEventListener("click", function() {
                t.clickNext()
            }), this.PrevBg.addEventListener("click", function() {
                t.clickPrev()
            })
        }
        return createClass(o, [{
            key: "Initiate",
            value: function(e) {
                var t = [],
                    n = this;
                this.images.forEach(function(o, i) {
                    var e = new Promise(function(e) {
                        var t = o.src;
                        n.textures[i] = (new THREE.TextureLoader).load(t, e)
                    });
                    t.push(e)
                }), Promise.all(t).then(function() {
                    e(), n.Render(), n.loadDone()
                })
            }
        }, {
            key: "addObjects",
            value: function() {
                this.material = new THREE.ShaderMaterial({
                    extensions: {
                        derivatives: "#extension GL_OES_standard_derivatives : enable"
                    },
                    side: THREE.DoubleSide,
                    uniforms: {
                        time: {
                            type: "f",
                            value: 0
                        },
                        progress: {
                            type: "f"
                        },
                        border: {
                            type: "f",
                            value: 0
                        },
                        intensity: {
                            type: "f",
                            value: 0
                        },
                        scaleX: {
                            type: "f",
                            value: 30
                        },
                        scaleY: {
                            type: "f",
                            value: 30
                        },
                        transition: {
                            type: "f",
                            value: 30
                        },
                        swipe: {
                            type: "f",
                            value: 0
                        },
                        width: {
                            type: "f",
                            value: 0
                        },
                        height: {
                            type: "f",
                            value: 0
                        },
                        radius: {
                            type: "f",
                            value: 0
                        },
                        texture1: {
                            type: "f",
                            value: this.textures[0]
                        },
                        texture2: {
                            type: "f",
                            value: this.textures[1]
                        },
                        displacement: {
                            type: "f",
                            value: (new THREE.TextureLoader).load(this.Disp)
                        },
                        resolution: {
                            type: "v4",
                            value: new THREE.Vector4
                        }
                    },
                    vertexShader: this.vertex,
                    fragmentShader: this.fragment
                }), this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2), this.mesh = new THREE.Mesh(this.geometry, this.material), this.scene.add(this.mesh)
            }
        }, {
            key: "Setsize",
            value: function() {
                var e, t;
                this.width = window.innerWidth, 1100 < window.innerWidth ? HomePage || ProjectDetailsPage ? this.height = window.innerHeight : this.height = .8 * window.innerHeight : this.height = 1125 * window.innerWidth / 2e3, this.renderer.setSize(this.width, this.height), this.camera.aspect = this.width / this.height, this.imageAspect = this.textures[0].image.height / this.textures[0].image.width, t = this.height / this.width > this.imageAspect ? (e = this.width / this.height * this.imageAspect, 1) : (e = 1, this.height / this.width / this.imageAspect), this.material.uniforms.resolution.value.x = this.width, this.material.uniforms.resolution.value.y = this.height, this.material.uniforms.resolution.value.z = e, this.material.uniforms.resolution.value.w = t;
                var o = this.camera.position.z;
                this.camera.fov = 180 / Math.PI * 2 * Math.atan(1 / (2 * o)), this.mesh.scale.x = this.camera.aspect, this.mesh.scale.y = 1, this.camera.updateProjectionMatrix()
            }
        }, {
            key: "bindEvents",
            value: function() {
                window.addEventListener("resize", this.Setsize.bind(this), {
                    passive: !0
                }), this.BGslide.addEventListener("wheel", this.onScroll.bind(this), {
                    passive: !0
                }), this.BGslide.addEventListener("swiped-left", this.clickNext.bind(this), {
                    passive: !0
                }), this.BGslide.addEventListener("swiped-right", this.clickPrev.bind(this), {
                    passive: !0
                })
            }
        }, {
            key: "onScroll",
            value: function(e) {
                var t = Math.sign(e.deltaY);
                if (clearInterval(this.slide), !this.paused)
                    if (0 < t) {
                        if (!doWheel) return;
                        doWheel = !1, this.clickNext(), setTimeout(turnWheelTouch, 500)
                    } else {
                        if (!doWheel) return;
                        doWheel = !1, this.clickPrev(), setTimeout(turnWheelTouch, 500)
                    }
            }
        }, {
            key: "addClass",
            value: function(e) {
                for (var t = 0; t < this.BG.length; t++) this.BG[t].classList.remove("move");
                this.BG[e].classList.add("move")
            }
        }, {
            key: "setCurrent",
            value: function(e) {
                this.paused || this.toggleCurrent(e, !0)
            }
        }, {
            key: "unsetCurrent",
            value: function(e) {
                this.paused || this.toggleCurrent(e, !1)
            }
        }, {
            key: "toggleCurrent",
            value: function(e, t) {
                if (0 == this.paused && (this.BG[e].classList[t ? "add" : "remove"]("slide-current"), this.Current = DOM.querySelector(".slide-current"), void 0 !== this.BG[e].classList.contains("slide-current"))) {
                    var o = this.BG[e].getAttribute("data-pagi");
                    Container.querySelectorAll(".pagi-bg").forEach(function(e) {
                        e.classList.remove("current")
                    }), Container.querySelector('.pagi-bg[data-pagi="' + o + '"]').classList.add("current"), AllBackG.forEach(function(e) {
                        e.style.zIndex = "0"
                    }), this.BG[e].style.zIndex = "2"
                }
            }
        }, {
            key: "StartTimer",
            value: function() {
                var e = this;
                clearInterval(e.slide), e.slide = setInterval(function() {
                    1 == OnTime && e.clickNext()
                }, e.timeSlide)
            }
        }, {
            key: "clickNext",
            value: function() {
                clearInterval(this.slide), 1 == OnTime ? this.next() : 0 == OnTime && (OnTime = 1, clearInterval(this.slide), this.paused = !1, this.RenderSlide(), this.next())
            }
        }, {
            key: "clickPrev",
            value: function() {
                clearInterval(this.slide), 1 == OnTime ? this.prev() : 0 == OnTime && (OnTime = 1, clearInterval(this.slide), this.paused = !1, this.RenderSlide(), this.prev())
            }
        }, {
            key: "stopSlide",
            value: function() {
                this.paused = !0, clearInterval(this.slide), this.RenderSlide()
            }
        }, {
            key: "playSlide",
            value: function() {
                1 == OnTime && (clearInterval(this.slide), this.paused = !1, this.RenderSlide(), this.next())
            }
        }, {
            key: "Render",
            value: function() {
                this.paused = !1, OnTime = 0, this.RenderSlide(), this.setCurrent(this.current)
            }
        }, {
            key: "settings",
            value: function() {
                var t = this;
                this.settings = {
                    progress: .5
                }, Object.keys(this.uniforms).forEach(function(e) {
                    t.settings[e] = t.uniforms[e].value
                })
            }
        }, {
            key: "next",
            value: function() {
                var e = this;
                if (!this.isRunning) {
                    this.isRunning = !0;
                    var t = this.textures.length,
                        o = this.textures[(this.current + 1) % t];
                    this.material.uniforms.texture2.value = o, this.unsetCurrent(this.current), this.BG[this.current].classList.remove("slide-current"), this.material.uniforms.progress.value = 0, gsap.to(this.material.uniforms.progress, this.duration, {
                        value: 1,
                        ease: Power2[this.easing],
                        onComplete: function() {
                            e.current = (e.current + 1) % t, e.material.uniforms.texture1.value = o, e.material.uniforms.progress.value = 0, e.isRunning = !1, e.setCurrent(e.current)
                        }
                    })
                }
            }
        }, {
            key: "prev",
            value: function() {
                var e = this;
                if (!this.isRunning) {
                    this.isRunning = !0;
                    var t = this.textures.length,
                        o = 0 == this.current ? t - 1 : this.current - 1,
                        i = this.textures[o];
                    this.material.uniforms.texture1.value = i, this.unsetCurrent(this.current), this.BG[this.current].classList.remove("slide-current"), this.material.uniforms.progress.value = 1, gsap.to(this.material.uniforms.progress, this.duration, {
                        value: 0,
                        ease: Power2[this.easing],
                        onComplete: function() {
                            e.current = o, e.material.uniforms.texture2.value = i, e.material.uniforms.progress.value = 1, e.isRunning = !1, e.setCurrent(e.current)
                        }
                    })
                }
            }
        }, {
            key: "RenderSlide",
            value: function() {
                var t = this;
                SlideBanner.classList.add("show"), this.paused || (this.time += .05, this.material.uniforms.time.value = this.time, Object.keys(this.uniforms).forEach(function(e) {
                    t.material.uniforms[e].value = t.settings[e]
                }), this.renderer.render(this.scene, this.camera), requestAnimationFrame(this.RenderSlide.bind(this)))
            }
        }]), o
    }(),
    FragMent = "\n\t\tuniform float time;\n\t\tuniform float progress;\n\t\tuniform float intensity;\n\t\tuniform float width;\n\t\tuniform float scaleX;\n\t\tuniform float scaleY;\n\t\tuniform float transition;\n\t\tuniform float radius;\n\t\tuniform float swipe;\n\t\tuniform sampler2D texture1;\n\t\tuniform sampler2D texture2;\n\t\tuniform sampler2D displacement;\n\t\tuniform vec4 resolution;\n\t\tvarying vec2 vUv;\n\t\tmat2 getRotM(float angle) {\n\t\t float s = sin(angle);\n\t\t float c = cos(angle);\n\t\t return mat2(c, -s, s, c);\n\t\t}\n\t\tconst float PI = 3.1415;\n\t\tconst float angle1 = PI *0.25;\n\t\tconst float angle2 = -PI *0.75;\n\n\n\t\tvoid main()\t{\n\t\t\tvec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n\n\t\t\tvec4 disp = texture2D(displacement, newUV);\n\t\t\tvec2 dispVec = vec2(disp.r, disp.g);\n\n\t\t\tvec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;\n\t\t\tvec4 t1 = texture2D(texture1, distortedPosition1);\n\n\t\t\tvec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);\n\t\t\tvec4 t2 = texture2D(texture2, distortedPosition2);\n\n\t\t\tgl_FragColor = mix(t1, t2, progress);\n\n\t\t}\n\n\t",
    Banner = function() {
        new Sketch({
            debug: !0,
            uniforms: {
                intensity: {
                    duration: 3.5,
                    debug: !0,
                    easing: "easeOut",
                    value: .15,
                    type: "f",
                    min: 0,
                    max: .8
                }
            },
            fragment: FragMent
        })
    },
    UA = navigator.userAgent,
    isFirefox = (HTML = document.documentElement, "undefined" != typeof InstallTrigger),
    isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(),
    isIE9 = /MSIE 9/i.test(UA),
    isIE10 = /MSIE 10/i.test(UA),
    isIE11 = /rv:11.0/i.test(UA),
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia && !isIE11,
    isChrome = -1 < UA.indexOf("Chrome") || !!window.chrome && !!window.chrome.webstore,
    Mobile = window.matchMedia("(max-width: 1024px)"),
    Touch = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in document.documentElement,
    iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
iOS && HTML.classList.add("is-iOS"), 1 == Touch && HTML.classList.add("is-touch"), isFirefox ? HTML.classList.add("is-Firefox") : isEdge ? HTML.classList.add("is-Edge") : isSafari ? HTML.classList.add("is-Safari") : isChrome && HTML.classList.add("is-Chrome");
var NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge;

function changeUrl(e, t, o, i, n, r, s) {
    void 0 !== window.history.pushState && (document.URL != e && "" != e && window.history.pushState({
        path: e,
        dataName: n,
        title: t,
        keyword: i,
        description: o,
        titleog: r,
        descriptionog: s
    }, "", e));
    "" != t && (DOM.title = t, DOM.querySelector('meta[name="description"]').setAttribute("content", o), DOM.querySelector('meta[name="keywords"]').setAttribute("content", i), DOM.querySelector('meta[property="og:title"]').setAttribute("content", r), DOM.querySelector('meta[property="og:description"]').setAttribute("content", s), DOM.querySelector('meta[property="og:url"]').setAttribute("content", e)), DOM.getElementById("changlanguage_redirect").value = e
}
var timex;
debounce = function(i, n, r) {
    var s;
    return function() {
        var e = this,
            t = arguments,
            o = r && !s;
        clearTimeout(s), s = setTimeout(function() {
            s = null, r || i.apply(e, t)
        }, n), o && i.apply(e, t)
    }
};

function RanDom(e, t) {
    return Math.max(Math.random() * (.1 + t - e) + e)
}

function ResizeWindows() {
    Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile");
    $(window).height(), $(window).width();
    var t = window.innerWidth / 1500,
        o = (window.innerHeight, window.innerWidth / 1300),
        i = window.innerWidth / 1700,
        e = window.innerWidth / 1200,
        n = window.innerWidth / 3e3,
        r = window.innerWidth / 2400,
        s = window.innerWidth / 1800;
    if (window.innerWidth < 540) {
        if (FacilitiesPage) {
            var a = FacilitiesMap1.querySelector(".facilities-bg").clientHeight,
                l = FacilitiesMap2.querySelector(".facilities-bg").clientHeight;
            FacilitiesMap1.style.height = a * i + "px", FacilitiesMap2.style.height = l * e + "px", gsap.to(FacilitiesBg1, {
                duration: 0,
                scale: r,
                ease: Power0.easeInOut
            }), FacilitiesBg1.style.left = window.innerWidth / 2 - 1200 + "px", FacilitiesBg1.style.top = FacilitiesMap1.clientHeight / 2 - 400 + "px", gsap.to(AllDot1, {
                duration: 0,
                scale: r,
                ease: Power0.easeInOut
            }), AllDot1.style.left = window.innerWidth / 2 - 1200 + "px", AllDot1.style.top = FacilitiesMap1.clientHeight / 2 - 400 + "px", gsap.to(FaciArrow, {
                duration: 0,
                scale: r,
                ease: Power0.easeInOut
            }), FaciArrow.style.left = window.innerWidth / 2 - 1200 + "px", FaciArrow.style.top = FacilitiesMap1.clientHeight / 2 - 400 + "px", gsap.to(FacilitiesBg2, {
                duration: 0,
                scale: s,
                ease: Power0.easeInOut
            }), FacilitiesBg2.style.left = window.innerWidth / 2 - 1200 + "px", FacilitiesBg2.style.top = FacilitiesMap2.clientHeight / 2 - 400 + "px", gsap.to(AllDot2, {
                duration: 0,
                scale: s,
                ease: Power0.easeInOut
            }), AllDot2.style.left = window.innerWidth / 2 - 1200 + "px", AllDot2.style.top = FacilitiesMap2.clientHeight / 2 - 400 + "px"
        }
        if (ApartmentPage) Container.querySelectorAll(".apartment-bg").forEach(function(e) {
            gsap.to(e, {
                duration: 0,
                scale: o,
                ease: Power0.easeInOut
            }), e.style.left = window.innerWidth / 2 - 600 + "px", e.style.top = window.innerWidth / 4 - 300 + "px"
        })
    } else if (540 < window.innerWidth && window.innerWidth <= 1100) {
        if (FacilitiesPage) {
            var c = FacilitiesBg[0].clientHeight;
            FacilitiesMap.forEach(function(e) {
                e.style.height = c * i + "px"
            }), FacilitiesBg.forEach(function(e) {
                gsap.to(e, {
                    duration: 0,
                    scale: r,
                    ease: Power0.easeInOut
                }), e.style.left = window.innerWidth / 2 - 1200 + "px", e.style.top = FacilitiesMap[0].clientHeight / 2 - 400 + "px"
            }), AllDot.forEach(function(e) {
                gsap.to(e, {
                    duration: 0,
                    scale: r,
                    ease: Power0.easeInOut
                }), e.style.left = window.innerWidth / 2 - 1200 + "px", e.style.top = FacilitiesMap[0].clientHeight / 2 - 400 + "px"
            }), gsap.to(FaciArrow, {
                duration: 0,
                scale: r,
                ease: Power0.easeInOut
            }), FaciArrow.style.left = window.innerWidth / 2 - 1200 + "px", FaciArrow.style.top = FacilitiesMap[0].clientHeight / 2 - 400 + "px"
        }
        if (ApartmentPage) Container.querySelectorAll(".apartment-bg").forEach(function(e) {
            gsap.to(e, {
                duration: 0,
                scale: o,
                ease: Power0.easeInOut
            }), e.style.left = window.innerWidth / 2 - 600 + "px", e.style.top = window.innerWidth / 4 - 300 + "px"
        })
    } else if (1100 < window.innerWidth) {
        if (FacilitiesPage && (FacilitiesBg.forEach(function(e) {
                e.style.left = window.innerWidth / 2 - 1200 + "px", e.style.top = window.innerHeight / 2 - 530 + "px", gsap.to(e, {
                    duration: 0,
                    scale: n,
                    ease: Power0.easeInOut
                })
            }), AllDot.forEach(function(e) {
                e.style.left = window.innerWidth / 2 - 1200 + "px", e.style.top = window.innerHeight / 2 - 530 + "px", gsap.to(e, {
                    duration: 0,
                    scale: n,
                    ease: Power0.easeInOut
                })
            }), FaciArrow.style.left = window.innerWidth / 2 - 1200 + "px", FaciArrow.style.top = window.innerHeight / 2 - 530 + "px", gsap.to(FaciArrow, {
                duration: 0,
                scale: n,
                ease: Power0.easeInOut
            })), ApartmentPage) Container.querySelectorAll(".apartment-bg").forEach(function(e) {
            gsap.to(e, {
                duration: 0,
                scale: t,
                ease: Power0.easeInOut
            }), e.style.left = window.innerWidth / 2 - 580 + "px", e.style.top = window.innerHeight / 2 - 250 + "px"
        })
    }
}

function ChangeBg() {
    var e = document.querySelectorAll(".pic-img");
    null !== e && e.forEach(function(e) {
        var t = e.querySelector("img").getAttribute("src");
        if (t) {
            var o = t.replace(/(^url\()|(\)$|[\"\'])/g, "");
            e.style.backgroundImage = "url(" + o + ")"
        }
    })
}

function AnimationDelay() {
    Container.querySelectorAll(".ani-item-home").forEach(function(e, t) {
        var o = 300 * Math.random(e);
        t.style.animationDelay = o + "ms"
    })
}

function DrawLoad() {
    LoadIcon.querySelectorAll("path").forEach(function(e) {
        var t = e.getTotalLength();
        (isIE10 || isIE11 || isEdge) && (this.style.strokeDasharray = t, this.style.animationDirection = "reverse", TweenMax.fromTo(this, 1, {
            strokeDashoffset: "0"
        }, {
            strokeDashoffset: t,
            ease: Power2.easeOut
        }), setTimeout(function() {
            LoadIcon.classList.add("show")
        }, 1300)), setTimeout(function() {
            LoadIcon.classList.add("show")
        }, 1300)
    })
}

function Done() {
    (setTimeout(function() {
        ResizeWindows()
    }, 200), 1100 < window.innerWidth) && (BoxSlide(), DOM.querySelectorAll(".text-ani-item h2, .open-nav, .close-nav").forEach(function(e) {
        charming(e)
    }));
    HideMask(), ContentLoad(), LoadIcon && (LoadIcon.classList.add("blur"), TweenMax.to(LoadIcon, 1.6, {
        scale: 2.3,
        ease: Power2.easeOut,
        opacity: "0",
        delay: .1,
        onComplete: function() {
            LoadIcon.remove()
        }
    }));
    var e = Header.querySelectorAll(".navigation ul li"),
        t = e.length;
    if (9 < t)
        for (i = 9; i < t; i++) e[i].classList.add("many");
    $(".box-img img").length && $(".box-img img").clipPath()
}

function HideMask() {
    Mask.classList.add("show"), setTimeout(function() {
        Mask.classList.add("finish")
    }, 1300)
}

function RemoveClass(e) {
    for (var t = 0; t < e.length; t++) e[t].classList.remove("active"), e[t].classList.remove("current"), e[t].classList.remove("current-move")
}
DOM.addEventListener("DOMContentLoaded", function() {
    if (SlideBanner && (SlideBanner.classList.contains("show") || Banner()), ResizeWindows(), LoadIcon.classList.contains("loading") || (LoadIcon.classList.add("loading"), DrawLoad()), setTimeout(function() {
            Wheel.classList.add("show")
        }, 2500), Body.classList.add("hidden"), null !== DOM.querySelectorAll(".pic-img") && ChangeBg(), OuterNav) {
        var e = OuterNav.cloneNode(!0);
        e.querySelector(".sub-nav").style.opacity = 1, e.classList.add("second"), Header.appendChild(e)
    }
    Background && EachButs.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            this.querySelectorAll("path").forEach(function(e) {
                e.style.animation = "none", e.style.strokeDasharray = "265", e.style.strokeDashoffset = "265", e.style.animationFillMode = "forwards", TweenMax.fromTo(e, 2, {
                    strokeDashoffset: "265"
                }, {
                    strokeDashoffset: "0",
                    ease: Power2.easeOut,
                    delay: .1
                })
            })
        }, {
            passive: !0
        })
    }), $(".show-box-pic").length && ($(".show-box-pic, .all-dot-top a").addClass("no-pic"), $(".show-box-pic").each(function(e, t) {
        var o = $(t).find("img");
        if ($(o).length) {
            var i = $(o).parent().attr("data-pic");
            $(t).removeClass("no-pic"), $(".note-facilities li[data-text='" + i + "'] span").removeClass("no-pic"), $(".all-dot-top a[data-name='" + i + "']").removeClass("no-pic")
        }
    }), $(".dot-e-05, .dot-p-02, .dot-e-06").addClass("show-left"))
});
var Arrhash, News = 0,
    Videoload = (Details = 0, 0),
    doWheel = !0,
    doTouch = !0,
    windscroll = $(document).scrollTop();

function onScroll() {
    var e = document.querySelectorAll(".ani-item"),
        t = document.querySelectorAll(".text-ani-item"),
        o = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                .2 < e.intersectionRatio && !e.target.classList.contains("on-show") && e.target.classList.add("on-show")
            })
        }, {
            threshold: [.05, .1, .15, .2, .25]
        });
    observer2 = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
            if (e.target.classList.contains("underline") && e.isIntersecting && !e.target.classList.contains("show-line") && e.target.classList.add("show-line"), e.isIntersecting && !e.target.classList.contains("show-text-ani")) {
                e.target.classList.add("show-text-ani");
                var t = e.target.querySelectorAll("h2 > span");
                TweenMax.staggerFromTo(t, 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: .5
                }, .07)
            } else {
                e.target.classList.remove("show-text-ani"), (t = e.target.querySelectorAll("h2 > span")).forEach(function(e) {
                    TweenMax.to(e, .3, {
                        opacity: 0
                    }, .05)
                })
            }
        })
    }), e.forEach(function(e) {
        o.observe(e)
    }), t.forEach(function(e) {
        observer2.observe(e)
    })
}

function InsertAfter(e, t) {
    e.parentNode.insertBefore(t, e.nextElementSibling)
}

function execSearch() {}

function Search() {
    SearchBut && SearchBut.addEventListener("click", function(e) {
        this.classList.contains("active") ? (FormRowSearch.classList.remove("active"), SearchBut.classList.remove("active"), SearchForm.classList.remove("active")) : (document.getElementById("search").reset(), SearchBut.classList.add("active"), SearchForm.classList.add("active"), FormRowSearch.classList.add("active"), execSearch(), NavClick.classList.contains("active") && NavClick.click(), null !== LoginBox && LoginBox.classList.contains("active") && (LoginBox.classList.remove("active"), LoginOverlay.classList.remove("active")))
    })
}
var KeySearch = document.getElementById("#search");

function NavClickFn() {
    NavClick.addEventListener("click", function() {
        NavClick.classList.contains("active") ? (Html.classList.remove("no-scroll"), Body.classList.remove("no-scroll"), NavClick.classList.remove("active"), Navigation.classList.remove("active"), OverlayMenu.classList.remove("active")) : (Html.classList.add("no-scroll"), Body.classList.add("no-scroll"), Navigation.classList.add("active"), NavClick.classList.add("active"), OverlayMenu.classList.add("active"), Wheel.classList.contains("show") && Wheel.classList.remove("show"))
    }), OverlayMenu.addEventListener("click", function() {
        NavClick.classList.contains("active") && NavClick.click()
    })
}

function BoxSlide() {
    var n = 0,
        o = !1;

    function r() {
        setTimeout(function() {
            GroupCentral.forEach(function(e, t) {
                t !== n && TweenMax.set(GroupCentral[t], {
                    y: "100%"
                })
            }), o = !1
        }, 1e3)
    }

    function i() {
        o = !0, GroupCentral.forEach(function(e) {
            TweenMax.set(e, {
                zIndex: ""
            })
        }), TextAniSpans.forEach(function(e) {
            e.classList.remove("move")
        }), BoxNav.classList.contains("dark") && BoxNav.classList.remove("dark"), Header.classList.contains("dark") && Header.classList.remove("dark"), Footer.classList.contains("dark") && Footer.classList.remove("dark"), SvgInves && SvgInves.classList.contains("show") && (SvgInves.classList.remove("loading"), SvgInves.classList.remove("show")), FacilitiesPage && $(".all-dot-top").children().each(function(e) {
            var t = $(this);
            $(t).removeClass("show")
        }), Wheel.classList.add("show"), GoTop.classList.remove("show"), TweenMax.fromTo(GroupCentral[n], .8, {
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                if (GroupCentral.forEach(function(e) {
                        e.classList.remove("show-text")
                    }), GroupCentral[n].classList.add("show-text"), BoxNavLi.forEach(function(e) {
                        e.classList.remove("current")
                    }), BoxNavLi[n].classList.add("current"), YoutubeVideo && HomeVideo.classList.contains("show-text") && PlayButton.click(), VideoCoverInline && HomeVideo.classList.contains("show-text") && StartPlay(), LastGroup.classList.contains("show-text") && setTimeout(function() {
                        Wheel.classList.remove("show"), GoTop.classList.add("show")
                    }, 300), HomeLocation && HomeLocation.classList.contains("show-text") && MapSvg.classList.add("show"), HomeContact && HomeContact.classList.contains("show-text") && (Header.classList.add("dark"), BoxNav.classList.add("dark"), Footer.classList.add("dark")), AboutInvestor && AboutInvestor.classList.contains("show-text") && (SvgInves.classList.add("loading"), setTimeout(function() {
                        SvgInves.classList.add("show")
                    }, 1500)), $("#facilities-page").length && $(".group-central").hasClass("show-text") && $(".show-text .all-dot-top").children().each(function(e) {
                        var t = $(this);
                        timer = setTimeout(function() {
                            $(t).addClass("show")
                        }, 100 * (e + 1))
                    }), AboutPage || LibraryPage || FacilitiesPage || LibraryPage || ApartmentPage) {
                    var e = BoxNavLi[n].children[0].dataset.href,
                        t = BoxNavLi[n].children[0].dataset.title,
                        o = BoxNavLi[n].children[0].dataset.keyword,
                        i = BoxNavLi[n].children[0].dataset.description;
                    changeUrl(e, t, i, o, BoxNavLi[n].children[0].dataset.page, t, i)
                }
                r()
            }
        })
    }

    function s() {
        o = !0, GroupCentral.forEach(function(e) {
            TweenMax.set(e, {
                zIndex: ""
            })
        }), TextAniSpans.forEach(function(e) {
            e.classList.remove("move")
        }), BoxNav.classList.contains("dark") && BoxNav.classList.remove("dark"), Header.classList.contains("dark") && Header.classList.remove("dark"), Footer.classList.contains("dark") && Footer.classList.remove("dark"), SvgInves && SvgInves.classList.contains("show") && (SvgInves.classList.remove("loading"), SvgInves.classList.remove("show")), FacilitiesPage && $(".all-dot-top").children().each(function(e) {
            var t = $(this);
            $(t).removeClass("show")
        }), Wheel.classList.add("show"), GoTop.classList.remove("show"), TweenMax.fromTo(GroupCentral[n], .8, {
            y: "-100%",
            zIndex: 2
        }, {
            y: "0%",
            ease: Quad.easeOut,
            onComplete: function() {
                if (GroupCentral.forEach(function(e) {
                        e.classList.remove("show-text")
                    }), GroupCentral[n].classList.add("show-text"), BoxNavLi.forEach(function(e) {
                        e.classList.remove("current")
                    }), BoxNavLi[n].classList.add("current"), YoutubeVideo && HomeVideo.classList.contains("show-text") && PlayButton.click(), VideoCoverInline && HomeVideo.classList.contains("show-text") && StartPlay(), LastGroup.classList.contains("show-text") && setTimeout(function() {
                        Wheel.classList.remove("show"), GoTop.classList.add("show")
                    }, 300), HomeLocation && HomeLocation.classList.contains("show-text") && MapSvg.classList.add("show"), HomeContact && HomeContact.classList.contains("show-text") && (Header.classList.add("dark"), BoxNav.classList.add("dark"), Footer.classList.add("dark")), AboutInvestor && AboutInvestor.classList.contains("show-text") && (SvgInves.classList.add("loading"), setTimeout(function() {
                        SvgInves.classList.add("show")
                    }, 1500)), $("#facilities-page").length && $(".group-central").hasClass("show-text") && $(".show-text .all-dot-top").children().each(function(e) {
                        var t = $(this);
                        timer = setTimeout(function() {
                            $(t).addClass("show")
                        }, 100 * (e + 1))
                    }), AboutPage || LibraryPage || FacilitiesPage || LibraryPage || ApartmentPage) {
                    var e = BoxNavLi[n].children[0].dataset.href,
                        t = BoxNavLi[n].children[0].dataset.title,
                        o = BoxNavLi[n].children[0].dataset.keyword,
                        i = BoxNavLi[n].children[0].dataset.description;
                    changeUrl(e, t, i, o, BoxNavLi[n].children[0].dataset.page, t, i)
                }
                r()
            }
        })
    }
    1100 < window.innerWidth && !Body.classList.contains("fullscreen") && 1 < GroupLength && (BoxSlider.addEventListener("wheel", function(e) {
        var t;
        !1 === o && (t = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY || -e.detail))), 1100 < window.innerWidth && !Body.classList.contains("fullscreen") && (null !== GroupCentral[n] && -1 === parseInt(t) ? (GroupLength - 1 <= n ? n = 0 : n += 1, i()) : null !== GroupCentral[n] && 1 === parseInt(t) && (n <= 0 ? n = GroupLength - 1 : n -= 1, s()))
    }), BoxSlider.addEventListener("swiped-up", function(e) {
        doTouch && (doTouch = !1, 1100 < Xwidth && !Body.classList.contains("fullscreen") && (BoxNav.querySelector("current").nextElementSibling.click(), setTimeout(turnWheelTouch, 500)))
    }), BoxSlider.addEventListener("swiped-down", function(e) {
        doTouch && (doTouch = !1, 1100 < Xwidth && !Body.classList.contains("fullscreen") && (BoxNav.querySelector("current").previousElementSibling.click(), setTimeout(turnWheelTouch, 500)))
    })), BoxNavLi.forEach(function(e, t) {
        e.addEventListener("click", function() {
            if (o) return !1;
            !o && n < t ? (n = t, i()) : !o && t < n && (n = t, s())
        })
    }), Wheel.addEventListener("click", function() {
        return BoxNav.querySelector("current").nextElementSibling.click(), !1
    }), setTimeout(function() {
        GroupCentral[0].classList.add("show-text"), BoxNavLi[0].classList.add("current"), BoxNav.classList.add("show")
    }, 500), setTimeout(function() {
        $("#facilities-page").length && $(".show-text .all-dot-top").children().each(function(e) {
            var t = $(this);
            timer = setTimeout(function() {
                $(t).addClass("show")
            }, 100 * (e + 1))
        }), LocationPage && MapSvg.classList.add("show")
    }, 2200), GroupLength <= 1 && (BoxNav.classList.add("display-none"), Body.classList.add("fullmap"))
}

function MouseHandler(i) {
    function e(e) {
        if (!Mobile.matches) {
            var t = i.querySelector(".slidebox-arrow-next"),
                o = i.querySelector(".slidebox-arrow-prev");
            e = window.event || e;
            if (0 < Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))) {
                if (!doWheel) return;
                o.click(), setTimeout(turnWheelTouch, 300)
            } else {
                if (!doWheel) return;
                t.click(), setTimeout(turnWheelTouch, 300)
            }
            return !1
        }
    }
    HTML.classList.contains("is-Firefox") ? i.addEventListener("DOMMouseScroll", e, {
        passive: !0
    }) : (i.addEventListener("wheel", e, {
        passive: !0
    }), i.addEventListener("mousewheel", e, {
        passive: !0
    }))
}

function MakeOption(e) {
    1050 < window.innerWidth ? toView = 3 : window.innerWidth < 1050 && 600 < window.innerWidth ? toView = 2 : toView = 1;
    var t = e.querySelectorAll(".slidebox-item").length;
    1 < t / toView ? e.classList.add("true-option") : e.classList.remove("true-option"), 1 == t && e.classList.add("single")
}
null !== KeySearch && KeySearch.keydown(function(e) {
    13 == e.keyCode && execSearch()
});
var deferredPrompt, SlidePicture = {
    FaciSlide: function() {
        var e = DOM.querySelector(".box-facilities"),
            t = new Splide(e, {
                perPage: 2,
                focus: "center",
                trimSpace: !1,
                start: 1,
                updateOnMove: !0,
                rewind: !0,
                pagination: !1,
                gap: "10px",
                speed: 600,
                destroy: !0,
                breakpoints: {
                    1100: {
                        pagination: !0,
                        destroy: !1
                    }
                }
            });
        window.innerWidth < 1100 && Container.querySelector(".box-facilities").classList.add("true-option");
        t.mount()
    },
    SliderLibrary: function() {
        var e = DOM.querySelectorAll(".slide-library");
        e && e.forEach(function(e) {
            var t = new Splide(e, {
                perPage: 2,
                rewind: !0,
                pagination: !1,
                gap: "0",
                arrowPath: "M59.6,30.1 67.4,22.3 67.5,22.2 67.6,21.8 67.7,21.6 67.7,20.9 67.2,20.4 9.2,20.4 9.2,19.9 67.2,19.9 67.7,19.4 67.7,18.8 67.6,18.6 67.5,18.3 67.4,18.1 59.6,10.3 60.2,9.8 70.6,20.2 60.2,30.7z",
                SizeW: 80,
                speed: 600,
                breakpoints: {
                    1100: {
                        perPage: 2,
                        pagination: !0,
                        arrowPath: !1,
                        gap: "15px"
                    },
                    660: {
                        perPage: 1,
                        pagination: !0,
                        arrowPath: !1,
                        gap: "0"
                    }
                }
            });
            t.on("mounted", function() {
                1100 < window.innerWidth ? 2 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option") : e.classList.add("true-option")
            }), t.on("resize", function() {
                1100 < window.innerWidth && (2 < e.querySelectorAll(".slidebox-item").length ? e.classList.add("true-option") : e.classList.remove("true-option"))
            }), t.mount()
        })
    }
};

function AniText() {
    $(".title-page h1").children().children().each(function(e) {
        var t = $(this);
        setTimeout(function() {
            $(t).addClass("move")
        }, 60 * (e + 1))
    })
}

function FormSubScribe() {
    $(".subscribe").on("click", function() {
        return document.getElementById("register").reset(), $("html, body").addClass("no-scroll"), $(".register-form").scrollTop(0), $(".subscribe").addClass("active"), $(".register-form").addClass("show"), $(".require-col").children().each(function(e) {
            var t = $(this);
            $(t).addClass("show")
        }), $(".youtube-video iframe").length && $(".pause-button").trigger("click"), $(".video-cover-inline").length && $('.group-central[data-name="home-video"]').hasClass("show-text") && StopPlay(), !1
    }), $(".close, .register-form > span").on("click", function() {
        return $("html, body").removeClass("no-scroll"), $(".register-form").scrollTop(0), $(".subscribe").removeClass("active"), $(".register-form").removeClass("show"), $(".video-cover-inline").length && $('.group-central[data-name="home-video"]').hasClass("show-text") && StartPlay(), $(".youtube-video iframe").length && $('.group-central[data-name="home-video"]').hasClass("show-text") && $(".play-button").trigger("click"), !1
    })
}

function NewsLoad(e, t) {
    $(".news-text").length && $(".news-text").remove(), $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(t).find(".news-content").append(e), $(window).width() <= 1100 ? $(".news-text img").addClass("zoom-pic") : $(".news-text img").removeClass("zoom-pic"), ZoomPic(), $(".close-news").addClass("show"), $(".news-text a, .news-text p a").on("click", function(e) {
                e.preventDefault();
                var t = $(this).attr("href");
                return window.open(t, "_blank"), !1
            }), $(t).find(".wrap-news-content, .news-content").stop().animate({
                opacity: 1
            }, 1e3, "linear", function() {
                $(t).addClass("show"), $(".click-hover").fadeIn(600, "linear"), $(".loadx").fadeOut(400, "linear", function() {
                    $(".news-content").addClass("show"), $(".loadx").remove()
                }), 1100 < $(window).width() ? setTimeout(function() {
                    ScrollNiceC()
                }, 400) : detectBut()
            }), $(".close-news, .click-hover").on("click", function() {
                var e = $(".nav li a.current").attr("href"),
                    t = $(".nav li a.current").attr("data-title"),
                    o = $(".nav li a.current").attr("data-keyword"),
                    i = $(".nav li a.current").attr("data-description");
                changeUrl(e, t, i, o, $(".nav li a.current").attr("data-name"), t, i), $(".logo").hasClass("hide") && $(".logo").removeClass("hide"), $(".colum-box-news").removeClass("show"), $(".wrap-news-content, .news-content").stop().animate({
                    opacity: 0
                }, 500, "linear", function() {
                    $(".click-hover").fadeOut(600, "linear"), $(".news-list").removeClass("hide").addClass("fadein"), $(".wheel").removeClass("hide"), $(".news-content").children().remove(), $(".footer").addClass("align"), 1100 < $(window).width() && (ScrollNiceB(), $(".scrollC").scrollTop(0), $(".scrollC").getNiceScroll().remove()), $(".show-text .wave-ani").length && $(".play-svg").trigger("click")
                })
            })
        }
    })
}

function popupLoad(e) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0), t.onreadystatechange = function() {
        if (4 <= this.readyState && this.status < 2e3) {
            var e = this.response;
            Body.insertAdjacentHTML("beforeend", e);
            var t = DOM.querySelector(".details-content"),
                o = DOM.querySelector(".details-center"),
                i = t.querySelector(".close-popup"),
                n = DOM.querySelector(".download-but");
            DOM.querySelector(".to-scrollZ");
            if (TweenMax.fromTo(o, 1, {
                    opacity: "0",
                    transform: "translateY(150px)"
                }, {
                    opacity: "1",
                    transform: "none",
                    ease: Power2.easeOut
                }), i.classList.add("goleft"), null !== n) null == n.querySelector("a").getAttribute("href") && n.classList.add("display-none");
            var r = DOM.querySelector(".loadx");
            TweenMax.to(r, .4, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    o.clientHeight > window.innerheight && o.classList.add("no-after"), r.remove()
                }
            }), HomePage && TweenMax.fromTo(t, 1, {
                opacity: "0",
                transform: "translateY(150px)"
            }, {
                opacity: "1",
                transform: "none",
                ease: Power2.easeOut
            }), (i = DOM.querySelectorAll(".close-popup, .details-content > span")).forEach(function(e) {
                e.addEventListener("click", function() {
                    return TweenMax.to(t, .6, {
                        opacity: "0",
                        ease: Power2.easeOut,
                        onComplete: function() {
                            t.remove()
                        }
                    }), OverlayDark.classList.remove("show"), Body.classList.remove("no-scroll"), HTML.classList.remove("no-scroll"), !1
                })
            })
        }
    }, t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.send()
}

function FocusText() {
    DOM.querySelectorAll(".input-text, .input-area").forEach(function(e) {
        e.addEventListener("focusin", function(e) {
            this.querySelector(".holder").classList.add("hide")
        }), e.addEventListener("focusout", function(e) {
            this.querySelector("input, textarea").value.length <= 0 && this.querySelector(".holder").classList.remove("hide")
        })
    })
}

function LoadProgress(e, t) {
    var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    o.open("GET", e, !0), o.onreadystatechange = function() {
        if (4 <= this.readyState && this.status < 2e3) {
            var e = this.response;
            ProgressLoad.insertAdjacentHTML("beforeend", e), ChangeBg(), ScrollNiceHide();
            var t = DOM.querySelector(".loadx");
            t && TweenMax.to(t, .3, {
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function() {
                    t.remove(), 1100 < $(window).width() && setTimeout(function() {
                        ScrollNiceB()
                    }, 300)
                }
            }), gsap.to(ProgressLoad, {
                duration: .8,
                opacity: 1,
                ease: Power0.easeOut,
                onComplete: function() {
                    TweenMax.staggerFromTo(".box-progress", 1, {
                        opacity: 0,
                        y: 100
                    }, {
                        opacity: 1,
                        y: 0,
                        ease: Power2.easeOut
                    }, .07)
                }
            })
        }
    }, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.send()
}

function ApartmentLoad(e) {
    var t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    t.open("GET", e, !0), t.onreadystatechange = function() {
        if (4 <= this.readyState && this.status < 500) {
            var e = this.response;
            LoadApartment.insertAdjacentHTML("beforeend", e);
            var o = LoadApartment.querySelector(".slide-house"),
                t = LoadApartment.querySelector(".house-connect"),
                n = LoadApartment.querySelector(".slide-pic-nav"),
                r = LoadApartment.querySelector(".title-facilities"),
                s = LoadApartment.querySelector(".house-detail"),
                a = LoadApartment.querySelector(".close-apartment");
            if (null == n) LoadApartment.insertAdjacentHTML("beforeend", '<div class="slide-pic-nav"><div class="next-pic-slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><path fill="currentColor" d="M59.6,30.1 67.4,22.3 67.5,22.2 67.6,21.8 67.7,21.6 67.7,20.9 67.2,20.4 9.2,20.4 9.2,19.9 67.2,19.9 67.7,19.4 67.7,18.8 67.6,18.6 67.5,18.3 67.4,18.1 59.6,10.3 60.2,9.8 70.6,20.2 60.2,30.7z"/></svg></div><div class="prev-pic-slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><path fill="currentColor" d="M20.2,10.4l-7.8,7.8l-0.1,0.1l-0.1,0.4l-0.1,0.2v0.7l0.5,0.5h58v0.5h-58l-0.5,0.5v0.6l0.1,0.2l0.1,0.3l0.1,0.2l7.8,7.8l-0.6,0.5L9.2,20.3L19.6,9.8L20.2,10.4z"/></svg></div></div>'), (n = LoadApartment.querySelector(".slide-pic-nav")).classList.add("show");
            if (null == r) {
                var l = Container.querySelector(".on-slide .title-facilities").innerHTML;
                LoadApartment.insertAdjacentHTML("beforeend", '<div class="title-facilities title-apartment white">' + l + "</div>"), (r = LoadApartment.querySelector(".title-facilities")).classList.add("show")
            }
            var c = DOM.querySelector(".loadx");
            c && TweenMax.to(c, .3, {
                opacity: 0,
                ease: Power2.easeOut,
                onComplete: function() {
                    c.remove()
                }
            });
            var d = new Splide(o, {
                gap: 0,
                perPage: 1,
                speed: 600,
                pagination: !1,
                SizeW: 80,
                cover: !0,
                arrowPath: "M161.1,110.8c-0.2-0.2-0.4-0.4-0.6-0.6l-22.8-22.8c-1.6-1.6-4.2-1.6-5.8,0c-1.6,1.6-1.6,4.2,0,5.8l16.2,16.2H68.8c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1h79.3l-16.2,16.2c-1.6,1.6-1.6,4.2,0,5.8c0.8,0.8,1.9,1.2,2.9,1.2c1.1,0,2.1-0.4,2.9-1.2l26-26L161.1,110.8z",
                drag: !1
            });
            d.on("moved", function(e) {
                Array.from(DOM.querySelectorAll(".slidebox-item"), function(e) {
                    e.classList.remove("this-view", "current", "move")
                })
            }), d.on("active", function(e) {
                var t = o.querySelector(".is-active");
                t.classList.add("this-view"), clearTimeout(timex);
                Array.from(o.querySelectorAll(".slidebox-item")).indexOf(t)
            });
            var u = new Splide(t, {
                rewind: !0,
                fixedWidth: 120,
                fixedHeight: 135,
                isNavigation: !0,
                gap: 30,
                focus: "center",
                pagination: !1,
                arrows: !1,
                cover: !0,
                direction: "ttb",
                heightRatio: 2.5,
                perPage: 2
            }).mount();
            d.sync(u).mount(), 0 == StartApart && LoadNext();
            var h = Container.querySelector(".on-slide .house-text.current"),
                f = [].slice.call(h.parentNode.children).indexOf(h),
                p = Container.querySelector(".on-slide .house-text.current").getAttribute("data-block"),
                m = Container.querySelectorAll(".on-slide .house-text"),
                v = Container.querySelector(".on-slide .house-text:last-child").getAttribute("data-block"),
                g = Container.querySelector(".on-slide .house-text:first-child").getAttribute("data-block"),
                y = LoadApartment.querySelector(".next-pic-slide"),
                w = LoadApartment.querySelector(".prev-pic-slide"),
                b = Container.querySelectorAll(".on-slide .house-text:not(.none-events)");
            for (p == v ? (y.classList.add("disabled"), w.classList.remove("disabled")) : (p == g ? w.classList.add("disabled") : w.classList.remove("disabled"), y.classList.remove("disabled")), 1 == b.length && (w.classList.add("disabled"), y.classList.add("disabled")), i = f + 1; i < m.length; i++) {
                if (!m[i].classList.contains("none-events")) {
                    y.classList.remove("disabled");
                    break
                }
                y.classList.add("disabled")
            }
            for (i = f - 1; - 1 < i; i--) {
                if (!m[i].classList.contains("none-events")) {
                    w.classList.remove("disabled");
                    break
                }
                w.classList.add("disabled")
            }
            gsap.to(LoadApartment, {
                duration: .5,
                opacity: 1,
                ease: Power0.easeOut
            }), a.classList.add("goleft"), LoadApartment.classList.add("show-house"), a.addEventListener("click", function() {
                if (window.innerWidth < 1100) var e = DOM.querySelector(".nav li a.current").getAttribute("href"),
                    t = DOM.querySelector(".nav li a.current").getAttribute("data-title"),
                    o = DOM.querySelector(".nav li a.current").getAttribute("data-keyword"),
                    i = DOM.querySelector(".nav li a.current").getAttribute("data-description"),
                    n = DOM.querySelector(".nav li a.current").getAttribute("data-name");
                else e = DOM.querySelector(".box-nav li.current button").getAttribute("data-href"), t = DOM.querySelector(".box-nav li.current button").getAttribute("data-title"), o = DOM.querySelector(".box-nav li.current button").getAttribute("data-keyword"), i = DOM.querySelector(".box-nav li.current button").getAttribute("data-description"), n = DOM.querySelector(".box-nav li.current button").getAttribute("data-name");
                return changeUrl(e, t, i, o, n, t, i), HouseText.forEach(function(e) {
                    e.classList.remove("current")
                }), window.innerWidth < 1100 && (Body.classList.remove("no-scroll"), Html.classList.remove("no-scroll")), gsap.to(LoadApartment, {
                    duration: .3,
                    opacity: 0,
                    ease: Power0.easeOut,
                    onComplete: function() {
                        OverlayApartment.classList.remove("show"), LoadApartment.classList.remove("display-block", "show-house"), r.remove(), s.remove()
                    }
                }), !1
            })
        }
    }, t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.send()
}

function LoadNext() {
    var s = DOM.querySelector(".load-apartment"),
        o = s.querySelector(".next-pic-slide"),
        t = s.querySelector(".prev-pic-slide");
    StartApart = 1, o.addEventListener("click", function(e) {
        var t = s.querySelector(".house-detail"),
            o = Container.querySelector(".house-text.current"),
            n = [].slice.call(o.parentNode.children).indexOf(o),
            r = Container.querySelectorAll(".on-slide .house-text");
        TweenMax.to(t, .3, {
            opacity: "0",
            x: "-100vw",
            ease: Power2.easeOut,
            onComplete: function() {
                for (i = n + 1; i < r.length; i++)
                    if (!r[i].classList.contains("none-events")) {
                        r[i].click();
                        break
                    }
            }
        })
    }), t.addEventListener("click", function() {
        var e = s.querySelector(".house-detail"),
            t = Container.querySelector(".house-text.current"),
            o = [].slice.call(t.parentNode.children).indexOf(t),
            n = Container.querySelectorAll(".on-slide .house-text");
        TweenMax.to(e, .3, {
            opacity: "0",
            x: "100vw",
            ease: Power2.easeOut,
            onComplete: function() {
                for (i = o - 1; - 1 < i; i--)
                    if (!n[i].classList.contains("none-events")) {
                        n[i].click();
                        break
                    }
            }
        })
    }), s.addEventListener("swiped-left", function(e, t) {
        o.classList.contains("disabled") || o.click()
    }), s.addEventListener("swiped-right", function(e) {
        t.classList.contains("disabled") || t.click()
    })
}

function AlbumLoad(e, g) {
    var y = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    y.open("GET", e, !0), y.onreadystatechange = function() {
        if (4 == y.readyState && 200 == y.status) {
            AllAlbum.innerHTML = y.responseText;
            var i, e = AllAlbum.querySelector(".album-load"),
                t = AllAlbum.querySelector(".close-album");
            Array.from(AllAlbum.querySelectorAll(".pic-name > h3"), function(e) {
                return charming(e), e
            }), Array.from(AllAlbum.querySelectorAll(".pinch-zoom"), function(e) {
                new PinchZoom.default(e, {
                    draggableUnzoomed: !1
                })
            });
            var o = e.querySelectorAll(".container-zoom img"),
                n = document.createElement("div");
            n.className = "all-bg-album";
            for (var r = [].slice.call(o), s = 0; s < o.length; s++) {
                var a = document.createElement("div");
                a.className = "bg-album";
                var l = r[s].src;
                a.style.backgroundImage = "url(" + l + ")", n.appendChild(a)
            }
            OverlayDark.append(n);
            var c = e.querySelector(".album-center"),
                d = e.querySelector(".thumbs"),
                u = e.querySelectorAll(".slidebox-item").length,
                h = (DOM.querySelectorAll(".slidebox-item"), DOM.querySelector(".all-bg-album")),
                f = DOM.querySelectorAll(".bg-album");
            1 < u && (d.classList.add("display-block"), c.classList.add("true-option"));
            var p = new Splide(c, {
                gap: 0,
                perPage: 1,
                speed: 600,
                start: g,
                pagination: !1,
                speed: 600,
                arrowPath: "M59.6,30.1 67.4,22.3 67.5,22.2 67.6,21.8 67.7,21.6 67.7,20.9 67.2,20.4 9.2,20.4 9.2,19.9 67.2,19.9 67.7,19.4 67.7,18.8 67.6,18.6 67.5,18.3 67.4,18.1 59.6,10.3 60.2,9.8 70.6,20.2 60.2,30.7z",
                SizeW: 80
            });
            p.on("mounted", function() {}), p.on("moved", function(e) {
                Array.from(DOM.querySelectorAll(".slidebox-item, .bg-album, .pic-name .box"), function(e) {
                    e.classList.remove("this-view", "current", "move")
                })
            }), p.on("active", function(e) {
                var t = c.querySelector(".is-active");
                t.classList.add("this-view"), clearTimeout(i), AllAlbum.querySelector(".this-view").querySelectorAll(".box").forEach(function(e, t) {
                    i = setTimeout(function() {
                        e.classList.add("move")
                    }, 50 * (t + 1))
                });
                var o = Array.from(c.querySelectorAll(".slidebox-item")).indexOf(t);
                f[o].classList.add("current")
            });
            var m = new Splide(d, {
                rewind: !0,
                fixedWidth: 90,
                fixedHeight: 50,
                isNavigation: !0,
                gap: 5,
                focus: "center",
                pagination: !1,
                arrows: !1,
                cover: !0,
                start: g,
                breakpoints: {
                    600: {
                        fixedWidth: 66,
                        fixedHeight: 40
                    }
                }
            }).mount();
            p.sync(m).mount();
            var v = DOM.querySelector(".loadx");
            gsap.to(e, {
                duration: .8,
                opacity: 1,
                ease: Power0.easeOut,
                onComplete: function() {
                    t.classList.add("goleft"), c.classList.add("fadein"), d.classList.add("fadeinup"), v.classList.remove("display-block"), gsap.to(h, {
                        duration: .5,
                        opacity: 1,
                        delay: .5,
                        ease: Power0.easeOut
                    }), gsap.to(v, {
                        duration: .4,
                        opacity: 0,
                        ease: Power0.easeOut,
                        onComplete: function() {
                            v.remove()
                        }
                    })
                }
            }), t.addEventListener("click", function() {
                return gsap.to([e, h], {
                    duration: .5,
                    opacity: 0,
                    ease: Power0.easeOut,
                    onComplete: function() {
                        AllAlbum.classList.remove("show"), OverlayDark.classList.remove("show"), Body.classList.remove("no-scroll"), HTML.classList.remove("no-scroll"), OverlayDark.innerHTML = "", AllAlbum.innerHTML = "", Container.classList.remove("blur")
                    }
                }), !1
            }), MouseHandler(c)
        }
    }, y.setRequestHeader("X-Requested-With", "XMLHttpRequest"), y.send()
}

function LinkPage() {
    var e = DOM.querySelectorAll(".link-blank");
    DOM.querySelectorAll(".link-load, .link-home, .view-details").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.href,
                o = Navigation.querySelector(".nav");
            return OverlayMenu.classList.add("hide"), gsap.to(o, {
                duration: .4,
                filter: "blur(8px)",
                ease: Power0.easeInOut,
                onComplete: function() {
                    window.location = t
                }
            }), !1
        })
    }), e.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.href;
            return window.open(t, "_blank"), !1
        })
    })
}

function subNav() {
    var o = document.querySelectorAll(".sub-nav:not(.release) li a"),
        i = Header.querySelector(".outer-nav.second"),
        n = i.querySelector(".sub-nav");
    o.forEach(function(e) {
        e.addEventListener("click", function() {
            var e = this.getAttribute("data-name"),
                t = document.querySelector(".set-post[data-post='" + e + "']").offsetTop - 70;
            return o.forEach(function(e) {
                e.classList.remove("current")
            }), Html.scrollTo({
                top: t,
                left: 0,
                behavior: "smooth"
            }), Header.querySelector(".second li a[data-name='" + e + "']").classList.add("current"), i.classList.add("fixed"), n.classList.add("on-show"), setTimeout(function() {
                detectBut()
            }, 300), !1
        })
    }), OuterNav.querySelector("li:first-child a").classList.add("current"), i.querySelector("li:first-child a").classList.add("current")
}

function onChange(e) {
    Container.querySelector(".file-name").html(e.files[0].name)
}

function ContentLoad() {
    LinkPage(), FocusText(), NavClickFn(), ZoomPic(), PrintShare(), Option(), onScroll(), FormSubScribe();
    Container.getAttribute("id");
    if (setTimeout(function() {
            AniText(), Footer.classList.add("show"), Header.classList.add("show")
        }, 600), LinkPopup.forEach(function(e) {
            e.addEventListener("click", function(e) {
                e.preventDefault();
                this.getAttribute("data-name");
                var t = this.getAttribute("href"),
                    o = DOM.querySelector(".details-content");
                return null !== o && o.remove(), Body.classList.contains("scroll") && 0 == Details && (this.parentElement.classList.add("to-scrollZ"), Details = 1), OverlayDark.classList.add("show"), Body.classList.add("no-scroll"), HTML.classList.add("no-scroll"), Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>'), DOM.querySelector(".loadx").style.opacity = "1", popupLoad(t), !1
            });
            var t = DOM.querySelector(".link-popup.current");
            null !== t && t.click(), 1 < window.location.hash.length && setTimeout(function() {
                LocationHash()
            }, 1e3)
        }), HomePage ? setTimeout(function() {
            Wheel.classList.add("show")
        }, 600) : (Logo.style.cursor = "pointer", Logo.addEventListener("click", function() {
            NavLi[0].querySelector("a").click()
        })), HomePage) {
        if (1100 < window.innerWidth ? ($(".map-img").addClass("show"), ScaleMap(), HomeFacilities && 1100 < window.innerWidth && MoveBackground()) : ($(".map-mobile, .pointer-map, .map-svg").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
                new PinchZoom.default(t, {
                    draggableUnzoomed: !1
                })
            }), HomeLocation && ScaleMap(), HomeFacilities && SlidePicture.FaciSlide()), HomeLibrary) HomeLibrary.querySelectorAll(".library-item").forEach(function(e) {
            e.addEventListener("click", function() {
                this.querySelector("a").click()
            })
        });
        $(".home-popup").length && setTimeout(function() {
            var e = $(".home-popup").attr("data-href");
            OverlayDark.classList.add("show"), Body.classList.add("no-scroll"), HTML.classList.add("no-scroll"), Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>');
            DOM.querySelector(".loadx");
            return popupLoad(e), !1
        }, 1e3)
    }
    AboutPage && (1100 < $(window).width() && setTimeout(function() {
        ScrollNiceB()
    }, 300), 1100 < window.innerWidth ? Container.querySelector(".box-nav li.subcurrent") && setTimeout(function() {
        Container.querySelector(".box-nav li.subcurrent button").click()
    }, 1e3) : (t = Container.querySelector(".group-central.current")) && setTimeout(function() {
        var e = t.offsetTop - 60;
        Html.scrollTo({
            top: e,
            left: 0,
            behavior: "smooth"
        })
    }, 1e3));
    LocationPage && (Container.querySelectorAll(".more-button").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            for (var t = 0, o = this.parentElement.parentElement.querySelector(".text-inner-location"), i = o.querySelectorAll("p"), n = 0; n < i.length; n++) t = i[n].clientHeight + t;
            this.classList.contains("active") ? (o.removeAttribute("style"), this.classList.remove("active")) : (o.style.height = t + "px", this.classList.add("active"))
        })
    }), 1100 < $(window).width() && setTimeout(function() {
        ScrollNiceB()
    }, 300), $(".map-svg").length && $(".map-svg").addClass("show"), 1100 < $(window).width() ? (ZoomMap(), $(".go-top").addClass("display-none")) : ($(".map-mobile, .pointer-map, .map-svg").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
        new PinchZoom.default(t, {
            draggableUnzoomed: !1
        })
    })), $(".dot-p").hover(function(e) {
        if (1100 < $(window).width()) {
            var t = $(this).attr("data-dot"),
                o = e.clientX,
                i = e.clientY;
            $(this).addClass("current"), "dot-7" == t ? $(".show-box[data-box='" + t + "']").css({
                left: o - 250 - 30,
                top: i - 80
            }) : "dot-3" == t || "dot-4" == t || "dot-5" == t || "dot-6" == t ? $(".show-box[data-box='" + t + "']").css({
                left: o - 125,
                top: i - 215
            }) : $(".show-box[data-box='" + t + "']").css({
                left: o + 60,
                top: i - 80
            }), $('.show-box[data-box= "' + t + '"]').addClass("showup")
        }
    }, function() {
        1100 < $(window).width() && $(".show-box").removeClass("showup")
    }), $(".dot-p").on("mouseleave", function() {
        $(".dot-p").removeClass("current"), $(".show-box").removeClass("showup")
    }), window.innerWidth < 1100 && $(".show-box").on("click", function(e) {
        var t = $(this).attr("data-box");
        $(".show-box").removeClass("showup"), $(".dot-p").removeClass("current"), $(this).addClass("showup"), $('.dot-p[data-dot= "' + t + '"]').addClass("current")
    }));
    FacilitiesPage && (BoxNav.classList.add("center"), $(window).width() < 1100 && ScrollNiceA(), $(".all-dot-top a").on("mouseenter click", function(e) {
        var t = $(this).attr("data-name"),
            o = $(this).offset().left,
            i = $(this).offset().top,
            n = $(this).attr("data-name"),
            r = $(".show-box-pic[data-pic='" + n + "']").innerHeight(),
            s = $(".show-box-pic[data-pic='" + n + "']").innerWidth();
        return e.preventDefault(), e.stopPropagation(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(this).addClass("current"), $(".show-box-pic").removeClass("showup"), 1100 < $(window).width() ? ($(".show-box-pic.no-pic[data-pic='" + n + "']").css({
            left: o - (s / 2 - 40),
            top: i - (r + 20)
        }).addClass("showup"), $(".show-box-pic:not(.no-pic)[data-pic='" + n + "']").css({
            left: o + 40,
            top: i - r / 2
        }).addClass("showup"), $(".show-box-pic.show-left[data-pic='" + n + "']").css({
            left: "auto",
            right: o + 40,
            top: i - r / 2
        }).addClass("showup")) : ($(".show-box-pic:not(.show-left)[data-pic='" + n + "']").css({
            left: o - (s / 2 - 20),
            top: i - 100
        }).addClass("showup"), $(".show-box-pic.show-left[data-pic='" + n + "']").css({
            left: o + 40,
            top: i - 100
        }).addClass("showup")), $(".note-facilities li[data-text='" + t + "']").addClass("current"), !1
    }), $(".note-facilities li, .all-dot-top a").on("mouseleave", function() {
        $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("showup")
    }), $(".all-dot-top a:not(.no-pic)").on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), $(".show-box-pic").removeClass("current");
        var t = $(this).attr("data-name");
        ($(".show-box-pic[data-pic='" + t + "']").removeClass("showup").addClass("current"), "" !== t) && (ThumbZoom($(".show-box-pic[data-pic='" + t + "']").find("img").attr("data-src"), $(".show-box-pic[data-pic='" + t + "']").find(".faci-text h3").text()), $(".all-dot-top a, .note-facilities li").removeClass("current"));
        return !1
    }), $(".note-facilities li").on("mouseenter", function(e) {
        e.preventDefault(), e.stopPropagation(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("showup"), $(this).addClass("current");
        var t = $(this).attr("data-text");
        $(".all-dot-top a[data-name='" + t + "']").trigger("mouseenter"), $(".all-dot-top a[data-name='" + t + "']").addClass("current")
    }), $(".note-facilities li").on("click", function(e) {
        e.preventDefault(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("showup"), $(this).addClass("current");
        var t = $(this).attr("data-text");
        if ($(".all-dot-top a[data-name='" + t + "']").trigger("click"), window.innerWidth <= 1100) {
            var o = $(".all-dot-top a[data-name='" + $(this).attr("data-text") + "']").offset().top - 140;
            Html.scrollTo({
                top: o,
                left: 0,
                behavior: "smooth"
            })
        }
    }), $(".show-box-pic:not(.no-pic)").on("click", function(e) {
        return e.preventDefault(), e.stopPropagation(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("current"), $(this).removeClass("showup").addClass("current"), ThumbZoom($(this).find("img").attr("data-src"), $(this).find(".faci-text h3").text()), $(".show-box-pic").removeClass("showup"), !1
    }), $(".show-box-pic.no-pic").on("click", function(e) {
        return e.preventDefault(), e.stopPropagation(), $(".show-box-pic").removeClass("showup"), $(".all-dot-top a, .note-facilities li").removeClass("current"), !1
    }), $(".container").on("click", function(e) {
        return e.preventDefault(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("current"), $(".show-box-pic").removeClass("showup"), !1
    }), 1100 < window.innerWidth ? Container.querySelector(".box-nav li.subcurrent") && setTimeout(function() {
        Container.querySelector(".box-nav li.subcurrent button").click()
    }, 1e3) : (t = Container.querySelector(".group-central.current")) && setTimeout(function() {
        var e = t.offsetTop - 60;
        Html.scrollTo({
            top: e,
            left: 0,
            behavior: "smooth"
        })
    }, 1e3));
    if (ApartmentPage) {
        var t;
        if (BoxNav.classList.add("center"), Allhouse.forEach(function(e) {
                e.addEventListener("mouseover", function(e) {
                    if (1100 < window.innerWidth) {
                        var t = this.getAttribute("data-path"),
                            o = Container.querySelector(".num[data-num='" + t + "']"),
                            i = Container.querySelector(".house-text[data-block='" + t + "']"),
                            n = o.getBoundingClientRect().y,
                            r = o.getBoundingClientRect().x,
                            s = window.innerHeight,
                            a = i.clientWidth;
                        i.classList.add("show"), o.classList.add("hide"), i.classList.contains("down") ? (i.style.left = r - a / 2 + 5 + "px", i.style.top = n + s / 8.3 + "px") : (i.style.left = r - a / 2 + 5 + "px", i.style.top = n - s / 5.4 + "px")
                    }
                }), e.addEventListener("mouseout", function(e) {
                    if (1100 < window.innerWidth) {
                        var t = Container.querySelectorAll(".house-text"),
                            o = Container.querySelectorAll(".num");
                        t.forEach(function(e) {
                            e.classList.remove("show")
                        }), o.forEach(function(e) {
                            e.classList.remove("hide")
                        })
                    }
                }), e.addEventListener("click", function(e) {
                    var t = this.getAttribute("data-path");
                    Container.querySelector(".house-text[data-block='" + t + "']").click()
                })
            }), HouseText.forEach(function(e) {
                e.classList.contains("none-events") || e.addEventListener("click", function() {
                    var e = this.querySelector(".go-link").getAttribute("href"),
                        t = this.querySelector(".go-link").getAttribute("href"),
                        o = this.querySelector(".go-link").getAttribute("data-title"),
                        i = this.querySelector(".go-link").getAttribute("data-keyword"),
                        n = this.querySelector(".go-link").getAttribute("data-description");
                    changeUrl(t, o, n, i, this.querySelector(".go-link").getAttribute("data-name"), o, n), DOM.querySelector(".social-apart a.facebook").setAttribute("href", "https://www.facebook.com/sharer.php?u=" + t);
                    var r = LoadApartment.querySelector(".house-detail");
                    r && r.remove(), window.innerWidth < 1100 && (Body.classList.add("no-scroll"), Html.classList.add("no-scroll")), HouseText.forEach(function(e) {
                        e.classList.remove("current")
                    }), Apartment.forEach(function(e) {
                        e.classList.remove("on-slide")
                    }), this.classList.add("current"), this.parentNode.parentNode.classList.add("on-slide"), Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'), DOM.querySelector(".loadx").style.opacity = "1", OverlayApartment.classList.add("show"), LoadApartment.classList.add("display-block"), TweenMax.to(LoadApartment, .3, {
                        opacity: 1,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            ApartmentLoad(e)
                        }
                    })
                })
            }), 1100 < window.innerWidth) Container.querySelector(".box-nav li.subcurrent") && setTimeout(function() {
            Container.querySelector(".box-nav li.subcurrent button").click()
        }, 1e3);
        else(t = Container.querySelector(".group-central.current")) && setTimeout(function() {
            var e = t.offsetTop - 60;
            Html.scrollTo({
                top: e,
                left: 0,
                behavior: "smooth"
            })
        }, 1e3);
        null !== Container.querySelector(".go-link.current") && Container.querySelector(".go-link.current").parentElement.click()
    }(EnvironmentPage, LibraryPage) && (SlidePicture.SliderLibrary(), BoxNav.classList.add("center"), Container.querySelectorAll(".library-item").forEach(function(e) {
        e.addEventListener("click", function() {
            this.querySelector("a").click()
        })
    }), 1100 < window.innerWidth ? Container.querySelector(".box-nav li.subcurrent") && setTimeout(function() {
        Container.querySelector(".box-nav li.subcurrent button").click()
    }, 1e3) : (t = Container.querySelector(".group-central.current")) && setTimeout(function() {
        var e = t.offsetTop - 60;
        Html.scrollTo({
            top: e,
            left: 0,
            behavior: "smooth"
        })
    }, 1e3));
    if (ProgressPage) {
        $(".select-header").bind("click", function() {
            $(".select-header").hasClass("onclick") ? ($(".select-header").removeClass("onclick"), $(this).next(".select-box").fadeOut(200, "linear")) : ($(this).addClass("onclick"), $(this).next(".select-box").fadeIn(200, "linear"), $(this).closest(".select-list").on("mouseleave", function() {
                $(this).find(".select-box").fadeOut(200, "linear"), $(".select-header").removeClass("onclick")
            }))
        }), $(".select-box li a").on("click", function(e) {
            e.preventDefault(), $(this).parent().parent().find("li").removeClass("selected"), $(this).parent().parent().parent().parent().find(".select-header h3").text($(this).text()), $(this).parent().addClass("selected"), $(this).closest(".select-box").fadeOut(200, "linear"), $(".select-header").removeClass("onclick");
            $(this).attr("data-month");
            var t = $(this).attr("href"),
                o = $(this).find("h3").text();
            $(".box-progress").stop().animate({
                opacity: 0
            }, 300, "linear", function() {
                $(".box-progress").remove()
            }), Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'), DOM.querySelector(".loadx").style.opacity = "1", TweenMax.to(ProgressList, .3, {
                opacity: 1,
                ease: Power2.easeOut,
                onComplete: function() {
                    LoadProgress(t, o)
                }
            });
            var i = $(this).attr("href"),
                n = $(this).attr("data-title"),
                r = $(this).attr("data-keyword"),
                s = $(this).attr("data-description");
            return changeUrl(i, n, s, r, $(this).attr("data-month"), n, s), !1
        }), $(".select-box li.selected").length ? $(".select-box li.selected a").trigger("click") : function() {
            var e = new Date,
                o = e.getMonth() + 1;
            o < 10 && (o = "0" + o);
            var i = e.getFullYear(),
                n = 0;
            $(".select-box li a").each(function(e, t) {
                $(t).attr("data-month") == o + "-" + i && (n = 1)
            }), 1 == n ? $(".select-box li a[data-month='" + o + "-" + i + "']").trigger("click") : $(".select-box li:first-child a").trigger("click")
        }()
    }
    NewsPage && ($(".link-page").on("click", function(e) {
        e.preventDefault(), News = 1, 1100 < $(window).width() && ($(".logo").hasClass("hide") || $(".logo").addClass("hide")), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".link-page").removeClass("current"), $(".overlay-news").addClass("show"), $(this).addClass("current");
        var t = $(".colum-box-news"),
            o = ($(this).find(".head-text a").attr("data-name"), $(this).find(".head-text a").attr("href")),
            i = $(this).find(".head-text a").attr("data-title"),
            n = $(this).find(".head-text a").attr("data-keyword"),
            r = $(this).find(".head-text a").attr("data-description");
        changeUrl(o, i, r, n, $(this).find(".head-text a").attr("data-details"), i, r);
        var s = $(this).find(".head-text a").attr("href");
        return 1100 < $(window).width() && $(".scrollB").getNiceScroll().hide(), $(".news-content").removeClass("show"), 1100 < $(window).width() && $(".news-list, .wheel").addClass("hide"), $(".colum-box-news").addClass("show"), $(".news-content").stop().animate({
            opacity: 0
        }, 600, "linear", function() {
            NewsLoad(s, t)
        }), !1
    }), 1100 < $(window).width() ? (setTimeout(function() {
        ScrollNiceB()
    }, 300), setTimeout(function() {
        "block" == $(".news-list .nicescroll-rails").css("display") && $(".wheel").addClass("show")
    }, 1e3)) : $(".colum-box-news").hasClass("show") || $(".news-list").each(function(e, t) {
        $(".link-page.current").length ? $(t).find(".link-page.current").trigger("click") : $(t).find(".group:first-child .link-page:first-child").trigger("click")
    }), $(".link-page.current").length && $(".link-page.current").trigger("click")), ContactPage && (Header.classList.add("dark"), BoxNav.classList.add("dark"), Footer.classList.add("dark"))
}

function CancelMove() {
    $(".slidebox-list").removeClass("moving"), HomeFacilities.querySelectorAll(".item-faci-home svg").forEach(function(e) {
        gsap.set(e, {
            x: 0,
            y: 0,
            z: 0
        })
    })
}

function MoveBackground() {
    var t = null,
        o = {
            X: 0,
            Y: 0
        },
        e = $(window).width() / 2,
        i = $(window).height() / 2;

    function n() {
        DX = o.X - e, DY = o.Y - i, MoveX = DY / i, MoveY = DX / e, Radius = Math.sqrt(Math.pow(MoveX, 2) + Math.pow(MoveY, 2)), Degree = 2 * Radius, gsap.to(".moving .item-faci-home:nth-child(1) svg", 1, {
            x: 10 * MoveX,
            y: -10 * MoveY,
            z: 40 * Degree,
            ease: Power2.easeOut
        }), gsap.to(".moving .item-faci-home:nth-child(2) svg", 1, {
            x: 13 * MoveX,
            y: -10 * MoveY,
            z: 40 * Degree,
            ease: Power2.easeOut
        }), gsap.to(".moving .item-faci-home:nth-child(3) svg", 1, {
            x: 16 * MoveX,
            y: -10 * MoveY,
            z: 40 * Degree,
            ease: Power2.easeOut
        }), gsap.to(".moving .item-faci-home:nth-child(4) svg", 1, {
            x: 19 * MoveX,
            y: -10 * MoveY,
            z: 40 * Degree,
            ease: Power2.easeOut
        }), gsap.to(".moving .item-faci-home:nth-child(5) svg", 1, {
            x: 21 * MoveX,
            y: -10 * MoveY,
            z: 40 * Degree,
            ease: Power2.easeOut
        })
    }
    $(".slidebox-list").addClass("moving"), 1100 < window.innerWidth ? $(".box-slider").on("mousemove", function(e) {
        o.X = e.pageX, o.Y = e.pageY, cancelAnimationFrame(t), t = requestAnimationFrame(n)
    }) : $(".box-slider").on("mousemove", function() {
        cancelAnimationFrame(t), Cancel()
    }), window.addEventListener("resize", function() {
        1100 < $(window).width() ? (e = $(window).width() / 2, i = $(window).height() / 2) : CancelMove()
    })
}

function ThumbZoom(e, t) {
    $("html, body").addClass("no-scroll"), $(this).parent().addClass("to-scroll"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"  style="display:block"></div>'), $(".overlay-dark").addClass("show");
    var o = e;
    $(".all-pics").find(".full").append('<img src ="' + o + '" alt="pic" >'), $(".all-pics").find(".full").append("<span></span>"), $(".all-pics").append('<a class="close-pics" href="javascript:void(0);"></a>'), $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'), $(".all-pics img").on("load", function() {
        $(".all-pics").addClass("show"), $(".text-length h3").text(t), Mobile.matches ? ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
            new PinchZoom.default(t, {})
        })) : $(".full").addClass("dragscroll"), $(".close-pics").addClass("goleft"), 1 < $(".full img").length && $(".full img").last().remove(), $(".loadx").fadeOut(500, function() {
            Mobile.matches || detectMargin(), $(".full img, .text-length").addClass("fadein"), $(".loadx").remove()
        })
    }), 1100 < $(window).width() && $(".full span").on("click", function() {
        $(".close-pics").trigger("click")
    }), $(".close-pics").on("click", function() {
        $(".loadx").remove(), $(".full").fadeOut(300, "linear", function() {
            if ($(".overlay-dark").removeClass("show"), $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(), $(".close-pics").remove(), $(".all-pics").removeClass("show"), $(".to-scroll").length) {
                var e = $(".to-scroll").offset().top;
                $(window).width() < 1100 && $("html, body").scrollTop(e - 60), $(".to-scroll").removeClass("to-scroll")
            }
        }), $("html, body").removeClass("no-scroll")
    })
}

function ZoomMap() {
    $(".viewer").addClass("desktop"), $(".viewer").find(".panzoom").panzoom({
        $zoomIn: $(".pic-zoom-in"),
        $zoomOut: $(".pic-zoom-out"),
        maxScale: 3,
        minScale: 1,
        increment: .15,
        contain: "automatic"
    }).panzoom("zoom"), ScaleMap(), setTimeout(function() {
        $(".apartment-pointer").addClass("show")
    }, 1e3)
}

function ScaleMap() {
    var e = HomeLocation.querySelectorAll(".map-img"),
        t = Container.querySelector(".panzoom"),
        o = window.innerHeight / 1e3;
    t.style.transform = "matrix(1, 0, 0, 1, 0, 0)", e.forEach(function(e) {
        gsap.to(e, {
            duration: 0,
            scale: o,
            ease: Power0.easeInOut
        })
    })
}

function ScrollNiceA() {
    $(".show-text .scrollA").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1,
        cursorfixedheight: 150,
        zindex: 100
    }), $(".show-text .scrollA").animate({
        scrollTop: "0px"
    }), $(".show-text .scrollA").getNiceScroll().show()
}

function ScrollNiceB() {
    $(window).width() <= 1100 ? $(".scrollB").getNiceScroll().remove() : ($(".scrollB").getNiceScroll().show(), $(".scrollB").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }), 0 == News && $(".scrollB").animate({
        scrollTop: "0px"
    }))
}

function ScrollNiceC() {
    $(window).width() <= 1100 ? $(".scrollC").getNiceScroll().remove() : ($(".scrollC").getNiceScroll().show(), $(".scrollC").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }), $(".scrollC").animate({
        scrollTop: "0px"
    }))
}

function ScrollNiceHide() {
    $(".scrollA, .scrollB, .scrollC").getNiceScroll().remove()
}

function VideoLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".allvideo").append(e);
            DOM.querySelector(".close-video");
            $(".video-wrap").append(t), $(".loadx").fadeOut(400, "linear", function() {
                $(".loadx").remove()
            }), $(".close-video").addClass("show"), $(".close-video").on("click", function() {
                $(".allvideo").fadeOut(500, "linear", function() {
                    if ($(".overlay-dark").removeClass("show"), $(".allvideo .video-list").remove(), Html.classList.remove("no-scroll"), Body.classList.remove("no-scroll"), $("body").hasClass("scroll") && ScrollBody(), $(".to-scrollV").length) {
                        var e = $(".to-scrollV").offset().top;
                        Xwidth < 1100 && $("html, body").scrollTop(e), $(".to-scrollV").removeClass("to-scrollV")
                    }
                })
            })
        }
    })
}

function LoadAPI() {
    var e = document.createElement("script");
    e.src = "https://www.youtube.com/player_api";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}

function turnWheelTouch() {
    doTouch = doWheel = !0
}

function LocationHash() {
    var t = window.location.hash;
    t = t.slice(1);
    var e = Container.querySelector(".news-item a[data-details='" + t + "']"),
        o = Container.querySelector(".select-box li a[data-month='" + t + "']"),
        i = Container.querySelector(".link-popup[data-name='" + t + "']"),
        n = Container.querySelector(".slide-pagi a[data-number='" + t + "']"),
        r = Container.querySelector(".view-news[data-name='" + t + "']");
    r && r.click(), e && e.click(), o && o.click(), i && i.click(), n && n.click(), BoxNav && BoxNavLiBut.forEach(function(e) {
        e.getAttribute("data-page") == t && e.click()
    })
}
document.addEventListener("keydown", function(e) {
    var t = e.keyCode || e.which;
    38 === t && $(".box-nav li.current").prev().trigger("click"), 40 === t && $(".box-nav li.current").next().trigger("click")
}), document.addEventListener("DOMContentLoaded", function() {
    GoTop.addEventListener("click", function() {
        1100 < window.innerWidth && void 0 !== BoxNav ? BoxNavLi[0].click() : Html.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }), setTimeout(function() {
        0 == LoadSig && (LoadSig = 1, Done())
    }, 2100), $("#video-full").length && VideoFull()
}), window.innerWidth < 1100 && window.addEventListener("scroll", function() {
    var i = $(document).scrollTop();
    if (70 <= windscroll ? Wheel.classList.remove("show") : Wheel.classList.add("show"), OuterNav) {
        var e = Header.querySelector(".outer-nav.second");
        i >= OuterNav.getBoundingClientRect().top + window.scrollY - 40 ? (e.classList.add("fixed"), OuterNav.classList.add("fixed")) : (e.classList.remove("fixed"), OuterNav.classList.remove("fixed"))
    }
    SetPost = Container.querySelectorAll(".set-post"), SetPost && SetPost.forEach(function(e) {
        var t = e.offsetTop - 300;
        if ((o = e.clientHeight) < window.innerHeight) var o = window.innerHeight;
        if (t <= i && i <= t + o) {
            if (e.classList.add("active"), 1 == doWheel) document.querySelectorAll(".sub-nav:not(.release) li a").forEach(function(e) {
                e.classList.remove("current")
            }), document.querySelectorAll('.sub-nav:not(.release) li a[data-name="' + e.getAttribute("data-post") + '"]').forEach(function(e) {
                e.classList.add("current")
            });
            detectBut()
        }
    }), windscroll = i
}, {
    passive: !0
}), window.onorientationchange = ResizeWindows, $(window).on("orientationchange", function() {
    Xwidth <= 1100 && $(".outer-nav.second").length && detectBut()
}), window.addEventListener("resize", function() {
    if (ResizeWindows(), 1100 < window.innerWidth) {
        o = !1, $(".scrollB").length && ScrollNiceB(), $(".scrollC").length && ScrollNiceC();
        var e = DOM.querySelector(".show-text");
        if (e) {
            if (1 == o) {
                var t = e.getAttribute("data-name");
                BoxNav.querySelector('button[data-page="' + t + '"]').click(), BoxSlide()
            }
        } else BoxNavLiBut[0].click(), BoxSlide();
        if (BoxNav.classList.contains("show") || BoxNav.classList.add("show"), HomePage && (HomeLocation && ScaleMap(), HomeFacilities && (MoveBackground(), BoxFaci.classList.contains("true-option") && SlidePicture.FaciSlide())), LocationPage && ($(".map-mobile .map-svg").removeClass("show"), $(".viewer").hasClass("desktop") || ZoomMap(), $(".pointer-map").hasClass("show") || $(".pointer-map").addClass("show")), AboutPage || FacilitiesPage || LibraryPage || ApartmentPage) Container.querySelector(".box-nav li.subcurrent") ? setTimeout(function() {
            Container.querySelector(".box-nav li.subcurrent button").click()
        }, 1e3) : Container.querySelector(".box-nav li:first-child button").click();
        $(".full.dragscroll").length && !$(".img-chart").length && (Html.classList.remove("no-scroll"), Body.classList.remove("no-scroll"), $(".close-pics").trigger("click")), $(".dragscroll").length && (detectMargin(), $(".dragscroll").draptouch())
    } else {
        $(".scrollA, .scrollB, .scrollC").length && $(".scrollA, .scrollB, .scrollC").getNiceScroll().remove(), o = !0, HomePage && ($(".map-mobile").hasClass("show") || ($(".map-mobile").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
            new PinchZoom.default(t, {
                draggableUnzoomed: !1
            })
        })), HomeFacilities && (BoxFaci.classList.contains("true-option") || SlidePicture.FaciSlide(), CancelMove())), $("#location-page").length && ($(".map-mobile").hasClass("show") || ($(".map-mobile .map-svg").addClass("show"), $(".map-mobile").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
            new PinchZoom.default(t, {
                draggableUnzoomed: !1
            })
        })), $(".pointer-map").hasClass("show") && $(".pointer-map").removeClass("show")), $("#news-page").length && ($(".colum-box-news").hasClass("show") || $(".news-list").each(function(e, t) {
            $(".link-page.current").length ? $(t).find(".link-page.current").trigger("click") : $(t).find(".group:first-child .link-page:first-child").trigger("click")
        })), $(".dragscroll").length && (detectMargin(), $(".dragscroll").draptouch());
        var o = !0;
        Mobile.matches || $(".outer-nav.second").length && detectBut()
    }
}, 250), window.onpopstate = function(e) {
    e.preventDefault();
    var t = DOM.querySelector(".httpserver").innerHTML;
    if (null !== history.state) {
        var o = history.state.path;
        history.state.dataName, history.state.title, o.replace(t, "")
    } else o = document.URL;
    (AboutPage || FacilitiesPage || LibraryPage) && (null != DOM.querySelector(".close-video") && DOM.querySelector(".close-video").click(), null != DOM.querySelector(".close-album") && DOM.querySelector(".close-album").click(), DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && window.history.back()
    }), DOM.querySelectorAll(".box-nav button").forEach(function(e) {
        e.dataset.href == o && e.click()
    })), null !== NewsPage && (1100 < window.innerWidth ? null != DOM.querySelector(".news-text") ? DOM.querySelector(".close-news").click() : (DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && window.history.back()
    }), DOM.querySelectorAll(".view-news").forEach(function(e) {
        e.href == o && e.click()
    })) : (DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && window.history.back()
    }), DOM.querySelectorAll(".view-news").forEach(function(e) {
        e.href == o && e.click()
    }))), ProgressPage && (null != DOM.querySelector(".close-video") && DOM.querySelector(".close-video").click(), null != DOM.querySelector(".close-album") && DOM.querySelector(".close-album").click(), DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && window.history.back()
    }), $(".select-box li a").each(function(e, t) {
        $(t).attr("href") == o && $(t).trigger("click")
    })), ApartmentPage && (null != DOM.querySelector(".close-album") && DOM.querySelector(".close-album").click(), DOM.querySelectorAll(".nav a").forEach(function(e) {
        e.href == o && window.history.back()
    }), DOM.querySelectorAll(".box-nav li button").forEach(function(e) {
        e.dataset.href == o && (null != DOM.querySelector(".close-apartment") && DOM.querySelector(".close-apartment").click(), e.click())
    }), HouseText.forEach(function(e) {
        e.querySelector(".go-link").getAttribute("href") == o && e.click()
    }))
};
var addBtn = document.querySelector(".add-button"),
    closeAdd = document.querySelector(".close-add"),
    installApp = document.querySelector(".install-app");

function Option() {
    $(".view-pdf").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        return window.open(t, "_blank"), !1
    }), $(".library-thumb").on("click", function(e) {
        $(".player").trigger("click")
    }), Container.querySelectorAll(".view-album").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault();
            var t = this.getAttribute("data-href") || this.getAttribute("href");
            return Body.classList.add("no-scroll"), HTML.classList.add("no-scroll"), OverlayDark.classList.add("show"), AllAlbum.classList.add("show"), Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'), DOM.querySelector(".loadx").style.opacity = "1", AlbumLoad(t, 0), !1
        })
    }), $(".view-video").on("click", function(e) {
        e.preventDefault(), $(this).parent().addClass("to-scrollV");
        var t, o = $(this).attr("data-href") || $(this).attr("href"),
            i = $(this).attr("data-embed").match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),
            n = '<iframe id="VYT" src="https://www.youtube.com/embed/' + (t = i && 11 == i[2].length ? i[2] : "no video found") + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + t + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
        return Html.classList.add("no-scroll"), Body.classList.add("no-scroll"), $(".overlay-dark").addClass("show"), $(".allvideo").fadeIn(300, "linear", function() {
            VideoLoad(o, n)
        }), !1
    }), $(".zoom:not(.link-popup), .zoom-details").on("click", function() {
        Html.classList.add("no-scroll"), Body.classList.add("no-scroll"), Body.insertAdjacentHTML("beforeend", '<div class="loadx" style="display:block"></div>');
        var e = DOM.querySelector(".loadx");
        e.style.opacity = "1", $(".container, .header").addClass("blur"), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full" style="display:block"></div>'), $(".overlay-dark").addClass("show");
        var t = $(this).parent().find("img").attr("src") || $(this).parent().find("img").attr("data-src") || $(this).attr("data-src"),
            o = $(this).parent().find("h3").text();
        1 <= o.length && $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'), $(".all-pics").find(".full").append('<img src ="' + t + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), Body.insertAdjacentHTML("beforeend", '<a class="close-pics" href="javascript:void(0);"></a>');
        var i = DOM.querySelector(".close-pics");
        return TweenMax.fromTo(i, .5, {
            opacity: "0"
        }, {
            opacity: "1",
            ease: Power2.easeOut
        }), $(".all-pics img").on("load", function() {
            $(".text-length h3").text(o), $(".all-pics").addClass("show"), Mobile.matches && ($(".full img").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
                new PinchZoom.default(t, {
                    draggableUnzoomed: !1
                })
            })), 1 < $(".full img").length && $(".full img").last().remove(), TweenMax.to(e, .4, {
                opacity: "0",
                ease: Power2.easeOut,
                onComplete: function() {
                    Mobile.matches || detectMargin(), $(".full img, .text-length").addClass("fadein"), e.remove()
                }
            })
        }), $(".full span").on("click", function() {
            $(".close-pics").trigger("click")
        }), $(".close-pics").on("click", function() {
            $(".full").fadeOut(300, "linear", function() {
                $(".overlay-dark").removeClass("show"), $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(), $(".close-pics").remove(), $(".all-pics").removeClass("show"), Html.classList.remove("no-scroll"), Body.classList.remove("no-scroll"), $(".container, .header").removeClass("blur")
            })
        }), !1
    })
}

function ZoomPic() {
    $("img").on("click", function() {
        if ($(this).hasClass("zoom-pic")) {
            Html.classList.add("no-scroll"), Body.classList.add("no-scroll"), $(this).parent().addClass("to-scrollZ"), Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'), DOM.querySelector(".loadx").style.opacity = "1", $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"  style="display:block"></div>'), $(".details-content").length ? $(".overlay-dark").addClass("level-index-in") : $(".overlay-dark").addClass("show");
            var e = $(this).attr("data-src") || $(this).attr("src");
            $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<div class="close-pics"></div>'), $(".all-pics img").on("load", function() {
                $(".all-pics").addClass("show"), Mobile.matches && ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
                    new PinchZoom.default(t, {})
                })), 1 < $(".full img").length && $(".full img").last().remove();
                var e = DOM.querySelector(".loadx");
                TweenMax.to(e, .6, {
                    opacity: "0",
                    ease: Power2.easeOut,
                    onComplete: function() {
                        Mobile.matches || detectMargin(), $(".close-pics").addClass("goleft"), $(".full img").addClass("fadein"), e.remove()
                    }
                })
            }), $(".full span").on("click", function() {
                $(".close-pics").trigger("click")
            }), $(".close-pics").on("click", function() {
                $(".loadx").remove(), $(".full").fadeOut(300, "linear", function() {
                    if ($(".all-pics .full,  .all-pics .pinch-zoom-container").remove(), $(".close-pics").remove(), $(".all-pics").removeClass("show"), $(".details-content").length) $(".overlay-dark").removeClass("level-index-in");
                    else if (Html.classList.remove("no-scroll"), Body.classList.remove("no-scroll"), $(".overlay-dark").removeClass("show"), $(".to-scrollZ").length) {
                        var e = $(".to-scrollZ").offset().top;
                        $(".to-scrollZ").removeClass("to-scrollZ"), Xwidth < 1100 && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        } else if ($(this).hasClass("zoom-pic-large")) {
            Html.classList.add("no-scroll"), Body.classList.add("no-scroll"), $(this).parent().addClass("to-scrollZ"), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"  style="display:block"></div>'), $(".details-content").length ? $(".overlay-dark").addClass("level-index-in") : $(".overlay-dark").addClass("show");
            e = $(this).attr("data-src");
            $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<div class="close-pics"></div>'), $(".all-pics img").on("load", function() {
                $(".all-pics").addClass("show"), Mobile.matches ? ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
                    new PinchZoom.default(t, {})
                })) : ($(".full").addClass("dragscroll"), $(".dragscroll").draptouch(), detectMargin()), 1 < $(".full img").length && $(".full img").last().remove(), $(".loadx").fadeOut(400, "linear", function() {
                    $(".full img").addClass("fadein"), $(".loadx").remove()
                })
            }), $(".full span").on("click", function() {
                $(".close-pics").trigger("click")
            }), $(".close-pics").on("click", function() {
                $(".loadx").remove(), $(".full").fadeOut(300, "linear", function() {
                    if ($(".all-pics .full,  .all-pics .pinch-zoom-container").remove(), $(".close-pics").remove(), $(".all-pics").removeClass("show"), $(".details-content").length) $(".overlay-dark").removeClass("level-index-in");
                    else if (Html.classList.remove("no-scroll"), Body.classList.remove("no-scroll"), $(".overlay-dark").removeClass("show"), $(".to-scrollZ").length) {
                        var e = $(".to-scrollZ").offset().top;
                        $(".to-scrollZ").removeClass("to-scrollZ"), Xwidth < 1100 && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        }
        return !1
    })
}

function detectBut() {
    if (Xwidth <= 1100 && $(".sub-nav li.current").length) {
        var e = $(".sub-nav ul").offset().left,
            t = $(".sub-nav li.current").offset().left,
            o = Xwidth / 2 - $(".sub-nav li.current").width() / 2;
        $(".sub-nav").stop().animate({
            scrollLeft: t - o - e
        }, "slow")
    }
    $("#news-page").length && $(".link-page").hasClass("current") && $(window).width() <= 1100 && $(".news-list").each(function(e, t) {
        var o = $(t),
            i = $(t).find(".grid").offset().left,
            n = $(t).find(".link-page.current").offset().left,
            r = $(".news-list").width() / 2 - $(".link-page").width() / 2;
        $(o).stop().animate({
            scrollLeft: n - r - i
        }, "slow")
    })
}

function detectMargin() {
    var e = $(".full img").width(),
        t = $(".full img").height();
    e < Xwidth ? $(".full img").css({
        "margin-left": Xwidth / 2 - e / 2
    }) : $(".full img").css({
        "margin-left": 0
    }), t < Yheight ? $(".full img").css({
        "margin-top": Yheight / 2 - t / 2
    }) : $(".full img").css({
        "margin-top": 0
    })
}

function PrintShare() {
    var e = $(".save-but");
    $(e).on("click", function() {
        return window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(document.title, window.location.href, "") : window.external && "AddFavorite" in window.external ? window.external.AddFavorite(location.href, document.title) : alert("Nháº¥n " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D Ä‘á»ƒ táº¡o bookmark cho trang nÃ y."), !1
    }), $(".share-but").on("mouseenter", function() {
        $(this).addClass("active")
    }), $(".save-but, .print-but").on("mouseenter", function() {
        $(".share-but").removeClass("active")
    }), $(".print-box").on("mouseleave", function() {
        $(".share-but").removeClass("active")
    }), $(".print-but").on("click", function() {
        Main.classList.contains("smooth-scroll") && (Main.classList.remove("smooth-scroll"), DataScroll.classList.remove("scroll-content"), DataScroll.removeAttr("style"), Body.removeAttr("style"), DataScroll.css({
            transform: "translate3d(0,0,0)"
        })), window.print()
    })
}
if (addBtn && window.addEventListener("beforeinstallprompt", function(e) {
        e.preventDefault(), deferredPrompt = e, addBtn.classList.add("show"), installApp.addEventListener("click", function(e) {
            deferredPrompt.prompt(), deferredPrompt.userChoice.then(function(e) {
                "accepted" === e.outcome ? (console.log("User accepted Manifest"), addBtn.remove()) : console.log("User dismissed Manifest"), deferredPrompt = null
            })
        }), closeAdd.addEventListener("click", function(e) {
            e.preventDefault(), addBtn.remove()
        })
    }), YoutubeVideo && !$("#youtube_js").length) {
    $("body").append('<script id="youtube_js" rel="preconnect" type="text/javascript" src="https://www.youtube.com/player_api"><\/script>');
    var youTubeId, youTubeUrl = YoutubeVideo.getAttribute("data-embed"),
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
        match = youTubeUrl.match(regExp);
    youTubeId = match && 11 == match[2].length ? match[2] : "no video found";
    var player, youTube = YoutubeVideo,
        Source = "https://img.youtube.com/vi/" + youTubeId + "/sddefault.jpg",
        BgVideo = document.querySelector(".bg-video"),
        Control = (PlayButton = Container.querySelector(".play-button"), PauseButton = Container.querySelector(".pause-button"), Container.querySelector(".control"));
    if (Mobile.matches) var SRC = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    else SRC = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=0&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
    youTube.insertAdjacentHTML("beforeend", SRC);
    var timer, time_update = 0;

    function onYouTubePlayerAPIReady() {
        player = new YT.Player("VYT", {
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            }
        })
    }

    function onPlayerStateChange(e) {
        switch (e.data) {
            case YT.PlayerState.PLAYING:
                Mobile.matches || Control.classList.remove("show"), BgVideo.classList.add("hide"), PlayButton.classList.remove("show"), PauseButton.setAttribute("data-state", "pause");
                break;
            case YT.PlayerState.PAUSED:
                Mobile.matches || Control.classList.add("show"), BgVideo.classList.remove("hide"), PlayButton.classList.add("show"), PauseButton.setAttribute("data-state", "play");
                break;
            case YT.PlayerState.ENDED:
        }
        var t = e.target;
        $(t.getIframe()).bind("InView", {
            Player: t
        }, function(e, t) {
            1 == t && PlayButton.classList.contains("open-video") ? e.data.Player.playVideo() : e.data.Player.pauseVideo()
        })
    }

    function cleanTime() {
        return Math.round(player.getCurrentTime())
    }

    function onPlayerReady(e) {
        if (e.target.mute(), $("#mutetoggle").attr("data-state", "unmute"), updateTimerDisplay(), updateProgressBar(), player.pauseVideo(), PlayButton.classList.add("show"), PauseButton.setAttribute("data-state", "pause"), 1 < player.getPlayerState()) {
            var t = player.getVideoData().title;
            $(".youtube-video iframe").attr("title", t)
        }
    }

    function updateTimerDisplay() {
        $("#current-time").text(formatTime(player.getCurrentTime())), $("#duration").text(formatTime(player.getDuration()))
    }

    function formatTime(e) {
        e = Math.round(e);
        var t = Math.floor(e / 60),
            o = e - 60 * t;
        return t + ":" + (o = o < 10 ? "0" + o : o)
    }
    var RangeSlide = document.querySelector("#progress-bar");

    function updateProgressBar() {
        $("#progress-bar").val(player.getCurrentTime() / player.getDuration() * 100)
    }
    RangeSlide.addEventListener("input", function(e) {
        var t = player.getDuration() * (e.target.value / 100);
        player.seekTo(t)
    }, !1), $("#playpause").bind("click", function() {
        "play" == $(this).attr("data-state") ? (player.playVideo(), $(this).attr("data-state", "pause"), $(".bg-video").addClass("hide"), $(".play-button").removeClass("show")) : (player.pauseVideo(), $(this).attr("data-state", "play"), $(".play-button").addClass("show"), $(".bg-video").removeClass("hide"))
    }), $("#mutetoggle").bind("click", function() {
        "unmute" == $(this).attr("data-state") ? (player.unMute(), $(this).attr("data-state", "mute")) : (player.mute(), $(this).attr("data-state", "unmute"))
    }), $("#fullscreen").bind("click", function() {
        "go-fullscreen" == $(this).attr("data-state") ? ($(this).attr("data-state", "cancel-fullscreen"), $(".video-youtube-full").addClass("full-frame"), $("html, body").addClass("no-scroll fullscreen"), iOS ? ($('.group-central[data-name="video-home"]').addClass("fullmode"), $(".header, .go-top, .footer").addClass("level-index-out")) : screenfull.request($(".video-youtube-full")[0])) : ($(this).attr("data-state", "go-fullscreen"), $(".video-youtube-full").removeClass("full-frame"), $("html, body").removeClass("no-scroll fullscreen"), iOS ? ($('.group-central[data-name="video-home"]').removeClass("fullmode"), $(".header, .go-top, .footer").removeClass("level-index-out")) : screenfull.exit())
    }), $(".play-button").on("click", function(e) {
        e.preventDefault(), player.playVideo(), $(this).removeClass("show"), $("#playpause").attr("data-state", "pause"), $(".bg-video").addClass("hide"), $(".control").addClass("show"), $(".video-youtube-full").addClass("playing"), clearInterval(time_update), time_update = setInterval(function() {
            updateTimerDisplay(), updateProgressBar()
        }, 300), clearInterval(timer), timer = setInterval(function() {
            Mobile.matches || $(".control").removeClass("show")
        }, 5e3)
    }), $(".pause-button").on("click", function(e) {
        e.preventDefault(), $(".play-button").addClass("show"), $("#playpause").attr("data-state", "play"), $(".bg-video, .slogan").removeClass("hide"), clearInterval(timer), Mobile.matches || $(".control").addClass("show"), player.pauseVideo()
    }), $(".youtube-video").on("click", function(e) {
        e.preventDefault(), $("#playpause").trigger("click")
    }), $(".youtube-video, .control").on("mouseenter mousemove", function(e) {
        Mobile.matches || $(".control").hasClass("show") || $(".control").addClass("show")
    })
}
var supportsVideo = !!document.createElement("video").canPlayType,
    ThisVideo = document.getElementById("video-full");

function StopPlay() {
    ThisVideo.paused && ThisVideo.ended || (ThisVideo.pause(), $(".controls").removeClass("addshow"), $(".pic-video").removeClass("hide"), $(".header").removeClass("vid"), $(".player-vid").removeClass("hide"))
}

function StartPlay() {
    (ThisVideo.paused || ThisVideo.ended) && ($(".player-vid").hasClass("show") || (ThisVideo.play(), $(".controls").addClass("addshow"), $(".pic-video").addClass("hide"), $(".player-vid").addClass("hide").removeClass("show"), $(".header").addClass("vid")))
}

function VideoFull() {
    if (supportsVideo) {
        var t = document.getElementById("videocontainer"),
            e = document.getElementById("videocontrols");
        ThisVideo.controls = !1, e.setAttribute("data-state", "visible");
        var o = document.getElementById("playpause"),
            i = document.getElementById("stop"),
            n = document.getElementById("mute"),
            r = document.getElementById("progress"),
            s = document.getElementById("progressbar"),
            a = document.getElementById("fullscreen");
        void 0 !== document.createElement("progress").max || r.setAttribute("data-state", "fake"), !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement("video").webkitRequestFullScreen) || (a.style.display = "none");
        var l = function(e) {
                if (e) {
                    var t = Math.floor(10 * ThisVideo.volume) / 10;
                    "+" === e ? t < 1 && (ThisVideo.volume += .1) : "-" === e && 0 < t && (ThisVideo.volume -= .1), ThisVideo.muted = t <= 0
                }
                u("mute")
            },
            c = function(e) {
                t.setAttribute("data-fullscreen", !!e), a.setAttribute("data-state", e ? "cancel-fullscreen" : "go-fullscreen"), 1 == e ? $("body").addClass("fullscreen") : $("body").removeClass("fullscreen")
            },
            d = function() {
                return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
            };
        if (document.addEventListener) {
            ThisVideo.addEventListener("loadedmetadata", function() {
                r.setAttribute("max", ThisVideo.duration)
            });
            var u = function(e) {
                "playPause" == e ? ThisVideo.paused || ThisVideo.ended ? o.setAttribute("data-state", "play") : o.setAttribute("data-state", "pause") : "mute" == e && n.setAttribute("data-state", ThisVideo.muted ? "unmute" : "mute")
            };
            ThisVideo.addEventListener("play", function() {
                u("playPause")
            }, !1), ThisVideo.addEventListener("pause", function() {
                u("playPause")
            }, !1), ThisVideo.addEventListener("volumechange", function() {
                l()
            }, !1), o.addEventListener("click", function(e) {
                ThisVideo.paused || ThisVideo.ended ? (ThisVideo.play(), $(".player-vid").addClass("hide").removeClass("show")) : (ThisVideo.pause(), $(".player-vid").addClass("show").removeClass("hide"))
            }), i.addEventListener("click", function(e) {
                ThisVideo.pause(), ThisVideo.currentTime = 0, r.value = 0, u("playPause"), $(".player-vid").addClass("show").removeClass("hide"), $(".pic-video").removeClass("hide"), d() && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), c(!1))
            }), n.addEventListener("click", function(e) {
                ThisVideo.muted = !ThisVideo.muted, u("mute")
            }), a.addEventListener("click", function(e) {
                d() ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), c(!1)) : (t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen ? ThisVideo.webkitRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen(), c(!0))
            }), ThisVideo.addEventListener("timeupdate", function() {
                r.getAttribute("max") || r.setAttribute("max", ThisVideo.duration), r.value = ThisVideo.currentTime, s.style.width = Math.floor(ThisVideo.currentTime / ThisVideo.duration * 100) + "%"
            }), r.addEventListener("click", function(e) {
                var t = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
                ThisVideo.currentTime = t * ThisVideo.duration
            }), document.addEventListener("fullscreenchange", function(e) {
                c(!(!document.fullScreen && !document.fullscreenElement))
            }), document.addEventListener("webkitfullscreenchange", function() {
                c(!!document.webkitIsFullScreen)
            }), document.addEventListener("mozfullscreenchange", function() {
                c(!!document.mozFullScreen)
            }), document.addEventListener("msfullscreenchange", function() {
                c(!!document.msFullscreenElement)
            }), ThisVideo.addEventListener("ended", function(e) {
                e || (e = window.event), ThisVideo.pause(), ThisVideo.currentTime = 0, r.value = 0, u("playPause"), $(".player-vid").addClass("show").removeClass("hide"), $(".pic-video").removeClass("hide"), d() && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), c(!1))
            }, !1), $(".player-vid").on("click", function(e) {
                e.preventDefault(), $(".pic-video").addClass("hide"), (ThisVideo.paused || ThisVideo.ended) && (ThisVideo.play(), $(".controls").addClass("addshow"), $(".player-vid").addClass("hide").removeClass("show"))
            }), $(".video-full, .video-cover-inline .overlay").on("click", function(e) {
                ThisVideo.paused || ThisVideo.ended ? (ThisVideo.play(), $(".player-vid").addClass("hide").removeClass("show")) : (ThisVideo.pause(), $(".player-vid").addClass("show").removeClass("hide"))
            }), isTouchDevice || isMobile.all, u("mute"), o.setAttribute("data-state", "pause");
            var h = ThisVideo;
            $(h).bind("InView", {
                Player: h
            }, function(e, t) {
                1 == t && $(".player-vid").hasClass("hide") ? ThisVideo.play() : ThisVideo.pause()
            })
        }
    }
}! function(c) {
    c.fn.clipPath = function() {
        return this.filter("[data-mask]").each(function(e) {
            var t = c(this).attr("data-mask"),
                o = c(this).attr("src"),
                i = c(this).attr("data-width"),
                n = c(this).attr("data-height"),
                r = parseFloat(i, 10),
                s = parseFloat(n, 10),
                a = e,
                l = c('<svg xmlns="http://www.w3.org/2000/svg" class="svgMask" x="0px" y="0px" width="' + i + '" height="' + n + '" viewBox="0 0 ' + r + " " + s + '"><defs><clipPath id="maskID' + a + '"><path d="' + t + '"/></clipPath></defs><image clip-path="url(#maskID' + a + ')" width="' + i + '" height="' + n + '" xlink:href="' + o + '" /></svg>');
            c(this).parent().replaceWith(l), delete t
        }), this
    }
}(jQuery);