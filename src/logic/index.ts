export const eventHandler = (state, setState) => {
  const operations = {
    x: (val1, val2) => val1 * val2,
    '-': (val1, val2) => val1 - val2,
    '+': (val1, val2) => val1 + val2,
    '÷': (val1, val2) => val1 / val2,
  };
  return (val) => {
    const { total, display, operation, clear, decimal } = state;
    if (val === 'AC') {
      return setState({
        display: 0,
        operation: null,
        total: 0,
        decimal: false,
        clear: false,
      });
    } else if (val === '+/-') {
      return setState({ ...state, display: -state.display });
    } else if (operations[val]) {
      if (!operation) {
        setState({ ...state, operation: val, clear: true, total: display });
      } else {
        const newTotal = operations[operation](total, display);
        setState({
          ...state,
          total: newTotal,
          display: newTotal,
          operation: val,
          clear: true,
          decimal: false,
        });
      }
    } else if (typeof val === 'number') {
      if (operation && clear) {
        setState({ ...state, clear: false, display: val });
      } else if (decimal) {
        setState({
          ...state,
          display: Number(String(state.display) + '.' + String(val)),
          decimal: false,
        });
      } else {
        setState({
          ...state,
          display: Number(String(state.display) + String(val)),
        });
      }
    } else if (val === '=' && operation) {
      const newTotal = operations[operation](total, display);
      return setState({
        ...state,
        total: newTotal,
        display: newTotal,
        clear: false,
        operation: null,
        decimal: false,
      });
    } else if (val === '%') {
      return setState({
        ...state,
        display: display / 100,
      });
    } else if (val === '.') {
      return setState({
        ...state,
        decimal: true,
      });
    }
  };
};
