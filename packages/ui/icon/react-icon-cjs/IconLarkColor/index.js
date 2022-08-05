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

function IconLarkColorComponent(iconProps, ref) {
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
    className: "".concat(className ? className + ' ' : '').concat(prefixCls, "-icon ").concat(prefixCls, "-icon-lark-color")
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
    fill: "#007FFF",
    d: "M996.51 28.744 752.955 291.958a7.764 7.764 0 0 0-1.928 6.828 47.632 47.632 0 0 1-80.946 42.73L475.975 535.569l19.163 256.386 217.95 217.894L996.51 28.744z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#0069FF",
    d: "M993.591 35.352 752.68 295.702a7.82 7.82 0 0 0-1.927 6.884 47.081 47.081 0 0 1-80.12 42.18L479.884 535.513a3.855 3.855 0 0 0-1.101 2.974l18.832 251.815 485.79-732.869 10.186-22.026z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#00EED4",
    d: "m986.653 18.888-263.213 243.5a7.764 7.764 0 0 1-6.884 1.982 47.632 47.632 0 0 0-42.676 80.946L479.774 539.423l-256.33-19.273L5.494 302.255l981.16-283.367z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#00D3B4",
    d: "m980.045 21.806-260.46 240.912a7.764 7.764 0 0 1-6.773 1.927 47.081 47.081 0 0 0-42.18 80.12L479.829 535.514a3.855 3.855 0 0 1-3.028 1.101l-251.815-18.832L957.909 31.993l22.026-10.187z"
  }));
}

var IconLarkColor = /*#__PURE__*/_react["default"].forwardRef(IconLarkColorComponent);

IconLarkColor.defaultProps = {
  isIcon: true
};
IconLarkColor.displayName = 'IconLarkColor';
var _default = IconLarkColor;
exports["default"] = _default;