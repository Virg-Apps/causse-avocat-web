<script lang="ts">

	import { enhance } from "$app/forms";
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

<div class="container-fluid py-5" id="rdv">
    <div class="container py-5">
        <div class="bg-appointment rounded">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="col-lg-6 py-5">
                    <div class="rounded p-5 my-5" style="background: rgba(55, 55, 63, .7);">
                        <h1 class="text-center text-white mb-4">Je prends un rendez-vous</h1>
                        <form method="POST" action="?/demanderRDV" use:enhance={({ formElement, formData, action, cancel, submitter }) => {            
                            return async ({ result, update }) => {
                                // `result` is an `ActionResult` object
                                // `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
                            };
                        }}>
                            <div class="form-group">
                                <input type="text" class="form-control border-0 p-4" placeholder="Nom" name="nom" required={true} />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 p-4" placeholder="E-mail" name="email" required={true} />
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Message" required={true} class="form-control border-0 p-4" name="message" rows="3"></textarea>
                            </div>
                            <div>
                                <button class="btn btn-primary btn-block border-0 py-3" type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid py-5">
    <div class="container py-5">
        <div class="bg-action rounded" style="height: 500px;">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="col-lg-7 text-center">
                    <h1 class="text-white mb-4">Restons en contact</h1>
                    <a class="btn btn-primary py-3 px-5 mt-2" href="mailto:contact@causse-avocat.fr">Nous contacter</a>
                </div>
            </div>
        </div>
    </div>
</div>