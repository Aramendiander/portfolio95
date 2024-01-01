export default function ExternalWindowLinkedin(props) {

    const handleClose = () => {
        props.closeApp();
    };

    const handleYes = () => {
        window.open('https://www.linkedin.com/in/ander-aramendi/', '_blank');
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