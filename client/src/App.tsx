import * as React from 'react';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './App.css';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { DEMO_PROPS } from './constant';
import TaskItem from './TaskItem';

const App = () => {
  return (
    <div className="row d-flex justify-content-center container">
      <div className="col-md-8">
        <div className="card-hover-shadow-2x mb-3 card">
          <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i className="fa fa-tasks" />
              &nbsp;Task Lists
            </div>
          </div>
          <div className="scroll-area-sm">
            <PerfectScrollbar className="ps-show-limits">
              <div style={{ position: 'static' }} className="ps ps--active-y">
                <div className="ps-content">
                  <ul className="list-group list-group-flush">
                    {DEMO_PROPS.map((item, index) => {
                      const { indicator, title, isRejected, isNew, author } = item;
                      return (
                        <TaskItem
                          key={index}
                          index={index}
                          indicator={indicator}
                          title={title}
                          isRejected={isRejected}
                          isNew={isNew}
                          author={author}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </PerfectScrollbar>
          </div>
          <div className="d-block text-right card-footer">
            <button className="mr-2 btn btn-link btn-sm">Cancel</button>
            <button className="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
