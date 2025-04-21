<script lang="ts">
	import DemanderDevis from "$lib/components/DemanderDevis.svelte";
	import PrendreRdv from "$lib/components/PrendreRDV.svelte";
	import Presentation from "$lib/components/Presentation.svelte";
	import SavoirFaire from "$lib/components/SavoirFaire.svelte";
</script>

<Presentation/>

<div class="container-fluid py-5">
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-6" style="min-height: 500px;">
                <div class="position-relative h-100 rounded overflow-hidden">
                    <img class="position-absolute w-100 h-100" src="img/feature.jpg" style="object-fit: cover;" alt="">
                </div>
            </div>
            <div class="col-lg-6 pt-5 pb-lg-5">
                <div class="feature-text bg-white rounded p-lg-5">
                    <p>Depuis 30 ans nous accompagnons nos clients, entreprises et particuliers, pour leur offrir un service complet, dans les étapes de leur vie personnelle ou professionnelle, en mettant à leur service, la rigueur et le savoir faire d’une équipe dédiée et de professionnels partenaires de qualité.</p>
                    <h2 class="mb-4">Nos atouts</h2>
                    <div class="d-flex mb-4">
                        <div class="btn-primary btn-md-square px-3" style="border-radius: 50px;">
                        </div>
                        <div class="ml-4">
                            <h5>Compétence</h5>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <div class="btn-primary btn-md-square px-3" style="border-radius: 50px;">
                        </div>
                        <div class="ml-4">
                            <h5>Réactivité</h5>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <div class="btn-primary btn-md-square px-3" style="border-radius: 50px;">
                        </div>
                        <div class="ml-4">
                            <h5>Sérieux</h5>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="btn-primary btn-md-square px-3" style="border-radius: 50px;">
                        </div>
                        <div class="ml-4">
                            <h5>Discrétion</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<SavoirFaire/>

<PrendreRdv/>

<DemanderDevis/>