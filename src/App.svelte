<script>
	import helloWordArr from './hello'

	let helloWord = helloWordArr[Math.floor((Math.random() * helloWordArr.length))]
</script>

<main>
	<h1><span>{helloWord},</span>我是Diu.</h1>
	<p>主流泛前端开发工程师，就职于<span>滴滴出行</span>。</p>
	<p>开发之外，也做一些设计领域的事。</p>
	<a href="https://github.com/ddiu8081">Github</a>
</main>

<style lang="scss" global>
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
  }

	h1 {
		font-size: 2.4rem;
		color: #333333;
		font-weight: bold;
		margin-bottom: 1.6rem;
		span {
			display: block;
		}
	}

	p {
		font-size: 1.4rem;
		color: #515151;
		margin-bottom: 0.5rem;
		span {
			box-shadow: inset 0 -0.2em rgba(252, 145, 83, 0.5);
			&:hover {
				transition: box-shadow .3s ease;
    		box-shadow: inset 0 -0.7em rgba(252, 145, 83, 0.5);
			}
		}
	}

	a {
		display: inline-block;
		margin-top: 2.4rem;
		padding: 0.3rem 0.8rem;
		background: rgba(0, 0, 0, 0.06);
		border-radius: 4px;
		// border: 1px solid rgba(0, 0, 0, 0.06);
		font-size: 1.1rem;
		color: #999999;
		transition: all 0.3s ease;
		&:hover {
			background: rgba(0, 0, 0, 0.6);
			color: #ffffff;
		}
	}
</style>