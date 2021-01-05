<template>
    <div class="login_container">
        <div class="login_box">
           <div class="avatar_box">
               <img src="../assets/avatar.jpg" alt="">
           </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
  .login_container{
    background-color: #556b2b;
    height: 100vh;
  }
  .login_box{
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
  }
  .avatar_box{
      width: 150px;
      height: 150px;
      border: 2px solid rgb(183, 230, 233);
      border-radius: 50%;
      padding: 11px;
      background-color: rgb(250, 235, 98);
      box-shadow: 0 0 14px rgb(183, 230, 233);
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
  }
</style>