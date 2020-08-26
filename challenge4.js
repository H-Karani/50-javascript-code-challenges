//Print all the multiplication tables with numbers from 1 to 10
for(let i =1; i < 11; i++){
    for(let j = 1; j < 11; j++){
        const multipicant = i * j;
        console.log(`${i} * ${j} = ${multipicant}`);

    }
}

// for(let i =1; i < 11; i++){
//     printTable(i);
    

//     }

// function printTable(n){
//     for(let i =1; i <=10; i++){
//         const row = n + "*" + i + "=" + n * i;
//         console.log(row);


//     }
// }    