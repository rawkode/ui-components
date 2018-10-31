import React, { Fragment } from 'react';
import cn from './utilities/classnames';

export interface TruncatedListProps {
  items: Array<string> | Array<object>;
  limit?: number;
  className?: string;
  link?: string;
  renderItems?: (item: Array<any>) => JSX.Element;
  renderMore?: (truncatedCount: string, link: string) => JSX.Element;
}

export const TruncatedList: React.SFC<TruncatedListProps> = ({
  items,
  limit = 3,
  className,
  link,
  renderItems,
  renderMore,
  ...attributes
}) => {
  const shown = items.slice(0, limit);
  const abbreviationTitle = items.slice(limit);
  const abbreviatedText = abbreviationTitle.join(', ');
  const shownText = shown.join(', ');
  const truncated = items.slice(limit);
  const numberOfAdditionalItems = truncated.length;
  const hasAdditionalItems = numberOfAdditionalItems > 0;

  const additionalItemText = (
    <span>
      ,{' '}
      <abbr title={abbreviatedText}>
        {link && <a href={link}>+{numberOfAdditionalItems} more</a>}
        {!link && <Fragment>+{numberOfAdditionalItems} more</Fragment>}
      </abbr>
    </span>
  );

  return (
    <span className={className} {...attributes}>
      {renderItems ? renderItems(shown) : shownText}
      {renderMore && renderMore(numberOfAdditionalItems.toString(), link)}
      {!renderMore && hasAdditionalItems && additionalItemText}
    </span>
  );
};

export default TruncatedList;
