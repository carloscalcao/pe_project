<template>
	<div class="page_content">
		<div class="user-info">
			<label>{USER NAME}</label>
		</div>

		<h1>Ofertas de Emprego para si</h1>
		<h4>As ofertas que encaixam no seu perfil, por ordem, e porquê.Pode afinar com filtros ou dizer por palavras suas o que procura.</h4>

		<Panel class="job-panel-insert">

			<Label for="jobDescription">O que procura (opcional)</Label>
			<Textarea id="jobDescription" placeholder="Ex:Cozinha,a tempo parcial"  size="large"/>

			<div class="job-panel-filters-area">
				<div class="job-panel-div-input">
					<Label  for="jobZone">Zona</Label>
					<Select id="jobZone" :options="zoneList" optionLabel="value" optionValue="value"/>
				</div>
				<div class="job-panel-div-input">
					<Label for="jobContract">Contrato</Label>
					<Select id="jobContract" />
				</div>
				<div class="job-panel-div-input">
					<Label for="jobRegime">Regime</Label>
					<Select id="jobRegime" />
				</div>
				<div class="job-panel-div-input">
					<Label for="jobConcelho">Conselho</Label>
					<Select id="jobConcelho"/>
				</div>
				<div class="job-panel-div-input">
					<Label for="jobNotaMin">Nota mínima</Label>
					<Select id="jobNotaMin"/>
				</div>
				<div class="job-panel-div-input">
					<Label for="jobSalMin">Salário mínimo</Label>
					<Select id="jobSalMin"/>
				</div>
			</div>
			<div class="job-panel-div-checkbox">
				<Checkbox inputId="jobOfertAviso" binary />
				<Label for="jobOfertAviso">Mostrar ofertas com avisos</Label>
			</div>
			<div class="job-panel-div-checkbox">
				<Checkbox inputId="jobOfertRequesito" binary />
				<Label for="jobOfertRequesito">Mostrar ofertas cujos requisitos não cumpre</Label>
			</div>
			<Button :disabled="searchLoading" @click="searchJob()">
				<Spinner v-if="searchLoading" spin/>
				<Search  v-else/>
				Ver ofertas
			</Button>
		</Panel>

		<div class="job-results-header">
			<h4>Procura {JOB}</h4>
			<span>{N_OFFERS} ofertas a que se pode candidatar, {N_OFFERS_WARNING} delas com algum aviso </span>

			<Panel class="job-resume">
				<h3>{JOB}: o que as ofertas pedem</h3>
				<div class="job-resume_numbers">
					<span class="job-resume-span"><span class="span_hot">{Nº}</span> ofertas desta profissão</span>
					<span class="job-resume-span"><span class="span_hot">{Nº}</span> na sua </span>
					<span class="job-resume-span"><span class="span_hot">{Nº}€</span> de salário habitual</span>
				</div>
				<div class="colls">
					<div class="col">
						<span class="span_bold">O QUE JÁ TEM E É MAIS PEDIDO</span>
						<div class="span_little">
							<div class="space_between_content">
								<span class="span_highlight">{TEXTO}</span>
								<span>{%} das ofertas</span>
							</div>
							<Divider/>
						</div>
					</div>
					<div class="col">
						<span class="span_bold">O QUE PODE DESENVOLVER</span>
						<div>
							<div class="space_between_content">
								<span class="span_normal">{TEXTO}</span>
								<span>{%} das ofertas</span>
							</div>
							<Divider/>
						</div>
					</div>
				</div>
				<span class="span-little" style="color:var(--p-yellow-600) ;"><Lock/> {Nº} Ofertas bloqueadas</span>
			</Panel>
		</div>
		<JobPreview/>
	</div>
</template>

<script setup lang="ts">
import JobPreview from '@/components/JobPreview.vue';
import {ref} from 'vue';
import {Search, Spinner, Lock} from '@primeicons/vue';
import { Button,Panel,Textarea,Label,Select,Checkbox,Divider } from 'primevue';

const searchLoading = ref(false);

const zoneList = ref([
	{ value: 'Todas' },
	{ value: 'Aveiro' },
	{ value: 'Beja' },
	{ value: 'Braga' },
	{ value: 'Bragança' },
	{ value: 'Castelo Branco' },
	{ value: 'Coimbra' },
	{ value: 'Évora' },
	{ value: 'Faro' },
	{ value: 'Guarda' },
	{ value: 'Leiria' },
	{ value: 'Lisboa' },
	{ value: 'Portalegre' },
	{ value: 'Porto' },
	{ value: 'Santarém' },
	{ value: 'Setúbal' },
	{ value: 'Viana do Castelo' },
	{ value: 'Vila Real' },
	{ value: 'Viseu' },
	{ value: 'Região Autónoma dos Açores' },
	{ value: 'Região Autónoma da Madeira' }
])

const searchJob = () =>{
	searchLoading.value = true;
	setTimeout(()=>{
		searchLoading.value = false;
	},5000)
};
</script>

<style scoped>
	h1{
		color:var(--p-primary-600);
	}
	span{
		opacity: 85%;
	}
	.user-info{
		display: flex;
		justify-content:start;
	}
	.job-panel-filters-area{
		display: flex;
    	flex-wrap: wrap;
	}
	.job-panel-div-input{
		margin-top: 10px;
		width: 33%;
	}
	.job-panel-div-checkbox{
		margin-top: 10px;
		display:flex ;
	}
	.job-panel-div-checkbox .p-checkbox{
		margin-right:5px ;
	}
	.p-select{
		width: 90%;
	}
	.job-panel-insert .p-label{
		font-weight: bold;
		opacity: 85%;
	}
	.job-panel-insert .p-textarea{
		width: 100%;
	}
	.job-panel-insert .p-button{
		margin-top:10px ;
	}
	@media only screen and (max-width: 650px) {
		.job-panel-div-input, .p-select, .job-panel-insert .p-button{
			width: 100%;
		}
	}

	/******/
	.job-resume{
		margin-top: 10px;
	}
	.job-resume-span{
		margin-right: 10px;
	}
	.span_hot{
		font-weight: bold;
		color:var(--p-primary-600) ;
	}
	.span_bold{
		font-weight: bold;
	}
	.span_highlight{
		color:var(--p-primary-600) ;
	}
	.span_normal{
		opacity: 100%;
	}
	.span_little{
		font-size: 14px;
	}
	.colls{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	.col{
		width: 48%;
	}

</style>