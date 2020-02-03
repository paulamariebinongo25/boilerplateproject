/*
 * StreamPage
 *
 * List all the features
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from '../../components/Header/index';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import { useFetch } from '../../hooks/hooks';

export default function StreamPage() {
  const data = useFetch(
    'https://api.soundcloud.com/comments/13685794?client_id=f0sxU3Az3dcl0lS1M9wFJ00SqawVL72n',
  );
  return (
    <div>
      <Helmet>
        <title>Stream Page</title>
        <meta
          name="description"
          content="Stream page of React.js Boilerplate application for stream page"
        />
      </Helmet>
      <Header />
      <div className="container is-fluid">
        <table className="table is-fullwidth is-bordered is-hoverable is-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Created</th>
              <th>User ID</th>
              <th>track ID</th>
              <th>Timestamp</th>
              <th>Body</th>
              <th>URI</th>
              {/* <th>User</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({
                id,
                created_at,
                user_id,
                track_id,
                timestamp,
                body,
                uri,
                // user{id, permalink,username, uri}
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{created_at}</td>
                  <td>{user_id}</td>
                  <td>{track_id}</td>
                  <td>{timestamp}</td>
                  <td>{body}</td>
                  <td>{uri}</td>
                  {/* <td>
                    {user.id}
                    {user.permalink}
                    {user.username}
                    {user.uri}
                  </td> */}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
