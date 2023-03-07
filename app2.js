function towerBuilder(nFloors) {
    //result = nFloors * 2 - 1
    let arr = [];
    for (let i = 0; i < nFloors; i++) {
        arr.push("")
        for (let i = 0; i < nFloors * 2 - 1; i++) {
            arr[arr.length - 1] += " "
        }
    }

    return arr
}

console.log(towerBuilder(3));