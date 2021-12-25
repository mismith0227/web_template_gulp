import { text, color } from '@storybook/addon-knobs'

export const Template = () => {
  const title = text('Title', 'タイトル')

  return `
    <h1 class='c-title'>${title}</h1>
  `
}
