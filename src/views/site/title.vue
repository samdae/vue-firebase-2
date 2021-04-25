<!-- Component Tutorials  -->
<template>
<!--
template 안의 태그는 하나가 있어야 한다.
그 태그 안의 태그가 몇개인지는 상관없는데, 템플릿 바로 하위 태그는 하나임
-->
  <v-toolbar-title :title="title"> {{ title }} </v-toolbar-title>
</template>

<script>
export default {
  props: ['title']
}
</script>
