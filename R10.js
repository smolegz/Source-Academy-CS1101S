// function zip_list_of_streams(xs) {
//     const n = length(xs);
//     function stream(ys, n) {
//         if (n === 0) {
            
//             return zip_list_of_streams(map(stream_tail, xs));
//         }
//         return pair(head(head(ys)), () => stream(tail(ys), n -1));
//     }

//     return stream(xs,n);
// }

// function zip(ss) {
//     return pair(head(head(ss)), 
//        () => zip(append(tail(ss), list(stream_tail(head(ss))) )));
// }


// const ones = pair(1, () => ones);
// const twos = pair(2, () => twos);
// const threes = pair(3, () => threes);

// let x= zip_list_of_streams(list(ones,twos,threes));
// eval_stream(x, 10);

function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2),
                () => add_streams(stream_tail(s1),
                        stream_tail(s2)));
    }
}

const from2 = integers_from(2);
function partial_sums(s) {
    return pair(1, () => add_streams(partial_sums(s), s));
}

const sum = partial_sums(from2);

eval_stream(sum, 10);












