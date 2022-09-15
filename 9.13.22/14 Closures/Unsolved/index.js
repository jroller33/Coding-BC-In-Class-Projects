function counter() {
    let count = 0;
    return {
        increment: function() {
            return ++count;
        }
    }
}

module.exports = counter;
