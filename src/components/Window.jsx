

export default function Window({ children }) {
    return (
        <div className="window">
            <div className="titlebar">
                <div className="titlebarname">
                    <span>Aramendi</span> 95
                </div>
                <div className="titlebarbuttons">
                    <div className="titlebarbutton minimize">Min</div>
                    <div className="titlebarbutton maximize">Max</div>
                    <div className="titlebarbutton close">X</div>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}