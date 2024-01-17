const versionInfo = {
  "exbVersion": "1.14.0",
  "exbBuildNum": "VERSION_NAME_FROM_JENKINS",
  "exbBuildCommit": "EXB_GIT_COMMIT_HASH",
  "exbBuildBranch": "EXB_BRANCH",
  "exbExtensionsBuildCommit": "EXB_EXT_GIT_COMMIT_HASH",
  "exbExtensionsBuildBranch": "EXB_EXT_BRANCH",
  "exbBuildDate": "BUILD_DATE_FROM_JENKINS",
  "productVersion": "ArcGIS Experience Builder"
}
function initJimuConfig () {
  const webpackOptions = JSON.parse(document.getElementById('webpack-options').innerText)

  /** webpackOptions.mountPath may be changed by DE server. */
  let mountPath = webpackOptions.mountPath

  /** webpackOptions.isOutOfExb will be changed when download. */
  const isOutOfExb = webpackOptions.isOutOfExb

  /** webpackOptions.hostEnv may be changed by DE server. */
  let hostEnv = webpackOptions.hostEnv

  // isDevEdition is set to false in webpack, developer edition node server will replace it to true
  const { appFolderName, useStructuralUrl, isDevEdition, buildNumber, isBuilder, isSite, isInPortal } = webpackOptions

  if (isOutOfExb) {
    mountPath = getPath()
  } else if (isInPortal) {
    mountPath = getDeployContextFromLocation() + 'apps/experiencebuilder/'
    webpackOptions.arcgisJsApiUrl = getDeployContextFromLocation() + 'jsapi/jsapi4/'
  }

  if (!isDevEdition && !isInPortal) { // online host version.
    if (location.hostname === 'experiencedev.arcgis.com') {
      hostEnv = 'dev'
    } else if (location.hostname === 'experienceqa.arcgis.com') {
      hostEnv = 'qa'
    } else if (location.hostname === 'experience.arcgis.com') {
      hostEnv = 'prod'
    }
    // for other domain, we don't rewrite the hostEnv
  }

  if (!mountPath) {
    mountPath = '/'
  }
  if (!/\/$/.test(mountPath)) {
    mountPath = mountPath + '/'
  }

  let rootPath = mountPath
  if (appFolderName !== 'site') {
    rootPath = mountPath + appFolderName + '/'
  }

  window.jimuConfig = {
    isBuilder: isBuilder,
    isSite: isSite,
    isInBuilder: isInBuilder(),
    mountPath: mountPath,
    appFolderName: appFolderName,
    rootPath: rootPath,
    baseUrl: buildNumber ? mountPath + 'cdn/' + buildNumber + '/' : mountPath,
    isOutOfExb: isOutOfExb,
    useStructuralUrl: useStructuralUrl,
    isInPortal: isInPortal,
    isDevEdition: isDevEdition,
    arcgisJsApiUrl: webpackOptions.arcgisJsApiUrl,
    hostEnv: hostEnv,
    buildNumber: buildNumber,
    exbVersion: versionInfo.exbVersion
  }
}

function getDeployContextFromLocation () {
  let keyIndex = window.location.href.indexOf('/home/')
  if (keyIndex < 0) {
    keyIndex = window.location.href.indexOf('/apps/')
  }
  let context = window.location.href.substring(window.location.href.indexOf(
    window.location.host) + window.location.host.length + 1, keyIndex)
  if (context !== '/') {
    context = '/' + context + '/'
  }
  return context
}

function isInBuilder () {
  try {
    // eslint-disable-next-line
    window.parent.jimuConfig
  } catch (err) {
    //cross domain error
    return false
  }
  return window !== window.parent && window.parent.jimuConfig && window.parent.jimuConfig.isBuilder
}

initJimuConfig()

'use strict';

const CACHE_KEY = 'exb-build-number'

if ('serviceWorker' in navigator) {
  // See https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
  window.addEventListener('load', function() {
    // service-worker.js *must* be located at the top-level directory relative to your site.
    // It won't be able to control pages unless it's located at the same level or higher than them.
    navigator.serviceWorker.register(window.jimuConfig.mountPath + 'service-worker.js').then(function(reg) {
      console.log('Register a service worker.')
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });

  clearCache()
}

function clearCache () {
  if (!window.caches) {
    return
  }

  const currentCacheId = getCacheId()

  if (!currentCacheId) {
    return
  }

  const cachedCacheId = readCacheId()
  if (!cachedCacheId) {
    setCacheId(currentCacheId)
    return
  }

  if (currentCacheId !== cachedCacheId) {
    // These cache keys are set in service-worker.js
    caches.delete('exb-assets-cache')
    caches.delete('arcgis-jsapi-cache')
    setCacheId(currentCacheId)
  }
}

function readCacheId () {
  try {
    return localStorage.getItem(CACHE_KEY)
  } catch (err) {
    console.error('Read Local storage error.', err)
    return null
  }
}

function setCacheId (buildNumber) {
  try {
    return localStorage.setItem(CACHE_KEY, buildNumber)
  } catch (err) {
    console.error('Set Local storage error.', err)
    return null
  }
}

function getCacheId () {
  return window.jimuConfig.buildNumber ? `${window.jimuConfig.exbVersion}-${window.jimuConfig.buildNumber}` : window.jimuConfig.exbVersion
}
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bowser=t():e.bowser=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));
/*!
 * SystemJS 6.14.2
 */
(function () {

  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://github.com/systemjs/systemjs/blob/main/docs/errors.md#" + errCode + ")";
  }

  var hasSymbol = typeof Symbol !== 'undefined';
  var hasSelf = typeof self !== 'undefined';
  var hasDocument = typeof document !== 'undefined';

  var envGlobal = hasSelf ? self : global;

  var baseUrl;

  if (hasDocument) {
    var baseEl = document.querySelector('base[href]');
    if (baseEl)
      baseUrl = baseEl.href;
  }

  if (!baseUrl && typeof location !== 'undefined') {
    baseUrl = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }

  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  }

  function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
    for (var p in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
      var rhs = packages[p];
      // package fallbacks not currently supported
      if (typeof rhs !== 'string')
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
      if (!mapped) {
        targetWarning('W1', p, rhs, 'bare specifier did not resolve');
      }
      else
        outPackages[resolvedLhs] = mapped;
    }
  }

  function resolveAndComposeImportMap (json, baseUrl, outMap) {
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl, outMap, null);

    var u;
    for (u in json.scopes || {}) {
      var resolvedScope = resolveUrl(u, baseUrl);
      resolveAndComposePackages(json.scopes[u], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, outMap, resolvedScope);
    }

    for (u in json.depcache || {})
      outMap.depcache[resolveUrl(u, baseUrl)] = json.depcache[u];
    
    for (u in json.integrity || {})
      outMap.integrity[resolveUrl(u, baseUrl)] = json.integrity[u];
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    var pkgName = getMatch(id, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
        targetWarning('W2', pkgName, pkg, "should have a trailing '/'");
      }
      else
        return pkg + id.slice(pkgName.length);
    }
  }

  function targetWarning (code, match, target, msg) {
    console.warn(errMsg(code, "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }

  function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
    var scopes = importMap.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
  }

  /*
   * SystemJS Core
   *
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(err, id, deps) handler for tracing / hot-reloading
   *
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  var toStringTag$1 = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  var systemJSPrototype = SystemJS.prototype;

  systemJSPrototype.import = function (id, parentUrl, meta) {
    var loader = this;
    (parentUrl && typeof parentUrl === 'object') && (meta = parentUrl, parentUrl = undefined);
    return Promise.resolve(loader.prepareImport())
    .then(function() {
      return loader.resolve(id, parentUrl, meta);
    })
    .then(function (id) {
      var load = getOrCreateLoad(loader, id, undefined, meta);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype.createContext = function (parentId) {
    var loader = this;
    return {
      url: parentId,
      resolve: function (id, parentUrl) {
        return Promise.resolve(loader.resolve(id, parentUrl || parentId));
      }
    };
  };

  // onLoad(err, id, deps) provided for tracing / hot-reloading
  systemJSPrototype.onload = function () {};
  function loadToId (load) {
    return load.id;
  }
  function triggerOnload (loader, load, err, isErrSource) {
    loader.onload(err, load.id, load.d && load.d.map(loadToId), !!isErrSource);
    if (err)
      throw err;
  }

  var lastRegister;
  systemJSPrototype.register = function (deps, declare, metas) {
    lastRegister = [deps, declare, metas];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl, meta) {
    var load = loader[REGISTRY][id];
    if (load)
      return load;

    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag$1)
      Object.defineProperty(ns, toStringTag$1, { value: 'Module' });

    var instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl, meta);
    })
    .then(function (registration) {
      if (!registration)
        throw Error(errMsg(2, 'Module ' + id + ' did not instantiate'));
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;
        if (typeof name === 'string') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (var p in name) {
            var value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }

          if (name && name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter) setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId, meta) {
          return loader.import(importId, id, meta);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || [], registration[2] || []];
    }, function (err) {
      load.e = null;
      load.er = err;
      triggerOnload(loader, load, err, true);
      throw err;
    });

    var linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        var meta = instantiation[2][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id, meta);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        });
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });

    // Capital letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,
      // extra module information for import assertion
      // shape like: { assert: { type: 'xyz' } }
      m: meta,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, L, I, E cleared

      // Promise for top-level completion
      C: undefined,

      // parent instantiator / executor
      p: undefined
    };
  }

  function instantiateAll (loader, load, parent, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        if (!load.p || load.p.e === null)
          load.p = parent;
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, parent, loaded);
        }));
      })
      .catch(function (err) {
        if (load.er)
          throw err;
        load.e = null;
        triggerOnload(loader, load, err, false);
        throw err;
      });
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  var nullContext = Object.freeze(Object.create(null));

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id])
      return;
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // From here we're about to execute the load.
    // Because the execution may be async, we pop the `load.e` first.
    // So `load.e === null` always means the load has been executed or is executing.
    // To inspect the state:
    // - If `load.er` is truthy, the execution has threw or has been rejected;
    // - otherwise, either the `load.E` is a promise, means it's under async execution, or
    // - the `load.E` is null, means the load has completed the execution or has been async resolved.
    var exec = load.e;
    load.e = null;

    // deps execute first, unless circular
    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      try {
        var depLoadPromise = postOrderExec(loader, depLoad, seen);
        if (depLoadPromise)
          (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
      }
      catch (err) {
        load.er = err;
        triggerOnload(loader, load, err, false);
        throw err;
      }
    });
    if (depLoadPromises)
      return Promise.all(depLoadPromises).then(doExec);

    return doExec();

    function doExec () {
      try {
        var execPromise = exec.call(nullContext);
        if (execPromise) {
          execPromise = execPromise.then(function () {
            load.C = load.n;
            load.E = null; // indicates completion
            if (!false) triggerOnload(loader, load, null, true);
          }, function (err) {
            load.er = err;
            load.E = null;
            if (!false) triggerOnload(loader, load, err, true);
            throw err;
          });
          return load.E = execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        load.L = load.I = undefined;
      }
      catch (err) {
        load.er = err;
        throw err;
      }
      finally {
        triggerOnload(loader, load, load.er, true);
      }
    }
  }

  envGlobal.System = new SystemJS();

  /*
   * SystemJS browser attachments for script and import map processing
   */

  var importMapPromise = Promise.resolve();
  var importMap = { imports: {}, scopes: {}, depcache: {}, integrity: {} };

  // Scripts are processed immediately, on the first System.import, and on DOMReady.
  // Import map scripts are processed only once (by being marked) and in order for each phase.
  // This is to avoid using DOM mutation observers in core, although that would be an alternative.
  var processFirst = hasDocument;
  systemJSPrototype.prepareImport = function (doProcessScripts) {
    if (processFirst || doProcessScripts) {
      processScripts();
      processFirst = false;
    }
    return importMapPromise;
  };
  if (hasDocument) {
    processScripts();
    window.addEventListener('DOMContentLoaded', processScripts);
  }
  systemJSPrototype.addImportMap = function (newMap, mapBase) {
    resolveAndComposeImportMap(newMap, mapBase || baseUrl, importMap);
  };

  function processScripts () {
    [].forEach.call(document.querySelectorAll('script'), function (script) {
      if (script.sp) // sp marker = systemjs processed
        return;
      // TODO: deprecate systemjs-module in next major now that we have auto import
      if (script.type === 'systemjs-module') {
        script.sp = true;
        if (!script.src)
          return;
        System.import(script.src.slice(0, 7) === 'import:' ? script.src.slice(7) : resolveUrl(script.src, baseUrl)).catch(function (e) {
          // if there is a script load error, dispatch an "error" event
          // on the script tag.
          if (e.message.indexOf('https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3') > -1) {
            var event = document.createEvent('Event');
            event.initEvent('error', false, false);
            script.dispatchEvent(event);
          }
          return Promise.reject(e);
        });
      }
      else if (script.type === 'systemjs-importmap') {
        script.sp = true;
        // The passThrough property is for letting the module types fetch implementation know that this is not a SystemJS module.
        var fetchPromise = script.src ? (System.fetch || fetch)(script.src, { integrity: script.integrity, passThrough: true }).then(function (res) {
          if (!res.ok)
            throw Error('Invalid status code: ' + res.status);
          return res.text();
        }).catch(function (err) {
          err.message = errMsg('W4', 'Error fetching systemjs-import map ' + script.src) + '\n' + err.message;
          console.warn(err);
          if (typeof script.onerror === 'function') {
              script.onerror();
          }
          return '{}';
        }) : script.innerHTML;
        importMapPromise = importMapPromise.then(function () {
          return fetchPromise;
        }).then(function (text) {
          extendImportMap(importMap, text, script.src || baseUrl);
        });
      }
    });
  }

  function extendImportMap (importMap, newMapText, newMapUrl) {
    var newMap = {};
    try {
      newMap = JSON.parse(newMapText);
    } catch (err) {
      console.warn(Error((errMsg('W5', "systemjs-importmap contains invalid JSON") + '\n\n' + newMapText + '\n' )));
    }
    resolveAndComposeImportMap(newMap, newMapUrl, importMap);
  }

  /*
   * Script instantiation loading
   */

  if (hasDocument) {
    window.addEventListener('error', function (evt) {
      lastWindowErrorUrl = evt.filename;
      lastWindowError = evt.error;
    });
    var baseOrigin = location.origin;
  }

  systemJSPrototype.createScript = function (url) {
    var script = document.createElement('script');
    script.async = true;
    // Only add cross origin for actual cross origin
    // this is because Safari triggers for all
    // - https://bugs.webkit.org/show_bug.cgi?id=171566
    if (url.indexOf(baseOrigin + '/'))
      script.crossOrigin = 'anonymous';
    var integrity = importMap.integrity[url];
    if (integrity)
      script.integrity = integrity;
    script.src = url;
    return script;
  };

  // Auto imports -> script tags can be inlined directly for load phase
  var lastAutoImportDeps, lastAutoImportTimeout;
  var autoImportCandidates = {};
  var systemRegister = systemJSPrototype.register;
  systemJSPrototype.register = function (deps, declare) {
    if (hasDocument && document.readyState === 'loading' && typeof deps !== 'string') {
      var scripts = document.querySelectorAll('script[src]');
      var lastScript = scripts[scripts.length - 1];
      if (lastScript) {
        lastScript.src;
        lastAutoImportDeps = deps;
        // if this is already a System load, then the instantiate has already begun
        // so this re-import has no consequence
        var loader = this;
        lastAutoImportTimeout = setTimeout(function () {
          autoImportCandidates[lastScript.src] = [deps, declare];
          loader.import(lastScript.src);
        });
      }
    }
    else {
      lastAutoImportDeps = undefined;
    }
    return systemRegister.call(this, deps, declare);
  };

  var lastWindowErrorUrl, lastWindowError;
  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var autoImportRegistration = autoImportCandidates[url];
    if (autoImportRegistration) {
      delete autoImportCandidates[url];
      return autoImportRegistration;
    }
    var loader = this;
    return Promise.resolve(systemJSPrototype.createScript(url)).then(function (script) {
      return new Promise(function (resolve, reject) {
        script.addEventListener('error', function () {
          reject(Error(errMsg(3, 'Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : ''))));
        });
        script.addEventListener('load', function () {
          document.head.removeChild(script);
          // Note that if an error occurs that isn't caught by this if statement,
          // that getRegister will return null and a "did not instantiate" error will be thrown.
          if (lastWindowErrorUrl === url) {
            reject(lastWindowError);
          }
          else {
            var register = loader.getRegister(url);
            // Clear any auto import registration for dynamic import scripts during load
            if (register && register[0] === lastAutoImportDeps)
              clearTimeout(lastAutoImportTimeout);
            resolve(register);
          }
        });
        document.head.appendChild(script);
      });
    });
  };

  /*
   * Fetch loader, sets up shouldFetch and fetch hooks
   */
  systemJSPrototype.shouldFetch = function () {
    return false;
  };
  if (typeof fetch !== 'undefined')
    systemJSPrototype.fetch = fetch;

  var instantiate = systemJSPrototype.instantiate;
  var jsContentTypeRegEx = /^(text|application)\/(x-)?javascript(;|$)/;
  systemJSPrototype.instantiate = function (url, parent, meta) {
    var loader = this;
    if (!this.shouldFetch(url, parent, meta))
      return instantiate.apply(this, arguments);
    return this.fetch(url, {
      credentials: 'same-origin',
      integrity: importMap.integrity[url],
      meta: meta,
    })
    .then(function (res) {
      if (!res.ok)
        throw Error(errMsg(7, res.status + ' ' + res.statusText + ', loading ' + url + (parent ? ' from ' + parent : '')));
      var contentType = res.headers.get('content-type');
      if (!contentType || !jsContentTypeRegEx.test(contentType))
        throw Error(errMsg(4, 'Unknown Content-Type "' + contentType + '", loading ' + url + (parent ? ' from ' + parent : '')));
      return res.text().then(function (source) {
        if (source.indexOf('//# sourceURL=') < 0)
          source += '\n//# sourceURL=' + url;
        (0, eval)(source);
        return loader.getRegister(url);
      });
    });
  };

  systemJSPrototype.resolve = function (id, parentUrl) {
    parentUrl = parentUrl || !true  || baseUrl;
    return resolveImportMap((importMap), resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  };

  function throwUnresolved (id, parentUrl) {
    throw Error(errMsg(8, "Unable to resolve bare specifier '" + id + (parentUrl ? "' from " + parentUrl : "'")));
  }

  var systemInstantiate = systemJSPrototype.instantiate;
  systemJSPrototype.instantiate = function (url, firstParentUrl, meta) {
    var preloads = (importMap).depcache[url];
    if (preloads) {
      for (var i = 0; i < preloads.length; i++)
        getOrCreateLoad(this, this.resolve(preloads[i], url), url);
    }
    return systemInstantiate.call(this, url, firstParentUrl, meta);
  };

  /*
   * Supports loading System.register in workers
   */

  if (hasSelf && typeof importScripts === 'function')
    systemJSPrototype.instantiate = function (url) {
      var loader = this;
      return Promise.resolve().then(function () {
        importScripts(url);
        return loader.getRegister(url);
      });
    };

  /*
   * SystemJS global script loading support
   * Extra for the s.js build only
   * (Included by default in system.js build)
   */
  (function (global) {
    var systemJSPrototype = global.System.constructor.prototype;

    // safari unpredictably lists some new globals first or second in object order
    var firstGlobalProp, secondGlobalProp, lastGlobalProp;
    function getGlobalProp (useFirstGlobalProp) {
      var cnt = 0;
      var foundLastProp, result;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)
          return p;
        if (foundLastProp) {
          lastGlobalProp = p;
          result = useFirstGlobalProp && result || p;
        }
        else {
          foundLastProp = p === lastGlobalProp;
        }
        cnt++;
      }
      return result;
    }

    function noteGlobalProps () {
      // alternatively Object.keys(global).pop()
      // but this may be faster (pending benchmarks)
      firstGlobalProp = secondGlobalProp = undefined;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (!firstGlobalProp)
          firstGlobalProp = p;
        else if (!secondGlobalProp)
          secondGlobalProp = p;
        lastGlobalProp = p;
      }
      return lastGlobalProp;
    }

    var impt = systemJSPrototype.import;
    systemJSPrototype.import = function (id, parentUrl, meta) {
      noteGlobalProps();
      return impt.call(this, id, parentUrl, meta);
    };

    var emptyInstantiation = [[], function () { return {} }];

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      var lastRegister = getRegister.call(this);
      if (lastRegister)
        return lastRegister;

      // no registration -> attempt a global detection as difference from snapshot
      // when multiple globals, we take the global value to be the last defined new global object property
      // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
      // note in Edge, deleting and re-adding a global does not change its ordering
      var globalProp = getGlobalProp(this.firstGlobalProp);
      if (!globalProp)
        return emptyInstantiation;

      var globalExport;
      try {
        globalExport = global[globalProp];
      }
      catch (e) {
        return emptyInstantiation;
      }

      return [[], function (_export) {
        return {
          execute: function () {
            _export(globalExport);
            _export({ default: globalExport, __useDefault: true });
          }
        };
      }];
    };

    var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

    function shouldSkipProperty(p) {
      return !global.hasOwnProperty(p)
        || !isNaN(p) && p < global.length
        || isIE11 && global[p] && typeof window !== 'undefined' && global[p].parent === window;
    }
  })(typeof self !== 'undefined' ? self : global);

  /*
   * Loads JSON, CSS, Wasm module types based on file extension
   * filters and content type verifications
   */
  (function(global) {
    var systemJSPrototype = global.System.constructor.prototype;

    var moduleTypesRegEx = /^[^#?]+\.(css|html|json|wasm)([?#].*)?$/;
    var _shouldFetch = systemJSPrototype.shouldFetch.bind(systemJSPrototype);
    systemJSPrototype.shouldFetch = function (url) {
      return _shouldFetch(url) || moduleTypesRegEx.test(url);
    };

    var jsonContentType = /^application\/json(;|$)/;
    var cssContentType = /^text\/css(;|$)/;
    var wasmContentType = /^application\/wasm(;|$)/;

    var fetch = systemJSPrototype.fetch;
    systemJSPrototype.fetch = function (url, options) {
      return fetch(url, options)
      .then(function (res) {
        if (options.passThrough)
          return res;

        if (!res.ok)
          return res;
        var contentType = res.headers.get('content-type');
        if (jsonContentType.test(contentType))
          return res.json()
          .then(function (json) {
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){e("default",' + JSON.stringify(json) + ')}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        if (cssContentType.test(contentType))
          return res.text()
          .then(function (source) {
            source = source.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g, function (match, quotes, relUrl1, relUrl2) {
              return ['url(', quotes, resolveUrl(relUrl1 || relUrl2, url), quotes, ')'].join('');
            });
            return new Response(new Blob([
              'System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync(' + JSON.stringify(source) + ');e("default",s)}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        if (wasmContentType.test(contentType))
          return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(res) : res.arrayBuffer().then(WebAssembly.compile))
          .then(function (module) {
            if (!global.System.wasmModules)
              global.System.wasmModules = Object.create(null);
            global.System.wasmModules[url] = module;
            // we can only set imports if supported (eg early Safari doesnt support)
            var deps = [];
            var setterSources = [];
            if (WebAssembly.Module.imports)
              WebAssembly.Module.imports(module).forEach(function (impt) {
                var key = JSON.stringify(impt.module);
                if (deps.indexOf(key) === -1) {
                  deps.push(key);
                  setterSources.push('function(m){i[' + key + ']=m}');
                }
              });
            return new Response(new Blob([
              'System.register([' + deps.join(',') + '],function(e){var i={};return{setters:[' + setterSources.join(',') +
              '],execute:function(){return WebAssembly.instantiate(System.wasmModules[' + JSON.stringify(url) +
              '],i).then(function(m){e(m.exports)})}}})'
            ], {
              type: 'application/javascript'
            }));
          });
        return res;
      });
    };
  })(typeof self !== 'undefined' ? self : global);

  var toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype.get = function (id) {
    var load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype.set = function (id, module) {
    {
      try {
        // No page-relative URLs allowed
        new URL(id);
      } catch (err) {
        console.warn(Error(errMsg('W3', '"' + id + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag && module[toStringTag] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag)
        Object.defineProperty(ns, toStringTag, { value: 'Module' });
    }

    var done = Promise.resolve(ns);

    var load = this[REGISTRY][id] || (this[REGISTRY][id] = {
      id: id,
      i: [],
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined
    });

    if (load.e || load.E)
      return false;
    
    Object.assign(load, {
      n: ns,
      I: undefined,
      L: undefined,
      C: done
    });
    return ns;
  };

  systemJSPrototype.has = function (id) {
    var load = this[REGISTRY][id];
    return !!load;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype.delete = function (id) {
    var registry = this[REGISTRY];
    var load = registry[id];
    // in future we can support load.E case by failing load first
    // but that will require TLA callbacks to be implemented
    if (!load || (load.p && load.p.e !== null) || load.E)
      return false;

    var importerSetters = load.i;
    // remove from importerSetters
    // (release for gc)
    if (load.d)
      load.d.forEach(function (depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id];
    return function () {
      var load = registry[id];
      if (!load || !importerSetters || load.e !== null || load.E)
        return false;
      // add back the old setters
      importerSetters.forEach(function (setter) {
        load.i.push(setter);
        setter(load.n);
      });
      importerSetters = null;
    };
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype.entries = function () {
    var loader = this, keys = Object.keys(loader[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function() { return this };

    return result;
  };

})();

/**
 * These init must be after systemjs lib load
 */
function initSystemJS () {
  window.SystemJS = System

  const existingResolveHook = window.SystemJS.constructor.prototype.resolve
  window.SystemJS.constructor.prototype.resolve = function (id, parentUrl) {
    let resolveUrl = existingResolveHook.apply(this, arguments)

    if (/(^http:)|(^https:)|(^\/\/)/.test(id)) {
      // we don't handle absolute request
      return resolveUrl
    }

    if (resolveUrl.indexOf('https://BASE_URL/') > -1) {
      resolveUrl = resolveUrl.replace('https://BASE_URL/', window.location.origin + window.jimuConfig.baseUrl)
    } else if (resolveUrl.indexOf('https://API_URL/') > -1) {
      resolveUrl = resolveUrl.replace('https://API_URL/', window.jimuConfig.arcgisJsApiUrl)
    }

    if (/\/$/.test(resolveUrl) || /\.css$/.test(resolveUrl) || /\.json$/.test(resolveUrl) || /\.wasm$/.test(resolveUrl)) {
      return resolveUrl
    }

    if (!/\.js$/.test(resolveUrl)) {
      resolveUrl = resolveUrl + '.js'
    }
    return resolveUrl
  }

  function jsAPIAmdLoader (amdPath) {
    return new Promise(function (resolve, reject) {
      window.require([amdPath], function (m) {
        const reg = [[], function (_export) {
          _export({ ...m, default: m, __useDefault: true })
          return {
            setters: [],
            execute: function () {
              _export('default', m)
            }
          }
        }]

        resolve(reg)
      })
    })
  }

  const existingInstantiateHook = window.SystemJS.constructor.prototype.instantiate
  window.SystemJS.constructor.prototype.instantiate = function (url, parentUrl) {
    // for css, we load as an link tag
    if (/.css$/.test(url)) {
      return loadCSS(url).then(function () {
        const m = function () {}
        const reg = [[], function (_export) {
          _export({ default: m, __useDefault: true })
          return {
            setters: [],
            execute: function () {
              _export('default', m)
            }
          }
        }]
        return reg
      })
    }

    // for API module, we use API module loader
    if (url.indexOf(window.jimuConfig.arcgisJsApiUrl) === 0 && url !== window.jimuConfig.arcgisJsApiUrl + 'init.js') {
      let amdPath = url.replace(window.jimuConfig.arcgisJsApiUrl, '')
      amdPath = amdPath.replace(/\.js$/, '')

      return jsAPIAmdLoader(amdPath)
    }

    // for other arcgis amd packages, we use API module loader
    if (url.startsWith('https://amd-packages/')) {
      let amdPath = url.replace('https://amd-packages/', '')
      amdPath = amdPath.replace(/\.js$/, '')

      return jsAPIAmdLoader(amdPath)
    }

    const existingResult = existingInstantiateHook.apply(this, arguments)
    return existingResult
  }

  function loadCSS (url) {
    const waitSeconds = 100

    const head = document.getElementsByTagName('head')[0]

    const isWebkit = !!window.navigator.userAgent.match(/AppleWebKit\/([^ ]*)/)
    const webkitLoadCheck = function (link, callback) {
      setTimeout(function () {
        for (let i = 0; i < document.styleSheets.length; i++) {
          const sheet = document.styleSheets[i]
          if (sheet.href === link.href) {
            return callback()
          }
        }
        webkitLoadCheck(link, callback)
      }, 10)
    }

    const noop = function () {}

    return new Promise(function (resolve, reject) {
      const timeout = setTimeout(function () {
        reject('Unable to load CSS')
      }, waitSeconds * 1000)

      const _callback = function (error) {
        clearTimeout(timeout)
        link.onload = link.onerror = noop
        setTimeout(function () {
          if (error) {
            reject(error)
          } else {
            resolve('')
          }
        }, 7)
      }
      const link = document.createElement('link')
      link.type = 'text/css'
      link.rel = 'stylesheet'
      link.href = url
      link.setAttribute('data-systemjs-css', '')
      if (!isWebkit) {
        link.onload = function () {
          _callback()
        }
      } else {
        webkitLoadCheck(link, _callback)
      }
      link.onerror = function (event) {
        _callback(event.error || new Error('Error loading CSS file.'))
      }
      head.appendChild(link)
    })
  }
}

initSystemJS()

/**
 * This function will be used to init mountPath when app is downloaded.
 */
function getPath () {
  let path

  const fullPath = window.location.pathname
  if (fullPath === '/' || fullPath.substr(fullPath.length - 1) === '/') {
    path = fullPath
  } else {
    const sections = fullPath.split('/')
    const lastSection = sections.pop()
    if (/\.html$/.test(lastSection) || /\.aspx$/.test(lastSection) ||
      /\.jsp$/.test(lastSection) || /\.php$/.test(lastSection)) {
      //index.html may be renamed to index.jsp, etc.
      path = sections.join('/') + '/'
    } else {
      return false
    }
  }
  return path
}

window.getPath = getPath

//to make react devtools works in iframe.
if (window.parent !== window) {
  try {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
  } catch (err) {
    console.warn('App is embedded in a cross-origin frame.')
  }
}

function start () {
  window.jimuUA = window.bowser.parse(window.navigator.userAgent)
  if (window.jimuUA.browser.name === 'Internet Explorer' || typeof window.ResizeObserver !== 'function') {
    window.location.href = window.jimuConfig.mountPath + 'unsupported-browser/index.html'
  } else {
    window.SystemJS.import(window.jimuConfig.appFolderName + '/index.js')

    // These libs are requried by all apps, load them here for performance.
    window.SystemJS.import('jimu-core/react')
    window.SystemJS.import('jimu-core/react-dom')
    window.SystemJS.import('jimu-core')
    window.SystemJS.import('jimu-ui')
    window.SystemJS.import('jimu-layouts/layout-runtime')
    window.SystemJS.import('jimu-theme')
    window.SystemJS.import('jimu-arcgis')
  }
}

start()
