type NavProps = React.ComponentPropsWithoutRef<"nav">;

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return <nav className="bg-primary-950 py-6 dark:bg-accent-800" {...props} />;
};
