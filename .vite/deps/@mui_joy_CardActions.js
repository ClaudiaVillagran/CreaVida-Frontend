"use client";
import {
  buttonClasses_default
} from "./chunk-YU2SNAMK.js";
import {
  cardClasses_default
} from "./chunk-KMW65OBG.js";
import {
  dividerClasses_default
} from "./chunk-BAZOERVR.js";
import "./chunk-7AUUFCZA.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-WPNMLPL7.js";
import {
  generateUtilityClass,
  generateUtilityClasses
} from "./chunk-R2OOBRZQ.js";
import "./chunk-LQ64O3CC.js";
import "./chunk-Z2XWVQFP.js";
import "./chunk-WMV7RHH4.js";
import "./chunk-OTY6O57J.js";
import "./chunk-RCRKYVPD.js";
import {
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  init_clsx,
  init_objectWithoutPropertiesLoose,
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

// node_modules/@mui/joy/CardActions/CardActions.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
init_clsx();
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/CardActions/cardActionsClasses.js
function getCardActionsUtilityClass(slot) {
  return generateUtilityClass("MuiCardActions", slot);
}
var cardActionsClasses = generateUtilityClasses("MuiCardActions", ["root"]);
var cardActionsClasses_default = cardActionsClasses;

// node_modules/@mui/joy/IconButton/iconButtonClasses.js
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg", "loading", "loadingIndicator"]);
var iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js
var aspectRatioClasses = generateUtilityClasses("MuiCardOverflow", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var cardOverflowClasses_default = aspectRatioClasses;

// node_modules/@mui/joy/CardActions/CardActions.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component", "children", "buttonFlex", "orientation", "slots", "slotProps"];
var useUtilityClasses = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardActionsUtilityClass, {});
};
var StyledCardActionsRoot = styled_default("div")(({
  ownerState
}) => {
  var _ownerState$orientati;
  return _extends({
    "--Button-radius": "var(--Card-childRadius)",
    "--IconButton-radius": "var(--Card-childRadius)",
    display: "flex"
  }, ((_ownerState$orientati = ownerState.orientation) == null ? void 0 : _ownerState$orientati.startsWith("horizontal")) && {
    alignItems: "center"
    // it is common to have children aligned center in horizontal orientation, but not vertically.
  }, {
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.orientation === "horizontal-reverse" && {
    flexDirection: "row-reverse"
  }, {
    zIndex: 1,
    // render above Link's overlay
    gap: "calc(0.625 * var(--Card-padding))",
    padding: "var(--unstable_padding)",
    "--unstable_padding": "calc(0.75 * var(--Card-padding)) 0 0 0",
    [`.${cardOverflowClasses_default.root} > &`]: {
      "--unstable_padding": "calc(0.75 * var(--Card-padding)) 0 var(--Card-padding)"
    },
    [`.${cardClasses_default.root} > .${dividerClasses_default.root} + &`]: {
      "--unstable_padding": "0"
    }
  }, ownerState.buttonFlex ? {
    [`& > :not(.${iconButtonClasses_default.root})`]: {
      flex: ownerState.buttonFlex
    },
    [`& > :not(button) > .${buttonClasses_default.root}`]: {
      width: "100%"
      // for button to fill its wrapper.
    }
  } : {
    [`& > .${buttonClasses_default.root}:only-child`]: {
      flex: "auto"
    }
  });
});
var CardActionsRoot = styled_default(StyledCardActionsRoot, {
  name: "JoyCardActions",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var CardActions = React.forwardRef(function CardActions2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardActions"
  });
  const {
    className,
    component = "div",
    children,
    buttonFlex,
    orientation = "horizontal",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    buttonFlex,
    orientation
  });
  const classes = useUtilityClasses();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardActionsRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardActions.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The CSS `flex` for the Button and its wrapper.
   */
  buttonFlex: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * Used to render icon or text elements inside the CardActions if `src` is not set.
   * This can be an element, or just a string.
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
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types.default.oneOf(["horizontal-reverse", "horizontal", "vertical"]),
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
var CardActions_default = CardActions;
export {
  cardActionsClasses_default as cardActionsClasses,
  CardActions_default as default,
  getCardActionsUtilityClass
};
//# sourceMappingURL=@mui_joy_CardActions.js.map
