!(function (name, definition) {
    if (typeof module != "undefined" && module.exports) module.exports = definition();
    else if (typeof define == "function" && define.amd) define(name, definition);
    else this[name] = definition();
})("bowser", function () {
    var t = true;
    function detect(ua) {
        function getFirstMatch(regex) {
            var match = ua.match(regex);
            return (match && match.length > 1 && match[1]) || "";
        }
        function getSecondMatch(regex) {
            var match = ua.match(regex);
            return (match && match.length > 1 && match[2]) || "";
        }
        var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
            likeAndroid = /like android/i.test(ua),
            android = !likeAndroid && /android/i.test(ua),
            nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
            nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
            chromeos = /CrOS/.test(ua),
            silk = /silk/i.test(ua),
            sailfish = /sailfish/i.test(ua),
            tizen = /tizen/i.test(ua),
            webos = /(web|hpw)os/i.test(ua),
            windowsphone = /windows phone/i.test(ua),
            windows = !windowsphone && /windows/i.test(ua),
            mac = !iosdevice && !silk && /macintosh/i.test(ua),
            linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
            edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
            versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
            tablet = /tablet/i.test(ua),
            mobile = !tablet && /[^-]mobi/i.test(ua),
            xbox = /xbox/i.test(ua),
            result;
        if (/opera|opr|opios/i.test(ua)) {
            result = { name: "Opera", opera: t, version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i) };
        } else if (/coast/i.test(ua)) {
            result = { name: "Opera Coast", coast: t, version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i) };
        } else if (/yabrowser/i.test(ua)) {
            result = { name: "Yandex Browser", yandexbrowser: t, version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i) };
        } else if (/ucbrowser/i.test(ua)) {
            result = { name: "UC Browser", ucbrowser: t, version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i) };
        } else if (/mxios/i.test(ua)) {
            result = { name: "Maxthon", maxthon: t, version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i) };
        } else if (/epiphany/i.test(ua)) {
            result = { name: "Epiphany", epiphany: t, version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i) };
        } else if (/puffin/i.test(ua)) {
            result = { name: "Puffin", puffin: t, version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i) };
        } else if (/sleipnir/i.test(ua)) {
            result = { name: "Sleipnir", sleipnir: t, version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i) };
        } else if (/k-meleon/i.test(ua)) {
            result = { name: "K-Meleon", kMeleon: t, version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i) };
        } else if (windowsphone) {
            result = { name: "Windows Phone", windowsphone: t };
            if (edgeVersion) {
                result.msedge = t;
                result.version = edgeVersion;
            } else {
                result.msie = t;
                result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
            }
        } else if (/msie|trident/i.test(ua)) {
            result = { name: "Internet Explorer", msie: t, version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i) };
        } else if (chromeos) {
            result = { name: "Chrome", chromeos: t, chromeBook: t, chrome: t, version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) };
        } else if (/chrome.+? edge/i.test(ua)) {
            result = { name: "Microsoft Edge", msedge: t, version: edgeVersion };
        } else if (/vivaldi/i.test(ua)) {
            result = { name: "Vivaldi", vivaldi: t, version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier };
        } else if (sailfish) {
            result = { name: "Sailfish", sailfish: t, version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i) };
        } else if (/seamonkey\//i.test(ua)) {
            result = { name: "SeaMonkey", seamonkey: t, version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i) };
        } else if (/firefox|iceweasel|fxios/i.test(ua)) {
            result = { name: "Firefox", firefox: t, version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i) };
            if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
                result.firefoxos = t;
            }
        } else if (silk) {
            result = { name: "Amazon Silk", silk: t, version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i) };
        } else if (/phantom/i.test(ua)) {
            result = { name: "PhantomJS", phantom: t, version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i) };
        } else if (/slimerjs/i.test(ua)) {
            result = { name: "SlimerJS", slimer: t, version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i) };
        } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
            result = { name: "BlackBerry", blackberry: t, version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i) };
        } else if (webos) {
            result = { name: "WebOS", webos: t, version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i) };
            if (/touchpad\//i.test(ua)) {
                result.touchpad = t;
            }
        } else if (/bada/i.test(ua)) {
            result = { name: "Bada", bada: t, version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i) };
        } else if (tizen) {
            result = { name: "Tizen", tizen: t, version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier };
        } else if (/qupzilla/i.test(ua)) {
            result = { name: "QupZilla", qupzilla: t, version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier };
        } else if (/chromium/i.test(ua)) {
            result = { name: "Chromium", chromium: t, version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier };
        } else if (/chrome|crios|crmo/i.test(ua)) {
            result = { name: "Chrome", chrome: t, version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) };
        } else if (android) {
            result = { name: "Android", version: versionIdentifier };
        } else if (/safari|applewebkit/i.test(ua)) {
            result = { name: "Safari", safari: t };
            if (versionIdentifier) {
                result.version = versionIdentifier;
            }
        } else if (iosdevice) {
            result = { name: iosdevice == "iphone" ? "iPhone" : iosdevice == "ipad" ? "iPad" : "iPod" };
            if (versionIdentifier) {
                result.version = versionIdentifier;
            }
        } else if (/googlebot/i.test(ua)) {
            result = { name: "Googlebot", googlebot: t, version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier };
        } else {
            result = { name: getFirstMatch(/^(.*)\/(.*) /), version: getSecondMatch(/^(.*)\/(.*) /) };
        }
        if (!result.msedge && /(apple)?webkit/i.test(ua)) {
            if (/(apple)?webkit\/537\.36/i.test(ua)) {
                result.name = result.name || "Blink";
                result.blink = t;
            } else {
                result.name = result.name || "Webkit";
                result.webkit = t;
            }
            if (!result.version && versionIdentifier) {
                result.version = versionIdentifier;
            }
        } else if (!result.opera && /gecko\//i.test(ua)) {
            result.name = result.name || "Gecko";
            result.gecko = t;
            result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
        }
        if (!result.msedge && (android || result.silk)) {
            result.android = t;
        } else if (iosdevice) {
            result[iosdevice] = t;
            result.ios = t;
        } else if (mac) {
            result.mac = t;
        } else if (xbox) {
            result.xbox = t;
        } else if (windows) {
            result.windows = t;
        } else if (linux) {
            result.linux = t;
        }
        var osVersion = "";
        if (result.windowsphone) {
            osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
        } else if (iosdevice) {
            osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
            osVersion = osVersion.replace(/[_\s]/g, ".");
        } else if (android) {
            osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
        } else if (result.webos) {
            osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
        } else if (result.blackberry) {
            osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
        } else if (result.bada) {
            osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
        } else if (result.tizen) {
            osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
        }
        if (osVersion) {
            result.osversion = osVersion;
        }
        var osMajorVersion = osVersion.split(".")[0];
        if (tablet || nexusTablet || iosdevice == "ipad" || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile))) || result.silk) {
            result.tablet = t;
        } else if (mobile || iosdevice == "iphone" || iosdevice == "ipod" || android || nexusMobile || result.blackberry || result.webos || result.bada) {
            result.mobile = t;
        }
        if (
            result.msedge ||
            (result.msie && result.version >= 10) ||
            (result.yandexbrowser && result.version >= 15) ||
            (result.vivaldi && result.version >= 1.0) ||
            (result.chrome && result.version >= 20) ||
            (result.firefox && result.version >= 20.0) ||
            (result.safari && result.version >= 6) ||
            (result.opera && result.version >= 10.0) ||
            (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
            (result.blackberry && result.version >= 10.1) ||
            (result.chromium && result.version >= 20)
        ) {
            result.a = t;
        } else if (
            (result.msie && result.version < 10) ||
            (result.chrome && result.version < 20) ||
            (result.firefox && result.version < 20.0) ||
            (result.safari && result.version < 6) ||
            (result.opera && result.version < 10.0) ||
            (result.ios && result.osversion && result.osversion.split(".")[0] < 6) ||
            (result.chromium && result.version < 20)
        ) {
            result.c = t;
        } else result.x = t;
        return result;
    }
    var bowser = detect(typeof navigator !== "undefined" ? navigator.userAgent : "");
    bowser.test = function (browserList) {
        for (var i = 0; i < browserList.length; ++i) {
            var browserItem = browserList[i];
            if (typeof browserItem === "string") {
                if (browserItem in bowser) {
                    return true;
                }
            }
        }
        return false;
    };
    function getVersionPrecision(version) {
        return version.split(".").length;
    }
    function map(arr, iterator) {
        var result = [],
            i;
        if (Array.prototype.map) {
            return Array.prototype.map.call(arr, iterator);
        }
        for (i = 0; i < arr.length; i++) {
            result.push(iterator(arr[i]));
        }
        return result;
    }
    function compareVersions(versions) {
        var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
        var chunks = map(versions, function (version) {
            var delta = precision - getVersionPrecision(version);
            version = version + new Array(delta + 1).join(".0");
            return map(version.split("."), function (chunk) {
                return new Array(20 - chunk.length).join("0") + chunk;
            }).reverse();
        });
        while (--precision >= 0) {
            if (chunks[0][precision] > chunks[1][precision]) {
                return 1;
            } else if (chunks[0][precision] === chunks[1][precision]) {
                if (precision === 0) {
                    return 0;
                }
            } else {
                return -1;
            }
        }
    }
    function isUnsupportedBrowser(minVersions, strictMode, ua) {
        var _bowser = bowser;
        if (typeof strictMode === "string") {
            ua = strictMode;
            strictMode = void 0;
        }
        if (strictMode === void 0) {
            strictMode = false;
        }
        if (ua) {
            _bowser = detect(ua);
        }
        var version = "" + _bowser.version;
        for (var browser in minVersions) {
            if (minVersions.hasOwnProperty(browser)) {
                if (_bowser[browser]) {
                    return compareVersions([version, minVersions[browser]]) < 0;
                }
            }
        }
        return strictMode;
    }
    function check(minVersions, strictMode, ua) {
        return !isUnsupportedBrowser(minVersions, strictMode, ua);
    }
    bowser.isUnsupportedBrowser = isUnsupportedBrowser;
    bowser.compareVersions = compareVersions;
    bowser.check = check;
    bowser._detect = detect;
    return bowser;
});
(function ($) {
    UABBTrigger = {
        triggerHook: function (hook, args) {
            $("body").trigger("uabb-trigger." + hook, args);
        },
        addHook: function (hook, callback) {
            $("body").on("uabb-trigger." + hook, callback);
        },
        removeHook: function (hook, callback) {
            $("body").off("uabb-trigger." + hook, callback);
        },
    };
})(jQuery);
jQuery(document).ready(function ($) {
    if (typeof bowser !== "undefined" && bowser !== null) {
        var uabb_browser = bowser.name,
            uabb_browser_v = bowser.version,
            uabb_browser_class = uabb_browser.replace(/\s+/g, "-").toLowerCase(),
            uabb_browser_v_class = uabb_browser_class + parseInt(uabb_browser_v);
        $("html").addClass(uabb_browser_class).addClass(uabb_browser_v_class);
    }
    $(".uabb-row-separator").parents("html").css("overflow-x", "hidden");
});
var wpAjaxUrl = "https://abadini.com/wp-admin/admin-ajax.php";
var flBuilderUrl = "https://abadini.com/wp-content/plugins/bb-plugin/";
var FLBuilderLayoutConfig = {
    anchorLinkAnimations: { duration: 1000, easing: "swing", offset: 100 },
    paths: { pluginUrl: "https://abadini.com/wp-content/plugins/bb-plugin/", wpAjaxUrl: "https://abadini.com/wp-admin/admin-ajax.php" },
    breakpoints: { small: 768, medium: 992 },
    waypoint: { offset: 80 },
};
(function ($) {
    if (typeof FLBuilderLayout != "undefined") {
        return;
    }
    FLBuilderLayout = {
        init: function () {
            FLBuilderLayout._destroy();
            FLBuilderLayout._initClasses();
            FLBuilderLayout._initBackgrounds();
            if (0 === $(".fl-builder-edit").length) {
                FLBuilderLayout._initModuleAnimations();
                FLBuilderLayout._initAnchorLinks();
                FLBuilderLayout._initHash();
                FLBuilderLayout._initForms();
            }
        },
        refreshGalleries: function (element) {
            var $element = "undefined" == typeof element ? $("body") : $(element),
                mfContent = $element.find(".fl-mosaicflow-content"),
                wmContent = $element.find(".fl-gallery"),
                mfObject = null;
            if (mfContent) {
                mfObject = mfContent.data("mosaicflow");
                if (mfObject) {
                    mfObject.columns = $([]);
                    mfObject.columnsHeights = [];
                    mfContent.data("mosaicflow", mfObject);
                    mfContent.mosaicflow("refill");
                }
            }
            if (wmContent) {
                wmContent.trigger("refreshWookmark");
            }
        },
        refreshGridLayout: function (element) {
            var $element = "undefined" == typeof element ? $("body") : $(element),
                msnryContent = $element.find(".masonry");
            if (msnryContent.length) {
                msnryContent.masonry("layout");
            }
        },
        reloadSlider: function (element) {
            var $element = "undefined" == typeof element ? $("body") : $(element),
                bxContent = $element.find(".bx-viewport > div").eq(0),
                bxObject = null;
            if (bxContent.length) {
                bxObject = bxContent.data("bxSlider");
                if (bxObject) {
                    bxObject.reloadSlider();
                }
            }
        },
        resizeAudio: function (element) {
            var $element = "undefined" == typeof element ? $("body") : $(element),
                audioPlayers = $element.find(".wp-audio-shortcode.mejs-audio"),
                player = null,
                mejsPlayer = null,
                rail = null,
                railWidth = 400;
            if (audioPlayers.length && typeof mejs !== "undefined") {
                audioPlayers.each(function () {
                    player = $(this);
                    mejsPlayer = mejs.players[player.attr("id")];
                    rail = player.find(".mejs-controls .mejs-time-rail");
                    var innerMejs = player.find(".mejs-inner"),
                        total = player.find(".mejs-controls .mejs-time-total");
                    if (typeof mejsPlayer !== "undefined") {
                        railWidth = Math.ceil(player.width() * 0.8);
                        if (innerMejs.length) {
                            rail.css("width", railWidth + "px!important");
                            mejsPlayer.options.autosizeProgress = true;
                            setTimeout(function () {
                                mejsPlayer.setControlsSize();
                            }, 50);
                            player.find(".mejs-inner").css({ visibility: "visible", height: "inherit" });
                        }
                    }
                });
            }
        },
        preloadAudio: function (element) {
            var $element = "undefined" == typeof element ? $("body") : $(element),
                contentWrap = $element.closest(".fl-accordion-item"),
                audioPlayers = $element.find(".wp-audio-shortcode.mejs-audio");
            if (!contentWrap.hasClass("fl-accordion-item-active") && audioPlayers.find(".mejs-inner").length) {
                audioPlayers.find(".mejs-inner").css({ visibility: "hidden", height: 0 });
            }
        },
        resizeSlideshow: function () {
            if (typeof YUI !== "undefined") {
                YUI().use("node-event-simulate", function (Y) {
                    Y.one(window).simulate("resize");
                });
            }
        },
        reloadGoogleMap: function (element) {
            var $element = "undefined" == typeof element ? $("body") : $(element),
                googleMap = $element.find('iframe[src*="google.com/maps"]');
            if (googleMap.length) {
                googleMap.attr("src", function (i, val) {
                    return val;
                });
            }
        },
        _destroy: function () {
            var win = $(window);
            win.off("scroll.fl-bg-parallax");
            win.off("resize.fl-bg-video");
        },
        _isTouch: function () {
            if ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
                return true;
            }
            return false;
        },
        _isMobile: function () {
            return /Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);
        },
        _initClasses: function () {
            var body = $("body"),
                ua = navigator.userAgent;
            if (!body.hasClass("archive") && $(".fl-builder-content-primary").length > 0) {
                body.addClass("fl-builder");
            }
            if (FLBuilderLayout._isTouch()) {
                body.addClass("fl-builder-touch");
            }
            if (FLBuilderLayout._isMobile()) {
                body.addClass("fl-builder-mobile");
            }
            if (ua.indexOf("Trident/7.0") > -1 && ua.indexOf("rv:11.0") > -1) {
                body.addClass("fl-builder-ie-11");
            }
        },
        _initBackgrounds: function () {
            var win = $(window);
            if ($(".fl-row-bg-parallax").length > 0 && !FLBuilderLayout._isMobile()) {
                FLBuilderLayout._scrollParallaxBackgrounds();
                FLBuilderLayout._initParallaxBackgrounds();
                win.on("scroll.fl-bg-parallax", FLBuilderLayout._scrollParallaxBackgrounds);
            }
            if ($(".fl-bg-video").length > 0) {
                FLBuilderLayout._initBgVideos();
                FLBuilderLayout._resizeBgVideos();
                win.on("resize.fl-bg-video", FLBuilderLayout._resizeBgVideos);
            }
        },
        _initParallaxBackgrounds: function () {
            $(".fl-row-bg-parallax").each(FLBuilderLayout._initParallaxBackground);
        },
        _initParallaxBackground: function () {
            var row = $(this),
                content = row.find("> .fl-row-content-wrap"),
                src = row.data("parallax-image"),
                loaded = row.data("parallax-loaded"),
                img = new Image();
            if (loaded) {
                return;
            } else if (typeof src != "undefined") {
                $(img).on("load", function () {
                    content.css("background-image", "url(" + src + ")");
                    row.data("parallax-loaded", true);
                });
                img.src = src;
            }
        },
        _scrollParallaxBackgrounds: function () {
            $(".fl-row-bg-parallax").each(FLBuilderLayout._scrollParallaxBackground);
        },
        _scrollParallaxBackground: function () {
            var win = $(window),
                row = $(this),
                content = row.find("> .fl-row-content-wrap"),
                speed = row.data("parallax-speed"),
                offset = content.offset(),
                yPos = -((win.scrollTop() - offset.top) / speed);
            content.css("background-position", "center " + yPos + "px");
        },
        _initBgVideos: function () {
            $(".fl-bg-video").each(FLBuilderLayout._initBgVideo);
        },
        _initBgVideo: function () {
            var wrap = $(this),
                width = wrap.data("width"),
                height = wrap.data("height"),
                mp4 = wrap.data("mp4"),
                youtube = wrap.data("youtube"),
                vimeo = wrap.data("vimeo"),
                mp4Type = wrap.data("mp4-type"),
                webm = wrap.data("webm"),
                webmType = wrap.data("webm-type"),
                fallback = wrap.data("fallback"),
                loaded = wrap.data("loaded"),
                videoMobile = wrap.data("video-mobile"),
                fallbackTag = "",
                videoTag = null,
                mp4Tag = null,
                webmTag = null;
            if (loaded) {
                return;
            }
            videoTag = $("<video autoplay loop muted playsinline></video>");
            if ("undefined" != typeof fallback && "" != fallback) {
                videoTag.attr("poster", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
                videoTag.css("background", 'transparent url("' + fallback + '") no-repeat center center');
                videoTag.css("background-size", "cover");
                videoTag.css("height", "100%");
            }
            if ("undefined" != typeof mp4 && "" != mp4) {
                mp4Tag = $("<source />");
                mp4Tag.attr("src", mp4);
                mp4Tag.attr("type", mp4Type);
                videoTag.append(mp4Tag);
            }
            if ("undefined" != typeof webm && "" != webm) {
                webmTag = $("<source />");
                webmTag.attr("src", webm);
                webmTag.attr("type", webmType);
                videoTag.append(webmTag);
            }
            if (!FLBuilderLayout._isMobile() || (FLBuilderLayout._isMobile() && "yes" == videoMobile)) {
                if ("undefined" != typeof youtube) {
                    FLBuilderLayout._initYoutubeBgVideo.apply(this);
                } else if ("undefined" != typeof vimeo) {
                    FLBuilderLayout._initVimeoBgVideo.apply(this);
                } else {
                    wrap.append(videoTag);
                }
            } else {
                videoTag.attr("src", "");
                wrap.append(videoTag);
            }
            wrap.data("loaded", true);
        },
        _initYoutubeBgVideo: function () {
            var playerWrap = $(this),
                videoId = playerWrap.data("video-id"),
                videoPlayer = playerWrap.find(".fl-bg-video-player"),
                enableAudio = playerWrap.data("enable-audio"),
                audioButton = playerWrap.find(".fl-bg-video-audio"),
                startTime = "undefined" !== typeof playerWrap.data("start") ? playerWrap.data("start") : 0,
                endTime = "undefined" !== typeof playerWrap.data("end") ? playerWrap.data("end") : 0,
                loop = "undefined" !== typeof playerWrap.data("loop") ? playerWrap.data("loop") : 1,
                stateCount = 0,
                player;
            if (videoId) {
                FLBuilderLayout._onYoutubeApiReady(function (YT) {
                    setTimeout(function () {
                        player = new YT.Player(videoPlayer[0], {
                            videoId: videoId,
                            events: {
                                onReady: function (event) {
                                    if ("no" === enableAudio || FLBuilderLayout._isMobile()) {
                                        event.target.mute();
                                    } else if ("yes" === enableAudio && event.target.isMuted) {
                                        event.target.unMute();
                                    }
                                    playerWrap.data("YTPlayer", player);
                                    FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);
                                    event.target.playVideo();
                                    if (audioButton.length > 0 && !FLBuilderLayout._isMobile()) {
                                        audioButton.on("click", { button: audioButton, player: player }, FLBuilderLayout._toggleBgVideoAudio);
                                    }
                                },
                                onStateChange: function (event) {
                                    if (stateCount < 4) {
                                        stateCount++;
                                    }
                                    if (stateCount > 1 && (-1 === event.data || 2 === event.data) && "yes" === enableAudio) {
                                        player.mute();
                                        player.playVideo();
                                        audioButton.show();
                                    }
                                    if (event.data === YT.PlayerState.ENDED && 1 === loop) {
                                        if (startTime > 0) {
                                            player.seekTo(startTime);
                                        } else {
                                            player.playVideo();
                                        }
                                    }
                                },
                                onError: function (event) {
                                    console.info("YT Error: " + event.data);
                                    FLBuilderLayout._onErrorYoutubeVimeo(playerWrap);
                                },
                            },
                            playerVars: { playsinline: FLBuilderLayout._isMobile() ? 1 : 0, controls: 0, showinfo: 0, rel: 0, start: startTime, end: endTime },
                        });
                    }, 1);
                });
            }
        },
        _onErrorYoutubeVimeo: function (playerWrap) {
            fallback = playerWrap.data("fallback") || false;
            if (!fallback) {
                return false;
            }
            playerWrap.find("iframe").remove();
            fallbackTag = $("<div></div>");
            fallbackTag.addClass("fl-bg-video-fallback");
            fallbackTag.css("background-image", "url(" + playerWrap.data("fallback") + ")");
            playerWrap.append(fallbackTag);
        },
        _onYoutubeApiReady: function (callback) {
            if (window.YT && YT.loaded) {
                callback(YT);
            } else {
                setTimeout(function () {
                    FLBuilderLayout._onYoutubeApiReady(callback);
                }, 350);
            }
        },
        _initVimeoBgVideo: function () {
            var playerWrap = $(this),
                videoId = playerWrap.data("video-id"),
                videoPlayer = playerWrap.find(".fl-bg-video-player"),
                enableAudio = playerWrap.data("enable-audio"),
                audioButton = playerWrap.find(".fl-bg-video-audio"),
                player,
                width = playerWrap.outerWidth();
            if (typeof Vimeo !== "undefined" && videoId) {
                player = new Vimeo.Player(videoPlayer[0], { id: videoId, loop: true, title: false, portrait: false, background: true, autopause: false, muted: true });
                playerWrap.data("VMPlayer", player);
                if ("no" === enableAudio) {
                    player.setVolume(0);
                } else if ("yes" === enableAudio) {
                    if ($.browser.safari || $.browser.chrome) {
                        player.setVolume(0);
                        audioButton.show();
                    } else {
                        player.setVolume(1);
                    }
                }
                player.play().catch(function (error) {
                    FLBuilderLayout._onErrorYoutubeVimeo(playerWrap);
                });
                if (audioButton.length > 0) {
                    audioButton.on("click", { button: audioButton, player: player }, FLBuilderLayout._toggleBgVideoAudio);
                }
            }
        },
        _toggleBgVideoAudio: function (e) {
            var player = e.data.player,
                control = e.data.button.find(".fl-audio-control");
            if (control.hasClass("fa-volume-off")) {
                control.removeClass("fa-volume-off").addClass("fa-volume-up");
                e.data.button.find(".fa-times").hide();
                if ("function" === typeof player.unMute) {
                    player.unMute();
                } else {
                    player.setVolume(1);
                }
            } else {
                control.removeClass("fa-volume-up").addClass("fa-volume-off");
                e.data.button.find(".fa-times").show();
                if ("function" === typeof player.unMute) {
                    player.mute();
                } else {
                    player.setVolume(0);
                }
            }
        },
        _videoBgSourceError: function (e) {
            var source = $(e.target),
                wrap = source.closest(".fl-bg-video"),
                vid = wrap.find("video"),
                fallback = wrap.data("fallback"),
                fallbackTag = "";
            source.remove();
            if (vid.find("source").length) {
                return;
            } else if ("" !== fallback) {
                fallbackTag = $("<div></div>");
                fallbackTag.addClass("fl-bg-video-fallback");
                fallbackTag.css("background-image", "url(" + fallback + ")");
                wrap.append(fallbackTag);
                vid.remove();
            }
        },
        _resizeBgVideos: function () {
            $(".fl-bg-video").each(function () {
                FLBuilderLayout._resizeBgVideo.apply(this);
                if ($(this).parent().find("img").length > 0) {
                    $(this).parent().imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo, this));
                }
            });
        },
        _resizeBgVideo: function () {
            if (0 === $(this).find("video").length && 0 === $(this).find("iframe").length) {
                return;
            }
            var wrap = $(this),
                wrapHeight = wrap.outerHeight(),
                wrapWidth = wrap.outerWidth(),
                vid = wrap.find("video"),
                vidHeight = wrap.data("height"),
                vidWidth = wrap.data("width"),
                newWidth = wrapWidth,
                newHeight = Math.round((vidHeight * wrapWidth) / vidWidth),
                newLeft = 0,
                newTop = 0,
                iframe = wrap.find("iframe");
            if (vid.length) {
                if (vidHeight === "" || typeof vidHeight === "undefined" || vidWidth === "" || typeof vidWidth === "undefined") {
                    vid.css({ left: "0px", top: "0px", width: newWidth + "px" });
                    vid.on("loadedmetadata", FLBuilderLayout._resizeOnLoadedMeta);
                } else {
                    if (newHeight < wrapHeight) {
                        newHeight = wrapHeight;
                        newWidth = Math.round((vidWidth * wrapHeight) / vidHeight);
                        newLeft = -((newWidth - wrapWidth) / 2);
                    } else {
                        newTop = -((newHeight - wrapHeight) / 2);
                    }
                    vid.css({ left: newLeft + "px", top: newTop + "px", height: newHeight + "px", width: newWidth + "px" });
                }
            } else if (iframe.length) {
                if (typeof wrap.data("youtube") !== "undefined") {
                    FLBuilderLayout._resizeYoutubeBgVideo.apply(this);
                }
            }
        },
        _resizeOnLoadedMeta: function () {
            var video = $(this),
                wrapHeight = video.parent().outerHeight(),
                wrapWidth = video.parent().outerWidth(),
                vidWidth = video[0].videoWidth,
                vidHeight = video[0].videoHeight,
                newHeight = Math.round((vidHeight * wrapWidth) / vidWidth),
                newWidth = wrapWidth,
                newLeft = 0,
                newTop = 0;
            if (newHeight < wrapHeight) {
                newHeight = wrapHeight;
                newWidth = Math.round((vidWidth * wrapHeight) / vidHeight);
                newLeft = -((newWidth - wrapWidth) / 2);
            } else {
                newTop = -((newHeight - wrapHeight) / 2);
            }
            video.parent().data("width", vidWidth);
            video.parent().data("height", vidHeight);
            video.css({ left: newLeft + "px", top: newTop + "px", width: newWidth + "px", height: newHeight + "px" });
        },
        _resizeYoutubeBgVideo: function () {
            var wrap = $(this),
                wrapWidth = wrap.outerWidth(),
                wrapHeight = wrap.outerHeight(),
                player = wrap.data("YTPlayer"),
                video = player ? player.getIframe() : null,
                aspectRatioSetting = "16:9",
                aspectRatioArray = aspectRatioSetting.split(":"),
                aspectRatio = aspectRatioArray[0] / aspectRatioArray[1],
                ratioWidth = wrapWidth / aspectRatio,
                ratioHeight = wrapHeight * aspectRatio,
                isWidthFixed = wrapWidth / wrapHeight > aspectRatio,
                width = isWidthFixed ? wrapWidth : ratioHeight,
                height = isWidthFixed ? ratioWidth : wrapHeight;
            if (video) {
                $(video).width(width).height(height);
            }
        },
        _initModuleAnimations: function () {
            if (typeof jQuery.fn.waypoint !== "undefined") {
                $(".fl-animation").each(function () {
                    var node = $(this),
                        nodeTop = node.offset().top,
                        winHeight = $(window).height(),
                        bodyHeight = $("body").height(),
                        waypoint = FLBuilderLayoutConfig.waypoint,
                        offset = "80%";
                    if (typeof waypoint.offset !== undefined) {
                        offset = FLBuilderLayoutConfig.waypoint.offset + "%";
                    }
                    if (bodyHeight - nodeTop < winHeight * 0.2) {
                        offset = "100%";
                    }
                    node.waypoint({ offset: offset, handler: FLBuilderLayout._doModuleAnimation });
                });
            }
        },
        _doModuleAnimation: function () {
            var module = "undefined" == typeof this.element ? $(this) : $(this.element),
                delay = parseFloat(module.data("animation-delay")),
                duration = parseFloat(module.data("animation-duration"));
            if (!isNaN(duration)) {
                module.css("animation-duration", duration + "s");
            }
            if (!isNaN(delay) && delay > 0) {
                setTimeout(function () {
                    module.addClass("fl-animated");
                }, delay * 1000);
            } else {
                setTimeout(function () {
                    module.addClass("fl-animated");
                }, 1);
            }
        },
        _initHash: function () {
            var hash = window.location.hash.replace("#", "").split("/").shift(),
                element = null,
                tabs = null,
                responsiveLabel = null,
                tabIndex = null,
                label = null;
            if ("" !== hash) {
                try {
                    element = $("#" + hash);
                    if (element.length > 0) {
                        if (element.hasClass("fl-accordion-item")) {
                            setTimeout(function () {
                                element.find(".fl-accordion-button").trigger("click");
                            }, 100);
                        }
                        if (element.hasClass("fl-tabs-panel")) {
                            setTimeout(function () {
                                tabs = element.closest(".fl-tabs");
                                responsiveLabel = element.find(".fl-tabs-panel-label");
                                tabIndex = responsiveLabel.data("index");
                                label = tabs.find(".fl-tabs-labels .fl-tabs-label[data-index=" + tabIndex + "]");
                                if (responsiveLabel.is(":visible")) {
                                    responsiveLabel.trigger("click");
                                } else {
                                    label[0].click();
                                    FLBuilderLayout._scrollToElement(element);
                                }
                            }, 100);
                        }
                    }
                } catch (e) {}
            }
        },
        _initAnchorLinks: function () {
            $("a").each(FLBuilderLayout._initAnchorLink);
        },
        _initAnchorLink: function () {
            var link = $(this),
                href = link.attr("href"),
                loc = window.location,
                id = null,
                element = null;
            if ("undefined" != typeof href && href.indexOf("#") > -1 && link.closest("svg").length < 1) {
                if (loc.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && loc.hostname == this.hostname) {
                    try {
                        id = href.split("#").pop();
                        if (!id) {
                            return;
                        }
                        element = $("#" + id);
                        if (element.length > 0) {
                            if (link.hasClass("fl-scroll-link") || element.hasClass("fl-row") || element.hasClass("fl-col") || element.hasClass("fl-module")) {
                                $(link).on("click", FLBuilderLayout._scrollToElementOnLinkClick);
                            }
                            if (element.hasClass("fl-accordion-item")) {
                                $(link).on("click", FLBuilderLayout._scrollToAccordionOnLinkClick);
                            }
                            if (element.hasClass("fl-tabs-panel")) {
                                $(link).on("click", FLBuilderLayout._scrollToTabOnLinkClick);
                            }
                        }
                    } catch (e) {}
                }
            }
        },
        _scrollToElementOnLinkClick: function (e, callback) {
            var element = $("#" + $(this).attr("href").split("#").pop());
            FLBuilderLayout._scrollToElement(element, callback);
            e.preventDefault();
        },
        _scrollToElement: function (element, callback) {
            var config = FLBuilderLayoutConfig.anchorLinkAnimations,
                dest = 0,
                win = $(window),
                doc = $(document);
            if (element.length > 0) {
                if (element.offset().top > doc.height() - win.height()) {
                    dest = doc.height() - win.height();
                } else {
                    dest = element.offset().top - config.offset;
                }
                $("html, body").animate({ scrollTop: dest }, config.duration, config.easing, function () {
                    if ("undefined" != typeof callback) {
                        callback();
                    }
                    if (undefined != element.attr("id")) {
                        if (history.pushState) {
                            history.pushState(null, null, "#" + element.attr("id"));
                        } else {
                            window.location.hash = element.attr("id");
                        }
                    }
                });
            }
        },
        _scrollToAccordionOnLinkClick: function (e) {
            var element = $("#" + $(this).attr("href").split("#").pop());
            if (element.length > 0) {
                var callback = function () {
                    if (element) {
                        element.find(".fl-accordion-button").trigger("click");
                        element = false;
                    }
                };
                FLBuilderLayout._scrollToElementOnLinkClick.call(this, e, callback);
            }
        },
        _scrollToTabOnLinkClick: function (e) {
            var element = $("#" + $(this).attr("href").split("#").pop()),
                tabs = null,
                label = null,
                responsiveLabel = null;
            if (element.length > 0) {
                tabs = element.closest(".fl-tabs");
                responsiveLabel = element.find(".fl-tabs-panel-label");
                tabIndex = responsiveLabel.data("index");
                label = tabs.find(".fl-tabs-labels .fl-tabs-label[data-index=" + tabIndex + "]");
                if (responsiveLabel.is(":visible")) {
                    var callback = function () {
                        if (element) {
                            responsiveLabel.trigger("click");
                            element = false;
                        }
                    };
                    FLBuilderLayout._scrollToElementOnLinkClick.call(this, e, callback);
                } else {
                    label[0].click();
                    FLBuilderLayout._scrollToElement(element);
                }
                e.preventDefault();
            }
        },
        _initForms: function () {
            if (!FLBuilderLayout._hasPlaceholderSupport) {
                $(".fl-form-field input").each(FLBuilderLayout._initFormFieldPlaceholderFallback);
            }
            $(".fl-form-field input").on("focus", FLBuilderLayout._clearFormFieldError);
        },
        _hasPlaceholderSupport: function () {
            var input = document.createElement("input");
            return "undefined" != input.placeholder;
        },
        _initFormFieldPlaceholderFallback: function () {
            var field = $(this),
                val = field.val(),
                placeholder = field.attr("placeholder");
            if ("undefined" != placeholder && "" === val) {
                field.val(placeholder);
                field.on("focus", FLBuilderLayout._hideFormFieldPlaceholderFallback);
                field.on("blur", FLBuilderLayout._showFormFieldPlaceholderFallback);
            }
        },
        _hideFormFieldPlaceholderFallback: function () {
            var field = $(this),
                val = field.val(),
                placeholder = field.attr("placeholder");
            if (val == placeholder) {
                field.val("");
            }
        },
        _showFormFieldPlaceholderFallback: function () {
            var field = $(this),
                val = field.val(),
                placeholder = field.attr("placeholder");
            if ("" === val) {
                field.val(placeholder);
            }
        },
        _clearFormFieldError: function () {
            var field = $(this);
            field.removeClass("fl-form-error");
            field.siblings(".fl-form-error-message").hide();
        },
    };
    $(function () {
        FLBuilderLayout.init();
    });
})(jQuery);
(function ($) {
    UABBInfoCircle = function (settings) {
        this.settings = settings;
        this.node_IC = settings.id;
        this.autoplay = settings.autoplay;
        this.interval_time = settings.interval;
        this.initial_animation = settings.initial_animation;
        this.responsive_nature = settings.responsive_nature;
        this.breakpoint = settings.breakpoint;
        this._initInfoCircle();
    };
    UABBInfoCircle.prototype = {
        infoCircle: "",
        _initInfoCircle: function () {
            this.infoCircle = $(".fl-node-" + this.node_IC).find(".uabb-info-circle-wrap");
            if (this.initial_animation != "no") {
                this._setInitialAnimation();
            }
            if (this.autoplay == "yes") {
                this._setInfoCircleAutoPlay();
            }
            this._disableActiveAnimation();
        },
        _setInitialAnimation: function () {
            var initial_animation = this.initial_animation,
                infoCircle = this.infoCircle;
            this.infoCircle.find(".uabb-info-circle-small > div").addClass("animated " + initial_animation);
            setTimeout(function () {
                infoCircle.find(".uabb-info-circle-small > div").attr("class", "");
            }, 1500);
        },
        _disableActiveAnimation: function () {
            var infoCircle = this.infoCircle;
            infoCircle.on("mouseleave", ".uabb-info-circle-small", function () {
                $(this).children("div").attr("class", "");
            });
        },
        _setInfoCircleAutoPlay: function () {
            var Screen_Size = $(window).outerWidth();
            if (this.responsive_nature != "true" || (this.responsive_nature == "true" && Screen_Size > this.breakpoint)) {
                var infoCircle = this.infoCircle,
                    interval_time = this.interval_time;
                var _interval = setInterval(function () {
                    autoPlaySelector(1, infoCircle);
                }, interval_time * 1000);
                infoCircle
                    .on("mouseenter click", ".uabb-info-circle-small .uabb-icon-wrap, .uabb-info-circle-small .uabb-image, .uabb-info-circle-in", function () {
                        clearInterval(_interval);
                    })
                    .on("mouseleave", ".uabb-info-circle-small .uabb-icon-wrap, .uabb-info-circle-small .uabb-image, .uabb-info-circle-in", function () {
                        _interval = setInterval(function () {
                            autoPlaySelector(1, infoCircle);
                        }, interval_time * 1000);
                    });
            }
        },
    };
    function autoPlaySelector(autoplay, infoCircle) {
        if (autoplay) {
            var removefrom = infoCircle.find(".uabb-info-circle-icon-content.active"),
                addto = removefrom.next(".uabb-info-circle-icon-content");
            if (addto.length == 0) {
                addto = infoCircle.find(".uabb-info-circle-icon-content").first();
            }
            updateActiveInfoCircle(removefrom, addto);
        }
    }
    function updateActiveInfoCircle(removefrom, addto) {
        removefrom.find(".uabb-info-circle-in").fadeOut(300);
        addto.find(".uabb-info-circle-in").fadeIn(300);
        removefrom.removeClass("active");
        addto.addClass("active");
        removefrom.find(".uabb-info-circle-small > div").attr("class", "");
        addto.find(".uabb-info-circle-small > div").attr("class", "");
        var ThumbActiveAnimation = addto.closest(".uabb-info-circle-wrap").data("active-animation");
        if (ThumbActiveAnimation != "no") {
            addto.find(".uabb-info-circle-small > div").addClass("animated " + ThumbActiveAnimation);
        }
    }
    $(document).ready(function () {
        resize_info_cirlce();
        $(".uabb-info-circle-wrap.on-hover").on("mouseenter", ".uabb-info-circle-small .uabb-icon-wrap, .uabb-info-circle-small .uabb-image", function () {
            var current_parent = $(this).closest(".uabb-info-circle-icon-content"),
                removeActiveFrom = current_parent.siblings(".uabb-info-circle-icon-content");
            updateActiveInfoCircle(removeActiveFrom, current_parent);
        });
        $(".uabb-info-circle-wrap.on-click").on("click", ".uabb-info-circle-small .uabb-icon-wrap, .uabb-info-circle-small .uabb-image", function () {
            var current_parent = $(this).closest(".uabb-info-circle-icon-content"),
                removeActiveFrom = current_parent.siblings(".uabb-info-circle-icon-content");
            updateActiveInfoCircle(removeActiveFrom, current_parent);
        });
        if (jQuery("html").hasClass("fl-builder-edit")) {
            FLBuilder.addHook("col-resize-drag", resize_info_cirlce);
            FLBuilder.addHook("col-resize-stop", resize_info_cirlce);
        }
        UABBTrigger.addHook("uabb-accordion-click", function (argument, selector) {
            var info_circle_wrap = $(selector).find(".uabb-info-circle-wrap");
            resize_info_cirlce_callback(info_circle_wrap);
        });
        UABBTrigger.addHook("uabb-tab-click", function (argument, selector) {
            var info_circle_wrap = $(selector).find(".uabb-info-circle-wrap");
            resize_info_cirlce_callback(info_circle_wrap);
        });
    });
    $(window).on("resize", resize_info_cirlce);
    function resize_info_cirlce() {
        var info_circle_wrap = $(".uabb-info-circle-wrap");
        resize_info_cirlce_callback(info_circle_wrap);
    }
    function resize_info_cirlce_callback(info_circle_wrap) {
        info_circle_wrap.each(function (i, e) {
            var info_circle_width = $(this).outerWidth();
            $(this).css("height", info_circle_width);
        });
    }
})(jQuery);
jQuery(document).ready(function () {
    new UABBInfoCircle({ id: "5d417ba098a87", autoplay: "yes", interval: "10", initial_animation: "pulse", responsive_nature: "true", breakpoint: "768" });
});
jQuery(document).on("click", function (e) {
    var target = e.target,
        slidebox = jQuery(e.target).closest(".fl-module-slide-box");
    if ((!jQuery(e.target).closest(".fl-builder-settings-lightbox").length && jQuery(".fl-builder-settings-lightbox:hidden").length) || !jQuery("html").hasClass("fl-builder-edit")) {
        _hideAll_SlideBox(slidebox);
    }
});
function _hideAll_SlideBox(slidebox) {
    jQuery(document)
        .find(".fl-module-slide-box")
        .each(function (i, e) {
            var thisNode = jQuery(this).data("node"),
                slideboxNode = jQuery(slidebox).data("node");
            if (thisNode != slideboxNode) {
                var style1 = jQuery(this).find(".uabb-style1"),
                    slidebox_wrap = style1.closest(".uabb-slide-box-wrap");
                style1.removeClass("open-slidedown");
                slidebox_wrap.removeClass("set-z-index");
                var style2 = jQuery(this).find(".uabb-style2"),
                    dropdown_icon = style2.find(".uabb-slide-dropdown .fas"),
                    slidebox_wrap = style2.closest(".uabb-slide-box-wrap");
                if (style2.hasClass("open-slidedown")) {
                    style2.removeClass("open-slidedown");
                    slidebox_wrap.removeClass("set-z-index");
                    dropdown_icon.removeClass("fa-angle-up");
                    dropdown_icon.addClass("fa-angle-down");
                }
                var style3 = jQuery(this).find(".uabb-style3"),
                    dropdown_icon = style3.find(".uabb-slide-dropdown .fas"),
                    slidebox_wrap = style3.closest(".uabb-slide-box-wrap");
                if (style3.hasClass("open-slidedown")) {
                    style3.removeClass("open-slidedown");
                    slidebox_wrap.removeClass("set-z-index");
                    dropdown_icon.removeClass("fa-minus");
                    dropdown_icon.addClass("fa-plus");
                }
            }
        });
}
jQuery(document).ready(function () {
    UABBTrigger.addHook("uabb-accordion-click", function (argument, selector) {
        var slide_box_wrap = jQuery(selector).find(".fl-module-slide-box");
        _setHeight(slide_box_wrap);
    });
    UABBTrigger.addHook("uabb-tab-click", function (argument, selector) {
        var slide_box_wrap = jQuery(selector).find(".fl-module-slide-box");
        _setHeight(slide_box_wrap);
    });
    function _setHeight(selector) {
        if (selector != "") {
            var front_slide = jQuery(selector).find(".uabb-slide-front:first").outerHeight(),
                back_slide = jQuery(selector).find(".uabb-slide-down:first").outerHeight(),
                total = parseInt(front_slide);
            jQuery(selector)
                .find("> .fl-module-content")
                .css("height", total + "px");
        } else {
            jQuery(document)
                .find(".fl-module-slide-box")
                .each(function (i, e) {
                    if (jQuery(this).closest(".uabb-tab-acc-content").length > 0 || jQuery(this).closest(".uabb-adv-accordion-content").length > 0) {
                        var front_slide = jQuery(this).find(".uabb-slide-front:first").outerHeight(),
                            back_slide = jQuery(this).find(".uabb-slide-down:first").outerHeight(),
                            total = parseInt(front_slide);
                        jQuery(this)
                            .find("> .fl-module-content")
                            .css("height", total + "px");
                    }
                });
        }
    }
    _setHeight("");
});
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var is_touch_device = false;
else var is_touch_device = true;
jQuery(".fl-node-5d482101cbd86").on("click", ".uabb-slide-face", function (e) {
    var self = jQuery(this),
        slide_type = self.closest(".uabb-slide-type").data("style"),
        style2 = self.closest(".uabb-style2"),
        style3 = self.closest(".uabb-style3");
    if ((slide_type = "style2")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style2.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style2.closest(".uabb-slide-box-wrap");
            if (style2.hasClass("open-slidedown")) {
                style2.removeClass("open-slidedown");
                setTimeout(function () {
                    style2.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-angle-up");
                dropdown_icon.addClass("fa-angle-down");
            } else {
                style2.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-angle-down");
                dropdown_icon.addClass("fa-angle-up");
            }
        }
    }
    if ((slide_type = "style3")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style3.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style3.closest(".uabb-slide-box-wrap");
            if (style3.hasClass("open-slidedown")) {
                style3.removeClass("open-slidedown");
                setTimeout(function () {
                    style3.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-minus");
                dropdown_icon.addClass("fa-plus");
            } else {
                style3.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-plus");
                dropdown_icon.addClass("fa-minus");
            }
        }
    }
});
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var is_touch_device = false;
else var is_touch_device = true;
jQuery(".fl-node-5d482101cbd8a").on("click", ".uabb-slide-face", function (e) {
    var self = jQuery(this),
        slide_type = self.closest(".uabb-slide-type").data("style"),
        style2 = self.closest(".uabb-style2"),
        style3 = self.closest(".uabb-style3");
    if ((slide_type = "style2")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style2.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style2.closest(".uabb-slide-box-wrap");
            if (style2.hasClass("open-slidedown")) {
                style2.removeClass("open-slidedown");
                setTimeout(function () {
                    style2.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-angle-up");
                dropdown_icon.addClass("fa-angle-down");
            } else {
                style2.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-angle-down");
                dropdown_icon.addClass("fa-angle-up");
            }
        }
    }
    if ((slide_type = "style3")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style3.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style3.closest(".uabb-slide-box-wrap");
            if (style3.hasClass("open-slidedown")) {
                style3.removeClass("open-slidedown");
                setTimeout(function () {
                    style3.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-minus");
                dropdown_icon.addClass("fa-plus");
            } else {
                style3.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-plus");
                dropdown_icon.addClass("fa-minus");
            }
        }
    }
});
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var is_touch_device = false;
else var is_touch_device = true;
jQuery(".fl-node-5d482101cbd89").on("click", ".uabb-slide-face", function (e) {
    var self = jQuery(this),
        slide_type = self.closest(".uabb-slide-type").data("style"),
        style2 = self.closest(".uabb-style2"),
        style3 = self.closest(".uabb-style3");
    if ((slide_type = "style2")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style2.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style2.closest(".uabb-slide-box-wrap");
            if (style2.hasClass("open-slidedown")) {
                style2.removeClass("open-slidedown");
                setTimeout(function () {
                    style2.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-angle-up");
                dropdown_icon.addClass("fa-angle-down");
            } else {
                style2.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-angle-down");
                dropdown_icon.addClass("fa-angle-up");
            }
        }
    }
    if ((slide_type = "style3")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style3.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style3.closest(".uabb-slide-box-wrap");
            if (style3.hasClass("open-slidedown")) {
                style3.removeClass("open-slidedown");
                setTimeout(function () {
                    style3.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-minus");
                dropdown_icon.addClass("fa-plus");
            } else {
                style3.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-plus");
                dropdown_icon.addClass("fa-minus");
            }
        }
    }
});
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var is_touch_device = false;
else var is_touch_device = true;
jQuery(".fl-node-5d482101cbd88").on("click", ".uabb-slide-face", function (e) {
    var self = jQuery(this),
        slide_type = self.closest(".uabb-slide-type").data("style"),
        style2 = self.closest(".uabb-style2"),
        style3 = self.closest(".uabb-style3");
    if ((slide_type = "style2")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style2.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style2.closest(".uabb-slide-box-wrap");
            if (style2.hasClass("open-slidedown")) {
                style2.removeClass("open-slidedown");
                setTimeout(function () {
                    style2.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-angle-up");
                dropdown_icon.addClass("fa-angle-down");
            } else {
                style2.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-angle-down");
                dropdown_icon.addClass("fa-angle-up");
            }
        }
    }
    if ((slide_type = "style3")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style3.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style3.closest(".uabb-slide-box-wrap");
            if (style3.hasClass("open-slidedown")) {
                style3.removeClass("open-slidedown");
                setTimeout(function () {
                    style3.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-minus");
                dropdown_icon.addClass("fa-plus");
            } else {
                style3.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-plus");
                dropdown_icon.addClass("fa-minus");
            }
        }
    }
});
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var is_touch_device = false;
else var is_touch_device = true;
jQuery(".fl-node-5d482101cbd87").on("click", ".uabb-slide-face", function (e) {
    var self = jQuery(this),
        slide_type = self.closest(".uabb-slide-type").data("style"),
        style2 = self.closest(".uabb-style2"),
        style3 = self.closest(".uabb-style3");
    if ((slide_type = "style2")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style2.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style2.closest(".uabb-slide-box-wrap");
            if (style2.hasClass("open-slidedown")) {
                style2.removeClass("open-slidedown");
                setTimeout(function () {
                    style2.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-angle-up");
                dropdown_icon.addClass("fa-angle-down");
            } else {
                style2.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-angle-down");
                dropdown_icon.addClass("fa-angle-up");
            }
        }
    }
    if ((slide_type = "style3")) {
        if (!jQuery(e.target).hasClass("uabb-slide-down") && !jQuery(e.target).closest(".uabb-slide-down").length) {
            var dropdown_icon = style3.find(".uabb-slide-dropdown .fa"),
                slidebox_wrap = style3.closest(".uabb-slide-box-wrap");
            if (style3.hasClass("open-slidedown")) {
                style3.removeClass("open-slidedown");
                setTimeout(function () {
                    style3.closest(".uabb-slide-box-wrap").removeClass("set-z-index");
                }, 250);
                dropdown_icon.removeClass("fa-minus");
                dropdown_icon.addClass("fa-plus");
            } else {
                style3.addClass("open-slidedown");
                slidebox_wrap.addClass("set-z-index");
                dropdown_icon.removeClass("fa-plus");
                dropdown_icon.addClass("fa-minus");
            }
        }
    }
});
(function ($) {
    UABBAdvAccordion = function (settings) {
        this.settings = settings;
        this.node = settings.id;
        this.nodeClass = ".fl-node-" + settings.id;
        this.close_icon = settings.close_icon;
        this.open_icon = settings.open_icon;
        this._init();
    };
    UABBAdvAccordion.prototype = {
        settings: {},
        node: "",
        nodeClass: "",
        close_icon: "fa fa-plus",
        open_icon: "fa fa-minus",
        _init: function () {
            var button_level = $(this.nodeClass).find(".uabb-adv-accordion-button").first().closest(".uabb-adv-accordion");
            button_level.children(".uabb-adv-accordion-item").children(".uabb-adv-accordion-button").click($.proxy(this._buttonClick, this));
            this._enableFirst();
            this._initAnchorLinks();
        },
        _initAnchorLinks: function () {
            $("a").each(this._initAnchorLink);
        },
        _initAnchorLink: function () {
            var link = $(this),
                href = link.attr("href"),
                loc = window.location,
                id = null,
                element = null;
            if ("undefined" != typeof href && href.indexOf("#") > -1) {
                if (loc.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && loc.hostname == this.hostname) {
                    try {
                        id = href.split("#").pop();
                        if (!id) {
                            return;
                        }
                        element = $("#" + id);
                        if (element.length > 0) {
                            if (element.hasClass("uabb-adv-accordion-item")) {
                                jQuery(link).on("click", UABBAdvAccordion.prototype._scrollToAccordionLink);
                            }
                        }
                    } catch (e) {}
                }
            }
        },
        _scrollToAccordionLink: function () {
            var hashval = $(this).attr("href");
            if (/^(f|ht)tps?:\/\//i.test(hashval)) {
                hashvalarr = hashval.split("/");
                hashval = hashvalarr[hashvalarr.length - 1];
            }
            var hashvalarr = hashval.split("-"),
                dataindex = hashvalarr[hashvalarr.length - 1],
                tab_id = hashval.replace("-" + dataindex, "");
            if (tab_id != "") {
                if (jQuery(tab_id).length > 0) {
                    if (jQuery(tab_id).find('.uabb-adv-accordion > .uabb-adv-accordion-item[data-index="' + dataindex + '"]')) {
                        jQuery("html, body").animate({ scrollTop: jQuery(tab_id).offset().top - 250 }, 1000);
                        var enable_first = "<?php echo $settings->enable_first; ?>";
                        if (!(parseInt(dataindex) == 0 && enable_first == "yes")) {
                            setTimeout(function () {
                                jQuery(tab_id + " .uabb-adv-accordion-button")
                                    .eq(dataindex)
                                    .trigger("click");
                            }, 1000);
                        }
                    }
                }
            }
        },
        _multiInstance: function (e) {
            if (this._multiInstance.staticVar == undefined) {
                this._multiInstance.staticVar = 0;
            }
            this._multiInstance.staticVar++;
        },
        _buttonClick: function (e) {
            var firstitem = this.settings.enable_first;
            this._multiInstance();
            if (firstitem != "yes") {
                if (e.originalEvent == undefined && this._multiInstance.staticVar > 1) {
                    var totalAcc = $(".uabb-adv-accordion").length;
                    if (this._multiInstance.staticVar == totalAcc) {
                        this._multiInstance.staticVar = 0;
                    }
                    return;
                }
            }
            var button = $(e.target).closest(".uabb-adv-accordion-button"),
                accordion = button.closest(".uabb-adv-accordion"),
                item = button.closest(".uabb-adv-accordion-item"),
                allContent = accordion.find(".uabb-adv-accordion-content"),
                allIcons = accordion.find(".uabb-adv-accordion-button i.uabb-adv-accordion-button-icon"),
                content = button.siblings(".uabb-adv-accordion-content"),
                icon = button.find("i.uabb-adv-accordion-button-icon");
            if (accordion.hasClass("uabb-adv-accordion-collapse")) {
                accordion.find(".uabb-adv-accordion-item-active").removeClass("uabb-adv-accordion-item-active");
                allContent.slideUp("normal");
                if (this.settings.icon_animation == "none") {
                    allIcons.removeClass(this.open_icon);
                    allIcons.addClass(this.close_icon);
                }
            }
            if (content.is(":hidden")) {
                item.addClass("uabb-adv-accordion-item-active");
                content.slideDown("normal", this._slideDownComplete);
                if (this.settings.icon_animation == "none") {
                    icon.removeClass(this.close_icon);
                    icon.addClass(this.open_icon);
                }
            } else {
                item.removeClass("uabb-adv-accordion-item-active");
                content.slideUp("normal", this._slideUpComplete);
                if (this.settings.icon_animation == "none") {
                    icon.removeClass(this.open_icon);
                    icon.addClass(this.close_icon);
                }
            }
            var trigger_args = ".fl-node-" + this.node + " .uabb-adv-accordion-item-active";
            UABBTrigger.triggerHook("uabb-accordion-click", trigger_args);
        },
        _slideUpComplete: function () {
            var content = $(this),
                accordion = content.closest(".uabb-adv-accordion");
            accordion.trigger("fl-builder.uabb-adv-accordion-toggle-complete");
        },
        _slideDownComplete: function () {
            var content = $(this),
                accordion = content.closest(".uabb-adv-accordion"),
                item = content.parent(),
                win = $(window);
            FLBuilderLayout.refreshGalleries(content);
            if (!accordion.hasClass("uabb-accordion-edit")) {
                if (item.offset().top < win.scrollTop() + 100) {
                    $("html, body").animate({ scrollTop: item.offset().top - 100 }, 500, "swing");
                }
            }
            accordion.trigger("fl-builder.uabb-adv-accordion-toggle-complete");
            var fireRefreshEventOnWindow = function () {
                var evt = document.createEvent("uabbAccordionCreate");
                evt.initEvent("resize", true, false);
                window.dispatchEvent(evt);
            };
        },
        _enableFirst: function () {
            if (typeof this.settings.enable_first !== "undefined") {
                var firstitem = this.settings.enable_first;
                if (firstitem == "yes") {
                    $(this.nodeClass + " .uabb-adv-accordion-button")
                        .eq(0)
                        .trigger("click");
                }
            }
        },
    };
})(jQuery);
(function ($) {
    $(function () {
        new UABBAdvAccordion({ id: "5d5d530d57970", close_icon: " fas fa-angle-right", open_icon: "fas fa-angle-down ", icon_animation: "none", enable_first: "no" });
    });
    var hashval = window.location.hash,
        hashvalarr = hashval.split("-"),
        dataindex = hashvalarr[hashvalarr.length - 1],
        tab_id = hashval.replace("-" + dataindex, "");
    if (tab_id != "") {
        if (jQuery(tab_id).length > 0) {
            if (jQuery(tab_id).find('.uabb-adv-accordion > .uabb-adv-accordion-item[data-index="' + dataindex + '"]')) {
                jQuery("html, body").animate({ scrollTop: jQuery(tab_id).offset().top - 250 }, 1000);
                var enable_first = "no";
                if (!(parseInt(dataindex) == 0 && enable_first == "yes")) {
                    setTimeout(function () {
                        jQuery(tab_id + " .uabb-adv-accordion-button")
                            .eq(dataindex)
                            .trigger("click");
                    }, 1000);
                }
            }
        }
    }
})(jQuery);
(function ($) {
    var form = $(".fl-builder-settings"),
        gradient_type = form.find("input[name=uabb_row_gradient_type]");
    $(document).on("change", "input[name=uabb_row_radial_advance_options], input[name=uabb_row_linear_advance_options], input[name=uabb_row_gradient_type], select[name=bg_type]", function () {
        var form = $(".fl-builder-settings"),
            background_type = form.find("select[name=bg_type]").val(),
            linear_direction = form.find("select[name=uabb_row_uabb_direction]").val(),
            linear_advance_option = form.find("input[name=uabb_row_linear_advance_options]:checked").val(),
            radial_advance_option = form.find("input[name=uabb_row_radial_advance_options]:checked").val(),
            gradient_type = form.find("input[name=uabb_row_gradient_type]:checked").val();
        if (background_type == "uabb_gradient") {
            if (gradient_type == "radial") {
                setTimeout(function () {
                    form.find("#fl-field-uabb_row_linear_direction").hide();
                    form.find("#fl-field-uabb_row_linear_gradient_primary_loc").hide();
                    form.find("#fl-field-uabb_row_linear_gradient_secondary_loc").hide();
                }, 1);
                if (radial_advance_option == "yes") {
                    form.find("#fl-field-uabb_row_radial_gradient_primary_loc").show();
                    form.find("#fl-field-uabb_row_radial_gradient_secondary_loc").show();
                }
            }
            if (gradient_type == "linear") {
                setTimeout(function () {
                    form.find("#fl-field-uabb_row_radial_gradient_primary_loc").hide();
                    form.find("#fl-field-uabb_row_radial_gradient_secondary_loc").hide();
                }, 1);
                if (linear_direction == "custom") {
                    form.find("#fl-field-uabb_row_linear_direction").show();
                }
                if (linear_advance_option == "yes") {
                    form.find("#fl-field-uabb_row_linear_gradient_primary_loc").show();
                    form.find("#fl-field-uabb_row_linear_gradient_secondary_loc").show();
                }
            }
        }
    });
})(jQuery);
(function ($) {
    var url = "https://abadini.com/wp-content/plugins/bb-ultimate-addon/assets/js/particles.min.js";
    window.particle_js_loaded = 0;
    $.cachedScript = function (url, options) {
        options = $.extend(options || {}, { dataType: "script", cache: true, url: url });
        return $.ajax(options);
    };
    if ($(".uabb-row-particles-background").length) {
        $.cachedScript(url).done(function (script, textStatus) {
            window.particle_js_loaded = 1;
            init_particles_row_background_script();
        });
    }
    function init_particles_row_background_script() {
        row_id = "5d40206f4aa0b";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d416ed06c76f";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d4020dc6fd19";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d482101cbd8d";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d402139d15b6";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d416bf13daf2";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d5d205b9a8ee";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d5d1ff3c6109";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
        row_id = "5d5d530d5cba4";
        nodeclass = ".fl-node-" + row_id;
        var nodeClass = jQuery(".fl-node-" + row_id);
        particle_selector = nodeClass.find(".uabb-row-particles-background");
        if (particle_selector.length > 0) {
            data_particles = particle_selector.data("particle");
            enable_particles = data_particles.enable_particles;
            particles_style = data_particles.particles_style;
            particles_dot_color = data_particles.particles_dot_color;
            number_particles = data_particles.number_particles;
            particles_size = data_particles.particles_size;
            particles_speed = data_particles.particles_speed;
            interactive_settings = data_particles.interactive_settings;
            advanced_settings = data_particles.advanced_settings;
            particles_opacity = data_particles.particles_opacity;
            particles_direction = data_particles.particles_direction;
            if ("yes" === enable_particles) {
                if ("custom" === particles_style) {
                } else {
                    var number_value = 150,
                        shape_type = "circle",
                        shape_nb_sides = 5,
                        opacity_value = 0.6,
                        opacity_random = true,
                        opacity_anim_enable = false,
                        line_linked = false,
                        move_speed = 4,
                        move_random = true,
                        size_value = 2,
                        size_random = true,
                        size_anim_enable = false,
                        onhover = "repulse",
                        move_direction = "none",
                        interactive = false;
                    if ("default" === particles_style) {
                        line_linked = true;
                        opacity_random = false;
                        move_random = false;
                        move_speed = 6;
                    } else if ("nasa" == particles_style) {
                        number_value = 160;
                        shape_type = "circle";
                        opacity_value = 1;
                        opacity_anim_enable = true;
                        move_speed = 1;
                        size_value = 3;
                        onhover = "bubble";
                    } else if ("snow" == particles_style) {
                        opacity_value = 0.5;
                        size_value = 4;
                        move_speed = 3;
                        move_direction = particles_direction;
                        number_value = 200;
                        opacity_random = false;
                    } else if ("flow" == particles_style) {
                        number_value = 14;
                        shape_type = "polygon";
                        shape_nb_sides = 6;
                        opacity_value = 0.3;
                        move_speed = 5;
                        size_value = 40;
                        size_random = false;
                        size_anim_enable = true;
                    } else if ("bubble" == particles_style) {
                        move_speed = 5;
                        move_direction = "top";
                        number_value = 500;
                        size_value = 1;
                        size_random = false;
                        opacity_value = 0.6;
                        opacity_random = false;
                    }
                    if (particles_dot_color == "") {
                        particles_dot_color = "#bdbdbd";
                    }
                    if (particles_opacity != "" || particles_opacity == "0") {
                        opacity_value = particles_opacity;
                    }
                    if ("yes" === advanced_settings) {
                        if (number_particles != "") {
                            number_value = number_particles;
                        }
                        if (particles_size !== "") {
                            size_value = particles_size;
                        }
                        if (particles_speed !== "") {
                            move_speed = particles_speed;
                        }
                    }
                    if (interactive_settings == "yes") {
                        interactive = true;
                    }
                    var config = {
                        particles: {
                            number: { value: number_value, density: { enable: true, value_area: 800 } },
                            color: { value: particles_dot_color },
                            shape: { type: shape_type, stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: shape_nb_sides } },
                            opacity: { value: opacity_value, random: opacity_random, anim: { enable: opacity_anim_enable, speed: 1, opacity_min: 0.1, sync: false } },
                            size: { value: size_value, random: size_random, anim: { enable: size_anim_enable, speed: 5, size_min: 35, sync: false } },
                            line_linked: { enable: line_linked, distance: 150, color: particles_dot_color, opacity: 0.4, width: 1 },
                            move: { enable: true, speed: move_speed, direction: move_direction, random: move_random, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: { onhover: { enable: interactive, mode: onhover }, onclick: { enable: false, mode: "push" }, resize: true },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 200, size: 0, duration: 2, opacity: 0, speed: 2 },
                                repulse: { distance: 150 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    };
                    particlesJS("uabb-particle-" + row_id, config);
                }
            }
        }
    }
})(jQuery);
(function ($) {
    $(document).on("change", "select[name=uabb_row_particles_style]", function () {
        _hideFields();
    });
    $(document).on("change", "select[name=enable_particles]", function () {
        _hideFields();
    });
    $(document).on("change", "select[name=uabb_row_particles_settings]", function () {
        _hideFields();
    });
    $(document).on("init", ".fl-builder-settings", function () {
        _hideFields();
    });
    function _hideFields() {
        var form = $(".fl-builder-settings");
        var branding = "no";
        if (form.length > 0) {
            enable_particle = form.find("select[name=enable_particles]").val();
            if ("no" === enable_particle) {
                form.find("#fl-field-uabb_particles_direction").hide();
                form.find("#fl-field-uabb_particles_custom_code").hide();
                form.find("#fl-field-uabb_row_particles_style").hide();
                form.find("#fl-field-uabb_row_particles_color").hide();
                form.find("#fl-field-uabb_row_particles_color_opacity").hide();
                form.find("#fl-field-uabb_row_particles_settings").hide();
                form.find("#fl-field-uabb_row_particles_interactive_settings").hide();
                form.find("#fl-field-uabb_row_particles_size").hide();
                form.find("#fl-field-uabb_row_particles_speed").hide();
                form.find("#fl-field-uabb_row_number_particles").hide();
            } else {
                if ("snow" === form.find("select[name=uabb_row_particles_style]").val()) {
                    form.find("#fl-field-uabb_row_particles_style").show();
                    form.find("#fl-field-uabb_row_particles_color").show();
                    form.find("#fl-field-uabb_row_particles_color_opacity").show();
                    form.find("#fl-field-uabb_row_particles_settings").show();
                    form.find("#fl-field-uabb_particles_direction").show();
                    form.find("#fl-field-uabb_particles_custom_code").hide();
                    if ("yes" === form.find("select[name=uabb_row_particles_settings]").val()) {
                        form.find("#fl-field-uabb_row_particles_size").show();
                        form.find("#fl-field-uabb_row_particles_speed").show();
                        form.find("#fl-field-uabb_row_number_particles").show();
                        form.find("#fl-field-uabb_row_particles_interactive_settings").show();
                    } else {
                        form.find("#fl-field-uabb_row_particles_size").hide();
                        form.find("#fl-field-uabb_row_particles_speed").hide();
                        form.find("#fl-field-uabb_row_particles_interactive_settings").hide();
                        form.find("#fl-field-uabb_row_number_particles").hide();
                    }
                }
                if ("custom" === form.find("select[name=uabb_row_particles_style]").val()) {
                    form.find("#fl-field-uabb_particles_custom_code").show();
                    form.find("#fl-field-uabb_particles_direction").hide();
                    form.find("#fl-field-uabb_row_particles_style").show();
                    form.find("#fl-field-uabb_row_particles_color").hide();
                    form.find("#fl-field-uabb_row_particles_color_opacity").hide();
                    form.find("#fl-field-uabb_row_particles_settings").hide();
                    form.find("#fl-field-uabb_row_particles_interactive_settings").hide();
                    form.find("#fl-field-uabb_row_particles_size").hide();
                    form.find("#fl-field-uabb_row_particles_speed").hide();
                    form.find("#fl-field-uabb_row_number_particles").hide();
                }
                if ("nasa" === form.find("select[name=uabb_row_particles_style]").val() || "default" === form.find("select[name=uabb_row_particles_style]").val()) {
                    form.find("#fl-field-uabb_row_particles_style").show();
                    form.find("#fl-field-uabb_row_particles_color").show();
                    form.find("#fl-field-uabb_row_particles_color_opacity").show();
                    form.find("#fl-field-uabb_row_particles_settings").show();
                    form.find("#fl-field-uabb_row_particles_interactive_settings").show();
                    form.find("#fl-field-uabb_particles_custom_code").hide();
                    form.find("#fl-field-uabb_particles_direction").hide();
                    if ("yes" === form.find("select[name=uabb_row_particles_settings]").val()) {
                        form.find("#fl-field-uabb_row_particles_size").show();
                        form.find("#fl-field-uabb_row_particles_speed").show();
                        form.find("#fl-field-uabb_row_number_particles").show();
                        form.find("#fl-field-uabb_row_particles_interactive_settings").show();
                    } else {
                        form.find("#fl-field-uabb_row_particles_size").hide();
                        form.find("#fl-field-uabb_row_particles_speed").hide();
                        form.find("#fl-field-uabb_row_number_particles").hide();
                        form.find("#fl-field-uabb_row_particles_interactive_settings").hide();
                    }
                }
                if ("custom" === form.find("select[name=uabb_row_particles_style]").val()) {
                    style_selector = form.find("#fl-field-uabb_row_particles_style");
                    wrapper = style_selector.find(".fl-field-control-wrapper");
                    if (wrapper.find(".fl-field-description").length === 0) {
                        if ("no" === branding) {
                            style_selector
                                .find(".fl-field-control-wrapper")
                                .append(
                                    '<span class="fl-field-description uabb-particle-docs-list"><div class="uabb-docs-particle"> Add custom JSON for the Particles Background below. To generate a completely customized background style follow steps below - </div><div class="uabb-docs-particle">1. Visit a link <a class="uabb-docs-particle-link" href="https://vincentgarreau.com/particles.js/" target="_blank"> here </a> and choose required attributes for particles</div><div class="uabb-docs-particle">2. Once a custom style is created, download JSON from "Download current config (json)" link</div><div class="uabb-docs-particle">3. Copy JSON code from the above file and paste it below</div><div class="uabb-docs-particle">To know more about creating a custom style, refer to a document <a class="uabb-docs-particle-link" href="https://www.ultimatebeaver.com/docs/custom-particle-backgrounds/?utm_source=uabb-pro-backend&utm_medium=row-editor-screen&utm_campaign=particle-backgrounds-row" target="_blank" rel="noopener"> here. </a></div></span>'
                                );
                        } else {
                            style_selector
                                .find(".fl-field-control-wrapper")
                                .append(
                                    '<span class="fl-field-description uabb-particle-docs-list"><div class="uabb-docs-particle"> Add custom JSON for the Particles Background below. To generate a completely customized background style follow steps below - </div><div class="uabb-docs-particle">1. Visit a link <a class="uabb-docs-particle-link" href="https://vincentgarreau.com/particles.js/" target="_blank"> here </a> and choose required attributes for particles</div><div class="uabb-docs-particle">2. Once a custom style is created, download JSON from "Download current config (json)" link</div><div class="uabb-docs-particle">3. Copy JSON code from the above file and paste it below</div></span>'
                                );
                        }
                    } else {
                        wrapper.find(".fl-field-description").show();
                    }
                } else {
                    style_selector = form.find("#fl-field-uabb_row_particles_style");
                    wrapper = style_selector.find(".fl-field-control-wrapper");
                    wrapper.find(".fl-field-description").hide();
                }
            }
        }
    }
})(jQuery);
(function ($) {
    var form = $(".fl-builder-settings"),
        gradient_type = form.find("input[name=uabb_col_gradient_type]");
    $(document).on("change", " input[name=uabb_col_radial_advance_options], input[name=uabb_col_linear_advance_options], input[name=uabb_col_gradient_type], select[name=bg_type]", function () {
        var form = $(".fl-builder-settings"),
            background_type = form.find("select[name=bg_type]").val(),
            linear_direction = form.find("select[name=uabb_col_uabb_direction]").val(),
            linear_advance_option = form.find("input[name=uabb_col_linear_advance_options]:checked").val(),
            radial_advance_option = form.find("input[name=uabb_col_radial_advance_options]:checked").val(),
            gradient_type = form.find("input[name=uabb_col_gradient_type]:checked").val();
        if (background_type == "uabb_gradient") {
            if (gradient_type == "radial") {
                setTimeout(function () {
                    form.find("#fl-field-uabb_col_linear_direction").hide();
                    form.find("#fl-field-uabb_col_linear_gradient_primary_loc").hide();
                    form.find("#fl-field-uabb_col_linear_gradient_secondary_loc").hide();
                }, 1);
                if (radial_advance_option == "yes") {
                    form.find("#fl-field-uabb_col_radial_gradient_primary_loc").show();
                    form.find("#fl-field-uabb_col_radial_gradient_secondary_loc").show();
                }
            }
            if (gradient_type == "linear") {
                setTimeout(function () {
                    form.find("#fl-field-uabb_col_radial_gradient_primary_loc").hide();
                    form.find("#fl-field-uabb_col_radial_gradient_secondary_loc").hide();
                }, 1);
                if (linear_direction == "custom") {
                    form.find("#fl-field-uabb_col_linear_direction").show();
                }
                if (linear_advance_option == "yes") {
                    form.find("#fl-field-uabb_col_linear_gradient_primary_loc").show();
                    form.find("#fl-field-uabb_col_linear_gradient_secondary_loc").show();
                }
            }
        }
    });
})(jQuery);
