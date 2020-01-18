<template>
  <div>
    <div class="search-box">
      <input
        type="text"
        class="form-control mt-3"
        placeholder="Search"
        aria-label="First"
        aria-describedby="basic-addon1"
        v-model="search"
        required
      />
    </div>
    <table class="table">
        <thead class="thead-dark">
          <tr>
            <th @click="field = 'id', ascending=!ascending" scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Article</th>
            <th @click="field = 'price', ascending=!ascending" scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Manufacture year</th>
            <th @click="field = 'orders', ascending=!ascending" scope="col">Total orders</th>
            <th scope="col">Camera</th>
            <th scope="col">Screen parameters</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="sensorWrap" v-for="phone in sortedList" :key="phone.id">
          <Phone
            :id="phone.id"
            :title="phone.title"
            :article="phone.article"
            :price="phone.price"
            :brand="phone.brand"
            :year="phone.year"
            :orders="phone.orders"
            :camera="phone.camera"
            :screen="phone.screen"
            @changePhone="editPhone(phone)"
          />
        </tbody>
    </table>
  </div>
</template>
<script>
  import Phone from '@/components/Phone';

  export default{
    name: "PhoneList",

    created() {
      this.updatePhoneList();
    },

    data: () => ({
      person: null,
      search: "",
      field: "id",
      ascending: true,
      sort: true,
      phoneList: [],
    }),

    components:{
      Phone
    },

    computed: {
      filteredList() {
        return this.phoneList.filter(phone => {
          return phone.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1  || phone.article.toLowerCase().indexOf(this.search.toLowerCase()) != -1 || phone.brand.toLowerCase().indexOf(this.search.toLowerCase()) != -1
        });
      },
      sortedList() {
        let newList = this.filteredList;
        switch (this.ascending){
          case true:
            return newList.sort((a, b) => {
              if (a[this.field] > b[this.field]) return 1;
              if (a[this.field] < b[this.field]) return -1;
              return 0;
            });
          case false:
            return newList.sort((a, b) => {
              if (a[this.field] < b[this.field]) return 1;
              if (a[this.field] > b[this.field]) return -1;
              return 0;
            });
        }
      }
    },

    methods:{
      updatePhoneList() {
      fetch("http://localhost:3000/phones")
        .then(response => response.json())
        .catch(error => {
          console.error("Error:", error);
        })
        .then(response => {
          this.phoneList = response;
        });
      },
      editPhone(phone) {
        this.$router.push(`/edit/${phone.id}`);
      }
    }
  }
</script>

<style scoped>
  .table thead th:first-child:hover, .table thead th:nth-child(4):hover, .table thead th:nth-child(7):hover{
    background-color: #262626;
    cursor: pointer;
  }
</style>