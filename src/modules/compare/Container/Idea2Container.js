import React from 'react';
import IdeaComponent from '../screen/IdeaComponent';
import data from '../../scoring/json/data.json';

const Idea2Container = props => {
  return <IdeaComponent data={data[1]} {...props} />;
};

export default Idea2Container;
