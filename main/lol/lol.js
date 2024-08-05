function player(name, win, lose) {
  this.name = name;
  this.win = win;
  this.lose = lose;
  //  this.winrate = 100 * Math.round(win / (win + lose));  // 승률
  this.showWinrate = function (int) {
    return 100 * (this.win / (this.win + this.lose));
    console.log(100 * (this.win / (this.win + this.lose))); // 승률 계산;
  };
}

// function winrateCalculate(){

// }

// let p1 = new player("한빈", 2, 2);
// let p2 = new player("세현", 2, 5);
// let p3 = new player("재홍", 5, 2);
// let p4 = new player("재호", 5, 2);
// let p5 = new player("국현", 0, 2);
// let p6 = new player("희원", 2, 3);
// let p7 = new player("태원", 2, 0);
// let p8 = new player("제빈", 2, 5);
// let p9 = new player("진수", 5, 2);
// let p10 = new player("종혁", 3, 4);
// let p11 = new player("세훈", 5, 2);

let arr = [];
arr[0] = new player("한빈", 2, 2);
arr[1] = new player("세현", 2, 5);
arr[2] = new player("재홍", 5, 2);
arr[3] = new player("재호", 5, 2);
arr[4] = new player("국현", 0, 2);
arr[5] = new player("희원", 2, 3);
arr[6] = new player("태원", 2, 0);
arr[7] = new player("제빈", 2, 5);
arr[8] = new player("진수", 5, 2);
arr[9] = new player("종혁", 3, 4);
arr[10] = new player("세훈", 5, 2);

arr.sort((a, b) => a.showWinrate() - b.showWinrate());

for (let i = 0; i < arr.length; i++) {
  console.log(
    arr[i].name + ", 승률은 " + Math.floor(arr[i].showWinrate()) + "% 입니다."
  );
}

console.log("-----------------------------------");
console.log("현재 승률 1등은 " + arr[10].name + "입니다~!");


document.getElementById("output").innerHTML = output;