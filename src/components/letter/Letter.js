
import { memo } from 'react';
import Users from "../Users";
import PrettyData from "react-prettier-json";

const Letter = (props) => {
  return(
    <div data-testid="letter-component" >
      <h1>Letter!!</h1>
      <Users users={props?.users} />
      <div data-testid="pretty-data">
        <PrettyData data={props?.users}/>
      </div>
    </div>
  );
}

export default memo(Letter);