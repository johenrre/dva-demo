export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'add'(state, {payload: product}) {
      state.push(product)
      // 这里用 浅拷贝， 不然无法出发 组件的 重新render
      return [...state]
    },
  },
};