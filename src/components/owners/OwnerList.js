import React, { useState, useEffect } from 'react';
import { OwnerCard } from "./OwnerCard"
import { getAllOwners, removeOwner} from '../../modules/OwnerManager';

export const OwnerList = () => {
    const [owners, setOwners] = useState([])


    const getOwners = () => {
        return getAllOwners().then(OwnersFromAPI => {
          // We'll do something more interesting with this data soon.
          setOwners(OwnersFromAPI)
        });
    };
    
    const deleteOwner = id => {
      removeOwner(id)
      .then(() => getAllOwners().then(setOwners))
    }
    
    useEffect(() => {
        getOwners();
    }, []); 
    
    return (
        <div className="container-cards">
         {owners.map(owner => <OwnerCard owner={owner} 
                                        deleteOwner={deleteOwner} 
                                        key={owner.id}/>)}
        </div>
    );
};