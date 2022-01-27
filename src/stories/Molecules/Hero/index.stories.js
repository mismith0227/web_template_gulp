import { withKnobs } from '@storybook/addon-knobs'
import { Template } from './index.js'

import README from './README.md'

const params = {
  title: 'Molecules/Hero',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

export const Hero = () => {
  return Template()
}

export default params
