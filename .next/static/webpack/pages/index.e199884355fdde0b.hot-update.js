"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reason_Flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reason/Flow */ \"./pages/reason/Flow.js\");\n/* harmony import */ var _reason_Reason__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reason/Reason */ \"./pages/reason/Reason.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index */ \"./store/index.tsx\");\n/* harmony import */ var _store_flow_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/flow/slice */ \"./store/flow/slice.tsx\");\n/* harmony import */ var _store_reason_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reason/slice */ \"./store/reason/slice.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const [pageIndex, setPageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { isSuccess  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.flow);\n    const { isSuccess: reasonIsSuccess  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.reason);\n    const getFlowData = ()=>{\n        setPageIndex(2);\n        if (!isSuccess) {\n            dispatch(_store_flow_slice__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getFlowString());\n        }\n    };\n    const getReasonData = ()=>{\n        setPageIndex(1);\n        if (!reasonIsSuccess) {\n            dispatch(_store_reason_slice__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getReasonString());\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Redux Study\"\n            }, void 0, false, {\n                fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setPageIndex(1),\n                        children: \"Reason\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getFlowData,\n                        children: \"Flow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                        fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: pageIndex === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reason_Reason__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 31\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reason_Flow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 44\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jung-hwankim/Desktop/codeCampRedux/reduxStudy/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"6674QtKROUZ6xFx2rp/wjtIysVI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = Main;\nconst wrapperApp = _store_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(Main);\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapperApp);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUNBO0FBQ0k7QUFDQTtBQUNRO0FBQ0k7QUFDUDtBQUNBO0FBRTFDLE1BQU1RLE9BQU8sSUFBTTs7SUFDakIsTUFBTUMsV0FBV0gsd0RBQVdBO0lBQzVCLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLEVBQUVZLFVBQVMsRUFBRSxHQUFHTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxJQUFJO0lBQ3ZELE1BQU0sRUFBRUYsV0FBV0csZ0JBQWUsRUFBRSxHQUFHUix3REFBV0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNRyxNQUFNO0lBQzFFLE1BQU1DLGNBQWMsSUFBTTtRQUN4Qk4sYUFBYTtRQUNiLElBQUksQ0FBQ0MsV0FBVztZQUNkSCxTQUFTTCx1RUFBd0I7UUFDbkMsQ0FBQztJQUNIO0lBRUEsTUFBTWUsZ0JBQWdCLElBQU07UUFDMUJSLGFBQWE7UUFDYixJQUFJLENBQUNJLGlCQUFpQjtZQUNwQk4sU0FBU0osMkVBQTRCO1FBQ3ZDLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDZ0I7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDtnQkFBSUUsT0FBTztvQkFBRUMsU0FBUztnQkFBTzs7a0NBQzVCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNZixhQUFhO2tDQUFJOzs7Ozs7a0NBQ3hDLDhEQUFDYzt3QkFBT0MsU0FBU1Q7a0NBQWE7Ozs7OztrQ0FDOUIsOERBQUNROzs7Ozs7Ozs7OzswQkFHSCw4REFBQ0o7MEJBQUtYLGNBQWMsa0JBQUksOERBQUNSLHNEQUFNQTs7Ozs4Q0FBTSw4REFBQ0Qsb0RBQUlBOzs7OzZCQUFHOzs7Ozs7Ozs7Ozs7QUFHbkQ7R0E5Qk1POztRQUNhRixvREFBV0E7UUFFTkMsb0RBQVdBO1FBQ01BLG9EQUFXQTs7O0tBSjlDQztBQWdDTixNQUFNbUIsYUFBYXhCLDhEQUFpQixDQUFDSztBQUNyQywrREFBZW1CLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZsb3cgZnJvbSBcIi4vcmVhc29uL0Zsb3dcIjtcbmltcG9ydCBSZWFzb24gZnJvbSBcIi4vcmVhc29uL1JlYXNvblwiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XG5pbXBvcnQgRmxvd0FjdGlvbiBmcm9tIFwiLi4vc3RvcmUvZmxvdy9zbGljZVwiO1xuaW1wb3J0IFJlYXNvbkFjdGlvbiBmcm9tIFwiLi4vc3RvcmUvcmVhc29uL3NsaWNlXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbcGFnZUluZGV4LCBzZXRQYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgaXNTdWNjZXNzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZsb3cpO1xuICBjb25zdCB7IGlzU3VjY2VzczogcmVhc29uSXNTdWNjZXNzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlYXNvbik7XG4gIGNvbnN0IGdldEZsb3dEYXRhID0gKCkgPT4ge1xuICAgIHNldFBhZ2VJbmRleCgyKTtcbiAgICBpZiAoIWlzU3VjY2Vzcykge1xuICAgICAgZGlzcGF0Y2goRmxvd0FjdGlvbi5nZXRGbG93U3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRSZWFzb25EYXRhID0gKCkgPT4ge1xuICAgIHNldFBhZ2VJbmRleCgxKTtcbiAgICBpZiAoIXJlYXNvbklzU3VjY2Vzcykge1xuICAgICAgZGlzcGF0Y2goUmVhc29uQWN0aW9uLmdldFJlYXNvblN0cmluZygpKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5SZWR1eCBTdHVkeTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2VJbmRleCgxKX0+UmVhc29uPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0Rmxvd0RhdGF9PkZsb3c8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PntwYWdlSW5kZXggPT09IDEgPyA8UmVhc29uIC8+IDogPEZsb3cgLz59PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB3cmFwcGVyQXBwID0gd3JhcHBlci53aXRoUmVkdXgoTWFpbik7XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyQXBwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRmxvdyIsIlJlYXNvbiIsIndyYXBwZXIiLCJGbG93QWN0aW9uIiwiUmVhc29uQWN0aW9uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIk1haW4iLCJkaXNwYXRjaCIsInBhZ2VJbmRleCIsInNldFBhZ2VJbmRleCIsImlzU3VjY2VzcyIsInN0YXRlIiwiZmxvdyIsInJlYXNvbklzU3VjY2VzcyIsInJlYXNvbiIsImdldEZsb3dEYXRhIiwiZ2V0Rmxvd1N0cmluZyIsImdldFJlYXNvbkRhdGEiLCJnZXRSZWFzb25TdHJpbmciLCJkaXYiLCJoMSIsInN0eWxlIiwiZGlzcGxheSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ3cmFwcGVyQXBwIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});