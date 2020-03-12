// var str="hello";
// console.log (str);

// const str1 = 'Breaded Mushrooms';
// console.log(str1.padEnd(25, '!'));
// const str2 = '200';
// console.log(str2.padEnd(5));

// values = []
// for (let x = 0; x < 10; x++){
//  values.push([
//   2 ** x,
//   2 * x ** 2
//  ])
// }
// console.table(values);

// var item = ['1','2','3'];
// var copy=[];
// /*for(var i=0;i<item.length;i++)
// {
//     copy.push(item[i]);
// }
// console.log(copy);*/

// item.forEach(
//     copy.push(item)
//   );
//   console.log(copy);

//   var number= ['1','522','3','4','5','15','-4','5'];
//   var arr =[];
//   for(var i=0; i<number.length;i++)
//   {
//       if(number[i]>10)
//       {
//           arr.push(number[i]);
//       }
//   }
//   console.log(arr);

//   var number= [1,5,8,9,6,4,9,1];
//   var inc = [];
//   var rem = [];
//   for(var i=0; i<number.length;i++)
//     {
//      number[i]= number.includes
//     }


   

  
    // function quesition3(my_arr) {

       
    //     var removed = [];
    //     var duplicate = [];
    
    //     for (var i = 0; i < my_arr.length; i++) {
    //         if (i == 0) {
    //             removed.push(my_arr[i])
    //         } else {
    //             if (removed.includes(my_arr[i])) {
    //                 duplicate.push(my_arr[i])
    //             } else {
    //                 removed.push(my_arr[i])
    //             }
    //         }
    
    //     }
    //     console.log(duplicate,removed);
    
    // }
    
    // quesition3([1, 2, 3, 4, 5, 6, 7, 8,8,8, 9,9,9,9,9, 9]);


    var arr = [ 4, 5, 5, 5, 9,9,9,9,2, 2, 2, 2,2,2,2];
    var a = [], b = [], pre; 
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] != pre ) {
            a.push(arr[i]);
            b.push(1);
        } else {
           var c = b[b.length-1]++;
          // console.log(c);
        }
        pre = arr[i];
        console.log(pre);
    }
console.log(a+" "+b);


