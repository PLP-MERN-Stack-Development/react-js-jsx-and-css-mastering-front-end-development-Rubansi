import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
        Welcome to Task Manager
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Manage Tasks">
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Create, organize, and track your tasks efficiently.
          </p>
          <Link to="/tasks">
            <Button variant="primary">Go to Tasks</Button>
          </Link>
        </Card>
        
        <Card title="API Integration">
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            View data fetched from JSONPlaceholder API.
          </p>
          <Link to="/api-data">
            <Button variant="secondary">View API Data</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;