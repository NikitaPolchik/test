function towerBuilder(nFloors) {
    //result = nFloors * 2 - 1
    let arr = [];

    for (let i = 0; i < nFloors * 2 - 1; i++) {
        arr.push("*")
    }
    return arr.join("")

}

console.log(towerBuilder(5));