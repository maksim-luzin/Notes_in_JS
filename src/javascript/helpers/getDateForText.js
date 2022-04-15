import { GetDatesRegExp } from "../enums";

const getDateFromContent = content => {
  const dates = content.match(GetDatesRegExp);
  if (!dates) return '';

  return dates.join(', ');
};

export { getDateFromContent };
