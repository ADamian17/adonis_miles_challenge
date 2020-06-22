export const categoryCol = ( x ) => {

    let col = null;

    if (x > 364 && x < 482) {
        col = 'C1';
    }

    if (x > 550 && x < 662) {
        col = 'C2';
    }

    if (x > 733 && x < 847) {
        col = 'C3';
    }

    if (x > 919 && x < 1031) {
        col = 'C4';
    }

    if (x > 1100 && x < 1214) {
        col = 'C5';
    }
    
    return col;
};
