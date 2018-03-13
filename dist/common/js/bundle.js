/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TokenModel_1 = __webpack_require__(8);
var TokenDetailView_1 = __webpack_require__(3);
var OverlayView_1 = __webpack_require__(4);
var DialogView_1 = __webpack_require__(6);
var TokenListView_1 = __webpack_require__(1);
exports.requestEvent = {
    getTokenInfo: "getTokenInfo",
    registToken: "registToken",
    registTokenCancel: "registTokenCancel",
    registTokenAdd: "registTokenAdd",
    favoriteToken: "favoriteToken",
    dialogOpen: "dialogOpen",
    dialogClose: "dialogClose"
};
exports.responseEvent = {
    viewList: "viewList",
    viewDetail: "viewDetail",
    registToken: "registToken"
};
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.request = function (e) {
        console.log(e.event);
        switch (e.event) {
            case exports.requestEvent.getTokenInfo:
                TokenModel_1.default.getTokenInfo(e.tokenID);
                break;
            case exports.requestEvent.registToken:
                DialogView_1.default.open();
                OverlayView_1.default.open();
                break;
            case exports.requestEvent.registTokenCancel:
                DialogView_1.default.close();
                OverlayView_1.default.close();
                break;
            case exports.requestEvent.registTokenAdd:
                DialogView_1.default.close();
                OverlayView_1.default.close();
                TokenModel_1.default.registToken();
                break;
            // case requestEvent.dialogOpen:
            //   DialogView.open();
            //   OverlayView.open();
            //   break;
            // case requestEvent.dialogClose:
            //   DialogView.close();
            //   OverlayView.close();
            //   break;
            case exports.requestEvent.favoriteToken:
                TokenModel_1.default.favoriteToken(e.tokenID);
                break;
            default:
                break;
        }
    };
    AppController.prototype.response = function (e) {
        switch (e.event) {
            case exports.responseEvent.viewList:
                TokenListView_1.default.render();
                TokenListView_1.default.setItem();
                break;
            case exports.responseEvent.viewDetail:
                TokenDetailView_1.default.render(e.token);
                break;
            case exports.responseEvent.registToken:
                DialogView_1.default.close();
                OverlayView_1.default.close();
                break;
            case exports.responseEvent.registToken:
                DialogView_1.default.close();
                OverlayView_1.default.close();
                break;
            default:
                break;
        }
    };
    return AppController;
}());
exports.default = new AppController();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tokenList_1 = __webpack_require__(2);
var AppController_1 = __webpack_require__(0);
var TokenListView = /** @class */ (function () {
    function TokenListView() {
        this.list = document.getElementById('js-token-list');
        this.data = tokenList_1.default;
        this.init();
    }
    TokenListView.prototype.init = function () {
        this.render();
        this.setItem();
    };
    TokenListView.prototype.setItem = function () {
        this.itemArray = document.querySelectorAll('.js-token-list-item');
        var _loop_1 = function (i) {
            var item = document.querySelector('.js-token-list-item:nth-child(' + (i + 1) + ')');
            item.addEventListener('click', function () {
                var tokenID = Number(item.getAttribute('data-tokenid'));
                var e = {
                    event: AppController_1.requestEvent.getTokenInfo,
                    tokenID: tokenID
                };
                AppController_1.default.request(e);
            });
        };
        for (var i = 0; i < this.itemArray.length; ++i) {
            _loop_1(i);
        }
    };
    TokenListView.prototype.render = function () {
        var res = "";
        for (var i in this.data) {
            res += '<li class="mdc-list-item js-token-list-item" data-tokenid="' + this.data[i].id + '">' + this.data[i].unit + '</li>';
        }
        this.list.innerHTML = res;
    };
    return TokenListView;
}());
exports.default = new TokenListView();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        "id": 0,
        "name": "Bitcoin",
        "unit": "BTC",
        "description": "Bitcoin説明文",
        "favorite": false
    },
    {
        "id": 1,
        "name": "Ethereum",
        "unit": "ETH",
        "description": "Ethereumの説明文",
        "favorite": false
    },
    {
        "id": 2,
        "name": "Ethereum Classic",
        "unit": "ETC",
        "description": "Ethereum Classicの説明文",
        "favorite": false
    },
    {
        "id": 3,
        "name": "Lisk",
        "unit": "LSK",
        "description": "Liskの説明文",
        "favorite": false
    },
    {
        "id": 4,
        "name": "Factom",
        "unit": "FCT",
        "description": "Factomの説明文",
        "favorite": false
    },
    {
        "id": 5,
        "name": "Monero",
        "unit": "XMR",
        "description": "Moneroの説明文",
        "favorite": false
    },
    {
        "id": 6,
        "name": "Augur",
        "unit": "REP",
        "description": "Augurの説明文",
        "favorite": false
    },
    {
        "id": 7,
        "name": "Ripple",
        "unit": "XRP",
        "description": "Rippleの説明文",
        "favorite": false
    }
];


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppController_1 = __webpack_require__(0);
var tokenList_1 = __webpack_require__(2);
var TokenDetailView = /** @class */ (function () {
    function TokenDetailView() {
        this.name = document.getElementById('js-token-name');
        this.unit = document.getElementById('js-token-unit');
        this.description = document.getElementById('js-token-description');
        this.favorite = document.getElementById('js-token-favorite');
        this.favoriteTrigger = document.getElementById('js-token-favorite-trigger');
        // this.render(2); //test code
        this.init();
    }
    TokenDetailView.prototype.init = function () {
        var _this = this;
        this.favoriteTrigger.addEventListener('click', function () {
            var e = {
                event: AppController_1.requestEvent.favoriteToken,
                tokenID: Number(_this.favoriteTrigger.getAttribute('data-tokenid'))
            };
            AppController_1.default.request(e);
        });
    };
    TokenDetailView.prototype.render = function (token) {
        this.token = (token) ? token : tokenList_1.default[0];
        /*
         * 型エラーあり
         */
        this.name.innerHTML = this.token.name;
        this.name.setAttribute('data-tokenid', this.token.id);
        this.unit.innerHTML = this.token.unit;
        this.description.innerHTML = this.token.description;
        this.favorite.innerHTML = (this.token.favorite) ? '&#9829;' : '';
        this.favoriteTrigger.setAttribute('data-tokenid', this.token.id);
    };
    return TokenDetailView;
}());
exports.default = new TokenDetailView();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ToggleElmBaseView_1 = __webpack_require__(5);
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super.call(this) || this;
        _this.dialog = document.getElementById('js-overlay');
        _this.ACTIVE_CLASS = "active";
        return _this;
    }
    return Overlay;
}(ToggleElmBaseView_1.default));
exports.default = new Overlay();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ToggleElmBaseView = /** @class */ (function () {
    function ToggleElmBaseView() {
        this.dialog;
        this.ACTIVE_CLASS;
    }
    ToggleElmBaseView.prototype.open = function () {
        this.dialog.classList.add(this.ACTIVE_CLASS);
    };
    ToggleElmBaseView.prototype.close = function () {
        this.dialog.classList.remove(this.ACTIVE_CLASS);
    };
    return ToggleElmBaseView;
}());
exports.default = ToggleElmBaseView;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ToggleElmBaseView_1 = __webpack_require__(5);
var DialogView = /** @class */ (function (_super) {
    __extends(DialogView, _super);
    function DialogView() {
        var _this = _super.call(this) || this;
        _this.dialog = document.getElementById('js-dialog');
        _this.ACTIVE_CLASS = "active";
        return _this;
    }
    return DialogView;
}(ToggleElmBaseView_1.default));
exports.default = new DialogView();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppController_1 = __webpack_require__(0);
var TokenListView_1 = __webpack_require__(1);
var TokenDetailView_1 = __webpack_require__(3);
var TokenRegistView_1 = __webpack_require__(9);
var DialogView_1 = __webpack_require__(6);
var OverlayView_1 = __webpack_require__(4);
TokenListView_1.default;
TokenDetailView_1.default;
TokenRegistView_1.default;
DialogView_1.default;
OverlayView_1.default;
var listEvent = {
    event: AppController_1.responseEvent.viewList
};
var DetailEvent = {
    event: AppController_1.responseEvent.viewDetail,
    tokenID: 0
};
AppController_1.default.response(listEvent);
AppController_1.default.response(DetailEvent);
// AppController.request(DetailEvent);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tokenList_1 = __webpack_require__(2);
var AppController_1 = __webpack_require__(0);
var TokenModel = /** @class */ (function () {
    function TokenModel() {
    }
    TokenModel.prototype.getTokenInfo = function (tokenID) {
        for (var i in tokenList_1.default) {
            if (tokenList_1.default[i].id === tokenID) {
                this.viewTokenDetail(tokenList_1.default[i]);
            }
        }
    };
    TokenModel.prototype.viewTokenDetail = function (token) {
        var e = {
            event: AppController_1.responseEvent.viewDetail,
            token: token
        };
        AppController_1.default.response(e);
    };
    TokenModel.prototype.registToken = function () {
        var name = document.forms['registForm'].elements['name'];
        var unit = document.forms['registForm'].elements['unit'];
        var description = document.forms['registForm'].elements['description'];
        if (name.value === "" || unit.value === "")
            return;
        var nextTokenId = 0;
        var check = false;
        while (!check) {
            check = !tokenList_1.default.some(function (token) { return token.id === nextTokenId; });
            ++nextTokenId;
        }
        var token = {
            "id": nextTokenId,
            "name": name.value,
            "unit": unit.value,
            "description": description.value,
            "favorite": false
        };
        tokenList_1.default.push(token);
        // console.log(tokenList);
        var e = {
            event: AppController_1.responseEvent.viewDetail,
            token: token
        };
        var e2 = {
            event: AppController_1.responseEvent.viewList
        };
        AppController_1.default.response(e);
        AppController_1.default.response(e2);
        name.value = '';
        unit.value = '';
        description.value = '';
    };
    TokenModel.prototype.favoriteToken = function (tokenID) {
        for (var i in tokenList_1.default) {
            if (tokenList_1.default[i].id === tokenID) {
                tokenList_1.default[i].favorite = !tokenList_1.default[i].favorite;
                this.viewTokenDetail(tokenList_1.default[i]);
            }
        }
    };
    return TokenModel;
}());
exports.default = new TokenModel();


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppController_1 = __webpack_require__(0);
var TokenRegistView = /** @class */ (function () {
    function TokenRegistView() {
        this.formOpenTrigger = document.getElementById('js-regist-token-trigger');
        this.cancelTrigger = document.getElementById('js-regist-token-cancel');
        this.addTrigger = document.getElementById('js-regist-token-add');
        this.init();
    }
    TokenRegistView.prototype.init = function () {
        this.formOpenTrigger.addEventListener('click', function () {
            var e = {
                event: AppController_1.requestEvent.registToken
            };
            AppController_1.default.request(e);
        });
        this.cancelTrigger.addEventListener('click', function () {
            var e = {
                event: AppController_1.requestEvent.registTokenCancel
            };
            AppController_1.default.request(e);
        });
        this.addTrigger.addEventListener('click', function () {
            var e = {
                event: AppController_1.requestEvent.registTokenAdd
            };
            AppController_1.default.request(e);
        });
    };
    return TokenRegistView;
}());
exports.default = new TokenRegistView();


/***/ })
/******/ ]);