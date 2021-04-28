<!-- Component Tutorials  -->
<template>
<!--
template 안의 태그는 하나가 있어야 한다.
그 태그 안의 태그가 몇개인지는 상관없는데, 템플릿 바로 하위 태그는 하나임
-->
  <v-toolbar-title :title="title">
    {{ title }}
    <v-btn icon @click="openDialog">
      <v-icon>mdi-grease-pencil</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>
          제목 수정
          <v-spacer/>
          <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn icon @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="text"
            outline
            label="제목"
            @keypress.enter="save"
            hide-details
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar-title>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      dialog: false,
      text: this.title
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
    },
    async save () {
      try {
        await this.$firebase.database().ref().child('site').update({ title: this.text }, 1000)
      } finally {
        this.dialog = false
      }
    }
  }
}
</script>
