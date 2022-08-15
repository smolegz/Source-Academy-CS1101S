function biggie_size(meal) {
    return meal+4;
}

function unbiggie_size(meal) {
    return meal<=8 && meal>=5? meal-4: "Not a valid biggie-sized meal entered";
}

function is_biggie_size(meal) {
    return meal>=5;
}

function combo_price(meal) {
    return is_biggie_size(meal)? (unbiggie_size(meal))*1.17+0.5: 
    meal*1.17;
}

function empty_order() {
    return 0;
}

function add_to_order(order,combo) {
    return order*10+combo;
}

function last_combo(combo) {
    return combo%10;
}

function other_combos(meal) {
    return math_floor(meal/10);
}
