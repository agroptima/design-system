import React from 'react'
import { Check } from '../../icons'

interface CheckboxIconProps extends React.SVGProps<SVGSVGElement> {
  fill: string
  stroke: string
}

function CheckboxSVG({ fill, stroke, children, ...props }: CheckboxIconProps) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z"
        fill={stroke}
      />
      {children}
    </svg>
  )
}

function CheckPath({ fill }: { fill: string }) {
  return (
    <path
      d="m7.085 13.699-3.793-3.98L2 11.063 7.085 16.4 18 4.946 16.718 3.6 7.085 13.699Z"
      fill={fill}
    />
  )
}

function LinePath({ fill }: { fill: string }) {
  return <path d="M18 10.8H2V8.4h16v2.4Z" fill={fill} />
}

function CheckboxUncheckedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <CheckboxSVG
      fill="var(--neutral-white)"
      stroke="var(--neutral-color-500)"
      {...props}
    />
  )
}

function CheckboxCheckedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <CheckboxSVG
      fill="var(--primary-color-600)"
      stroke="var(--primary-color-600)"
      {...props}
    >
      <CheckPath fill="var(--neutral-white)" />
    </CheckboxSVG>
  )
}

function CheckboxDisabledIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <rect
        width="20"
        height="20"
        x=".5"
        y=".5"
        fill="#f3f3f5"
        stroke="#c3c7cf"
        rx="1.5"
      />
      {props.children}
    </svg>
  )
}

function CheckboxDisabledCheckedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <CheckboxDisabledIcon {...props}>
      <CheckPath fill="#c3c7cf" />
    </CheckboxDisabledIcon>
  )
}

function CheckboxDisabledIndeterminateIcon(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <CheckboxDisabledIcon {...props}>
      <LinePath fill="#c3c7cf" />
    </CheckboxDisabledIcon>
  )
}

function CheckboxIndeterminateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <CheckboxSVG
      fill="var(--primary-color-600)"
      stroke="var(--primary-color-600)"
      {...props}
    >
      <LinePath fill="#F3F3F3" />
    </CheckboxSVG>
  )
}

function CheckboxUncheckedHoverIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <CheckboxSVG
      fill="var(--neutral-white)"
      stroke="var(--primary-color-600)"
      {...props}
    />
  )
}

export {
  CheckboxCheckedIcon,
  CheckboxDisabledCheckedIcon,
  CheckboxDisabledIcon,
  CheckboxDisabledIndeterminateIcon,
  CheckboxIndeterminateIcon,
  CheckboxUncheckedHoverIcon,
  CheckboxUncheckedIcon,
}
