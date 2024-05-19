import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'

// Filter out preset tokens that are not needed
const { fontSizes, colors, fontWeights, letterSpacings, animations, blurs, shadows, easings, durations, borders, ...pandaPresetRest } = pandaPreset.theme.tokens

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-base'],

  // Where to look for your css declarations
  include: ['./app.vue', './components/**/*.{js,jsx,ts,tsx,vue}', './pages/**/*.{js,jsx,ts,tsx,vue}', './stories/**/*.{js,jsx,ts,tsx,vue}'],

  // Files to exclude
  exclude: [],

  eject: true,

  globalCss: {
    extend: {
      'html, body': {
        fontFamily: 'body',
        lineHeight: '1'
      },
      'h1, h2, h3': {
        fontWeight: 'medium',
      },
      'h1': {
        lineHeight: {base: '1.5', md: '2'},
        fontSize: { base: '1.95rem', md: '3.05rem' },
      },
      h2: {
        lineHeight: '1.5',
        fontSize: { base: '1.56rem', md: '2.44rem' },
        letterSpacing: '2px',
      },
      h3: {
        lineHeight: '1',
        fontSize: '1.25rem',
        letterSpacing: '5px',
      }
    },

  },

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: pandaPreset.theme.breakpoints,
      tokens: {
        ...pandaPresetRest,
        fonts: {
          body: { value: 'var(--fonts-jost)' },
        },
        fontSizes: {
          'base': { value: '1rem' },
          'lg': { value: '1.25rem' },
          'xl': { value: '1.56rem' },
          '2xl': { value: '1.95rem' },
          '3xl': { value: '2.44rem' },
          '4xl': { value: '3.05rem' },
        },
        fontWeights: {
          regular: { value: '400' },
          medium: { value: '500' },
          bold: { value: '700' },
        },
        lineHeights: {
          1: { value: '26px' },
          1.5: { value: '39px' },
          2: { value: '52px' },
        },
        spacing: {
          1: { value: '26px' },
          2: { value: '52px' },
        },
      },
    },
  },
  
  // The output directory for your css system
  outdir: 'styled-system',
})
