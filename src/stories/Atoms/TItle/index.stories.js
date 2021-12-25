import { withKnobs } from '@storybook/addon-knobs'
import { Template } from './index.js'

import README from './README.md'

const params = {
  title: 'Atoms/Title',
  decorators: [withKnobs],
  parameters: {
    notes: { README }
  }
}

export const Title = () => {
  return Template()
}

export default params
