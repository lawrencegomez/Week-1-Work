var x = prompt('Pick a number 1 -4')

var array = ['Lawrence', 'Tim', 'Maurice', 'Spencer', 'Matt', 'Jose', 'James', 'John'];

var myObject = {name: 'Lawrence',
                location: 'Santa Monica',
                weather: 'sunny',
                car: 'Ram 1500',
                bestFriend: 'Tim Carman',
                home: 'Playa Del Rey'
              }

var myArr = document.querySelector('#info')
var myHeader = document.querySelector('#friends')

if (x < 2) {

for (var i = 0; i < array.length; i ++) {
  console.log(array[i]);
  myHeader.innerHTML = 'These are some of my best friends:';
  myArr.innerHTML += ('<li>' + array[i] + '</li>');
}

}

else if (x < 3) {

var i = 0;
while (i < array.length) {
  console.log(array[i]);
  myHeader.innerHTML = 'These are some people that I know:';
  myArr.innerHTML += ('<li>' + array[i] + '</li>');
  i ++
}

}


else if (x < 4) {

array.forEach(function(yoyo){
  console.log(yoyo);
  myHeader.innerHTML = 'These are some people that I like:';
  myArr.innerHTML += ('<li>' + yoyo + '</li>');
})

}

else {

for(key in myObject) {
  console.log('My ' + key + ' is ' + myObject[key])
  myHeader.innerHTML = 'Some info about me:';
  myArr.innerHTML += ('<li>' + 'My ' + key + ' is ' + myObject[key] + '</li>')
}}
