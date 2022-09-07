const tree = list(1, list(2, list(3, list(4, list(5, list(2)))), 5), list(6, 7));

function treesum(xs) {
    
    function total(xs, result) {
        if (is_null(xs)) {
            return result;
        } else if (is_list(head(xs))) {
            return total(head(xs), result + total(tail(xs), 0));
        } else {
            return total(tail(xs), result + head(xs));
        }
    }
    
    return total(xs, 0);
    
}

treesum(tree);