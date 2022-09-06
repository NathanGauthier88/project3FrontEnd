import { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

function Show({ grappler, deleteGrappler, updateGrappler }) {
    const [updateForm, setUpdateForm] = useState({
        name: "",
        image: "",
        team: "",
        lineage: "",
        rank: "",
        championships: "",
        techniques: "",
        weight: "",
        wins: ""
});
   
    const { id } = useParams()
    const navigate = useNavigate();
    const grapplers = grappler.find(p => p._id === id);
    
    const handleDelete = () => {
        deleteGrappler(id);
        navigate('/');
    }

    const handleChange = event => {
        setUpdateForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };
    const handleUpdate = event => {
        event.preventDefault();
        updateGrappler(id, updateForm);
    };

    useEffect(() => {
        setUpdateForm(grapplers);
    }, [grappler, grapplers]);

    return (
        <div className="grapplerShow">
        
            <h1>{grapplers.name}</h1>
            <img className="grapplerImage" src={grapplers.image} alt = {grapplers.name} />
            <div className="grapplerCard">
            <h4>Team: {grapplers.team}</h4>
            <h4>Lineage: {grapplers.lineage}</h4>
            <h4>Rank: {grapplers.rank}</h4>
            <h4>Championships: {grapplers.championships}</h4>
            <h4>Favorite Techniques: {grapplers.techniques}</h4>
            <h4>Weight-Class: {grapplers.weight}</h4>
            <h4>Wins-Losses: {grapplers.wins}</h4>
            </div>
            <button class="delete-btn" onClick={handleDelete}>Delete Grappler</button>
            <form onSubmit={handleUpdate}>
                <input 
                    type="text"
                    value={updateForm.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Grappler Name?"
                
                />
                  <input 
                    type="text"
                    value={updateForm.image}
                    onChange={handleChange}
                    name="image"
                    placeholder="https://your-image-url.png"
                
                />
                 <input 
                    type="text"
                    value={updateForm.team}
                    onChange={handleChange}
                    name="team"
                    placeholder="What is their team?"
                
                />
                  <input 
                    type="text"
                    value={updateForm.lineage}
                    onChange={handleChange}
                    name="lineage"
                    placeholder="Who gave them their belt?"
                
                />

                <input 
                    type="text"
                    value={updateForm.rank}
                    onChange={handleChange}
                    name="rank"
                    placeholder="What belt are they?"
                
                />

                <input 
                    type="text"
                    value={updateForm.championships}
                    onChange={handleChange}
                    name="championships"
                    placeholder="What have they won?"
                
                />

                <input 
                    type="text"
                    value={updateForm.techniques}
                    onChange={handleChange}
                    name="techniques"
                    placeholder="best techniques?"
                
                />

                <input 
                    type="text"
                    value={updateForm.weight}
                    onChange={handleChange}
                    name="weight"
                    placeholder="Weight class?"
                
                />
                
                <input 
                    type="text"
                    value={updateForm.wins}
                    onChange={handleChange}
                    name="wins"
                    placeholder="Wins and losses?"
                
                />
                <input class="update-btn" type="submit" value="Update Grappler" />
            </form>
        </div>
    )
}

export default Show;

