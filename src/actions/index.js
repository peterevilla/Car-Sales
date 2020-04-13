export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";






export const removeFeature = feature => {
    // dispatch an action here to remove an item
    
    return { type: REMOVE_FEATURE, payload: feature}
  };

  export const buyItem = feature => {
    // dipsatch an action here to add an item
 

    return { type: ADD_FEATURE, payload: feature}
  };