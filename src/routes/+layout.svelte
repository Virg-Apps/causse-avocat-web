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
					<a href="/politique-de-confidentialite" class="nav-item nav-link" class:active={pathName == '/politique-de-confidentialite'}>Politique de confidentilité</a>
				</div>
				<a href="#rdv" class="btn btn-primary mr-3 d-none d-lg-block">Je prends un RDV</a>
				<a href="#devis" class="btn btn-primary mr-3 d-none d-lg-block">Je demande un devis</a>
			</div>
		</nav>
	</section>
</header>

{@render children()}

<Toaster/>