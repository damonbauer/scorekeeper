import Rebase from 're-base';
import shortid from 'shortid';

export const Base = Rebase.createClass({
  apiKey: 'AIzaSyDmDJQ43yg-cuDQ-KVgkm1EkdcTjJvO_r4',
  authDomain: 'scorekeeper-6533d.firebaseapp.com',
  databaseURL: 'https://scorekeeper-6533d.firebaseio.com',
  storageBucket: 'scorekeeper-6533d.appspot.com'
});

export function shortId() {
  return shortid.generate();
}
