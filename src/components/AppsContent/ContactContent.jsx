export default function ContactContent(props) {

// TODO Check why the viewport increases when the app is opened

    return (
        <article id="contactcontent">
            <form>
                <button>Send</button>
                <div className="formfield">
                    <label htmlFor="to">To:</label>
                    <input type="text" name="to" readOnly value="Ander" />
                </div>
                <div className="formfield">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" />
                </div>
                <div className="formfield">
                    <textarea name="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </article>
    )
}