import React from 'react';

const HexInput = props => {
  function onChange(e) {
    props.onChange(e.currentTarget.value);
  }

  return (
    <input
      value={props.value}
      onChange={onChange}
      maxLength={7}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000"
    />
  );
};

export default HexInput;