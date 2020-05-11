let array=[5,3,7,10,4,1,5];

const merge = (l,r) => {
    let newArr= [];
    
    while (l.length && r.length){
        if (l[0] < r[0]){
            newArr.push(l.shift())
        }
        else {
            newArr.push(r.shift())
        }
    }

    while (l.length){newArr.push(l.shift())}
    while (r.length){newArr.push(r.shift())}
    console.log('merge', newArr)
    return newArr;
}

const sort = arr => {
    if (arr.length < 2){
        return arr;
    }
    let m = Math.floor(arr.length/2)
    let l = arr.slice(0,m)
    let r = arr.slice(m)
    console.log('Split:', l, r)
    return merge(sort(l),sort(r))
}

console.log(sort(array));
