<script>
  import "./main.scss";
  import { page } from '$app/stores';
	import NavLink from "../lib/components/NavLink.svelte";
	import ProgressBar from "../lib/components/ProgressBar.svelte";
</script>
<ProgressBar/>
<div class="container">
  <nav>
    <a class="logo" href="/">Mahaveer Amrani</a>
    <ul>
      <NavLink href="/" title="Home"/>
      <NavLink href="/about" title="About"/>
      <NavLink href="/gallery" title="Gallery"/>
      <NavLink href="/contact" title="Contact"/>
    </ul>
  </nav>
  <slot></slot>
</div>

<footer>
  <div class="content">
    <a href="/">Mahaveer Amrani</a>
  <p>All Rights reserved.</p>
  </div>
</footer>