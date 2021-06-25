import { useState } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { loading, error, data } = useTypedSelector(state => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Search repos</h1>
            <input value={term} onChange={(event) => setTerm(event.target.value)} />
            <button>Search</button>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
        </form>
    )
}

export default RepositoriesList;