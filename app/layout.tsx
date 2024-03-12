import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Link from 'next/link'
import { Inter } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { ModeToggle } from "@/components/ui/mode-toggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ng Jian Ming Portfolio",
  description: "Personal portfolio website hosted on Github Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="root-nav-bar-container" className="border-b">
            <div id="root-nav-bar" className="flex h-16 items-center px-4">
              <NavigationMenu id="nav-menu-links">
                <NavigationMenuList id="nav-menu-list-links">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Projects
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/resume" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Resume
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/research" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Research
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <NavigationMenu id="nav-menu-utilities">
                  <NavigationMenuList id="nav-menu-list-utilities">
                    <ModeToggle />
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
          <>
            {children}
          </>
          <footer>
            <div className="py-6 px-32 flex flex-row justify-end border-t-2 w-[100%] absolute bottom-0">
              <Button
                className="mx-2"
                variant="ghost"
                size="icon"
                type="button"
              >
                <Linkedin />
              </Button>
              <Button
                className="mx-2"
                variant="ghost"
                size="icon"
                type="button"
              >
                <Icons.gitHub />
              </Button>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
