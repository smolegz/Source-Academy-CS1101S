function zip_list_of_streams(xs) {
    const n = length(xs);
    function stream(ys, n) {
        if (n === 0) {
            
            return zip_list_of_streams(map(stream_tail, xs));
        }
        return pair(head(head(ys)), () => stream(tail(ys), n -1));
    }




    return stream(xs,n);



    
}

const ones = pair(1, () => ones);
const twos = pair(2, () => twos);
const threes = pair(3, () => threes);

let x= zip_list_of_streams(list(ones,twos,threes));
eval_stream(x, 10);

