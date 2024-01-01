export default function ExternalWindowResume(props) {

    const handleClose = () => {
        props.closeApp();
    };

    const handleYes = () => {
        window.open('/resume.pdf', '_blank');
        props.closeApp();
    }

    return (
        <>
            <p>This will take you to an external website</p>
            <p>Are you sure you want to proceed?</p>
            <div>
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleClose}>No</button>
            </div>
        </>
    )
}