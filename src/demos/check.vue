<template>
	<ul>
		<li>
			<div class="flexbox">
				<p class="kv-key">Is wechat?</p>
				<p class="kv-value">{{ isWx }}</p>
			</div>
		</li>
	</ul>
</template>

<script>
	import app from '../'
	export default {
		data () {
			return {
				isWx: false,
			}
		},
		ready () {
			this.isWx = app.isWx()
		}
	}
</script>

<style lang="less">
	.flexbox {
		display: flex;
		line-height: 2;
		p {
			padding: 0;
			margin: 0;
		}
		.kv-key {
			width: 140px;
			color: #333;
			text-align: right;
			padding-right: 10px;
		}
		.kv-value {
			color: #999;
		}
	}
	
</style>