const testList1 = [1, 2, 3];
const testList2 = ['a', 'b', 'c'];

function ziplist(list1, list2) {
  const result = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      result.push(list1[i]);
      result.push(list2[i]);
    }
  }
  if (list1.length > list2.length) {
    for (let i = 0; i < list2.length; i++) {
      result.push(list1[i]);
      result.push(list2[i]);
    }
    for (let j = (list1.length - list2.length); j < list1.length; j++) {
      result.push(list1[j]);
    }
  }
  if (list1.length < list2.length) {
    for (let i = 0; i < list1.length; i++) {
      result.push(list1[i]);
      result.push(list2[i]);
    }
    for (let j = (list2.length - list1.length); j < list2.length; j++) {
      result.push(list2[j]);
    }
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(ziplist(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));
