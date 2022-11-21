function mystery(x) {
 if (x === 0) {
 return null;
 } else {
 const ys = mystery(x - 1);
 return pair(ys, ys);
 }
}


function tree_to_arraytree(xs) {
    if (is_number(xs)) {
        return xs;
    } else {
    const a = [];
    let i = 0;
    while( !is_null(xs)) {
        a[i] = tree_to_arraytree(head(xs));
        i = i + 1;
        xs = tail(xs);
    }
    return a;
    } 
    
}

tree_to_arraytree(list(list(10, 20, 30), list(30, 20, 10)));

function arraytree_to_tree(a) {
    if (is_number(a)) {
        return a;
    } else {
        let i = 0;
        let L = list();
        while (a[i] !== undefined) {
            const xs = list(arraytree_to_tree(a[i]));
            i = i + 1;
            L = append(L,xs);
        }
        return L;
    }
}

arraytree_to_tree([[10, 20, 30], [30, 20, 10]]);

function permutations(s) {
 return is_null(s)
 ? list(null)
 : accumulate(append, null,
 map(x => map(p => pair(x, p),
 permutations(remove(x, s))),
 s));
}

function array_permutations(a) {
    return    tree_to_arraytree(permutations(arraytree_to_tree(a)));
}

array_permutations([10,20,30]);

function perms01(n, m) {

 if (n === 0 && m === 0) {
 return list(null);
 } else {
 const p0 = (n > 0)
 ? map(p => pair(0, p), perms01(n - 1, m))
 : null;
 const p1 = (m > 0)
 ? map(p => pair(1, p), perms01(n, m - 1))
 : null;
 return append(p0, p1);
 }
}



perms01(1,2);


function closest_two_power(x) {
 return math_pow(2, math_floor(math_log2(x)));
}

closest_two_power(15);


const A = [78, 23, 56, 12, 99];
const T = [ 3, 1, 4, 0, 2];


function swap(A, i, j) {
 const temp = A[i];
 A[i] = A[j];
 A[j] = temp;
}

function reorder2(A,T) {
    const N = array_length(A);
    for (let i = 0; i < N; i = i + 1) {
        let c = T[i];
        if(c !== i) {
            swap(A,c,i);
            swap(T,c,i);
        } else {}
    }
}

reorder2(A,T);
A;



function show_stream(s, n) {
 for_each(display, eval_stream(s, n));
}

function extend(bno) {
    function str(s1,s2) {
        return pair(bno(head(s1), head(s2)), () => str(stream_tail(s1), stream_tail(s2)));
    }
    
    return str;
}
const integers = pair(1, () => stream_map(x => x + 1, integers));
const mult_streams = extend((x, y) => x * y);
show_stream(mult_streams(integers, integers), 6);

































