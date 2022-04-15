const root = document.getElementById('root');

const render = Element => { root.innerHTML = Element(); };

export { render };
