const one_to_four = list(1,2,3,4,5,6,9);
const list2 = list(10,11,12);
// function list_ref(items,n) {
//     return n=== 0 ?
//         head(items):
//         list_ref(tail(items),n-1);
// }



// function length(items){
//     return  items === null?
//         0
//     : 1 + length(tail(items));
// }

function iter_length(items) {
    function countz(a,    n) {
        return is_null(a) ?
        n :
        countz(tail(a),n+1);
    }
    return countz(items,0);
}

function append(list1,list2) {
    return list1 === null? 
    list2
    :
    pair(head(list1), append(tail(list1),list2));
}

append(one_to_four,list2);

function last_pair(items) {
    return tail(items) === null?
    pair(head(items), null)
    :
    last_pair(tail(items));
}

last_pair(list2);

function reverse(items) {
    return items === null?
    null
    :
    append( reverse(tail(items)), pair(head(items),null));
}   

reverse(one_to_four);

function brooks(f,items){
    return items ===null?
    f:
    brooks(f(head(items)),tail(items));
}
    
function plus_curried(x) {	    
    return y => x + y;
}

function brooks_curried(f) {
    return brooks(head(f),tail(f));
}

function map(fun, items) {
    return is_null(items)
           ? null
           : pair(fun(head(items)), 
                  map(fun, tail(items)));
}

function square_list(items){
    return is_null(items)?
        null:
        pair(math_pow(head(items),2), square_list(tail(items)));
}

function square_map(items){
    return map( x => math_pow(x,2),items);
}

square_map(list(1,2,3,4,6));


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
 

