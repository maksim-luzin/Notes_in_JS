const getDataForm = () => {
  const { category, name, content } = document.forms[0];

  return { category: category.value.trim(), name: name.value.trim(), content: content.value.trim() };
};

export { getDataForm };
