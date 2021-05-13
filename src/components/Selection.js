import React from 'react';
const Selection = (params) => {
  const { key, applyColr } = params;
  return (
    <div className="fix-box" style={{background:applyColr}}>
      <h2 className="subheading">Selection</h2>
    </div>
  )
}
export default Selection;
