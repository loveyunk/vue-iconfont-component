# vue-iconfont-component

[![https://img.shields.io/npm/v/vue-iconfont-component.svg](https://img.shields.io/npm/v/vue-iconfont-component.svg)](https://www.npmjs.com/package/vue-iconfont-component)
[![https://img.shields.io/npm/dt/vue-iconfont-component.svg](https://img.shields.io/npm/dt/vue-iconfont-component.svg)](https://www.npmjs.com/package/vue-iconfont-component)
[![https://img.shields.io/npm/dm/vue-iconfont-component.svg](https://img.shields.io/npm/dm/vue-iconfont-component.svg)](https://www.npmjs.com/package/vue-iconfont-component)
[![https://img.shields.io/npm/l/vue-iconfont-component.svg](https://img.shields.io/npm/l/vue-iconfont-component.svg)](https://github.com/loveyunk/vue-iconfont-component/blob/master/LICENSE)

> A Vue component for use iconfont

### How to use?

```bash
npm install vue-iconfont-component --save
```

### Example

```js
<template>
    <vue-iconfont type="icon-xiaoxi" size="55" color="e5d"></vue-iconfont>
</template>

<script>
  import VueIconfont from 'vue-iconfont-component';
  export default {
    components: { VueIconfont }
  }
</script>
```

### Options

| Property | Description                 | Type           | default |
| -------- | --------------------------- | -------------- | ------- |
| type     | the value of iconfont type  | String         | -       |
| size     | the value of iconfont size  | Number, String | -       |
| color    | the value of iconfont color | String         | -       |

### Events

| Function Name | Description                     |
| ------------- | ------------------------------- |
| on-click      | triggers when clicking the icon |
