import React, { useState } from 'react';

export default function ContactContent(props) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    
        const formData = new FormData(event.target);
    
        const response = await fetch('Admin forgot to change the URL', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
    
        if (response.status !== 200) {
            console.error('Form submission error', response);
        }
    };

    if (isSubmitted) {
        return (
            <div className="thankyou">
                <div className="WindowHeader">
                    <h1>Thank you!</h1>
                </div>
                <div className="WindowContent">
                    <p>Your message has been sent.</p>
                </div>
            </div>
        )
    }

    return (
        <article id="contactcontent">
            <form action="Admin forgot to change the URL" method="POST" onSubmit={handleSubmit}>
                <button type="submit">Send</button>
                <div className="formfield">
                    <label htmlFor="to">From:</label>
                    <input type="email" name="From" required />
                </div>
                <div className="formfield">
                    <label htmlFor="to">To:</label>
                    <input type="text" name="to" readOnly value="Ander" />
                </div>
                <div className="formfield">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" required />
                </div>
                <div className="formfield">
                    <textarea required name="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </article>
    );
}