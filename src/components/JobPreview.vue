<template>
	<Panel class="job-preview">
		<div class="job-preview-header">
			<div>
				Titulo
			</div>
			<div>
				nota
			</div>
		</div>
		<div class="job-preview-desc">
			<div>
				Descrição
			</div>
			<div>
				FILTROS
			</div>
		</div>
		<div class="job-preview-conection">
			<div>
				COL 1
			</div>
			<div>
				COL 2
			</div>
		</div>
	</Panel>
</template>

<script setup>
import { Panel } from 'primevue';
import {defineProps} from 'vue';

const jobInfo = defineProps(['jobId']);

</script>

<style scoped>

</style>