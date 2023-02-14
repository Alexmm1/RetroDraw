import React from 'react';

/**
 * The Cell component represents the fundamental "clickable object" in
 * retro-draw, there will be <Cell /> in both Palette and Grid.
 * 
 * Props passed in will include:
 * - color, which is the background color of the cell
 * - isActive, which will be set only on cells in the Palette
 * - handleClick, which will be a function to run when the cell has been clicked on 
 */
const Cell = (props) => {
 
  return <div className={`cell ${props.isActive? props.color : null}`} ></div>
}

export default Cell;