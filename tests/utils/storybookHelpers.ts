import * as React from 'react'
/**
 * @storybook/react provides the composeStories utility that helps convert CSF stories from a test file
 * into renderable elements that can be reused in your Node tests with JSDOM.
 *
 * Due to Storybook 10 change to ESM only and CommonJS support drop breaking changes,
 * something on composeStories is broken related to this and when running the a11y tests, a modules error
 * is thrown.
 *
 * The following helper is a working workaround to the original composeStories, making the a11y tests work again.
 * Once Storybook provides a fix for this, we can drop this helper and use the original composeStories from
 * @storybook/react.
 */

export function composeStories(csfModule: Record<string, any>) {
  const result: Record<string, (...args: any[]) => any> = {}
  const meta = csfModule.default || {}
  const metaComponent = meta.component
  const metaArgs = meta.args || {}

  Object.keys(csfModule).forEach((key) => {
    if (key === 'default') return
    const exported = csfModule[key]

    // Story object with a `render` function (CSF v3 render)
    if (exported && typeof exported.render === 'function') {
      result[key] = (props: any = {}) =>
        exported.render({ ...(exported.args || {}), ...(props.args || {}) })
      return
    }

    // CSF named export objects that rely on `default.component`
    if (metaComponent && exported && typeof exported === 'object') {
      result[key] = (props: any = {}) =>
        React.createElement(metaComponent, {
          ...metaArgs,
          ...(exported.args || {}),
          ...(props.args || {}),
        })
      return
    }
  })

  return result
}
