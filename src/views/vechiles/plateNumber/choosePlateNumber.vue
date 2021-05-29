<template>
  <div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="plateHead" label="车牌头" width="180"></el-table-column>
        <el-table-column prop="plateNumber" label="号码" width="180"></el-table-column>
        <el-table-column prop="locationName" label="所在地" width="180"></el-table-column>
        <el-table-column prop="address" label="选号">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">选号</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
        title="提示"
        :visible.sync="successdialogVisible"
        width="30%"
        :before-close="successhandleClose">
      <span>选号成功</span>
      <span slot="footer" class="dialog-footer">
                <el-button @click="successdialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="successdialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
        title="提示"
        :visible.sync="faildialogVisible"
        width="30%"
        :before-close="failhandleClose">
      <span>选号失败</span>
      <span slot="footer" class="dialog-footer">
                <el-button @click="faildialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="faildialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import FlowHead from "@/components/FlowHead";
import {request} from "@/network/request";

export default {
  name: "choosePlateNumber",
  methods: {
    successhandleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    failhandleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleClick(row) {
      console.log(row);
      request({
        url:'/plateApply/choose',
        methods: 'post',
        params:{
          plateNumberHead:row.plateHead,
          platenumber:row.plateNumber,
          locationName:row.locationName,
          username:this.$store.getters.getUsername,
          applyNumber:this.$route.query.applyNumber
        }
      }).then(res=>{
          if(res){
            this.successdialogVisible=true
            this.$router.replace("choosedNumber")
          }else{
            this.faildialogVisible=true
          }
      }).catch(err=>{
        this.faildialogVisible=true
      })
    }
  },
  data(){
    return {
      tableData: [],
      successdialogVisible:false,
      faildialogVisible:false
    }
  },
  components: {FlowHead},
  created() {
    request({
      url:'/plateApply/getNumbers',
      methods: 'post',
      params:{
        province:this.$store.getters.getProvince,
        city:this.$store.getters.getCity
      }
    }).then(res=>{
      if(res.issuccess){
           this.tableData=res.platenumbers;
      }
    }).catch(err=>{

    })
  }
}
</script>

<style scoped>
.main{
  position: relative;
  left: 40%;
  top: 50px;
  /*transform: translate(-50%,-50%);*/
  display: flex;
  text-transform: uppercase;
}
.main .line{
  --c:gray;
  width: 100px;
  height: 100px;
  position: relative;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  color: var(--c);
}

.main .line .step{
  font-size: 25px;
  line-height: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid  var(--c);
  text-align: center;
}

.main .line .step::before{
  content: attr(datatext);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
  font-size: 5px;
}

.step::after{
  content: "";
  width: 101px;
  height: 2px;
  background:  var(--c);
  position: absolute;
  top:25px;
  overflow: hidden;
  transform: translateX(17%);
}
.line:nth-child(3) .step::after{
  content: none;
}
</style>