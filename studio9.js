//q1
// still 0

function change(x, newV) {
    display(x);
    x = newV;
    display(x);
}

let x = 0;
change(x,1);

// //q2
// function d_filter(pred, xs) {
//     if (is_null(xs)) {
//         return list();
//     } else if (pred(head(xs))) {
//          set_tail(xs, d_filter(pred,tail(xs)));
//          return xs;
//     } else {
//         return d_filter(pred, tail(xs));
//     }
// }

// const L =  list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);

// display(d_filter(x => x % 2 === 0, L)); 
// L;