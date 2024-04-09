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
import { Separator } from "@/components/ui/separator";
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
          <div id="root-nav-bar-container" className="border-b fixed top-0 z-50 w-full bg-inherit">
            <div id="root-nav-bar" className="flex h-16 items-center px-4">
              <NavigationMenu id="nav-menu-links">
                <NavigationMenuList id="nav-menu-list-links">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <Button
                          className="rounded"
                          variant="ghost"
                          size="icon"
                          type="button"
                        >
                          <Icons.home className="h-[1.2rem] w-[1.2rem]"/>
                        </Button>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Projects
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/resume" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Resume
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blogs" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Blogs
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <NavigationMenu id="nav-menu-misc">
                  <NavigationMenuList id="nav-menu-list-misc">
                    <NavigationMenuItem>
                      <Link
                        href="http://www.linkedin.com/in/ngjianming"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <Button
                          className="rounded"
                          variant="ghost"
                          size="icon"
                          type="button"
                        >
                          <Linkedin className="h-[1.2rem] w-[1.2rem]"/>
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link
                        href="https://github.com/jianming93/"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        <Button
                          className="rounded"
                          variant="ghost"
                          size="icon"
                          type="button"
                        >
                          <Icons.gitHub className="h-[1.2rem] w-[1.2rem]"/>
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <ModeToggle />
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
          <>
            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
