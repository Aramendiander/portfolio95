export default function Window({ children, ...props }) {
    console.log(children)
    return (
        <div className="window">
            <div className="titlebar">
                <div className="titlebarname">
                    <span>{props.name}</span>
                </div>
                <div className="titlebarbuttons">
                    <div className="titlebarbutton minimize">Min</div>
                    <div className="titlebarbutton maximize">Max</div>
                    <div className="titlebarbutton close" onClick={props.onClose}>X</div>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}