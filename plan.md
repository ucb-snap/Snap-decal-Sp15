#Debugging Stepper Implementation Plan

##Modifications to the following classes

-thread.js
    -Modification to startProcess in order for detection of debugging mode toggle
-gui.js
    -Implementation of the pointer arrow as well as stepping interface for user
    control of iteration through block
- Add a stop block which simply acts as a block where we should stop the debugging execution.
- Evaluate code for play/pause buttons and determine how they carry out their functionality 
-   Using this knowledge generate a stepper button and insert into gui which would then create 
-   
there is a **allHatBlocksFor** method within objects which determines which kind of hat blocks to add to an array
