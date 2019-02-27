webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Body.js":
/*!**********************************!*\
  !*** ./pages/components/Body.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Portal */ "./pages/components/Portal.js");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! stream */ "./node_modules/stream-browserify/index.js");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\J\\Documents\\AwesomeFoodStore\\client\\pages\\components\\Body.js";



 // const Body = props => (
//   <div>
//     <h1>Shows</h1>
//     {props.stores.map(store => {
//       return <img key={store.id} src={store.thumb} />;
//     })}
//     <Modal />
//   </div>
// );

var Body =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Body, _React$Component);

  function Body() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Body);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Body).apply(this, arguments));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "open", function () {
      _this.setState({
        opened: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "close", function () {
      _this.setState({
        opened: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "storeDetail", function (id) {
      _this.props.stores.map(function (store) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Body, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          image = _this$state.image,
          name = _this$state.name,
          description = _this$state.description;
      var stores = this.props.stores;
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h2", {
        className: "store-list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Store List"), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("ul", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, stores.map(function (store) {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
          onClick: _this2.open,
          key: store.id,
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("img", {
          src: store.thumb,
          onClick: function onClick() {
            return _this2.storeDetail(store.id);
          },
          alt: "".concat(store.name, " image"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }));
      })), this.state.opened && react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_9__["Portal"], {
        selector: "#modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "jsx-3015897928" + " " + "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "jsx-3015897928" + " " + "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("img", {
        src: image,
        alt: "store image",
        className: "jsx-3015897928" + " " + "modal-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h3", {
        className: "jsx-3015897928" + " " + "modal-store-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("p", {
        className: "jsx-3015897928" + " " + "modal-store-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("button", {
        type: "button",
        onClick: this.close,
        className: "jsx-3015897928" + " " + "close-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "X")), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1932196077",
        __self: this
      }, "body{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSlxcRG9jdW1lbnRzXFxBd2Vzb21lRm9vZFN0b3JlXFxjbGllbnRcXHBhZ2VzXFxjb21wb25lbnRzXFxCb2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFaUMsQUFHbUMsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSlxcRG9jdW1lbnRzXFxBd2Vzb21lRm9vZFN0b3JlXFxjbGllbnRcXHBhZ2VzXFxjb21wb25lbnRzXFxCb2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gXCIuL1BvcnRhbFwiO1xyXG5pbXBvcnQgeyBTdHJlYW0gfSBmcm9tIFwic3RyZWFtXCI7XHJcblxyXG4vLyBjb25zdCBCb2R5ID0gcHJvcHMgPT4gKFxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8aDE+U2hvd3M8L2gxPlxyXG4vLyAgICAge3Byb3BzLnN0b3Jlcy5tYXAoc3RvcmUgPT4ge1xyXG4vLyAgICAgICByZXR1cm4gPGltZyBrZXk9e3N0b3JlLmlkfSBzcmM9e3N0b3JlLnRodW1ifSAvPjtcclxuLy8gICAgIH0pfVxyXG4vLyAgICAgPE1vZGFsIC8+XHJcbi8vICAgPC9kaXY+XHJcbi8vICk7XHJcblxyXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBvcGVuZWQ6IGZhbHNlLCBpbWFnZTogXCJcIiwgbmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIgfTtcclxuICB9XHJcblxyXG4gIG9wZW4gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RvcmVEZXRhaWwgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnByb3BzLnN0b3Jlcy5tYXAoc3RvcmUgPT4ge1xyXG4gICAgICBpZiAoc3RvcmUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBuYW1lOiBzdG9yZS5uYW1lLFxyXG4gICAgICAgICAgaW1hZ2U6IHN0b3JlLmltYWdlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHN0b3JlLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaW1hZ2UsIG5hbWUsIGRlc2NyaXB0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBzdG9yZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3JlLWxpc3QtdGl0bGVcIj5TdG9yZSBMaXN0PC9oMj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7c3RvcmVzLm1hcChzdG9yZSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLm9wZW59IGtleT17c3RvcmUuaWR9IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3N0b3JlLnRodW1ifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdG9yZURldGFpbChzdG9yZS5pZCl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake3N0b3JlLm5hbWV9IGltYWdlYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuZWQgJiYgKFxyXG4gICAgICAgICAgPFBvcnRhbCBzZWxlY3Rvcj1cIiNtb2RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cInN0b3JlIGltYWdlXCIgY2xhc3NOYW1lPVwibW9kYWwtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1vZGFsLXN0b3JlLW5hbWVcIj57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtc3RvcmUtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWwtc3RvcmUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2U2N2UyMjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWwtc3RvcmUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzE4MTgxODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qb3J0YWw+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\J\\Documents\\AwesomeFoodStore\\client\\pages\\components\\Body.js */"), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3471346956",
        __self: this
      }, ".overlay.jsx-3015897928{position:fixed;background-color:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;}.modal.jsx-3015897928{background-color:white;position:absolute;top:10%;right:10%;bottom:10%;left:10%;padding:1em;}.modal-store-name.jsx-3015897928{margin-top:1.5rem;font-size:2rem;color:#e67e22;}.modal-store-description.jsx-3015897928{margin-top:10px;line-height:1.5rem;}.close-btn.jsx-3015897928{color:#181818;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSlxcRG9jdW1lbnRzXFxBd2Vzb21lRm9vZFN0b3JlXFxjbGllbnRcXHBhZ2VzXFxjb21wb25lbnRzXFxCb2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFMEIsQUFHa0MsQUFTUSxBQVVMLEFBTUYsQUFLRixjQUNoQixDQTlCc0MsQ0F5QmpCLEVBTkosS0FWRyxVQVdKLEVBTWhCLE1BaEJVLE1BV1YsQ0FwQlEsQ0FVSSxLQVRGLEtBVUcsR0FURixRQVVBLENBVEYsT0FDVCxDQVNjLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxKXFxEb2N1bWVudHNcXEF3ZXNvbWVGb29kU3RvcmVcXGNsaWVudFxccGFnZXNcXGNvbXBvbmVudHNcXEJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSBcIi4vUG9ydGFsXCI7XHJcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gXCJzdHJlYW1cIjtcclxuXHJcbi8vIGNvbnN0IEJvZHkgPSBwcm9wcyA9PiAoXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIDxoMT5TaG93czwvaDE+XHJcbi8vICAgICB7cHJvcHMuc3RvcmVzLm1hcChzdG9yZSA9PiB7XHJcbi8vICAgICAgIHJldHVybiA8aW1nIGtleT17c3RvcmUuaWR9IHNyYz17c3RvcmUudGh1bWJ9IC8+O1xyXG4vLyAgICAgfSl9XHJcbi8vICAgICA8TW9kYWwgLz5cclxuLy8gICA8L2Rpdj5cclxuLy8gKTtcclxuXHJcbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UsIGltYWdlOiBcIlwiLCBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiB9O1xyXG4gIH1cclxuXHJcbiAgb3BlbiA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBzdG9yZURldGFpbCA9IGlkID0+IHtcclxuICAgIHRoaXMucHJvcHMuc3RvcmVzLm1hcChzdG9yZSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZS5pZCA9PT0gaWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG5hbWU6IHN0b3JlLm5hbWUsXHJcbiAgICAgICAgICBpbWFnZTogc3RvcmUuaW1hZ2UsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogc3RvcmUuZGVzY3JpcHRpb25cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IHN0b3JlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcmUtbGlzdC10aXRsZVwiPlN0b3JlIExpc3Q8L2gyPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHtzdG9yZXMubWFwKHN0b3JlID0+IChcclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMub3Blbn0ga2V5PXtzdG9yZS5pZH0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17c3RvcmUudGh1bWJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0b3JlRGV0YWlsKHN0b3JlLmlkKX1cclxuICAgICAgICAgICAgICAgIGFsdD17YCR7c3RvcmUubmFtZX0gaW1hZ2VgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm9wZW5lZCAmJiAoXHJcbiAgICAgICAgICA8UG9ydGFsIHNlbGVjdG9yPVwiI21vZGFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwic3RvcmUgaW1hZ2VcIiBjbGFzc05hbWU9XCJtb2RhbC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibW9kYWwtc3RvcmUtbmFtZVwiPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC1zdG9yZS1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsb3NlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1zdG9yZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTY3ZTIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbC1zdG9yZS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTgxODE4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1BvcnRhbD5cclxuICAgICAgICApfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\J\\Documents\\AwesomeFoodStore\\client\\pages\\components\\Body.js */"))));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=index.js.9a6845db932841291a60.hot-update.js.map