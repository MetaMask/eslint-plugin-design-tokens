import {
  noDeprecatedClassnames,
  colorNoHex,
  preferThemeColorClassnames,
} from './rules';

export const rules = {
  'no-deprecated-classnames': noDeprecatedClassnames,
  'color-no-hex': colorNoHex,
  'no-tailwind-brand-colors': preferThemeColorClassnames,
};
