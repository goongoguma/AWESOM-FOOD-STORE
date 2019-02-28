webpackHotUpdate("static\\development\\pages\\Stores.js",{

/***/ "./pages/Stores.js":
/*!*************************!*\
  !*** ./pages/Stores.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Portal */ "./pages/components/Portal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_14__);









var _jsxFileName = "C:\\Users\\J\\Documents\\AwesomeFoodStore\\client\\pages\\Stores.js";







var Stores =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Stores, _React$Component);

  function Stores() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Stores);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Stores).apply(this, arguments));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "open", function () {
      _this.setState({
        opened: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "close", function () {
      _this.setState({
        opened: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "storeDetail", function (id) {
      _this.props.data.map(function (store) {
        if (store.id === id) {
          _this.setState({
            name: store.name,
            image: store.image,
            description: store.description
          });
        }
      });
    });

    _this.state = {
      opened: false,
      image: "",
      name: "",
      description: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Stores, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          image = _this$state.image,
          name = _this$state.name,
          description = _this$state.description;
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_12__["createElement"](react__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("div", {
        className: "store-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("h2", {
        className: "store-list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Store List"), react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Bon App\xE9tit"), react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("ul", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, data.map(function (store) {
        return react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("li", {
          onClick: _this2.open,
          key: store.id,
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("img", {
          src: store.thumb,
          onClick: function onClick() {
            return _this2.storeDetail(store.id);
          },
          alt: "".concat(store.name, " image"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_12__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("a", {
        className: "back-to-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Back to Home")), this.state.opened && react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"](_components_Portal__WEBPACK_IMPORTED_MODULE_11__["Portal"], {
        selector: "#modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("div", {
        className: "extra",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("div", {
        className: "jsx-723408350" + " " + "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("div", {
        className: "jsx-723408350" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("img", {
        src: image,
        alt: "store image",
        className: "jsx-723408350" + " " + "modal-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("div", {
        className: "jsx-723408350" + " " + "modal-content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("h3", {
        className: "jsx-723408350" + " " + "modal-store-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("p", {
        className: "jsx-723408350" + " " + "modal-store-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, description)), react__WEBPACK_IMPORTED_MODULE_12__["createElement"]("button", {
        type: "button",
        onClick: this.close,
        className: "jsx-723408350" + " " + "close-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "X")), react__WEBPACK_IMPORTED_MODULE_12__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3702177506",
        __self: this
      }, "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSlxcRG9jdW1lbnRzXFxBd2Vzb21lRm9vZFN0b3JlXFxjbGllbnRcXHBhZ2VzXFxTdG9yZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVxQyxBQUd1QyxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKXFxEb2N1bWVudHNcXEF3ZXNvbWVGb29kU3RvcmVcXGNsaWVudFxccGFnZXNcXFN0b3Jlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qb3J0YWxcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jbGFzcyBTdG9yZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UsIGltYWdlOiBcIlwiLCBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiB9O1xyXG4gIH1cclxuXHJcbiAgb3BlbiA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBzdG9yZURldGFpbCA9IGlkID0+IHtcclxuICAgIHRoaXMucHJvcHMuZGF0YS5tYXAoc3RvcmUgPT4ge1xyXG4gICAgICBpZiAoc3RvcmUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBuYW1lOiBzdG9yZS5uYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IHN0b3JlLmltYWdlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHN0b3JlLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaW1hZ2UsIG5hbWUsIGRlc2NyaXB0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcmUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3JlLWxpc3QtdGl0bGVcIj5TdG9yZSBMaXN0PC9oMj5cclxuICAgICAgICAgIDxoND5Cb24gQXBww6l0aXQ8L2g0PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoc3RvcmUgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW59IGtleT17c3RvcmUuaWR9IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtzdG9yZS50aHVtYn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdG9yZURldGFpbChzdG9yZS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YCR7c3RvcmUubmFtZX0gaW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWNrLXRvLW1lbnVcIj5CYWNrIHRvIEhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxQb3J0YWwgc2VsZWN0b3I9XCIjbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3RvcmUgaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtb2RhbC1zdG9yZS1uYW1lXCI+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXN0b3JlLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3ZlcmxheTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC43KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsLXN0b3JlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNjdlMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbC1zdG9yZS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5TdG9yZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zdG9yZXNcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGFcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\J\\Documents\\AwesomeFoodStore\\client\\pages\\Stores.js */"), react__WEBPACK_IMPORTED_MODULE_12__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3469273781",
        __self: this
      }, ".overlay.jsx-723408350{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;}.overlay.jsx-723408350:after{background:blue;}.modal.jsx-723408350{background-color:linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0,0.7) );position:absolute;top:5%;right:10%;bottom:10%;left:10%;padding:4rem;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.modal-image.jsx-723408350{width:100%;height:70%;margin-right:2rem;}.modal-store-name.jsx-723408350{font-size:2rem;color:#e67e22;margin-bottom:1.5rem;}.modal-store-description.jsx-723408350{margin-top:10px;line-height:1.5rem;font-size:auto;}.close-btn.jsx-723408350{color:#fff;cursor:pointer;position:absolute;top:0;right:0;width:30px;height:30px;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSlxcRG9jdW1lbnRzXFxBd2Vzb21lRm9vZFN0b3JlXFxjbGllbnRcXHBhZ2VzXFxTdG9yZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Y4QixBQUdzQyxBQVFDLEFBTWYsQUFXVSxBQUtJLEFBS0MsQUFLTCxXQWRBLEFBZUksSUF4Q3FCLEFBOEJ0QixDQXRCaEIsQUEyQnFCLE1BVEQsSUFlQSxHQVZHLE1BS04sS0FUakIsSUFlUSxJQXpDQSxFQStCUixBQUtBLEFBTVUsSUF6Q0EsSUEwQ0csSUF6Q0YsT0FXUyxBQStCTixFQXpDTCxPQUNULEdBeUNlLE1BL0JOLE9BQ0csQUErQlosVUE5QmEsV0FDRixTQUNJLGFBQ0YsV0FDRSwwRUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXEpcXERvY3VtZW50c1xcQXdlc29tZUZvb2RTdG9yZVxcY2xpZW50XFxwYWdlc1xcU3RvcmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcnRhbFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuLi9zY3NzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmNsYXNzIFN0b3JlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgb3BlbmVkOiBmYWxzZSwgaW1hZ2U6IFwiXCIsIG5hbWU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiIH07XHJcbiAgfVxyXG5cclxuICBvcGVuID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIHN0b3JlRGV0YWlsID0gaWQgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5kYXRhLm1hcChzdG9yZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG5hbWU6IHN0b3JlLm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogc3RvcmUuaW1hZ2UsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc3RvcmUuZGVzY3JpcHRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcmUtbGlzdC10aXRsZVwiPlN0b3JlIExpc3Q8L2gyPlxyXG4gICAgICAgICAgPGg0PkJvbiBBcHDDqXRpdDwvaDQ+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub3Blbn0ga2V5PXtzdG9yZS5pZH0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3N0b3JlLnRodW1ifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0b3JlRGV0YWlsKHN0b3JlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtgJHtzdG9yZS5uYW1lfSBpbWFnZWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2stdG8tbWVudVwiPkJhY2sgdG8gSG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzdG9yZSBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1vZGFsLXN0b3JlLW5hbWVcIj57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtc3RvcmUtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5vdmVybGF5OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtc3RvcmUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U2N2UyMjtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsLXN0b3JlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1BvcnRhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblN0b3Jlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo5MDAwL3N0b3Jlc1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZXM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\J\\Documents\\AwesomeFoodStore\\client\\pages\\Stores.js */"))))));
    }
  }]);

  return Stores;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Stores.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("http://localhost:9000/stores");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.data;

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            data: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Stores);

/***/ })

})
//# sourceMappingURL=Stores.js.fcb9d43d28942b28a5f0.hot-update.js.map