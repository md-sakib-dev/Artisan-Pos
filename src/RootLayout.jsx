import Sidebar from './Sidebar/Sidebar';

const RootLayout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <main className="max-w-7xl mx-auto py-4">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
