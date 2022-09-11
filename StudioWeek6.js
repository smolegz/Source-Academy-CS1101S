function my_map(f,xs) {
    return accumulate( (x,y) => pair(f(x), y), null, xs);
}

my_map(x => x + 1, list(1, 2, 3));

function removedup(lst) {
    if (is_null(lst)) {
        return null;
    } else {
        const x = head(lst);
        const y = list(x);
        function pred(n) {
            return !(x === n); 
        }
        
        return append(y, removedup(filter(pred, lst)));
    }
}

removedup(list("a", "x", "b", "c", "c", "b", "d"));

function makeup_amount(x, coins, lst) {
    if (x === 0) {
        return list(lst);
        
    } else if (x < 0 || is_null(coins)) {
        return null;
        
    } else {
        
// Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins), append(lst, list()));
    

// Combinations that use the head coin.
        const combi_C = makeup_amount(x - head(coins), tail(coins), append(lst, list(head(coins))));
        
    return append(combi_A, combi_C);
}
}



makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50), list());








