// Spread Array
// De forma simple ele expande o array
//1)
var a = [1, 2];
var b = [1, 2, a];
var c = [1, 2, ...a]

console.log(b)
console.log(c)

//2)
var arr = [2,4,8,6,0]
console.log(Math.max(...arr));
console.log(Math.max(arr));
// Note que console.log(Math.max(arr)) nao funciona
// porque max recebe valores separado por virgulas

//3) Copia sem referencia
var arr = [1,2,3,4]
var arr2 = [...arr]
arr2.push(4)
console.log(arr)
var arr3 = arr
arr3.push(4)
console.log(arr)

/* Note:
https://stackoverflow.com/questions/31048953/what-do-these-three-dots-in-react-do
<Modal {...this.props} title='Modal heading' animation={false}>
<Modal {...this.props} title='Modal heading' animation={false}>

Adicionando em foo todos argumentos de foo mais o de a
this.setState(prevState => {
    return {foo: {...prevState.foo, a: "updated"}};
});
*/
