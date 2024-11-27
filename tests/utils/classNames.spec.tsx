import { classNames } from '../../src/utils/classNames'

describe('classNames', () => {
  it('returns a string of classes', () => {
    expect(classNames('class1', 'class2')).toBe('class1 class2')
  })
  it('ignores undefined', () => {
    expect(classNames('class1', undefined, 'class2')).toBe('class1 class2')
  })
  it('returns a string of classes with object', () => {
    expect(classNames({ class1: true, class2: false })).toBe('class1')
  })
})
