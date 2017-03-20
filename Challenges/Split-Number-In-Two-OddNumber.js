Candies = n => eval(`
    n -= i = 2
    while (n % i)
        ++i == n
`)

/*
 * Explanation:
 * 
 * According to Goldbach's conjecture, every even integer
 * greater than 2 can be expressed as the sum of two
 * primes.
 * 
 * So for the case that n is even, the body of the while
 * loop will never execute because n % 2 will equal 0.
 * `eval` returns the result of the executed
 * statement, which in this case would be `n -= i = 2`.
 * n - 2 is guaranteed to be truthy, which is the result
 * we want.
 * 
 * For odd values of n, we check if n - 2 is prime,
 * because if it is, we can divide the candies into 2
 * and n - 2, which are both prime.
 * 
 * n - 2 is the only number we need to check because we
 * are checking only odd numbers here. All primes are odd
 * except for 2, and the sum of two odd numbers is always
 * even, therefore the sum of two primes which are not 2
 * will never be odd.
 */
