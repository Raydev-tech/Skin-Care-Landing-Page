import { Sparkles, Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container flex flex-col gap-6 px-4 md:flex-row md:px-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-semibold tracking-tight">PureSkin</span>
          </div>
          <p className="text-sm text-muted-foreground">Transforming skincare routines since 2015.</p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-2">
            <h4 className="text-base font-medium">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Moisturizers</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Serums</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Cleansers</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Bundles</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">About</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Press</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-medium">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Shipping</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Returns</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Terms</a></li>
              <li><a href="#" className="text-muted-foreground transition-colors hover:text-foreground">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mt-6 md:mt-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-t-muted pt-6 md:h-24 md:flex-row md:pt-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} PureSkin Beauty. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/pureskinbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/pureskinbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/pureskinbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/pureskinbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@pureskinbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;