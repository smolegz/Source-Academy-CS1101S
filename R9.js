// function make_optimized_search(A) {

//     const B = [];
//     let i = 0;
    
//     while (array_length(B) !== array_length(A)) {
//         B[i] = A[i];
//         i = i + 1;
//     }
//     merge_sort(B); // not declared;
    
//     return x => binarysearch(B,x); // not declared;
// }

function fib(n) {
    let fib0 = 0;
    let fib1 = 1;
    let result = 0;
    
    for (let i = 2; i <= n; i = i + 1) {
        result = fib0 + fib1;
        fib0 = fib1;
        fib1 = result;
    }
    
    return result;
}

fib(1);

//q3
length = k;
Theta((n-k)k);