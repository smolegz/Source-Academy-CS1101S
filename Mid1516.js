function is_tree_of_numbers(x) {
    return is_null(x) 
    ? true
    : is_list(head(x))
    ? (is_tree_of_numbers(head(x)) ? is_tree_of_numbers(tail((x))) : false)
    : is_number(head(x))
    ? is_tree_of_numbers(tail(x))
    : false;
}

const tree_of_num = list(list(1, list(2, list(2,3))), 3, 5, list(6, 7));

// is_tree_of_numbers(tree_of_num);

function filter2(pred, xs) {
    return accumulate((x,y) => pred(x) ? y : append(list(x),y), null, xs);
}

// filter2(x => x%2 === 0, list(2,3,4,5,6,7));

function image(r,c, f) {
    return map(x => map(y => f(x,y), enum_list(0, c -1)) , enum_list(0, r-1));
}

const z = image(3,3,(x,y) => x+y);
display_list(z);

function hori(image) {
    return map(x => reverse(x), image);
}

display_list(hori(z));

remove(2, list(1,2,4));

function are_permutations(xs,ys) {
    if (is_null(xs) && !is_null(ys)) {
        return false;
    } else if (is_null(xs) && is_null(ys)) {
        return true;
    } else {
        return are_permutations(tail(xs), remove(head(xs), ys));
    }
}

are_permutations(list(1, 2, 2, 5, 4), list(2, 4, 5, 1, 2));

function combinations(xs, k) {
    if (is_null(xs)) {
        return list();
    } else if (k === 1) {
        return xs;
    } else {
        
        const a = combinations(tail(xs), k - 1);
        
        return append(map(x=> append(list(head(xs)), list(x)), a), combinations(tail(xs),k)); 
    }
}

combinations(list(1, 2, 3, 4), 2);


















