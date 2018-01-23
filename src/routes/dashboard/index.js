import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { routerRedux , Link} from 'dva/router';
import { Layout } from 'components'
import styles from './index.less';
import {getLocalIcon} from 'utils'
import Banner from 'components/banner/index';
import Navbox from 'components/navbox/index';
import Notice from 'components/noticebar/index';
import Contentbox from 'components/contentbox/index';
import List from 'components/list/index'

function Dashboard({
  location , dashboard , loading , dispatch
}) {
  const {Header} = Layout
  ,headerProps = {
      dispatch
  }
  ,{modules}=dashboard;
  return (
    <div>
      <Header/>
      <Banner/>
      <Navbox modules={modules}/>
      <Notice/>
      <Contentbox/>
      <List/>
    </div>
  );
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
