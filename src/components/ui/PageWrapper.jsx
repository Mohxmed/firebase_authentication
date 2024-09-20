const PageWrapper = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-r  from-slate-800 to-blue-900 flex items-center justify-center">
      {children}
    </div>
  );
};

export default PageWrapper;
