import { act, render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import * as components from './library'
import { composeStories } from './utils/storybookHelpers'

expect.extend(toHaveNoViolations)

const stories = Object.values(components).map((component) => {
  return {
    title: component.default.title,
    stories: composeStories(component as any),
  }
})

stories.forEach(({ title, stories }) => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn()
    HTMLDialogElement.prototype.showModal = jest.fn()
    HTMLDialogElement.prototype.close = jest.fn()
  })
  const variations = Object.entries(stories)

  variations.forEach(([variationName, story]: [string, any]) => {
    it(`${title} ${variationName} should be accessible`, async () => {
      const { container } = render(story())

      await act(async () => {
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })
  })
})
