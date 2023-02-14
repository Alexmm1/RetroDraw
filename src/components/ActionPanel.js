import React from 'react';

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList } from '../utils';

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
const ActionPanel = (props) => {
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */
  const activeColor = props.activeColor
  const cellList = props.cellList
  const setCellList = props.setCellList

  function onClear(){
    const newCellList = buildCellList();
    setCellList(newCellList)
  }
  function onFill(){
    const newCellList = buildCellList();
    for(let i = 0; i < newCellList.length; i++){
      newCellList[i].color = activeColor
    }
    setCellList(newCellList)
  }
  function onEmpty(){
    const newCellList = buildCellList();
    for(let i = 0; i < newCellList.length; i++){
      console.log()
      if(cellList[i].color === null){
        newCellList[i].color = activeColor
      }else{
        newCellList[i].color = cellList[i].color
      }
    }
    setCellList(newCellList)
  }

  return <div className="action-panel">
    {
      
    /* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList
    */

    }
    <button onClick={onClear}>clear all</button>
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    */}
    <button onClick={onFill}>fill all</button>
    {/* 
      This button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */}
    <button onClick={onEmpty}> fill empty</button>
  </div>
}

export default ActionPanel;