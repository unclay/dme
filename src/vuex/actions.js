export const increment = ({ dispatch }) => {
  dispatch('INCREMENT')
}

export const updatePath = ({ dispatch }, path) => {
  dispatch('UPDATE_PATH', path)
}

export const addDemos = ({ dispatch }) => {
  dispatch('ADD_DEMOS')
}