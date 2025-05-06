import { SmartDeviceSchema } from '@/typings/sdm';
import { OnDpDataChangeInterceptor, PublishDpsInterceptor, SmartDeviceModel, SmartGroupModel } from '@ray-js/panel-sdk';
import { createDpKit } from '@ray-js/panel-sdk/lib/sdm/interceptors/dp-kit';
import { getLaunchOptionsSync } from '@ray-js/ray';
import { protocols } from '@/devices/protocols';

const isGroupDevice = !!getLaunchOptionsSync()?.query?.groupId;

export const dpKit = createDpKit<SmartDeviceSchema>({ protocols });
const pbInterceptor:PublishDpsInterceptor = (context)=>(next)=>(data,option)=>{
   console.log("pbInterceptors:", data)
   return next(data, option)
}

const onDpChangeInterceptor:OnDpDataChangeInterceptor = (context)=>(next)=>(data)=>{
   console.log("onDpChangeInterceptor:",data)
   return next(data)
}

// 未使用
export const ignoreDpChangeInterceptor: OnDpDataChangeInterceptor = ctx => next => data => {
   // @ts-ignore
   if (data.__from__ === 'dp-kit') {
     console.log(`[ignoreDpChangeInterceptor] 立即触发`);
     return next(data);
   } else {
     console.log(`[ignoreDpChangeInterceptor] 忽略设备上报`);
   }
 };

const options = {
  
  interceptors: {
     request:{
        publishDps:[dpKit.publishDps, pbInterceptor]
     },
     response:{
        ...dpKit.interceptors.response,
        onDpDataChange:[dpKit.onDpDataChange,onDpChangeInterceptor]
     }
  }
};

/**
 * SmartDevices 定义来自于 typings/sdm.d.ts，非 TypeScript 开发者可忽略
 * The SmartDevices definition comes from typings/sdm.d.ts and can be ignored by non-TypeScript developers
 */
export const devices = {
  /**
   * 此处建议以智能设备的名称作为键名赋值
   * It is recommended to assign the name of the smart device as the key name.
   */
  // common: new SmartDeviceModel<SmartDeviceSchema>(options),
  common: isGroupDevice
    ? new SmartGroupModel<SmartDeviceSchema>()
    : new SmartDeviceModel<SmartDeviceSchema>(options),
};
