function mergeSort(array)
{

    if (array.length < 2)
    {
        return array;
    }
    else {
    let middleIndex = Math.ceil(array.length / 2);
        //get first half of the array
        let firstHalfRec = mergeSort(array.slice().splice(0, middleIndex));
        //get second half of the array   
        let secondHalfRec = mergeSort(array.slice().splice(middleIndex));
        const arrayLength = array.length;
        let arrayClone = []
    for (let i = 0; i < arrayLength; i++)
    {
    if (firstHalfRec.length === 0)
    {
        arrayClone.push(...secondHalfRec);
        break;
    }
    else if (secondHalfRec.length === 0)
    {
        arrayClone.push(...firstHalfRec);
        break;
    }
    else if (firstHalfRec[0] <= secondHalfRec[0])
    {
       
        arrayClone.push(firstHalfRec.shift());

    }
    else if (secondHalfRec[0] <= firstHalfRec[0])
    {
      arrayClone.push(secondHalfRec.shift());
    }
  }
  array = arrayClone
    return array;
    }
}
let meow = [2,4,5,1,32,2,4,5,6,6,1,2,3,432,5,6,7,9,2323,13,123,42134424242]
let meow2 = [2,4,5,1,42,4,23,2,3,5,6]
let meow3 = [6,4,3,2,1,5]
console.log(mergeSort(meow))
console.log(mergeSort(meow2))
console.log(mergeSort(meow3))