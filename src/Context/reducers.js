


export const AgeReducer = (state , action) =>{

    switch (action.type) {

        case 'ADD_5':
            console.log(state)
            return [parseInt(state)+ parseInt(5) ]
        case 'DEC_5':
            return [parseInt(state - 5)]
        default:
            return state

    }
}