import React from 'react'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1743-1742&mode=dev',
  },
}

const meta = {
  title: 'Design System/Styles',
  parameters: figmaPrimaryDesign,
}

export default meta

export const Typography = {
  render: () => (
    <div
      style={{
        fontStyle: '1rem',
        fontVariant: 'normal',
        fontWeight: 400,
        fontFamily: 'Mulish, sans-serif',
        color: '#444444FF',
        fontSize: '1rem',
        lineHeight: 'normal',
      }}
    >
      <h1>Typography</h1>
      <p>ℹ️ The typography defined styles can be checked on the Design tab.</p>

      <p>On each component, you can check the typography styles live.</p>
    </div>
  ),
}
