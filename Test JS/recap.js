//-------- 1.tempCheck
function tempCheck (temp) {
    let output;
    if ( temp.charAt(temp.length - 1 ) !== "C" || temp.charAt(temp.length - 1 ) !== "F")
        output = 'INVALID NUMBER';
    if (temp.charAt(temp.length - 1 ) == "C")
        output = parseInt(temp) >= 100 ? true : false ;
    if (temp.charAt(temp.length - 1) == "F")
        output = parseInt(temp) >= 212 ? true : false 

    console.log(output);
};
// tempCheck('212F');
// tempCheck('100C');
// tempCheck('12C');
// tempCheck('190F');
// tempCheck('190');



//-------- 2.
function noDistract (str) {
    let banList = ["meme", "tiktok", "anime", "football"];
    let output = banList.some(banWord => str.includes(banWord));
    console.log(output);
}
// noDistract('tiktok');
// noDistract('adkfl;shguw  djfi;huhbdofwf netflix tiktok');
// noDistract('adkfl;shguw  djfi;huhbdofwf tiktok');
// noDistract('adkfl;shguw  djfi;huhbdofwf');



//--------3.
function keyboardReplace (str) {
    let letterList = [ "A", "S", "O", "I"];
    let numberList = [ 4, 5, 0, 1];

    if (letterList.some( letter => str.includes(letter))) 
        letterList.forEach( (letter, i) => {
            str = str.replace(letterList[i] , numberList[i]);   
        });
    console.log(str);
}
// keyboardReplace("AsOkE StatIon");



//--------4.
function sameBread (arr1, arr2) {
    arr1Bread = [arr1.at(0), arr1.at(-1)];
    arr2Bread = [arr2.at(0), arr2.at(-1)];
    let result = arr1Bread.every(bread => arr2Bread.includes(bread));
    console.log(result);
}
// sameBread(['white bread','salad','white bread'],['white bread','cheese', 'tomato','white bread']); //true
// sameBread(['toast bread','tomato','white bread'],['white bread','tomato','ham','toast bread']); //true
// sameBread(['toast bread','ham','cheese','white bread'],['toast bread','toast bread']); //false
// sameBread(['toast bread','ham','toast bread'],['white bread','ham','white bread']); //false


//--------5.
function getFileName (str) {
    let separate = str.split("/");
    let filename = separate.at(-1);
    console.log(filename);
}
// getFileName("C:/Documents/Newsletters/Summer2018.pdf");
// getFileName("Summer2018.pdf");


//------6.
function noSugar(arr) {
    let sugarDrinkList = ['cola','fanta']
    newList = arr.filter(drink => !sugarDrinkList.includes(drink));
    console.log(newList);
}
// noSugar(['cola', 'water', 'fanta']);
// noSugar(['cola', 'fanta']);
// noSugar(['cola', 'water', 'lemonade', 'beer']);