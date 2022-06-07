import { SVGProps } from './types'

export const Icon = ({ style, fill = '#0d0c22' }: SVGProps) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      d="M20 5.598 18.496 4 6.133 17.135V9.667H4V21h10.667v-2.267h-7.03L20 5.598Z"
      fill={fill}
    />
  </svg>
)

export default Icon
