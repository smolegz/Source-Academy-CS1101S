function last_member(x, xs) {
     function find_last_member(ys, current_last) {
     let next = member(x, ys);
     // WRITE INSIDE THE BOX
     return (is_null(next))
     ? current_last
     : find_last_member(tail(next), next);
     }
     return find_last_member(xs, null);
}

last_member(4, list(1,2,3,4,5,4,6));

member(4, list(1,2,3,4,5,4,6));

function mutuable_append(xs,ys) {
    function find_end(xs) {
        if (is_null(tail(xs))) {
            return xs;
        } else {
            return find_end(tail(xs));
        }
    }
    
    const x = find_end(xs);
    set_tail(x, ys);
    
    return xs;
}

const xxs = list(1,23,4);
const yys = list(2,3,4,5);

mutuable_append(xxs,yys);

function transform_tree(t) {
    if (is_null(t)) {
        return list();
    }
    
    if (is_list(head(t))) {
        const x = transform_tree(head(t));
        return append(transform_tree(tail(t)), list(x));
    } else {
        return append(transform_tree(tail(t)), list(head(t)));
    }
}

display_list(transform_tree(list(1,2, list(3, 4), 5)));

const ones = pair(1, () => ones);

function shorten_stream(s, k) {
    if (is_null(s) || k === 0) {
        return () => null;
    } else {
        return pair(head(s), () => shorten_stream(stream_tail(s), k -1));
    }
}

const ss = shorten_stream(ones, 10);
const mystream = pair(1, () => pair(2, () => pair(3, () => pair(4, () => null))));

eval_stream(shorten_stream(mystream, 4), 2);



let A_node = list("A");
let B_node = list("B");
let C_node = list("C");
let D_node = list("D");
let E_node = list("E");
set_tail(A_node, list(B_node, C_node));
set_tail(B_node, list(A_node, C_node));
set_tail(C_node, list(B_node, A_node, D_node));
set_tail(D_node, list(C_node));

function is_linked(x,y) {
    if (is_null(x)) {
        return false;
    } else {
        return head(x) === y? true: is_linked(tail(x), y);
    }
}

is_linked(D_node, B_node);


function is_proper(x) {
    function check(xs) {
        if (is_null(xs)) {
            return true;
        } else {
            return is_linked(head(xs), x) && check(tail(xs));
        }
    }
    
    return is_null(tail(x)) ? false : check(tail(x));
}


function is_connected(x,y) {
    if (x === y) {
        return true;
    }
    
    return accumulate((a,b) => is_linked(a,y) || b, false, tail(x));
}

is_connected(A_node, D_node);






