"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./starRating.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const StarRating = props => {
  let {
    count,
    top,
    left,
    setRating,
    value,
    size
  } = props;
  (0, _react.useEffect)(() => {
    if (!count) {
      count = 5;
    }
  }, []);
  const alignments = {
    top: "".concat(top ? top : 0, "rem"),
    left: "".concat(left ? left : 0, "rem")
  };

  const getStars = (count, alignments) => {
    const handleStarRating = value => {
      setRating(value);
    };

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "stars-container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "rating",
      style: _objectSpread({
        fontSize: "".concat(size, "px")
      }, alignments)
    }, Array.from(Array(count).keys()).reverse().map(ele => {
      if (ele + 1 <= value) {
        return /*#__PURE__*/_react.default.createElement("span", {
          className: "rated rotate-star",
          key: ele,
          onClick: () => handleStarRating(ele + 1)
        }, "\u2606");
      }

      return /*#__PURE__*/_react.default.createElement("span", {
        className: "rotate-star",
        key: ele,
        onClick: () => handleStarRating(ele + 1)
      }, "\u2606");
    })));
  };

  return getStars(count, value, setRating, alignments);
};

var _default = /*#__PURE__*/_react.default.memo(StarRating);

exports.default = _default;