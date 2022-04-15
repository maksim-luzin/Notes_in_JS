import { ContentForView } from '../enums';

const getContentForView = content => (
  content.length < ContentForView.MaxContentLength
    ? content
    : `${content.slice(0, ContentForView.LengthForCut)}...`
);

export { getContentForView };
