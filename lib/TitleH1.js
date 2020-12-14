"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var TitleH1Element = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 2.4rem;\n"], ["\n  color: ", ";\n  font-size: 2.4rem;\n"])), function (props) { return props.color ? "" + props.color : '#000000'; });
var TitleH1 = function (_a) {
    var color = _a.color, text = _a.text;
    return (react_1.default.createElement(TitleH1Element, { color: color, text: text }, text));
};
exports.default = TitleH1;
var templateObject_1;
//# sourceMappingURL=TitleH1.js.map