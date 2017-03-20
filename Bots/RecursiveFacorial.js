function factorial(n) {
  if (!n) {
    return 1;
  }
  return  n * factorial(n-1) ;
}
