import {
  _extends,
  init_extends
} from "./chunk-J74PV344.js";

// node_modules/@mui/joy/styles/styleUtils.js
init_extends();
var resolveSxValue = ({
  theme,
  ownerState
}, keys) => {
  let sxObject = {};
  function resolveSx(sxProp) {
    if (typeof sxProp === "function") {
      const result = sxProp(theme);
      resolveSx(result);
    } else if (Array.isArray(sxProp)) {
      sxProp.forEach((sxItem) => {
        if (typeof sxItem !== "boolean") {
          resolveSx(sxItem);
        }
      });
    } else if (typeof sxProp === "object") {
      sxObject = _extends({}, sxObject, sxProp);
    }
  }
  if (ownerState.sx) {
    resolveSx(ownerState.sx);
    keys.forEach((key) => {
      const value = sxObject[key];
      if (typeof value === "string" || typeof value === "number") {
        if (key === "borderRadius") {
          if (typeof value === "number") {
            sxObject[key] = `${value}px`;
          } else {
            var _theme$vars;
            sxObject[key] = ((_theme$vars = theme.vars) == null ? void 0 : _theme$vars.radius[value]) || value;
          }
        } else if (["p", "padding", "m", "margin"].indexOf(key) !== -1 && typeof value === "number") {
          sxObject[key] = theme.spacing(value);
        } else {
          sxObject[key] = value;
        }
      } else if (typeof value === "function") {
        sxObject[key] = value(theme);
      } else {
        sxObject[key] = void 0;
      }
    });
  }
  return sxObject;
};

export {
  resolveSxValue
};
//# sourceMappingURL=chunk-UTR2JM3N.js.map
