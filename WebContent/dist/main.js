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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/boot.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/boot.tsx":
/*!****************************!*\
  !*** ./ClientApp/boot.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/site.css */ \"./ClientApp/css/site.css\");\n/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_site_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./ClientApp/routes.tsx\");\n\r\n//import 'bootstrap';\r\n\r\n\r\n\r\n\r\n\r\nvar routes = _routes__WEBPACK_IMPORTED_MODULE_5__[\"routes\"];\r\nfunction renderApp() {\r\n    // This code starts up the React app when it runs in a browser. It sets up the routing\r\n    // configuration and injects the app into a DOM element.\r\n    var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\r\n    react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"](react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_hot_loader__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"HashRouter\"], { children: routes, basename: baseUrl })), document.getElementById('react-app'));\r\n}\r\nrenderApp();\r\n// Allow Hot Module Replacement\r\nif (false) {}\r\n\n\n//# sourceURL=webpack:///./ClientApp/boot.tsx?");

/***/ }),

/***/ "./ClientApp/components/ArticlesView.tsx":
/*!***********************************************!*\
  !*** ./ClientApp/components/ArticlesView.tsx ***!
  \***********************************************/
/*! exports provided: ArticlesView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArticlesView\", function() { return ArticlesView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_AutoRenew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AutoRenew */ \"./node_modules/@material-ui/icons/AutoRenew.js\");\n/* harmony import */ var _material_ui_icons_AutoRenew__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AutoRenew__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/TextField/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ \"./node_modules/@material-ui/icons/Search.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/CircularProgress/index.js\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/Table/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableFooter */ \"./node_modules/@material-ui/core/TableFooter/index.js\");\n/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_12__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar loading_container = {\r\n    textAlign: \"center\"\r\n};\r\nvar ArticlesView = /** @class */ (function (_super) {\r\n    __extends(ArticlesView, _super);\r\n    function ArticlesView(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            searchText: '',\r\n            isLoading: false,\r\n            page: 1,\r\n            records: [],\r\n            hasMore: false\r\n        };\r\n        return _this;\r\n    }\r\n    ArticlesView.prototype.render = function () {\r\n        var _this = this;\r\n        var tableBody = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, { colSpan: 3 },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: loading_container }, \"There is no data\"))));\r\n        if (this.state.isLoading == true) {\r\n            tableBody = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, { colSpan: 3 },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: loading_container },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, null)))));\r\n        }\r\n        if (this.state.records.length > 0) {\r\n            tableBody = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8___default.a, null, this.state.records.map(function (row) {\r\n                var questionDate = row.QuestionDate ? row.QuestionDate.toISOString().slice(0, 10) : \"\";\r\n                return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, { key: row.Title },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, { component: \"th\", scope: \"row\" }, questionDate),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: row.Link }, row.Title)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, row.Author)));\r\n            }));\r\n        }\r\n        var appendButton = this.state.hasMore == true ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: loading_container },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, { variant: \"fab\", onClick: function () { return _this.handleAppend(); } },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_AutoRenew__WEBPACK_IMPORTED_MODULE_2___default.a, null))) : react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null);\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: { textAlign: 'center' } },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, { id: \"fd-SearchText\", label: \"Search text\", value: this.state.searchText, margin: \"normal\", onChange: function (e) { return _this.handleSearchText(e); }, onKeyPress: function (e) { if (e.key === 'Enter') {\r\n                    _this.handleSearch();\r\n                } } }),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, { variant: \"fab\", onClick: function () { return _this.handleSearch(); } },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, null)),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"br\", null),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7___default.a, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default.a, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, \"Question date\"),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null, \"Title\"),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, { numeric: true }, \"Author\"),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, null))),\r\n                tableBody,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_12___default.a, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11___default.a, null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9___default.a, { colSpan: 3 }, appendButton)))));\r\n    };\r\n    ArticlesView.prototype.handleSearchText = function (event) {\r\n        this.setState({\r\n            searchText: (event.target.value)\r\n        });\r\n    };\r\n    ;\r\n    ArticlesView.prototype.handleAppend = function () {\r\n        this.pullData(true);\r\n    };\r\n    ArticlesView.prototype.handleSearch = function () {\r\n        this.pullData(false);\r\n    };\r\n    ArticlesView.prototype.pullData = function (append) {\r\n        var _this = this;\r\n        if (this.state.searchText == null || this.state.searchText == \"\")\r\n            return;\r\n        this.setState({\r\n            isLoading: true\r\n        });\r\n        var newPage = this.state.page + 1;\r\n        var url = \"http://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&pagesize=5\" +\r\n            \"&page=\" + encodeURIComponent(newPage.toString()) +\r\n            \"&intitle=\" + encodeURIComponent(this.state.searchText);\r\n        fetch(url).then(function (response) { return response.json(); })\r\n            .then(function (data) {\r\n            var records = data.items.map(function (article) {\r\n                return {\r\n                    QuestionDate: new Date(article.creation_date),\r\n                    Title: article.title,\r\n                    Author: article.owner.display_name,\r\n                    Link: article.link\r\n                };\r\n            });\r\n            if (append == true) {\r\n                _this.setState({\r\n                    page: newPage,\r\n                    records: _this.state.records.concat(records),\r\n                    isLoading: false,\r\n                    hasMore: data.has_more\r\n                });\r\n            }\r\n            else {\r\n                _this.setState({\r\n                    page: newPage,\r\n                    records: records,\r\n                    isLoading: false,\r\n                    hasMore: data.has_more\r\n                });\r\n            }\r\n        });\r\n    };\r\n    ArticlesView.prototype.componentDidMount = function () {\r\n    };\r\n    return ArticlesView;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/ArticlesView.tsx?");

/***/ }),

/***/ "./ClientApp/components/Layout.tsx":
/*!*****************************************!*\
  !*** ./ClientApp/components/Layout.tsx ***!
  \*****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Layout = /** @class */ (function (_super) {\r\n    __extends(Layout, _super);\r\n    function Layout() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Layout.prototype.render = function () {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, this.props.children);\r\n    };\r\n    return Layout;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/Layout.tsx?");

/***/ }),

/***/ "./ClientApp/css/site.css":
/*!********************************!*\
  !*** ./ClientApp/css/site.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./site.css */ \"./node_modules/css-loader/index.js!./ClientApp/css/site.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./ClientApp/css/site.css?");

/***/ }),

/***/ "./ClientApp/routes.tsx":
/*!******************************!*\
  !*** ./ClientApp/routes.tsx ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"./ClientApp/components/Layout.tsx\");\n/* harmony import */ var _components_ArticlesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ArticlesView */ \"./ClientApp/components/ArticlesView.tsx\");\n\r\n\r\n\r\n\r\nvar routes = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], null,\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/', component: _components_ArticlesView__WEBPACK_IMPORTED_MODULE_3__[\"ArticlesView\"] }));\r\n\n\n//# sourceURL=webpack:///./ClientApp/routes.tsx?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/interopRequireDefault.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@babel/runtime/helpers/interopRequireDefault.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Button/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/Button/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Button/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/CircularProgress/index.js":
/*!***************************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/CircularProgress/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/CircularProgress/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/CircularProgress/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
/*!******************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/SvgIcon/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/SvgIcon/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/SvgIcon/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Table/index.js":
/*!****************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Table/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/Table/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Table/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableBody/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableBody/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/TableBody/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableBody/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableCell/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableCell/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/TableCell/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableCell/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableFooter/index.js":
/*!**********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableFooter/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/TableFooter/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableFooter/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableHead/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableHead/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/TableHead/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableHead/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableRow/index.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableRow/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/TableRow/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableRow/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TextField/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/@material-ui/core/TextField/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TextField/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/AutoRenew.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/AutoRenew.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  d: \"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"\n}), _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n})), 'Autorenew');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/AutoRenew.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Search.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Search.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  d: \"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"\n}), _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n})), 'Search');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/Search.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _pure = _interopRequireDefault(__webpack_require__(/*! recompose/pure */ \"./node_modules/recompose/pure.js\"));\n\nvar _SvgIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/SvgIcon */ \"./node_modules/@material-ui/core/SvgIcon/index.js\"));\n\nfunction createSvgIcon(path, displayName) {\n  var Icon = function Icon(props) {\n    return _react.default.createElement(_SvgIcon.default, props, path);\n  };\n\n  Icon.displayName = \"\".concat(displayName, \"Icon\");\n  Icon = (0, _pure.default)(Icon);\n  Icon.muiName = 'SvgIcon';\n  return Icon;\n}\n\n;\nvar _default = createSvgIcon;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/utils/createSvgIcon.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./ClientApp/css/site.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./ClientApp/css/site.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./ClientApp/css/site.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!************************************************************************************************************************!*\
  !*** delegated ./node_modules/isomorphic-fetch/fetch-npm-browserify.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/isomorphic-fetch/fetch-npm-browserify.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!**************************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/react-dom/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-dom/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/react-hot-loader/lib/index.js\");\n\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/index.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/AppContainer.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/AppContainer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable global-require */\n\n\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./AppContainer.prod */ \"./node_modules/react-hot-loader/lib/AppContainer.prod.js\");\n} else {}\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/AppContainer.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/AppContainer.prod.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/AppContainer.prod.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable react/prop-types */\n\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar Component = React.Component;\n\nvar AppContainer = function (_Component) {\n  _inherits(AppContainer, _Component);\n\n  function AppContainer() {\n    _classCallCheck(this, AppContainer);\n\n    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));\n  }\n\n  _createClass(AppContainer, [{\n    key: 'render',\n    value: function render() {\n      if (this.props.component) {\n        return React.createElement(this.props.component, this.props.props);\n      }\n\n      return React.Children.only(this.props.children);\n    }\n  }]);\n\n  return AppContainer;\n}(Component);\n\nmodule.exports = AppContainer;\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/AppContainer.prod.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable global-require */\n\n\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./index.prod */ \"./node_modules/react-hot-loader/lib/index.prod.js\");\n} else {}\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/index.prod.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/index.prod.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports.AppContainer = __webpack_require__(/*! ./AppContainer */ \"./node_modules/react-hot-loader/lib/AppContainer.js\");\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/index.prod.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!************************************************************************************************************!*\
  !*** delegated ./node_modules/react-router-dom/es/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \************************************************************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/react-router-dom/es/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-router-dom/es/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/react/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react/index.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/recompose/pure.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/recompose/pure.js from dll-reference vendor_2c7f8c7a310afb608494 ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2c7f8c7a310afb608494 */ \"dll-reference vendor_2c7f8c7a310afb608494\"))(\"./node_modules/recompose/pure.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/recompose/pure.js_from_dll-reference_vendor_2c7f8c7a310afb608494?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(selector) {\n\t\tif (typeof memo[selector] === \"undefined\") {\n\t\t\tmemo[selector] = fn.call(this, selector);\n\t\t}\n\n\t\treturn memo[selector]\n\t};\n})(function (target) {\n\treturn document.querySelector(target)\n});\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton) options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n\tif (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "dll-reference vendor_2c7f8c7a310afb608494":
/*!**********************************************!*\
  !*** external "vendor_2c7f8c7a310afb608494" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_2c7f8c7a310afb608494;\n\n//# sourceURL=webpack:///external_%22vendor_2c7f8c7a310afb608494%22?");

/***/ })

/******/ });