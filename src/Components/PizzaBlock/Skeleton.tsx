import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="131" r="125" /> 
    <rect x="0" y="283" rx="10" ry="10" width="280" height="27" /> 
    <rect x="0" y="324" rx="10" ry="10" width="280" height="88" /> 
    <rect x="2" y="428" rx="10" ry="10" width="92" height="27" /> 
    <rect x="127" y="424" rx="31" ry="31" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton