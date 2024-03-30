import { RuleTester } from 'eslint';

import { colorNoHex } from '../../src/rules/color-no-hex'; // Adjust this import path to where your rule is actually defined

const ruleTester = new RuleTester({
  // eslint-disable-next-line no-restricted-globals
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

ruleTester.run('color-no-hex', colorNoHex, {
  valid: [
    `const color = "blue";`,
    `const backgroundColor = "rgba(255, 255, 255, 0.5)";`,
    `const borderColor = 'var(--border-color)';`,
    // Template literals without hex colors
    `const boxShadow = \`5px 5px 5px var(--shadow-color)\`;`,
  ],
  invalid: [
    {
      code: `const color = "#abc";`,
      errors: [
        {
          message: `'#abc' Hex color values are not allowed. Consider using design tokens instead. For more information, visit: https://github.com/MetaMask/design-tokens or reach out to the design system team #metamask-design-system.`,
        },
      ],
    },
    {
      code: `const backgroundColor = "#123456";`,
      errors: [
        {
          message: `'#123456' Hex color values are not allowed. Consider using design tokens instead. For more information, visit: https://github.com/MetaMask/design-tokens or reach out to the design system team #metamask-design-system.`,
        },
      ],
    },
    // Testing template literals
    {
      code: `const borderColor = \`#abcdef\`;`,
      errors: [
        {
          message: `'#abcdef' Hex color values are not allowed. Consider using design tokens instead. For more information, visit: https://github.com/MetaMask/design-tokens or reach out to the design system team #metamask-design-system.`,
        },
      ],
    },
    {
      code: `const boxShadow = \`5px 5px 5px #888\`;`,
      errors: [
        {
          message: `'#888' Hex color values are not allowed. Consider using design tokens instead. For more information, visit: https://github.com/MetaMask/design-tokens or reach out to the design system team #metamask-design-system.`,
        },
      ],
    },
  ],
});
