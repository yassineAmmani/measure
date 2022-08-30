
var gameOfLife = function(board) {
var T = [...Array(board.length )].map(_=>Array(board[0].length).fill(0)) 
var ind = function(index){
    if (index == 0){
        return 0}
        else{
             return (index-1)
    } 
}
var number = function(index,jndex){
    let k=0
    for(let i= ind(index); i<board.length && i<index+2; i++){
        for(let j= ind(jndex); j< board[0].length && j<jndex+2; j++)
            if(i==index  && j == jndex){
            }else{
                k=k+board[i][j]
            }
    }
    T[index][jndex]=k
}
var tab = function(){
    let i,j
    for(i=0; i< board.length ; i++){
            for(j=0; j<board[0].length ; j++){
                number(i,j)
            }
    }
}
    tab()
    for(i=0; i< board.length ; i++){
        for(j=0; j<board[0].length ; j++){
            if(board[i][j] == 1 && T[i][j]<2){
                board[i][j] = 0
            }else if(board[i][j] == 1 && (T[i][j]==2 || T[i][j]==3) ){
                board[i][j] = 1
            }else if(board[i][j] == 1 && T[i][j]>3  ){
                board[i][j] = 0
            }else if(board[i][j] == 0 && (T[i][j]==3) ){
                board[i][j] = 1
            }
        }
}
console.log(board)
};

gameOfLife( [[0,0,0,0,0,0],[0,0,1,1,0,0],[0,1,0,0,1,0],[0,0,1,1,0,0],[0,0,0,0,0,0]]    )
//tab()