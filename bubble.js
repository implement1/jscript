var bubble = function () {
    var length = array.length;
    for (var i = 0; i <= length; i++) {
        for (var j = 0; j <= length-1-i; j++) {
            if (array[j] > array[j+1]) {
                swap(j, j+1);

            }
        }
    }
}

var swap = function (index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
} 

//var array = [5, 98, 43, 0, 2, 6];
//array.bubble();
var array = [5, 98, 43, 0, 2, 75, 76];
bubble(array);
console.log (array);