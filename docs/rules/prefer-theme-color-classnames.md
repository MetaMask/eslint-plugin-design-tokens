# Encourage the Use of Theme Color Classnames (`@metamask/design-tokens/prefer-theme-color-classnames`)

This rule encourages the use of theme-specific color classnames instead of hardcoded color names, promoting a centralized approach to color management via [design tokens](https://github.com/MetaMask/design-tokens). By advocating for the use of [design tokens](https://github.com/MetaMask/design-tokens) for colors, this rule helps ensure consistency, design system alignment, scalability, and ease of maintenance across your project's UI.

## Rule Details

The `prefer-theme-color-classnames` rule is aimed at encouraging the use of theme-specific CSS class names over direct references to color names. This practice supports theming, reusability, and easier updates to the color palette.

Examples of **incorrect** code for this rule:

```jsx
// In a JSX file
<div className="bg-slateGray-500">...</div>
<div className="text-blue-600">...</div>
```

Examples of **correct** code for this rule:

```jsx
// Using design token CSS variables
<div className="bg-primary-default">...</div>
<div className="text-error-default">...</div>
```

## Options

This rule does not accept any options. Its primary purpose is to encourage the use of theme-specific color classnames instead of hardcoded color names.

## Example Configuration

```json
{
  "@metamask/design-tokens/prefer-theme-color-classnames": "warn"
}
```

## When Not To Use It

You might choose not to enable this rule if:

- Your project has not adopted the MetaMask design system.
- There are specific cases where the direct usage of hardcoded color names is necessary and cannot be replaced with themed alternatives. This includes legacy parts of your application or during a gradual migration to design tokens. In such cases, you can disable the rule for specific files or folders by adding overrides in your ESLint configuration. For example, to disable the rule in legacy files or folders, you can use:

```json
"overrides": [
  {
    "files": ["legacy/**/*.jsx", "another/path/to/specific/files/*"],
    "rules": {
      "@metamask/design-tokens/prefer-theme-color-classnames": "off"
    }
  }
]
```

This configuration allows for selective application of the rule, accommodating necessary exceptions.

Adopting this rule helps ensure that your project's color definitions are centralized and easily manageable, facilitating simpler adaptations or re-theming of your application as needed.
