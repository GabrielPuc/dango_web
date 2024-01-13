import React  from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import { Card } from "../components/Card";
import { CollapsableSection } from "../components/CollapsableSection";
import { useLocation } from "react-router-dom";

export const Reference = () => {
  const [groups, setGroups] = useState([]);

  //const contentName = window.location.pathname;
  const location = useLocation();
  const { state } = location;
  console.log(state.contentType)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_SERVER}/${state.contentType}`)
  .then(response => {
    const content = response.data.content
    const allGroups = Map.groupBy(content, ({group}) => group);
    let mapjs = Array.from(allGroups, ([name, value]) => ({ name, value }));

    setGroups(mapjs)
  })
  }, [state.contentType])

  return (
    <div>
      { groups.length > 0 ? 
      groups
        .map(content => {
          return(
            <CollapsableSection
            title={content.name}
            content={
              content.value.map(word => {
                return (
                  <Card
                  symbol={word.symbol}
                  meaning={word.meaning}
              />
                )
              })
              
            }
          />
          )
      })
        :

        <p>NO CONTENT</p>
    }
    </div>
  );
};