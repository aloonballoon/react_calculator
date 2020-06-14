export const eventHandler = (state, setState) => {
  const operations = {
    x: (val1, val2) => val1 * val2,
    '-': (val1, val2) => val1 - val2,
    '+': (val1, val2) => val1 + val2,
    '÷': (val1, val2) => val1 / val2,
  };
  return (val) => {
    console.log({ val });
    const { total, current, next } = state;
    if (val === 'AC') {
      return setState({ current: 0, next: null, total: 0 });
    } else if (operations[val]) {
      if ((current === 0 || current) && !next) {
        return setState({ ...state, next: val });
      } else {
        return setState({
          ...state,
          next: null,
          total: operations[val](total, current),
        });
      }
    } else if (typeof val === 'number') {
      if (next === 0 || next) {
        return setState({...state, current: val})
      }
      const newNumber = String(state.current) + val;
      return setState({ ...state, current: Number(newNumber) });
    } else if (val === '+/-') {
      return setState({ ...state, current: -state.current });
    }
  };
};
