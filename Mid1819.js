const L = list(11, 12, 13, 14, 15, 16, 17, 18);


function get_sublist(start, end, L) {
    
    function helper(pos, ys, result) {
        if (pos < start) {
            return helper(pos + 1, tail(ys), result);
        } else if (pos > end) {
            return result;
        } else {
            return helper(pos + 1, tail(ys), append(result, list(head(ys))));
        }
    }
    
    
    
    return helper(0, L, null);
}

get_sublist(3, 5, L); // returns list(14, 15, 16)

// const L1 = list(list(1, 3, 4, 7, 7), list(2, 8), list(), list(3, 5, 6));

// function merge(xs, ys) {
//  if (is_null(xs)) {
//  return ys;
//  } else if (is_null(ys)) {
//  return xs;
//  } else {
//  const x = head(xs);
//  const y = head(ys);
//  return (x < y)
//  ? pair(x, merge(tail(xs), ys))
//  : pair(y, merge(xs, tail(ys)));
//  }
// }

// function super2(L) {
//     return accumulate((x,y) => merge(x,y), null, L);
// }
// super2(L1);

function take(xs, n) {
 return (n === 0) ? null : pair(head(xs), take(tail(xs), n - 1));
}
// drop the first n elements from the list and return the rest
function drop(xs, n) {
 return (n === 0) ? xs : drop(tail(xs), n - 1);
}


function insertions(x, ys) {
    return map(y => append(append(take(ys, y), list(x)), drop(ys, y)), enum_list(0, length(ys)));
}

insertions(4, list(1,2,3));

function permutations(xs) {
    if (is_null(tail(xs))) {
        return list(xs);
    } else {
        const a = permutations(tail(xs));
     
        return accumulate((x,y) => append(insertions(head(xs), x), y), null, a);

    }
}

permutations(list(1,2,3));











