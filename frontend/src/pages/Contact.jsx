
export default function Contact() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="text-center heading ">Contact Us</h2>
        <p className="text_para text-center mb-8 lg:mb-16 font-light">Got a technical issue? want to send feedback about a beta feature? Let us know.</p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">Your email</label>
            <input type="email" id="email" placeholder="example@gmail.com" className="form_input mt-1" />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">Subject</label>
            <input type="text" id="subject" placeholder="Let us know how we can help you" className="form_input mt-1" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">Your message</label>
            <textarea rows={6} type="text" id="message" placeholder="Leave a comment..." className="form_input mt-1" />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  )
}
