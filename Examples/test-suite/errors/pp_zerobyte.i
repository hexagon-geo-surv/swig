%module xxx
/* Prior to 4.3.0 a zero byte in the input caused SWIG to ignore up to and
 * including the next newline. */

// Literal zero byte: < >
#error case 1a
#error case 1b
// Literal zero byte at end of line:  
#error case 2a
#error case 2b
#if 0
// Literal zero byte: < >
#endif
#error case 3
