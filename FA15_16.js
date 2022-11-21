const end = list(5);

const L = list(3, pair(7, end));

const result = append(L, end);




list(null);



const result2 = list(null, 0, 0);

set_head(tail(result2), result2);

set_head(tail(tail(result2)), tail(result2));

draw_data(result2);

function f(x) {
    x = x + 1;
    return x;
}

let n = 4;
function double(x,y) {
    if( y === x) {
        double(2*x,0);
    } else if (x < n) {
        display("hi");
        double(x, y + 1);
    } else{}
}

double(1,0);

function outer(x) {
    function inner(y) {
        display("hi22");
        y = y + 1;
        if (y < x) {
            inner(y);
        } else {}
    }
    
    if (x<n) {
        inner(0);
        outer(2*x);
    } else {}
}

outer(1);
let arr = [[ 1, 2, 3],
 [ 4, 5, 6],
 [ 7, 8, 9],
 [10, 11, 12]];

let b = arr[0][0];
let a = arr[0][0];


function circular(arr) {
    let height = array_length(arr);
    let width = array_length(arr[0]);
    
    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            if (i === height - 1 && j === width - 1) {
                arr[0][0] = a;
            } else {
                b = j === width - 1 ? arr[i+1][0] : arr[i][j + 1];
                if (j + 1 >= width) {
                    arr[i+1][0] = a;
                } else {
                    arr[i][j+1] = a;
                }
                a = b;
            }
        }
    }
} 



circular(arr);

arr;


let as = list(1,2,3,4,5);

function mutable_reverse(xs) {
    let a = xs;
    let b = tail(xs);
    let c = tail(tail(xs));
    
    while (!is_null(b)) {
        c = tail(b);
        set_tail(b,a);
        a = b;
        b = c;

    }
    set_tail(xs, null);
    return a;
}    
    
let reversed = mutable_reverse(as);
reversed;

    
    
    
    
    
    
    
    









