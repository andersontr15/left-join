/* Simple left join in JavaScript 
  Written by Theodore Anderson
  July 21 2018
*/

const left_join = (table1 = [], table2 = [], key = '') => {
  return table1.map(table1Row => {
    const matchInTableTwo = table2.find(
      table2Row => table2Row.id === table1Row[key],
    );
    if (matchInTableTwo) {
      return {
        ...table1Row,
        ...matchInTableTwo,
      };
    } else {
      return table1Row;
    }
  });
};

module.exports = left_join;