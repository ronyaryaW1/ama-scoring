import React from 'react';
import IdeaComponent from '../screen/IdeaComponent';
import data from '../../scoring/json/data.json';

const Idea1Container = props => {
  return <IdeaComponent data={data[0]} {...props} />;
};

export default Idea1Container;
