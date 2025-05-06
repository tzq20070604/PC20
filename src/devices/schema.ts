export const defaultSchema = [
  {
    attr: 1632,
    canTrigger: false,
    code: "switch_go",
    defaultRecommend: true,
    editPermission: true,
    executable: false,
    extContent: "",
    iconname: "icon-dp_power",
    id: 2,
    mode: "rw",
    name: "清扫开关",
    property: {
      type: "bool"
    },
    type: "obj"
  },
  {
    attr: 1632,
    canTrigger: false,
    code: "mode",
    defaultRecommend: true,
    editPermission: true,
    executable: false,
    extContent: "",
    iconname: "icon-dp_mode",
    id: 3,
    mode: "rw",
    name: "工作模式",
    property: {
      range: [
        "standby",
        "random",
        "smart",
        "wall_follow",
        "spiral",
        "chargego"
      ],
      type: "enum"
    },
    type: "obj"
  },
  {
    attr: 1632,
    canTrigger: false,
    code: "status",
    defaultRecommend: true,
    editPermission: true,
    executable: false,
    extContent: "",
    iconname: "icon-dp_dust",
    id: 5,
    mode: "ro",
    name: "设备状态",
    property: {
      range: [
        "standby",
        "smart_clean",
        "wall_clean",
        "spot_clean",
        "goto_charge",
        "charging",
        "charge_done",
        "paused",
        "cleaning",
        "sleep"
      ],
      type: "enum"
    },
    type: "obj"
  },
  {
    attr: 1120,
    canTrigger: false,
    code: "fault",
    defaultRecommend: false,
    editPermission: true,
    executable: false,
    extContent: "",
    iconname: "icon-dp_warming",
    id: 10,
    mode: "ro",
    name: "故障告警",
    property: {
      label: [
        "edge_sweep",
        "middle_sweep",
        "left_wheel",
        "right_wheel",
        "garbage_box",
        "land_check",
        "collision"
      ],
      type: "bitmap",
      maxlen: 7
    },
    type: "obj"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "color",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 101,
    mode: "rw",
    name: "自定义",
    property: {
      type: "raw",
      maxlen: 128
    },
    type: "raw"
  },
  {
    attr: 4096,
    canTrigger: true,
    code: "light_action",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    iconname: "icon-dp_light",
    id: 102,
    mode: "rw",
    name: "灯具联动",
    property: {
      type: "raw",
      maxlen: 128
    },
    type: "raw"
  },
  {
    attr: 0,
    canTrigger: true,
    code: "user_name",
    defaultRecommend: false,
    editPermission: false,
    executable: true,
    extContent: "",
    id: 103,
    mode: "rw",
    name: "字符串型",
    property: {
      type: "string",
      maxlen: 255
    },
    type: "obj"
  }
] as const;