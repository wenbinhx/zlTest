<template>
  <div class="product-list">    
    <zl-header :title="title"></zl-header>
    <div class="search-wrapper">
      <zl-search :placeholder="'搜索合同名称/合同编号'" @query="changeQuery"></zl-search>
    </div>
    <zl-pop-list @selct="selectItem" :list="popList"></zl-pop-list>
  </div>
</template>

<script>
import ajax from 'axios'
import Header from '@/base/header/header'
import PopList from '@/base/pop-list/pop-list'
import Search from '@/base/search/search'
export default {
  name: 'home',
  components: {
    'zl-header': Header,
    'zl-pop-list': PopList,
    'zl-search': Search
  },
  mounted() {
    this.loadPopData()
  },
  data() {
    return {
      title: '添加租赁设备',
      popList: []
    }
  },
  methods: {
    selectItem(filters) {
      this.$createDialog({
        type: 'warn',
        content: `本次过滤条件： ${filters.join(',')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    loadPopData() {
      ajax({
        url: '/api/getPopListData'
      }).then((res) => {
        this.popList = res.data.data
      })
    },
    changeQuery(newQuery) {
      console.log(newQuery)
    }
  }
}
</script>
