export default function Footer() {
    return (
      <footer className="text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
        <div className="container pt-4">
          <section className="mb-4">
            <a data-mdb-ripple-init="" className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/Liathor" role="button" data-mdb-ripple-color="dark"><i className="fa fa-github"></i></a>
            <a data-mdb-ripple-init="" className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/misha-dyer-042703101/" role="button" data-mdb-ripple-color="dark"><i className="fa fa-linkedin"></i></a>
            <a data-mdb-ripple-init="" className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/misha.dyer" role="button" data-mdb-ripple-color="dark"><i className="fa fa-facebook"></i></a>
          </section>
        </div>
        <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}> © 2025 Copyright: Misha Dyer</div>
      </footer>
    );
  }