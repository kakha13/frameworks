<template>
  <div class="position-relative">
    <div class="input-group">
      <span type="text" class="form-control text-muted" @click="showModal()" >Search frameworks</span>
      <button class="btn btn-primary material-icons">
        search
      </button>
    </div>

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <input
          v-model="searchQuery"
          
          class="form-control form-control-lg -outline-light"
          type="search"
          ref="search"
          autocomplete="off"
          placeholder="Search frameworks"
          autofocus
        />
      </template>

      <template v-slot:body>
        <div class="text-primary fw-normal pb-2" v-if="frameworks.length">Frameworks</div>
        <ul v-if="frameworks.length" class="list-group">
          <li
            v-for="item of frameworks"
            :key="item.slug"
            class="list-group-item card mb-2"
          >
            <NuxtLink
              :to="item.path"
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
      </template>

      <template v-slot:footer></template>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      frameworks: [],
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
        .limit(6)
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
      console.log("show", this.isModalVisible);
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
