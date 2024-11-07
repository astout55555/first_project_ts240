function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  // Implement this function.
  try {
    return sqrt(x);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return -1;
    } else {
      throw e; // rethrow the error so it can propagate up the call stack
    }
  }
}
