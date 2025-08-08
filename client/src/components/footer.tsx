export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/attached_assets/MAK_1754638937992.jpg" 
              alt="Mom's Approved Kitchen Logo" 
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-2xl font-display font-bold">Mom's Approved Kitchen</h3>
          </div>
          <p className="text-gray-400 mb-4">Made with love, served with care</p>
          <p className="text-gray-500 text-sm">
            © 2024 Mom's Approved Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
