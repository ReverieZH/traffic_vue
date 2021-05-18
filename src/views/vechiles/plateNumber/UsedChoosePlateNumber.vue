<template>
    <div>
      <div id="head">
        <div class="main">
          <div class="line"  onclick="steps(0)">
            <div class="step" datatext="基本信息">
              <i>1</i>
            </div>
          </div>
          <div class="line" onclick="steps(1)">
            <div class="step" datatext="确认信息">
              <i>2</i>
            </div>
          </div>
          <div class="line" onclick="steps(2)">
            <div class="step" datatext="选号">
              <i>3</i>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "choosePlateNumber"
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