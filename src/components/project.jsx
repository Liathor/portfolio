function Project(props) {
    return (
      <div>
        {props.cards.map((item) => {
          return (
            <div className="card" key={item.id} style={{backgroundImage: `url(${item.image}`}}>
              <h3><a href={item.link}>{item.name}</a></h3>
              <img src="./src/assets/github-mark.png" alt="" />
              <p>
                {item.codes.map((code, index) => (
                  <span key={`${item.id}-${index}`} className="code-span">{code}</span>
                ))}</p>        
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Project;