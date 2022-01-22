module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/create/[[...id]].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/create/[[...id]].js":
/*!***********************************!*\
  !*** ./pages/create/[[...id]].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _utils_imageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/imageUpload */ "./utils/imageUpload.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\nextjs-ecommerce\\pages\\create\\[[...id]].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductsManager = () => {
  const initialState = {
    title: '',
    price: 0,
    inStock: 0,
    description: '',
    content: '',
    category: ''
  };
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState);
  const {
    title,
    price,
    inStock,
    description,
    content,
    category
  } = product;
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    categories,
    auth
  } = state;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: onEdit,
    1: setOnEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (id) {
      setOnEdit(true);
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["getData"])(`product/${id}`).then(res => {
        setProduct(res.product);
        setImages(res.product.images);
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages([]);
    }
  }, [id]);

  const handleChangeInput = e => {
    const {
      name,
      value
    } = e.target;
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      [name]: value
    }));
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  };

  const handleUploadInput = e => {
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
    let newImages = [];
    let num = 0;
    let err = '';
    const files = [...e.target.files];
    if (files.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Files does not exist.'
      }
    });
    files.forEach(file => {
      if (file.size > 1024 * 1024) return err = 'The largest image size is 1mb';
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') return err = 'Image format is incorrect.';
      num += 1;
      if (num <= 5) newImages.push(file);
      return newImages;
    });
    if (err) dispatch({
      type: 'NOTIFY',
      payload: {
        error: err
      }
    });
    const imgCount = images.length;
    if (imgCount + newImages.length > 5) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Select up to 5 images.'
      }
    });
    setImages([...images, ...newImages]);
  };

  const deleteImage = index => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (auth.user.role !== 'admin') return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Authentication is not valid.'
      }
    });
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Please add all the fields.'
      }
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    let media = [];
    const imgNewURL = images.filter(img => !img.url);
    const imgOldURL = images.filter(img => img.url);
    if (imgNewURL.length > 0) media = await Object(_utils_imageUpload__WEBPACK_IMPORTED_MODULE_4__["imageUpload"])(imgNewURL);
    let res;

    if (onEdit) {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["putData"])(`product/${id}`, _objectSpread(_objectSpread({}, product), {}, {
        images: [...imgOldURL, ...media]
      }), auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
    } else {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__["postData"])('product', _objectSpread(_objectSpread({}, product), {}, {
        images: [...imgOldURL, ...media]
      }), auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
    }

    return dispatch({
      type: 'NOTIFY',
      payload: {
        success: res.msg
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "products_manager",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Products Manager"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "row",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "title",
          value: title,
          placeholder: "Title",
          className: "d-block my-4 w-100 p-2",
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "price",
              children: "Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              name: "price",
              value: price,
              placeholder: "Price",
              className: "d-block w-100 p-2",
              onChange: handleChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "price",
              children: "In Stock"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "number",
              name: "inStock",
              value: inStock,
              placeholder: "inStock",
              className: "d-block w-100 p-2",
              onChange: handleChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          name: "description",
          id: "description",
          cols: "30",
          rows: "4",
          placeholder: "Description",
          onChange: handleChangeInput,
          className: "d-block my-4 w-100 p-2",
          value: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          name: "content",
          id: "content",
          cols: "30",
          rows: "6",
          placeholder: "Content",
          onChange: handleChangeInput,
          className: "d-block my-4 w-100 p-2",
          value: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "input-group-prepend px-0 my-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            name: "category",
            id: "category",
            value: category,
            onChange: handleChangeInput,
            className: "custom-select text-capitalize",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "all",
              children: "All Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, undefined), categories.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item._id,
              children: item.name
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info my-2 px-4",
          children: onEdit ? 'Update' : 'Create'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-6 my-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "input-group mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "Upload"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-file border rounded",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "file",
              className: "custom-file-input",
              onChange: handleUploadInput,
              multiple: true,
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row img-up mx-0",
          children: images.map((img, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "file_img my-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: img.url ? img.url : URL.createObjectURL(img),
              alt: "",
              className: "img-thumbnail rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              onClick: () => deleteImage(index),
              children: "X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 38
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 33
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsManager);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTIONS, addToCart, decrease, increase, deleteItem, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrease", function() { return decrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increase", function() { return increase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_MODAL: 'ADD_MODAL',
  ADD_ORDERS: 'ADD_ORDERS',
  ADD_USERS: 'ADD_USERS',
  ADD_CATEGORIES: 'ADD_CATEGORIES'
};
const addToCart = (product, cart) => {
  if (product.inStock === 0) return {
    type: 'NOTIFY',
    payload: {
      error: 'This product is out of stock.'
    }
  };
  const check = cart.every(item => {
    return item._id !== product._id;
  });
  if (!check) return {
    type: 'NOTIFY',
    payload: {
      error: 'The product has been added to cart.'
    }
  };
  return {
    type: 'ADD_CART',
    payload: [...cart, _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]
  };
};
const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity -= 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const increase = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity += 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const deleteItem = (data, id, type) => {
  const newData = data.filter(item => item._id !== id);
  return {
    type,
    payload: newData
  };
};
const updateItem = (data, id, post, type) => {
  const newData = data.map(item => item._id === id ? post : item);
  return {
    type,
    payload: newData
  };
};

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");

var _jsxFileName = "E:\\nextjs-ecommerce\\store\\GlobalState.js";



const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const DataProvider = ({
  children
}) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    modal: [],
    orders: [],
    users: [],
    categories: []
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
  const {
    cart,
    auth
  } = state;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('auth/accessToken').then(res => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user
          }
        });
      });
    }

    Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('categories').then(res => {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch({
        type: "ADD_CATEGORIES",
        payload: res.categories
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'));

    if (__next__cart01__devat) dispatch({
      type: 'ADD_CART',
      payload: __next__cart01__devat
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    localStorage.setItem('__next__cart01__devat', JSON.stringify(cart));
  }, [cart]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (auth.token) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('order', auth.token).then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch({
          type: 'ADD_ORDERS',
          payload: res.orders
        });
      });

      if (auth.user.role === 'admin') {
        Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])('user', auth.token).then(res => {
          if (res.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.err
            }
          });
          dispatch({
            type: 'ADD_USERS',
            payload: res.users
          });
        });
      }
    } else {
      dispatch({
        type: 'ADD_ORDERS',
        payload: []
      });
      dispatch({
        type: 'ADD_USERS',
        payload: []
      });
    }
  }, [auth.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const reducers = (state, action) => {
  switch (action.type) {
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].NOTIFY:
      return _objectSpread(_objectSpread({}, state), {}, {
        notify: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_ORDERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        orders: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_USERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: action.payload
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
const baseUrl = "http://localhost:3000";
const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};
const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "./utils/imageUpload.js":
/*!******************************!*\
  !*** ./utils/imageUpload.js ***!
  \******************************/
/*! exports provided: imageUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageUpload", function() { return imageUpload; });
const imageUpload = async images => {
  let imgArr = [];

  for (const item of images) {
    const formData = new FormData();
    formData.append("file", item);
    formData.append("upload_preset", "nextjs_store");
    formData.append("cloud_name", "du71vrd2o");
    const res = await fetch(" https://api.cloudinary.com/v1_1/du71vrd2o/image/upload", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    imgArr.push({
      public_id: data.public_id,
      url: data.secure_url
    });
  }

  return imgArr;
};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlL1tbLi4uaWRdXS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdHNNYW5hZ2VyIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJwcmljZSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2F0ZWdvcmllcyIsImF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25FZGl0Iiwic2V0T25FZGl0IiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVVwbG9hZElucHV0IiwibmV3SW1hZ2VzIiwibnVtIiwiZXJyIiwiZmlsZXMiLCJsZW5ndGgiLCJlcnJvciIsImZvckVhY2giLCJmaWxlIiwic2l6ZSIsInB1c2giLCJpbWdDb3VudCIsImRlbGV0ZUltYWdlIiwiaW5kZXgiLCJuZXdBcnIiLCJzcGxpY2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJyb2xlIiwibG9hZGluZyIsIm1lZGlhIiwiaW1nTmV3VVJMIiwiZmlsdGVyIiwiaW1nIiwidXJsIiwiaW1nT2xkVVJMIiwiaW1hZ2VVcGxvYWQiLCJwdXREYXRhIiwidG9rZW4iLCJwb3N0RGF0YSIsInN1Y2Nlc3MiLCJtc2ciLCJtYXAiLCJpdGVtIiwiX2lkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQUNUSU9OUyIsIk5PVElGWSIsIkFVVEgiLCJBRERfQ0FSVCIsIkFERF9NT0RBTCIsIkFERF9PUkRFUlMiLCJBRERfVVNFUlMiLCJBRERfQ0FURUdPUklFUyIsImFkZFRvQ2FydCIsImNhcnQiLCJjaGVjayIsImV2ZXJ5IiwicXVhbnRpdHkiLCJkZWNyZWFzZSIsImRhdGEiLCJuZXdEYXRhIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwidXBkYXRlSXRlbSIsInBvc3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJub3RpZnkiLCJtb2RhbCIsIm9yZGVycyIsInVzZXJzIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiYWNjZXNzX3Rva2VuIiwiX19uZXh0X19jYXJ0MDFfX2RldmF0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIiwiaW1nQXJyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInB1YmxpY19pZCIsInNlY3VyZV91cmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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LGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2NyZWF0ZS9bWy4uLmlkXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NyZWF0ZS9bWy4uLmlkXV0uanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQge2ltYWdlVXBsb2FkfSBmcm9tICcuLi8uLi91dGlscy9pbWFnZVVwbG9hZCdcclxuaW1wb3J0IHtwb3N0RGF0YSwgZ2V0RGF0YSwgcHV0RGF0YX0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQcm9kdWN0c01hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHByaWNlOiAwLFxyXG4gICAgICAgIGluU3RvY2s6IDAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3Qge3RpdGxlLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5fSA9IHByb2R1Y3RcclxuXHJcbiAgICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3Qge2NhdGVnb3JpZXMsIGF1dGh9ID0gc3RhdGVcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgW29uRWRpdCwgc2V0T25FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaWQpe1xyXG4gICAgICAgICAgICBzZXRPbkVkaXQodHJ1ZSlcclxuICAgICAgICAgICAgZ2V0RGF0YShgcHJvZHVjdC8ke2lkfWApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3QocmVzLnByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICBzZXRJbWFnZXMocmVzLnByb2R1Y3QuaW1hZ2VzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRPbkVkaXQoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFByb2R1Y3QoaW5pdGlhbFN0YXRlKVxyXG4gICAgICAgICAgICBzZXRJbWFnZXMoW10pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaWRdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgc2V0UHJvZHVjdCh7Li4ucHJvZHVjdCwgW25hbWVdOnZhbHVlfSlcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9fSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWRJbnB1dCA9IGUgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge319KVxyXG4gICAgICAgIGxldCBuZXdJbWFnZXMgPSBbXVxyXG4gICAgICAgIGxldCBudW0gPSAwXHJcbiAgICAgICAgbGV0IGVyciA9ICcnXHJcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbLi4uZS50YXJnZXQuZmlsZXNdXHJcblxyXG4gICAgICAgIGlmKGZpbGVzLmxlbmd0aCA9PT0gMCkgXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnRmlsZXMgZG9lcyBub3QgZXhpc3QuJ319KVxyXG5cclxuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICBpZihmaWxlLnNpemUgPiAxMDI0ICogMTAyNClcclxuICAgICAgICAgICAgcmV0dXJuIGVyciA9ICdUaGUgbGFyZ2VzdCBpbWFnZSBzaXplIGlzIDFtYidcclxuXHJcbiAgICAgICAgICAgIGlmKGZpbGUudHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmIGZpbGUudHlwZSAhPT0gJ2ltYWdlL3BuZycpXHJcbiAgICAgICAgICAgIHJldHVybiBlcnIgPSAnSW1hZ2UgZm9ybWF0IGlzIGluY29ycmVjdC4nXHJcblxyXG4gICAgICAgICAgICBudW0gKz0gMTtcclxuICAgICAgICAgICAgaWYobnVtIDw9IDUpIG5ld0ltYWdlcy5wdXNoKGZpbGUpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdJbWFnZXM7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYoZXJyKSBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogZXJyfX0pXHJcblxyXG4gICAgICAgIGNvbnN0IGltZ0NvdW50ID0gaW1hZ2VzLmxlbmd0aFxyXG4gICAgICAgIGlmKGltZ0NvdW50ICsgbmV3SW1hZ2VzLmxlbmd0aCA+IDUpXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnU2VsZWN0IHVwIHRvIDUgaW1hZ2VzLid9fSlcclxuICAgICAgICBzZXRJbWFnZXMoWy4uLmltYWdlcywgLi4ubmV3SW1hZ2VzXSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVJbWFnZSA9IGluZGV4ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnIgPSBbLi4uaW1hZ2VzXVxyXG4gICAgICAgIG5ld0Fyci5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgc2V0SW1hZ2VzKG5ld0FycilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYoYXV0aC51c2VyLnJvbGUgIT09ICdhZG1pbicpIFxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nfX0pXHJcblxyXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhcHJpY2UgfHwgIWluU3RvY2sgfHwgIWRlc2NyaXB0aW9uIHx8ICFjb250ZW50IHx8IGNhdGVnb3J5ID09PSAnYWxsJyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ1BsZWFzZSBhZGQgYWxsIHRoZSBmaWVsZHMuJ319KVxyXG5cclxuICAgIFxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9fSlcclxuICAgICAgICBsZXQgbWVkaWEgPSBbXVxyXG4gICAgICAgIGNvbnN0IGltZ05ld1VSTCA9IGltYWdlcy5maWx0ZXIoaW1nID0+ICFpbWcudXJsKVxyXG4gICAgICAgIGNvbnN0IGltZ09sZFVSTCA9IGltYWdlcy5maWx0ZXIoaW1nID0+IGltZy51cmwpXHJcblxyXG4gICAgICAgIGlmKGltZ05ld1VSTC5sZW5ndGggPiAwKSBtZWRpYSA9IGF3YWl0IGltYWdlVXBsb2FkKGltZ05ld1VSTClcclxuXHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICBpZihvbkVkaXQpe1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBwdXREYXRhKGBwcm9kdWN0LyR7aWR9YCwgey4uLnByb2R1Y3QsIGltYWdlczogWy4uLmltZ09sZFVSTCwgLi4ubWVkaWFdfSwgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHBvc3REYXRhKCdwcm9kdWN0Jywgey4uLnByb2R1Y3QsIGltYWdlczogWy4uLmltZ09sZFVSTCwgLi4ubWVkaWFdfSwgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ319KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzX21hbmFnZXJcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvZHVjdHMgTWFuYWdlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicm93XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBjbGFzc05hbWU9XCJkLWJsb2NrIG15LTQgdy0xMDAgcC0yXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwcmljZVwiIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPkluIFN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImluU3RvY2tcIiB2YWx1ZT17aW5TdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5TdG9ja1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgcC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBteS00IHctMTAwIHAtMlwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb250ZW50XCIgaWQ9XCJjb250ZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIG15LTQgdy0xMDAgcC0yXCIgdmFsdWU9e2NvbnRlbnR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZCBweC0wIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2F0ZWdvcnlcIiBpZD1cImNhdGVnb3J5XCIgdmFsdWU9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3QgdGV4dC1jYXBpdGFsaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsIFByb2R1Y3RzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLl9pZH0gdmFsdWU9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gbXktMiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvbkVkaXQgPyAnVXBkYXRlJzogJ0NyZWF0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlVwbG9hZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWRJbnB1dH0gbXVsdGlwbGUgYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGltZy11cCBteC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZpbGVfaW1nIG15LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZy51cmwgPyBpbWcudXJsIDogVVJMLmNyZWF0ZU9iamVjdFVSTChpbWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLXRodW1ibmFpbCByb3VuZGVkXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJbWFnZShpbmRleCl9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c01hbmFnZXIiLCJleHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcclxuICAgIE5PVElGWTogJ05PVElGWScsXHJcbiAgICBBVVRIOiAnQVVUSCcsXHJcbiAgICBBRERfQ0FSVDogJ0FERF9DQVJUJyxcclxuICAgIEFERF9NT0RBTDogJ0FERF9NT0RBTCcsXHJcbiAgICBBRERfT1JERVJTOiAnQUREX09SREVSUycsXHJcbiAgICBBRERfVVNFUlM6ICdBRERfVVNFUlMnLFxyXG4gICAgQUREX0NBVEVHT1JJRVM6ICdBRERfQ0FURUdPUklFUycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgY2FydCkgPT4ge1xyXG4gICAgaWYocHJvZHVjdC5pblN0b2NrID09PSAwKVxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdUaGlzIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLid9IH0pIFxyXG5cclxuICAgIGNvbnN0IGNoZWNrID0gY2FydC5ldmVyeShpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFjaGVjaykgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdUaGUgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byBjYXJ0Lid9IH0pIFxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBbLi4uY2FydCwgey4uLnByb2R1Y3QsIHF1YW50aXR5OiAxfV0gfSkgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxyXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxyXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IChkYXRhLCBpZCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgIT09IGlkKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGF9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4gKGl0ZW0uX2lkID09PSBpZCA/IHBvc3QgOiBpdGVtKSlcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9SZWR1Y2VycydcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgICAgICAgbm90aWZ5OiB7fSwgYXV0aDoge30sIGNhcnQ6IFtdLCBtb2RhbDogW10sIG9yZGVyczogW10sIHVzZXJzOiBbXSwgY2F0ZWdvcmllczogW11cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSlcclxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TG9naW5cIik7XHJcbiAgICAgICAgaWYoZmlyc3RMb2dpbil7XHJcbiAgICAgICAgICAgIGdldERhdGEoJ2F1dGgvYWNjZXNzVG9rZW4nKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmaXJzdExvZ2luXCIpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQVVUSFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcy5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlcy51c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldERhdGEoJ2NhdGVnb3JpZXMnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyBcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQUREX0NBVEVHT1JJRVNcIixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBfX25leHRfX2NhcnQwMV9fZGV2YXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnKSlcclxuXHJcbiAgICAgICAgaWYoX19uZXh0X19jYXJ0MDFfX2RldmF0KSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IF9fbmV4dF9fY2FydDAxX19kZXZhdCB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X19jYXJ0MDFfX2RldmF0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpXHJcbiAgICB9LCBbY2FydF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhdXRoLnRva2VuKXtcclxuICAgICAgICAgICAgZ2V0RGF0YSgnb3JkZXInLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IHJlcy5vcmRlcnN9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoYXV0aC51c2VyLnJvbGUgPT09ICdhZG1pbicpe1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnN9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9PUkRFUlMnLCBwYXlsb2FkOiBbXX0pXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2F1dGgudG9rZW5dKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSwgZGlzcGF0Y2h9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9BY3Rpb25zJ1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5PVElGWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbm90aWZ5OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BVVRIOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFDVElPTlMuQUREX01PREFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtb2RhbDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFDVElPTlMuQUREX09SREVSUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfVVNFUlM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FURUdPUklFUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn0iLCJleHBvcnQgY29uc3QgaW1hZ2VVcGxvYWQgPSBhc3luYyAoaW1hZ2VzKSA9PiB7XHJcbiAgICBsZXQgaW1nQXJyID0gW11cclxuICAgIGZvcihjb25zdCBpdGVtIG9mIGltYWdlcyl7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgaXRlbSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIHByb2Nlc3MuZW52LkNMT1VEX1VQREFURV9QUkVTRVQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBwcm9jZXNzLmVudi5DTE9VRF9OQU1FKVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5DTE9VRF9BUEksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIGltZ0Fyci5wdXNoKHtwdWJsaWNfaWQ6IGRhdGEucHVibGljX2lkLCB1cmw6IGRhdGEuc2VjdXJlX3VybH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW1nQXJyO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9