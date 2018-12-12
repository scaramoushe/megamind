<template>
	<el-card shadow="always" class="card">
		<div v-bind:style="numberStyle">
			<span>{{rendered}}</span>
		</div>
	</el-card>
</template>

<script>
import { NumericUtils } from "./../../Util/NumericUtils";
export default {
  data() {
    return {
      number: this.numberData.number,
      type: this.numberData.type,
      angle: this.numberData.angle,
      color: this.numberData.color
    };
  },
  props: ["numberData"],
  // created() {
  //   console.log(this);
  //   switch (this.type) {
  //     case "arabic":
  //       this.rendered = this.number;
  //       break;
  //   }
  // },
  computed: {
    rendered() {
      switch (this.type) {
        case "arabic":
          return this.number;
        case "latin":
          return NumericUtils.latinNumber(this.number);
        case "word":
          return NumericUtils.wordNumber(this.number);
        default:
          return "shit just happened";
      }
    },
    numberStyle() {
      return {
        color: this.color,
        transform: "rotate(" + this.angle + "deg)"
      };
    }
  },
  methods: {},
  name: "numbers-block"
};
</script>

<style scoped>
.card {
  height: 200px;
  width: 200px;
  font-size: 20px;
  line-height: 160px;
  float: left;
  margin: 10px;
}
</style>
