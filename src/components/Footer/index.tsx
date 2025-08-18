function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center p-4">
      <p>© {year} Search Repositories</p>
    </footer>
  );
}

export default Footer;
