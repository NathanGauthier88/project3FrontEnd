import { useParams } from 'react-router-dom';

function Show({grappler}) {
    console.log(grappler);


    const { id } = useParams()
    const grapplers = grappler.find(p => p._id === id);
    console.log(grappler);

    return (
        <div className="grappler">
            <h1>{grapplers.name}</h1>
            <img src={grapplers.image} alt = {grapplers.name} />
        </div>
    )
}

export default Show;

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function Show({ grappler, deleteGrappler, updateGrappler }) {
//     const [updateForm, setUpdateForm] = useState({
//         image: "",
//         name: "",
//         team: "",
//         lineage: "",
//         rank: "",
//         championships: "",
//         techniques: "",
//         weight: "",
//         wins: ""
//     });

//     const navigate = useNavigate();
//     const { id } = useParams()
//     const grapplers = grappler.find(p => p._id === id);
    
//     const handleDelete = () => {
//         deleteGrappler(id);
//         navigate('/');
//     }

//     const handleChange = event => {
//         setUpdateForm((prevState) => ({
//             ...prevState, 
//             [event.target.name]: event.target.value 
//         }));
//     };

//     const handleUpdate = event => {
//         event.preventDefault();
//         updateGrappler(id, updateForm);
//     };

//     useEffect(() => {
//         setUpdateForm(grapplers);
//     }, [grappler, grapplers]);
 
//     return (
//         <div className="person">
//                 <h3>{grapplers.team}</h3>
//                 <h3>{grapplers.lineage}</h3>
//                 <h3>{grapplers.rank}</h3>
//                 <h3>{grapplers.championships}</h3>
//                 <h3>{grapplers.techniques}</h3>
//                 <h3>{grapplers.weight}</h3>
//                 <h3>{grapplers.wins}</h3>
//             <img 
//                 className="person-image"
//                 src={grapplers.image} 
//                 alt={grapplers.name}
//             />
//             <button onClick={handleDelete}>Delete Grappler</button>
//             <form onSubmit={handleUpdate}>
//                 <input 
//                     type="text"
//                     value={updateForm.name}
//                     name="name"
//                     onChange={handleChange}
//                     placeholder="Dimitrius Souza"
//                 />
//                  <input 
//                     type="text"
//                     value={updateForm.team}
//                     name="team"
//                     onChange={handleChange}
//                     placeholder="Alliance"
//                 />
//                  <input 
//                     type="text"
//                     value={updateForm.image}
//                     name="image"
//                     onChange={handleChange}
//                     placeholder="https://some-image.png"
//                 />
//                    <input 
//                     type="text"
//                     value={updateForm.weight}
//                     name="weight"
//                     onChange={handleChange}
//                     placeholder="Heavy"
//                 />
               
//                 <input type="submit" value="Update Grappler"/>
//             </form>
//         </div>
//     )
//   }
  
//   export default Show;

