"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _PlayerMetadata = require("./player/PlayerMetadata");

var _PlayerMetadata2 = _interopRequireDefault(_PlayerMetadata);

var _PlayerController = require("./player/PlayerController");

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _PlayerSecondaryController = require("./player/PlayerSecondaryController");

var _PlayerSecondaryController2 = _interopRequireDefault(_PlayerSecondaryController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
  }

  _createClass(Player, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "player" },
        _react2.default.createElement(_PlayerMetadata2.default, null),
        _react2.default.createElement(_PlayerController2.default, null),
        _react2.default.createElement(_PlayerSecondaryController2.default, null)
      );
    }
  }]);

  return Player;
}(_react2.default.Component);

exports.default = Player;