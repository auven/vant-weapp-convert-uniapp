<template>
  <div>
    <demo-block title="基础用法">
      <van-rate
        custom-class="rate-position"
        data-key="value1"
        v-model="value1"
      />
    </demo-block>

    <demo-block title="自定义图标">
      <van-rate
        custom-class="rate-position"
        icon="like"
        void-icon="like-o"
        data-key="value2"
        v-model="value2"
      />
    </demo-block>

    <demo-block title="自定义样式">
      <van-rate
        custom-class="rate-position"
        data-key="value3"
        v-model="value3"
        :size="25"
        color="#ee0a24"
        void-color="#eee"
        void-icon="star"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="半星">
      <van-rate
        custom-class="rate-position"
        data-key="value4"
        v-model="value4"
        :size="25"
        allow-half
        color="#ee0a24"
        void-color="#eee"
        void-icon="star"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义数量">
      <van-rate
        custom-class="rate-position"
        data-key="value5"
        v-model="value5"
        :count="6"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="禁用状态">
      <van-rate
        custom-class="rate-position"
        data-key="value6"
        v-model="value6"
        disabled
      />
    </demo-block>

    <demo-block title="只读状态">
      <van-rate
        custom-class="rate-position"
        data-key="value6"
        v-model="value6"
        readonly
      />
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.5,
      value5: 4,
      value6: 3
    }
  },
  methods: {
    onChange(score) {
      console.log(score)
    }
  }
}
</script>

<style>
page {
  background-color: #fff;
}

.rate-position {
  margin-left: 15px;
}
</style>
