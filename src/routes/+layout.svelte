<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import { page } from '$app/state';

	let { children } = $props();
	let pathName: string = page.url.pathname;
	console.log(pathName);
</script>

<header>
	<a href="/" id="logo">
		<img src="img/logo.png" height="64" alt=""/>
		<div class="title">
			<h1>Cabinet Caussé</h1>
			<span>Avocats au barreau</span>
		</div>
	</a>
	<section class="menu">
		<div class="row bg-white border-bottom d-none d-lg-flex">
			<div class="col-lg-7 text-left">
				<div class="h-100 d-inline-flex align-items-center py-2 px-3">
					<i class="fa fa-envelope text-primary mr-2"></i>
					<small><a href="mailto:contact@causse-avocat.fr">contact@causse-avocat.fr</a></small>
				</div>
				<div class="h-100 d-inline-flex align-items-center py-2 px-2">
					<i class="fa fa-phone text-primary mr-2"></i>
					<small><a href="tel:0491523214">04 91 52 32 14</a></small>
				</div>
			</div>
			<div class="col-lg-5 text-right">
				<div class="d-inline-flex align-items-center p-2">
					<a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="" aria-label="LinkedIn">
						<i class="fab fa-linkedin-in"></i>
					</a>
				</div>
			</div>
		</div>
		<nav class="navbar navbar-expand-lg bg-white navbar-light p-0">
			<button id="menu-trigger" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-label="Menu">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
				<div class="navbar-nav mr-auto py-0">
					<a href="/" class="nav-item nav-link" class:active={pathName == '/'}>Accueil</a>
					<a href="/#savoir-faire" class="nav-item nav-link">Nos savoir-faire</a>
					<a href="mailto:conctact@causse-avocat.fr" class="nav-item nav-link">Nous contacter</a>
					<a href="/politique-de-confidentialite" class="nav-item nav-link" class:active={pathName == '/politique-de-confidentialite'}>Politique de confidentilité</a>
				</div>
				<a href="#rdv" class="btn btn-primary mr-3 d-none d-lg-block">Je prends un RDV</a>
				<a href="#devis" class="btn btn-primary mr-3 d-none d-lg-block">Je demande un devis</a>
			</div>
		</nav>
	</section>
</header>

{@render children()}

<div class="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5" style="margin-top: 90px;">
	<div class="row mt-5">
		<div class="col-lg-8">
			<div>
				<div class="d-flex justify-content-lg-center p-4" style="background: rgba(256, 256, 256, .05);">
					<i class="fa fa-2x fa-map-marker-alt text-primary"></i>
					<div class="ml-3">
						<h5 class="text-white">Nos bureaux</h5><br/>
						<p class="m-0">18 Cours Pierre-Puget, 13006 Marseille</p><br/>
						<!--<iframe title="Cabinet Caussé" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.1299240865933!2d5.37373407674974!3d43.29060077112157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b9da773cc9%3A0x2e266804ea03bfbc!2s18%20Cr%20Pierre%20Puget%2C%2013006%20Marseille!5e0!3m2!1sfr!2sfr!4v1745493269008!5m2!1sfr!2sfr" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
						<p class="m-0">8 route de la Sablière - Immeuble le Rond-point, 13011 Marseille</p><br/>
						<!--<iframe title="Cabinet Caussé" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2904.1532870913516!2d5.475626996867079!3d43.29011148072604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8%20route%20de%20la%20Sabli%C3%A8re%20-%20Immeuble%20le%20Rond-point%2C%2013011%20Marseille!5e0!3m2!1sfr!2sfr!4v1745493386967!5m2!1sfr!2sfr" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>-->
						<p class="m-0">1 rue Saint-Antoine, 75004 Paris</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-4">
			<div class="d-flex justify-content-lg-center p-4" style="background: rgba(256, 256, 256, .05);">
				<i class="fa fa-2x fa-envelope-open text-primary"></i>
				<div class="ml-3">
					<h5 class="text-white">Nous contacter</h5><br/>
					<p class="m-0">contact@causse-avocat.fr</p><br/>
					<p class="m-0">04 91 52 32 14</p><br/>
				</div>
			</div>
		</div>
	</div>
	
	<div class="row pt-5">
		<div class="col-lg-4 col-md-6 mb-5">
			<a href="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
				<img src="img/logo.png" height="64" alt=""/>
				<div class="title">
					<h1 style="color:white">Cabinet Caussé</h1>
					<span>Avocats au barreau</span>
				</div>
			</a>
		</div>
		<div class="col-lg-4 col-md-6 mb-5">
			<a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
		</div>
		<div class="col-lg-4 col-md-6 mb-5">
			<h4 class="font-weight-semi-bold text-primary mb-4">Plan du site</h4>
			<div class="d-flex flex-column justify-content-start">
				<a class="text-white mb-2" href="/"><i class="fa fa-angle-right mr-2"></i>Accueil</a>
				<a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Nos savoir-faire</a>
				<a class="text-white mb-2" href="/#rdv"><i class="fa fa-angle-right mr-2"></i>Je demande un rendez-vous</a>
				<a class="text-white mb-2" href="/#devis"><i class="fa fa-angle-right mr-2"></i>Je demande un devis</a>
				<a class="text-white mb-2" href="/politique-de-confidentialite"><i class="fa fa-angle-right mr-2"></i>Politique de confidentilité</a>
			</div>
		</div>
	</div>
	<div class="row p-4 mt-5 mx-0" style="background: rgba(256, 256, 256, .05);">
		<div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
			<p class="m-0 text-white">&copy; <a class="font-weight-bold" href="#">Cabinet Caussé</a></p>
		</div>
		<div class="col-md-6 text-center text-md-right">
			<p class="m-0 text-white">Designed by <a class="font-weight-bold" href="https://htmlcodex.com">HTML Codex</a></p>
		</div>
	</div>
</div>

<Toaster/>