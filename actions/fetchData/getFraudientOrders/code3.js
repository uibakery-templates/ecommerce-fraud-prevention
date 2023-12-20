const fraudient = {{state.getValue('fraudReported')}};

return {{data}}.filter(({id}) => !fraudient.includes(id));