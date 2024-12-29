// components/Hero.jsx
export function Hero({ title, subtitle }) {
    return (
        <section className="hero-callout hero-callout--primary-border">
            <h1 className="hero-title">{title}</h1>
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </section>
    )
}