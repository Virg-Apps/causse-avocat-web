<script lang="ts">
	import { enhance } from "$app/forms";
</script>

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