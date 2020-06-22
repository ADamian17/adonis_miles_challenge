export const categoryCol = ( x ) => {

    let col = null;

    if (x > 320 && x < 510) {
        col = 'C1';
    }

    if (x > 520 && x < 700) {
        col = 'C2';
    }

    if (x > 710 && x < 900) {
        col = 'C3';
    }

    if (x > 920 && x < 1070) {
        col = 'C4';
    }

    if (x > 1080 && x < 1230) {
        col = 'C5';
    }
    
    return col;
};


// export const findIndex = ( arr ) 
