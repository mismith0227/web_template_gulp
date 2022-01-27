import { text } from '@storybook/addon-knobs'

export const HeadingH2 = () => {
  const title = text('Title', 'h2. Title')

  return `
    <h2 class="c-heading__h2">${title}</h2>
  `
}

export const HeadingH3 = () => {
  const title = text('Title', 'h3. Title')

  return `
    <h2 class="c-heading__h3">${title}</h2>
  `
}
