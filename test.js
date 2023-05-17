const fs = require('fs');

fs.promises.readFile('test.json')
.then(data => {
  const obj = JSON.parse(data);
  obj.newField = 'new value'; //添加属性
  const newJson = JSON.stringify(obj); //将对象转成字符串
  // 写入到文件中
  fs.promises.writeFile('example.json', newJson)
    .then(() => {
      console.log('写入成功');
    })
    .catch(err => {
      console.error('写入失败', err);
    });
})
.catch(err => {
  console.error(err);
});
