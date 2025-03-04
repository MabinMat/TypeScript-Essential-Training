interface Contact2 {
    id: number;
    name: string;
}

//Can use generics to make the function more flexible
function clone4<T>(source: T): T {
  return Object.apply({}, source);
}

const newCon: Contact2 = {
  id: 123, name:" Homer Simpson"};
const cloneCon = clone4(newCon);

const dateRange = {startDate: Date.now(), endDate: Date.now()};
const dateRangeCopy = clone4(dateRange); 
    