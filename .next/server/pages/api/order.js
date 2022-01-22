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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ "./models/userModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, "kishor812943237533928185");
  if (!decoded) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,
    ref: 'user'
  },
  address: String,
  mobile: String,
  cart: Array,
  total: Number,
  paymentId: String,
  method: String,
  delivered: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  },
  dateOfPayment: Date
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('order', orderSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ "./models/orderModel.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;

    case "GET":
      await getOrders(req, res);
      break;
  }
});

const getOrders = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
    let orders;

    if (result.role !== 'admin') {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].find({
        user: result.id
      }).populate("user", "-password");
    } else {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].find().populate("user", "-password");
    }

    res.json({
      orders
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
    const {
      address,
      mobile,
      cart,
      total
    } = req.body;
    const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      user: result.id,
      address,
      mobile,
      cart,
      total
    });
    cart.filter(item => {
      return sold(item._id, item.quantity, item.inStock, item.sold);
    });
    await newOrder.save();
    res.json({
      msg: 'Order success! We will contact you to confirm the order.',
      newOrder
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const sold = async (id, quantity, oldInStock, oldSold) => {
  await _models_productModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
    _id: id
  }, {
    inStock: oldInStock - quantity,
    sold: quantity + oldSold
  });
};

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://kishor:kishor81294323@cluster0.eykb2.mongodb.net/next-ecomerce?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9vcmRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm9yZGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJtb2JpbGUiLCJjYXJ0IiwiQXJyYXkiLCJ0b3RhbCIsIk51bWJlciIsInBheW1lbnRJZCIsIm1ldGhvZCIsImRlbGl2ZXJlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJEYXRlIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJvcmRlciIsIm1vZGVsIiwicHJvZHVjdFNjaGVtYSIsInRpdGxlIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJjYXRlZ29yeSIsImNoZWNrZWQiLCJpblN0b2NrIiwic29sZCIsInByb2R1Y3QiLCJ1c2VyU2NoZW1hIiwibmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJjb25uZWN0REIiLCJjcmVhdGVPcmRlciIsImdldE9yZGVycyIsInJlc3VsdCIsIm9yZGVycyIsIk9yZGVycyIsImZpbmQiLCJwb3B1bGF0ZSIsIm1lc3NhZ2UiLCJib2R5IiwibmV3T3JkZXIiLCJmaWx0ZXIiLCJpdGVtIiwicXVhbnRpdHkiLCJzYXZlIiwibXNnIiwib2xkSW5TdG9jayIsIm9sZFNvbGQiLCJQcm9kdWN0cyIsImZpbmRPbmVBbmRVcGRhdGUiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFF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LENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ2tFO0FBQVYsS0FBckIsQ0FBUDtBQUNIO0FBQ0osQ0F2QkQ7O0FBeUJBLE1BQU1oQixJQUFJLEdBQUcsT0FBT3pDLEVBQVAsRUFBVzhELFFBQVgsRUFBcUJHLFVBQXJCLEVBQWlDQyxPQUFqQyxLQUE2QztBQUN0RCxRQUFNQyw0REFBUSxDQUFDQyxnQkFBVCxDQUEwQjtBQUFDckUsT0FBRyxFQUFFQztBQUFOLEdBQTFCLEVBQXFDO0FBQ3ZDd0MsV0FBTyxFQUFFeUIsVUFBVSxHQUFHSCxRQURpQjtBQUV2Q3JCLFFBQUksRUFBRXFCLFFBQVEsR0FBR0k7QUFGc0IsR0FBckMsQ0FBTjtBQUlILENBTEQsQzs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1qQixTQUFTLEdBQUcsTUFBTTtBQUNwQixNQUFHN0MsK0NBQVEsQ0FBQ2lFLFdBQVQsQ0FBcUIsQ0FBckIsRUFBd0JDLFVBQTNCLEVBQXNDO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBO0FBQ0g7O0FBQ0RwRSxpREFBUSxDQUFDcUUsT0FBVCxDQUFpQjlFLDBHQUFqQixFQUEwQztBQUN0QytFLGtCQUFjLEVBQUUsSUFEc0I7QUFFdENDLG9CQUFnQixFQUFFLEtBRm9CO0FBR3RDQyxtQkFBZSxFQUFFLElBSHFCO0FBSXRDQyxzQkFBa0IsRUFBRTtBQUprQixHQUExQyxFQUtHdEYsR0FBRyxJQUFJO0FBQ04sUUFBR0EsR0FBSCxFQUFRLE1BQU1BLEdBQU47QUFDUmdGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0gsR0FSRDtBQVNILENBZEQ7O0FBaUJldkIsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL29yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXHJcblxyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gICAgaWYoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXHJcblxyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXHJcbiAgICBpZighZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLid9KVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtfaWQ6IGRlY29kZWQuaWR9KVxyXG5cclxuICAgIHJldHVybiB7aWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgICByZWY6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IFN0cmluZyxcclxuICAgIG1vYmlsZTogU3RyaW5nLFxyXG4gICAgY2FydDogQXJyYXksXHJcbiAgICB0b3RhbDogTnVtYmVyLFxyXG4gICAgcGF5bWVudElkOiBTdHJpbmcsXHJcbiAgICBtZXRob2Q6IFN0cmluZyxcclxuICAgIGRlbGl2ZXJlZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYWlkOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRhdGVPZlBheW1lbnQ6IERhdGVcclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMub3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoJ29yZGVyJywgb3JkZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB0cmltOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdHJpbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGltYWdlczoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBjaGVja2VkOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGluU3RvY2s6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIHNvbGQ6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfVxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB1bmlxdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXHJcbiAgICB9LFxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RldmF0Y2hhbm5lbC9pbWFnZS91cGxvYWQvdjE2MDI3NTI0MDIvYXZhdGFyL2F2YXRhcl9jdWdxNDAucG5nJ1xyXG4gICAgfVxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJ1xyXG5pbXBvcnQgT3JkZXJzIGZyb20gJy4uLy4uLy4uL21vZGVscy9vcmRlck1vZGVsJ1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCdcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xyXG5cclxuY29ubmVjdERCKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZU9yZGVyKHJlcSwgcmVzKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGdldE9yZGVycyhyZXEsIHJlcylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldE9yZGVycyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG5cclxuICAgICAgICBsZXQgb3JkZXJzO1xyXG4gICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKXtcclxuICAgICAgICAgICAgb3JkZXJzID0gYXdhaXQgT3JkZXJzLmZpbmQoe3VzZXI6IHJlc3VsdC5pZH0pLnBvcHVsYXRlKFwidXNlclwiLCBcIi1wYXNzd29yZFwiKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBvcmRlcnMgPSBhd2FpdCBPcmRlcnMuZmluZCgpLnBvcHVsYXRlKFwidXNlclwiLCBcIi1wYXNzd29yZFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzLmpzb24oe29yZGVyc30pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcywgbW9iaWxlLCBjYXJ0LCB0b3RhbCB9ID0gcmVxLmJvZHlcclxuXHJcbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBuZXcgT3JkZXJzKHtcclxuICAgICAgICAgICAgdXNlcjogcmVzdWx0LmlkLCBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2FydC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzb2xkKGl0ZW0uX2lkLCBpdGVtLnF1YW50aXR5LCBpdGVtLmluU3RvY2ssIGl0ZW0uc29sZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCBuZXdPcmRlci5zYXZlKClcclxuXHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBtc2c6ICdPcmRlciBzdWNjZXNzISBXZSB3aWxsIGNvbnRhY3QgeW91IHRvIGNvbmZpcm0gdGhlIG9yZGVyLicsXHJcbiAgICAgICAgICAgIG5ld09yZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzb2xkID0gYXN5bmMgKGlkLCBxdWFudGl0eSwgb2xkSW5TdG9jaywgb2xkU29sZCkgPT4ge1xyXG4gICAgYXdhaXQgUHJvZHVjdHMuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOiBpZH0sIHtcclxuICAgICAgICBpblN0b2NrOiBvbGRJblN0b2NrIC0gcXVhbnRpdHksXHJcbiAgICAgICAgc29sZDogcXVhbnRpdHkgKyBvbGRTb2xkXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xyXG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=