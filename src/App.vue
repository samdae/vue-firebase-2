<template>
<v-main>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon app @click="drawer=!drawer" />
      <!--  import는 카멜케이스, 구현은 케밥케이스 '-'   -->
      <site-title :title="site.title"></site-title>
      <v-spacer />

      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
  </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <site-menu :items="site.menu" />
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <site-footer :footer="site.footer"/>
  </v-app>
</v-main>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'

export default {
  created () {
    this.subscribe()
    // this.save()
  },
  mounted () {
    console.log(this.$firebase)
  },
  components: {
    SiteTitle, SiteFooter, SiteMenu
  },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {},
      title: '머선일이고',
      footer: '머선 푸터고'
    }
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
        }
        this.site = v
      }, (e) => { // 리스터라 try-catch 가 안먹음, 파이어베에이스는 여기다 붙여야한다고 함
        console.log(e.message)
      })
    },
    save () {
      console.log('save@@@')
      this.$firebase.database().ref().child('site').set({
        // title: 'oooo', text: 'pppp'
        title: '',
        footer: '',
        menu: this.site.items
      })
    },
    read () {
      this.$firebase.database().ref().child('abcd').on('value', (sn) => {
        console.log(sn)
        console.log(sn.val()) // 리스닝을하고있어서 실시간으로 변함.
      })
    },
    async readOne () {
      const r = await this.$firebase.database().ref().child('abcd').once('value')
      console.log(r.val()) // 한번만 일어남, 순차적으로 무언가를 할 때는 이게 편하데
    }
  }
}
</script>
