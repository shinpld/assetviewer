import React from 'react';
import Card from './Card';


const CardList = ({items}) =>{
const cardsArray = items.map((user,i)=>{
  return <Card
    key={i}
    
    asset_id={items[i].Asset}
    location={items[i].Location} 
    bld={items[i].Building_Fl}
    desc={items[i].Asset_description}
    desc2={items[i].Description_2}
    sn={items[i].Serial_number}
    room={items[i].Room}
    sup={items[i].Asset_Sup}
    
    />
})
  return(
    <div>
      {cardsArray}
    </div>
  );
}
export default CardList;
