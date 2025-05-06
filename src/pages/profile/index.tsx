import React from 'react';
import { Text, View, getLaunchOptions, getLaunchOptionsSync, navigateBack, navigateTo, publishDps } from '@ray-js/ray';
import { NavBar, Button } from '@ray-js/smart-ui';
import { IconFont } from '@/components/icon-font';
import styles from './index.module.less';
import { useActions,useDevice,useProps, useStructuredActions, useStructuredProps } from '@ray-js/panel-sdk';
import { devices } from '../../devices/index';

export function Profile(params) {
  const device = useDevice()
  let {query:{deviceId}} = getLaunchOptionsSync()
  console.log("getLaunchOptionsSync:",deviceId) 
  const actions = useActions()
  const strActions = useStructuredActions()
  const lightProp = useProps((props)=>props.light_action)
  const strLightProp = useStructuredProps((props)=>props.light_action)
  const switch_go = useProps((props)=>props.switch_go)
  console.log(params.location.query)

 
  const handle=()=>{
    let aa = {"a":[1,2,3]}
    let bb = {"a":[4,5,6]}
    let cc = {...aa, ...bb}
    console.log(cc)
  }
  handle()

  const btnClick = async ()=>{
    strActions.light_action.set({
      alpha:0x55,
      r:0x66,
      g:0x77,
      b:0x88
    })
  }

  const btnClickSwitch = ()=>{
    // 回调可以打印
    // publishDps({
    //   deviceId:deviceId,
    //   dps: { 2: !switch_go },
    //   mode: 2,
    //   pipelines: [0, 1, 2, 3, 4, 5, 6],
    //   options: {"aaa":'123'},
    //   success: (res) => {
    //     console.log('publishDps success', res);
    //   },
    //   fail: (error) => {
    //     console.log('publishDps fail', error);
    //   }
    // });
    
    let res = await actions.switch_go.toggle({immediate:true})
    actions.switch_go.toggle({immediate:true}).then((ans)=>{
      console.log("ans",ans)
    }).catch(err=>{
      console.log("err:",err)
    })
    // let res1 = await actions.switch_go.set(true,{immediate:true})
    // console.log("switch_go",res)
  }

  function backToHome(){
    navigateBack()
  }

  function navToDetail(){
    navigateTo({url:'/pages/detail/index?ddd=9998',success:(res)=>{
      console.log("success",res)
    },fail(res1){console.log("fail",res1)}})
  }
  
  return (
    <>
      {/* <NavBar leftArrow={true} leftText='Profile' /> */}
      <View className={styles.view}>
        <View
          className={styles.content}
        >
          <View className={styles['space-around']} style={{ marginTop: '50rpx' }}>
            <Text>light_prop:{lightProp}</Text>
            <Text>strLight_prop:{`${strLightProp.alpha}-${strLightProp.r}-${strLightProp.g}-${strLightProp.b}`}</Text>
            <View>power: {switch_go ? "true" : "false"}</View>
            <Button type="primary"  onClick={btnClickSwitch}>switchGoTogger</Button>
            <Button type="primary"  onClick={btnClick}>LightAction</Button>
            <Button type="primary"  onClick={backToHome}>返回到Home页面</Button>
            <Button type="primary"  onClick={navToDetail}>跳转到detail页面</Button>
            <IconFont icon="sun" />
          </View>
        </View>
      </View>
    </>
  );
}

export default Profile;
