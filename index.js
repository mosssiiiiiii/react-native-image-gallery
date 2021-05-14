function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

function Gallery(_ref) {
  var images = _ref.images;

  var _useState = useState(images[0]),
      _useState2 = _slicedToArray(_useState, 2),
      main = _useState2[0],
      setMain = _useState2[1];

  var changeHandler = function changeHandler(item) {
    setMain(item);
  };

  return React.createElement(View, null, React.createElement(View, {
    style: style.imageWrap
  }, React.createElement(Image, {
    style: style.image,
    source: {
      uri: main
    }
  })), React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  }, _toConsumableArray(images).splice(0, 3).map(function (item, index) {
    return React.createElement(TouchableOpacity, {
      key: index,
      onPress: function onPress() {
        return changeHandler(item);
      },
      style: style.thumbnail
    }, React.createElement(Image, {
      style: style.image,
      source: {
        uri: item
      }
    }));
  }), React.createElement(View, {
    style: style.more
  }, React.createElement(View, {
    style: style.dot
  }), React.createElement(View, {
    style: style.dot
  }), React.createElement(View, {
    style: style.dot
  }))));
}

var style = StyleSheet.create({
  imageWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250,
    width: 250,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
    marginBottom: 15
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  more: {
    width: 60,
    height: 60,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#e5e5e8',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#868585',
    margin: 5,
    borderRadius: 100
  },
  thumbnail: {
    width: 60,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: '#868585',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default Gallery;
