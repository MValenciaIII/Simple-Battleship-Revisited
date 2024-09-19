//* Step 1: Create the battleship Board
//? Make the amount of rows and squares needed. 
//* Step 2: Randomizer to select a square and addeventListners



function generateBoard(rows, columns) {
    let documentBoard = document.querySelector(".battleshipBoard")



    //* Work on the creation of elements first

    for (let i = 0; i < rows; i++) {

        //* Creating the Row for the squares
        let row = document.createElement('div')
        row.classList.add("row")
        row.classList.add("squareRow");
        //! Appending row to HTML page LINE 9
        documentBoard.append(row);
        
        for (let i = 0; i < columns; i++) {
            
            //* Creating columns for Squares
            let colSquares = document.createElement("div")
            colSquares.classList.add("col-1");
            //! Appending to LINE 18 (ROW)
            row.append(colSquares);
        
            let square = document.createElement("div");
            square.classList.add("square");
            //! Appendind to LINE 25 (Column)
            colSquares.append(square);
            
        } //* END OF SECOND FOR LOOP

    } //* END OF FIRST FOR LOOP

    addBattleshipLogic();
} //* END OF FUNCTION

generateBoard(5, 9);

function addBattleshipLogic() {
    let getAllSquares = document.querySelectorAll(".square");
    console.log(getAllSquares);
    let correctSquare = Math.floor(Math.random(0) * getAllSquares.length);
    console.log(correctSquare)


    for (let i = 0; i < getAllSquares.length; i++) {
        const currentSquare = getAllSquares[i];
        

        if (i == correctSquare) {
            getAllSquares[i].addEventListener("click", () => {
                getAllSquares[i].classList.add("correct");
            })
        } else {
            getAllSquares[i].addEventListener("click", () => {
                getAllSquares[i].classList.add("incorrect");
            })
        }
    }
}



