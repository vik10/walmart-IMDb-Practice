const PosterContainer = (props) => {
  return (
    <>
      <div className="posterCont">
        <div className="row mx-0 gap-4">
          <div className="col-auto px-0 mx-auto">
            <video
              controls
              width="600"
              height="600"
              poster="https://i.redd.it/x1yukhjjj4o21.png"
            >
              <source src="" type=""></source>
            </video>
          </div>
          <div className="col upnext">
            <h3 className="text-warning my-3">Up Next</h3>
            {props.productsArr.map((item, i) =>
              i <= 2 ? (
                <div
                  className="row bg-dark p-2 text-light rounded mb-2"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    className=" col-auto"
                    alt="..."
                    style={{ height: 160, width: 120 }}
                  ></img>
                  <div className="col">
                    <i
                      className="fa fa-play-circle fs-3"
                      aria-hidden="true"
                    ></i>
                    <h5 className="card-title">{item.fullTitle}</h5>
                    <p className="card-text">{}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PosterContainer;
