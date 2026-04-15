export default function Info() {
	return (
		<section id="info">
			<div className="info-image"></div>
			<div className="info-text">
				<h1>Julie Rindone</h1>
				<p className="occupation">Frontend Developer</p>
				<a className="website" href="https://github.com/julierindone">github.com/julierindone</a>
			</div>
			<div className="info-links">
				{/* TODO: I think there's an email tag. */}
				<a className="link-button">
					<i className="icon fa-solid fa-envelope"></i>
					Email
				</a>
				<a className="link-button">
					<i className="icon fa-brands fa-linkedin"></i>
					LinkedIn
				</a>
			</div>

		</section>
	);
}