// El AppReducer se usa para especificar los cambios de estado de la aplicacion en respuesta a unas acciones para cada contexto.
export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transaction: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}