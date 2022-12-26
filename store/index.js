export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, text) {
      state.list = text;
    },
    remove (state, todo) {
      state.list = []
    }
  }