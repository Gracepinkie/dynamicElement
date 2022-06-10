// let btnResult = document.querySelector('#result');
// btnResult.addEventListener('click',()=>{
//     // Make use of eval() function
//     let total = 0;
//     try{
//         // First operand -> value
//         let fstOp =
//         parseInt(
//         document.getElementById('numb1').value);
//         //Operator
//         let ops =
//         document.getElementById('operator').value;
//         // Second operand
//         let secOp =
//         parseInt(
//         document.getElementById('numb2').value);
//         //
//         switch(ops) {
//             case '+':
//                 total = eval(fstOp.concat(ops,secOp));
//             break
//             case '-':
//                 total = eval(fstOp.concat(ops,secOp)) ;
//             break
//             case '*':
//                 total = eval(fstOp.concat(ops,secOp));
//             break
//             case '/':
//                 total = eval(fstOp.concat(ops,secOp));
//             break
//         }
//         // Display the result
//         document.getElementById('output').innerText =
//         `Result is ${total}`;
//     }catch(e) {
//         document.getElementById('output').innerText = 'An error occurred';
//     }
// })
// let smartPeople = [
//     'Sheldon Cooper', 'Leonard Hofstater',
//     'Raj Koothapal', 'Howard Wolowitz',
//     'Penny', 'Chewbacca'
// ];

// let wrapper = 
//     document.getElementById('smartPeople')
//     smartPeople.forEach((item)=>{
//     wrapper.innerHTML +=
//      `<li>${item}</li>`
//  });

//  Create
function smartPeople() {
    // CreateElement('ul')
    let ul = document.createElement('ul');
    document.getElementsByTagName('body')[0].appendChild(ul);
    ul.innerText = 'Sheldon Cooper', 'Leonard H', 'Raj K' ,'Howard W';

}
// Call a function
smartPeople();




