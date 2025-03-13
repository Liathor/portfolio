function Project(props) {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.cards.map((item) => {
          return (
            <div className="col-lg-4 d-flex align-items-stretch" key={item.id}>
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src={item.image}></img>
                <div class="card-body">
                  <h4 className="card-title"><a href={item.deployed}>{item.name}</a></h4>
                  <p className="card-text">{item.codes.map((code, index) => (<span key= {`${item.id}-${index}`} className="code-span">{` <${code}> `}</span>))}</p>
                  <p className="card-text lh-sm fw-lighter fst-italic"><a data-mdb-ripple-init="" className="btn btn-link btn-floating btn-lg text-dark m-1" href={item.repo} role="button" data-mdb-ripple-color="dark"><i className="fa fa-github"></i></a><br/>GitHub Repo</p>
                </div>
              </div>     
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Project;