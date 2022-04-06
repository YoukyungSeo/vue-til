<template>
  <form @submit.prevent="submitForm">
    <!-- submit 후 페이지 이동 방지 -->
    <div>
      <label for="username">ID: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PWD: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">NICKNAME: </label>
      <input type="nickname" v-model="nickname" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },
  methods: {
    submitForm() {
      console.log('폼 제출');
    },
  },
};
</script>

<style></style>
