"use client";
import {
  dividerClasses_default,
  getDividerUtilityClass
} from "./chunk-BAZOERVR.js";
import "./chunk-7AUUFCZA.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-WPNMLPL7.js";
import "./chunk-R2OOBRZQ.js";
import "./chunk-WMV7RHH4.js";
import {
  init_composeClasses
} from "./chunk-RCRKYVPD.js";
import {
  _objectWithoutPropertiesLoose,
  capitalize,
  clsx_default,
  composeClasses,
  init_clsx,
  init_objectWithoutPropertiesLoose,
  init_utils,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-BLOZU5UR.js";
import {
  _extends,
  init_extends
} from "./chunk-J74PV344.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/joy/Divider/Divider.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_utils();
init_composeClasses();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "children", "component", "inset", "orientation", "role", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    orientation,
    inset
  } = ownerState;
  const slots = {
    root: ["root", orientation, inset && `inset${capitalize(inset)}`]
  };
  return composeClasses(slots, getDividerUtilityClass, {});
};
var DividerRoot = styled_default("hr", {
  name: "JoyDivider",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  "--Divider-thickness": "1px",
  "--Divider-lineColor": theme.vars.palette.divider
}, ownerState.inset === "none" && {
  "--_Divider-inset": "0px"
}, ownerState.inset === "context" && {
  "--_Divider-inset": "var(--Divider-inset, 0px)"
}, {
  margin: "initial",
  // reset margin for `hr` tag
  marginInline: ownerState.orientation === "vertical" ? "initial" : "var(--_Divider-inset)",
  marginBlock: ownerState.orientation === "vertical" ? "var(--_Divider-inset)" : "initial",
  position: "relative",
  alignSelf: "stretch",
  flexShrink: 0
}, ownerState.children ? _extends({
  "--Divider-gap": theme.spacing(1),
  "--Divider-childPosition": "50%",
  display: "flex",
  flexDirection: ownerState.orientation === "vertical" ? "column" : "row",
  alignItems: "center",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0
}, theme.typography["body-sm"], {
  "&::before, &::after": {
    position: "relative",
    inlineSize: ownerState.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
    blockSize: ownerState.orientation === "vertical" ? "initial" : "var(--Divider-thickness)",
    backgroundColor: "var(--Divider-lineColor)",
    // use logical size + background is better than border because they work with gradient.
    content: '""'
  },
  "&::before": {
    marginInlineEnd: ownerState.orientation === "vertical" ? "initial" : "min(var(--Divider-childPosition) * 999, var(--Divider-gap))",
    marginBlockEnd: ownerState.orientation === "vertical" ? "min(var(--Divider-childPosition) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "var(--Divider-childPosition)"
  },
  "&::after": {
    marginInlineStart: ownerState.orientation === "vertical" ? "initial" : "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",
    marginBlockStart: ownerState.orientation === "vertical" ? "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "calc(100% - var(--Divider-childPosition))"
  }
}) : {
  border: "none",
  // reset the border for `hr` tag
  listStyle: "none",
  backgroundColor: "var(--Divider-lineColor)",
  // use logical size + background is better than border because they work with gradient.
  inlineSize: ownerState.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
  blockSize: ownerState.orientation === "vertical" ? "initial" : "var(--Divider-thickness)"
}));
var Divider = React.forwardRef(function Divider2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDivider"
  });
  const {
    className,
    children,
    component = children !== void 0 && children !== null ? "div" : "hr",
    inset,
    orientation = "horizontal",
    role = component !== "hr" ? "separator" : void 0,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    inset,
    role,
    orientation,
    component
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: DividerRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      as: component,
      role
    }, role === "separator" && orientation === "vertical" && {
      // The implicit aria-orientation of separator is 'horizontal'
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
      "aria-orientation": "vertical"
    })
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? Divider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Class name applied to the divider to shrink or stretch the line based on the orientation.
   */
  inset: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["none", "context"]), import_prop_types.default.string]),
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
Divider.muiName = "Divider";
var Divider_default = Divider;
export {
  Divider_default as default,
  dividerClasses_default as dividerClasses,
  getDividerUtilityClass
};
//# sourceMappingURL=@mui_joy_Divider.js.map
