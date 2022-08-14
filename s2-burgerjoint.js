

function biggie_size(n) {
    return n<=4 && n>=1? n+4: "Not a valid meal";
}

function unbiggie_size(n) {
    return n<=8 && n>=5? n-4: "Not a valid biggie-sized meal entered";
}

function is_biggie_size(n) {
    return n<=8 && n>=5? true: n<=4 && n>=1? false: "Not a valid meal";
}

function combo_price(n) {
    return n>4 && n<=8? (n-4)*1.17+0.5: 
    n<=4 && n>=1? n*1.17:
    "Invalid meal";
}

function empty_order() {
    return 0;
}

function add_to_order(a,b) {
    return stringify(a)+stringify(b);
}

function last_combo(n) {
    return n%10;
}

function other_combos(n) {
    return math_floor(n/10);
}
