import {parse} from 'qs'
import modelExtend from 'dva-model-extend'
import {query} from 'services/dashboard'
import {model} from 'models/common'

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    modules: [
      {id: 1, text: "智慧商圈", icon: require("themes/images/交流论坛.svg")},
      {id: 2, text: "爱心e站", icon: require("themes/images/经验案例.svg")},
      {id: 3, text: "e行乌斯太", icon: require("themes/images/设备资料.svg")},
      {id: 4, text: "问政乌斯太", icon: require("themes/images/设备资料.svg")}
    ]
  },
})
