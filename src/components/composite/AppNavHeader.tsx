import { Container } from "@ui/Container";
import { ROUTES } from "@/config/routes";
import { BrandLogoIcon } from "@/components/brand/BrandLogoIcon";
import { useRouter } from "next/router";
import { Nav, NavLink } from "@ui/Nav";

const navigations = [
  { url: ROUTES.intro.root, content: <BrandLogoIcon className="shrink-0" /> },
  { url: ROUTES.about.root, content: "About" },
  { url: ROUTES.playground.root, content: "Playground" },
];

export const AppNavHeader = () => {
  const router = useRouter();

  return (
    <Nav>
      <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
        {navigations.map(({ url, content }) => (
          <NavLink isActive={router.pathname === url} key={url} href={url}>
            {content}
          </NavLink>
        ))}
      </Container>
    </Nav>
  );
};
