<template>
    <div class="base-progress">
      <div class="inner" :style="{ width: w + '%' }">
        <span>{{ w }}%</span>
      </div>
    </div>
  </template>

<script>
export default {
    // props: ['w']
    // 1.基础写法（类型校验）
    // props: {
    //     w: Number // Number 、String 、Boolean、Array、Object、Function
    // }
    // 2.完整写法（类型、非空、默认、自定义校验）
    props: {
        w: {
            type: Number,
            require: true,
            default: 0,
            validator (value) {
                // 自定义校验逻辑
                console.log(value)
                if (value >= 0 && value <= 100) {
                    return true
                } else {
                    console.error('传入的prop w ，必须是 0-100的数字')
                    return false
                }
               
            }
        }
    }
}
</script>

<style>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>