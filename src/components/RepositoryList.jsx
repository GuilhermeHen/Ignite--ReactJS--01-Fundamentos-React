import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'name',
  description: 'description',
  link: 'http://google.com'
}

export function RepositoryList(){
  return(
    <section className="repository-list">
      <h1>Lista de Repósitorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}