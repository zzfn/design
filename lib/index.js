(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TiLas = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var Button = function Button(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("button", {
        className: 'tls-btn'
      }, children);
    };

    var Input = function Input(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default['default'].createElement("input", {
        className: 'tls-ipt'
      });
    };

    exports.Button = Button;
    exports.Input = Input;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
