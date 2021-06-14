import Vue from 'vue'
import  Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)


const plateApply={
  state:{
    applyNumber:'',
    userPlateApply:{}
  },
  mutations:{
    updateApplyNumber(state,payload){
      state.applyNumber=payload
    },
    updateUserPlateApply(state,payload){
      state.userPlateApply=payload
    }
  },
  actions:{

  },
  getters:{
    getApplyNumber(state){
      return state.applyNumber
    },
    userPlateApply(state){
      return state.userPlateApply
    }
  }
}



const checkout={
  state:{
    owner:'',
    plateNumber:'',
    applyCheckform:{

    },
    station:{
      checkstationid:'',
      province:'',
      city:'',
      stationname:'',
      phoneNumber:''
    }
  },
  mutations:{
    updateStation(state,payload){
      state.station=payload
    },
    updateCheckForm(state,payload){
      state.applyCheckform=payload
    },
    updateTime(state,payload){
      state.applyCheckform.checkDate=payload
    },
    updatePeriod(state,payload){
      state.applyCheckform.startTime=payload.startTime
      state.applyCheckform.endTime=payload.endTime
    },
    updateReserveNumber(state,payload){
      state.applyCheckform.reserveNumber=payload
    },
    updateCOPlateNumber(state,payload){
      state.plateNumber=payload
    }

  },
  actions:{

  },
  getters:{
    getStation(state){
      return state.station
    },
    getApplyCheckform(state){
      return state.applyCheckform
    },
    getReserveNumber(state){
      return state.applyCheckform.reserveNumber
    },
    getCOPlateNumber(state){
      return state.plateNumber
    }
  }
}

const exemptCheck={
  state:{
     plateNumber:'陕FY3213',
     exemptFormData:{
       plateNumber:'',
       endTime:'',
       insurancePhotoUrl:'',
       taxPhotoUrl:''
     },
     post:{
     }
  },
  mutations:{
     updateFormData(state,payload){
       state.exemptFormData.plateNumber=payload.plateNumber
       state.exemptFormData.endTime=payload.endTime
     },
    updateInsurancePhotoUrl(state, payload) {
      state.exemptFormData.insurancePhotoUrl=payload
    },
    updateTaxPhotoUrl(state, payload) {
      state.exemptFormData.taxPhotoUrl=payload
    },
    updateECPlateNumber(state, payload) {
      state.plateNumber=payload
    }
  },
  getters:{
    getPlateNumber(state){
      return state.plateNumber
    },
    getExemptFormData(state){
      return state.exemptFormData
    },
  }
}

const illegalProcess={
  state:{
      plateNumber:''
  },
  mutations:{
    updatePlateNumber(state,payload){
      state.plateNumber=payload
    },
  },
  getters:{
    getIllegalProcessPlateNumber(state){
      return state.plateNumber
    },
  }
}

const loserReplace={
  state:{
    loserReplace:{
      dlNumber:''
    }
  },
  mutations:{
    updateDlNumber(state,payload){
      state.loserReplace.dlNumber=payload
    },
  },
  getters:{
    getDlNumber(state){
      return state.loserReplace.dlNumber
    },
  }
}


//2.创建对象
const store=new Vuex.Store({
  state:{
       province:'陕西省',
       city:'西安市',
       username:'reverie',
       name:'任泽华',
  },
  //不要在mutcation中进行异步操作
  mutations:{
    updateCity(state,payload){
      console.log("payload:",payload)
      state.city=payload
    },
    updateName(state,payload){
      state.name=payload
    },
    updateUsername(state,payload){
      state.username=payload
    }
  },
  actions:{
    aupdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateInfo')
          console.log(payload.message);
         resolve('111111')
        },1000)
      })
    }
  },
  getters:{
    getProvince(state){
      return state.province
    },
    getCity(state){
      return state.city
    },
    getUsername(state){
      return state.username
    },
    getName(state){
      return state.name
    },
    getIsLogin(state){
      return state.isLogin
    }
  },
  modules:{
      plateApply:plateApply,
      checkout:checkout,
      exemptCheck:exemptCheck,
      illegalProcess:illegalProcess,
      loserReplace:loserReplace
  }

})

//3.导出store
export default store
