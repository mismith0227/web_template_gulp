import { text, color } from '@storybook/addon-knobs'
import sampleImage from '../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'

export const Template = () => {
  const title = text('Title', 'Sample Title')
  const src = text(
    'Background Image',
    '../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
  )

  return `
    <div class="c-hero" style='background-image: url(${sampleImage});'>
      <h2 class="c-hero__title">${title}</h2>
    </div>
  `
}
