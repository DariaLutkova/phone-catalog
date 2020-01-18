<template>
  <div class="catalog">
    <h1>Phone Catalog</h1>
    <PhoneList />
  </div>
</template>
<script>
  import PhoneList from "@/components/PhoneList"

  export default {
    components: {
      PhoneList
    }
  }
</script>