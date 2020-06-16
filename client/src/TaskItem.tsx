import * as React from 'react';

interface Props {
  index: number;
  indicator: string;
  title: string;
  isRejected: boolean;
  isNew: boolean;
  author: string;
}

const TaskItem: React.FC<Props> = ({ index, indicator, title, isRejected, isNew, author }) => {
  return (
    <li className="list-group-item">
      <div className={`todo-indicator bg-${indicator}`} />
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-left mr-2">
            <div className="custom-checkbox custom-control">
              <input className="custom-control-input" id={`exampleCustomCheckbox${index}`} type="checkbox" />
              <label className="custom-control-label" htmlFor={`exampleCustomCheckbox${index}`}>
                &nbsp;
              </label>
            </div>
          </div>
          <div className="widget-content-left">
            <div className="widget-heading">
              {title}
              {isRejected && <div className="badge badge-danger ml-2">Rejected</div>}
            </div>
            <div className="widget-subheading">
              <i>
                By {author}
                {isNew && <div className="badge badge-pill badge-info ml-2">NEW</div>}
              </i>
            </div>
          </div>
          <div className="widget-content-right">
            <button className="border-0 btn-transition btn btn-outline-success">
              <i className="fa fa-check" />
            </button>
            <button className="border-0 btn-transition btn btn-outline-danger">
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
