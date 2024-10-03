import AddCompanyButton from './components/addCompanyButton';
import StatusLabel, { Status } from './components/statusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <AddCompanyButton />
    </main>
  );
}
