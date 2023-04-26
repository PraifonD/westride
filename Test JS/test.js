//------------- 1 ลบเครื่องหมายออกจากส่วนท้ายของสตริง
function removeLastSym(str) {
    let arr = Array.from(str);
    if (arr[ arr.length - 1] == '!') {
        arr.pop();
    } 
    let newStr = arr.join('');
    console.log(newStr);
}
// removeLastSym('hi!!!!!!')


//------------- 2.เขียนฟังก์ชั่นรวมตัวเลขที่รับมา 
function  totalExpo(num) {
    let arr = Array.from(num.toString(), Number);
    let total = 0;
    for ( let i = 0 ; i < arr.length ; i++) {
        total = total + (arr[i] ** (i +1));
    }
    console.log(total);
}
// totalExpo(123);


//------------- 3.หาผลรวมสุดท้ายของตัวเลขที่รับมา
function totalMtp(num) {
    while (num > 9) {
        let digits = num.toString().split("");
        num = digits.reduce((a, b) => a * b);
    }
    console.log(num);
}
// totalMtp(123);


//------------- 4.เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ`
function midTxt (str) {
    let arr = Array.from(str);
    if (arr.length == 1) {
        console.log(arr[0]);
    } else if (arr.length % 2 == 0) {
        console.log( arr[(arr.length / 2) - 1] + arr[arr.length / 2]);
    } else {
        console.log( arr[Math.floor(arr.length / 2)])
    }
}
// midTxt('test2')


//------------- 5.เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ
function letterPosition(str) {
    let arr = Array.from(str);
    arr.forEach((el, i) => {
        arr[i] = el.repeat(i + 1);
    });
    console.log(arr.join("-"));
}

function letterPositionLoop(str) {
    let arr = Array.from(str);
    arr.forEach( (el,i) => {
        let newStr = "";
        for (j=0 ; j < i+1 ; j++) {
            newStr += arr[i]
        }
        arr[i] = newStr;
    });
    console.log(arr.join("-"));
}
// letterPosition('abcd');
// letterPositionLoop('abcd');


//------------- 6.สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจากน้อยไปมาก
function diffArray( arr1, arr2) {
    let diffArr = [];  

    for ( let i = 0 ; i < arr1.length ; i++) {
        if ( !arr2.includes(arr1[i])) {
            diffArr.push(arr1[i]);
        }
    };
    for ( let i = 0 ; i < arr2.length ; i++) {
        if ( !arr1.includes(arr2[i])) {
            diffArr.push(arr2[i]);
        }
    };

    diffArr.sort((a, b) => a - b);
    console.log(diffArr);
}
// diffArray([1, 2, 3],[100, 2, 1, 10]);


//------------- 7.สร้างฟังก์ชั่นเรียงเลขคี่ โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม 
function sortOdd (arr) {
    let oddArr = arr.filter(el => el % 2 !==0);
    oddArr.sort((a,b) => a-b);

    arr.forEach( (el, i) => {
        if (el % 2 !== 0) {
            arr[i] = oddArr.shift(); 
        }
    });
    console.log(arr);
}
// sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);


//------------- 8.สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มีผลรวมเท่ากับ target 
function findSumEl(num, target) {
    let matchArr = [];
    num.forEach ((el, i) => {
        for (let j = i+1; j<num.length ; j++) {
            if ( el + num[j] == target) {
                if (!matchArr.includes(el))
                matchArr.push(el);
                if (!matchArr.includes(num[j]))
                matchArr.push(num[j]);
            }
        }
    })
    console.log(matchArr);
}
// findSumEl([2,7,11,15,7], 9);



//------------- 9.สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ
const change = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
function getChange(price, input) {
    let output ;
    if (price > input) {
        output = "please input more"; 
    } else if (price == input) {
        output = 0;
    } else {
        let diff = input - price;
        output = [];
        console.log('Your change amount is ' + diff)
        for (let i = change.length - 1; i >= 0 ; i--) {
            // console.log('next to check is ' + change[i]);
            if ( diff >= change[i] ) {
                diff = diff - change[i];
                output.push(change[i]);
                // console.log('diff was deducted by ' + change[i] + ' to ' + diff);
                i++;
            }
        }
    }
    console.log(output);
}
// getChange(32, 400);