import { Admin, Resource } from 'react-admin';
import { createTrailbaseProvider } from 'my-admin/ra-trailbase.js';

//import { PostList } from './posts';

const TRAILBASE_URL = 'https://studious-space-invention-v6gjrvg64jj62jp-4000.app.github.dev/'
const { dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);
//const simpleRestProvider  = dataProvider('http://path.to.my.api/');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default App;