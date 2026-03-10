
export default function StaticHeaderWrapper({ children }) {
    return (
        <header className="tj-header-area style-2 header-absolute">
            {children}
        </header>
    )
}