var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "about",
  "level": "1",
  "url": "about.html",
  "type": "Preface",
  "number": "",
  "title": "About these notes",
  "body": " About these notes  These Math 345 lecture notes follow and use material from Linear Algebra with Applications by W. Keith Nicholson. Source attribution: Spring 2025, Phillipson and Roch. Answers and completed fill-ins are included, as in the LaTeX originals.  The online edition preserves the lecture order. Its automatic section and item numbering may differ from the worksheets; each section identifies the original textbook section. Print-only page breaks and answer-box dimensions are omitted.  "
},
{
  "id": "section-1-1",
  "level": "1",
  "url": "section-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Solutions and Elementary Operations",
  "body": " Solutions and Elementary Operations  Textbook section 1.1.   Codex is fun!     In a Wisconsin forest, there are robins and badgers. Together they have 18 heads and 56 legs. How many robins and badgers are in the forest?    = number of robins, = number of badgers From first equation: Substitute into second:    An equation of the form is called a linear equation . The real quantities are constants , while the variables represent unknowns .    Identify the constants and unknowns in each linear equation in the first example.         What are some equations that are not linear equations?    (contains squared term) (contains product of variables) (contains trigonometric function) (contains square root)    More generally, a system of linear equations or linear system is a set of linear equations each in unknowns. A linear system has the form A solution to the linear system is a sequence of numbers so that each equation in is satisfied when , , , are substituted.  Let be a linear system as above.  If has no solution, it is called inconsistent . If has a solution, it is called consistent . (Note that it may have infinitely many solutions!) If has , it is called a homogeneous system . Note that is always a solution to a homogeneous system. It is called the trivial solution. A solution to a homogeneous system where not each is is called a nontrivial solution.  Consider another system of linear equations in unknowns: The systems and are equivalent if they have exactly the same solutions.   In space, i.e., in three variables or unknowns, lines and planes are examples of systems of linear equations with inifinitely many solutions. When two distinct planes are parallel, i.e., when their normal vector is parallel, the intersection is empty—put differently, no solutions exist to the system of equations made of the equations in general form.     In another Wisconsin forest, there are also robins and badgers. Together they have 18 heads, 36 eyes, and 56 legs. How many robins and badgers are in the forest? Can we use any new terminology to describe this system?    = number of robins, = number of badgers Note that second equation gives (after dividing each side by ), same as first equation.  From first equation:  Substitute into third: This is a system of three linear equations in two unknowns. It is consistent.      In a third Wisconsin forest, there are deer and badgers. Together they have 18 heads and 70 legs. How many deer and badgers are in the forest? Can we use any new terminology to describe this system?    = number of deer, = number of badgers From second equation: This system is inconsistent since first equation gives but second gives (Try substituting the first equation into the second one.)      The following operations, called elementary operations , can be performed on systems of linear equations to produce equivalent systems.  Interchange the th and th equations. Multiply an equation by a nonzero constant. Replace the th equation by times the th equation plus the th equation.  We can track these operations more easily using an array\/matrix to record the coefficients. The coefficient matrix of the linear system is the matrix :    We can also build a matrix that includes the constants on the right-hand side of the linear system. First, note that   is a matrix (called the constant matrix ) representing the constant terms of the linear equations (this is also called a vector or column vector ). We can adjoin to matrix to create the augmented matrix representing our linear system:        Consider the linear system The system is reduced to a simpler system using elementary operations. Find the augmented matrix for the linear systems, then record the resulting matrices.    Initial augmented matrix:      Interchange rows 1 and 2:          Divide first row by 2:          Replace row 3 by row 3 - 3(row 1):          Replace row 3 by row 3 - 2(row 2):          Multiply row 3 by -1\/5:          Replace row 2 by row 2 + row 3:          Replace row 1 by row 1 - 3(row 3):         Notice that when we apply the elementary operations to the matrix, they change the rows of the matrix.      An elementary row operation on a matrix is any one of the following operations:  Type I: Interchange any two rows. Type II: Multiply a row by a nonzero number. Type III: Add a multiple of one row to another.  Geometric Point of View—Explore on Own! Consider the following three systems, inspired by our forest examples. Graph the lines defined by these equations and check how this reflects the number of solutions in each case.       "
},
{
  "id": "ch1-remark-1",
  "level": "2",
  "url": "section-1-1.html#ch1-remark-1",
  "type": "Remark",
  "number": "1.1.1",
  "title": "",
  "body": " Codex is fun!  "
},
{
  "id": "ch1-example-2",
  "level": "2",
  "url": "section-1-1.html#ch1-example-2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  In a Wisconsin forest, there are robins and badgers. Together they have 18 heads and 56 legs. How many robins and badgers are in the forest?    = number of robins, = number of badgers From first equation: Substitute into second:   "
},
{
  "id": "ch1-example-3",
  "level": "2",
  "url": "section-1-1.html#ch1-example-3",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Identify the constants and unknowns in each linear equation in the first example.      "
},
{
  "id": "ch1-example-4",
  "level": "2",
  "url": "section-1-1.html#ch1-example-4",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  What are some equations that are not linear equations?    (contains squared term) (contains product of variables) (contains trigonometric function) (contains square root)   "
},
{
  "id": "ch1-note-5",
  "level": "2",
  "url": "section-1-1.html#ch1-note-5",
  "type": "Note",
  "number": "1.1.5",
  "title": "",
  "body": " In space, i.e., in three variables or unknowns, lines and planes are examples of systems of linear equations with inifinitely many solutions. When two distinct planes are parallel, i.e., when their normal vector is parallel, the intersection is empty—put differently, no solutions exist to the system of equations made of the equations in general form.  "
},
{
  "id": "ch1-example-6",
  "level": "2",
  "url": "section-1-1.html#ch1-example-6",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  In another Wisconsin forest, there are also robins and badgers. Together they have 18 heads, 36 eyes, and 56 legs. How many robins and badgers are in the forest? Can we use any new terminology to describe this system?    = number of robins, = number of badgers Note that second equation gives (after dividing each side by ), same as first equation.  From first equation:  Substitute into third: This is a system of three linear equations in two unknowns. It is consistent.   "
},
{
  "id": "ch1-activity-7",
  "level": "2",
  "url": "section-1-1.html#ch1-activity-7",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  In a third Wisconsin forest, there are deer and badgers. Together they have 18 heads and 70 legs. How many deer and badgers are in the forest? Can we use any new terminology to describe this system?    = number of deer, = number of badgers From second equation: This system is inconsistent since first equation gives but second gives (Try substituting the first equation into the second one.)   "
},
{
  "id": "ch1-theorem-8",
  "level": "2",
  "url": "section-1-1.html#ch1-theorem-8",
  "type": "Theorem",
  "number": "1.1.7",
  "title": "",
  "body": "  The following operations, called elementary operations , can be performed on systems of linear equations to produce equivalent systems.  Interchange the th and th equations. Multiply an equation by a nonzero constant. Replace the th equation by times the th equation plus the th equation.  We can track these operations more easily using an array\/matrix to record the coefficients. The coefficient matrix of the linear system is the matrix :    We can also build a matrix that includes the constants on the right-hand side of the linear system. First, note that   is a matrix (called the constant matrix ) representing the constant terms of the linear equations (this is also called a vector or column vector ). We can adjoin to matrix to create the augmented matrix representing our linear system:    "
},
{
  "id": "ch1-example-9",
  "level": "2",
  "url": "section-1-1.html#ch1-example-9",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "   Consider the linear system The system is reduced to a simpler system using elementary operations. Find the augmented matrix for the linear systems, then record the resulting matrices.    Initial augmented matrix:      Interchange rows 1 and 2:          Divide first row by 2:          Replace row 3 by row 3 - 3(row 1):          Replace row 3 by row 3 - 2(row 2):          Multiply row 3 by -1\/5:          Replace row 2 by row 2 + row 3:          Replace row 1 by row 1 - 3(row 3):         Notice that when we apply the elementary operations to the matrix, they change the rows of the matrix.   "
},
{
  "id": "ch1-definition-10",
  "level": "2",
  "url": "section-1-1.html#ch1-definition-10",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": "  An elementary row operation on a matrix is any one of the following operations:  Type I: Interchange any two rows. Type II: Multiply a row by a nonzero number. Type III: Add a multiple of one row to another.  Geometric Point of View—Explore on Own! Consider the following three systems, inspired by our forest examples. Graph the lines defined by these equations and check how this reflects the number of solutions in each case.      "
},
{
  "id": "section-1-2",
  "level": "1",
  "url": "section-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Gaussian Elimination",
  "body": " Gaussian Elimination  Textbook section 1.2.    The following are augmented matrices representing systems of linear equations in three unknowns ( ). Rewrite the equations, then solve the systems.        Rewrite as: Back substitution: Solution: , , .         Rewrite as: Solution: , , .       An matrix is in row echelon form (REF) if it satisfies the following properties:  All zero rows , if there are any, appear at the bottom of the matrix. The first nonzero entry from the left of a nonzero row is a 1. This entry is called the leading one of its row. For each nonzero row, the leading one appears to the right and below any leading ones in preceding rows.  We say is in reduced row echelon form (RREF) if is in REF and also satisfies  If a column contains a leading one, then all other entries in that column are zero.  A matrix in REF appears as a staircase (or echelon ) pattern of leading ones descending from the upper left corner of the matrix. Let’s draw a schematic of a matrix in REF.     From Linear Algebra with Applications, Vretta-Lyryx   The figure illustrates a staircase structure in a matrix associated with the row echelon form. The matrix contains blocks of zeros below each leading entry, denoted by \"1,\" which are aligned along a diagonal. The asterisks (*) represent arbitrary elements, which may or may not be zero. Each leading \"1\" appears to the right of the leading \"1\" in the row above, and rows with all zeros are located at the bottom. The highlighted step-like structure visually emphasizes the progression of leading entries.     Which of the following matrices are in REF? Which are in RREF?   Both REF and RREF (staircase, 0s in columns with leading 1s)    Not REF (zero row not at bottom)    REF but not RREF (has nonzero entries above leading 1s)    Both REF and RREF (has zeros above and below leading 1s)    Not REF (third row has leading 1 in same column as second row)     For a matrix in REF, the first 1 that appears in a row is called a pivot . The columns containing pivots are called pivot columns .      An matrix is row equivalent to an matrix if can be produced by applying a finite sequence of elementary row operations to .      Every matrix is row equivalent to a unique matrix in RREF.   Gaussian Algorithm: How to find a row-echelon matrix from a given matrix  Heuristic : Move from top to bottom and outside in until you get an upper triangular-ish matrix with ones as leading entries.  If the matrix consists entirely of zeros, stop—it is already in row-echelon form. Otherwise, find the first column from the left containing a nonzero entry (call it ), and move the row containing that entry to the top position. Now multiply the new top row by to create a leading 1. By subtracting multiples of that row from rows below it, make each entry below the leading 1 zero.  This completes the first row, and all further row operations are carried out on the remaining rows.  Repeat steps 1–4 on the matrix consisting of the remaining rows.  The process stops when either no rows remain at step 5 or the remaining rows consist entirely of zeros.       Find a row echelon form of the given matrix .     First nonzero column is column 1. Interchange rows 1 and 2:  Multiply first row by 1\/3:  Subtract 2 times first row from row 3:  Interchange rows 2 and 3:  Matrix is now in REF with leading 1s in columns 1, 2, and 3.      Consider two linear systems each of equations in unknowns. If the augmented matrices and are row equivalent , then the linear systems are equivalent , i.e. the systems have the same solutions.      Solve the linear system by transforming the associated matrix to row echelon form.    Augmented matrix:  Subtract 2 times row 1 from row 2 and  subtract 3 times row 1 from row 3:  Multiply row 2 by -1\/5:  Add 6 times row 2 to row 3:  Multiply row 3 by -1\/4:  Back substitute: From row 3: From row 2: gives From row 1: gives  Solution is , ,      Solve the previous linear system by transforming to reduced row echelon form.    Continue from previous REF matrix:  Subtract 2 times row 2 from row 1:  Subtract row 3 from row 1, and subtract row 3 from row 2:  Matrix now in RREF. Reading off solution: , ,    In this example, the coefficient matrix of in RREF is the identity matrix . When this happens, the system corresponding to has a unique solution.    If the augmented matrix of a linear system is a REF matrix (or a row echelon matrix), we say the linear system is in echelon form . The variables corresponding to columns with leading entries are called leading variables (or basic variables), while the other variables are called free variables .  If the augmented matrix of a linear system is a REF matrix, a variable whose corresponding column does not have a leading is called a free variable.      Let represent a linear system. Solve the system.    Matrix already in REF. Let be the variables.  From last row: .  From third row: .  From second row: .  From first row: .  Let be parameter.  From last row: .  From third row: .  From second row: .  From first row: .  Solution: , , , , where is any real number      Let represent a linear system. Solve the system.    Last row shows  This is impossible (0 cannot equal 1)  Therefore system is inconsistent—no solutions exist     Gaussian Elimination: Solving a Linear System  Convert your linear system to an augmented matrix . Use elementary row operations to obtain a matrix in (reduced) row echelon form. Note that the two systems are equivalent. If a row occurs, the system is inconsistent. Otherwise, assign the free variables as parameters, and use the equations in the row echelon form to solve for the leading variables in terms of the parameters.   Row echelon matrices are not unique for a given starting matrix. For example,   are row equivalent row echelon matrices, but they are not equal. However, the number of leading 1s will be the same in each row equivalent row echelon matrices.    The rank of a matrix is the number of leading 1s (i.e. the number of pivots) in any row echelon form that is row equivalent to .      Find the rank of    Subtract 2 times row 1 from row 3:  Add row 2 to row 3:  Matrix is now in REF with 2 leading 1s. Therefore rank = 2.      Find the rank of    Subtract 2 times row 1 from row 3:  Subtract row 2 from row 3:  Multiply row 3 by (-1\/8):  Matrix is now in REF with 3 leading ones. Therefore rank = 3.      Suppose a system of equations in variables is consistent (i.e. it has at least one solution), and the rank of the augmented matrix is .  The set of solutions involves exactly parameters. If , the system has infinitely many solutions. If , the system has a unique solution.  For any system of linear equations, exactly three possibilities exist:  No solution. This occurs when a row occurs in row-echelon form. Unique solution. This occurs when every variable is a leading variable, i.e. every variable corresponds to a pivot . Infinitely many solutions. This occurs when the system is consistent and there is at least one free variable.      If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    Gaussian elimination:  The system is consistent. There are two pivot columns, meaning one free variable. The system has infinitely many solutions, parameterized by the free variable.      If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    Gaussian elimination:  By the last row, the system is inconsistent and has no solutions.    "
},
{
  "id": "ch1-example-11",
  "level": "2",
  "url": "section-1-2.html#ch1-example-11",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "  The following are augmented matrices representing systems of linear equations in three unknowns ( ). Rewrite the equations, then solve the systems.        Rewrite as: Back substitution: Solution: , , .         Rewrite as: Solution: , , .    "
},
{
  "id": "ch1-definition-12",
  "level": "2",
  "url": "section-1-2.html#ch1-definition-12",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  An matrix is in row echelon form (REF) if it satisfies the following properties:  All zero rows , if there are any, appear at the bottom of the matrix. The first nonzero entry from the left of a nonzero row is a 1. This entry is called the leading one of its row. For each nonzero row, the leading one appears to the right and below any leading ones in preceding rows.  We say is in reduced row echelon form (RREF) if is in REF and also satisfies  If a column contains a leading one, then all other entries in that column are zero.  A matrix in REF appears as a staircase (or echelon ) pattern of leading ones descending from the upper left corner of the matrix. Let’s draw a schematic of a matrix in REF.   "
},
{
  "id": "section-1-2-5",
  "level": "2",
  "url": "section-1-2.html#section-1-2-5",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " From Linear Algebra with Applications, Vretta-Lyryx   The figure illustrates a staircase structure in a matrix associated with the row echelon form. The matrix contains blocks of zeros below each leading entry, denoted by \"1,\" which are aligned along a diagonal. The asterisks (*) represent arbitrary elements, which may or may not be zero. Each leading \"1\" appears to the right of the leading \"1\" in the row above, and rows with all zeros are located at the bottom. The highlighted step-like structure visually emphasizes the progression of leading entries.   "
},
{
  "id": "ch1-example-13",
  "level": "2",
  "url": "section-1-2.html#ch1-example-13",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": " Which of the following matrices are in REF? Which are in RREF?   Both REF and RREF (staircase, 0s in columns with leading 1s)    Not REF (zero row not at bottom)    REF but not RREF (has nonzero entries above leading 1s)    Both REF and RREF (has zeros above and below leading 1s)    Not REF (third row has leading 1 in same column as second row)  "
},
{
  "id": "ch1-definition-14",
  "level": "2",
  "url": "section-1-2.html#ch1-definition-14",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  For a matrix in REF, the first 1 that appears in a row is called a pivot . The columns containing pivots are called pivot columns .   "
},
{
  "id": "ch1-definition-15",
  "level": "2",
  "url": "section-1-2.html#ch1-definition-15",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  An matrix is row equivalent to an matrix if can be produced by applying a finite sequence of elementary row operations to .   "
},
{
  "id": "ch1-theorem-16",
  "level": "2",
  "url": "section-1-2.html#ch1-theorem-16",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "",
  "body": "  Every matrix is row equivalent to a unique matrix in RREF.   Gaussian Algorithm: How to find a row-echelon matrix from a given matrix  Heuristic : Move from top to bottom and outside in until you get an upper triangular-ish matrix with ones as leading entries.  If the matrix consists entirely of zeros, stop—it is already in row-echelon form. Otherwise, find the first column from the left containing a nonzero entry (call it ), and move the row containing that entry to the top position. Now multiply the new top row by to create a leading 1. By subtracting multiples of that row from rows below it, make each entry below the leading 1 zero.  This completes the first row, and all further row operations are carried out on the remaining rows.  Repeat steps 1–4 on the matrix consisting of the remaining rows.  The process stops when either no rows remain at step 5 or the remaining rows consist entirely of zeros.    "
},
{
  "id": "ch1-example-17",
  "level": "2",
  "url": "section-1-2.html#ch1-example-17",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  Find a row echelon form of the given matrix .     First nonzero column is column 1. Interchange rows 1 and 2:  Multiply first row by 1\/3:  Subtract 2 times first row from row 3:  Interchange rows 2 and 3:  Matrix is now in REF with leading 1s in columns 1, 2, and 3.   "
},
{
  "id": "ch1-theorem-18",
  "level": "2",
  "url": "section-1-2.html#ch1-theorem-18",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "",
  "body": "  Consider two linear systems each of equations in unknowns. If the augmented matrices and are row equivalent , then the linear systems are equivalent , i.e. the systems have the same solutions.   "
},
{
  "id": "ch1-example-19",
  "level": "2",
  "url": "section-1-2.html#ch1-example-19",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Solve the linear system by transforming the associated matrix to row echelon form.    Augmented matrix:  Subtract 2 times row 1 from row 2 and  subtract 3 times row 1 from row 3:  Multiply row 2 by -1\/5:  Add 6 times row 2 to row 3:  Multiply row 3 by -1\/4:  Back substitute: From row 3: From row 2: gives From row 1: gives  Solution is , ,   "
},
{
  "id": "ch1-activity-20",
  "level": "2",
  "url": "section-1-2.html#ch1-activity-20",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  Solve the previous linear system by transforming to reduced row echelon form.    Continue from previous REF matrix:  Subtract 2 times row 2 from row 1:  Subtract row 3 from row 1, and subtract row 3 from row 2:  Matrix now in RREF. Reading off solution: , ,   "
},
{
  "id": "ch1-definition-21",
  "level": "2",
  "url": "section-1-2.html#ch1-definition-21",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": "  If the augmented matrix of a linear system is a REF matrix (or a row echelon matrix), we say the linear system is in echelon form . The variables corresponding to columns with leading entries are called leading variables (or basic variables), while the other variables are called free variables .  If the augmented matrix of a linear system is a REF matrix, a variable whose corresponding column does not have a leading is called a free variable.   "
},
{
  "id": "ch1-example-22",
  "level": "2",
  "url": "section-1-2.html#ch1-example-22",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": "  Let represent a linear system. Solve the system.    Matrix already in REF. Let be the variables.  From last row: .  From third row: .  From second row: .  From first row: .  Let be parameter.  From last row: .  From third row: .  From second row: .  From first row: .  Solution: , , , , where is any real number   "
},
{
  "id": "ch1-activity-23",
  "level": "2",
  "url": "section-1-2.html#ch1-activity-23",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "  Let represent a linear system. Solve the system.    Last row shows  This is impossible (0 cannot equal 1)  Therefore system is inconsistent—no solutions exist   "
},
{
  "id": "ch1-definition-24",
  "level": "2",
  "url": "section-1-2.html#ch1-definition-24",
  "type": "Definition",
  "number": "1.2.13",
  "title": "",
  "body": "  The rank of a matrix is the number of leading 1s (i.e. the number of pivots) in any row echelon form that is row equivalent to .   "
},
{
  "id": "ch1-example-25",
  "level": "2",
  "url": "section-1-2.html#ch1-example-25",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  Find the rank of    Subtract 2 times row 1 from row 3:  Add row 2 to row 3:  Matrix is now in REF with 2 leading 1s. Therefore rank = 2.   "
},
{
  "id": "ch1-activity-26",
  "level": "2",
  "url": "section-1-2.html#ch1-activity-26",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "  Find the rank of    Subtract 2 times row 1 from row 3:  Subtract row 2 from row 3:  Multiply row 3 by (-1\/8):  Matrix is now in REF with 3 leading ones. Therefore rank = 3.   "
},
{
  "id": "ch1-theorem-27",
  "level": "2",
  "url": "section-1-2.html#ch1-theorem-27",
  "type": "Theorem",
  "number": "1.2.15",
  "title": "",
  "body": "  Suppose a system of equations in variables is consistent (i.e. it has at least one solution), and the rank of the augmented matrix is .  The set of solutions involves exactly parameters. If , the system has infinitely many solutions. If , the system has a unique solution.  For any system of linear equations, exactly three possibilities exist:  No solution. This occurs when a row occurs in row-echelon form. Unique solution. This occurs when every variable is a leading variable, i.e. every variable corresponds to a pivot . Infinitely many solutions. This occurs when the system is consistent and there is at least one free variable.   "
},
{
  "id": "ch1-example-28",
  "level": "2",
  "url": "section-1-2.html#ch1-example-28",
  "type": "Example",
  "number": "1.2.16",
  "title": "",
  "body": "  If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    Gaussian elimination:  The system is consistent. There are two pivot columns, meaning one free variable. The system has infinitely many solutions, parameterized by the free variable.   "
},
{
  "id": "ch1-activity-29",
  "level": "2",
  "url": "section-1-2.html#ch1-activity-29",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  If represents the augmented matrix for a system of 3 equations and 3 variables, what can we say about the solutions sets of the system?    Gaussian elimination:  By the last row, the system is inconsistent and has no solutions.   "
},
{
  "id": "section-1-3",
  "level": "1",
  "url": "section-1-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Homogeneous Equations",
  "body": " Homogeneous Equations  Textbook section 1.3.    Solve the homogeneous system    Augmented matrix:  Gaussian elimination:    Parametric form of the solutions:        A homogeneous system of linear equations in unknowns always has a non-trivial solution if , that is if the number of unknowns exceeds the number of equations.     Does a homogeneous system NEED to have more variables than equations in order to have infinitely many solutions?  We can also generate solutions for homogeneous systems using a finite set of starting solutions.  We reviewed the following definition earlier in the course.     Let be column matrices (or vectors or column vectors) with same number of entries (i.e. have rows, 1 column), and a scalar\/real number. We define the sum  by adding their respective entries and the scalar product  by multiplying each entry of by . In other words, A sum of scalar multiples of several column matrices is called a linear combination of the column matrices. For example, if are column matrices, then for any choice of scalars , is a linear combination of and .     The following are linear combinations:           Go back to Activity  and rewrite the solutions in the form of a linear combination.    Solution set:      Any linear combination of solutions to a homogeneous system is again a solution to the homogeneous system.      Consider the homogeneous system whose augmented matrix, when put in RREF, is Solve the above system and write the solutions as a linear combination of particular solutions.    Interpret the RREF matrix:  Solve for pivot variables:  Express free variable as parameters: Let and .  Solutions in vector form:      The Gaussian algorithm systematically produces solutions to any homogeneous linear system, called basic solutions , one for every parameter. Every solution can be written as a linear combination of the basic solutions.      Let be a matrix with rows and columns, with Consider the homogeneous system in variables with as the coefficient matrix. Then:  The system has exactly basic solutions, one for each parameter. (note: is the number of free variables) Every solution is a linear combination of these basic solutions.    "
},
{
  "id": "ch1-activity-30",
  "level": "2",
  "url": "section-1-3.html#ch1-activity-30",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "  Solve the homogeneous system    Augmented matrix:  Gaussian elimination:    Parametric form of the solutions:     "
},
{
  "id": "ch1-theorem-31",
  "level": "2",
  "url": "section-1-3.html#ch1-theorem-31",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "",
  "body": "  A homogeneous system of linear equations in unknowns always has a non-trivial solution if , that is if the number of unknowns exceeds the number of equations.   "
},
{
  "id": "ch1-question-32",
  "level": "2",
  "url": "section-1-3.html#ch1-question-32",
  "type": "Question",
  "number": "1.3.2",
  "title": "",
  "body": " Does a homogeneous system NEED to have more variables than equations in order to have infinitely many solutions?  We can also generate solutions for homogeneous systems using a finite set of starting solutions.  We reviewed the following definition earlier in the course.  "
},
{
  "id": "ch1-definition-33",
  "level": "2",
  "url": "section-1-3.html#ch1-definition-33",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  Let be column matrices (or vectors or column vectors) with same number of entries (i.e. have rows, 1 column), and a scalar\/real number. We define the sum  by adding their respective entries and the scalar product  by multiplying each entry of by . In other words, A sum of scalar multiples of several column matrices is called a linear combination of the column matrices. For example, if are column matrices, then for any choice of scalars , is a linear combination of and .   "
},
{
  "id": "ch1-activity-34",
  "level": "2",
  "url": "section-1-3.html#ch1-activity-34",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": " The following are linear combinations:        "
},
{
  "id": "ch1-example-35",
  "level": "2",
  "url": "section-1-3.html#ch1-example-35",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Go back to Activity  and rewrite the solutions in the form of a linear combination.    Solution set:   "
},
{
  "id": "ch1-fact-36",
  "level": "2",
  "url": "section-1-3.html#ch1-fact-36",
  "type": "Fact",
  "number": "1.3.5",
  "title": "",
  "body": "  Any linear combination of solutions to a homogeneous system is again a solution to the homogeneous system.   "
},
{
  "id": "ch1-example-37",
  "level": "2",
  "url": "section-1-3.html#ch1-example-37",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  Consider the homogeneous system whose augmented matrix, when put in RREF, is Solve the above system and write the solutions as a linear combination of particular solutions.    Interpret the RREF matrix:  Solve for pivot variables:  Express free variable as parameters: Let and .  Solutions in vector form:   "
},
{
  "id": "ch1-definition-38",
  "level": "2",
  "url": "section-1-3.html#ch1-definition-38",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  The Gaussian algorithm systematically produces solutions to any homogeneous linear system, called basic solutions , one for every parameter. Every solution can be written as a linear combination of the basic solutions.   "
},
{
  "id": "ch1-theorem-39",
  "level": "2",
  "url": "section-1-3.html#ch1-theorem-39",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "",
  "body": "  Let be a matrix with rows and columns, with Consider the homogeneous system in variables with as the coefficient matrix. Then:  The system has exactly basic solutions, one for each parameter. (note: is the number of free variables) Every solution is a linear combination of these basic solutions.   "
},
{
  "id": "section-2-1",
  "level": "1",
  "url": "section-2-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Matrix Addition, Scalar Multiplication, and Transposition",
  "body": " Matrix Addition, Scalar Multiplication, and Transposition  Textbook section 2.1.  We’ve seen matrices used to help us solve systems of linear equations. We’re now going to define them more formally and explore other ways to utilize them.    An  matrix  is a rectangular array of real numbers arranged in  horizontal rows and  vertical columns : The th row of is and the -th column of is The number , which is in the th row and th column of , is the -entry of , and we often write We say is an by matrix.     Consider the matrix  is a 2   3 matrix. Complete the following:       Two matrices and are equal if they have the same size AND all the corresponding entries are equal.      If and , and , find and .    Since , comparing corresponding entries:  Therefore and .     Matrix Operations  Matrix Addition : If and are both matrices, then their sum  is the matrix where  .    For the matrices and as below, calculate .        For to be defined, and must be the same size. From now on, if we write , assume that this is the case.  Scalar Multiplication : If is an matrix and is a real number, then the scalar multiple of by , written , is the matrix , where , that is, is the matrix obtained by multiplying every entry of by .     For as in the example above, calculate .         If are matrices and are real numbers, then an expression of the form is called a linear combination of . The scalars are called coefficients .      The following is a linear combination of matrices. Compute it.          Matrix Addition Properties  Let , , and be matrices.   , i.e. matrix addition is commutative .  , i.e. matrix addition is associative . There is a unique matrix such that for any matrix . The matrix is called the  zero matrix . For each matrix , there is a unique matrix such that . The matrix must, in fact, be the matrix . The matrix is called the negative of .   Proof of (a) (if time)  Let and . Then:     Scalar Multiplication Properties  If and are real numbers and and are matrices of the appropriate sizes, then  . . .    If is an matrix, then the transpose of , denoted , is the   matrix defined by In other words, the transpose of is obtained by interchanging the rows and the columns of .      Compute the transpose for each of the given matrices:           If is an matrix, the elements are called the main diagonal of .   From Linear Algebra with Applications, Vretta-Lyryx   Main diagonals are circled in matrices of sizes 3 by 2, 2 by 3, 3 by 3, and 2 by 1. The diagonal consists of entries a11, a22, and so on, with equal row and column indices.    Thus forming the transpose of a matrix can be viewed as flipping  about its main diagonal.      Matrix Transpose Properties  If is a scalar and and are matrices of the appropriate sizes, then    Proof of (b) (time permitting)  Let and . Then where .  By definition of transpose:  Since , we have:  Therefore, .     A matrix with real entries is called symmetric if . A matrix is called skew symmetric if .      Are the following matrices symmetric\/skew symmetric\/neither?     Let’s examine each matrix:  skew symmetric since symmetric since neither symmetric nor skew symmetric both symmetric and skew symmetric     If a matrix is symmetric AND skew symmetric at the same time, then must be a zero matrix! (Why?)    "
},
{
  "id": "ch2-definition-1",
  "level": "2",
  "url": "section-2-1.html#ch2-definition-1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  An  matrix  is a rectangular array of real numbers arranged in  horizontal rows and  vertical columns : The th row of is and the -th column of is The number , which is in the th row and th column of , is the -entry of , and we often write We say is an by matrix.   "
},
{
  "id": "ch2-example-2",
  "level": "2",
  "url": "section-2-1.html#ch2-example-2",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Consider the matrix  is a 2   3 matrix. Complete the following:    "
},
{
  "id": "ch2-definition-3",
  "level": "2",
  "url": "section-2-1.html#ch2-definition-3",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "  Two matrices and are equal if they have the same size AND all the corresponding entries are equal.   "
},
{
  "id": "ch2-activity-4",
  "level": "2",
  "url": "section-2-1.html#ch2-activity-4",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  If and , and , find and .    Since , comparing corresponding entries:  Therefore and .   "
},
{
  "id": "ch2-example-5",
  "level": "2",
  "url": "section-2-1.html#ch2-example-5",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  For the matrices and as below, calculate .      "
},
{
  "id": "ch2-note-6",
  "level": "2",
  "url": "section-2-1.html#ch2-note-6",
  "type": "Note",
  "number": "2.1.5",
  "title": "",
  "body": " For to be defined, and must be the same size. From now on, if we write , assume that this is the case.  Scalar Multiplication : If is an matrix and is a real number, then the scalar multiple of by , written , is the matrix , where , that is, is the matrix obtained by multiplying every entry of by .  "
},
{
  "id": "ch2-example-7",
  "level": "2",
  "url": "section-2-1.html#ch2-example-7",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  For as in the example above, calculate .      "
},
{
  "id": "ch2-definition-8",
  "level": "2",
  "url": "section-2-1.html#ch2-definition-8",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "  If are matrices and are real numbers, then an expression of the form is called a linear combination of . The scalars are called coefficients .   "
},
{
  "id": "ch2-activity-9",
  "level": "2",
  "url": "section-2-1.html#ch2-activity-9",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  The following is a linear combination of matrices. Compute it.       "
},
{
  "id": "ch2-answer-5",
  "level": "2",
  "url": "section-2-1.html#ch2-answer-5",
  "type": "Proof",
  "number": "1",
  "title": "Proof of (a) (if time).",
  "body": " Proof of (a) (if time)  Let and . Then:  "
},
{
  "id": "ch2-definition-10",
  "level": "2",
  "url": "section-2-1.html#ch2-definition-10",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": "  If is an matrix, then the transpose of , denoted , is the   matrix defined by In other words, the transpose of is obtained by interchanging the rows and the columns of .   "
},
{
  "id": "ch2-example-11",
  "level": "2",
  "url": "section-2-1.html#ch2-example-11",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  Compute the transpose for each of the given matrices:        "
},
{
  "id": "ch2-definition-12",
  "level": "2",
  "url": "section-2-1.html#ch2-definition-12",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "  If is an matrix, the elements are called the main diagonal of .   From Linear Algebra with Applications, Vretta-Lyryx   Main diagonals are circled in matrices of sizes 3 by 2, 2 by 3, 3 by 3, and 2 by 1. The diagonal consists of entries a11, a22, and so on, with equal row and column indices.    Thus forming the transpose of a matrix can be viewed as flipping  about its main diagonal.   "
},
{
  "id": "ch2-answer-7",
  "level": "2",
  "url": "section-2-1.html#ch2-answer-7",
  "type": "Proof",
  "number": "1",
  "title": "Proof of (b) (time permitting).",
  "body": " Proof of (b) (time permitting)  Let and . Then where .  By definition of transpose:  Since , we have:  Therefore, .  "
},
{
  "id": "ch2-definition-13",
  "level": "2",
  "url": "section-2-1.html#ch2-definition-13",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": "  A matrix with real entries is called symmetric if . A matrix is called skew symmetric if .   "
},
{
  "id": "ch2-example-14",
  "level": "2",
  "url": "section-2-1.html#ch2-example-14",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": "  Are the following matrices symmetric\/skew symmetric\/neither?     Let’s examine each matrix:  skew symmetric since symmetric since neither symmetric nor skew symmetric both symmetric and skew symmetric   "
},
{
  "id": "ch2-note-15",
  "level": "2",
  "url": "section-2-1.html#ch2-note-15",
  "type": "Note",
  "number": "2.1.14",
  "title": "",
  "body": " If a matrix is symmetric AND skew symmetric at the same time, then must be a zero matrix! (Why?)  "
},
{
  "id": "section-2-2",
  "level": "1",
  "url": "section-2-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Matrix-Vector Multiplication",
  "body": " Matrix-Vector Multiplication  Textbook section 2.2.   Vectors as matrices    A matrix is a row vector if it is and is a column vector if it is . Often we will call them just -vectors or vectors of length denoted with bold-face font. For example, or . denotes the set of all -vectors.     is a 3-vector , or a vector in .  The zero vector in , denoted or , is the -vector consisting of all zeros.  An matrix can be thought of a row of column vectors of length :  , where is the -th column of .     Matrix-Vector Product  We start with an example.    Consider the linear system Rewrite this system using a linear combination.         Let be an matrix, written in terms of its columns If is any -vector, the matrix-vector product  is defined to be the -vector given by:       Compute the matrix-vector product where        Notice that we can now write a linear system of equations in terms of a single matrix equation: Consider the linear system of equations in unknowns, From this system, define the matrices  We can rewrite this system as a matrix equation:    Every system of linear equations has the form where is the coefficient matrix, is the constant matrix\/vector, and is the matrix\/vector of variables. The system is consistent if and only if is a linear combination of the columns of .      Is a linear combination of , ?    We need to solve the system: which corresponds to the augmented matrix:   :  :  :  By the last row, the system is inconsistent, so no solution exists. Thus, is not a linear combination of the given vectors.     If , what is ?  If is the zero matrix, what is ?     Matrix-Vector Product Properties  Let and be matrices, and let and be -vectors in . Then:  . for all scalars . .   Proof of (b) (time permitting)  By the definition of matrix-vector multiplication, if has columns , then:  Multiplying by gives:  Applying to this vector:    If we multiply each column of by , we get:   Applying this to :       The Dot Product in  We can express Matrix-Vector multiplication using dot products.    An ordered sequence of real numbers is called an ordered -tuple .     is an ordered four -tuple.     If and are two ordered -tuples, their dot product is defined to be the number   obtained by multiplying corresponding entries and adding the results.      The dot product of and is         Let be an matrix and let be an -vector. Then each entry of the vector is the dot product of the corresponding row of with .   From Linear Algebra with Applications, Vretta-Lyryx   The ith entry of the matrix-vector product Ax is the dot product of row i of A with the column vector x. The contributing row, vector, and resulting entry are highlighted.        Compute the product using the dot product, where         For each , the identity matrix  is the matrix with 1s on the main diagonal (upper left to lower right), and zeros elsewhere.     From Linear Algebra with Applications, Vretta-Lyryx   Identity matrices I2, I3, and I4, with ones on the main diagonal and zeros in every other entry.      For each we have for each -vector in .      Let’s verify this fact for .         Consider , and let denote the th column of , i.e,   These vectors are called the standard basis vectors for (this name will make sense later).       For , is         Compute for          If be an matrix, then for .      Let and be matrices. If for all in then    Proof  Since for all , choose for . Then for all . That is all the columns are the same, so .      Transformations  Geometric manipulations can be described via matrix-vector products.  Recall that we can interpret 2-vectors geometrically: corresponds to the point in the plane. To enhance this geometric representation of a vector , it is denoted graphically by an arrow from the origin to the point .  Similarly, we can define 3-vectors in space.   The vector with coordinates a1 and a2 drawn from the origin in the x1-x2 plane. Dashed projections mark its coordinates on the two axes.    The vector with coordinates a1, a2, and a3 drawn from the origin in three-dimensional space. Dashed projections relate the endpoint to the three coordinate axes.     Consider the transformation in given by reflection across the -axis, i.e. gets sent to . We can represent this reflection via a matrix-vector product:         Functions are called transformations from to . A transformation assigns a vector in a uniquely determined vector in , called the image of under .      given by  is a transformation.  What’s the image of under ?         Given an matrix , multiplication by gives a transformation by   for each in . is called the matrix transformation induced by  .     Reflection across the -axis is a matrix transformation with      Is a matrix transformation?    Yes, is a matrix transformation, since it can be written as where     Are all transformations realizable as matrix transformations?    "
},
{
  "id": "ch2-definition-16",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-16",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A matrix is a row vector if it is and is a column vector if it is . Often we will call them just -vectors or vectors of length denoted with bold-face font. For example, or . denotes the set of all -vectors.   "
},
{
  "id": "ch2-example-17",
  "level": "2",
  "url": "section-2-2.html#ch2-example-17",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " is a 3-vector , or a vector in .  The zero vector in , denoted or , is the -vector consisting of all zeros.  An matrix can be thought of a row of column vectors of length :  , where is the -th column of .  "
},
{
  "id": "ch2-example-18",
  "level": "2",
  "url": "section-2-2.html#ch2-example-18",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Consider the linear system Rewrite this system using a linear combination.      "
},
{
  "id": "ch2-definition-19",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-19",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  Let be an matrix, written in terms of its columns If is any -vector, the matrix-vector product  is defined to be the -vector given by:    "
},
{
  "id": "ch2-example-20",
  "level": "2",
  "url": "section-2-2.html#ch2-example-20",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Compute the matrix-vector product where       "
},
{
  "id": "ch2-theorem-21",
  "level": "2",
  "url": "section-2-2.html#ch2-theorem-21",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  Every system of linear equations has the form where is the coefficient matrix, is the constant matrix\/vector, and is the matrix\/vector of variables. The system is consistent if and only if is a linear combination of the columns of .   "
},
{
  "id": "ch2-example-22",
  "level": "2",
  "url": "section-2-2.html#ch2-example-22",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  Is a linear combination of , ?    We need to solve the system: which corresponds to the augmented matrix:   :  :  :  By the last row, the system is inconsistent, so no solution exists. Thus, is not a linear combination of the given vectors.   "
},
{
  "id": "ch2-example-23",
  "level": "2",
  "url": "section-2-2.html#ch2-example-23",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": " If , what is ?  If is the zero matrix, what is ?  "
},
{
  "id": "ch2-answer-12",
  "level": "2",
  "url": "section-2-2.html#ch2-answer-12",
  "type": "Proof",
  "number": "1",
  "title": "Proof of (b) (time permitting).",
  "body": " Proof of (b) (time permitting)  By the definition of matrix-vector multiplication, if has columns , then:  Multiplying by gives:  Applying to this vector:    If we multiply each column of by , we get:   Applying this to :    "
},
{
  "id": "ch2-definition-24",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-24",
  "type": "Definition",
  "number": "2.2.9",
  "title": "",
  "body": "  An ordered sequence of real numbers is called an ordered -tuple .   "
},
{
  "id": "ch2-example-25",
  "level": "2",
  "url": "section-2-2.html#ch2-example-25",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": " is an ordered four -tuple.  "
},
{
  "id": "ch2-definition-26",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-26",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "  If and are two ordered -tuples, their dot product is defined to be the number   obtained by multiplying corresponding entries and adding the results.   "
},
{
  "id": "ch2-example-27",
  "level": "2",
  "url": "section-2-2.html#ch2-example-27",
  "type": "Example",
  "number": "2.2.12",
  "title": "",
  "body": "  The dot product of and is      "
},
{
  "id": "ch2-theorem-28",
  "level": "2",
  "url": "section-2-2.html#ch2-theorem-28",
  "type": "Theorem",
  "number": "2.2.13",
  "title": "",
  "body": "  Let be an matrix and let be an -vector. Then each entry of the vector is the dot product of the corresponding row of with .   From Linear Algebra with Applications, Vretta-Lyryx   The ith entry of the matrix-vector product Ax is the dot product of row i of A with the column vector x. The contributing row, vector, and resulting entry are highlighted.     "
},
{
  "id": "ch2-example-29",
  "level": "2",
  "url": "section-2-2.html#ch2-example-29",
  "type": "Example",
  "number": "2.2.15",
  "title": "",
  "body": "  Compute the product using the dot product, where      "
},
{
  "id": "ch2-definition-30",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-30",
  "type": "Definition",
  "number": "2.2.16",
  "title": "",
  "body": "  For each , the identity matrix  is the matrix with 1s on the main diagonal (upper left to lower right), and zeros elsewhere.   "
},
{
  "id": "section-2-2-6-10",
  "level": "2",
  "url": "section-2-2.html#section-2-2-6-10",
  "type": "Figure",
  "number": "2.2.17",
  "title": "",
  "body": " From Linear Algebra with Applications, Vretta-Lyryx   Identity matrices I2, I3, and I4, with ones on the main diagonal and zeros in every other entry.   "
},
{
  "id": "ch2-fact-31",
  "level": "2",
  "url": "section-2-2.html#ch2-fact-31",
  "type": "Fact",
  "number": "2.2.18",
  "title": "",
  "body": "  For each we have for each -vector in .   "
},
{
  "id": "ch2-example-32",
  "level": "2",
  "url": "section-2-2.html#ch2-example-32",
  "type": "Example",
  "number": "2.2.19",
  "title": "",
  "body": "  Let’s verify this fact for .      "
},
{
  "id": "ch2-definition-33",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-33",
  "type": "Definition",
  "number": "2.2.20",
  "title": "",
  "body": "  Consider , and let denote the th column of , i.e,   These vectors are called the standard basis vectors for (this name will make sense later).   "
},
{
  "id": "ch2-activity-34",
  "level": "2",
  "url": "section-2-2.html#ch2-activity-34",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": "   For , is         Compute for       "
},
{
  "id": "ch2-fact-35",
  "level": "2",
  "url": "section-2-2.html#ch2-fact-35",
  "type": "Fact",
  "number": "2.2.21",
  "title": "",
  "body": "  If be an matrix, then for .   "
},
{
  "id": "ch2-theorem-36",
  "level": "2",
  "url": "section-2-2.html#ch2-theorem-36",
  "type": "Theorem",
  "number": "2.2.22",
  "title": "",
  "body": "  Let and be matrices. If for all in then    Proof  Since for all , choose for . Then for all . That is all the columns are the same, so .   "
},
{
  "id": "ch2-activity-37",
  "level": "2",
  "url": "section-2-2.html#ch2-activity-37",
  "type": "Activity",
  "number": "2.2.2",
  "title": "",
  "body": "  Consider the transformation in given by reflection across the -axis, i.e. gets sent to . We can represent this reflection via a matrix-vector product:      "
},
{
  "id": "ch2-definition-38",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-38",
  "type": "Definition",
  "number": "2.2.23",
  "title": "",
  "body": "  Functions are called transformations from to . A transformation assigns a vector in a uniquely determined vector in , called the image of under .   "
},
{
  "id": "ch2-example-39",
  "level": "2",
  "url": "section-2-2.html#ch2-example-39",
  "type": "Example",
  "number": "2.2.24",
  "title": "",
  "body": "  given by  is a transformation.  What’s the image of under ?      "
},
{
  "id": "ch2-definition-40",
  "level": "2",
  "url": "section-2-2.html#ch2-definition-40",
  "type": "Definition",
  "number": "2.2.25",
  "title": "",
  "body": "  Given an matrix , multiplication by gives a transformation by   for each in . is called the matrix transformation induced by  .   "
},
{
  "id": "ch2-example-41",
  "level": "2",
  "url": "section-2-2.html#ch2-example-41",
  "type": "Example",
  "number": "2.2.26",
  "title": "",
  "body": " Reflection across the -axis is a matrix transformation with   "
},
{
  "id": "ch2-activity-42",
  "level": "2",
  "url": "section-2-2.html#ch2-activity-42",
  "type": "Activity",
  "number": "2.2.3",
  "title": "",
  "body": "  Is a matrix transformation?    Yes, is a matrix transformation, since it can be written as where   "
},
{
  "id": "ch2-question-43",
  "level": "2",
  "url": "section-2-2.html#ch2-question-43",
  "type": "Question",
  "number": "2.2.27",
  "title": "",
  "body": " Are all transformations realizable as matrix transformations?  "
},
{
  "id": "section-2-3",
  "level": "1",
  "url": "section-2-3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication  Textbook section 2.3.  Video (3:40): three ways to see the matrix product : column by column, entry by entry, and as a composition of transformations.     Let be an matrix, be an matrix, and write where is column of . The product matrix is the matrix defined as follows:   in other words, column of is the matrix-vector product of and the corresponding column of .      Let Compute .    Following the definition, we write in terms of its columns:  Then where:    Therefore:      Let be and be , and build the induced matrix representations , and , and consider the composite of and :   Compute .    Let . By the definition of matrix-vector product:  , where is column of  Therefore:      If is and is , then the composite of their induced matrix transformations is another matrix transformation:     Dot Product Definition of Matrix Product  As with matrix-vector products, we have another way to compute matrix products via the dot product:    Let be an matrix, be an matrix. The entry of is the dot product of row of with column of .  This process is shown in the schematic below:  where .   From Linear Algebra with Applications, Vretta-Lyryx   The entry in row i and column j of AB is the dot product of row i of A with column j of B. The selected row, column, and resulting entry are highlighted.       When is the product of two matrices and defined? What is the size of the product ?     Let  What is the entry of ?          Properties of Matrix Multiplication  Assume that are matrices of appropriate sizes. Then:  , i.e. matrix multiplication is associative . . . .   Proof of (d) (if time)  Let be an matrix and be an matrix. Then:   Similarly,    Facts and Warnings about Matrix Multiplication : Let be an matrix and be a matrix, so that their product is defined and is a matrix.  The product may not be defined! If is also defined, the size of and may be the same or different. In the case where and are the same size, and may be equal or they may be different.     Let  Calculate and compare and , if they are defined.      The products and exist but are not equal.       Consider the following matrices:  For each of the following products, determine (i) whether the product is defined, and (ii) if defined, what is the size of the resulting matrix.  and :    For : Matrix is and matrix is  is defined because the number of columns of (3) equals the number of rows of (3) The resulting matrix will be  For : Matrix is and matrix is  is defined because the number of columns of (2) equals the number of rows of (2) The resulting matrix will be      and :    For : Matrix is and matrix is  is defined because the number of columns of (2) equals the number of rows of (2) The resulting matrix will be  For : Matrix is and matrix is  is not defined because the number of columns of (2) does not equal the number of rows of (3)     Key property of identity matrices If is any matrix, then      Matrix Powers  Using the definition of matrix multiplication, we can also define the powers of square matrices. Let be a square matrix. Then We make the convention that  If and are nonnegative integers, then  Warning! It is not necessarily the case that . Why?   "
},
{
  "id": "ch2-definition-44",
  "level": "2",
  "url": "section-2-3.html#ch2-definition-44",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Let be an matrix, be an matrix, and write where is column of . The product matrix is the matrix defined as follows:   in other words, column of is the matrix-vector product of and the corresponding column of .   "
},
{
  "id": "ch2-example-45",
  "level": "2",
  "url": "section-2-3.html#ch2-example-45",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Let Compute .    Following the definition, we write in terms of its columns:  Then where:    Therefore:   "
},
{
  "id": "ch2-example-46",
  "level": "2",
  "url": "section-2-3.html#ch2-example-46",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  Let be and be , and build the induced matrix representations , and , and consider the composite of and :   Compute .    Let . By the definition of matrix-vector product:  , where is column of  Therefore:   "
},
{
  "id": "ch2-fact-47",
  "level": "2",
  "url": "section-2-3.html#ch2-fact-47",
  "type": "Fact",
  "number": "2.3.4",
  "title": "",
  "body": "  If is and is , then the composite of their induced matrix transformations is another matrix transformation:   "
},
{
  "id": "ch2-theorem-48",
  "level": "2",
  "url": "section-2-3.html#ch2-theorem-48",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "",
  "body": "  Let be an matrix, be an matrix. The entry of is the dot product of row of with column of .  This process is shown in the schematic below:  where .   From Linear Algebra with Applications, Vretta-Lyryx   The entry in row i and column j of AB is the dot product of row i of A with column j of B. The selected row, column, and resulting entry are highlighted.     "
},
{
  "id": "ch2-question-49",
  "level": "2",
  "url": "section-2-3.html#ch2-question-49",
  "type": "Question",
  "number": "2.3.7",
  "title": "",
  "body": " When is the product of two matrices and defined? What is the size of the product ?  "
},
{
  "id": "ch2-activity-50",
  "level": "2",
  "url": "section-2-3.html#ch2-activity-50",
  "type": "Activity",
  "number": "2.3.1",
  "title": "",
  "body": "  Let  What is the entry of ?       "
},
{
  "id": "ch2-answer-25",
  "level": "2",
  "url": "section-2-3.html#ch2-answer-25",
  "type": "Proof",
  "number": "1",
  "title": "Proof of (d) (if time).",
  "body": " Proof of (d) (if time)  Let be an matrix and be an matrix. Then:   Similarly,  "
},
{
  "id": "ch2-example-51",
  "level": "2",
  "url": "section-2-3.html#ch2-example-51",
  "type": "Example",
  "number": "2.3.8",
  "title": "",
  "body": "  Let  Calculate and compare and , if they are defined.      The products and exist but are not equal.   "
},
{
  "id": "ch2-activity-52",
  "level": "2",
  "url": "section-2-3.html#ch2-activity-52",
  "type": "Activity",
  "number": "2.3.2",
  "title": "",
  "body": "   Consider the following matrices:  For each of the following products, determine (i) whether the product is defined, and (ii) if defined, what is the size of the resulting matrix.  and :    For : Matrix is and matrix is  is defined because the number of columns of (3) equals the number of rows of (3) The resulting matrix will be  For : Matrix is and matrix is  is defined because the number of columns of (2) equals the number of rows of (2) The resulting matrix will be      and :    For : Matrix is and matrix is  is defined because the number of columns of (2) equals the number of rows of (2) The resulting matrix will be  For : Matrix is and matrix is  is not defined because the number of columns of (2) does not equal the number of rows of (3)     Key property of identity matrices If is any matrix, then   "
},
{
  "id": "section-2-6",
  "level": "1",
  "url": "section-2-6.html",
  "type": "Section",
  "number": "2.4",
  "title": "Linear Transformations",
  "body": " Linear Transformations  Textbook section 2.6.  What makes a transformation a matrix transformation?    A transformation is a linear transformation if  for every . for every and .      Using , is a linear transformation, while is not.    For : For :       If is a linear transformation, what is...  ?    , so      ?        Recall: A vector is a linear combination of vectors if there are scalars such that       If is a linear transformation, then       Suppose is a linear transformation with , . Find .    Need to write as a linear combination of and .  Let be scalars such that: This gives us the system: From the second equation: Substituting into first equation: , so  Therefore:  By linearity of :      Let be a transformation.  is a linear transformation if and only if it is a matrix transformation. In this case, is the matrix transformation induced by the unique matrix , given in terms of its columns by where are the standard basis vectors of .    Proof (if time)  First show that if is a matrix transformation, then it is linear: If for some matrix , then: ,  Now show that if is linear, then it is a matrix transformation: Let . For any , we can write: .  Then by linearity:   .  Therefore is a matrix transformation.  For uniqueness, suppose for some other matrix . Then: for all . Therefore the columns of and are identical, so .      If , and are linear transformations, then is a linear transformation.      Consider the linear transformation defined by . Find the matrix such that .    To find the matrix , we need to find the images of the standard basis vectors under :    Therefore, by the theorem, the matrix is:     The following figure provides a visualization of this transformation.   The distorted (aqua) grid obtained by applying the linear transformation to a (gray) square grid. From: Stanford’s MATH 51 textbook   A linear map sends the standard basis vectors e1 and e2 to f(e1) and f(e2). The square coordinate grid is sent to a parallelogram grid in a plane.       Define by . Show is a linear transformation.          Find , where .         Is there an in with    We need to solve This gives the system: , ,  From third equation: . From second equation: . This does not satisfy first equation:  Therefore, there is no such .     "
},
{
  "id": "ch2-definition-53",
  "level": "2",
  "url": "section-2-6.html#ch2-definition-53",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  A transformation is a linear transformation if  for every . for every and .   "
},
{
  "id": "ch2-example-54",
  "level": "2",
  "url": "section-2-6.html#ch2-example-54",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  Using , is a linear transformation, while is not.    For : For :   "
},
{
  "id": "ch2-example-55",
  "level": "2",
  "url": "section-2-6.html#ch2-example-55",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "   If is a linear transformation, what is...  ?    , so      ?        Recall: A vector is a linear combination of vectors if there are scalars such that    "
},
{
  "id": "ch2-theorem-56",
  "level": "2",
  "url": "section-2-6.html#ch2-theorem-56",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "",
  "body": "  If is a linear transformation, then    "
},
{
  "id": "ch2-activity-57",
  "level": "2",
  "url": "section-2-6.html#ch2-activity-57",
  "type": "Activity",
  "number": "2.4.1",
  "title": "",
  "body": "  Suppose is a linear transformation with , . Find .    Need to write as a linear combination of and .  Let be scalars such that: This gives us the system: From the second equation: Substituting into first equation: , so  Therefore:  By linearity of :   "
},
{
  "id": "ch2-theorem-58",
  "level": "2",
  "url": "section-2-6.html#ch2-theorem-58",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "",
  "body": "  Let be a transformation.  is a linear transformation if and only if it is a matrix transformation. In this case, is the matrix transformation induced by the unique matrix , given in terms of its columns by where are the standard basis vectors of .    Proof (if time)  First show that if is a matrix transformation, then it is linear: If for some matrix , then: ,  Now show that if is linear, then it is a matrix transformation: Let . For any , we can write: .  Then by linearity:   .  Therefore is a matrix transformation.  For uniqueness, suppose for some other matrix . Then: for all . Therefore the columns of and are identical, so .   "
},
{
  "id": "ch2-corollary-59",
  "level": "2",
  "url": "section-2-6.html#ch2-corollary-59",
  "type": "Corollary",
  "number": "2.4.6",
  "title": "",
  "body": "  If , and are linear transformations, then is a linear transformation.   "
},
{
  "id": "ch2-activity-60",
  "level": "2",
  "url": "section-2-6.html#ch2-activity-60",
  "type": "Activity",
  "number": "2.4.2",
  "title": "",
  "body": "  Consider the linear transformation defined by . Find the matrix such that .    To find the matrix , we need to find the images of the standard basis vectors under :    Therefore, by the theorem, the matrix is:    "
},
{
  "id": "section-2-6-13",
  "level": "2",
  "url": "section-2-6.html#section-2-6-13",
  "type": "Figure",
  "number": "2.4.7",
  "title": "",
  "body": " The distorted (aqua) grid obtained by applying the linear transformation to a (gray) square grid. From: Stanford’s MATH 51 textbook   A linear map sends the standard basis vectors e1 and e2 to f(e1) and f(e2). The square coordinate grid is sent to a parallelogram grid in a plane.   "
},
{
  "id": "ch2-example-61",
  "level": "2",
  "url": "section-2-6.html#ch2-example-61",
  "type": "Example",
  "number": "2.4.8",
  "title": "",
  "body": "   Define by . Show is a linear transformation.          Find , where .         Is there an in with    We need to solve This gives the system: , ,  From third equation: . From second equation: . This does not satisfy first equation:  Therefore, there is no such .    "
},
{
  "id": "section-2-4",
  "level": "1",
  "url": "section-2-4.html",
  "type": "Section",
  "number": "2.5",
  "title": "Matrix Inverses",
  "body": " Matrix Inverses  Textbook section 2.4.    An matrix is called nonsingular , or invertible , if there exists an matrix such that . Such a is called the inverse of . If no such exists, is called singular or noninvertible .  Idea : The inverse of a matrix mimics the reciprocal of a real number.      Let and . Compute both and , and make a conclusion using the language of inverses.        Fact: The inverse of a matrix, if it exists, is unique. Therefore, we can write for the inverse of .  Fact: If , then .    Does have an inverse?    Let’s suppose had an inverse . Then:  This gives us the system of equations:  The last equation states that , which is impossible.  Therefore, cannot have an inverse. This means is singular.    Theorem: If both and are nonsingular matrices, then the matrix is nonsingular and its inverse is .   Proof  First,  Similarly,   Follow up facts:  If are invertible\/nonsingular matrices, then is invertible\/nonsingular and If is invertible\/nonsingular, then is invertible\/nonsingular and . If is invertible\/nonsingular, then is invertible\/nonsingular and .    (Inverse of matrix) The matrix is invertible if and only if , in which case   We’ll learn how to compute inverses for bigger matrices soon.      Find the inverse of each matrix, if possible.     For : , so is not invertible.  For : , so     Linear Systems and Inverses  If is an matrix, then the linear system is a system of equations in unknowns. Suppose is nonsingular. How can we use to solve the system ?   Solution  Multiply both sides of by on the left:  Therefore, when is nonsingular, is the solution to .   Consequences :  When exists, then has a unique solution. If is invertible\/nonsingular, then the ONLY solution to the homogeneous system is .    Use the inverse of to solve the linear systems , , and , where , , and are given below.    For :  For :  For :      Algorithm for Calculating Inverses  For a given matrix , if we are looking for an inverse for (call this matrix ), we must have . We are solving linear systems simultaneously:   Solution    Since, to solve each system, we wish to reduce the matrix down to its RREF each time, we can combine all the systems into one big augmented matrix:   Solution     Algorithm for computing  Set up the augmented matrix . Apply elementary row operations to to reduce it to .  If is an matrix, either can be reduced to by elementary row operations or it cannot. In the first case, the algorithm produces ; in the second case, does not exist.     Find where .     :  :  :  Therefore:    Below is a useful compilation of facts and theorems, some of which we’ve discussed in class. You can find the remainder of the proofs in your textbook.   Box Of Facts\/Invertibility Criteria  Let be an matrix. The following are equivalent:  is nonsingular. has only the trivial solution. is row equivalent to . The linear system has a unique solution for every matrix . .     Inverses of Matrix Transformations  Let be a matrix transformation induced by the matrix . What does invertibility imply about the geometry of the transformation ?  Consider . What happens when we compose them?      Given a matrix transformation , if there exists a transformation such that for all , we say that has an inverse.      Let denote the matrix transformation induced by an matrix . Then is invertible if and only if has an inverse. In this case, has exactly one inverse (which we denote as ), and is the transformation induced by the matrix . In other words  and  reverse or undo the action of each other.      Consider given by reflection across the -axis. Find the matrix representing this transformation, and find the inverse.    T is given by matrix  Since , is its own inverse, so       Consider by .  Is this a matrix transformation?    Yes, is a matrix transformation. It can be represented by the matrix  To verify:      Is this invertible?    No, is not invertible. Note that , so is not invertible.      "
},
{
  "id": "ch2-definition-62",
  "level": "2",
  "url": "section-2-4.html#ch2-definition-62",
  "type": "Definition",
  "number": "2.5.1",
  "title": "",
  "body": "  An matrix is called nonsingular , or invertible , if there exists an matrix such that . Such a is called the inverse of . If no such exists, is called singular or noninvertible .  Idea : The inverse of a matrix mimics the reciprocal of a real number.   "
},
{
  "id": "ch2-example-63",
  "level": "2",
  "url": "section-2-4.html#ch2-example-63",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "  Let and . Compute both and , and make a conclusion using the language of inverses.       "
},
{
  "id": "ch2-example-64",
  "level": "2",
  "url": "section-2-4.html#ch2-example-64",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": "  Does have an inverse?    Let’s suppose had an inverse . Then:  This gives us the system of equations:  The last equation states that , which is impossible.  Therefore, cannot have an inverse. This means is singular.   "
},
{
  "id": "ch2-answer-40",
  "level": "2",
  "url": "section-2-4.html#ch2-answer-40",
  "type": "Proof",
  "number": "2.5.1",
  "title": "Proof.",
  "body": " Proof  First,  Similarly,  "
},
{
  "id": "ch2-theorem-65",
  "level": "2",
  "url": "section-2-4.html#ch2-theorem-65",
  "type": "Theorem",
  "number": "2.5.4",
  "title": "",
  "body": "  (Inverse of matrix) The matrix is invertible if and only if , in which case   We’ll learn how to compute inverses for bigger matrices soon.   "
},
{
  "id": "ch2-activity-66",
  "level": "2",
  "url": "section-2-4.html#ch2-activity-66",
  "type": "Activity",
  "number": "2.5.1",
  "title": "",
  "body": "  Find the inverse of each matrix, if possible.     For : , so is not invertible.  For : , so   "
},
{
  "id": "ch2-example-67",
  "level": "2",
  "url": "section-2-4.html#ch2-example-67",
  "type": "Example",
  "number": "2.5.5",
  "title": "",
  "body": "  Use the inverse of to solve the linear systems , , and , where , , and are given below.    For :  For :  For :   "
},
{
  "id": "ch2-example-68",
  "level": "2",
  "url": "section-2-4.html#ch2-example-68",
  "type": "Example",
  "number": "2.5.6",
  "title": "",
  "body": "  Find where .     :  :  :  Therefore:   "
},
{
  "id": "ch2-definition-69",
  "level": "2",
  "url": "section-2-4.html#ch2-definition-69",
  "type": "Definition",
  "number": "2.5.7",
  "title": "",
  "body": "  Given a matrix transformation , if there exists a transformation such that for all , we say that has an inverse.   "
},
{
  "id": "ch2-theorem-70",
  "level": "2",
  "url": "section-2-4.html#ch2-theorem-70",
  "type": "Theorem",
  "number": "2.5.8",
  "title": "",
  "body": "  Let denote the matrix transformation induced by an matrix . Then is invertible if and only if has an inverse. In this case, has exactly one inverse (which we denote as ), and is the transformation induced by the matrix . In other words  and  reverse or undo the action of each other.   "
},
{
  "id": "ch2-example-71",
  "level": "2",
  "url": "section-2-4.html#ch2-example-71",
  "type": "Example",
  "number": "2.5.9",
  "title": "",
  "body": "  Consider given by reflection across the -axis. Find the matrix representing this transformation, and find the inverse.    T is given by matrix  Since , is its own inverse, so   "
},
{
  "id": "ch2-example-72",
  "level": "2",
  "url": "section-2-4.html#ch2-example-72",
  "type": "Example",
  "number": "2.5.10",
  "title": "",
  "body": "   Consider by .  Is this a matrix transformation?    Yes, is a matrix transformation. It can be represented by the matrix  To verify:      Is this invertible?    No, is not invertible. Note that , so is not invertible.    "
},
{
  "id": "section-3-1",
  "level": "1",
  "url": "section-3-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Cofactor Expansion",
  "body": " The Cofactor Expansion  Textbook section 3.1.  In this chapter, we are working with square matrices.  Goal of this section: Find a number (called a determinant ) that we can calculate from a matrix that tells us whether or not it’s invertible.  Let’s start with : .  We saw a result in the previous chapter that   When can this go wrong?   Solution  : formula is undefined due to division by     The determinant of is       Find the determinant of and    For :  For :    We can use the determinant to build the determinant. It will not be clear right now why this is the correct analogous function, but we’ll explore that more later.    Let be a matrix. The minor of , denoted , is the determinant of the matrix which results from deleting the row and column of .  In general, if is , then the minor of is the determinant of the matrix which results from deleting the row and column of .      Find and for          Let be a matrix. The - cofactor of , denoted , is the defined to be      Find and for          Let be a matrix. Then the determinant of , , is calculated by picking a row (or column), taking the product of each entry of that row (column) with its cofactor, then adding these products together. In other words, if we pick row , this process is called expanding along the -th row and is given as  This process is called calculating the determinant by cofactor expansion .     Cofactor expansion along the first row. For each entry, delete its row and column to obtain the minor, and apply the sign pattern plus, minus, plus.   First-row cofactor expansion of a 3 by 3 matrix. For each term, the selected first-row entry is blue, the rest of its row and column are gray, and the four entries of its 2 by 2 minor are gold. The signed terms are plus a11 times (a22 a33 minus a23 a32), minus a12 times (a21 a33 minus a23 a31), and plus a13 times (a21 a32 minus a22 a31).       Find the determinant of by expanding along row 1. Also try expanding along column 2.    Using row 1:     Therefore:  Using column 2:          To track the sign , we can view the matrix as a checkerboard pattern:        Note: Since the row\/column doesn’t matter, you should choose the easiest row\/column:          Using row 2 (has two zeros):    . Therefore         Using column 1 (all zeros):  Note: When a row or column is all zeros, the determinant is automatically 0. We didn’t need to calculate the cofactors.     We can compute the determinant of a general matrix by recursively repeating this process:      , if we expand along third column, we get         Let be a matrix ( . Then the determinant of , , is   for some choice of row or column .      Compute for    Using column 1 (3 zeros):    Looking at this determinant, use column 1 again:     Alternative justification: Since is upper triangular, is the product of diagonal entries:      The main diagonal of an matrix is the set of entries .      An matrix is called upper triangular if for , and is called lower triangular if for . A diagonal matrix is both upper and lower triangular.      If is a upper\/lower triangular matrix, then , that is, the determinant of a triangular matrix is the product of the elements on the main diagonal .    See Example  .     Properties of Determinants    If a row (column) of consists entirely of zeros, then .    Why is it true?  See Activity  .      If results from by interchanging two different rows (or two different columns), then .    Why is it true?  Check for : and OTOH, and      If two rows (columns) of are equal,then .    Why is it true?  Let be the matrix obtained by interchanging these two equal rows. Then (since the rows were equal) but also (by the previous theorem about row interchanges). Therefore: . This implies , so .      If is obtained from by multiplying a row (column) of by a real number , then .    Why is it true?  Suppose row is multiplied by . Expand along that row since does not depend on the -th row.      If is an matrix, then .      If is obtained by adding times the th row of to the th row ( ), written as , then .  Check for :         Row Operations and the Determinant: Here is a summary of how the elementary row operations affect the determinant:  Type I (scaling): multiplies determinant by Type II (interchange): multiplies determinant by Type III (replacement): leaves determinant unchanged     If is obtained from by the following operations: , , and , and , what is the determinant of ?    : multiplies det by  : multiplies det by  : no change in det  Therefore      Compute the determinant of the matrix    Use row operations to make the matrix upper triangular:   :  :  Now we have an upper triangular matrix. The determinant is because we have a row of zeros.     "
},
{
  "id": "ch3-definition-1",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-1",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  The determinant of is    "
},
{
  "id": "ch3-activity-2",
  "level": "2",
  "url": "section-3-1.html#ch3-activity-2",
  "type": "Activity",
  "number": "3.1.1",
  "title": "",
  "body": "  Find the determinant of and    For :  For :   "
},
{
  "id": "ch3-definition-3",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-3",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": "  Let be a matrix. The minor of , denoted , is the determinant of the matrix which results from deleting the row and column of .  In general, if is , then the minor of is the determinant of the matrix which results from deleting the row and column of .   "
},
{
  "id": "ch3-activity-4",
  "level": "2",
  "url": "section-3-1.html#ch3-activity-4",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  Find and for       "
},
{
  "id": "ch3-definition-5",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-5",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  Let be a matrix. The - cofactor of , denoted , is the defined to be   "
},
{
  "id": "ch3-activity-6",
  "level": "2",
  "url": "section-3-1.html#ch3-activity-6",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Find and for       "
},
{
  "id": "ch3-definition-7",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-7",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": "  Let be a matrix. Then the determinant of , , is calculated by picking a row (or column), taking the product of each entry of that row (column) with its cofactor, then adding these products together. In other words, if we pick row , this process is called expanding along the -th row and is given as  This process is called calculating the determinant by cofactor expansion .   "
},
{
  "id": "section-3-1-18",
  "level": "2",
  "url": "section-3-1.html#section-3-1-18",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " Cofactor expansion along the first row. For each entry, delete its row and column to obtain the minor, and apply the sign pattern plus, minus, plus.   First-row cofactor expansion of a 3 by 3 matrix. For each term, the selected first-row entry is blue, the rest of its row and column are gray, and the four entries of its 2 by 2 minor are gold. The signed terms are plus a11 times (a22 a33 minus a23 a32), minus a12 times (a21 a33 minus a23 a31), and plus a13 times (a21 a32 minus a22 a31).   "
},
{
  "id": "ch3-example-8",
  "level": "2",
  "url": "section-3-1.html#ch3-example-8",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "   Find the determinant of by expanding along row 1. Also try expanding along column 2.    Using row 1:     Therefore:  Using column 2:          To track the sign , we can view the matrix as a checkerboard pattern:        Note: Since the row\/column doesn’t matter, you should choose the easiest row\/column:   "
},
{
  "id": "ch3-activity-9",
  "level": "2",
  "url": "section-3-1.html#ch3-activity-9",
  "type": "Activity",
  "number": "3.1.4",
  "title": "",
  "body": "      Using row 2 (has two zeros):    . Therefore         Using column 1 (all zeros):  Note: When a row or column is all zeros, the determinant is automatically 0. We didn’t need to calculate the cofactors.     We can compute the determinant of a general matrix by recursively repeating this process:   "
},
{
  "id": "ch3-example-10",
  "level": "2",
  "url": "section-3-1.html#ch3-example-10",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  , if we expand along third column, we get      "
},
{
  "id": "ch3-definition-11",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-11",
  "type": "Definition",
  "number": "3.1.8",
  "title": "",
  "body": "  Let be a matrix ( . Then the determinant of , , is   for some choice of row or column .   "
},
{
  "id": "ch3-example-12",
  "level": "2",
  "url": "section-3-1.html#ch3-example-12",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "  Compute for    Using column 1 (3 zeros):    Looking at this determinant, use column 1 again:     Alternative justification: Since is upper triangular, is the product of diagonal entries:   "
},
{
  "id": "ch3-definition-13",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-13",
  "type": "Definition",
  "number": "3.1.10",
  "title": "",
  "body": "  The main diagonal of an matrix is the set of entries .   "
},
{
  "id": "ch3-definition-14",
  "level": "2",
  "url": "section-3-1.html#ch3-definition-14",
  "type": "Definition",
  "number": "3.1.11",
  "title": "",
  "body": "  An matrix is called upper triangular if for , and is called lower triangular if for . A diagonal matrix is both upper and lower triangular.   "
},
{
  "id": "ch3-theorem-15",
  "level": "2",
  "url": "section-3-1.html#ch3-theorem-15",
  "type": "Theorem",
  "number": "3.1.12",
  "title": "",
  "body": "  If is a upper\/lower triangular matrix, then , that is, the determinant of a triangular matrix is the product of the elements on the main diagonal .    See Example  .   "
},
{
  "id": "ch3-theorem-16",
  "level": "2",
  "url": "section-3-1.html#ch3-theorem-16",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "",
  "body": "  If a row (column) of consists entirely of zeros, then .    Why is it true?  See Activity  .   "
},
{
  "id": "ch3-theorem-17",
  "level": "2",
  "url": "section-3-1.html#ch3-theorem-17",
  "type": "Theorem",
  "number": "3.1.14",
  "title": "",
  "body": "  If results from by interchanging two different rows (or two different columns), then .    Why is it true?  Check for : and OTOH, and   "
},
{
  "id": "ch3-theorem-18",
  "level": "2",
  "url": "section-3-1.html#ch3-theorem-18",
  "type": "Theorem",
  "number": "3.1.15",
  "title": "",
  "body": "  If two rows (columns) of are equal,then .    Why is it true?  Let be the matrix obtained by interchanging these two equal rows. Then (since the rows were equal) but also (by the previous theorem about row interchanges). Therefore: . This implies , so .   "
},
{
  "id": "ch3-theorem-19",
  "level": "2",
  "url": "section-3-1.html#ch3-theorem-19",
  "type": "Theorem",
  "number": "3.1.16",
  "title": "",
  "body": "  If is obtained from by multiplying a row (column) of by a real number , then .    Why is it true?  Suppose row is multiplied by . Expand along that row since does not depend on the -th row.   "
},
{
  "id": "ch3-fact-20",
  "level": "2",
  "url": "section-3-1.html#ch3-fact-20",
  "type": "Fact",
  "number": "3.1.17",
  "title": "",
  "body": "  If is an matrix, then .   "
},
{
  "id": "ch3-theorem-21",
  "level": "2",
  "url": "section-3-1.html#ch3-theorem-21",
  "type": "Theorem",
  "number": "3.1.18",
  "title": "",
  "body": "  If is obtained by adding times the th row of to the th row ( ), written as , then .  Check for :       "
},
{
  "id": "ch3-example-22",
  "level": "2",
  "url": "section-3-1.html#ch3-example-22",
  "type": "Example",
  "number": "3.1.19",
  "title": "",
  "body": "  If is obtained from by the following operations: , , and , and , what is the determinant of ?    : multiplies det by  : multiplies det by  : no change in det  Therefore   "
},
{
  "id": "ch3-example-23",
  "level": "2",
  "url": "section-3-1.html#ch3-example-23",
  "type": "Example",
  "number": "3.1.20",
  "title": "",
  "body": "  Compute the determinant of the matrix    Use row operations to make the matrix upper triangular:   :  :  Now we have an upper triangular matrix. The determinant is because we have a row of zeros.   "
},
{
  "id": "section-3-2",
  "level": "1",
  "url": "section-3-2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Determinants and Matrix Inverses",
  "body": " Determinants and Matrix Inverses  Textbook section 3.2.    If and are matrices, then .      Compute the determinant of , , , , and , where , , and are the matrices Confirm (if time) that and .    For :  For :  For :  For : , . And indeed  For : , . And indeed .      If is an matrix, then is nonsingular if and only if . In this case, .    Proof  ( ) Assume is nonsingular. Then . Taking determinants of both sides: so simplifying . Therefore and .      If is a square matrix, then .      Let be a square matrix. A matrix is called orthogonal if . What are the possible values of if is orthogonal?    If is orthogonal, we have . Taking determinants of both sides:   Therefore, .    "
},
{
  "id": "ch3-theorem-24",
  "level": "2",
  "url": "section-3-2.html#ch3-theorem-24",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "",
  "body": "  If and are matrices, then .   "
},
{
  "id": "ch3-example-25",
  "level": "2",
  "url": "section-3-2.html#ch3-example-25",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Compute the determinant of , , , , and , where , , and are the matrices Confirm (if time) that and .    For :  For :  For :  For : , . And indeed  For : , . And indeed .   "
},
{
  "id": "ch3-theorem-26",
  "level": "2",
  "url": "section-3-2.html#ch3-theorem-26",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": "  If is an matrix, then is nonsingular if and only if . In this case, .    Proof  ( ) Assume is nonsingular. Then . Taking determinants of both sides: so simplifying . Therefore and .   "
},
{
  "id": "ch3-theorem-27",
  "level": "2",
  "url": "section-3-2.html#ch3-theorem-27",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "",
  "body": "  If is a square matrix, then .   "
},
{
  "id": "ch3-example-28",
  "level": "2",
  "url": "section-3-2.html#ch3-example-28",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Let be a square matrix. A matrix is called orthogonal if . What are the possible values of if is orthogonal?    If is orthogonal, we have . Taking determinants of both sides:   Therefore, .   "
},
{
  "id": "section-6-1",
  "level": "1",
  "url": "section-6-1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Examples and Basic Properties",
  "body": " Examples and Basic Properties  Textbook section 6.1.  In Chapter 5, we will work with vectors in . Many results will rely on the fact that vectors in can be added and multiplied by scalars in a familiar way. However, vectors in is not the only set that has these properties.  Since so many useful sets exhibit the same properties, we will develop a name and theory surrounding these sets with addition and scalar multiplication that play nice with each other.    A vector space consists of a nonempty set of objects (called vectors ) that can be added, that can be multiplied by a real number (called a scalar in this context), and for which certain axioms hold. If and are two vectors in , their sum is expressed as , and the scalar product of by a real number is denoted as . The following axioms are assumed to hold.  A1. If and are any elements in , then is in . In this case, we say is closed under vector addition. A2.   for all in . A3.     for all in . A4. There exists an element zero in such that  for any . The vector is called the zero vector . A5. For each in there exists an element in such that  . The vector is called the negative of or additive inverse of . S1. If is any element in and is any real number, then is in . In this case, we say is closed under scalar multiplication. S2.   for any in and any in . S3.   for any in and any in . S4.   for any in and any in . S5.   for any in .  The operation is called vector addition and the operation is called scalar multiplication .     When using a non-standard vector addition and\/or scalar multiplication, we will denote vector addition as and scalar multiplication as .    We will often just use the phrase vector space, dropping the real and assuming our scalars are from the real numbers in this course. However, it is possible to have complex vector spaces, rational vector spaces, etc.! Warning: From now on, vector will just mean an element of a vector space, not necessarily a directed line segment.    The set is a real vector space for any natural number . This is the most common day-to-day vector space.     The set of all matrices with real entries with matrix addition as addition and scalar multiplication of a matrix by a real number as scalar multiplication is a vector space. We denote this vector space by , , or . Prove that is closed under addition and scalar multiplication. What is the zero vector in this vector space?    For matrices : Their sum is For scalar : The zero vector is because: for any matrix       A polynomial (in ) is a function expressible as   where are real numbers and is a nonnegative integer. If , we say has degree  . Let be the set of all polynomials, and let be the set of all polynomials of degree together with the zero polynomial , denoted .  Using the standard polynomial addition and scalar multiplication for polynomials, is a vector space and each is a vector space.  Let’s walk through the proof that (the set of polynomials of degree at most 2) is a vector space.  (A1) If and are in , then is in .    Let and be in . Then . Degree is at most 2, so      (A2) for all in .       Using commutativity of real numbers      (A3) for all in .    Let      Using associativity of real numbers      (A4) There exists an element in such that for all in .    Zero polynomial is For any :      (A5) For each in there exists an element in such that .    For        (S1) If is in and is in , then is in .    For and scalar  Degree still at most 2, so      (S2) for all in and in .             (S3) for all in and in .            (S4) for all in and in .            (S5) for all in .          Let be the set of all ordered pairs of real numbers with the operations  Show that is not a vector space.    Fails axiom A4: no zero vector exists since always Therefore is not a vector space      Let be the set of all ordered pairs of real numbers with the operations  Show that is not a vector space.    Scalar multiplication fails axiom S3: But  Therefore is not a vector space      Consider non-negative real numbers, and define vector addition as , and scalar multiplication as . Does this form a vector space?    The operation is not associative: Let , , . Then: But Since , axiom A3 (associativity) fails and is not a vector space    Below are some nice facts about the interaction of addition and scalar multiplication with the zero vector and the scalar zero.    Let be a vector space. For any in and in , then    If  , then or .     "
},
{
  "id": "ch6-definition-1",
  "level": "2",
  "url": "section-6-1.html#ch6-definition-1",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  A vector space consists of a nonempty set of objects (called vectors ) that can be added, that can be multiplied by a real number (called a scalar in this context), and for which certain axioms hold. If and are two vectors in , their sum is expressed as , and the scalar product of by a real number is denoted as . The following axioms are assumed to hold.  A1. If and are any elements in , then is in . In this case, we say is closed under vector addition. A2.   for all in . A3.     for all in . A4. There exists an element zero in such that  for any . The vector is called the zero vector . A5. For each in there exists an element in such that  . The vector is called the negative of or additive inverse of . S1. If is any element in and is any real number, then is in . In this case, we say is closed under scalar multiplication. S2.   for any in and any in . S3.   for any in and any in . S4.   for any in and any in . S5.   for any in .  The operation is called vector addition and the operation is called scalar multiplication .   "
},
{
  "id": "ch6-note-2",
  "level": "2",
  "url": "section-6-1.html#ch6-note-2",
  "type": "Note",
  "number": "4.1.2",
  "title": "",
  "body": " When using a non-standard vector addition and\/or scalar multiplication, we will denote vector addition as and scalar multiplication as .  "
},
{
  "id": "ch6-note-3",
  "level": "2",
  "url": "section-6-1.html#ch6-note-3",
  "type": "Note",
  "number": "4.1.3",
  "title": "",
  "body": " We will often just use the phrase vector space, dropping the real and assuming our scalars are from the real numbers in this course. However, it is possible to have complex vector spaces, rational vector spaces, etc.! Warning: From now on, vector will just mean an element of a vector space, not necessarily a directed line segment.  "
},
{
  "id": "ch6-example-4",
  "level": "2",
  "url": "section-6-1.html#ch6-example-4",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": " The set is a real vector space for any natural number . This is the most common day-to-day vector space.  "
},
{
  "id": "ch6-example-5",
  "level": "2",
  "url": "section-6-1.html#ch6-example-5",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  The set of all matrices with real entries with matrix addition as addition and scalar multiplication of a matrix by a real number as scalar multiplication is a vector space. We denote this vector space by , , or . Prove that is closed under addition and scalar multiplication. What is the zero vector in this vector space?    For matrices : Their sum is For scalar : The zero vector is because: for any matrix   "
},
{
  "id": "ch6-example-6",
  "level": "2",
  "url": "section-6-1.html#ch6-example-6",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "   A polynomial (in ) is a function expressible as   where are real numbers and is a nonnegative integer. If , we say has degree  . Let be the set of all polynomials, and let be the set of all polynomials of degree together with the zero polynomial , denoted .  Using the standard polynomial addition and scalar multiplication for polynomials, is a vector space and each is a vector space.  Let’s walk through the proof that (the set of polynomials of degree at most 2) is a vector space.  (A1) If and are in , then is in .    Let and be in . Then . Degree is at most 2, so      (A2) for all in .       Using commutativity of real numbers      (A3) for all in .    Let      Using associativity of real numbers      (A4) There exists an element in such that for all in .    Zero polynomial is For any :      (A5) For each in there exists an element in such that .    For        (S1) If is in and is in , then is in .    For and scalar  Degree still at most 2, so      (S2) for all in and in .             (S3) for all in and in .            (S4) for all in and in .            (S5) for all in .       "
},
{
  "id": "ch6-example-7",
  "level": "2",
  "url": "section-6-1.html#ch6-example-7",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Let be the set of all ordered pairs of real numbers with the operations  Show that is not a vector space.    Fails axiom A4: no zero vector exists since always Therefore is not a vector space   "
},
{
  "id": "ch6-example-8",
  "level": "2",
  "url": "section-6-1.html#ch6-example-8",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  Let be the set of all ordered pairs of real numbers with the operations  Show that is not a vector space.    Scalar multiplication fails axiom S3: But  Therefore is not a vector space   "
},
{
  "id": "ch6-example-9",
  "level": "2",
  "url": "section-6-1.html#ch6-example-9",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "  Consider non-negative real numbers, and define vector addition as , and scalar multiplication as . Does this form a vector space?    The operation is not associative: Let , , . Then: But Since , axiom A3 (associativity) fails and is not a vector space   "
},
{
  "id": "ch6-theorem-10",
  "level": "2",
  "url": "section-6-1.html#ch6-theorem-10",
  "type": "Theorem",
  "number": "4.1.10",
  "title": "",
  "body": "  Let be a vector space. For any in and in , then    If  , then or .    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
