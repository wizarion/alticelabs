import { memo } from 'react';
import Posts from "./Posts";

const Users = props => {
  return props?.users?.map((user, ind) => {
    return (
      <div key={ind}>
        <details>
          <summary>{user.name}</summary>
          <strong>{user.id}</strong>
          <br/>
          <strong>{user.username}</strong>
          <br/>
          <strong>{user.email}</strong>
          <br/>
          <details>
            <summary>Address</summary>
            <strong>{user.address.street}</strong>
            <br/>
            <strong>{user.address.suite}</strong>
            <br/>
            <strong>{user.address.city}</strong>
            <br/>
            <strong>{user.address.zipcode}</strong>
            <br/>
            <details>
              <summary>Geolocation</summary>
              <strong>{user.address.geo.lat}</strong>
              <br/>
              <strong>{user.address.geo.lng}</strong>
            </details>
          </details>
          <strong>{user.phone}</strong>
          <br/>
          <strong>{user.website}</strong>
          <br/>
          <details>
            <summary>Company</summary>
            <strong>{user.company.name}</strong>
            <br/>
            <strong>{user.company.catchPhrase}</strong>
            <br/>
            <strong>{user.company.bs}</strong>
            <br/>
          </details>
          <details>
            <summary>Posts</summary>
            <Posts posts={user.posts} />
          </details>
        </details>
        <br />
      </div>
    )
  })
}

export default memo(Users);