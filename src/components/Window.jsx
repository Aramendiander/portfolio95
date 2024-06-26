import Draggable from "react-draggable"

export default function Window({ children, className, uniqueClass, style, ...props }) {
    return (
        <Draggable handle=".title-bar-text" onMouseDown={props.onMouseDown}>
            <div className={`window ${className} ${uniqueClass}`} style={style}>
                <div className="title-bar">
                    <div className="title-bar-text">
                        <span><img src={props.icon} alt="" /></span><span>{props.name}</span>
                    </div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" className="titlebarbutton minimize" onClick={props.onMinimize}></button>
                        <button aria-label="Maximize" className="titlebarbutton maximize" onClick={props.onMaximize}></button>
                        <button aria-label="Close" className="titlebarbutton close" onClick={props.onClose}></button>
                    </div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </Draggable>
    )
}