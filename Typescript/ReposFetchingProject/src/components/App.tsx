import { Provider } from 'react-redux'
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <RepositoriesList />
            </div>
        </Provider>
    )
}

export default App;