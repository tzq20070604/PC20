import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { getSystemInfoSync, reLaunch } from '@ray-js/ray';
import { devices, dpKit } from './devices';
import { updateThemeType } from './redux/modules/themeSlice';
import { initializeSystemInfo } from './redux/modules/systemInfoSlice';
import store from './redux';
import './styles/index.less';

interface Props {
  devInfo: DevInfo;
  // eslint-disable-next-line react/require-default-props
  extraInfo?: Record<string, any>;
}

interface State {
  devInfo: DevInfo;
}

const composeLayout = (SubComp: React.ComponentType<any>) => {
  const { dispatch } = store;
  return class PanelComponent extends Component<Props, State> {
    async onLaunch(object: any) {
      console.log('=== App onLaunch111', object); 
      devices.common.init();
      devices.common.onInitialized(device => dpKit.init(device));
      const systemInfo = getSystemInfoSync();
      const { theme } = systemInfo;

      dispatch(initializeSystemInfo(systemInfo));
      dispatch(updateThemeType(theme));
      //如果未登录
     // {apiCategory: "default",path: "pages/login/index",query: {deviceId: 'vdevo174537942491146'}}
      const {path,apiCategory,query} = object
      const queryObj = {path,...query}
      if(!store.getState().user.user && path != 'pages/login/index'){
          // 1. 序列化对象
          const jsonString = JSON.stringify(queryObj);

          // 2. 编码字符串
          const encodedParams = encodeURIComponent(jsonString);

          // 3. 拉起登录页面
          const url = `/pages/login/index?data=${encodedParams}`;
          reLaunch({url})
      }
    }

    render() {
      console.log('=== App onLaunch112', 'render');
      const { extraInfo } = this.props;

      return (
        <Provider store={store}>
          {/* @ts-ignore */}
          <SubComp extraInfo={extraInfo} {...this.props} />
        </Provider>
      );
    }
  };
};

export default composeLayout;
