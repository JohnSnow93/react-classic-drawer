module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ReactSimpleDrawer = function (_Component) {
  _inherits(ReactSimpleDrawer, _Component);

  function ReactSimpleDrawer(props) {
    _classCallCheck(this, ReactSimpleDrawer);

    // 创建div,用户渲染抽屉
    var _this = _possibleConstructorReturn(this, (ReactSimpleDrawer.__proto__ || Object.getPrototypeOf(ReactSimpleDrawer)).call(this, props));

    _this.onClose = function (e) {
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }
    };

    _this.preventClick = function (e) {
      // 阻止事件冒泡
      e.stopPropagation();
    };

    var doc = window.document;
    _this.node = doc.createElement('div');
    _this.node.id = 'react-simple-drawer';
    doc.body.appendChild(_this.node);
    return _this;
  }

  _createClass(ReactSimpleDrawer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var doc = window.document;
      var drawerNode = document.getElementById('react-simple-drawer');
      doc.removeChild(drawerNode);
    }
    /**
     * 关闭时的回调
     * @param e
     */

    /**
     * 阻止点击事件冒泡
     * @param e
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          width = _props.width,
          duration = _props.duration,
          direction = _props.direction,
          contentClass = _props.contentClass;

      var directionConstant = {
        TOP: 450,
        BOTTOM: 450,
        RIGHT: 600,
        LEFT: 600
      };
      return Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["createPortal"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default.a,
        {
          transitionName: 'react-classic-drawer',
          component: 'div',
          transitionEnterTimeout: duration,
          transitionLeaveTimeout: duration,
          transitionAppear: true,
          transitionAppearTimeout: duration
        },
        visible ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            onClick: this.onClose,
            key: 'react-classic-drawer',
            className: 'react-classic-drawer-mask',
            style: {
              animationDuration: duration + 'ms'
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: 'content ' + direction.toLowerCase() + ' ' + contentClass,
              onClick: this.preventClick,
              style: {
                animationDuration: duration + 'ms'
              }
            },
            this.props.children
          )
        ) : ''
      ), this.node);
    }
  }]);

  return ReactSimpleDrawer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ReactSimpleDrawer.propTypes = {
  visible: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired, // 控制抽屉的打开/关闭😀
  mask: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // 是否显示遮罩
  onClose: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, // 关闭时的回调😀
  width: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number, // 宽度
  duration: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number, // 打开/关闭时间 🌀
  maskStyle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any, // 给遮罩层的样式
  maskClass: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, // 给遮罩层的类名
  contentClass: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, // 给内容层的类名
  okText: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, // 确定按钮文字
  okButton: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // 是否显示确定按钮
  cancelButton: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // 是否显示取消按钮
  closable: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // 是都显示右上角的关闭图标
  direction: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, // 打开方向，默认RIGHT[LEFT/TOP/BOTTOM] 😀
  proxyProps: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // 属性代理【暂时不用】
  scroll: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool // 内容从超过容器高宽时是否显示滚动条
};

ReactSimpleDrawer.defaultProps = {
  visible: false,
  mask: true,
  width: 600,
  height: 450,
  duration: 500,
  direction: 'RIGHT',
  maskClass: '',
  contentClass: ''
};

/* harmony default export */ __webpack_exports__["default"] = (ReactSimpleDrawer);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);