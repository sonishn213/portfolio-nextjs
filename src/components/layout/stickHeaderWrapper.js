
export default function StickyHeaderWrapper({ children }) {
    return (
        <header className="tj-header-area style-2 header-2 header-sticky sticky-out">
            {children}
        </header>
    )
}