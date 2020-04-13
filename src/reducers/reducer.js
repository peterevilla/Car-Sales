import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/index'
 
 
 export const initialState = {

    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
    
}

export const reducer = (state = initialState, action) => {

   let newState 
  
    switch (action.type) {

        case ADD_FEATURE: 

            newState = {...state, car: {
                price: state.car.price + action.payload.price,
                features: [...state.car.features, action.payload],
                image: state.car.image,
                name: state.car.name
            }, additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload.id)}
            
            console.log(newState)
            return newState
        
        case REMOVE_FEATURE: 

            newState = {...state, car: {

                price: state.car.price - action.payload.price,
                image: state.car.image,
                features: state.car.features.filter(item => { return item !== action.payload}),
                name: state.car.name
            }, additionalFeatures: [...state.additionalFeatures, action.payload]}
            console.log(newState)
            return newState


        default:
            return state

    }

}
