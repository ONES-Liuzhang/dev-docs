import { create } from '@storybook/theming'
import Logo from './public/ones.png'

export default create({
  base: 'light',
  brandImage: Logo,
  fontBase:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Robot, Helvetica Neue, Helvetica, Arial, sans-serif',
})
