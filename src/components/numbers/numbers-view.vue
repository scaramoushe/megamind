<template>
	<el-container>
		<numbers-block v-for="nd in numbersData" v-bind:key="JSON.stringify(nd)" v-bind:number-data="nd"></numbers-block>
	</el-container>
</template>

<script>
import NumbersBlock from "./numbers-block";
export default {
  name: "numbers-view",
  components: { NumbersBlock },
  props: ["numbersData"]
};
</script>

<style scoped>
</style>
