<script>
	let isOpen = false;
	export let segment;

	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<style>
	@media(min-width: 769px) {
		nav {
			border-bottom: 1px solid gray;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a rel="prefetch" href="/" class="navbar-item">
			<img src="favicon.png" alt="virus">
		</a>
		<span
			role="button"
			class="navbar-burger"
			class:is-active={isOpen}
			aria-label="menu"
			aria-expanded="false"
			on:click={toggleNav}
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a rel="prefetch" href="/" class="navbar-item"  class:is-active={segment === undefined}>Home</a>
			<a rel="prefetch" href="/about" class="navbar-item"  class:is-active={segment === 'about'}>About</a>
		</div>
	</div>
</nav>
