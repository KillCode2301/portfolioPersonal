
const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Thalhath Mohamed . All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;