import { useState } from 'react';
import { Link } from 'react-router-dom';


function Index({grappler, createGrappler}) {
    const [ newForm, setNewForm ] = useState({
        image: "",
        name: "",
        team: "",
        lineage: "",
        rank: "",
        championships: "",
        techniques: "",
        weight: "",
        wins: ""


    })

    const loaded = () => {
        return grappler.map(({ image, name, _id }) => {
            return (
            <div className='grappler' key={_id}>
                <div className='grapplerName'>
                <Link to={`/grappler/${_id}`}>
                    <h1 className='grapplerName'>{name}</h1>
                </Link>
                <img className="grapplerImage" src={image} alt={name}/>
                
                </div>
            </div>
            )
        })
    };
    const loading = () => {
        return <h1>Loading...</h1>
    };

    const isFormValid = () => {
        return (
            newForm.name.length > 2 &&
            newForm.team.length > 2 &&
            newForm.lineage.length > 2 &&
            newForm.rank.length > 2 &&
            newForm.championships.length > 2 &&
            newForm.techniques.length > 2 &&
            newForm.weight.length > 2 &&
            newForm.wins.length > 2 
        );
    }

    const handleChange = event => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            formValid: isFormValid()

        }));
    };
    const handleSubmit = event => {
        event.preventDefault();
        if(!newForm.formValid) return;
        // if(Object.values(newForm).length === 0) return;
        createGrappler(newForm)
    };

    console.log(grappler)


    return (
        <section className='grapplerForm'>
            <form onSubmit={handleSubmit}>
            <input 
                    type="text"
                    value={newForm.image}
                    onChange={handleChange}
                    name="image"
                    placeholder="https://your-image-url.png"
                
                />
                <input 
                    type="text"
                    value={newForm.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                
                />
                 <input 
                    type="text"
                    value={newForm.team}
                    onChange={handleChange}
                    name="team"
                    placeholder="Team"
                
                />
                  <input 
                    type="text"
                    value={newForm.lineage}
                    onChange={handleChange}
                    name="lineage"
                    placeholder="Lineage"
                
                />

                <input 
                    type="text"
                    value={newForm.rank}
                    onChange={handleChange}
                    name="rank"
                    placeholder="Rank"
                
                />

                <input 
                    type="text"
                    value={newForm.championships}
                    onChange={handleChange}
                    name="championships"
                    placeholder="Championships"
                
                />

                <input 
                    type="text"
                    value={newForm.techniques}
                    onChange={handleChange}
                    name="techniques"
                    placeholder="Techniques"
                
                />

                <input 
                    type="text"
                    value={newForm.weight}
                    onChange={handleChange}
                    name="weight"
                    placeholder="Weight class"
                
                />
                
                <input 
                    type="text"
                    value={newForm.wins}
                    onChange={handleChange}
                    name="wins"
                    placeholder="Wins and losses?"
                
                />

                <input className="submit-btn" type="submit" value="Add Grappler" />
                
            </form>
            {grappler ? loaded() : loading()}
        </section>
    )
    
}

export default Index;