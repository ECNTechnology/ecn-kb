<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <Content class="custom"/>

    <!-- <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div> -->
    <CustomFooter/>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import CustomFooter from '@theme/components/Footer.vue'

export default {
  components: {
    NavLink,
    CustomFooter
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style scoped>

</style>
