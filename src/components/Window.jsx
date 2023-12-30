export default function Window({ children, className, ...props }) {
    return (
        <div className={`window ${className}`}>
            <div className="titlebar">
                <div className="titlebarname">
                    <span>{props.name}</span>
                </div>
                <div className="titlebarbuttons">
                    <div className="titlebarbutton minimize" onClick={props.onMinimize}>Min</div>
                    <div className="titlebarbutton maximize" onClick={props.onMaximize}>Max</div>
                    <div className="titlebarbutton close" onClick={props.onClose}>X</div>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}