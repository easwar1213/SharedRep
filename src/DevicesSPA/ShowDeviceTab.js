import React, {PureComponent} from 'react';
import Panel from '../components/Panel';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

class ShowDeviceTab extends PureComponent {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    const {t} = this.props;

    return (
      <Panel xs={12} md={12} lg={12} divider title="Device Details">
        <div className='tabs tabs--justify'>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({active: this.state.activeTab === '1'})}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Device Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({active: this.state.activeTab === '2'})}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Asset Details
              </NavLink>
            </NavItem>            
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='1'>
              <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                use tolerably dependent listening men.</p>
            </TabPane>
            <TabPane tabId='2'>
              <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                use tolerably dependent listening men. No peculiar in handsome together unlocked do by.</p>
            </TabPane>           
          </TabContent>
        </div>
      </Panel>
    )
  }
}

export default (ShowDeviceTab);
