const memoize = (fn) => {
    const cash = {};

    return (n) => {
        if (n in cash) {
            return cash[n]
        }
        cash[n] = fn(n)
        return cash[n];
    }
}

const fibonacci =  memoize((n) => n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

exports.fibonacci = fibonacci;