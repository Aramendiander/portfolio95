import Draggable from "react-draggable"

export default function Window({ children, className, uniqueClass, ...props }) {
    return (
        <Draggable>

       
        <div className={`window ${className} ${uniqueClass}`}>
            <div className="title-bar">
                <div className="title-bar-text">
                    <span>{props.name}</span>
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