export const categoryCol = ( x ) => {
    
  let categoryCol = null;

  if (x > 364 && x < 482) {
    categoryCol = {
      col: 'C1'
    }
  };

  if (x > 550 && x < 662) {
    categoryCol = {
      col: 'C2'
    }
  };

  if (x > 733 && x < 847) {
    categoryCol = {
      col: 'C3'
    }
  };

  if ( x > 919 && x < 1031 ) {
    categoryCol = {
      col: 'C4'
    }
  };

  if (x > 1100 && x < 1214) {
    categoryCol = {
      col: 'C5'
    }
  };

  return categoryCol;
};