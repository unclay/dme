<template>
	<ol class="nav-list">
		<li>
			<a v-link="{path: '/doc'}">文档</a>
		</li>
		<li>
			<a v-link="{path: '/check'}">检查</a>
		</li>
	</ol>
</template>

<style lang="less">
	.nav-list {
		margin-top: 20px;
		li {
			padding: 0 0 0 10px;
			a {
				text-decoration: none;
				color: #6c97c2;
				line-height: 22px;
			}
		}
	}
</style>