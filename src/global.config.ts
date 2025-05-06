import { GlobalConfig } from '@ray-js/types';

export const tuya = {
  themeLocation: 'theme.json',
  window: {
    backgroundColor: '@bgColor',
    backgroundTextStyle:'@textColor',
    navigationBarTitleText: '1234windowBar',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTextColor'
  },
 
  functionalPages: {
    // 设备详情功能页，若未自定义实现设备详情界面，该项为必填配置，不可删除。
    settings: {
      appid: 'tycryc71qaug8at6yt',
      entryCode: 'entrye0n05idydmmfv',
    },
  },
};

const globalConfig: GlobalConfig = {
  basename: 'https://720c1c3f.r22.cpolar.top',
};

export default globalConfig;
