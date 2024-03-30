# Prevent the use of static hex color values (`@metamask/design-tokens/color-no-hex`)

This rule discourages the direct use of hexadecimal color codes in your styles, promoting the adoption of a centralized approach to color management via [design tokens](https://github.com/MetaMask/design-tokens) or variables. By enforcing the use of [design tokens](https://github.com/MetaMask/design-tokens) for colors, this rule aids in ensuring consistency, scalability, and ease of maintenance across your project's UI.

## Rule Details

The `color-no-hex` rule is aimed at encouraging the use of abstracted color definitions, such as [design tokens](https://github.com/MetaMask/design-tokens) or CSS variables, instead of hardcoded hexadecimal color values. This practice facilitates theming, reusability, and easier updates to the color palette.

Examples of **incorrect** code for this rule:

```css
/* Using hex color values directly */
.selector {
  color: #e06470;
}
```

```jsx
// In a JSX file
<div style={{ color: '#E06470' }}>...</div>
```

Examples of **correct** code for this rule:

```css
/* Using CSS variables */
:root {
  --error-color: #e06470;
}

.selector {
  color: var(--error-color);
}
```

```jsx
// In a JSX file
<div style={{ color: 'var(--error-color)' }}>...</div>
```

## Options

This rule does not accept any options. Its sole purpose is to flag the use of inline hexadecimal color values in favor of abstracted color definitions like CSS variables or [design tokens](https://github.com/MetaMask/design-tokens).

## Example Configuration

```json
{
  "@metamask/design-tokens/color-no-hex": "warn"
}
```

## When Not To Use It

You might choose not to enable this rule if:

- Your project has not adopted a design system or does not use CSS variables/[design tokens](https://github.com/MetaMask/design-tokens) for colors.
- There are specific cases where direct hexadecimal color usage is necessary and cannot be abstracted (although these cases should be rare and well-justified).

Adhering to this rule helps ensure that your project's color definitions are centralized and easily manageable, making it simpler to adapt or re-theme your application as needed.
