function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import PropTypes from 'prop-types';
import React from 'react';
export var StepLink = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(StepLink, _React$PureComponent);

  var _super = _createSuper(StepLink);

  function StepLink() {
    _classCallCheck(this, StepLink);

    return _super.apply(this, arguments);
  }

  _createClass(StepLink, [{
    key: "handleClick",
    value: function handleClick(event) {
      if (this.props.onClick) {
        event.preventDefault();
        this.props.onClick(this.props.href, this.props.stepId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          href = _this$props.href,
          screenReaderText = _this$props.screenReaderText,
          className = _this$props.className,
          children = _this$props.children;
      var ComponentType = this.props.component || 'a';
      return /*#__PURE__*/React.createElement(ComponentType, {
        href: href,
        onClick: function onClick(e) {
          return _this.handleClick(e);
        },
        className: className
      }, children, screenReaderText && /*#__PURE__*/React.createElement("span", {
        className: "ds-u-visibility--screen-reader"
      }, " ", screenReaderText));
    }
  }]);

  return StepLink;
}(React.PureComponent);
StepLink.propTypes = {
  /**
   * Label text or HTML.
   */
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  stepId: PropTypes.string,
  screenReaderText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};
export default StepLink;