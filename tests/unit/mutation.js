export default {
    update (state, payload) {
        state.warehouse.forEach((val,index) => {
          if(val.id === payload.id){
              state.warehouse[index] = payload
          }
        })
      }
  }