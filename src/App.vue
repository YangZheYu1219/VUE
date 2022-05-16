<template>
<nav>
  <ul>
    <li v-for="id in 10">
    <router-link :to="`/users/${id}`">{{ id }}使用者</router-link>
    </li>
  </ul>
</nav>
  <router-view/>
</template>