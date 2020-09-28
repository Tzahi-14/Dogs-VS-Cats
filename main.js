const renderer = new Renderer()
const boardGame = new playerMatrix()

$("#load-board").on("click", function () {
    boardGame.playersScore.player1Score=0
    boardGame.playersScore.player2Score=0
    const rows = $("#rows").val()
    const columns = $("#columns").val()
    $("#rows").val("")
    $("#columns").val("")
    const coins = Math.floor((rows*columns)/5)
    const walls = Math.floor((rows*columns)/10)
    boardGame.loadBoard(rows, columns)
    boardGame.player1(0, 0, 1)
    boardGame.player2(rows, columns, 2)
    boardGame.addingCoins(rows, columns, coins)
    boardGame.addWalls(rows, columns, walls)
    $(".board").css("grid-template-columns", `repeat(${rows}, 1fr)`)
    renderer.renderBoard(boardGame.matrix)
    renderer.renderScores(boardGame.playersScore)
    // boardGame.print()
    moveplayers()
})

const moveplayers = function () {
    $(document).keypress(function (e) {
        let move = ""
        let player = 0
        if (e.which == 119) {
            move = "up"
            player = 1
        }
        else if (e.which == 97) {
            move="left"
            player=1
        }
        else if (e.which == 115) {
            move="down"
            player=1
        }
        else if (e.which == 100) {
            move="right"
            player=1
        }
        else if (e.which == 53) {
            move="up"
            player=2
        }
        else if (e.which == 49) {
            move="left"
            player=2
        }
        else if (e.which == 50) {
            move="down"
            player=2
        }
        else if (e.which == 51) {
            move="right"
            player=2
        }
        else{
            console.log("unvalid key")
        }
        boardGame.movePlayer(player, move)
        renderer.renderBoard(boardGame.matrix)
        renderer.renderScores(boardGame.playersScore)
        endGame()
    })

    const endGame = function(){
        if(boardGame.playersScore.player2Score===50 ||boardGame.playersScore.player1Score===50){
            alert `game end, start new one`
            location.reload()
        }
    }
}

    Handlebars.registerHelper("icons", function(property){
        let newIcon = ""
        if(property=="1"){
            newIcon +=`<i class="fas fa-dog fa-5x"></i>`
        }
        else if (property=="2"){
            newIcon +=`<i class="fas fa-cat fa-5x"></i>`
        }
        else if (property==="c"){
            newIcon +=`<i class="fas fa-bone fa-5x"></i>`
        }
        else if (property==="w"){
            newIcon +=`<i class="fas fa-angry fa-5x"></i>`
        }
        // else{
        //     newIcon= `<i class="far fa-circle fa-5x"></i>`
        // }
        else{
            newIcon= ""
        }
        return new Handlebars.SafeString(newIcon)
    })
