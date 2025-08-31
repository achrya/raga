# Font Files

This directory should contain the following font files:

## Required Fonts:

1. **Inter-Variable.woff2** - Inter variable font (weights 100-900)
2. **JetBrainsMono-Variable.woff2** - JetBrains Mono variable font (weights 100-900)  
3. **PlayfairDisplay-Variable.woff2** - Playfair Display variable font (weights 400-900)

## How to Add Fonts:

### Option 1: Download from Official Sources
- **Inter**: https://rsms.me/inter/
- **JetBrains Mono**: https://www.jetbrains.com/lp/mono/
- **Playfair Display**: https://fonts.google.com/specimen/Playfair+Display

### Option 2: Use Google Fonts (Already configured)
The fonts are already configured to fall back to Google Fonts if the local files are not found.

### Option 3: Use CDN Links
You can also use CDN links by updating the `_fonts.scss` file:

```scss
@font-face {
  font-family: "InterVar";
  src: url("https://fonts.googleapis.com/css2?family=Inter:wght@100;900&display=swap");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

## Current Configuration:
- Fonts are configured to use relative paths: `../assets/fonts/`
- Google Fonts are imported as fallbacks in `styles.scss`
- Font display is set to `swap` for better performance
