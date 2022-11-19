// function map(f, xs) {
//  return is_null(xs) ? null : pair(f(head(xs)), map(f, tail(xs)));
// }
// function copy(xs) {
//  return map(x => x, xs);
// }

// function last_pair(xs) {
//  return is_null(tail(xs))
//  ? xs
//  : last_pair(tail(xs));
// }

// function partially_hoopify(xs,m) {
//     let ys = copy(xs);
//     let zs = ys;
//     let c = 0;
//     while (c !== m) {
//         zs = tail(zs);
//         c = c + 1;
//     }

//     set_tail(last_pair(ys),zs);
//     return ys;
// }

// const LL = list(1,2,3,4,5,6);
// const LLL = partially_hoopify(LL, 3);

// list_ref(LLL,9);

const hh1 = pair(undefined, undefined);
const hh2 = pair(undefined, undefined);
const hh3 = pair(undefined, undefined);

set_head(hh1, hh1);
set_tail(hh1, hh1);
const hh2_new = pair(undefined, undefined);
set_head(hh2_new, hh2_new);
set_tail(hh2_new, hh2);
set_head(hh2, hh2_new);
set_tail(hh2, hh2);

function is_hula_hoop(x) {
 let pairs = null;
 function check(y) {
    if (is_pair(y)) {
        if (! is_null(member(y, pairs))) {
            return true;
        } else {
         
            pairs = pair(y, pairs);
   
            return check(head(y)) && check(tail(y));
        }
    } else {
        return false;
    }
 }
 return check(x);
}

is_hula_hoop(hh2);


function identity(n) {
    let arr = [];
    for (let i = 0; i < n; i = i + 1) {
        arr[i] = [];
    }
    
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 0; j < n; j = j + 1) {
            if (i === j) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}

identity(4);

function zip_array(arr1,arr2) {
    let arr = [];
    let n = 2 * array_length(arr1);
    
    for (let i = 0; i < n; i = i + 1) {
        if (i%2===0) {
            arr[i] = arr1[i/2];
        } else {
            arr[i] = arr2[math_floor(i/2)];
        }
    }
    return arr;
}

zip_array([1, 2, 3], [10, 20, 30]); 

function unzip(a) {
    let arr1 = [];
    let arr2 = [];
    
    for (let i = 0; i < array_length(a); i = i + 1) {
        if (i%2 ===0) {
            arr1[i/2] = a[i];
        } else {
            arr2[math_floor(i/2)] = a[i];
        }
    }
    
    return [arr1,arr2];
}

unzip([1,10,2,20,3,30]);

//////////////////////////////////////////

function scream_ref(s, n) {
 function helper(s, i, k) {
 return k === 0
 ? head(s)
 : helper(tail(s)(s, i + 1), i + 1, k - 1);
 }
 return helper(s, 0, n);
}

const factorial =
    pair(1, (s, i) =>  pair(head(s) * i, tail(factorial)));


scream_ref(factorial, 7);

const pi_sq =
    pair(0, (s,i) => pair(6/(i*i) + head(s), tail(pi_sq)));
    
scream_ref(pi_sq, 5);

const fibonacci =
 pair(0,
    (s1, ignore) =>
        pair(1,
            (s2, ignore) =>
                pair(head(s1) + head(s2),
                    (s3, ignore) =>
                        pair(head(s2) + head(s3),
                            tail
                        )
                     
                                    )));
 
 scream_ref(fibonacci,7);














