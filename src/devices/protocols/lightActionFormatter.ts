import { decimalToHex, generateDpStrStep } from "@ray-js/panel-sdk/lib/utils";

type ColorData = {
    alpha: number;
    r: number;
    g: number;
    b: number;
};

export default class LightActionFormatter {
    defaultValue:ColorData= {
        alpha:66,
        r:11,
        g:22,
        b:33
    };
    uuid:string = '';
    constructor(uuid:string, dfValue?:ColorData){
        this.uuid = uuid;
        if (dfValue){
            this.defaultValue = dfValue
        }
    }
    parser(dpValue:string){
        const { length } = dpValue;
        if (length !== 8) {
        console.warn('数据有问题，解析失败', dpValue);
        return this.defaultValue;
        }
        const step = generateDpStrStep(dpValue);
        return {
            alpha: step(2).value, // 4 个字符
            r: step(2).value, // 2 个字符
            g: step(2).value, // 2 个字符
            b: step(2).value, // 2 个字符
        };
    }

    to16(value:number, length = 2) {
      return decimalToHex(value, length);
    }

    formatter(parsedDpValue:any){
        const { alpha, r, g, b } = parsedDpValue;
        return `${this.to16(alpha, 2)}${this.to16(r, 2)}${this.to16(g, 2)}${this.to16(b, 2)}`;
    }
}