"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function IconXiguaColorComponent(iconProps, ref) {
  var _useContext = (0, _react.useContext)(_context.IconContext),
      _useContext$prefixCls = _useContext.prefixCls,
      prefixCls = _useContext$prefixCls === void 0 ? 'arco' : _useContext$prefixCls;

  var spin = iconProps.spin,
      className = iconProps.className;

  var props = _objectSpread(_objectSpread({
    "aria-hidden": true,
    focusable: false,
    ref: ref
  }, iconProps), {}, {
    className: "".concat(className ? className + ' ' : '').concat(prefixCls, "-icon ").concat(prefixCls, "-icon-xigua-color")
  });

  if (spin) {
    props.className = "".concat(props.className, " ").concat(prefixCls, "-icon-loading");
  }

  delete props.spin;
  delete props.isIcon;
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    viewBox: "0 0 1024 1024",
    fill: "none",
    stroke: "currentColor"
  }, props), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("style", null)), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FE163E",
    d: "M381.968 38.684c-202.85 54.614-351.085 232.757-371.89 446.01C-.326 590.018 28.281 630.328 140.108 668.037c104.026 33.808 176.843 101.425 209.351 189.846 40.31 115.729 44.211 122.23 91.023 144.336 40.31 19.504 58.514 19.504 131.332 7.802 211.951-36.41 362.788-171.642 416.101-374.492C1059.434 368.965 882.59 90.697 605.623 32.183 517.2 13.978 470.39 15.279 381.968 38.684zm176.843 322.48c158.64 74.117 201.55 158.638 119.63 237.957-102.725 97.524-240.56 136.534-291.271 80.62-20.806-23.406-24.707-48.112-24.707-161.24s3.901-137.833 24.707-161.239c32.507-36.409 88.421-35.108 171.641 3.901z"
  }));
}

var IconXiguaColor = /*#__PURE__*/_react["default"].forwardRef(IconXiguaColorComponent);

IconXiguaColor.defaultProps = {
  isIcon: true
};
IconXiguaColor.displayName = 'IconXiguaColor';
var _default = IconXiguaColor;
exports["default"] = _default;