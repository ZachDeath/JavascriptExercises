var array1 = [1, 2, 3];
var array2 = [2, 20, 1];

function merge_array(array1, array2) {
    combinedArray = array1.concat(array2)
    console.log("These are the arrays combined " + combinedArray)
    sortedArray = combinedArray.filter((item,pos) => combinedArray.indexOf(item) === pos)
    console.log("These are the arrays without duplicates " + sortedArray)
}

merge_array(array1,array2)