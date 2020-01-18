<template>
  <div id="edit-page" class="container">
    <h2>Edit phone parameters</h2>
    <button type="button" class="btn btn-danger" @click="removePhone()" style="float: right">
      Delete Device
    </button>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Enter New Title"
        aria-label="First"
        aria-describedby="basic-addon1"
        v-model="title"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Enter New Article"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="article"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control mt-3"
        placeholder="Enter New Price"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="price"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Change brand"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="brand"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control mt-3"
        placeholder="Enter Year of Production"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="year"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control mt-3"
        placeholder="Change number of orders"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="orders"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Change camera parameters"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="camera"
        required
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Change screen parameters"
        aria-label="Last"
        aria-describedby="basic-addon1"
        v-model="screen"
        required
      />
    </div>
    <div class="input-group mb-3">
      <button type="button" class="btn btn-info mt-3" @click="updatePhone()">
        Save
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditPage",
  data: () => ({
    title: "",
    article: "",
    price: 0,
    brand: "",
    year: 0,
    orders: 0,
    camera: "",
    screen: "",
  }),
  created() {
    fetch(`http://localhost:3000/phones/${this.$route.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.title = response.title;
        this.article = response.article;
        this.price = response.price;
        this.brand = response.brand;
        this.year = response.year;
        this.orders = response.orders;
        this.camera = response.camera;
        this.screen = response.screen;
      });
  },
  methods: {
    updatePhone() {
      fetch(`http://localhost:3000/phones/${this.$route.params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          article: this.article,
          price: +this.price,
          brand: this.brand,
          year: +this.year,
          orders: +this.orders,
          camera: this.camera,
          screen: this.screen,
        })
      }).then(() => {
        this.$router.push("/catalog");
      });
    },
    removePhone() {
      fetch(`http://localhost:3000/phones/${this.$route.params.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        this.$router.push("/catalog");
      });
    },
  }
};
</script>