// Example using pointers to member functions
var member_pointer_const = require("member_pointer_const");

function check(what, expected, actual) {
    if (expected != actual) {
        throw new Error(
            "Failed: ", what, " Expected: ", expected, " Actual: ", actual);
    }
}

// Get the pointers

area_pt = member_pointer_const.areapt();
//perim_pt = member_pointer_const.perimeterpt();

// Create some objects

s = new member_pointer_const.Square(10);

// Do some calculations

check("Square area ", 100.0, member_pointer_const.do_op(s, area_pt));
/*check("Square perim", 40.0, member_pointer_const.do_op(s, perim_pt));

memberPtr = cvar.areavar;
memberPtr = cvar.perimetervar;

// Try the variables
check("Square area ", 100.0, member_pointer_const.do_op(s, cvar.areavar));
check("Square perim", 40.0, member_pointer_const.do_op(s, cvar.perimetervar));

// Modify one of the variables
member_pointer_const.areavar = perim_pt;

check("Square perimeter", 40.0, member_pointer_const.do_op(s, cvar.areavar));

// Try the constants

memberPtr = AREAPT;
memberPtr = PERIMPT;
memberPtr = NULLPT;

check("Square area ", 100.0, member_pointer_const.do_op(s, AREAPT));
check("Square perim", 40.0, member_pointer_const.do_op(s, PERIMPT));

// Typedefs
check("Square perim", 40.0, member_pointer_const.do_op_td(s, perim_pt));

check("Add by value", 3, member_pointer_const.call1(ADD_BY_VALUE, 1, 2));
check("Add by pointer", 7, member_pointer_const.call2(ADD_BY_POINTER, 3, 4));
check("Add by reference", 11, member_pointer_const.call3(ADD_BY_REFERENCE, 5, 6));
*/
