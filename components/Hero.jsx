// components/Hero.jsx
export function Hero({ title, subtitle }) {
    return (
        <section
            style={{
                // Indent from the left
                marginLeft: '2rem',
                // Add vertical spacing
                marginTop: '2rem',
                marginBottom: '2rem',
                // Thicker top border
                borderTop: '4px solid rgb(255, 104, 87)',
                // Thinner border on other sides
                borderLeft: '2px solid #ccc',
                borderRight: '2px solid #ccc',
                borderBottom: '2px solid #ccc',
                // Rounded corners, bigger shadow
                borderRadius: '0.5rem',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                // White background
                backgroundColor: '#fff',
                // Plenty of padding inside
                padding: '1rem 2rem',
                textAlign: 'left'
            }}
        >
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {title}
            </h1>
            {subtitle && (
                <p style={{ marginBottom: 0, marginLeft: '1rem' }}>
                    {subtitle}
                </p>
            )}
        </section>
    )
}