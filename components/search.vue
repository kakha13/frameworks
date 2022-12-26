<template>
   <div >
    <span type="text" class="form-control border-0 bg-secondary text-light" @click="showModal()" >Search frameworks</span>

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <input
          v-model="searchQuery"
          class="form-control form-control-lg -outline-light"
          type="search"
          ref="search"
          autocomplete="off"
          placeholder="Search frameworks"
        />
      </template>

      <template v-slot:body>
        <div class="text-primary fw-normal pb-2" v-if="frameworks.length">
          <h5 class="text-secondary">Frameworks</h5>
          <ul v-if="frameworks.length" class="list-group">
            <li
              v-for="item of frameworks"
              :key="item.slug"
              class="list-group-item card mb-2"
            >
              <NuxtLink :to="`${item.path}/`"
                class="fw-bold text-decoration-none"
                @click.native="handleClick"
              >
                {{ item.title }}
              </NuxtLink>
              <p class="fst-italic lh-sm m-0">
                <small>{{ item.category }} ({{ item.language }})</small>
              </p>
            </li>
          </ul>
        </div>
        <div class="text-primary fw-normal pb-2" v-if="blogs.length">
          <h5 class="text-secondary">Blogs</h5>
          <ul class="list-group">
            <li
              v-for="item of blogs"
              :key="item.slug"
              class="list-group-item card mb-2"
            >
              <NuxtLink :to="`/blog/${item.slug}/`"
                class="fw-bold text-decoration-none"
                @click.native="handleClick"
              >
                {{ item.title }}
              </NuxtLink>
              <p class="fst-italic lh-sm m-0">
                <small>{{ item.category }} ({{ item.description }})</small>
              </p>
            </li>
          </ul>
        </div>
      </template>

      <template v-slot:footer></template>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: null,
      frameworks: [],
      blogs: [],
      isModalVisible: false,
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.frameworks = [];
        return;
      }
      this.frameworks = await this.$content("frameworks", { deep: true })
        .where({ slug: { $ne: 'README' } })
        .limit(6)
        .search(searchQuery)
        .fetch();

      this.blogs = await this.$content("blogs")
        .limit(3)
        .search(searchQuery)
        .fetch();
    },
  },
  methods: {
    handleClick(e) {
      this.searchQuery = "";
      this.isModalVisible = false
    },
    showModal() {
      this.isModalVisible = true;
      this.$nextTick(function () {
          this.$refs.search.focus()
      })
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
