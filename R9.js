function make_optimized_search(A) {

    const B = [];
    let i = 0;
    
    while (array_length(B) !== array_length(A)) {
        B[i] = A[i];
        i = i + 1;
    }
    merge_sort(B); // not declared;
    
    return x => binarysearch(B,x); // not declared;
}

