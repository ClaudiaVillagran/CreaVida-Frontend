"use client";
import {
  resolveSxValue
} from "./chunk-UTR2JM3N.js";
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
import {
  useButton
} from "./chunk-Z2XWVQFP.js";
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
  require_prop_types,
  useId
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

// node_modules/@mui/joy/Chip/Chip.js
init_objectWithoutPropertiesLoose();
init_extends();
var React3 = __toESM(require_react());
init_clsx();
var import_prop_types = __toESM(require_prop_types());
init_composeClasses();
init_utils();

// node_modules/@mui/joy/styles/variantColorInheritance.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var VariantColorContext = React.createContext(void 0);
function VariantColorProvider({
  children,
  color,
  variant
}) {
  return (0, import_jsx_runtime.jsx)(VariantColorContext.Provider, {
    value: `${variant || ""}:${color || ""}`,
    children
  });
}

// node_modules/@mui/joy/Chip/chipClasses.js
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", ["root", "clickable", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "disabled", "endDecorator", "focusVisible", "label", "labelSm", "labelMd", "labelLg", "sizeSm", "sizeMd", "sizeLg", "startDecorator", "variantPlain", "variantSolid", "variantSoft", "variantOutlined"]);
var chipClasses_default = chipClasses;

// node_modules/@mui/joy/Chip/ChipContext.js
var React2 = __toESM(require_react());
var ChipColorContext = React2.createContext({
  disabled: void 0,
  variant: void 0,
  color: void 0
});
var ChipContext_default = ChipColorContext;

// node_modules/@mui/joy/Chip/Chip.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "color", "onClick", "disabled", "size", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    size,
    color,
    clickable,
    variant,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, variant && `variant${capitalize(variant)}`, clickable && "clickable"],
    action: ["action", disabled && "disabled", focusVisible && "focusVisible"],
    label: ["label", size && `label${capitalize(size)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getChipUtilityClass, {});
};
var ChipRoot = styled_default("div", {
  name: "JoyChip",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius"]);
  return [_extends({
    // for controlling chip delete margin offset
    "--Chip-decoratorChildOffset": "min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))",
    "--Chip-decoratorChildRadius": "max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))",
    "--Chip-deleteRadius": "var(--Chip-decoratorChildRadius)",
    "--Chip-deleteSize": "var(--Chip-decoratorChildHeight)",
    "--Avatar-radius": "var(--Chip-decoratorChildRadius)",
    "--Avatar-size": "var(--Chip-decoratorChildHeight)",
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": "currentColor",
    "--unstable_actionRadius": "var(--_Chip-radius)"
  }, ownerState.size === "sm" && {
    "--Chip-paddingInline": "0.375rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": theme.vars.fontSize.sm,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.25rem)",
    // 20px
    gap: "3px"
  }, ownerState.size === "md" && {
    "--Chip-paddingInline": "0.5rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": theme.vars.fontSize.md,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.5rem)",
    // 26px
    gap: "0.25rem"
  }, ownerState.size === "lg" && {
    "--Chip-paddingInline": "0.75rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": theme.vars.fontSize.lg,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.75rem)",
    // 28px
    gap: "0.375rem"
  }, {
    "--_Chip-radius": "var(--Chip-radius, 1.5rem)",
    "--_Chip-paddingBlock": "max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",
    minHeight: "var(--_Chip-minHeight)",
    maxWidth: "max-content",
    // to prevent Chip from stretching to full width when used with flexbox
    paddingInline: "var(--Chip-paddingInline)",
    borderRadius: "var(--_Chip-radius)",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    textDecoration: "none",
    verticalAlign: "middle",
    boxSizing: "border-box"
  }, theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`], {
    fontWeight: theme.vars.fontWeight.md,
    [`&.${chipClasses_default.disabled}`]: {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    }
  }), ...!ownerState.clickable ? [_extends({
    backgroundColor: theme.vars.palette.background.surface
  }, variantStyle, {
    [`&.${chipClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color]
  })] : [{
    "--variant-borderWidth": "0px",
    color: variantStyle == null ? void 0 : variantStyle.color
  }], borderRadius !== void 0 && {
    "--_Chip-radius": borderRadius
  }];
});
var ChipLabel = styled_default("span", {
  name: "JoyChip",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => _extends({
  display: "inline-block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  order: 1,
  minInlineSize: 0,
  flexGrow: 1
}, ownerState.clickable && {
  zIndex: 1,
  pointerEvents: "none"
}));
var ChipAction = styled_default("button", {
  name: "JoyChip",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => {
  var _theme$variants4, _theme$variants5, _theme$variants6, _theme$variants7;
  return [{
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    // To fix Firefox issue (https://github.com/mui/material-ui/issues/36877)
    border: "none",
    cursor: "pointer",
    padding: "initial",
    margin: "initial",
    backgroundColor: "initial",
    textDecoration: "none",
    borderRadius: "inherit",
    [theme.focus.selector]: theme.focus.default
  }, _extends({
    backgroundColor: theme.vars.palette.background.surface
  }, (_theme$variants4 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants4[ownerState.color]), {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants5 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants5[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants6 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }, {
    [`&.${chipClasses_default.disabled}`]: (_theme$variants7 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants7[ownerState.color]
  }];
});
var ChipStartDecorator = styled_default("span", {
  name: "JoyChip",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  "--Avatar-marginInlineStart": "calc(var(--Chip-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Chip-paddingInline) / -4)",
  display: "inherit",
  // set zIndex to 1 with order to stay on top of other controls, e.g. Checkbox, Radio
  order: 0,
  zIndex: 1,
  pointerEvents: "none"
});
var ChipEndDecorator = styled_default("span", {
  name: "JoyChip",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  "--IconButton-margin": "0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)",
  "--Icon-margin": "0 calc(var(--Chip-paddingInline) / -4) 0 0",
  display: "inherit",
  // set zIndex to 1 with order to stay on top of other controls, e.g. Checkbox, Radio
  order: 2,
  zIndex: 1,
  pointerEvents: "none"
});
var Chip = React3.forwardRef(function Chip2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyChip"
  });
  const {
    children,
    className,
    color = "neutral",
    onClick,
    disabled = false,
    size = "md",
    variant = "soft",
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const clickable = !!onClick || !!slotProps.action;
  const ownerState = _extends({}, props, {
    disabled,
    size,
    color,
    variant,
    clickable,
    focusVisible: false
  });
  const resolvedActionProps = typeof slotProps.action === "function" ? slotProps.action(ownerState) : slotProps.action;
  const actionRef = React3.useRef(null);
  const {
    focusVisible,
    getRootProps
  } = useButton(_extends({}, resolvedActionProps, {
    disabled,
    rootRef: actionRef
  }));
  ownerState.focusVisible = focusVisible;
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ChipRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotLabel, labelProps] = useSlot("label", {
    className: classes.label,
    elementType: ChipLabel,
    externalForwardedProps,
    ownerState
  });
  const id = useId(labelProps.id);
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: ChipAction,
    externalForwardedProps,
    ownerState,
    getSlotProps: getRootProps,
    additionalProps: {
      "aria-labelledby": id,
      as: resolvedActionProps == null ? void 0 : resolvedActionProps.component,
      onClick
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: ChipStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: ChipEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const chipContextValue = React3.useMemo(() => ({
    disabled
  }), [disabled]);
  return (0, import_jsx_runtime2.jsx)(ChipContext_default.Provider, {
    value: chipContextValue,
    children: (0, import_jsx_runtime2.jsx)(VariantColorProvider, {
      variant,
      color,
      children: (0, import_jsx_runtime3.jsxs)(SlotRoot, _extends({}, rootProps, {
        children: [clickable && (0, import_jsx_runtime2.jsx)(SlotAction, _extends({}, actionProps)), (0, import_jsx_runtime2.jsx)(SlotLabel, _extends({}, labelProps, {
          id,
          children
        })), startDecorator && (0, import_jsx_runtime2.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
          children: startDecorator
        })), endDecorator && (0, import_jsx_runtime2.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
          children: endDecorator
        }))]
      }))
    })
  });
});
true ? Chip.propTypes = {
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
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types.default.node,
  /**
   * Element action click handler.
   */
  onClick: import_prop_types.default.func,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["lg", "md", "sm"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    action: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    endDecorator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    label: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    startDecorator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    action: import_prop_types.default.elementType,
    endDecorator: import_prop_types.default.elementType,
    label: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    startDecorator: import_prop_types.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Chip_default = Chip;
export {
  chipClasses_default as chipClasses,
  Chip_default as default,
  getChipUtilityClass
};
//# sourceMappingURL=@mui_joy_Chip.js.map
