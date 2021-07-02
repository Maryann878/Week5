// user.forEach(function(val, index, arr){
    // console.log (val)
// })

var users = [
    {name:'ben',
     age:16}, 
{name: 'Peace',
 age:22
}
]

for (let i = 0; i < users.length; i++)
 {console.log(users[i].age);
    console.log(users[i].name)
}

 users.forEach(function(val){
console.log(val.age)}
);

users.map(function(val){
    console.log('map', val.age);
}
    );



    for(var i = 0; i <= 15; i++)
    {if (i===0){
        console.log(i + 'ís even');
    }
    else if (i % 2 ===0) {

        console.log(i + 'is even');}
        
        else {console.log(i + 'is odd')}
    }