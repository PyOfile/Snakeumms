const { GRID_SIZE } = require('constants');


module.exports = {
    createGameState,
    gameLoop
}

function createGameState() {
    return {
        player: {
            pos:{
                x: 3,
                y: 10,
            },
            vel:{
                x: 1,
                y: 0,
            },
            snake:[
                {x: 1,y: 10},
                {x: 2,y: 10},
                {x: 3,y: 10},
            ],
        },
        food:{
            x: 7,
            y: 7,
        },
        gridsize: GRID_SIZE,
        active: true
    };
}

function gameLoop(state){

}

//video time 23:20/1:18:04