export const WaterColor = () => {
    return (
<svg>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourseGraphic" stdDeviation="10" result="name" />
      <feColorMatrix in="name" type="matrix" values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -13" />
    </filter>
  </defs>
</svg>
    )
}