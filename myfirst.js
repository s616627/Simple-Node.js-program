const fs = require('fs');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const dataArray = data.split(" ");

  let sum = 0

  for (let i = 0; i < dataArray.length; i++) {
    sum = sum + parseInt(dataArray[i])
}

  console.log(sum);
});
