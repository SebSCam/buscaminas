import React, { useEffect, useState } from "react";
import CreateBoard from "../utils/CreateBoard";
import { revealed } from "../utils/Reveal";
import Cell from "./Cell";

const Board = () => {
    const [board, setBoard] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [mineLocation, setMineLocation] = useState([]);

    const ROWS = 10;
    const COLUMNS = 10;
    const MINES = 20;

    useEffect(() => {
        function freshBoard() {
            const newBoard = CreateBoard(ROWS, COLUMNS, MINES);
            setBoard(newBoard.board);
            setMineLocation(newBoard.mineLocation);
            setNonMineCount(ROWS * COLUMNS - MINES);
        }
        freshBoard();
    }, []);

    // click derecho
    const updateFlag = (e, x, y) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(board));
        newGrid[x][y].flagged = true;
        setBoard(newGrid);
    }

    // click inquierdo
    const revealCell = (x, y) => {
        let newGrid = JSON.parse(JSON.stringify(board));
        if(newGrid[x][y].revealed) return;
        if(newGrid[x][y].value === "X") {
            mineLocation.forEach(x => {
                newGrid[x[0]][x[1]].revealed = true;
            })
            setBoard(newGrid);
            alert("F");
        } else {
            let revealZeros = revealed(newGrid, x,y, nonMineCount);
            setBoard(revealZeros.arr);
            setNonMineCount(revealZeros.newNonMinesCount);
        }
    }

    if (!board) {
        return <div>loading...</div>
    }

    return ( 
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}    >
            {board.map((row, index) => {
            return (
            <div style={{display: "flex"}} key= {index}>
                {row.map((cell, index2)=>{
                    return <Cell details={cell} updateFlag ={updateFlag} revealCell = {revealCell} key={index2}/>
                })}
            </div>
            )
        }) }
        </div>    
    )

}

export default Board;