<template>
  <div>
    <div v-if="loading">
      <b-spinner class="d-block m-auto" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else-if="product" class="product">
      <b-breadcrumb>
        <b-breadcrumb-item to="/categories">Categories</b-breadcrumb-item>
        <b-breadcrumb-item
          :to="{ name: 'Category', params: { id: product.category_id.id } }"
        >{{ product.category_id.name }}</b-breadcrumb-item>
        <b-breadcrumb-item :to=" { name: 'Product', params: { id: product.id } }">{{ product.name }}</b-breadcrumb-item>
      </b-breadcrumb>
      <b-container fluid>
        <b-row class="d-flex justify-content-between align-items-center p-2">
          <h1>{{ product.name }}</h1>
          <span class="pr-4">{{ product.price | chf }}</span>
        </b-row>
        <br />
        <b-row>
          <b-col cols="4">
            <img class="m-auto d-block" :src="product.image.data.full_url" :alt="product.name" />
          </b-col>
          <b-col cols="8">
            <div v-html="product.description"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <b-alert show variant="danger">Product not found.</b-alert>
      <p>
        Return to
        <router-link to="/">Home</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function () {
    return {
      product: null,
      loading: true,
    };
  },
  methods: {
    fetchProduct() {
      this.$client
        .getItem("products", this.$route.params.id, {
          fields: ["*", "image.*", "category_id.*"],
        })
        .then((res) => {
          this.product = res.data;
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    },
  },
  watch: {
    $route() {
      this.fetchProduct();
    },
  },
  mounted: function () {
    this.fetchProduct();
  },
};
</script>
