<script>
	import helloWordArr from './hello'
	import Highlight from './components/Highlight.svelte';

	let helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]
</script>

<main>
	<h1><span>{helloWord},</span>我是Diu.</h1>
	<p>主流<Highlight icon="apple,h5" highlightClass="moegi">泛前端</Highlight>开发工程师，就职于<Highlight icon="didi" highlightClass="orange">滴滴出行</Highlight>。</p>
	<p>也做一些小小的设计。</p>
	<a href="https://github.com/ddiu8081">Github</a>
	<a href="https://notes.ljl.li">Blog</a>
	<a href="https://www.instagram.com/dzpszied/">Instagram</a>
	<a href="https://www.behance.net/ddiu8081">Behance</a>
	<a href="https://space.bilibili.com/541993">Bilibili</a>
</main>

<style lang="scss" global>
	@import "css/variables";
	
	a {
    text-decoration: none;
  }

	body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section {
    margin: 0;
    padding: 0;
    font-weight: normal;
    vertical-align: baseline;
  }

	body {
    font: 400 16px/1.6 PingFang SC, Lantinghei SC, Microsoft Yahei,
      Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    margin: 0;
    padding: 10vh 10vw;
    min-height: 100vh;
		box-sizing: border-box;
		background: var(--color-background);
  }

	h1 {
		font-size: 2.4rem;
		color: var(--color-text-emphasize);
		font-weight: bold;
		margin-bottom: 1.6rem;
		span {
			display: block;
		}
	}

	p {
		font-size: 1.4rem;
		color: var(--color-text);
		margin-bottom: 0.5rem;
	}

	a {
		display: inline-block;
		margin-top: 2.4rem;
		margin-right: 0.2rem;
		padding: 0.3rem 0.8rem;
		background: var(--color-decoration);
		border-radius: 4px;
		font-size: 1.1rem;
		color: var(--color-text-lighter);
		transition: all 0.3s ease;
		&:hover {
			background: var(--color-text);
			color: var(--color-background);
		}
	}
</style>
