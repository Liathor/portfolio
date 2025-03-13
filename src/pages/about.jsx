export default function About() {
    return (
      <div className="content px-2">
        <h1 className="display-4">About Me</h1>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <img className="img-fluid img-thumbnail img-responsive" src="https://media.licdn.com/dms/image/v2/D5603AQFmhXcnVmWrIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732141701110?e=1747267200&v=beta&t=1QOZcUi2vrh_JLJr_EW6yg55Rkok12ZYn_bxH8nmLL0" alt="a photograph of myself on a hiking trail"/>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <p>My name is Misha Dyer, I'm new to coding, but very eager to learn and apply my skills. I'm from a book publishing background, wherein I work with data management of book products as well as ebook production. I have experience with XML, HTML and CSS as a result of my background in publishing. The EDX bootcamp is giving me a greater understanding of HTML and CSS, and has also introduced me to Javascript.</p>
            <p>In my free time I enjoy hiking, reading, gaming, and escape rooms. Please reach out to me if you have any questions. I'm happy to answer and chat.</p>
          </div>
        </div>
      </div>
    );
  }