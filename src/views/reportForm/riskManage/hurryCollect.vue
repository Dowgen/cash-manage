<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>hurryCollect</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hurryCollect'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
