<template>
	<header class="top_menu">
		<Menubar :model="items">
		<template #end>
			<Button @click="router.push('/login')">Entrar/Registe-se</Button>
		</template>
		</Menubar>
	</header>
	<router-view/>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import {Button,Menubar} from 'primevue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const items = ref([
	{
		label: 'Home',
		command: () => {
				router.push('/');
			}
	},
	{
		label: 'Apoios & Incentivos',
		items:[{
			label: 'Emprego',
			command: () => {
				router.push('/emprego');
			}}]
	}
]);
</script>
<style scoped>
	.top_menu{
		width: 100%;
	}
</style>
