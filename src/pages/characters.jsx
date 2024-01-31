import React, { useContext } from 'react;'

const Characters = () => {
    const { store, actions } = useContext(context);

    return (

        <div className="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Learn more!</a>
                </div>
        </div>







    )


}

export default Characters