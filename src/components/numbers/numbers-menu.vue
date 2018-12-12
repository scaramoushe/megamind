<template style="width: 370px;padding-right: 10px">
	<el-form ref="form" :model="form" label-width="100px">
		<el-form-item label="Instances">
			<div class="block slider">
				<el-slider v-bind:disabled="isRunning" v-model="form.numberOfBlocks" :min=1 :max=9></el-slider>
			</div>
		</el-form-item>
		<el-form-item label="Speed">
			<div class="block slider">
				<el-slider v-bind:disabled="isRunning" v-model="form.speed" :min=1 :max=9></el-slider>
			</div>
		</el-form-item>
		<el-form-item label="Level">
			<div class="block slider">
				<el-slider v-bind:disabled="isRunning" v-model="form.level" :min=1 :max=3></el-slider>
			</div>
		</el-form-item>
		<el-form-item>
			<el-button v-if="!isRunning" type="primary" @click="onRun">Run</el-button>
			<el-button v-if="isRunning" type="error" @click="onStop">Stop</el-button>
		</el-form-item>
		<el-form-item v-if="result">
			<span>How many
				<span v-if="result.q.color">{{result.q.color}}</span>&nbsp;
				<span v-if="result.q.type">{{result.q.type}}</span>
				numbers
				<span v-if="result.q.number">{{result.q.number}}</span>  you noticed?</span>
		</el-form-item>
		<el-form-item v-if="result" label="Guess?">
			<div class="block">
				<el-input type="number" v-model="resForm.count"></el-input>
			</div>
		</el-form-item>
		<el-form-item v-if="result">
			<el-button type="info" @click="onCheck">Check</el-button>
		</el-form-item>
		<el-form-item v-if="result && ch">
			<span>{{result.a}}</span>
		</el-form-item>
	
	</el-form>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        numberOfBlocks: 4,
        speed: 3,
        level: 1
      },
      resForm: {
        count: 0
      },
      ch: false
    };
  },
  name: "numbers-menu",
  props: ["result", "isRunning"],
  methods: {
    onRun() {
      this.$emit("runNumbers", this.form);
      this.ch = false;
    },
    onStop() {
      this.$emit("stop");
    },
    onCheck() {
      console.log(this.result);
      this.ch = true;
    }
  },
  watch: {
    result() {
      console.log(this.result);
      this.question =
        "how many " + this.result.q.color ||
        "" + " " + this.result.q.type ||
        "" + " numbers " + this.result.q.number ||
        "" + "you counted?";
    }
  }
};
</script>

<style scoped>
	.slider{
		padding-right: 25px;
	}
</style>
