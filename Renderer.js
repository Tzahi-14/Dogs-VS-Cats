class Renderer {
    constructor() {

    }

    renderBoard(matrix) {
        $(".board").empty()
        const source = $("#board-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({matrix})
        $(".board").append(newHtml)
        // matrix.forEach(element => {
        //     const newHtml = template({ element })
        //     $(".board").append(newHtml)
        // });
    }
    
    renderScores(playersScore) {
        $(".scores").empty()
        const source = $("#scores-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template(playersScore)
        $(".scores").append(newHtml)
    }
}