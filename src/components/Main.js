import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
    const [ grappler, setGrappler ] = useState(null);

    const API_URL = 'http://localhost:4000/api/grappler';

    const getGrappler = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setGrappler(data);
        } catch (error) {
            
        }
    };

    const createGrappler = async (grappler) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(grappler)
            });
            getGrappler();
        } catch (error) {
            
        }
    };

    const deleteGrappler = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            getGrappler();
        } catch (error) {
            
        }
    };

    const updateGrappler = async (id, updatedGrappler) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(updatedGrappler)
            });

            getGrappler();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getGrappler();
    }, [])

    console.log(grappler)

    return (
        <main>
            <Routes>
                <Route 
                path="/" 
                element={
                        <Index 
                            grappler={grappler} 
                            createGrappler={createGrappler}
                        />
                    }
                />
                <Route 
                    path="/grappler/:id" 
                    element={
                        <Show 
                        grappler={grappler}
                        deleteGrappler={deleteGrappler} 
                        updateGrappler={updateGrappler}
                        />
                    } 
                />
                </Routes>
        </main>
        
    );

}

export default Main;