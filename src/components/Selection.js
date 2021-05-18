import React, { useState } from 'react';
import '../styles/Child.css';
const Selection = (params) => {
  const {applyColor} = params;
  const [styleColor, updateSelectionStyle] = useState({ background: '' })
  console.log(styleColor);
  return (
    <div className="fix-box" onClick={()=>applyColor(updateSelectionStyle)} style={{background:styleColor.background}}>
      <h2 className="subheading">Selection</h2>
    </div>
  )
}
export default Selection;
