"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var lottie_web_1 = __importDefault(require("lottie-web"));
var react_1 = __importStar(require("react"));
var consts_1 = require("./consts");
var hooks_1 = require("./utils/hooks");
var Lottie = function (_a) {
    var config = _a.config, setRefPlayer = _a.setRefPlayer, _b = _a.containerId, containerId = _b === void 0 ? consts_1.CONTAINER_ID : _b, className = _a.className, _c = _a.as, Component = _c === void 0 ? 'div' : _c, _d = _a.containerProps, containerProps = _d === void 0 ? {} : _d;
    var localRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(null), refPlayer = _e[0], setLocalRefPlayer = _e[1];
    var previousRef = (0, hooks_1.usePrevious)(localRef);
    var handleUpdateRefPlayer = (0, react_1.useCallback)(function (refPlayer) {
        setRefPlayer === null || setRefPlayer === void 0 ? void 0 : setRefPlayer(refPlayer);
        setLocalRefPlayer(refPlayer);
    }, [setLocalRefPlayer, setRefPlayer]);
    (0, react_1.useEffect)(function () {
        var _a;
        if ((0, lodash_isequal_1.default)(localRef, previousRef)) {
            return;
        }
        if (refPlayer) {
            refPlayer.destroy();
        }
        var newRefPlayer = lottie_web_1.default.loadAnimation(__assign(__assign({}, config), { container: ((_a = config === null || config === void 0 ? void 0 : config.container) !== null && _a !== void 0 ? _a : localRef === null || localRef === void 0 ? void 0 : localRef.current) }));
        handleUpdateRefPlayer(newRefPlayer);
    }, [config, localRef, previousRef]);
    return (react_1.default.createElement(Component, __assign({}, containerProps, { ref: localRef, className: (0, classnames_1.default)(containerId, className) })));
};
exports.default = (0, react_1.memo)(Lottie);
//# sourceMappingURL=Lottie.js.map