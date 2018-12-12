<template>
	<el-container>
		<el-aside>
			<numbers-menu @runNumbers="onRunNumbers" @stop="onStop" v-bind:result="result" v-bind:isRunning="model?model.isRunning:false"></numbers-menu>
		</el-aside>
		<el-main>
			<numbers-view v-bind:numbersData="blocks"></numbers-view>
		</el-main>
	</el-container>
</template>

<script>
import NumbersMenu from "./numbers-menu";
import NumbersView from "./numbers-view";
// import { NumericUtils } from "./../../Util/NumericUtils";
import { NumbersModel } from "./../../Util/NumbersModel";

export default {
  name: "numbers",
  components: { NumbersView, NumbersMenu },
  data: () => {
    return {
      blocks: [],
      result: null,
      level: null,
      model: null
    };
  },
  methods: {
    onRunNumbers(d) {
      if (this.model) this.model.stop();
      this.model = new NumbersModel(d.numberOfBlocks, d.speed, b =>
        this.updateBlocks(b)
      );
      this.level = d.level;
      this.result = null;
    },
    onStop() {
      this.model.stop();
      this.result = JSON.parse(
        JSON.stringify(this.model.generateQuestion(this.level))
      );
      console.log(this.result);
    },
    updateBlocks(blocks) {
      console.log(blocks);
      this.blocks = JSON.parse(JSON.stringify(blocks));
    }
  }
};
</script>

<style scoped>
</style>
