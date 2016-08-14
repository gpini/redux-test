import React from 'react';
import { Link } from 'react-router';

export default class TabBar extends React.Component {
    render() {
      return <div className="tab-bar">
        <Link to="/" activeClassName="tab-item-active">Battle</Link>
        <Link to="/heroes" activeClassName="tab-item-active">Heroes</Link>
        <div className="tab-content">
          { this.props.children }
        </div>
      </div>
    }
};
