const state = {
  count: 0,
  personInfor: {}
}

const mutations = {
  increment (state) {
    state.count++
  },
  updateInfor (state, obj) {
    state.personInfor = obj
  }
}

const actions = {
  increment (ctx) {
    ctx.commit('increment')
  },
  updateInfor (ctx, obj) {
    ctx.commit('updateInfor', obj)
  }
}

const getter = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getter
}
