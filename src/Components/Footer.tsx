export const Footer = () => {
  return <footer className="pt-10 w-full max-w-7xl mx-auto">
    <div className="pb-20 pt-10 flex items-center justify-between">
      <div className="space-y-3 w-[30%]">
        <h3 className="text-2xl font-semibold gradient-text">ReeFolio</h3>
        <p className="text-secondary">Build stunning portfolio websites without code. Import your resume and get an instant portfolio in seconds.</p>
      </div>

      <ul className="space-y-2">
        <li className="mb-4 text-lg">Navigation</li>
        <li className="text-secondary"><a href="#">Features</a></li>
        <li className="text-secondary"><a href="#">Templates</a></li>
        <li className="text-secondary"><a href="#">My Portfolios</a></li>
      </ul>
    </div>

    <p className="border-b border-b-secondary/15 w-full" />

    <p className="text-center text-secondary py-8">&copy; 2025 ReeFolio. All rights reserved.</p>
  </footer>
}
