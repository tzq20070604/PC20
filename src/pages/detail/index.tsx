import React from 'react';
import { backToHomeAndOpenPanel, navigateBack, navigateTo, Text, View } from '@ray-js/ray';
import { NavBar, Button } from '@ray-js/smart-ui';
import { IconFont } from '@/components/icon-font';
import styles from './index.module.less';
import { useActions,useProps } from '@ray-js/panel-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { add,addMinusType,minus } from '@/redux/modules/addMinusSlice';
import { useAppDispatch } from '@/redux';

export function Detail(params) {
  console.log(params)
  const actions = useActions()
  const switch_go = useProps((props)=>props.switch_go)
  const dispatch = useAppDispatch()
  const info = useSelector(addMinusType)
  const handle=()=>{
    let aa = {"a":[1,2,3]}
    let bb = {"a":[4,5,6]}
    let cc = {...aa, ...bb}
    console.log(cc)
  }

  handle()

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

  function backToHome(){
    navigateBack({'delta':2})
  }

  function backToProfile(){
    navigateBack({'delta':1})
  }
  
  function add1(params){
    dispatch(add(params))
  }

  function minus1(params){
    dispatch(minus(params))
  }
  return (
    <>
      {/* <NavBar leftText="Home" leftTextType="home" /> */}
      <View className={styles.view}>
        <View
          className={styles.content}
        >
          <View className={styles['space-around']} style={{ marginTop: '50rpx' }}>
            <Text>Public SDM Template</Text>
            <Text>加后结果：{info.value1}</Text>
            <Text>减后结果：{info.value2}</Text>
            <View>power: {switch_go ? "true" : "false"}</View>
            <Button type="primary"  onClick={btnClick}>Smart UI Primary Button</Button>
            <Button type="primary"  onClick={backToHome}>返回到Home页面</Button>
            <Button type="primary"  onClick={backToProfile}>返回到Profile页面</Button>
            <IconFont icon="sun" />
            <Button type="primary" onClick={()=>add1(5)}>+5</Button>
            <Button type="primary" onClick={()=>minus1(2)}>-2</Button>
          </View>
        </View>
      </View>
    </>
  );
}

export default Detail;
