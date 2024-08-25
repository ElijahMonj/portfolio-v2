
const Logo = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 375 375"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M44.012 6.492H331v362.082H44.012Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path d="m78.215 325.547 67.539 43.117L286.34 310.04c36.086-15.144 44.64-50.871 44.64-90.078Zm37.246-158.05 170.879-71.09c36.086-15.145 44.64-50.872 44.64-90.075L44.012 126.336v97.828l71.449-29.926ZM61.113 315.038l8.551 5.074 81.16-33.77-8.55-5.437-8.188-5.433-8.55-5.075 65.655-27.535c36.086-15.148 44.637-50.511 44.637-89.715L44.012 233.152v71.016l8.55 5.437Zm0 0" />
    </g>
  </svg>
)
export default Logo
