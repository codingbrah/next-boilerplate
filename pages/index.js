import Button from '@material-ui/core/Button';
import MiniDrawer from '../components/Drawer';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="container">
      <main>
        <MiniDrawer>
          <DynamicComponentWithNoSSR />
        </MiniDrawer>
        <Button variant="contained" color="primary">
          Test
        </Button>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}
