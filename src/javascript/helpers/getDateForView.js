const dateFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const getCreatedDateForView = date => dateFormatter.format(date);

export { getCreatedDateForView };
