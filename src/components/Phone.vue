<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ title }}</td>
    <td>{{ article }}</td>
    <td>{{ price }}</td>
    <td>{{ brand }}</td>
    <td>{{ year }}</td>
    <td>{{ orders }}</td>
    <td>{{ camera }}</td>
    <td>{{ screen }}</td>
    <td>
      <button
        type="button"
        class="close rewrite"
        aria-label="Rewrite"
        @click="$emit('changePhone', { id, title, article, price, brand, year, orders, camera, screen })"
      >
        <i aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </i>
      </button>
    </td>
    <td>
      <button
        type="button"
        class="close rewrite"
        aria-label="Rewrite"
        @click="addToCart()"
      >
        <i aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
        </i>
      </button>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'Phone',

  props: {
    id: Number,
    title: String,
    article: String,
    price: Number,
    brand: String,
    year: Number,
    orders: Number,
    camera: String,
    screen: String,
  },
  
  methods: {
    addToCart(){
      fetch(`http://localhost:3000/phones/${this.id}`, {
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orders: ++this.orders,
        })
      }).then(() => {
        this.$router.push("/catalog");
      })
    }
  }
}
</script>

