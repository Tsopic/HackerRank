class Calculator {
    power(n, p) {
        try {
            if (n < 0 || p < 0) throw ("n and p should be non-negative")  
            return Math.pow(n, p)
        } catch (e) {
            throw(e)
        }
    }
}
