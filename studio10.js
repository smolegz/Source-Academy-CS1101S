// function bubblesort(L) {
    
//     function bubble(L2) {
//         if (is_null(tail(L2)) ) {
//             return 0;
//         } else if (head(L2) > head(tail(L2))) {
//             let temp = head(L2);
//             set_head(L2, head(tail(L2)));
//             set_head(tail(L2), temp);
//             bubble(tail(L2));
//         } else {
//             bubble(tail(L2));
//         }
//     }
    
//     for (let i = 0; i < length(L); i = i + 1){
//         bubble(L);
//     }
    
// }
// const LL = list(3, 5, 2, 4, 1);
// bubblesort(LL);
// LL;

let arr = [];
for (let i = 0; i < 2001; i = i + 1) {
    arr[i] = [];
    arr[i][5] = undefined;
}

function read(a, c) {
        return arr[a][c]; 
}

function cc(amount, kinds_of_coins) {
    if (amount < 0) {
        return 0;
    }
    if (read(amount, kinds_of_coins) !== undefined) {
        return read(amount, kinds_of_coins);
    } else {
        let result = amount === 0 
                    ? 1
                    : (kinds_of_coins === 0 )
                    ? 0
                    : cc(amount, kinds_of_coins - 1) +
                    cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
        arr[amount][kinds_of_coins] = result;
        return result;
    }
}

function first_denomination(kinds_of_coins) {
 return kinds_of_coins === 1 ? 5 :
 kinds_of_coins === 2 ? 10 :
 kinds_of_coins === 3 ? 20 :
 kinds_of_coins === 4 ? 50 :
 kinds_of_coins === 5 ? 100 : 0;
}

cc(2000, 5);

// arr;











