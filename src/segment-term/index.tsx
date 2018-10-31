import React, { PureComponent } from 'react';
import { Button } from '../button';
import { ButtonList } from '../button-list';
import { Icon } from '../icon';
import ScssVars from '../styles/global/variables.scss';
import Styles from '../styles/segment-term.module.scss';
import cn from '../utilities/classnames';
import SegmentWrapper from './segmentWrapper';

export interface SegmentTermProps {
  editable?: boolean;
  editing?: boolean;
  hasAddButton?: boolean;
  hasSeparator?: boolean;
  label?: string;
  onAddButtonClick?: (e: any) => void;
  onDelete?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onEdit?: (e: any) => void;
  queryName?: string;
  radios?: boolean;
  renderAlert?: () => React.ReactNode;
  renderInputs?: () => React.ReactNode;
  showConfirm?: boolean;
  title: string;
  className?: string;
}

export class SegmentTerm extends PureComponent<SegmentTermProps> {
  public static defaultProps = {
    editable: false,
    editing: false,
    hasAddButton: false,
    hasSeparator: false,
    radios: false,
  };

  public get termControls(): React.ReactNode {
    const {
      editable,
      editing,
      onDelete,
      onConfirm,
      showConfirm,
      ...attributes
    } = this.props;

    if (editing) {
      return (
        onDelete && (
          <a
            className="btn btn-small btn-trash"
            style={{ cursor: 'pointer', color: ScssVars['slate-60'] }}
            onClick={onDelete}
          >
            <Icon type="trash" />
          </a>
        )
      );
    }

    if (editable) {
      return (
        <Icon
          type="pencil"
          className={cn('segment-term-edit', Styles['segment-term-edit'])}
          style={{ opacity: 1, color: ScssVars['slate-60'] }}
        />
      );
    }

    return null;
  }

  public render() {
    const {
      hasAddButton,
      hasSeparator,
      editable,
      editing,
      label,
      onAddButtonClick,
      onEdit,
      queryName,
      radios,
      renderAlert,
      renderInputs,
      title,
      onDelete,
      onConfirm,
      showConfirm,
      className,
      ...attributes
    } = this.props;

    return (
      <div
        className={cn(
          'segment-term-wrap',
          Styles['segment-term-wrap'],
          className
        )}
        {...attributes}
      >
        <p className={cn('segment-term-title', Styles['segment-term-title'])}>
          {title}
        </p>
        <div
          className={cn('segment-term', Styles['segment-term'], {
            // Double class names to keep unhashed classes for styleguide
            [Styles['has-alert']]: !!renderAlert,
            'has-alert': !!renderAlert,
            [Styles['has-radios']]: radios,
            'has-radios': radios,
            [Styles['has-separator']]: hasSeparator,
            'has-separator': hasSeparator,
            [Styles['is-editable']]: editing,
            'is-editable': editing,
            [Styles['is-live']]: !editable,
            'is-live': !editable,
          })}
          onClick={editable && !editing ? onEdit : undefined}
        >
          {editing && renderInputs && renderInputs()}
          {!editing && (
            <p>
              {`${label} `}
              <strong>{queryName}</strong>
            </p>
          )}
          {this.termControls}
          {renderAlert && renderAlert()}
        </div>
        {hasAddButton && (
          <ButtonList>
            <Button type="secondary" icon="plus" onClick={onAddButtonClick}>
              Add Condition
            </Button>
          </ButtonList>
        )}
      </div>
    );
  }
}

export { SegmentWrapper };
