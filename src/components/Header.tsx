
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList className="bg-secondary/20 border border-sky-200/30 rounded-full px-3 py-1 backdrop-blur-sm shadow-md mx-auto">
            <NavigationMenuItem>
              <Link to="/" className="font-bold text-xl px-4 text-sky-500">MD.</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-sky-100/20 hover:text-sky-600 focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/30 data-[state=open]:bg-accent/30"
                href="#projets"
              >
                Projets
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-sky-100/20 hover:text-sky-600 focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/30 data-[state=open]:bg-accent/30"
                href="#competences"
              >
                Compétences
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-sky-100/20 hover:text-sky-600 focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/30 data-[state=open]:bg-accent/30"
                href="#services"
              >
                Services
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-sky-100/20 hover:text-sky-600 focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/30 data-[state=open]:bg-accent/30"
                href="#experience"
              >
                Expérience
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-sky-100/20 hover:text-sky-600 focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/30 data-[state=open]:bg-accent/30"
                href="#contact"
              >
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
