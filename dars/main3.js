function searchByCategoryName(arr, categoryName) {
  if (categoryName == "name"){
    var newArr = arr.sort((a,b)=>{
        return a[categoryName].localeCompare(b[categoryName]);
    });
    
  }
  var newArr = arr.sort((a, b) => {
    return a[categoryName] - b[categoryName];
  });
  return newArr;
}

let arr = [
  { id: 1, name: "Charlie", age: 30 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Alice", age: 25 },
];
console.log(searchByCategoryName(arr,"name"));
