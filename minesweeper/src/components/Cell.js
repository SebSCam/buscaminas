import React from "react";

const Cell = ({details, updateFlag, revealCell }) => {

    const style = {
        cellStyle: {
            color: details.revealed ? "black" : "white",
            width: 40,
            background: details.revealed ? (details.value === "X" ? "red" : "white") : "black",
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 800,
            fontSize: 30,
            cursor: "pointer",
            border:`1px solid ${details.revealed ? "black" : "white"}` 
        }
    }

    return (
        <div 
            onContextMenu={(e) => updateFlag(e, details.x, details.y)}
            onClick={() => revealCell(details.x, details.y)} 
            style={style.cellStyle}>
            {details.revealed ? details.value:""}
        </div>
    )
    
}

export default Cell;