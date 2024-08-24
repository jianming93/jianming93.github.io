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
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="root-container" className="flex min-h-screen w-full flex-col">
            {/* Header */}
            <header className="sticky top-0 flex h-16 items-center gap-4 z-50 border-b bg-background px-4 md:px-6">
              <nav id="root-nav-bar" className="hidden flex-col gap-6 w-full  text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
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
                      <Link href="/experience" legacyBehavior passHref>
                        <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                          Experience
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded shrink-0 md:hidden"
                  >
                    <Icons.menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="text-muted-foreground hover:text-foreground"
                        passHref
                      >
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/projects"
                        className="text-muted-foreground hover:text-foreground"
                        passHref
                      >
                        Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/resume"
                        className="text-muted-foreground hover:text-foreground"
                        passHref
                      >
                        Resume
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/blogs"
                        className="text-muted-foreground hover:text-foreground"
                        passHref
                      >
                        Blogs
                      </Link>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="flex flex-1 items-center space-x-2 justify-end">
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
            </header>
            {/* Main Content */}
            <div className={inter.className}>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
