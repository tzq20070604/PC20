
import { PageContainer, Progress, View, Text} from 'ray';
import React, { CSSProperties, FC } from 'react';
import {Loading} from '@ray-js/smart-ui'
import styles from './index.module.less'
type Props = {
   show:boolean;
}
export const PageLoading = (props)=>{
  return (
    <PageContainer show={props.show} overlayStyle={{backgroundColor:'#00000066'}} customStyle={{backgroundColor:'transparent',display:'flex',justifyContent:'center',alignItems:'center'}} position='center'>
        <Loading></Loading>
    </PageContainer>
  )
}

export default PageLoading