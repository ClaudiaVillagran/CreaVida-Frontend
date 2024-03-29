"use client";
import {
  cardClasses_default,
  getCardUtilityClass
} from "./chunk-KMW65OBG.js";
import {
  resolveSxValue
} from "./chunk-UTR2JM3N.js";
import "./chunk-7AUUFCZA.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-WPNMLPL7.js";
import "./chunk-R2OOBRZQ.js";
import "./chunk-LQ64O3CC.js";
import "./chunk-Z2XWVQFP.js";
import "./chunk-WMV7RHH4.js";
import "./chunk-OTY6O57J.js";
import "./chunk-RCRKYVPD.js";
import {
  _objectWithoutPropertiesLoose,
  capitalize,
  clsx_default,
  composeClasses,
  createGetCssVar,
  init_clsx,
  init_esm,
  init_objectWithoutPropertiesLoose,
  init_utils,
  isMuiElement,
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

// node_modules/@mui/joy/Card/Card.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
init_clsx();
var import_prop_types = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/joy/colorInversion/colorInversionUtils.js
init_esm();
var createPrefixVar = (cssVarPrefix) => {
  return (cssVar) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}${cssVar.replace(/^--/, "")}`;
};
var INVERTED_COLORS_ATTR = "data-skip-inverted-colors";
var INVERTED_COLORS_SELECTOR = `& :not([${INVERTED_COLORS_ATTR}], [${INVERTED_COLORS_ATTR}] *)`;
var skipInvertedColors = (theme) => {
  var _theme$colorSchemes$l, _theme$colorSchemes$l2, _theme$colorSchemes$l3, _theme$colorSchemes$l4, _theme$colorSchemes$l5, _theme$colorSchemes$l6, _theme$colorSchemes$l7, _theme$colorSchemes$l8, _theme$colorSchemes$l9, _theme$colorSchemes$l10, _theme$colorSchemes$l11, _theme$colorSchemes$d, _theme$colorSchemes$d2, _theme$colorSchemes$d3, _theme$colorSchemes$d4, _theme$colorSchemes$d5, _theme$colorSchemes$d6, _theme$colorSchemes$d7, _theme$colorSchemes$d8, _theme$colorSchemes$d9, _theme$colorSchemes$d10, _theme$colorSchemes$d11;
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  return {
    "--variant-plainColor": "var(--variant-plainColor) !important",
    "--variant-plainHoverColor": "var(--variant-plainHoverColor) !important",
    "--variant-plainHoverBg": "var(--variant-plainHoverBg) !important",
    "--variant-plainActiveBg": "var(--variant-plainActiveBg) !important",
    "--variant-plainDisabledColor": "var(--variant-plainDisabledColor) !important",
    "--variant-outlinedColor": "var(--variant-outlinedColor) !important",
    "--variant-outlinedBorder": "var(--variant-outlinedBorder) !important",
    "--variant-outlinedHoverColor": "var(--variant-outlinedHoverColor) !important",
    "--variant-outlinedHoverBorder": "var(--variant-outlinedHoverBorder) !important",
    "--variant-outlinedHoverBg": "var(--variant-outlinedHoverBg) !important",
    "--variant-outlinedActiveBg": "var(--variant-outlinedActiveBg) !important",
    "--variant-outlinedDisabledColor": "var(--variant-outlinedDisabledColor) !important",
    "--variant-outlinedDisabledBorder": "var(--variant-outlinedDisabledBorder) !important",
    "--variant-softColor": "var(--variant-softColor) !important",
    "--variant-softHoverColor": "var(--variant-softHoverColor) !important",
    "--variant-softBg": "var(--variant-softBg) !important",
    "--variant-softHoverBg": "var(--variant-softHoverBg) !important",
    "--variant-softActiveBg": "var(--variant-softActiveBg) !important",
    "--variant-softActiveColor": "var(--variant-softActiveColor) !important",
    "--variant-softDisabledColor": "var(--variant-softDisabledColor) !important",
    "--variant-softDisabledBg": "var(--variant-softDisabledBg) !important",
    "--variant-solidColor": "var(--variant-solidColor) !important",
    "--variant-solidBg": "var(--variant-solidBg) !important",
    "--variant-solidHoverBg": "var(--variant-solidHoverBg) !important",
    "--variant-solidActiveBg": "var(--variant-solidActiveBg) !important",
    "--variant-solidDisabledColor": "var(--variant-solidDisabledColor) !important",
    "--variant-solidDisabledBg": "var(--variant-solidDisabledBg) !important",
    "--Badge-ringColor": "var(--Badge-ringColor) !important",
    colorScheme: "unset",
    [theme.getColorSchemeSelector("light")]: {
      [prefixVar("--palette-focusVisible")]: `${(_theme$colorSchemes$l = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l.palette.focusVisible} !important`,
      [prefixVar("--palette-background-body")]: `${(_theme$colorSchemes$l2 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l2.palette.background.body} !important`,
      [prefixVar("--palette-background-surface")]: `${(_theme$colorSchemes$l3 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l3.palette.background.surface} !important`,
      [prefixVar("--palette-background-popup")]: `${(_theme$colorSchemes$l4 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l4.palette.background.popup} !important`,
      [prefixVar("--palette-background-level1")]: `${(_theme$colorSchemes$l5 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l5.palette.background.level1} !important`,
      [prefixVar("--palette-background-level2")]: `${(_theme$colorSchemes$l6 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l6.palette.background.level2} !important`,
      [prefixVar("--palette-background-level3")]: `${(_theme$colorSchemes$l7 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l7.palette.background.level3} !important`,
      [prefixVar("--palette-text-primary")]: `${(_theme$colorSchemes$l8 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l8.palette.text.primary} !important`,
      [prefixVar("--palette-text-secondary")]: `${(_theme$colorSchemes$l9 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l9.palette.text.secondary} !important`,
      [prefixVar("--palette-text-tertiary")]: `${(_theme$colorSchemes$l10 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l10.palette.text.tertiary} !important`,
      [prefixVar("--palette-divider")]: `${(_theme$colorSchemes$l11 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l11.palette.divider} !important`
    },
    [theme.getColorSchemeSelector("dark")]: {
      [prefixVar("--palette-focusVisible")]: `${(_theme$colorSchemes$d = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d.palette.focusVisible} !important`,
      [prefixVar("--palette-background-body")]: `${(_theme$colorSchemes$d2 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d2.palette.background.body} !important`,
      [prefixVar("--palette-background-surface")]: `${(_theme$colorSchemes$d3 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d3.palette.background.surface} !important`,
      [prefixVar("--palette-background-popup")]: `${(_theme$colorSchemes$d4 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d4.palette.background.popup} !important`,
      [prefixVar("--palette-background-level1")]: `${(_theme$colorSchemes$d5 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d5.palette.background.level1} !important`,
      [prefixVar("--palette-background-level2")]: `${(_theme$colorSchemes$d6 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d6.palette.background.level2} !important`,
      [prefixVar("--palette-background-level3")]: `${(_theme$colorSchemes$d7 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d7.palette.background.level3} !important`,
      [prefixVar("--palette-text-primary")]: `${(_theme$colorSchemes$d8 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d8.palette.text.primary} !important`,
      [prefixVar("--palette-text-secondary")]: `${(_theme$colorSchemes$d9 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d9.palette.text.secondary} !important`,
      [prefixVar("--palette-text-tertiary")]: `${(_theme$colorSchemes$d10 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d10.palette.text.tertiary} !important`,
      [prefixVar("--palette-divider")]: `${(_theme$colorSchemes$d11 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d11.palette.divider} !important`
    }
  };
};
function isStyledThemeProp(props) {
  return props.theme !== void 0;
}
var applySolidInversion = (color) => (themeProp) => {
  const theme = isStyledThemeProp(themeProp) ? themeProp.theme : themeProp;
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const getCssVar = (cssVar) => {
    const tokens = cssVar.split("-");
    return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
  };
  return {
    [INVERTED_COLORS_SELECTOR]: {
      "--Badge-ringColor": getCssVar(`palette-${color}-solidBg`),
      "--Icon-color": "currentColor",
      [`${theme.getColorSchemeSelector("light")}, ${theme.getColorSchemeSelector("dark")}`]: {
        colorScheme: "dark",
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
        [prefixVar("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
        [prefixVar("--palette-background-popup")]: getCssVar(`palette-${color}-700`),
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-common-white`),
        [prefixVar("--palette-text-secondary")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-text-tertiary")]: getCssVar(`palette-${color}-300`),
        [prefixVar("--palette-text-icon")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-plainColor": getCssVar(`palette-${color}-50`),
        "--variant-plainHoverColor": `#fff`,
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-outlinedColor": getCssVar(`palette-${color}-50`),
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.5)`,
        "--variant-outlinedHoverColor": `#fff`,
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(255 255 255 / 0.2)`,
        "--variant-softColor": getCssVar(`palette-common-white`),
        "--variant-softHoverColor": getCssVar(`palette-common-white`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.24)`,
        "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.36)`,
        "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.16)`,
        "--variant-softActiveColor": `#fff`,
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`,
        "--variant-solidColor": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "500"}`),
        "--variant-solidBg": getCssVar(`palette-common-white`),
        "--variant-solidHoverBg": getCssVar(`palette-common-white`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-100`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`
      }
    },
    [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
  };
};
var applySoftInversion = (color) => (themeProp) => {
  const {
    theme = themeProp
  } = themeProp;
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const getCssVar = (cssVar) => {
    const tokens = cssVar.split("-");
    return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
  };
  return {
    [INVERTED_COLORS_SELECTOR]: {
      "--Badge-ringColor": getCssVar(`palette-${color}-softBg`),
      "--Icon-color": "currentColor",
      [theme.getColorSchemeSelector("dark")]: {
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-300`),
        [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
        [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-100`),
        [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
        [prefixVar("--palette-text-icon")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.2)`,
        "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
        "--variant-plainHoverColor": getCssVar(`palette-${color}-50`),
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
        "--variant-outlinedHoverColor": getCssVar(`palette-${color}-50`),
        "--variant-outlinedBg": "initial",
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-600`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        "--variant-softColor": getCssVar(`palette-${color}-200`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-softHoverColor": "#fff",
        "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-solidColor": "#fff",
        "--variant-solidBg": getCssVar(`palette-${color}-500`),
        "--variant-solidHoverColor": "#fff",
        "--variant-solidHoverBg": getCssVar(`palette-${color}-600`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-600`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`
      },
      // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
      [theme.getColorSchemeSelector("light")]: {
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-500`),
        [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
        [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-700`),
        [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
        [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.68)`,
        [prefixVar("--palette-text-icon")]: getCssVar(`palette-${color}-500`),
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
        "--variant-plainHoverColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 1)`,
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 1)`,
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverColor": getCssVar(`palette-${color}-600`),
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-softColor": getCssVar(`palette-${color}-600`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.8)`,
        "--variant-softHoverColor": getCssVar(`palette-${color}-700`),
        "--variant-softHoverBg": getCssVar(`palette-${color}-200`),
        "--variant-softActiveBg": getCssVar(`palette-${color}-300`),
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        "--variant-solidColor": getCssVar("palette-common-white"),
        "--variant-solidBg": getCssVar(`palette-${color}-${color === "neutral" ? "700" : "500"}`),
        "--variant-solidHoverColor": getCssVar("palette-common-white"),
        "--variant-solidHoverBg": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "600"}`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "600"}`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
      }
    },
    [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
  };
};

// node_modules/@mui/joy/Card/Card.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "component", "invertedColors", "size", "variant", "children", "orientation", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getCardUtilityClass, {});
};
var StyledCardRoot = styled_default("div")(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const {
    p,
    padding,
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["p", "padding", "borderRadius"]);
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    // a context variable for any child component
    "--Card-childRadius": "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))",
    // AspectRatio integration
    "--AspectRatio-radius": "var(--Card-childRadius)",
    // Link integration
    "--unstable_actionMargin": "calc(-1 * var(--variant-borderWidth, 0px))",
    // Link, Radio, Checkbox integration
    "--unstable_actionRadius": "var(--Card-radius)",
    // CardCover integration
    "--CardCover-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // CardOverflow integration
    "--CardOverflow-offset": `calc(-1 * var(--Card-padding))`,
    "--CardOverflow-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // Divider integration
    "--Divider-inset": "calc(-1 * var(--Card-padding))"
  }, ownerState.size === "sm" && {
    "--Card-radius": theme.vars.radius.sm,
    "--Card-padding": "0.625rem",
    gap: "0.5rem"
  }, ownerState.size === "md" && {
    "--Card-radius": theme.vars.radius.md,
    "--Card-padding": "1rem",
    gap: "0.75rem 1rem"
  }, ownerState.size === "lg" && {
    "--Card-radius": theme.vars.radius.lg,
    "--Card-padding": "1.5rem",
    gap: "1rem 1.5rem"
  }, {
    padding: "var(--Card-padding)",
    borderRadius: "var(--Card-radius)",
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative",
    display: "flex",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, theme.typography[`body-${ownerState.size}`], ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]), p !== void 0 && {
    "--Card-padding": p
  }, padding !== void 0 && {
    "--Card-padding": padding
  }, borderRadius !== void 0 && {
    "--Card-radius": borderRadius
  }];
});
var CardRoot = styled_default(StyledCardRoot, {
  name: "JoyCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var Card = React.forwardRef(function Card2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCard"
  });
  const {
    className,
    color = "neutral",
    component = "div",
    invertedColors = false,
    size = "md",
    variant = "outlined",
    children,
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    component,
    orientation,
    size,
    variant,
    invertedColors
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
    elementType: CardRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children: React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if (isMuiElement(child, ["Divider"])) {
        extraProps.inset = "inset" in child.props ? child.props.inset : "context";
        const dividerOrientation = orientation === "vertical" ? "horizontal" : "vertical";
        extraProps.orientation = "orientation" in child.props ? child.props.orientation : dividerOrientation;
      }
      if (index === 0) {
        extraProps["data-first-child"] = "";
      }
      if (index === React.Children.count(children) - 1) {
        extraProps["data-last-child"] = "";
      }
      return React.cloneElement(child, extraProps);
    })
  }));
});
true ? Card.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the Card if `src` is not set.
   * This can be an element, or just a string.
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
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types.default.bool,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
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
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Card_default = Card;
export {
  cardClasses_default as cardClasses,
  Card_default as default,
  getCardUtilityClass
};
//# sourceMappingURL=@mui_joy_Card.js.map
