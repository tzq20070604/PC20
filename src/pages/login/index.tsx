import React, { useState } from 'react';
import { navigateTo, showTabBar,hideTabBar, Text, View, switchTab, useAppEvent, usePageEvent, I18N, Label,Input, validatePasswordForMember, getUserInfo,showToast, reLaunch } from '@ray-js/ray';
import { NavBar, Button} from '@ray-js/smart-ui';
import { IconFont } from '@/components/icon-font';
import styles from './index.module.less';
import Strings from '@/i18n';
import { useActions,useProps } from '@ray-js/panel-sdk';
import { useSelector } from 'react-redux';
import { getUserState } from '@/redux/modules/userSlice';
import { useAppDispatch } from '../../redux/index';
import { loginRequset } from '@/redux/modules/requsetThunks';
import CustomLoading from '@/components/loading/index'
export function Login(props) {
  console.log(props)
  const [username,setUsername] = useState('')
  const [password,setpassword] = useState('')
  const [loading, setLoading] = useState(false)
  const userInfo = useSelector(getUserState)
  const dispatch = useAppDispatch()

  // 递归添加嵌套参数
function addParams(obj, searchParams, prefix = '') {
  for (const key in obj) {
    const value = obj[key];
    const fullKey = prefix ? `${prefix}[${key}]` : key;
    if (typeof value === 'object' && value !== null) {
      addParams(value, fullKey,searchParams); // 递归处理嵌套
    } else {
      searchParams.append(fullKey, value);
    }
  }
}

  const login = ()=>{
    const data = JSON.parse(props.location.query.data);
    console.log("data:",data)
    const {path, ...query} = data

    const searchParams = new URLSearchParams();
    addParams(query,searchParams)
    console.log(query.deviceId); // 输出：vdevo174537942491146
    const callback = ({error})=>{
      if (error){
        showToast({title:error, icon:'error'})
      } else {
        reLaunch({url:`/${path}?${searchParams.toString()}`})
      }
    }
    dispatch(loginRequset({username, password, callback}))
  }
  function handleUsernameInput(event: any) {
    console.log('onInput', event);
    // Input 强制受控模式，依然保持高性能表现
    setUsername(event.value);
  }

  function handlePasswordInput(event: any) {
    console.log('onInput', event);
    // Input 强制受控模式，依然保持高性能表现
    setpassword(event.value);
  }

  const logout = ()=>{
      
  }
  return (
    <>
      <CustomLoading show={userInfo.loading}></CustomLoading>
      <View className={styles.view}>
        <View
          className={styles.content}
        >
          <View className={styles['space-around']} style={{ marginTop: '50rpx' }}>
          {!userInfo.error && userInfo.user ? 
            <>
                <View><Text>用户名：{userInfo.user.username}欢迎你回来</Text></View>
                <View><Button onClick={logout}>退出登录</Button></View>
            </>:
            <>
                <View className={styles.item}><Label className={styles.label} htmlFor='username'>用户名:</Label><Input placeholder='请输入用户名' onInput={handleUsernameInput} className={styles.input}  id='username' type="text" value={username}/></View>
                <View className={styles.item}><Label className={styles.label} htmlFor='password'>密码:</Label><Input placeholder='请输入密码' onInput={handlePasswordInput} className={styles.input} id='password' type="text" password={true} value={password}/></View>
                <View><Button onClick={login}>登录</Button></View>
            </>    
          }
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;
