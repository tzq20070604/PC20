import React from 'react';
import { navigateTo, showTabBar,hideTabBar, Text, View, switchTab, useAppEvent, usePageEvent, I18N, Label,Input, validatePasswordForMember } from '@ray-js/ray';
import { NavBar, Button } from '@ray-js/smart-ui';
import { IconFont } from '@/components/icon-font';
import styles from './index.module.less';
import Strings from '@/i18n';
import { useActions,useProps } from '@ray-js/panel-sdk';

export function Home() {
  usePageEvent('onShow', () => {
    console.log('onShow');
  });
  const actions = useActions()
  const switch_go = useProps((props)=>props.switch_go)
  
  const handle=()=>{
    let aa = {"a":[1,2,3]}
    let bb = {"a":[4,5,6]}
    let cc = {...aa, ...bb}
    console.log(cc)
  }
  const tabbarShow = ()=>{
    showTabBar({
      animation: true
    })
  }

  const tabbarHidden = ()=>{
    hideTabBar({
      animation: true
    });
  }
  async function btnClick(){
    let res = await actions.switch_go.set(true)
    let res1 = await new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(999)
      }, 10000);
    })
    console.log("res",res)
    console.log("res1",res1)
  }

  function navClick(){
    switchTab({url:'/pages/profile/index?aaa=123&bbb=456'})
    // navigateTo({url:'/pages/profile/index?aaa=123&bbb=456'})
  }
  
  return (
    <>
      {/* <NavBar leftText="Home" leftTextType="home" /> */}
      <View className={styles.view}>
        <View
          className={styles.content}
        >
          <View className={styles['space-around']} style={{ marginTop: '50rpx' }}>
          <>
              <View><Label>用户名:</Label><input type="text" /></View>
              <View><Label>密码:</Label><input type="text" value={password}/></View>
              <Input type='submit'>登录</Input>
            </>
            <Text className={styles.text}>{"多语言:" + Strings.getLang('home')}</Text>
            <Text className={styles.text}>{"多语言:" + I18n.t('home')}</Text>
            <View>power: {switch_go ? "true" : "false"}</View>
            <Button type="primary"  onClick={btnClick}>Smart UI Primary Button</Button>
            <Button type="primary"  onClick={navClick}>跳转到Profile页面</Button>
            <Button type="primary"  onClick={tabbarShow}>显示Tabbar</Button>
            <Button type="primary"  onClick={tabbarHidden}>隐藏Tabbar</Button>
            <IconFont icon="sun" />
          </View>
        </View>
      </View>
    </>
  );
}

export default Home;
