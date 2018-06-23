# vue-iconfont-component

> vue使用iconfont组件，仅支持symbol方式

### How to use?
```
npm install vue-iconfont-component --save-dev
```

### Example
``` js
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

### Options:

| Property | Description | Type | default |
| --- | --- | --- | --- |
| type | the value of iconfont type | String | - |
| size | the value of iconfont size | Number，String | - |
| color | the value of iconfont color | String | - |

### Functions
| Function Name | Description |
| --- | --- |
| on-click | triggers when clicking the icon |
