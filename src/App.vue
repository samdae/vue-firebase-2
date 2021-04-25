<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon app @click="drawer=!drawer" />
        <!--  import는 카멜케이스, 구현은 케밥케이스 '-'   -->
        <site-title :title="title"></site-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
    </v-app-bar>
      <v-navigation-drawer app v-model="drawer">
        <site-menu />
      </v-navigation-drawer>
      <v-content>
        <router-view/>
      </v-content>
      <site-footer :footer="footer"/>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'

export default {
  components: {
    SiteTitle, SiteFooter, SiteMenu
  },
  name: 'App',
  data () {
    return {
      drawer: false,
      // items: [],
      title: '머선일이고',
      footer: '머선 푸터고'
    }
  }
}
</script>
