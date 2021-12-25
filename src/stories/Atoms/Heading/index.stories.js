import { withKnobs } from '@storybook/addon-knobs'
import { HeadingH2, HeadingH3 } from './index.js'

import README from './README.md'

const params = {
  title: 'Atoms/Heading',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

export const H2 = () => {
  return HeadingH2()
}

export const H3 = () => {
  return HeadingH3()
}

export default params
