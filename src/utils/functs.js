export const getCategoryForPos = ( x ) => {
    if (x > 60 && x < 200) {
        return 'C1';
    }

    if (x > 200 && x < 300) {
        return 'C2';
    }

    if (x > 305 && x < 400) {
        return 'C3';
    }

    if (x > 400 && x < 500) {
        return 'C4';
    }

    if (x > 500 && x < 600) {
        return 'C5';
    }
};

